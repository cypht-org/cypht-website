// Documentation Navigation System
document.addEventListener("DOMContentLoaded", () => {
  // Éléments DOM
  const tocLinks = document.querySelectorAll(".toc-section a");
  const docSections = document.querySelectorAll(".doc-section");
  const welcomeCards = document.querySelectorAll(".welcome-card");

  // Fonction pour afficher une section
  function showSection(sectionId) {
    // Masquer toutes les sections
    docSections.forEach((section) => {
      section.classList.remove("active");
    });

    // Afficher la section demandée
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    // Mettre à jour les liens actifs
    updateActiveLinks(sectionId);
  }

  // Fonction pour mettre à jour les liens actifs
  function updateActiveLinks(activeId) {
    tocLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${activeId}`) {
        link.classList.add("active");
      }
    });
  }

  // Gestion des clics sur les liens TOC
  tocLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      showSection(targetId);

      // Scroll vers le haut de la section
      const docContent = document.querySelector(".doc-content");
      if (docContent) {
        docContent.scrollTop = 0;
      }
    });
  });

  // Gestion des clics sur les cartes de bienvenue
  welcomeCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const sectionIds = [
        "getting-started",
        "core-features",
        "advanced-features",
        "configuration",
      ];
      if (sectionIds[index]) {
        showSection(sectionIds[index]);
      }
    });
  });

  // Gestion des liens dans le hero
  const heroLinks = document.querySelectorAll(".hero-cta a");
  heroLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        showSection(targetId);

        // Scroll vers la section documentation
        const docContainer = document.querySelector(".doc-container");
        if (docContainer) {
          docContainer.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Navigation par clavier
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey) {
      const activeSection = document.querySelector(".doc-section.active");
      if (activeSection) {
        const currentId = activeSection.id;
        const sectionIds = [
          "default-content",
          "getting-started",
          "core-features",
          "advanced-features",
          "configuration",
        ];
        const currentIndex = sectionIds.indexOf(currentId);

        if (e.key === "ArrowUp" && currentIndex > 0) {
          e.preventDefault();
          showSection(sectionIds[currentIndex - 1]);
        } else if (
          e.key === "ArrowDown" &&
          currentIndex < sectionIds.length - 1
        ) {
          e.preventDefault();
          showSection(sectionIds[currentIndex + 1]);
        }
      }
    }
  });

  // Gestion de l'URL (hash)
  function handleHashChange() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
      showSection(hash);
    } else {
      showSection("default-content");
    }
  }

  // Écouter les changements d'URL
  window.addEventListener("hashchange", handleHashChange);

  // Initialiser avec l'URL actuelle
  handleHashChange();

  // Animation d'entrée pour les sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observer les sous-sections
  document.querySelectorAll(".subsection").forEach((subsection) => {
    subsection.style.opacity = "0";
    subsection.style.transform = "translateY(20px)";
    subsection.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(subsection);
  });

  // Fonction pour copier les blocs de code
  function setupCodeCopy() {
    document.querySelectorAll("pre code").forEach((block) => {
      const copyButton = document.createElement("button");
      copyButton.className = "copy-code-btn";
      copyButton.innerHTML = "📋";
      copyButton.title = "Copy to clipboard";

      const pre = block.parentElement;
      pre.style.position = "relative";
      pre.appendChild(copyButton);

      copyButton.addEventListener("click", () => {
        const text = block.textContent;
        navigator.clipboard.writeText(text).then(() => {
          copyButton.innerHTML = "✅";
          setTimeout(() => {
            copyButton.innerHTML = "📋";
          }, 2000);
        });
      });
    });
  }

  // Initialiser la copie de code
  setupCodeCopy();
});

// Styles CSS pour les nouveaux éléments
// const style = document.createElement("style");
// style.textContent = `
//   .doc-search {
//     width: 100%;
//     padding: 0.5rem;
//     border: 1px solid #e9ecef;
//     border-radius: 6px;
//     font-size: 0.9rem;
//     margin-top: 1rem;
//   }

//   .doc-search:focus {
//     outline: none;
//     border-color: var(--color-primary);
//     box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
//   }

//   .copy-code-btn {
//     position: absolute;
//     top: 0.5rem;
//     right: 0.5rem;
//     background: rgba(0, 0, 0, 0.1);
//     border: none;
//     border-radius: 4px;
//     padding: 0.25rem 0.5rem;
//     cursor: pointer;
//     font-size: 0.8rem;
//     transition: all 0.3s ease;
//   }

//   .copy-code-btn:hover {
//     background: rgba(0, 0, 0, 0.2);
//     transform: scale(1.1);
//   }

//   .subsection {
//     opacity: 0;
//     transform: translateY(20px);
//     transition: opacity 0.6s ease, transform 0.6s ease;
//   }

//   .subsection.visible {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;
// document.head.appendChild(style);
