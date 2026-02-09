/**
 * Code Copy Button Functionality
 * Dynamically adds copy buttons to code blocks and copyable text blocks
 */
(function () {
  "use strict";

  // Configuration
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

  let observer = null;

  /**
   * Main initialization
   */
  function init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initCopyButtons);
    } else {
      initCopyButtons();
    }
    setupMutationObserver();
  }

  /**
   * Initialize copy buttons for all code and text blocks
   */
  function initCopyButtons() {
    // Use requestIdleCallback for non-blocking initialization
    if ("requestIdleCallback" in window) {
      requestIdleCallback(initCopyButtonsNow);
    } else {
      setTimeout(initCopyButtonsNow, 0);
    }
  }

  function initCopyButtonsNow() {
    // Initialize code blocks
    document.querySelectorAll(CONFIG.codeSelectors).forEach(initCodeBlock);

    // Initialize copyable text blocks
    document.querySelectorAll(CONFIG.textSelectors).forEach(initCopyableText);
  }

  /**
   * Initialize a single code block
   */
  function initCodeBlock(codeBlock) {
    if (codeBlock.closest(`.${CONFIG.buttonClass}-container`)) return;

    const container = document.createElement("div");
    container.className = `${CONFIG.buttonClass}-container`;
    codeBlock.parentNode.insertBefore(container, codeBlock);
    container.appendChild(codeBlock);

    const button = createCopyButton();
    container.appendChild(button);

    button.addEventListener("click", () =>
      copyToClipboard(codeBlock.textContent, button)
    );
  }

  /**
   * Initialize a copyable text block
   */
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

  /**
   * Create a copy button element
   */
  function createCopyButton() {
    const button = document.createElement("button");
    button.className = CONFIG.buttonClass;
    button.setAttribute("aria-label", "Copy to clipboard");
    button.setAttribute("title", "Copy to clipboard");
    button.innerHTML = CONFIG.buttonIcon;
    return button;
  }

  /**
   * Copy text to clipboard
   */
  async function copyToClipboard(text, button) {
    try {
      await navigator.clipboard.writeText(text);
      showFeedback(button, true);
    } catch (err) {
      console.error("Failed to copy:", err);
      try {
        fallbackCopyToClipboard(text, button);
      } catch (err) {
        console.error("Fallback copy failed:", err);
        showFeedback(button, false);
      }
    }
  }

  /**
   * Fallback copy method for older browsers
   */
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

  /**
   * Show feedback when text is copied
   */
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

  /**
   * Setup mutation observer for dynamically added content
   */
  function setupMutationObserver() {
    if (observer) return;

    observer = new MutationObserver((mutations) => {
      if (document.body && !document.body.matches("body")) return;

      let shouldInit = mutations.some(
        (mutation) =>
          mutation.addedNodes.length > 0 ||
          (mutation.attributeName === "class" &&
            (mutation.target.matches(CONFIG.codeSelectors) ||
              mutation.target.matches(CONFIG.textSelectors)))
      );

      if (shouldInit) {
        initCopyButtons();
      }
    });

    observer.observe(document.documentElement, CONFIG.observerConfig);
  }

  // Start the initialization
  init();

  // Export for testing
  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      init,
      copyToClipboard,
      initCopyButtons,
    };
  }
})();
