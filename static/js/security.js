document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".sec-tabs-menu a");
  const sections = document.querySelectorAll(".sec-tab-content");

  // Fonction pour enlever l'active
  function clearActive() {
    menuLinks.forEach(link => link.classList.remove("sec-active"));
  }

  // Clique sur un menu
  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Retirer l'active partout
      clearActive();

      // Ajouter l'active sur le lien cliqué
      this.classList.add("sec-active");

      // Scroll smooth vers la section
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  // Détection du scroll pour activer le bon menu
  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150; // marge pour déclencher avant
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    if (current) {
      clearActive();
      const activeLink = document.querySelector(`.sec-tabs-menu a[href="#${current}"]`);
      if (activeLink) {
        activeLink.classList.add("sec-active");
      }
    }
  });
});