export class UtilsFn {
  /**
   * Very small markdown -> HTML converter for the guide (headings, lists, code, emphasis)
   * This is intentionally limited to keep footprint small.
   */
  static markdown_to_html(markdown) {
    {
      const escapeHtml = (str) =>
        str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

      // Handle fenced code blocks ```
      let html = markdown.replace(/```([\s\S]*?)```/g, (m, code) => {
        return `<pre><code>${escapeHtml(code).trim()}</code></pre>`;
      });

      // Inline code `code`
      html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

      // Headings # to ######
      html = html
        .replace(/^######\s+(.*)$/gm, "<h6>$1</h6>")
        .replace(/^#####\s+(.*)$/gm, "<h5>$1</h5>")
        .replace(/^####\s+(.*)$/gm, "<h4>$1</h4>")
        .replace(/^###\s+(.*)$/gm, "<h3>$1</h3>")
        .replace(/^##\s+(.*)$/gm, "<h2>$1</h2>")
        .replace(/^#\s+(.*)$/gm, "<h1>$1</h1>");

      // Bold and italic
      html = html
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>");

      // Lists
      html = html.replace(
        /^(?:- |\* )(.*)(?:\n(?:(?:- |\* ).*)+)*/gm,
        (block) => {
          const items = block
            .split(/\n/)
            .map((line) => line.replace(/^(?:- |\* )/, "").trim());
          return `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
        }
      );

      // Paragraphs (naive): wrap remaining lines that aren't block tags
      html = html
        .split(/\n{2,}/)
        .map((chunk) => {
          const isBlock = /<(h\d|ul|pre|blockquote|table|p)/.test(chunk.trim());
          if (isBlock) return chunk;
          const lines = chunk.split(/\n/).filter(Boolean);
          return lines.map((line) => `<p>${line}</p>`).join("");
        })
        .join("");

      return html;
    }
  }

  /**
   * Get menu list & load md file
   * @param {HTMLElement} menus_list - The menu list element
   * @param {HTMLElement} main_content - The main content element
   * @param {string} folder_path - The folder path
   * @param {string} active_class - The active class
   */
  static markdown_menu_list(
    menus_list, // li list element
    main_content, // main content element
    folder_path, // folder path
    active_class // active class
  ) {
    const menu_container =
      typeof menus_list === "string"
        ? document.getElementById(menus_list)
        : menus_list;
    const content =
      typeof main_content === "string"
        ? document.querySelector(main_content)
        : main_content;

    if (!menu_container || !content) {
      return;
    }

    const menu_items = Array.from(menu_container.querySelectorAll("a"));
    if (!menu_items.length) {
      return;
    }

    let current_doc = null;

    const set_active = (target) => {
      if (!active_class) return;
      menu_items.forEach((item) => item.classList.remove(active_class));
      target.classList.add(active_class);
    };

    const resolve_doc_name = (menu) => {
      const datasetDoc = menu.dataset.doc || "";
      const hrefDoc = menu.getAttribute("href") || "";

      const candidate = datasetDoc || hrefDoc;
      if (!candidate || candidate === "#") {
        return "";
      }

      return candidate.replace(/^#/, "").trim();
    };

    const load_for_menu = (menu) => {
      const doc_name = resolve_doc_name(menu);
      if (!doc_name || doc_name === current_doc) {
        return;
      }

      current_doc = doc_name;
      set_active(menu);
      this.load_md_file(folder_path, doc_name, content);
    };

    menu_items.forEach((menu) => {
      menu.addEventListener("click", (event) => {
        if (event) {
          event.preventDefault();
        }
        load_for_menu(menu);
      });
    });

    const initial =
      menu_items.find((item) => item.classList.contains(active_class)) ||
      menu_items[0];

    if (initial) {
      load_for_menu(initial);
    }
  }

  /**
   * Load md file from the folder path
   * @param {string} folder_path - The folder path
   * @param {string} file_name - The file name
   * @param {HTMLElement} content - The content element
   */
 static async load_md_file(folder_path, file_name, container) {
  if (!container || !file_name) return;

  try {
    // Normalize filename (remove .md if present)
    const normalized = file_name.trim().replace(/\.md$/i, "");
    const file_path = `/${folder_path}/${normalized}.md`;

    // Loading state
    container.innerHTML = `<div class="loading">Loading…</div>`;

    const response = await fetch(file_path);
    if (!response.ok) {
      throw new Error(`Unable to load ${normalized}.html (${response.status})`);
    }

    const html = await response.text();
    container.innerHTML = html;

    // Highlight code blocks if needed
    if (typeof hljs !== "undefined") {
      container.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block);
      });
    }
  } catch (error) {
    container.innerHTML = `
      <div class="alert alert-danger">
        <h4>Failed to load content</h4>
        <p>${error.message}</p>
      </div>
    `;
    console.error(error);
  }
}

  static custom_select(select_btn, select_menu, select_default = false) {
    const btn = document.querySelector(select_btn);
    const menu = document.querySelector(select_menu);

    if (!btn || !menu) {
      console.warn(
        "[UtilsFn.custom_select] Bouton ou menu introuvable.",
        select_btn,
        select_menu
      );
      return;
    }

    const selectedText =
      btn.querySelector(".selected-text") ||
      document.querySelector(`${select_btn} .selected-text`);
    const items = Array.from(menu.querySelectorAll("li"));

    if (btn.tagName.toLowerCase() === "button" && !btn.getAttribute("type")) {
      btn.setAttribute("type", "button");
    }

    if (!btn.id) {
      btn.id = `custom-select-btn-${Math.random().toString(36).slice(2, 8)}`;
    }

    if (!menu.id) {
      menu.id = `custom-select-menu-${Math.random().toString(36).slice(2, 8)}`;
    }

    btn.setAttribute("aria-haspopup", "listbox");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", menu.id);
    menu.setAttribute("role", "listbox");
    menu.setAttribute("aria-labelledby", btn.id);
    if (!menu.hasAttribute("tabindex")) {
      menu.setAttribute("tabindex", "-1");
    }

    const applySelection = (item) => {
      if (!item) return;
      const label = (item.dataset.label || item.textContent || "").trim();
      const itemValue = item.dataset.value || label;

      if (selectedText) {
        selectedText.textContent = label;
        selectedText.classList.remove("selected-placeholder");
      }

      btn.dataset.value = itemValue;
      btn.setAttribute("data-label", label);
      items.forEach((el) => el.classList.remove("selected"));
      item.classList.add("selected");
    };

    btn.addEventListener("click", () => {
      const willOpen = !menu.classList.contains("show");
      UtilsFn.close_other_selects(btn);
      btn.classList.toggle("active", willOpen);
      menu.classList.toggle("show", willOpen);
      btn.setAttribute("aria-expanded", String(willOpen));
      if (willOpen) {
        menu.focus({ preventScroll: true });
      }
    });

    items.forEach((item) => {
      item.addEventListener("click", () => {
        applySelection(item);
        btn.classList.remove("active");
        menu.classList.remove("show");
        btn.setAttribute("aria-expanded", "false");
        btn.focus({ preventScroll: true });
      });
    });

    const handleDocumentClick = (event) => {
      if (
        !btn.contains(event.target) &&
        !menu.contains(event.target) &&
        menu.classList.contains("show")
      ) {
        btn.classList.remove("active");
        menu.classList.remove("show");
        btn.setAttribute("aria-expanded", "false");
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape" && menu.classList.contains("show")) {
        btn.classList.remove("active");
        menu.classList.remove("show");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleEscape);

    if (select_default && items.length) {
      applySelection(items[0]);
    }
  }

  static close_other_selects(activeBtn) {
    document.querySelectorAll(".select-btn").forEach((btn) => {
      if (btn !== activeBtn) {
        btn.classList.remove("active");
        const menu = btn.nextElementSibling;
        if (menu && menu.classList) {
          menu.classList.remove("show");
        }
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /**
   * Get current date and time in Unix date format: "Sun Dec 14 23:03:01 2025"
   * @returns {string} Formatted date string
   */
  static get_current_datetime() {
    const now = new Date();
    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const year = now.getFullYear();
    
    return `${day} ${month} ${date} ${hours}:${minutes}:${seconds} ${year}`;
  }
}