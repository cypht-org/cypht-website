/**
 * Code Copy Button Functionality
 * Dynamically adds copy buttons to code blocks and copyable text blocks
 */
(function () {
  "use strict";

  const CONFIG = {
    codeSelectors:
      "pre code, .code-preview-content pre code, .gc-terminal pre code",
    textSelectors: ".copyable-text",
    buttonClass: "code-copy-btn",
    buttonIcon: '<i class="bi bi-copy"></i>',
    feedbackDuration: 2000,
    observerConfig: {
      childList: true,
      subtree: true,
    },
  };

  /** Debounce delay to avoid feedback loops when MutationObserver reacts to our own DOM insertions. */
  let copyDebounceTimer = null;
  let observer = null;

  function init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initCopyButtons);
    } else {
      initCopyButtons();
    }
    setupMutationObserver();
  }

  function initCopyButtons() {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(initCopyButtonsNow);
    } else {
      setTimeout(initCopyButtonsNow, 0);
    }
  }

  function scheduleInitCopyButtons() {
    if (copyDebounceTimer) clearTimeout(copyDebounceTimer);
    copyDebounceTimer = setTimeout(() => {
      copyDebounceTimer = null;
      initCopyButtons();
    }, 120);
  }

  function initCopyButtonsNow() {
    document.querySelectorAll(CONFIG.codeSelectors).forEach(initCodeBlock);
    document.querySelectorAll(CONFIG.textSelectors).forEach(initCopyableText);
  }

  /**
   * Terminal: use a single .gc-terminal-inner wrapper (position: relative) for <pre> + button.
   * Avoids repeated appendChild on the parent, which caused duplicate buttons when MutationObserver fired.
   */
  function initCodeBlock(codeBlock) {
    const pre = codeBlock.closest("pre");
    const codePreviewContent = pre && pre.closest(".code-preview-content");

    if (codePreviewContent?.querySelector(".gc-terminal-inner")) return;
    if (codeBlock.closest(`.${CONFIG.buttonClass}-container`)) return;
    if (codeBlock.closest(".code-card")) return;

    /* Do not assign to codeBlock.textContent - it removes highlight.js <span class="hljs-*"> tokens. */
    const normalizedCode = normalizeCodeText(codeBlock.textContent);

    if (codePreviewContent && !codePreviewContent.querySelector(".code-card")) {
      const isTerminal = codePreviewContent.classList.contains("gc-terminal");

      if (isTerminal) {
        const wrap = document.createElement("div");
        wrap.className = "gc-terminal-inner";
        wrap.appendChild(pre);

        const button = createCopyButton();
        button.classList.add("gc-terminal-copy-btn");
        wrap.appendChild(button);

        codePreviewContent.replaceChildren(wrap);

        button.addEventListener("click", () =>
          copyToClipboard(normalizedCode, button),
        );
        return;
      }

      const codeCard = document.createElement("div");
      codeCard.className = "code-card";

      const header = document.createElement("div");
      header.className = "code-card-header";

      const filePath = codePreviewContent.getAttribute("data-file");
      if (filePath) {
        const path = document.createElement("span");
        path.className = "code-card-path";
        path.textContent = filePath;
        header.appendChild(path);
      }

      const button = createCopyButton();
      button.classList.add("code-card-copy");
      header.appendChild(button);

      const body = document.createElement("div");
      body.className = "code-card-body";
      body.appendChild(pre);

      codeCard.appendChild(header);
      codeCard.appendChild(body);

      codePreviewContent.replaceChildren(codeCard);

      button.addEventListener("click", () =>
        copyToClipboard(normalizedCode, button),
      );
      return;
    }

    const container = document.createElement("div");
    container.className = `${CONFIG.buttonClass}-container`;
    codeBlock.parentNode.insertBefore(container, codeBlock);
    container.appendChild(codeBlock);

    const button = createCopyButton();
    container.appendChild(button);

    button.addEventListener("click", () =>
      copyToClipboard(normalizedCode, button),
    );
  }

  function normalizeCodeText(text) {
    return text.replace(/^\s*\n/, "").replace(/\n\s*$/, "");
  }

  function initCopyableText(textBlock) {
    if (textBlock.querySelector(`.${CONFIG.buttonClass}`)) return;

    const button = createCopyButton();
    textBlock.style.position = "relative";
    textBlock.appendChild(button);

    button.addEventListener("click", () => {
      const textToCopy = textBlock.textContent.trim();
      copyToClipboard(textToCopy, button);
    });
  }

  function createCopyButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = CONFIG.buttonClass;
    button.setAttribute("aria-label", "Copy to clipboard");
    button.setAttribute("title", "Copy to clipboard");
    button.innerHTML = CONFIG.buttonIcon;
    return button;
  }

  async function copyToClipboard(text, button) {
    try {
      await navigator.clipboard.writeText(text);
      showFeedback(button, true);
    } catch (err) {
      console.error("Failed to copy:", err);
      try {
        fallbackCopyToClipboard(text, button);
      } catch (fallbackErr) {
        console.error("Fallback copy failed:", fallbackErr);
        showFeedback(button, false);
      }
    }
  }

  function fallbackCopyToClipboard(text, button) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = 0;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      showFeedback(button, successful);
    } catch (err) {
      throw err;
    } finally {
      document.body.removeChild(textArea);
    }
  }

  function showFeedback(button, success) {
    const icon = button.querySelector("i");
    const originalIcon = icon.className;

    button.classList.toggle("success", success);
    button.classList.toggle("error", !success);
    icon.className = success ? "bi bi-check-lg" : "bi bi-x-lg";

    setTimeout(() => {
      button.classList.remove("success", "error");
      icon.className = originalIcon;
    }, CONFIG.feedbackDuration);
  }

  function setupMutationObserver() {
    if (observer) return;

    observer = new MutationObserver(() => {
      scheduleInitCopyButtons();
    });

    observer.observe(document.documentElement, CONFIG.observerConfig);
  }

  init();

  window.initCodeCopyButtons = initCopyButtons;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      init,
      copyToClipboard,
      initCopyButtons,
    };
  }
})();
