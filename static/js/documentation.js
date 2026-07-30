const spy_scroll = () => {
  const nav_links = Array.from(document.querySelectorAll("#dc-ctr-nav a"));

  //
  const sections = nav_links
    .map((link) => {
      const href = link.getAttribute("href");
      return href && href.startsWith("#")
        ? document.getElementById(href.slice(1))
        : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  //
  const OFFSET = 120;

  const set_active = () => {
    //
    let current = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= OFFSET) current = section;
    });

    //
    const at_bottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 2;
    if (at_bottom) current = sections[sections.length - 1];

    nav_links.forEach((link) =>
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current.id}`,
      ),
    );
  };

  let ticking = false;
  const on_scroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      set_active();
    });
  };

  set_active();
  window.addEventListener("scroll", on_scroll, { passive: true });
  window.addEventListener("resize", on_scroll, { passive: true });
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

// The documentation menu scrolls inside its own container, so an entry near the
// bottom of the list stayed hidden until the reader scrolled it into view. Bring
// it back into the visible area without ever scrolling the page itself.
const reveal_active_doc_entry = () => {
  const lists = [
    document.getElementById("doc_menu"), // desktop: the nav is the scroller
    document.querySelector("#docNav .offcanvas-body"), // mobile: the panel is
  ];

  lists.forEach((list) => {
    const link = list?.querySelector(".active");
    if (!link || list.scrollHeight <= list.clientHeight) return;

    const list_box = list.getBoundingClientRect();
    const link_box = link.getBoundingClientRect();
    if (link_box.top >= list_box.top && link_box.bottom <= list_box.bottom) {
      return; // already visible, leave it alone
    }
    list.scrollTop +=
      link_box.top - list_box.top - (list_box.height - link_box.height) / 2;
  });
};

// Run everything once the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  spy_scroll();
  init_image_preview();
  reveal_active_doc_entry();
  // The mobile menu lives in an offcanvas: it can only be measured once shown
  document
    .getElementById("docNav")
    ?.addEventListener("shown.bs.offcanvas", reveal_active_doc_entry);
});
