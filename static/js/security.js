document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".sec-tabs-menu ul li a");
  const sections = document.querySelectorAll(".sec-tab-content");

  // reset
  function clearActive() {
    menuLinks.forEach(link => link.classList.remove("sec-active"));
  }

  // onClick
  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      clearActive();
      this.classList.add("sec-active");

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // onScroll
  window.addEventListener("scroll", function () {
    let currentId = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 180;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    if (currentId) {
      clearActive();
      const activeLink = document.querySelector(`.sec-tabs-menu a[href="#${currentId}"]`);
      if (activeLink) {
        activeLink.classList.add("sec-active");
      }
    }
  });
});