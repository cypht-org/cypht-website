// Site search for the Cypht website.
// Uses Pagefind (https://pagefind.app, MIT): the index is generated from _site/
// after `cecil build` and queried entirely in the browser — no server, no API key.
// Recent and favorite results are kept in localStorage, like DocSearch.

(function () {
    const PAGEFIND_URL = '/pagefind/pagefind.js';
    const STORAGE_RECENT = 'search:recent';
    const STORAGE_FAVORITES = 'search:favorites';
    const MAX_RECENT = 6;
    const MAX_PAGES = 8;
    const MAX_SUB_RESULTS = 3;

    const modal = document.getElementById('searchModal');
    if (!modal) return;

    const input = document.getElementById('searchInput');
    const body = document.getElementById('searchResults');
    let pagefind = null;
    let lastFocused = null;
    let activeIndex = -1;
    let currentQuery = '';

    // ── Storage (fails silently when localStorage is blocked) ──
    function readList(key) {
        try {
            return JSON.parse(localStorage.getItem(key)) || [];
        } catch (e) {
            return [];
        }
    }

    function writeList(key, list) {
        try {
            localStorage.setItem(key, JSON.stringify(list));
        } catch (e) {
            // Preference cannot be saved; search still works.
        }
    }

    function addRecent(entry) {
        const list = readList(STORAGE_RECENT).filter(item => item.url !== entry.url);
        list.unshift(entry);
        writeList(STORAGE_RECENT, list.slice(0, MAX_RECENT));
    }

    function removeFrom(key, url) {
        writeList(key, readList(key).filter(item => item.url !== url));
    }

    function toggleFavorite(entry) {
        const favorites = readList(STORAGE_FAVORITES);
        if (favorites.some(item => item.url === entry.url)) {
            removeFrom(STORAGE_FAVORITES, entry.url);
        } else {
            favorites.unshift(entry);
            writeList(STORAGE_FAVORITES, favorites);
            removeFrom(STORAGE_RECENT, entry.url);
        }
    }

    // ── Helpers ──
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text == null ? '' : String(text);
        return div.innerHTML;
    }

    // "/documentation/setup/account-setup/" → "Documentation › Setup"
    function sectionFromUrl(url) {
        const parts = url.split(/[?#]/)[0].split('/').filter(Boolean);
        if (parts.length < 2) return '';
        return parts.slice(0, Math.min(parts.length - 1, 2))
            .map(part => part.replace(/[-_]/g, ' ').replace(/^\w/, c => c.toUpperCase()))
            .join(' › ');
    }

    async function loadPagefind() {
        if (pagefind) return pagefind;
        try {
            // Cache-busting query so a failed load (index not built yet) is retried on the next open.
            const module = await import(PAGEFIND_URL + '?t=' + Date.now());
            await module.options({ excerptLength: 18 });
            module.init();
            pagefind = module;
        } catch (e) {
            console.warn('Pagefind index not found. Run `npx pagefind --site _site` after the Cecil build.', e);
        }
        return pagefind;
    }

    // ── Rendering ──
    function itemHtml(entry, options) {
        const icon = options.icon || 'bi-file-earmark-text';
        const actions = options.actions
            ? `<span class="search-item-actions">
                   <button type="button" class="search-item-action" data-action="favorite" aria-label="${options.isFavorite ? 'Remove from favorites' : 'Save to favorites'}" title="${options.isFavorite ? 'Remove from favorites' : 'Save to favorites'}">
                       <i class="bi ${options.isFavorite ? 'bi-star-fill' : 'bi-star'}" aria-hidden="true"></i>
                   </button>
                   <button type="button" class="search-item-action" data-action="remove" aria-label="Remove from history" title="Remove">
                       <i class="bi bi-x-lg" aria-hidden="true"></i>
                   </button>
               </span>`
            : '';
        return `<a class="search-item${options.child ? ' search-item-child' : ''}" href="${escapeHtml(entry.url)}" role="option"
                   data-url="${escapeHtml(entry.url)}" data-title="${escapeHtml(entry.title)}" data-section="${escapeHtml(entry.section || '')}"
                   data-list="${options.list || ''}">
                    <i class="bi ${icon} search-item-icon" aria-hidden="true"></i>
                    <span class="search-item-content">
                        <span class="search-item-title">${escapeHtml(entry.title)}</span>
                        ${options.excerpt ? `<span class="search-item-excerpt">${options.excerpt}</span>` : ''}
                        ${!options.excerpt && entry.section ? `<span class="search-item-section">${escapeHtml(entry.section)}</span>` : ''}
                    </span>
                    ${actions}
                </a>`;
    }

    function renderMessage(html) {
        body.innerHTML = `<div class="search-message">${html}</div>`;
        activeIndex = -1;
    }

    function renderStart() {
        const favorites = readList(STORAGE_FAVORITES);
        const recent = readList(STORAGE_RECENT);
        if (!favorites.length && !recent.length) {
            renderMessage('<i class="bi bi-search" aria-hidden="true"></i><p>Search the documentation, features, modules and more.</p>');
            return;
        }
        let html = '';
        if (recent.length) {
            html += '<div class="search-group"><div class="search-group-title">Recent</div>';
            html += recent.map(e => itemHtml(e, { icon: 'bi-clock-history', actions: true, list: 'recent' })).join('');
            html += '</div>';
        }
        if (favorites.length) {
            html += '<div class="search-group"><div class="search-group-title">Favorites</div>';
            html += favorites.map(e => itemHtml(e, { icon: 'bi-star', actions: true, isFavorite: true, list: 'favorites' })).join('');
            html += '</div>';
        }
        body.innerHTML = html;
        setActive(0);
    }

    async function runSearch(query) {
        currentQuery = query;
        if (!query.trim()) {
            renderStart();
            return;
        }
        const pf = await loadPagefind();
        if (!pf) {
            renderMessage('<p>The search index is not available.</p><p class="search-message-hint">After <code>php cecil.phar build</code>, run <code>npx --yes pagefind@1.4.0 --site _site</code>.</p>');
            return;
        }
        const search = await pf.debouncedSearch(query, {}, 150);
        // A newer keystroke superseded this search.
        if (search === null || query !== currentQuery) return;

        const pages = await Promise.all(search.results.slice(0, MAX_PAGES).map(r => r.data()));
        if (query !== currentQuery) return;

        if (!pages.length) {
            renderMessage(`<p>No results for “<strong>${escapeHtml(query)}</strong>”.</p>`);
            return;
        }

        body.innerHTML = pages.map(page => {
            const entry = {
                url: page.url,
                title: page.meta.title || page.url,
                section: sectionFromUrl(page.url)
            };
            // Sub-results point at headings inside the page; skip the one equal to the page itself.
            const subs = (page.sub_results || [])
                .filter(sub => sub.url !== page.url)
                .slice(0, MAX_SUB_RESULTS);
            let html = `<div class="search-group"><div class="search-group-title">${escapeHtml(entry.section || entry.title)}</div>`;
            html += itemHtml(entry, { excerpt: subs.length ? '' : page.excerpt });
            html += subs.map(sub => itemHtml(
                { url: sub.url, title: sub.title, section: entry.title },
                { icon: 'bi-hash', excerpt: sub.excerpt, child: true }
            )).join('');
            return html + '</div>';
        }).join('');
        setActive(0);
    }

    // ── Keyboard navigation ──
    function items() {
        return Array.from(body.querySelectorAll('.search-item'));
    }

    function setActive(index) {
        const list = items();
        list.forEach(el => {
            el.classList.remove('is-active');
            el.setAttribute('aria-selected', 'false');
        });
        if (!list.length) {
            activeIndex = -1;
            return;
        }
        activeIndex = (index + list.length) % list.length;
        const el = list[activeIndex];
        el.classList.add('is-active');
        el.setAttribute('aria-selected', 'true');
        el.scrollIntoView({ block: 'nearest' });
    }

    function entryFrom(el) {
        return { url: el.dataset.url, title: el.dataset.title, section: el.dataset.section };
    }

    // ── Open / close ──
    function open() {
        if (!modal.hidden) return;
        lastFocused = document.activeElement;
        modal.hidden = false;
        document.body.classList.add('search-open');
        input.value = '';
        currentQuery = '';
        renderStart();
        input.focus();
        loadPagefind();
    }

    function close() {
        if (modal.hidden) return;
        modal.hidden = true;
        document.body.classList.remove('search-open');
        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }

    document.querySelectorAll('[data-search-open]').forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            // Close the mobile offcanvas first if the button lives inside it.
            const offcanvas = btn.closest('.offcanvas');
            if (offcanvas && window.bootstrap) {
                const instance = bootstrap.Offcanvas.getInstance(offcanvas);
                if (instance) instance.hide();
            }
            open();
        });
    });

    modal.querySelectorAll('[data-search-close]').forEach(el => el.addEventListener('click', close));

    input.addEventListener('input', () => runSearch(input.value));

    body.addEventListener('click', event => {
        const item = event.target.closest('.search-item');
        if (!item) return;
        const action = event.target.closest('[data-action]');
        if (action) {
            event.preventDefault();
            const entry = entryFrom(item);
            if (action.dataset.action === 'favorite') toggleFavorite(entry);
            else removeFrom(item.dataset.list === 'favorites' ? STORAGE_FAVORITES : STORAGE_RECENT, entry.url);
            renderStart();
            input.focus();
            return;
        }
        addRecent(entryFrom(item));
        close();
    });

    body.addEventListener('mousemove', event => {
        const item = event.target.closest('.search-item');
        if (item) {
            const index = items().indexOf(item);
            if (index !== activeIndex) setActive(index);
        }
    });

    document.addEventListener('keydown', event => {
        const target = event.target;
        const typing = target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName);

        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            modal.hidden ? open() : close();
            return;
        }
        if (modal.hidden) {
            if (event.key === '/' && !typing) {
                event.preventDefault();
                open();
            }
            return;
        }

        if (event.key === 'Escape') {
            event.preventDefault();
            close();
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            setActive(activeIndex + 1);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setActive(activeIndex - 1);
        } else if (event.key === 'Enter' && target === input) {
            const el = items()[activeIndex];
            if (el) {
                event.preventDefault();
                addRecent(entryFrom(el));
                close();
                window.location.href = el.dataset.url;
            }
        } else if (event.key === 'Tab') {
            // Keep focus inside the dialog.
            const focusable = modal.querySelectorAll('input, button, a[href]');
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    // Show the right shortcut hint (⌘K on Apple devices, Ctrl K elsewhere).
    const isApple = /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
    document.querySelectorAll('[data-search-shortcut]').forEach(el => {
        el.textContent = isApple ? '⌘K' : 'Ctrl K';
    });
})();
