document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".sec-tabs-menu ul li a");
  const sections = document.querySelectorAll(".sec-tab-content");
  
  // Configuration
  const config = {
    offset: 180, // Offset for scroll detection
    debounceDelay: 16, // ~60fps for smooth scrolling
    activeClass: "sec-active"
  };

  // Map anchor IDs to section indices
  function getSectionIndex(anchorId) {
    switch(anchorId) {
      case 'browser': return 0;
      case 'server': return 1;
      case 'development': return 2;
      default: return 0;
    }
  }

  // Clear all active states
  function clearActive() {
    menuLinks.forEach(link => link.classList.remove(config.activeClass));
    sections.forEach(section => section.classList.remove(config.activeClass));
  }

  // Set active state for specific link and section
  function setActive(linkId) {
    clearActive();
    
    const activeLink = document.querySelector(`.sec-tabs-menu a[href="#${linkId}"]`);
    const sectionIndex = getSectionIndex(linkId);
    const activeSection = sections[sectionIndex];
    
    if (activeLink) {
      activeLink.classList.add(config.activeClass);
    }
    
    if (activeSection) {
      activeSection.classList.add(config.activeClass);
    }
  }

  // Handle click events
  function handleClick(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute("href").substring(1);
    const targetAnchor = document.getElementById(targetId);
    
    if (targetAnchor) {
      setActive(targetId);
      targetAnchor.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
  }

  // Handle scroll events with debounce
  function handleScroll() {
    let currentId = "";
    let closestSection = null;
    let closestDistance = Infinity;
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - config.offset);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestSection = section;
      }
    });
    
    if (closestSection) {
      // Find the corresponding anchor and link
      const sectionIndex = Array.from(sections).indexOf(closestSection);
      let targetId = '';
      
      switch(sectionIndex) {
        case 0: targetId = 'browser'; break;
        case 1: targetId = 'server'; break;
        case 2: targetId = 'development'; break;
      }
      
      if (targetId) {
        const activeLink = document.querySelector(`.sec-tabs-menu a[href="#${targetId}"]`);
        if (activeLink && !activeLink.classList.contains(config.activeClass)) {
          setActive(targetId);
        }
      }
    }
  }

  // Debounce function for performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initialize event listeners
  menuLinks.forEach(link => {
    link.addEventListener("click", handleClick);
  });

  // Add scroll event listener with debounce
  const debouncedScroll = debounce(handleScroll, config.debounceDelay);
  window.addEventListener("scroll", debouncedScroll);

  // Set initial active state based on current scroll position
  handleScroll();
  
  // Handle hash changes in URL
  window.addEventListener("hashchange", function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActive(hash);
      const targetAnchor = document.getElementById(hash);
      if (targetAnchor) {
        targetAnchor.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }
    }
  });

  // Check for initial hash in URL
  if (window.location.hash) {
    const initialHash = window.location.hash.substring(1);
    setActive(initialHash);
  }
});