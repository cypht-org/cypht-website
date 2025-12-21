import { UtilsFn } from "./utils_fn.js";

/* ========================================================================== */
/*                              SCROLL SPY                                    */
/* ========================================================================== */

/**
 * Initializes scroll spy for "On this page" navigation.
 * Adds the `active` class to the nav link matching
 * the currently visible section inside `.doc-content-left`.
 */
function initDocScrollSpy() {
  const content = document.querySelector(".doc-content-left");
  const navLinks = document.querySelectorAll("#dc-ctr-nav a");

  if (!content || !navLinks.length) return;

  // Map section id -> nav link
  const linkMap = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute("href")?.replace("#", "");
    if (id) linkMap.set(id, link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const activeLink = linkMap.get(entry.target.id);
        if (!activeLink) return;

        navLinks.forEach((l) => l.classList.remove("active"));
        activeLink.classList.add("active");
      });
    },
    {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0
    }
  );

  content
    .querySelectorAll("h2[id], h3[id]")
    .forEach((section) => observer.observe(section));
}

/* ========================================================================== */
/*                           SMOOTH SCROLLING                                  */
/* ========================================================================== */

/**
 * Enables smooth scrolling for internal anchor links.
 */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.getElementById(href.substring(1));
      if (!target) return;

      e.preventDefault();

      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth"
      });
    });
  });
}

/* ========================================================================== */
/*                         DOCUMENTATION MENU                                  */
/* ========================================================================== */

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
        href: "#versions",
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
        href: "#inbox",
      },
      {
        title: "Compose & Send Emails",
        href: "#compose-email",
      },
      {
        title: "Search & Filters",
        href: "#search-filters",
      },
      {
        title: "Labels & Folders",
        href: "#labels",
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

/**
 * Renders the documentation navigation menu.
 * @param {string} navId
 */
function loadDocMenu(navId) {
  const menu = document.getElementById(navId);
  if (!menu) return;

  menu.innerHTML = menus
    .map(
      (section) => `
        <div class="toc-section">
          <h5>${section.title}</h5>
          <ul>
            ${section.children
              .map(
                (item) =>
                  `<li><a href="${item.href}">${item.title}</a></li>`
              )
              .join("")}
          </ul>
        </div>
      `
    )
    .join("");

  const docContent = document.querySelector(".doc-content");
  UtilsFn.markdown_menu_list(menu, docContent, "docs", "active");
}

/* ========================================================================== */
/*                           UI ENHANCEMENTS                                   */
/* ========================================================================== */

/**
 * Runs entrance animations for hero elements.
 */
function initHeroAnimations() {
  document
    .querySelectorAll(
      ".doc-badge, .hero-title, .hero-subtitle, .hero-description, .doc-stats, .hero-cta, .feature-preview"
    )
    .forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 * index);
    });
}

/**
 * Adds copy-to-clipboard buttons to code blocks.
 */
function initCodeCopy() {
  document.querySelectorAll("pre").forEach((block) => {
    const btn = document.createElement("button");
    btn.className = "copy-button";
    btn.innerHTML = "📋";
    btn.title = "Copy to clipboard";

    block.style.position = "relative";
    block.appendChild(btn);

    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(block.textContent).then(() => {
        btn.innerHTML = "✅";
        setTimeout(() => (btn.innerHTML = "📋"), 2000);
      });
    });
  });
}

/* ========================================================================== */
/*                          PAGE INITIALIZATION                                */
/* ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  loadDocMenu("doc_menu");
  initSmoothScrolling();
  initDocScrollSpy();
  initHeroAnimations();
  initCodeCopy();

  // Custom select (optional)
  if (
    document.querySelector(".select-btn") &&
    document.querySelector(".select-menu")
  ) {
    UtilsFn.custom_select(".select-btn", ".select-menu", true);
  }
});