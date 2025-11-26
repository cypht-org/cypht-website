import { UtilsFn } from "./utils_fn.js";

const menus = [
  {
    title: "Overview",
    children: [
      {
        title: "Introduction",
        href: "#introduction",
      },
      {
        title: "Key Features",
        href: "#key-features",
      },
      {
        title: "Requirements",
        href: "#requirements",
      },
      {
        title: "Version History",
        href: "#version-history",
      },
    ],
  },
  {
    title: "Getting Started",
    children: [
      {
        title: "Installation & Setup",
        href: "#installation",
      },
      {
        title: "First Login",
        href: "#first-login",
      },
      {
        title: "Interface Overview",
        href: "#interface-overview",
      },
      {
        title: "Adding Email Accounts",
        href: "#adding-email-accounts",
      },
      {
        title: "Basic Settings",
        href: "#basic-settings",
      },
    ],
  },
  {
    title: "Core Features",
    children: [
      {
        title: "Unified Inbox",
        href: "#unified-inbox",
      },
      {
        title: "Compose & Send Emails",
        href: "#compose-send-emails",
      },
      {
        title: "Search & Filters",
        href: "#search-filters",
      },
      {
        title: "Labels & Folders",
        href: "#labels-folders",
      },
      {
        title: "Contact Book",
        href: "#contact-book",
      },
      {
        title: "Calendar",
        href: "#calendar",
      },
    ],
  },
  {
    title: "Advanced Features",
    children: [
      {
        title: "Sieve Filters",
        href: "#sieve-filters",
      },
      {
        title: "Block List",
        href: "#block-list",
      },
      {
        title: "Snooze",
        href: "#snooze",
      },
      {
        title: "Archive",
        href: "#archive",
      },
      {
        title: "Email Scheduling",
        href: "#email-scheduling",
      },
      {
        title: "Email Encryption",
        href: "#email-encryption",
      },
    ],
  },
  {
    title: "Configuration",
    children: [
      {
        title: "Server Setup",
        href: "#server-setup",
      },
      {
        title: "Exchange / Office 365",
        href: "#exchange-office-365",
      },
      {
        title: "User Profiles",
        href: "#user-profiles",
      },
      {
        title: "Notifications",
        href: "#notifications",
      },
      {
        title: "Themes & Customization",
        href: "#themes-customization",
      },
      {
        title: "Developer Options",
        href: "#developer-options",
      },
    ],
  },
  {
    title: "Security & Privacy",
    children: [
      {
        title: "Encryption & Certificates",
        href: "#encryption-certificates",
      },
      {
        title: "Password & 2FA",
        href: "#password-2fa",
      },
      {
        title: "Session Management",
        href: "#session-management",
      },
      {
        title: "Privacy Policy",
        href: "#privacy-policy",
      },
    ],
  },
  {
    title: "Troubleshooting",
    children: [
      {
        title: "Common Issues",
        href: "#common-issues",
      },
      {
        title: "Connection Problems",
        href: "#connection-problems",
      },
      {
        title: "Sync Errors",
        href: "#sync-errors",
      },
      {
        title: "Reporting Bugs",
        href: "#reporting-bugs",
      },
    ],
  },
  {
    title: "Developer Guide",
    children: [
      {
        title: "Local Development Setup",
        href: "#local-development-setup",
      },
      {
        title: "Architecture Overview",
        href: "#architecture-overview",
      },
      {
        title: "API Reference",
        href: "#api-reference",
      },
      {
        title: "Contributing",
        href: "#contributing",
      },
    ],
  },
  {
    title: "Community & Support",
    children: [
      {
        title: "Join the Community",
        href: "#join-the-community",
      },
      {
        title: "Get Help",
        href: "#get-help",
      },
      {
        title: "Submit Feedback",
        href: "#submit-feedback",
      },
      {
        title: "Contact Team",
        href: "#contact-team",
      },
    ],
  },
  {
    title: "Legal & Misc",
    children: [
      {
        title: "License",
        href: "#license",
      },
      {
        title: "Attributions",
        href: "#attributions",
      },
      {
        title: "Brand Guidelines",
        href: "#brand-guidelines",
      },

      {
        title: "Credits",
        href: "#credits",
      },
    ],
  },
];

// load menu
const load_doc_menu = (nav_id) => {
  const menu = document.getElementById(nav_id);
  if (!menu) return;
  const menu_items = menus
    .map((item) => {
      return `<div class="toc-section"><h5>${item.title}</h5><ul>${item.children
        .map((child) => `<li><a href="${child.href}">${child.title}</a></li>`)
        .join("")}</ul></div>`;
    })
    .join("");
  menu.innerHTML = menu_items;

  // load markdown menu list
  const docContent = document.querySelector(".doc-content");
  UtilsFn.markdown_menu_list(menu, docContent, "/docs", "active");
};

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
  const tocNav = document.querySelector(".toc-nav");
  const docContent = document.querySelector(".doc-content");

  load_doc_menu("doc_menu");

  const docMenu = document.getElementById("doc_menu");
  const desktopWrapper = document.getElementById("doc_menu_desktop_wrapper");
  const mobileWrapper = document.getElementById("doc_menu_mobile_wrapper");
  const offcanvasEl = document.getElementById("docNav");

  if (offcanvasEl && docMenu && desktopWrapper && mobileWrapper) {
    offcanvasEl.addEventListener("show.bs.offcanvas", () => {
      mobileWrapper.appendChild(docMenu);
      docMenu.classList.add("ps-4");
    });

    offcanvasEl.addEventListener("hidden.bs.offcanvas", () => {
      desktopWrapper.appendChild(docMenu);
      docMenu.classList.remove("ps-4");
    });
  }

  // Only initialize custom_select if elements exist
  const selectBtn = document.querySelector(".select-btn");
  const selectMenu = document.querySelector(".select-menu");
  if (selectBtn && selectMenu) {
    UtilsFn.custom_select(".select-btn", ".select-menu", true);
  }

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
});
