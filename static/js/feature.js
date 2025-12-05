document.addEventListener('DOMContentLoaded', function() {
  // Wait until everything is fully loaded
  setTimeout(function() {
    initSidebar();
  }, 100);
  
  function initSidebar() {
    // Grab all sections and sidebar links
    const sections = document.querySelectorAll('main h3[id]');
    const sidebarLinks = document.querySelectorAll('.sidebar-link-simple');
    
    // Debug information
    console.log('Sections found:', sections.length);
    console.log('Sidebar links found:', sidebarLinks.length);
    
    if (sections.length === 0 || sidebarLinks.length === 0) {
      console.error('Elements not found. Check selectors or the HTML structure.');
      return;
    }
    
    // Helper to determine which section is visible
    function setActiveSection() {
      // Current scroll position plus margin so the change triggers earlier
      const scrollPosition = window.scrollY + 200;
      
      console.log('Current scroll position:', scrollPosition);
      
      // Find the visible section
      let currentSection = '';
      
      for (let i = 0; i < sectionPositions.length; i++) {
        const section = sectionPositions[i];
        const nextSection = sectionPositions[i + 1];
        
        // If this is the last section or we are between this section and the next
        if (
          !nextSection && scrollPosition >= section.top ||
          scrollPosition >= section.top && scrollPosition < nextSection?.top
        ) {
          currentSection = section.id;
          break;
        }
      }
      
      console.log('Current section detected:', currentSection);
      
      // Update the active class in the sidebar
      sidebarLinks.forEach((link) => {
        // Remove the active class from every link
        link.classList.remove('active');
        
        // Add the active class to the link that matches the visible section
        const href = link.getAttribute('href').substring(1);
        if (href === currentSection) {
          link.classList.add('active');
          console.log('Active link updated:', href);
        }
      });
    }
    
    // Use a throttle-like approach to limit calls during scroll
    let isScrolling;
    window.addEventListener('scroll', function() {
      // Clear any previous timeout
      window.clearTimeout(isScrolling);
      
      // Set a timeout so the handler fires when scrolling stops
      isScrolling = setTimeout(function() {
        setActiveSection();
      }, 50);
    });
    
    // Run once on initial load
    setActiveSection();
    
    // Handle sidebar link click
    sidebarLinks.forEach((link) => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Retrieve the target section ID
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (!targetSection) {
          console.error('Target section not found:', targetId);
          return;
        }
        
        // Smoothly scroll to the section
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Manually update the active class
        sidebarLinks.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
        
        console.log('Sidebar link click, navigating to:', targetId);
      });
    });
    
    // Recalculate section positions on resize if needed
    // window.addEventListener('resize', function() {
    //   sectionPositions.forEach((section, index) => {
    //     const elem = sections[index];
    //     section.top = elem.getBoundingClientRect().top + window.pageYOffset;
    //     section.bottom = section.top + elem.offsetHeight;
    //   });
    //   setActiveSection();
    // });
  }
});

document.addEventListener('DOMContentLoaded', function () {
    function animateRandomCard() {
        const cards = document.querySelectorAll('.icon-box');
        if (cards.length === 0) return;
        const randomIndex = Math.floor(Math.random() * cards.length);
        const card = cards[randomIndex];
        card.classList.add('random-animate');
        card.addEventListener('animationend', function handler() {
            card.classList.remove('random-animate');
            card.style.opacity = "0";
            card.removeEventListener('animationend', handler);
        });
    }

    // Trigger the first animation after 1.2s
    setTimeout(animateRandomCard, 1200);

    // Then repeat every 4 seconds
    setInterval(animateRandomCard, 4000);
});