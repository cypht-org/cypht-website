// ─── Fn Utils ────────────────────────────────────────────────────────────────

//
function scroll_to_element(element, offset = 120) {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  console.table({
    elementPosition,
    offsetPosition,
    windowPageYOffset: window.pageYOffset,
    offset
  });
  window.scrollTo({
    top: (elementPosition - offset),
    behavior: 'smooth'
  });
}


//
const load_doc_shortcut = (nav_id) => {
  const nav = document.getElementById(nav_id);
   if (!nav) {
    console.error(`Element with id "${nav_id}" not found`); // in english
    return;
  }
  const items = nav.querySelectorAll("li");

  // 
  items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((item) => item.querySelector("a").classList.remove("active"));
        item.querySelector("a").classList.add("active");

      const targetId = item.querySelector("a").getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        scroll_to_element(targetElement);
      }
      });
  });
};


// ─── Fn Main ──────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {

  // const tocLinks = document.querySelectorAll(".toc-section a");
  // const docContent = document.querySelector(".doc-content");

  // // Charger la bibliothèque Marked (pour parser le Markdown)
  // const script = document.createElement("script");
  // script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
  // document.head.appendChild(script);

  // // Fonction pour afficher un loader pendant le chargement
  // function showLoader() {
  //   docContent.innerHTML = `
  //     <div class="d-flex justify-content-center align-items-center py-5">
  //       <div class="spinner-border text-primary" role="status">
  //         <span class="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   `;
  // }

  // // Fonction pour charger un fichier Markdown
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
  //     // setupCodeCopy();
  //   } catch (error) {
  //     docContent.innerHTML = `
  //       <div class="alert alert-danger m-3">
  //         <strong>Error:</strong> ${error.message}
  //       </div>
  //     `;
  //   }
  // }

  // async function loadHTML(file) {
  //   showLoader();
  //   try {
  //     const response = await fetch(`/docs/${file}.md`);
  //     if (!response.ok) throw new Error("Fichier introuvable");
  //     const text = await response.text();
  //     docContent.innerHTML = text;
  //     // setupCodeCopy();
  //   } catch (error) {
  //     docContent.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
  //   }
  // }

  // // Met à jour le lien actif
  // function updateActiveLink(activeLink) {
  //   tocLinks.forEach((link) => link.classList.remove("active"));
  //   activeLink.classList.add("active");
  // }

  // // Gestion du clic sur un lien du menu
  // tocLinks.forEach((link) => {
  //   link.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     const file = link.getAttribute("data-doc");
  //     // loadHTML(file);
  //     loadMarkdown(file);
  //     updateActiveLink(link);
  //   });
  // });


  // // Effet d’apparition pour les sous-sections
  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) entry.target.classList.add("visible");
  //     });
  //   },
  //   { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  // );

  // document.querySelectorAll(".subsection").forEach((sub) => {
  //   sub.classList.remove("visible");
  //   observer.observe(sub);
  // });

  // // Charger la page par défaut au démarrage
  // const defaultLink = tocLinks[0];
  // if (defaultLink) {
  //   const file =
  //     defaultLink.getAttribute("data-doc") ||
  //     defaultLink.getAttribute("href").replace("#", "");
  //   // loadHTML(file);
  //   loadMarkdown(file);
  //   updateActiveLink(defaultLink);
  // }

  // init fn
  load_doc_shortcut("dc-ctr-nav");
});
