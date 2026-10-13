/*!
 * FlexSearch component theme for Cecil
 * https://github.com/Cecilapp/theme-flexsearch
 */
(function () {
  'use strict';

  var dialog = document.getElementById('flexsearch-dialog');
  var data = document.getElementById('flexsearch-config');
  if (!dialog || !data || !dialog.showModal) { return; }

  var CONFIG = JSON.parse(data.textContent);
  var OPTIONS = CONFIG.options;
  var I18N = CONFIG.i18n;
  var input = document.getElementById('flexsearch-input');
  var results = document.getElementById('flexsearch-results');
  var status = document.getElementById('flexsearch-status');
  var close = document.getElementById('flexsearch-close');

  var sections = []; // result groups, in the order of the index
  var indexes = null; // one FlexSearch index per section
  var loading = null;
  var hits = [];
  var cursor = -1;
  var timer = null;

  // macOS shows the ⌘ key instead of Ctrl
  if (navigator.platform && navigator.platform.indexOf('Mac') === 0) {
    var mods = document.querySelectorAll('.flexsearch-kbd-mod');
    for (var m = 0; m < mods.length; m++) { mods[m].textContent = '⌘'; }
  }

  // the dialog must live outside of its container (e.g. a fixed header) to not inherit its styles
  document.body.appendChild(dialog);

  function script(src) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement('script');
      el.src = src;
      el.onload = resolve;
      el.onerror = function () { reject(new Error('Unable to load ' + src)); };
      document.head.appendChild(el);
    });
  }

  function load() {
    if (loading) { return loading; }
    setStatus(I18N.loading);
    loading = Promise.all([
      window.FlexSearch ? Promise.resolve() : script(CONFIG.library),
      fetch(CONFIG.index).then(function (response) {
        if (!response.ok) { throw new Error('Unable to load ' + CONFIG.index); }
        return response.json();
      })
    ]).then(function (values) {
      var docs = values[1].documents;
      sections = values[1].sections;
      // an index per section, so each group is ranked and limited on its own
      var idx = {};
      // indexed fields, weighted by their resolution (0 skips the field)
      var fields = [];
      for (var field in OPTIONS.fields) {
        if (OPTIONS.fields[field] > 0) { fields.push({ field: field, resolution: OPTIONS.fields[field] }); }
      }
      for (var s = 0; s < sections.length; s++) {
        idx[sections[s].name] = new FlexSearch.Document({
          tokenize: OPTIONS.tokenize,
          encoder: FlexSearch.Charset[OPTIONS.encoder] || FlexSearch.Charset.Normalize,
          document: {
            id: 'id',
            store: true,
            index: fields
          }
        });
      }
      for (var i = 0; i < docs.length; i++) {
        if (idx[docs[i].section]) { idx[docs[i].section].add(docs[i]); }
      }
      indexes = idx;
      search();
    }).catch(function (error) {
      console.error(error);
      setStatus(I18N.error);
    });
    return loading;
  }

  function setStatus(text) {
    status.textContent = text || '';
    status.hidden = !text;
  }

  // escapes indexed text, but keeps the highlighting marks
  function escape(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/&lt;(\/?)mark&gt;/g, '<$1mark>');
  }

  function snippet(hit) {
    var highlight = hit.highlight || {};
    var text = highlight.description || highlight.content || hit.doc.description || hit.doc.content || '';
    return text.length > OPTIONS.snippet && text.indexOf('<mark>') === -1 ? text.slice(0, OPTIONS.snippet) + '…' : text;
  }

  function query(section, text, suggest) {
    // `limit` applies to each field: merged results can exceed it
    return indexes[section.name].search({
      query: text,
      limit: section.limit,
      enrich: true,
      merge: true,
      suggest: suggest,
      highlight: { template: '<mark>$1</mark>', boundary: OPTIONS.boundary, merge: true, clip: false }
    }).slice(0, section.limit);
  }

  function search() {
    var text = input.value.trim();
    results.innerHTML = '';
    cursor = -1;
    hits = [];
    input.setAttribute('aria-expanded', 'false');
    if (text.length < OPTIONS.min_length) { setStatus(I18N.prompt); return; }
    if (!indexes) { load(); return; }
    for (var s = 0; s < sections.length; s++) {
      // strict first, then fall back to fuzzy matching when nothing matches
      var found = query(sections[s], text, false);
      if (!found.length && OPTIONS.suggest) { found = query(sections[s], text, true); }
      if (!found.length) { continue; }
      results.appendChild(group(sections[s], found, hits.length));
      hits = hits.concat(found);
    }
    if (!hits.length) { setStatus(I18N.empty); return; }
    setStatus(null);
    input.setAttribute('aria-expanded', 'true');
    select(0);
  }

  // results of a section, under its title; `offset` keeps a flat numbering across groups
  function group(section, found, offset) {
    var li = document.createElement('li');
    li.className = 'flexsearch-group';
    li.setAttribute('role', 'group');
    li.setAttribute('aria-labelledby', 'flexsearch-group-' + section.name);
    var title = document.createElement('span');
    title.className = 'flexsearch-group-title';
    title.id = 'flexsearch-group-' + section.name;
    title.textContent = section.title;
    var ul = document.createElement('ul');
    ul.className = 'flexsearch-group-results';
    ul.setAttribute('role', 'none');
    for (var i = 0; i < found.length; i++) { ul.appendChild(item(found[i], offset + i)); }
    li.appendChild(title);
    li.appendChild(ul);
    return li;
  }

  // dated records (blog posts) show their date instead of their breadcrumb
  function context(doc) {
    if (!doc.date) { return doc.page; }
    return new Date(doc.date + 'T00:00:00').toLocaleDateString(CONFIG.language, { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function item(hit, i) {
    var li = document.createElement('li');
    li.className = 'flexsearch-result';
    li.id = 'flexsearch-result-' + i;
    li.setAttribute('role', 'option');
    var a = document.createElement('a');
    a.className = 'flexsearch-result-link';
    a.href = CONFIG.base + hit.doc.href;
    var text = snippet(hit);
    a.innerHTML = '<span class="flexsearch-result-page">' + escape(context(hit.doc)) + '</span>'
      + '<span class="flexsearch-result-title">' + escape((hit.highlight || {}).title || hit.doc.title) + '</span>'
      + (text ? '<span class="flexsearch-result-snippet">' + escape(text) + '</span>' : '');
    a.addEventListener('mouseenter', function () { select(i); });
    li.appendChild(a);
    return li;
  }

  function select(i) {
    var items = results.querySelectorAll('.flexsearch-result');
    if (!items.length) { return; }
    if (cursor > -1 && items[cursor]) { items[cursor].classList.remove('is-selected'); }
    cursor = (i + items.length) % items.length;
    items[cursor].classList.add('is-selected');
    input.setAttribute('aria-activedescendant', items[cursor].id);
    items[cursor].scrollIntoView({ block: 'nearest' });
  }

  function open() {
    load();
    dialog.showModal();
    input.value = '';
    setStatus(I18N.prompt);
    results.innerHTML = '';
    input.focus();
  }

  // any `[data-flexsearch-open]` element opens the dialog; hovering it preloads the index
  document.addEventListener('click', function (event) {
    if (event.target.closest && event.target.closest('[data-flexsearch-open]')) {
      event.preventDefault();
      open();
    }
  });
  document.addEventListener('pointerover', function preload(event) {
    if (event.target.closest && event.target.closest('[data-flexsearch-open]')) {
      document.removeEventListener('pointerover', preload);
      load();
    }
  });
  close.addEventListener('click', function () { dialog.close(); });

  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(search, OPTIONS.delay);
  });

  input.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown') { event.preventDefault(); select(cursor + 1); }
    else if (event.key === 'ArrowUp') { event.preventDefault(); select(cursor - 1); }
    else if (event.key === 'Enter' && cursor > -1 && hits[cursor]) {
      event.preventDefault();
      window.location.href = CONFIG.base + hits[cursor].doc.href;
    }
  });

  // Ctrl+K / ⌘K (`hotkey` option) opens the dialog from anywhere
  if (CONFIG.hotkey) {
    document.addEventListener('keydown', function (event) {
      if (event.key && event.key.toLowerCase() === String(CONFIG.hotkey).toLowerCase() && (event.metaKey || event.ctrlKey) && !dialog.open) {
        event.preventDefault();
        open();
      }
    });
  }

  // clicking the backdrop closes the dialog
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) { dialog.close(); }
  });
})();
