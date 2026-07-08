// Function to handle image loading
function handleImageLoad(img) {
  if (img.complete) {
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
    img.addEventListener('error', () => {
      img.style.opacity = 1; // Show even if error
    });
  }
}

// get element
// function get_element(selector) {
//   return document.querySelector(selector);
// }

document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll('.lazy-load[loading="lazy"');

  if (!lazyImages.length) return;

  const loadImage = (img) => {
    const wrapper = img.closest(".image-wrapper");

    img.src = img.dataset.src;

    img.onload = () => {
      wrapper.classList.remove("skeleton");
      wrapper.classList.add("loaded");
    };
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImage(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "200px 0px" }
    );

    lazyImages.forEach(img => observer.observe(img));
  } else {
    lazyImages.forEach(loadImage);
  }
});