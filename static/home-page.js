// About cards
document.addEventListener("DOMContentLoaded", function () {
  const read_more_btns = document.querySelectorAll(".card-toggle");
  read_more_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentCard = btn.closest(".about-card");
      const currentDesc = currentCard.querySelector(".card-desc");

      // --- 1. FERMER les autres cartes ---
      document.querySelectorAll(".about-card").forEach((card) => {
        if (card !== currentCard) {
          const desc = card.querySelector(".card-desc");
          const toggleBtn = card.querySelector(".card-toggle");

          desc.style.maxHeight = null;
          card.classList.remove("expanded");

          toggleBtn.textContent = "Read more";
          toggleBtn.setAttribute("aria-expanded", "false");
        }
      });

      // --- 2. GÉRER la carte cliquée ---
      if (currentDesc.style.maxHeight) {
        // Fermer
        currentDesc.style.maxHeight = null;
        btn.textContent = "Read more";
        btn.setAttribute("aria-expanded", "false");
        currentCard.classList.remove("expanded");
      } else {
        // Ouvrir
        currentDesc.style.maxHeight = currentDesc.scrollHeight + "px";
        // currentDesc.style.lineClamp = null;
        // currentDesc.style.webkitLineClamp = null;
        // currentDesc.style.overflow = null;
        btn.textContent = "Read less";
        btn.setAttribute("aria-expanded", "true");
        currentCard.classList.add("expanded");
      }
    });
  });
});

// Features
document.addEventListener("DOMContentLoaded", function () {
  // Animation des cartes au chargement
  const cards = document.querySelectorAll(".f-card");

  // Ajouter un délai progressif pour l'animation d'entrée
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("visible");
    }, 100 * index);
  });

  // Effet parallaxe léger sur les images
  cards.forEach((card) => {
    const img = card.querySelector("img");
    if (img) {
      card.addEventListener("mousemove", function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculer le décalage de l'image (effet très léger)
        const offsetX = (x - rect.width / 2) / 30;
        const offsetY = (y - rect.height / 2) / 30;

        // img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        img.style.transform = `translate(70, 70)`;
      });

      // Réinitialiser la position lorsque la souris quitte la carte
      card.addEventListener("mouseleave", function () {
        img.style.transform = "translate(0, 0)";
      });
    }
  });
});

// Testimonials
document.addEventListener("DOMContentLoaded", function () {
  // Animation des cartes de témoignages au défilement
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observer chaque carte de témoignage
  document.querySelectorAll(".testimonial-card").forEach((card) => {
    observer.observe(card);
  });
});

// Faq

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all FAQ items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active");
      });

      // If the clicked item wasn't active, open it
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});
