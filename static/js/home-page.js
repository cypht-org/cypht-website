// ===============================
// About cards (Read more / less)
// ===============================
function init_about_cards() {
  const buttons = document.querySelectorAll(".card-toggle");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentCard = btn.closest(".about-card");
      const currentDesc = currentCard.querySelector(".card-desc");

      // Close others with smooth animation
      document.querySelectorAll(".about-card").forEach((card) => {
        if (card !== currentCard && card.classList.contains("expanded")) {
          const desc = card.querySelector(".card-desc");
          const toggleBtn = card.querySelector(".card-toggle");

          // Animate closing like Read less
          desc.style.maxHeight = desc.scrollHeight + "px";
          // Force reflow
          desc.offsetHeight;
          desc.style.maxHeight = null;

          card.classList.remove("expanded");
          desc.classList.remove("is-clamped");

          toggleBtn.textContent = "Read more";
          toggleBtn.setAttribute("aria-expanded", "false");
        }
      });

      // Toggle current
      const isOpen = currentDesc.style.maxHeight;

      if (isOpen) {
        currentDesc.style.maxHeight = null;
        btn.textContent = "Read more";
        btn.setAttribute("aria-expanded", "false");
        currentCard.classList.remove("expanded");
        currentDesc.classList.remove("is-clamped");
      } else {
        currentDesc.style.maxHeight = currentDesc.scrollHeight + "px";
        currentDesc.classList.add("is-clamped");
        btn.textContent = "Read less";
        btn.setAttribute("aria-expanded", "true");
        currentCard.classList.add("expanded");
      }
    });
  });
}


// ===============================
// Features cards animations
// ===============================
function init_feature_cards() {
  const cards = document.querySelectorAll(".f-card");

  // Fade-in animation
  cards.forEach((card, index) => {
    setTimeout(() => card.classList.add("visible"), 100 * index);
  });

  // Parallax
  cards.forEach((card) => {
    const img = card.querySelector("img");
    if (!img) return;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const offsetX = (e.clientX - rect.left - rect.width / 2) / 30;
      const offsetY = (e.clientY - rect.top - rect.height / 2) / 30;

      img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    card.addEventListener("mouseleave", () => {
      img.style.transform = "translate(0, 0)";
    });
  });
}


// ===============================
// Testimonials (IntersectionObserver)
// ===============================
function init_testimonials() {
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

  document
    .querySelectorAll(".testimonial-card")
    .forEach((card) => observer.observe(card));
}


// ===============================
// FAQ
// ===============================
function init_faq() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((faqItem) => faqItem.classList.remove("active"));

      if (!isActive) item.classList.add("active");
    });
  });
}


// ===============================
// Packagist downloads loader
// ===============================
async function load_packagist_stats() {
  const el = document.getElementById("packagist-downloads");
  if (!el) return;

  try {
    const res = await fetch(
      "https://packagist.org/packages/jason-munro/cypht.json"
    );

    const data = await res.json();
    const downloads = data.package.downloads.total;

    el.textContent = `${downloads.toLocaleString()}+`;
    el.classList.add("stat-indicator");
  } catch (err) {
    console.error("Packagist stats error:", err);
    el.textContent = "--";
  }
}

// ===============================
// Init
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  init_about_cards();
  init_feature_cards();
  init_testimonials();
  init_faq();
  load_packagist_stats();
});

