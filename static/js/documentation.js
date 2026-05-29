const spy_scroll = () => {
  const nav_links = document.querySelectorAll("#dc-ctr-nav a");
  const sections = document.querySelectorAll(".doc-content-left [id]");

  const options = {
    root: null, // utilise le viewport
    rootMargin: "0px 0px -80% 0px", // déclenche quand l'élément est en haut de page
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Supprimer la classe active de tous les liens
        nav_links.forEach((link) => link.classList.remove("active"));

        // Ajouter la classe au lien correspondant à l'ID de la section
        const active_link = document.querySelector(
          `#dc-ctr-nav a[href="#${entry.target.id}"]`,
        );
        if (active_link) {
          active_link.classList.add("active");
        }
      }
    });
  }, options);

  // On observe chaque section/titre ayant un ID dans le contenu
  sections.forEach((section) => observer.observe(section));
};

// Image preview lightbox for doc-img-card
const init_image_preview = () => {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "doc-img-overlay";
  overlay.innerHTML = `
    <button class="doc-img-overlay-close" aria-label="Close preview">&times;</button>
    <img class="doc-img-overlay-img" src="" alt="" />
  `;
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector(".doc-img-overlay-img");
  const closeBtn = overlay.querySelector(".doc-img-overlay-close");

  // Click on any doc-img-card image to open preview
  document.querySelectorAll(".doc-img-card img").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Close on button, overlay click, or Escape key
  const close = () => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
};

// Lancement de la fonction après le chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  spy_scroll();
  init_image_preview();
});
