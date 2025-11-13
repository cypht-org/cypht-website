document.addEventListener("DOMContentLoaded", function () {
  //1.  Terminal typing animation
  function initTerminalAnimation() {
    const terminalBody = document.querySelector(".terminal-body");
    if (!terminalBody) return;

    const lines = terminalBody.querySelectorAll(".terminal-line");
    let isAnimating = false;

    function resetTerminal() {
      lines.forEach((line) => {
        line.style.opacity = "0";
        line.style.transform = "translateX(-20px)";
        const command = line.querySelector(".terminal-command");
        if (command) {
          command.style.borderRight = "none";
        }
      });
    }

    function showNextLine() {
      if (isAnimating) return;
      isAnimating = true;

      let currentLine = 0;

      function animateLine() {
        if (currentLine < lines.length) {
          const line = lines[currentLine];
          const command = line.querySelector(".terminal-command");

          // Show the line
          line.style.opacity = "1";
          line.style.transform = "translateX(0)";

          if (command && command.classList.contains("typing-animation")) {
            // Animate typing for command lines
            const text = command.textContent;
            command.textContent = "";
            command.style.borderRight = "2px solid var(--color-primary)";

            let i = 0;
            function typeChar() {
              if (i < text.length) {
                command.textContent += text.charAt(i);
                i++;
                setTimeout(typeChar, Math.random() * 50 + 30); // Random typing speed
              } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                  command.style.borderRight = "none";
                  currentLine++;
                  setTimeout(animateLine, 800);
                }, 1000);
              }
            }

            // Start typing after a short delay
            setTimeout(typeChar, 300);
          } else {
            // Show output lines immediately
            currentLine++;
            setTimeout(animateLine, 1200);
          }
        } else {
          // Animation complete, restart after delay
          isAnimating = false;
          setTimeout(() => {
            resetTerminal();
            setTimeout(showNextLine, 2000);
          }, 4000);
        }
      }

      animateLine();
    }

    // Start animation when terminal is visible
    const terminalObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(showNextLine, 1000);
            terminalObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    terminalObserver.observe(terminalBody);
  }

  //2.  Methods type animation
  const methods = document.querySelectorAll(".install-method-btn button");
  methods.forEach((method) => {
    method.addEventListener("click", function () {
      // Remove active class from all elements
      methods.forEach((m) => m.classList.remove("i-method-active"));
      // Add class to clicked element
      this.classList.add("i-method-active");
      // show selected method list
      show_methods_list(this.getAttribute("data-method"));
    });

    //3. methods List cards
    function show_methods_list(id) {
      const methods_list = document.getElementById("i-methods-list");
      methods_list
        .querySelectorAll(".install-methods-content")
        .forEach((method) => {
          method.style.display = "none";
        });
      document.getElementById(id).style.display = "flex";
    }

    /*
     * Load pages installation
     */
    const docMenus = document.getElementById("guide_left_list");
    const guideContent = document.getElementById("guide-content");

    // Check if elements exist before continuing
    if (docMenus && guideContent) {
      const menuItems = docMenus.querySelectorAll("li a");

      menuItems.forEach((menu) => {
        menu.addEventListener("click", () => {
          // Remove active class from other elements
          menuItems.forEach((item) =>
            item.classList.remove("guide-menu-active")
          );

          // Add active class to clicked element
          menu.classList.add("guide-menu-active");

          // Get data attributes
          //   const method = menu.getAttribute('href').replace('#', '');
          const file = menu.getAttribute("href").replace("#", "");

          // Show selected method list
          //   if (typeof show_methods_list === 'function' && method) {
          //     show_methods_list(method);
          //   }

          // Load md file
          if (file) {
            // console.log(file);
            load_md_file(file);
          }
        });
      });
    }

    /**
     * Very small markdown -> HTML converter for the guide (headings, lists, code, emphasis)
     * This is intentionally limited to keep footprint small.
     */
    function markdownToHtml(markdown) {
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

    // Simple in-memory cache to avoid re-fetching the same docs
    const mdCache = new Map();

    /**
     * Normalize indentation in code blocks by removing common leading whitespace
     * @param {HTMLElement} container Container element to search for code blocks
     */
    function normalizeCodeIndentation(container) {
      const codeBlocks = container.querySelectorAll("pre code");
      codeBlocks.forEach((codeElement) => {
        const text = codeElement.textContent || codeElement.innerText;
        const lines = text.split("\n");

        // Find the minimum indentation (excluding empty lines)
        let minIndent = Infinity;
        for (const line of lines) {
          if (line.trim().length === 0) continue; // Skip empty lines
          const indent = line.match(/^\s*/)[0].length;
          if (indent < minIndent) {
            minIndent = indent;
          }
        }

        // If we found indentation, remove it from all lines
        if (minIndent > 0 && minIndent < Infinity) {
          const normalizedLines = lines.map((line) => {
            if (line.trim().length === 0) return line; // Keep empty lines as-is
            return line.substring(minIndent);
          });

          // Update the text content
          const normalizedText = normalizedLines.join("\n");
          codeElement.textContent = normalizedText;
        }
      });
    }

    /**
     * Load md file from the @installation/ subfolder.
     * Accepts values like: "manuel", "docker", or "@installation/manuel".
     * Renders basic markdown to HTML and injects into guideContent.
     * @param {string} fileName Base name or aliased path
     */
    async function load_md_file(fileName) {
      try {
        if (!guideContent) return;

        // Normalize to subfolder path
        let normalized = (fileName || "").trim();
        if (normalized.startsWith("@installation/")) {
          normalized = normalized.replace("@installation/", "");
        }
        // Drop any extension accidentally provided
        normalized = normalized.replace(/\.md$/i, "");
        const file_path = `/installation/${normalized}.md`;

        // Loading state
        guideContent.innerHTML = '<div class="loading">Loading…</div>';

        // Cache hit
        if (mdCache.has(normalized)) {
          guideContent.innerHTML = mdCache.get(normalized);
          // Normalize code indentation before highlighting
          normalizeCodeIndentation(guideContent);
          // Highlight code blocks with PrismJS
          if (typeof Prism !== "undefined") {
            Prism.highlightAllUnder(guideContent);
          }
          return;
        }

        const response = await fetch(file_path);
        if (!response.ok) {
          throw new Error(
            `Unable to load: ${normalized} (status ${response.status})`
          );
        }

        const html = await response.text();
        mdCache.set(normalized, html);
        guideContent.innerHTML = html;

        // Normalize code indentation before highlighting
        normalizeCodeIndentation(guideContent);

        // Highlight code blocks with PrismJS after content is loaded
        if (typeof Prism !== "undefined") {
          Prism.highlightAllUnder(guideContent);
        }
      } catch (error) {
        console.error("Detailed error:", {
          message: error.message,
          name: error.name,
          stack: error.stack,
        });
        guideContent.innerHTML = `
          <div class="alert alert-danger">
            <h4>Failed to load content</h4>
            <p>${error.message}</p>
          </div>
    `.trim();
      }
    }

    /**
     *  Initial functions
     */
    // 1. Initialize terminal animation
    initTerminalAnimation();
    // 2. Show manual methods list
    show_methods_list("manual");

    //3. load file
    load_md_file("manual");

    // Highlight code when tabs are shown (Bootstrap tab events)
    const tabList = document.querySelectorAll('[data-bs-toggle="tab"]');
    tabList.forEach((tab) => {
      tab.addEventListener("shown.bs.tab", function (event) {
        // Re-highlight code in the newly shown tab
        const targetPane = document.querySelector(
          event.target.getAttribute("data-bs-target")
        );
        if (targetPane) {
          // Normalize code indentation first
          normalizeCodeIndentation(targetPane);
          // Then highlight with PrismJS
          if (typeof Prism !== "undefined") {
            Prism.highlightAllUnder(targetPane);
          }
        }
      });
    });
  });

  // });
});
