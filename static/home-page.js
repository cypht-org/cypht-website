document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".about-grid-3");
  if (!grid) return;

  const cards = grid.querySelectorAll(".about-card");

  // Smoothly transition a card's height from current to target as a result of a DOM mutation
  const animateHeight = (card, mutate) => {
    // Ensure styles for smooth transition
    card.style.overflow = card.style.overflow || "hidden";
    card.style.transition = card.style.transition || "max-height 240ms ease";

    // Set explicit start height
    const start = card.scrollHeight;
    card.style.maxHeight = start + "px";

    // Apply DOM change (e.g., expanding/collapsing desc)
    mutate();

    // Force reflow to ensure measurements are fresh, then animate to new height
    // eslint-disable-next-line no-unused-expressions
    card.offsetHeight; // reflow
    const end = card.scrollHeight;
    requestAnimationFrame(() => {
      card.style.maxHeight = end + "px";
    });
  };

  const getCollapsedHeight = (el) => {
    // Estimate based on computed line-height * 3 lines
    const styles = window.getComputedStyle(el);
    const lineHeight = parseFloat(styles.lineHeight) || 20; // fallback
    return Math.round(lineHeight * 3);
  };

  const prepareCard = (card) => {
    const desc = card.querySelector(".card-desc");
    const btn = card.querySelector(".card-toggle");
    if (!desc || !btn) return;

    // Initialize collapsed max-height
    const collapsed = getCollapsedHeight(desc);
    desc.style.maxHeight = collapsed + "px";

    // Initialize card height to current content height
    card.style.overflow = card.style.overflow || "hidden";
    // Ensure CSS height doesn't conflict with max-height animation
    card.style.height = "auto";
    card.style.transition = card.style.transition || "max-height 240ms ease";
    card.style.maxHeight = card.scrollHeight + "px";

    // Hide toggle if content fits within clamp height
    const fits = () => desc.scrollHeight <= collapsed + 4; // tolerance
    const updateToggleVisibility = () => {
      // Ensure clamped class for gradient when collapsed
      if (fits()) {
        btn.style.display = "none";
      } else {
        btn.style.display = "";
      }
    };
    updateToggleVisibility();

    // Toggle behavior: expand only this card, collapse others
    btn.addEventListener("click", () => {
      const wantExpand = !card.classList.contains("expanded");
      // Recompute collapsed height at the moment of interaction
      const collapsedNow = getCollapsedHeight(desc);

      // Collapse all others
      cards.forEach((c) => {
        if (c === card) return;
        const d = c.querySelector(".card-desc");
        const b = c.querySelector(".card-toggle");
        if (d && b) {
          animateHeight(c, () => {
            // Use fresh collapsed height for each other card
            const otherCollapsed = getCollapsedHeight(d);
            d.style.maxHeight = otherCollapsed + "px";
            c.classList.remove("expanded");
            b.setAttribute("aria-expanded", "false");
            b.textContent = "Read more";
          });
        }
      });

      if (wantExpand) {
        // Expand this
        animateHeight(card, () => {
          desc.style.maxHeight = desc.scrollHeight + "px";
          card.classList.add("expanded");
          btn.setAttribute("aria-expanded", "true");
          btn.textContent = "Read less";
        });
      } else {
        // Collapse this
        animateHeight(card, () => {
          desc.style.maxHeight = collapsedNow + "px";
          card.classList.remove("expanded");
          btn.setAttribute("aria-expanded", "false");
          btn.textContent = "Read more";
        });
      }
    });

    // Recalculate on resize
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const isExpanded = card.classList.contains("expanded");
        const collapsedNow = getCollapsedHeight(desc);
        if (isExpanded) {
          desc.style.maxHeight = desc.scrollHeight + "px";
        } else {
          desc.style.maxHeight = collapsedNow + "px";
        }
        // Update card height to match current content
        card.style.maxHeight = card.scrollHeight + "px";
        // Update toggle visibility in case layout changed
        const btn = card.querySelector(".card-toggle");
        if (btn)
          btn.style.display =
            desc.scrollHeight <= collapsedNow + 4 ? "none" : "";
      }, 120);
    });
  };

  cards.forEach(prepareCard);
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

        img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
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
