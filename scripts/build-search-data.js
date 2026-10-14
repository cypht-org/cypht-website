#!/usr/bin/env node
// Builds data/searchExtra.json: search records for content that is rendered
// client-side (modules, events) or by the layout (config generator), which the
// FlexSearch index template cannot see in the Markdown content.
// Sources of truth stay static/js/module.js, static/js/event.js and
// layouts/partials/config-generator.html.twig. Run with `make search-data`.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

// Evaluates a browser script in a sandbox and returns the requested top-level consts.
function load(file, names) {
  const noop = () => {};
  const sandbox = {
    document: { addEventListener: noop, getElementById: () => null },
    window: { addEventListener: noop },
    setInterval: noop,
    setTimeout: noop,
  };
  vm.createContext(sandbox);
  vm.runInContext(read(file) + "\n;" + `({${names.join(",")}})`, sandbox);
  return vm.runInContext(`({${names.join(",")}})`, sandbox);
}

const clean = (html) =>
  html
    .replace(/<(script|style|svg)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/\{#[\s\S]*?#\}|\{%[\s\S]*?%\}|\{\{[\s\S]*?\}\}/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const records = [];

// Modules
const { modules, typeModules } = load("static/js/module.js", ["modules", "typeModules"]);
for (const m of modules) {
  const type = typeModules.find((t) => t.id === m.type_id);
  const slug = "module-" + m.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  records.push({
    id: slug,
    section: "",
    page: "Modules & Extensions",
    title: `${m.name} module`,
    description: m.description,
    content: [m.description, m.chip, type && type.name].filter(Boolean).join(". "),
    href: `modules/#${slug}`,
  });
}

// Events
const { events, event_types } = load("static/js/event.js", ["events", "event_types"]);
for (const e of events) {
  const type = event_types.find((t) => t.value === e.type_key);
  const slug = "event-" + e.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  records.push({
    id: slug,
    section: "events",
    page: "Events & Community Meetups",
    title: e.title,
    description: (e.subtitle || "").split(/(?<=\.)\s/)[0],
    content: [e.subtitle, type && type.name, e.date, e.location].filter(Boolean).join(". "),
    href: `events/#${slug}`,
  });
}

// Config generator sections
const twig = read("layouts/partials/config-generator.html.twig");
const menuTitles = Object.fromEntries(
  [...twig.matchAll(/title:\s*'([^']+)',\s*href:\s*'#([a-z0-9_]+)'/g)].map((m) => [m[2], m[1]])
);
const parts = twig.split(/<div class="config-content-item" id="([a-z0-9_]+)">/);
for (let i = 1; i < parts.length; i += 2) {
  const id = parts[i];
  const body = parts[i + 1].split(/<div class="config-content-item"/)[0];
  const heading = menuTitles[id];
  if (!heading) continue;
  const options = [...body.matchAll(/<label[^>]*>([\s\S]*?)<\/label>/g)].map((m) => clean(m[1]));
  const text = clean(body.replace(/<button[\s\S]*?<\/button>/g, " "));
  records.push({
    id: `config-generator-${id}`,
    section: "",
    page: "Build Your Configuration",
    title: `Configuration generator: ${heading.trim()}`,
    description: `Generate the ${heading.trim()} settings of your Cypht configuration file.`,
    content: [...new Set(options)].filter(Boolean).join(", ") + ". " + text.slice(0, 2500),
    href: `config-generator/#${id}`,
  });
}

// Environment variables listed in the preview of the generated file
const env = twig.match(/<pre id="env_config">([\s\S]*?)<\/pre>/);
if (env) {
  const names = [...new Set([...env[1].matchAll(/\b([A-Z][A-Z0-9_]{3,})=/g)].map((m) => m[1]))];
  records.push({
    id: "config-generator-env-variables",
    section: "",
    page: "Build Your Configuration",
    title: "Configuration generator: environment variables",
    description: "Environment variables written to the generated Cypht .env configuration file.",
    content: names.join(", "),
    href: "config-generator/",
  });
}

fs.writeFileSync(path.join(root, "data/searchExtra.json"), JSON.stringify(records, null, 2) + "\n");
console.log(`data/searchExtra.json: ${records.length} records`);
