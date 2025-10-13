// documentation-nav.js
// =======================
// Nouvelle version : chargement dynamique des fichiers Markdown pour la documentation

document.addEventListener("DOMContentLoaded", () => {
  const tocLinks = document.querySelectorAll(".toc-section a");
  const docContent = document.querySelector(".doc-content");

  // Charger la bibliothèque Marked (pour parser le Markdown)
  const script = document.createElement("script");
  // script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
  // document.head.appendChild(script);

  // Fonction pour afficher un loader pendant le chargement
  function showLoader() {
    docContent.innerHTML = `
      <div class="d-flex justify-content-center align-items-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  }

  // Fonction pour charger un fichier Markdown
  // async function loadMarkdown(file) {
  //   if (!window.marked) {
  //     // Attendre que Marked soit chargé
  //     await new Promise((resolve) => {
  //       script.onload = resolve;
  //     });
  //   }

  //   showLoader();

  //   try {
  //     const response = await fetch(`/docs/${file}.md`);
  //     if (!response.ok) throw new Error("Fichier introuvable");
  //     const text = await response.text();
  //     docContent.innerHTML = marked.parse(text);
  //     setupCodeCopy();
  //   } catch (error) {
  //     docContent.innerHTML = `
  //       <div class="alert alert-danger m-3">
  //         <strong>Error:</strong> ${error.message}
  //       </div>
  //     `;
  //   }
  // }

  async function loadHTML(file) {
    showLoader();
    try {
      const response = await fetch(`/docs/${file}.md`);
      if (!response.ok) throw new Error("Fichier introuvable");
      const text = await response.text();
      docContent.innerHTML = text;
      setupCodeCopy();
    } catch (error) {
      docContent.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
    }
  }

  // Met à jour le lien actif
  function updateActiveLink(activeLink) {
    tocLinks.forEach((link) => link.classList.remove("active"));
    activeLink.classList.add("active");
  }

  // Gestion du clic sur un lien du menu
  tocLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const file = link.getAttribute("data-doc");
      loadHTML(file);
      updateActiveLink(link);
    });
  });

  // Fonction de copie des blocs de code
  function setupCodeCopy() {
    document.querySelectorAll("pre code").forEach((block) => {
      const btn = document.createElement("button");
      btn.className = "copy-code-btn";
      btn.innerHTML = "📋";
      btn.title = "Copy code";
      const pre = block.parentElement;
      pre.style.position = "relative";
      pre.appendChild(btn);

      btn.addEventListener("click", () => {
        navigator.clipboard.writeText(block.textContent).then(() => {
          btn.innerHTML = "✅";
          setTimeout(() => (btn.innerHTML = "📋"), 1500);
        });
      });
    });
  }

  // Effet d’apparition pour les sous-sections
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".subsection").forEach((sub) => {
    sub.classList.remove("visible");
    observer.observe(sub);
  });

  // Styles dynamiques
  const style = document.createElement("style");
  style.textContent = `
    .copy-code-btn {
      position: absolute;
      top: 6px;
      right: 8px;
      background: rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 4px;
      padding: 3px 6px;
      cursor: pointer;
      font-size: 0.8rem;
      transition: background 0.3s ease;
    }
    .copy-code-btn:hover { background: rgba(0, 0, 0, 0.2); }

    .subsection {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .subsection.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // Charger la page par défaut au démarrage
  const defaultLink = tocLinks[0];
  if (defaultLink) {
    const file =
      defaultLink.getAttribute("data-doc") ||
      defaultLink.getAttribute("href").replace("#", "");
    loadMarkdown(file);
    updateActiveLink(defaultLink);
  }
});
