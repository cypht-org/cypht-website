
// old events
const old_events = [
  {
    title: "Getting Started with Cypht",
    description:
      "An introductory session covering Cypht basics, installation steps, and initial configuration for new users.",
    date: "2025-01-18",
    hours: "14:00 - 15:30",
    type: "remote",
    address: "Online | Zoom | Remote session",
    organizer: {
      name: "Cypht Team",
      profile_url: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    // video_url: "https://www.youtube.com/watch?v=rfscVS0vtbw"
  },
  {
    title: "Securing Your Cypht Installation",
    description:
      "Best practices for securing Cypht, including server hardening and authentication strategies.",
    date: "2025-02-05",
    hours: "16:00 - 17:00",
    type: "remote",
    address: "Online | Google Meet | Remote session",
    organizer: {
      name: "Cypht Security",
      profile_url: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    // video_url: "https://www.youtube.com/watch?v=2l-AOB8dFzE"
  },
  {
    title: "Cypht Webmail Deep Dive",
    description:
      "Deep dive into Cypht Webmail features and customization.",
    date: "2025-02-20",
    hours: "10:00 - 12:00",
    type: "in-person",
    address: "France | Metz | CHR Metz-Thionville",
    organizer: {
      name: "Baraka M.",
      profile_url: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    video_url: "https://www.youtube.com/watch?v=HluANRwPyNo"
  },
  {
    "title": "Cypht Installation Workshop",
    "description": "Hands-on workshop guiding participants through the full installation process of Cypht on a Linux server.",
    "date": "2025-04-02",
    "hours": "13:00 - 15:00",
    "type": "remote",
    "address": "Online | Zoom | Remote session",
    "organizer": {
      "name": "Cypht Dev Team",
      "profile_url": "https://randomuser.me/api/portraits/men/21.jpg"
    },
    "video_url": "https://www.youtube.com/watch?v=9bZkp7q19f0"
  },
  {
    "title": "Cypht Authentication & Access Control",
    "description": "Overview of authentication methods and access control mechanisms available in Cypht.",
    "date": "2025-04-10",
    "hours": "16:00 - 17:30",
    "type": "remote",
    "address": "Online | Google Meet | Remote session",
    "organizer": {
      "name": "Security Team",
      "profile_url": "https://randomuser.me/api/portraits/women/12.jpg"
    },
    "video_url": "https://www.youtube.com/watch?v=V-_O7nl0Ii0"
  },
  {
    "title": "Customizing the Cypht Interface",
    "description": "Learn how to customize themes, layout, and UI components to adapt Cypht to your organization needs.",
    "date": "2025-04-18",
    "hours": "14:00 - 16:00",
    "type": "in-person",
    "address": "Germany | Berlin | Open Source Hub",
    "organizer": {
      "name": "UI/UX Team",
      "profile_url": "https://randomuser.me/api/portraits/men/55.jpg"
    },
    "video_url": "https://www.youtube.com/watch?v=E7wJTI-1dvQ"
  },
  {
    "title": "Cypht Performance Optimization",
    "description": "Techniques and best practices to improve performance and scalability of Cypht installations.",
    "date": "2025-04-25",
    "hours": "15:30 - 17:00",
    "type": "remote",
    "address": "Online | Microsoft Teams | Remote session",
    "organizer": {
      "name": "Performance Group",
      "profile_url": "https://randomuser.me/api/portraits/men/63.jpg"
    },
    "video_url": "https://www.youtube.com/watch?v=HgzGwKwLmgM"
  },
  {
    "title": "Cypht Logs, Monitoring & Debugging",
    "description": "Understanding logs, monitoring tools, and debugging techniques to maintain a healthy Cypht instance.",
    "date": "2025-05-03",
    "hours": "10:00 - 11:30",
    "type": "remote",
    "address": "Online | Zoom | Remote session",
    "organizer": {
      "name": "Ops Team",
      "profile_url": "https://randomuser.me/api/portraits/women/33.jpg"
    },
    "video_url": "https://www.youtube.com/watch?v=ktvTqknDobU"
  },
  {
    "title": "Migrating to Cypht from Legacy Webmail",
    "description": "Step-by-step guidance on migrating from legacy webmail solutions to Cypht.",
    "date": "2025-05-12",
    "hours": "14:00 - 16:00",
    "type": "in-person",
    "address": "France | Paris | Open Source Conference Room",
    "organizer": {
      "name": "Migration Team",
      "profile_url": "https://randomuser.me/api/portraits/men/44.jpg"
    },
    "video_url": "https://www.youtube.com/watch?v=uelHwf8o7_U"
  },
  {
    "title": "Cypht Module Architecture Explained",
    "description": "Deep dive into the internal module architecture of Cypht for developers and contributors.",
    "date": "2025-05-20",
    "hours": "17:00 - 18:30",
    "type": "remote",
    "address": "Online | Google Meet | Remote session",
    "organizer": {
      "name": "Core Developers",
      "profile_url": "https://randomuser.me/api/portraits/men/71.jpg"
    },
    "video_url": "https://www.youtube.com/watch?v=Zi_XLOBDo_Y"
  },
];

// https://picsum.photos/seed/event-0.6332654670036725/600/400
// Extract YouTube video ID from URL
function getYouTubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// Get YouTube thumbnail URL
function getYouTubeThumbnail(videoId, quality = 'mqdefault') {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

// Format date to "Month Day, Year"
function formatDate(dateString) {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Get event type name
function getEventTypeName(type) {
  const types = {
    'remote': 'Online',
    'in-person': 'In Person'
  };
  return types[type] || type;
}

// Pagination state
let currentPage = 1;
const itemsPerPage = 9;

// Update pagination controls
function updatePaginationControls(totalPages) {
  const paginationContainer = document.querySelector('.old-events-pagination');
  if (!paginationContainer) return;

  let paginationHTML = `
    <div class="pagination">
      <button class="pagination-button prev" ${currentPage === 1 ? 'disabled' : ''}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <div class="pagination-pages">
  `;

  // Show page numbers
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  if (startPage > 1) {
    paginationHTML += `
      <button class="pagination-page" data-page="1">1</button>
      ${startPage > 2 ? '<span class="pagination-ellipsis">...</span>' : ''}
    `;
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationHTML += `
      <button class="pagination-page ${i === currentPage ? 'active' : ''}" data-page="${i}">
        ${i}
      </button>
    `;
  }

  if (endPage < totalPages) {
    paginationHTML += `
      ${endPage < totalPages - 1 ? '<span class="pagination-ellipsis">...</span>' : ''}
      <button class="pagination-page" data-page="${totalPages}">${totalPages}</button>
    `;
  }

  paginationHTML += `
      </div>
      <button class="pagination-button next" ${currentPage === totalPages ? 'disabled' : ''}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </div>
  `;

  paginationContainer.innerHTML = paginationHTML;

  // Add event listeners
  document.querySelectorAll('.pagination-button').forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('prev') && currentPage > 1) {
        currentPage--;
      } else if (button.classList.contains('next') && currentPage < totalPages) {
        currentPage++;
      }
      load_old_events();
    });
  });

  document.querySelectorAll('.pagination-page:not(.active)').forEach(button => {
    button.addEventListener('click', () => {
      currentPage = parseInt(button.dataset.page);
      load_old_events();
    });
  });
}

// load old events with pagination
function load_old_events() {
  const oldEventsContainer = document.getElementById('old-events-container');
  
  if (!oldEventsContainer) return;
  
  // Clear existing content
  oldEventsContainer.innerHTML = '';
  
  // Calculate pagination
  const totalPages = Math.ceil(old_events.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = old_events.slice(startIndex, startIndex + itemsPerPage);
  
  // Create and append each old event for current page
  paginatedEvents.forEach(event => {
    const eventElement = document.createElement('article');
    eventElement.className = 'old-event-item';
    
    // Format date
    const formattedDate = formatDate(event.date);
    const eventType = getEventTypeName(event.type);
    
    // Get video ID and thumbnail
    const videoId = event.video_url ? getYouTubeId(event.video_url) : null;
    const imageUrl = videoId 
      ? getYouTubeThumbnail(videoId, 'maxresdefault')
      : (event.cover_url || `https://picsum.photos/seed/event-${Math.random()}/600/400`);
    
    // Create event card HTML
    eventElement.innerHTML = `
      <div class="event-image-container">
        <img src="${imageUrl}" 
             alt="${event.title}" 
             class="event-image"
             loading="lazy"
             decoding="async"
             onerror="if(this.src !== '${event.cover_url || ''}') this.src='${event.cover_url || `https://picsum.photos/seed/event-${Math.random()}/600/400`}'">
        ${videoId ? `
          <div class="play-button-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48" height="48">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        ` : ''}
        <span class="event-tag">${eventType}</span>
      </div>
      
      <div class="event-body">
        <div class="event-meta">
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M7 4V2.5M17 4V2.5"/><circle cx="16.5" cy="16.5" r="1.5"/><path stroke-linecap="round" d="M21.5 9H10.75M2 9h3.875M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07"/></g></svg>
          <span>${formattedDate || 'Date to be announced'}</span>
        </div>
        
        <h3 class="event-title">${event.title}</h3>
        
        <p class="event-description">${event.description}</p>
        
        <div class="event-footer">
          <div class="event-author">
            <img src="${event.organizer.profile_url}" 
                 alt="${event.organizer.name}" 
                 class="organizer-avatar">
            <div class="author-info">
              <span class="author-name">${event.organizer.name}</span>
              <span class="event-date">${event.hours || 'Time TBD'}</span>
            </div>
          </div>
        </div>
      </div>
    `;
    
    oldEventsContainer.appendChild(eventElement);
  });

  // Update pagination controls
  updatePaginationControls(totalPages);
}

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

document.addEventListener("DOMContentLoaded", () => {
  load_old_events();
  
  // Initialize lazy loading for images
  const lazyImages = document.querySelectorAll('.event-image[loading="lazy"]');
  lazyImages.forEach(img => handleImageLoad(img));
  
  // Use Intersection Observer for better performance
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          handleImageLoad(img);
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px',
      threshold: 0.01
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
});
