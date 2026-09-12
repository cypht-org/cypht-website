# cypht-website

This is the source of the [cypht.org](https://cypht.org/) website. It's a HTML site statically generated with [cecil](https://cecil.app/), with no non-vendor
JavaScript.

Cypht (pronounced "sift") is like a news reader, but for E-mail. Cypht does not replace your existing accounts - it combines them into one. And it's also a news reader.

As of 2024-02-14, www.cypht.org updates from https://github.com/cypht-org/cypht-website/ on a daily cron job.

## How-to

### Build locally

This requires git & PHP 8 to be installed.

```bash
git clone https://github.com/cypht-org/cypht-website.git
cd cypht-website

# Build to _site/
php cecil.phar build  # alt: make build

# Serve/develop on localhost:8000
php cecil.phar serve  # alt: make serve
```

Nix users can use `nix-shell -p php81 gnumake git` to get all requirements to build.

### Update config generator options (data/configOptions.json)

```bash
# In project root
rm data/configOptions.json
php data/fetch.php  # alt: make
```

### Write a documentation page in Markdown

Documentation and integration pages can be written as plain Markdown, with no HTML in the file. Add `format: md` to the
front matter and the layout builds the rest: page title, section separators, the "On this page" navigation and the
previous/next cards.

~~~markdown
---
title: Cypht on YunoHost
description: "Shown in the page metadata."
layout: section/integration
format: md
nav_prev:
  label: Cloudron
  url: /integration/cloudron
nav_next:
  label: Tiki
  url: /integration/tiki
---

## Overview {#overview}

A paragraph with a [link](https://example.com); external links open in a new tab.

:::info
**A callout.** Variants: `:::info`, `:::tip`, `:::warning`, `:::danger`.
:::

:::grid
- **A card**
  Its title is the leading bold, the rest of the item is its text.
- **Another card**
  A card can hold a nested list, a screenshot, and close on a link that becomes its button.
:::

![Alt text](/img/integration/tiki-webmail.webp "A caption turns the image into a screenshot card.")

## Install it {#install}

```bash
sudo yunohost app install cypht
```

:::actions
[A link rendered as a button](/install)
:::

A term
: and its definition, for option and setting references.
~~~

Things worth knowing:

- Every `##` becomes a section, with the dashed separator and an entry in the right-hand navigation. `###` is a
  sub-section: styled, anchored, but kept out of the navigation.
- `{#custom-id}` after a heading keeps a specific anchor. Without it the id is derived from the title, so use it when
  migrating a page that already has links pointing at its sections.
- `toc_labels` maps an anchor to a shorter navigation label, for sections whose title is too long for the column.
- Fenced code blocks get the terminal card and its copy button, including inside a list item. Images get the
  click-to-zoom preview, and a `"title"` after the URL turns one into a captioned card.
- `:::grid` lays its list out as cards, two columns at most, with an odd last card filling its row so a grid never
  leaves a hole. `:::grid-sm` is the same with a tighter gutter. `:::actions` turns its links into buttons.
- **A `:::` block holds a single paragraph and no nested list.** Cecil strips both the blank lines and the leading
  indentation of the lines it collects, so a callout needing two paragraphs has to become two blocks, and a card
  needing a bullet list has to move out of the grid, as a `**bold**` lead followed by an ordinary list.
- `nav_prev`/`nav_next` are used instead of `prev`/`next`, which Cecil reserves for its own section navigation.
- A page with `redirect:` borrows the body of another page and renders it with the same chrome, whatever its format.

Where the styling lives:

- [static/assets/css/doc/tokens.css](static/assets/css/doc/tokens.css): the type scale, the vertical rhythm, the card
  and icon definitions. **Change a value here and every documentation page follows**, whichever format it uses. Icons
  are masked SVG declared as `--doc-icon-*` tokens, so they need no icon font and work in both themes.
- [static/assets/css/doc/markdown.css](static/assets/css/doc/markdown.css): maps the tags Cecil generates onto those
  tokens.
- [static/assets/css/doc/documentation.css](static/assets/css/doc/documentation.css): the same tokens, for the pages
  still written in HTML.
- [layouts/partials/doc_markdown.html.twig](layouts/partials/doc_markdown.html.twig): the page shell.

Pages without `format: md` keep their hand-written HTML, so both formats can coexist during a migration.

## Explanation

### cypht-config-generator-generator

The config generator was originally a project that started out at as [a Node.JS-generated static site to help configure Cypht](https://github.com/denperidge/cypht-config-generator), to have a properly interfaced & mostly self-updating interface to configure your Cypht instance. It downloads, caches & parses the Cypht config files into a static site that outputs a .env. That project has been translated into the PHP-based Cecil generator, into the files below.

- [static/config-generator.js](static/js/config-generator.js): client-side JavaScript
- [pages/config-generator.md](pages/config-generator.md): defines HTML page generation at /config-generator/
- [layouts/partials/config-generator.html.twig](layouts/partials/config-generator.html.twig): generates the config generator from [configOptions.json](data/configOptions.json)
- [data/](data/)
  - [fetch.php](data/fetch.php): generates [data/configOptions.json](data/configOptions.json)
  - [configFiles.json](data/configFiles.json): hand-written list of files to check from the Cypht repository for config options. Used by [fetch.php](data/fetch.php)
  - [configOptions.json](data/configOptions.json): contains all config options in a format useable in [config-generator.html.twig](layouts/partials/config-generator.html.twig). Generated by [# How-to: Update config generator options](#update-config-generator-options-dataconfigoptionsjson)
