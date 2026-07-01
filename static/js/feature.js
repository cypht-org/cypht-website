document.addEventListener("DOMContentLoaded", function () {
  function animateRandomCard() {
    const cards = document.querySelectorAll(".icon-box");
    if (cards.length === 0) return;
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    card.classList.add("random-animate");
    card.addEventListener("animationend", function handler() {
      card.classList.remove("random-animate");
      card.style.opacity = "0";
      card.removeEventListener("animationend", handler);
    });
  }

  // Trigger the first animation after 1.2s
  setTimeout(animateRandomCard, 1200);

  // Then repeat every 4 seconds
  setInterval(animateRandomCard, 4000);

  // Control video playback based on active tab
  function initVideoTabControl() {
    const tabButtons = document.querySelectorAll(
      '#myTab button[data-bs-toggle="tab"]'
    );
    const videos = document.querySelectorAll(".key-tab-demo-body video");

    if (tabButtons.length === 0 || videos.length === 0) {
      return; // Exit if tabs or videos don't exist
    }

    // Function to pause all videos
    function pauseAllVideos() {
      videos.forEach((video) => {
        if (video && !video.paused) {
          video.pause();
        }
        video.currentTime = 0; // Reset to beginning
      });
    }

    // Function to play video in active tab
    function playActiveTabVideo() {
      const activeTabPane = document.querySelector(".tab-pane.show.active");
      if (activeTabPane) {
        const video = activeTabPane.querySelector("video");
        if (video) {
          video.play().catch((error) => {
            // Autoplay was prevented, user interaction required
          });
        }
      }
    }

    // Handle tab change events using Bootstrap's shown.bs.tab event
    tabButtons.forEach((button) => {
      button.addEventListener("shown.bs.tab", function (event) {
        // Pause all videos first
        pauseAllVideos();

        // Play video in the newly active tab
        const targetId = event.target.getAttribute("data-bs-target");
        if (targetId) {
          const targetPane = document.querySelector(targetId);
          if (targetPane) {
            const video = targetPane.querySelector("video");
            if (video) {
              video.play().catch((error) => {
              });
            }
          }
        }
      });

      // Also handle hidden.bs.tab to pause when tab is hidden
      button.addEventListener("hidden.bs.tab", function (event) {
        const targetId = event.target.getAttribute("data-bs-target");
        if (targetId) {
          const targetPane = document.querySelector(targetId);
          if (targetPane) {
            const video = targetPane.querySelector("video");
            if (video) {
              video.pause();
              video.currentTime = 0;
            }
          }
        }
      });
    });

    // Initialize: play video in the active tab on page load
    // Wait a bit for Bootstrap to initialize
    setTimeout(() => {
      pauseAllVideos();
      playActiveTabVideo();
    }, 100);
  }

  // Initialize video tab control
  initVideoTabControl();
});
