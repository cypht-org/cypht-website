// Documentation Page Enhancements
document.addEventListener("DOMContentLoaded", () => {
  // ============================
  // 1. Smooth scrolling for anchor links
  // ============================
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      e.preventDefault();
      const target = document.getElementById(href.substring(1));
      if (!target) return;

      const offsetTop = target.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  });

  // load md pages from /static/docs

  const doc_menus = document.querySelectorAll(".toc-nav .toc-section li");

  UtilsFn.markdown_menu_list(doc_menus, ".doc-content", "/docs", "active");

  // // ============================
  // // 2. Intersection Observer for animations
  // // ============================
  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("animate-in");
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   },
  //   { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  // );

  // // Observe doc sections + TOC categories
  // [...document.querySelectorAll(".doc-section, .toc-category")].forEach((el) =>
  //   observer.observe(el)
  // );

  // ============================
  // 3. Hero animations on load
  // ============================
  document
    .querySelectorAll(
      ".doc-badge, .hero-title, .hero-subtitle, .hero-description, .doc-stats, .hero-cta, .feature-preview"
    )
    .forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 * i);
    });

  // // ============================
  // // 4. Image hover zoom
  // // ============================
  // document.querySelectorAll(".doc-image").forEach((img) => {
  //   img.addEventListener(
  //     "mouseenter",
  //     () => (img.style.transform = "scale(1.02)")
  //   );
  //   img.addEventListener(
  //     "mouseleave",
  //     () => (img.style.transform = "scale(1)")
  //   );
  // });

  // ============================
  // 5. Ripple effect on buttons
  // ============================
  document.querySelectorAll(".feature-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add("ripple");

      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // // ============================
  // // 6. Reading progress bar
  // // ============================
  // const progressBar = document.createElement("div");
  // progressBar.className = "reading-progress";
  // progressBar.innerHTML = '<div class="progress-fill"></div>';
  // document.body.appendChild(progressBar);

  // window.addEventListener("scroll", () => {
  //   const scrollTop =
  //     document.documentElement.scrollTop || document.body.scrollTop;
  //   const height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;

  //   const scrolled = (scrollTop / height) * 100;
  //   document.querySelector(".progress-fill").style.width = `${scrolled}%`;
  // });

  // // ============================
  // // 7. TOC Search filter
  // // ============================
  // const tocTitle = document.querySelector(".toc-title");
  // if (tocTitle) {
  //   const searchInput = document.createElement("input");
  //   searchInput.type = "text";
  //   searchInput.placeholder = "Search documentation...";
  //   searchInput.className = "toc-search";

  //   tocTitle.insertAdjacentElement("afterend", searchInput);

  //   const tocLinks = document.querySelectorAll(".toc-category a");

  //   searchInput.addEventListener("input", (e) => {
  //     const term = e.target.value.toLowerCase();

  //     document.querySelectorAll(".toc-category").forEach((category) => {
  //       let hasVisible = false;

  //       category.querySelectorAll("a").forEach((link) => {
  //         const visible = link.textContent.toLowerCase().includes(term);
  //         link.style.display = visible ? "flex" : "none";
  //         if (visible) hasVisible = true;
  //       });

  //       category.style.display = hasVisible ? "block" : "none";
  //     });
  //   });
  // }

  // ============================
  // 8. Copy-to-clipboard on code blocks
  // ============================
  document.querySelectorAll("pre").forEach((block) => {
    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.innerHTML = "📋";
    copyButton.title = "Copy to clipboard";

    block.style.position = "relative";
    block.appendChild(copyButton);

    copyButton.addEventListener("click", () => {
      navigator.clipboard.writeText(block.textContent).then(() => {
        copyButton.innerHTML = "✅";
        setTimeout(() => (copyButton.innerHTML = "📋"), 2000);
      });
    });
  });

  // load md file
  UtilsFn.load_md_file(
    "/docs",
    "introduction",
    document.querySelector(".doc-content")
  );
});

// ============================
// 9. Inject CSS for animations/effects
// ============================
const style = document.createElement("style");
style.textContent = `
  .animate-in { animation: slideInUp 0.6s ease forwards; }

  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
  }

  @keyframes ripple {
    to { transform: scale(4); opacity: 0; }
  }

  .reading-progress {
    position: fixed; top: 0; left: 0;
    width: 100%; height: 4px;
    background: rgba(0,0,0,0.1);
    z-index: 1000;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea, #764ba2);
    width: 0%; transition: width 0.1s ease;
  }

  .toc-search {
    width: 100%; max-width: 400px;
    padding: 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;
    margin: 2rem auto;
    display: block;
    background: white;
    transition: all 0.3s ease;
  }

  .toc-search:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
  }

  .copy-button {
    position: absolute; top: 1rem; right: 1rem;
    background: rgba(0,0,0,0.1);
    border: none; border-radius: 6px;
    padding: .5rem; cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .copy-button:hover {
    background: rgba(0,0,0,0.2);
    transform: scale(1.1);
  }

  .feature-button { position: relative; overflow: hidden; }

  @media (prefers-reduced-motion: reduce) {
    .animate-in { animation: none; }
    .ripple { display: none; }
    .progress-fill { transition: none; }
  }
`;
document.head.appendChild(style);
