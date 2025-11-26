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

    // Get delay from CSS animation-delay - matching line appearance timing
    // Line appears at: step-1: 300ms, step-2: 4300ms, step-3: 8300ms
    // Start typing 200ms after line appears
    function getDelay(step) {
      const delays = {
        "step-1": 500, // 300ms (line appear) + 200ms delay
        "step-2": 4500, // 4300ms (line appear) + 200ms delay
        "step-3": 8500, // 8300ms (line appear) + 200ms delay
      };
      return delays[step] || 0;
    }

    // Calculate total animation duration
    // Last command starts at 8500ms, typing takes ~30ms * characters, plus 500ms buffer
    const lastCommand = Array.from(commands).reduce((latest, cmd) => {
      const stepClass = Array.from(cmd.classList).find((cls) =>
        cls.startsWith("step-")
      );
      if (stepClass) {
        const delay = getDelay(stepClass);
        const text = cmd.getAttribute("data-original-text") || "";
        const typingTime = text.length * 30;
        const total = delay + typingTime;
        return total > latest ? total : latest;
      }
      return latest;
    }, 0);

    const totalDuration = lastCommand + 2000; // Add 2s buffer for outputs and final display

    // Start typing animations for each command
    commands.forEach((cmd) => {
      const stepClass = Array.from(cmd.classList).find((cls) =>
        cls.startsWith("step-")
      );
      if (stepClass) {
        const delay = getDelay(stepClass);
        typeCommand(cmd, delay);
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

  UtilsFn.load_md_file(
    "installation",
    "manual",
    document.querySelector("#guide_content")
  );
});
