// Documentation Page Enhancements
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100; // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all doc sections
  document.querySelectorAll(".doc-section").forEach((section) => {
    observer.observe(section);
  });

  // Observe TOC categories
  document.querySelectorAll(".toc-category").forEach((category) => {
    observer.observe(category);
  });

  // Animate hero elements on load
  const heroElements = document.querySelectorAll(
    ".doc-badge, .hero-title, .hero-subtitle, .hero-description, .doc-stats, .hero-cta, .feature-preview"
  );

  heroElements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 100 * index);
  });

  // Add hover effects to images
  const docImages = document.querySelectorAll(".doc-image");
  docImages.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.02)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });

  // Add click effects to feature buttons
  const featureButtons = document.querySelectorAll(".feature-button");
  featureButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add progress indicator for reading
  const progressBar = document.createElement("div");
  progressBar.className = "reading-progress";
  progressBar.innerHTML = '<div class="progress-fill"></div>';
  document.body.appendChild(progressBar);

  // Update progress on scroll
  window.addEventListener("scroll", () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const progressFill = document.querySelector(".progress-fill");
    if (progressFill) {
      progressFill.style.width = scrolled + "%";
    }
  });

  // Add search functionality for TOC
  const tocLinks = document.querySelectorAll(".toc-category a");
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search documentation...";
  searchInput.className = "toc-search";

  const tocTitle = document.querySelector(".toc-title");
  if (tocTitle) {
    tocTitle.parentNode.insertBefore(searchInput, tocTitle.nextSibling);
  }

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    tocLinks.forEach((link) => {
      const text = link.textContent.toLowerCase();
      const category = link.closest(".toc-category");

      if (text.includes(searchTerm) || searchTerm === "") {
        link.style.display = "flex";
        if (category) category.style.display = "block";
      } else {
        link.style.display = "none";
        // Hide category if no visible links
        const visibleLinks = category.querySelectorAll('a[style*="flex"]');
        if (visibleLinks.length === 0) {
          category.style.display = "none";
        }
      }
    });
  });

  // Add copy to clipboard for code blocks
  const codeBlocks = document.querySelectorAll("pre");
  codeBlocks.forEach((block) => {
    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.innerHTML = "📋";
    copyButton.title = "Copy to clipboard";

    block.style.position = "relative";
    block.appendChild(copyButton);

    copyButton.addEventListener("click", () => {
      const text = block.textContent;
      navigator.clipboard.writeText(text).then(() => {
        copyButton.innerHTML = "✅";
        setTimeout(() => {
          copyButton.innerHTML = "📋";
        }, 2000);
      });
    });
  });
});

// Add CSS for animations and effects
const style = document.createElement("style");
style.textContent = `
  .animate-in {
    animation: slideInUp 0.6s ease forwards;
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .reading-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea, #764ba2);
    width: 0%;
    transition: width 0.1s ease;
  }
  
  .toc-search {
    width: 100%;
    max-width: 400px;
    padding: 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;
    margin: 2rem auto;
    display: block;
    background: white;
    transition: all 0.3s ease;
  }
  
  .toc-search:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  .copy-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 6px;
    padding: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .copy-button:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
  
  .feature-button {
    position: relative;
    overflow: hidden;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .animate-in {
      animation: none;
    }
    
    .ripple {
      display: none;
    }
    
    .progress-fill {
      transition: none;
    }
  }
`;
document.head.appendChild(style);
