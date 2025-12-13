// document.addEventListener('DOMContentLoaded', function() {
//   // Wait until everything is fully loaded
//   setTimeout(function() {
//     initSidebar();
//   }, 100);

//   function initSidebar() {
//     // Grab all sections and sidebar links
//     const sections = document.querySelectorAll('main h3[id]');
//     const sidebarLinks = document.querySelectorAll('.sidebar-link-simple');

//     // Debug information
//     console.log('Sections found:', sections.length);
//     console.log('Sidebar links found:', sidebarLinks.length);

//     if (sections.length === 0 || sidebarLinks.length === 0) {
//       console.error('Elements not found. Check selectors or the HTML structure.');
//       return;
//     }

//     // Helper to determine which section is visible
//     function setActiveSection() {
//       // Current scroll position plus margin so the change triggers earlier
//       const scrollPosition = window.scrollY + 200;

//       console.log('Current scroll position:', scrollPosition);

//       // Find the visible section
//       let currentSection = '';

//       for (let i = 0; i < sectionPositions.length; i++) {
//         const section = sectionPositions[i];
//         const nextSection = sectionPositions[i + 1];

//         // If this is the last section or we are between this section and the next
//         if (
//           !nextSection && scrollPosition >= section.top ||
//           scrollPosition >= section.top && scrollPosition < nextSection?.top
//         ) {
//           currentSection = section.id;
//           break;
//         }
//       }

//       console.log('Current section detected:', currentSection);

//       // Update the active class in the sidebar
//       sidebarLinks.forEach((link) => {
//         // Remove the active class from every link
//         link.classList.remove('active');

//         // Add the active class to the link that matches the visible section
//         const href = link.getAttribute('href').substring(1);
//         if (href === currentSection) {
//           link.classList.add('active');
//           console.log('Active link updated:', href);
//         }
//       });
//     }

//     // Use a throttle-like approach to limit calls during scroll
//     let isScrolling;
//     window.addEventListener('scroll', function() {
//       // Clear any previous timeout
//       window.clearTimeout(isScrolling);

//       // Set a timeout so the handler fires when scrolling stops
//       isScrolling = setTimeout(function() {
//         setActiveSection();
//       }, 50);
//     });

//     // Run once on initial load
//     setActiveSection();

//     // Handle sidebar link click
//     sidebarLinks.forEach((link) => {
//       link.addEventListener('click', function(e) {
//         e.preventDefault();

//         // Retrieve the target section ID
//         const targetId = this.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetId);

//         if (!targetSection) {
//           console.error('Target section not found:', targetId);
//           return;
//         }

//         // Smoothly scroll to the section
//         window.scrollTo({
//           top: targetSection.offsetTop - 100,
//           behavior: 'smooth'
//         });

//         // Manually update the active class
//         sidebarLinks.forEach((l) => l.classList.remove('active'));
//         this.classList.add('active');

//         console.log('Sidebar link click, navigating to:', targetId);
//       });
//     });

//     // Recalculate section positions on resize if needed
//     // window.addEventListener('resize', function() {
//     //   sectionPositions.forEach((section, index) => {
//     //     const elem = sections[index];
//     //     section.top = elem.getBoundingClientRect().top + window.pageYOffset;
//     //     section.bottom = section.top + elem.offsetHeight;
//     //   });
//     //   setActiveSection();
//     // });
//   }
// });

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
            console.log("Video autoplay prevented:", error);
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
                console.log("Video autoplay prevented:", error);
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
