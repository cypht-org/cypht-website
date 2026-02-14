import { UtilsFn } from "./utils_fn.js";

document.addEventListener("DOMContentLoaded", function () {
  //1.  Terminal typing animation - with loop
  let animationTimeouts = [];
  let isAnimating = false;

  function clearAllTimeouts() {
    animationTimeouts.forEach((timeout) => clearTimeout(timeout));
    animationTimeouts = [];
  }

  //+- 2
  function resetTerminal() {
    const terminalBody = document.querySelector(".terminal-body");
    if (!terminalBody) return;

    const lines = terminalBody.querySelectorAll(".terminal-line");
    const commands = terminalBody.querySelectorAll(".cmd");
    const outputs = terminalBody.querySelectorAll(".output");

    // Reset all lines - remove inline styles and classes to allow CSS animations to restart
    lines.forEach((line) => {
      // Remove inline styles
      line.style.opacity = "";
      line.style.transform = "";
      line.style.animation = "";
      // Remove and re-add classes to force CSS animation restart
      const classes = Array.from(line.classList);
      line.className = "";
      // Force reflow
      void line.offsetHeight;
      // Restore classes
      line.className = classes.join(" ");
    });

    // Reset all commands
    commands.forEach((cmd) => {
      cmd.textContent = "";
      cmd.style.opacity = "";
      cmd.style.animation = "";
      cmd.classList.remove("typing-cursor");
      // Force reflow
      void cmd.offsetHeight;
    });

    // Reset all outputs
    outputs.forEach((output) => {
      output.style.opacity = "";
      output.style.transform = "";
      output.style.animation = "";
      // Force reflow
      void output.offsetHeight;
    });
  }

  //+- 3
  function initTerminalTyping() {
    if (isAnimating) return;
    isAnimating = true;
    clearAllTimeouts();

    const terminalBody = document.querySelector(".terminal-body");
    if (!terminalBody) {
      isAnimating = false;
      return;
    }

    const commands = terminalBody.querySelectorAll(".cmd");
    if (commands.length === 0) {
      isAnimating = false;
      return;
    }

    // Store original text and prepare for typing animation
    commands.forEach((cmd) => {
      const originalText = cmd.textContent.trim();
      if (!originalText && cmd.getAttribute("data-original-text")) {
        // Use stored text if current is empty
        cmd.textContent = "";
      } else if (originalText) {
        // Store original text if not already stored
        if (!cmd.getAttribute("data-original-text")) {
          cmd.setAttribute("data-original-text", originalText);
        }
        cmd.textContent = "";
      }
      // Keep opacity 0 until typing starts
      cmd.style.opacity = "0";
    });

    // Function to type a command
    function typeCommand(cmdElement, delay = 0) {
      const timeout = setTimeout(() => {
        const originalText = cmdElement.getAttribute("data-original-text");
        if (!originalText) return;

        // Show command and add cursor when typing starts
        cmdElement.style.opacity = "1";
        cmdElement.classList.add("typing-cursor");

        let index = 0;
        const typingSpeed = 30; // ms per character

        function typeChar() {
          if (index < originalText.length) {
            cmdElement.textContent += originalText.charAt(index);
            index++;
            const charTimeout = setTimeout(typeChar, typingSpeed);
            animationTimeouts.push(charTimeout);
          } else {
            // Remove cursor after typing completes
            const cursorTimeout = setTimeout(() => {
              cmdElement.classList.remove("typing-cursor");
            }, 300);
            animationTimeouts.push(cursorTimeout);
          }
        }

        typeChar();
      }, delay);
      animationTimeouts.push(timeout);
    }

    // Get delay for each step with natural progression
    function getDelay(step) {
      const baseDelays = {
        "step-1": 500,    // First command starts after 500ms
        "step-2": 3500,   // Second command after first completes
        "step-3": 6500,   // Third command after second completes
        "step-4": 9500,   // Fourth command after third completes
        "step-1-out": 2500, // Output for first command
        "step-2-out": 0,   // No output for second command
        "step-3-out": 7500, // Output for third command
        "step-4-out": 11000 // Output for fourth command
      };
      return baseDelays[step] || 0;
    }

    // Calculate total animation duration
    const lastCommand = 14000; // Total duration for all animations (14 seconds)
    const totalDuration = lastCommand + 2000; // Add 2s buffer for final display

    // Start animations for each element with proper sequencing
    document.querySelectorAll('.terminal-line').forEach((line) => {
      const stepClass = Array.from(line.classList).find(cls => cls.startsWith('step-'));
      if (stepClass) {
        const delay = getDelay(stepClass);
        const timeout = setTimeout(() => {
          // Show the line
          line.style.opacity = '1';
          line.style.transform = 'translateY(0)';
          
          // If it's a command line, start typing
          const cmd = line.querySelector('.cmd');
          if (cmd) {
            const originalText = cmd.getAttribute('data-original-text') || cmd.textContent;
            cmd.setAttribute('data-original-text', originalText);
            cmd.textContent = '';
            typeCommand(cmd, 0);
          }
        }, delay);
        animationTimeouts.push(timeout);
      }
    });

    // Reset and restart animation after completion
    const restartTimeout = setTimeout(() => {
      isAnimating = false;
      resetTerminal();
      // Wait a bit before restarting to allow reset to complete
      const restartDelay = setTimeout(() => {
        // Force reflow to ensure CSS animations restart
        const terminalBody = document.querySelector(".terminal-body");
        if (terminalBody) {
          void terminalBody.offsetHeight;
        }
        initTerminalTyping();
      }, 1500);
      animationTimeouts.push(restartDelay);
    }, totalDuration);
    animationTimeouts.push(restartTimeout);
  }

  //+- 4 Cleanup function
  function cleanup() {
    clearAllTimeouts();
    isAnimating = false;
  }

  //+- 5 Highlight code when tabs are shown (Bootstrap tab events)
  function tabs_flow() {
    const tabList = document.querySelectorAll('[data-bs-toggle="tab"]');
    tabList.forEach((tab) => {
      tab.addEventListener("shown.bs.tab", function (event) {
        // Re-highlight code in the newly shown tab
        const targetPane = document.querySelector(
          event.target.getAttribute("data-bs-target")
        );
        // if (targetPane) {
        // Normalize code indentation first
        // normalizeCodeIndentation(targetPane);
        // // Then highlight with PrismJS
        // if (typeof Prism !== "undefined") {
        //   Prism.highlightAllUnder(targetPane);
        // }
        // }
      });
    });
  }

  //+- 6 Load documentation
  function updateActiveMenu() {
    const menuItems = document.querySelectorAll("#ga-content-nav a");

    if (menuItems.length === 0) {
      return;
    }

    // Récupérer tous les IDs des liens du menu
    const sectionIds = Array.from(menuItems)
      .map((item) => {
        const href = item.getAttribute("href");
        return href && href.startsWith("#") ? href.substring(1) : null;
      })
      .filter((id) => id !== null);

    if (sectionIds.length === 0) {
      return;
    }

    // Trouver tous les éléments correspondants (div, h3, h4, etc. avec ces IDs)
    const sections = sectionIds
      .map((id) => {
        // Chercher dans .guide-left pour les sections principales et sous-sections
        return (
          document.querySelector(`.guide-left #${id}`) ||
          document.querySelector(`.guide-left [id="${id}"]`)
        );
      })
      .filter((el) => el !== null);

    if (sections.length === 0) {
      return;
    }

    // Offset pour le calcul de la position (prendre en compte le header/navbar)
    const offset = 150;
    let currentSection = "";
    let minDistance = Infinity;

    // Trouver la section la plus proche du haut de la fenêtre
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionId = section.getAttribute("id");

      if (!sectionId) return;

      // Si la section est visible dans la fenêtre ou juste au-dessus
      if (sectionTop <= offset + 100) {
        const distance = Math.abs(sectionTop - offset);
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = "#" + sectionId;
        }
      }
    });

    // Si aucune section n'est trouvée et qu'on est en haut de la page, utiliser la première
    if (!currentSection && window.scrollY < 200) {
      const firstSection = sections[0];
      if (firstSection) {
        const firstSectionId = firstSection.getAttribute("id");
        if (firstSectionId) {
          currentSection = "#" + firstSectionId;
        }
      }
    }

    // Si toujours aucune section, trouver celle qui est la plus proche du haut
    if (!currentSection && sections.length > 0) {
      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);
        if (distance < closestDistance && rect.top < window.innerHeight) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        const sectionId = closestSection.getAttribute("id");
        if (sectionId) {
          currentSection = "#" + sectionId;
        }
      }
    }

    // Mettre à jour les classes actives
    menuItems.forEach((item) => {
      const href = item.getAttribute("href");
      if (href && href.startsWith("#")) {
        item.classList.remove("guide-page-menu-active");
        if (href === currentSection) {
          item.classList.add("guide-page-menu-active");
        }
      }
    });
  }

  //+- 7 Load installation list menu
  const mobi_menu_list = document.getElementById("inst_list_menu");
  mobi_menu_list.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName === "LI") {
      const selected_value = e.target.dataset.value;
      UtilsFn.load_md_file(
        "installation",
        selected_value,
        document.querySelector("#guide_content")
      );
    }
  });

  // Cleanup on page unload
  window.addEventListener("beforeunload", cleanup);

  // Initialize typing animation when terminal is visible
  const terminalObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initTerminalTyping();
          terminalObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  const terminalWindow = document.querySelector(".terminal-window");
  if (terminalWindow) {
    terminalObserver.observe(terminalWindow);
  }

  // Fallback: initialize after a short delay if observer doesn't trigger
  setTimeout(() => {
    if (
      document.querySelector(".terminal-body .cmd:not([data-original-text])")
    ) {
      initTerminalTyping();
    }
  }, 1000);

  //2.  Methods type animation
  const methods = document.querySelectorAll(".install-method-btn button");
  methods.forEach((method) => {
    method.addEventListener("click", function () {
      // Remove active class from all elements
      methods.forEach((m) => m.classList.remove("guide-menu-active"));
      // Add class to clicked element
      this.classList.add("guide-menu-active");
      // show selected method list
      UtilsFn.load_md_file(
        "installation",
        this.getAttribute("data-method"),
        document.querySelector("#guide_content")
      );
      // show_methods_list(this.getAttribute("data-method"));
    });
  });

  // Initialiser le menu actif au chargement initial
  updateActiveMenu();

  // Charger le contenu initial
  UtilsFn.load_md_file(
    "installation",
    "manual",
    document.querySelector("#guide_content")
  ).then(() => {
    // Initialiser le menu actif après le chargement du contenu
    setTimeout(() => {
      updateActiveMenu();
    }, 300);
  });

  // Observer pour détecter les changements de contenu
  const contentObserver = new MutationObserver(() => {
    setTimeout(() => {
      updateActiveMenu();
    }, 200);
  });

  const guideContent = document.querySelector("#guide_content");
  if (guideContent) {
    contentObserver.observe(guideContent, {
      childList: true,
      subtree: true,
    });
  }

  // Throttle pour optimiser les performances du scroll
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveMenu();
        ticking = false;
      });
      ticking = true;
    }
  });
});

//  terminal highlight code
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    // Highlight all code blocks
    document.querySelectorAll("pre code").forEach(function (block) {
      hljs.highlightElement(block);
    });
  }, 100);
});

// Update current date and time in the terminal
document.addEventListener("DOMContentLoaded", function () {
  const secToday = document.getElementById("sec-today");
  if (secToday) {
    secToday.textContent = UtilsFn.get_current_datetime();
  }
});
