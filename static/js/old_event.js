/* =========================================================
   CONFIGURATION
========================================================= */

const PEERTUBE_INSTANCE = "https://videos.evoludata.com";
const CHANNEL_NAME = "cypht_monthly_meetings";
const VIDEOS_PER_PAGE = 9;
const AUTO_REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes

/* =========================================================
   APPLICATION STATE
========================================================= */

let currentPage = 1;
let totalPages = 1;

/* =========================================================
   API
========================================================= */

/**
 * Fetch past events from PeerTube API
 * @param {number} page
 * @returns {Promise<{events: Array, total: number}>}
 */
async function getOldEvents(page = 1) {
  try {
    showLoading();

    const params = new URLSearchParams({
      start: (page - 1) * VIDEOS_PER_PAGE,
      count: VIDEOS_PER_PAGE,
      sort: "-publishedAt",
    });

    const response = await fetch(
      `${PEERTUBE_INSTANCE}/api/v1/video-channels/${CHANNEL_NAME}/videos?${params}`,
      {
        headers: { Accept: "application/json" },
        cache: "no-cache",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    const events = data.data.map(mapVideoToEvent);

    return {
      events,
      total: data.total ?? events.length,
    };
  } catch (error) {
    console.error("Failed to fetch old events:", error);
    showError("Unable to load events. Please try again later.");
    return { events: [], total: 0 };
  }
}

// 

function createEventSkeletonCard() {
  const article = document.createElement("article");
  article.className = "old-event-item skeleton-card";

  article.innerHTML = `
    <div class="event-image-container skeleton">
      <div class="event-media-wrapper">
        <div class="skeleton-box skeleton-image"></div>
      </div>
      <span class="event-tag skeleton-box skeleton-tag"></span>
    </div>

    <div class="event-body">
      <div class="event-meta">
        <span class="skeleton-box skeleton-icon"></span>
        <span class="skeleton-box skeleton-text short"></span>
      </div>

      <h3 class="event-title skeleton-box skeleton-text"></h3>

      <p class="event-description">
        <span class="skeleton-box skeleton-text"></span>
        <span class="skeleton-box skeleton-text"></span>
      </p>
    </div>
  `;

  return article;
}

/**
 * Map PeerTube video object to event model
 */
function mapVideoToEvent(video) {
  return {
    id: video.uuid,
    title: video.name,
    description: video.description || "No description available",
    date: video.publishedAt,
    hours: video.duration ? formatDuration(video.duration) : null,
    type: video.isLive ? "live" : "remote",
    address: video.channel?.displayName
      ? `On ${video.channel.displayName}`
      : "Online",
    organizer: {
      name: video.account?.displayName || "Cypht Community",
      profile_url: video.account.avatars
        ? video.account.avatars[1].fileUrl
        : "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    video_url: video.url,
    thumbnail_url: video.thumbnailPath
      ? `${PEERTUBE_INSTANCE}${video.thumbnailPath}`
      : null,
  };
}

/* =========================================================
   UI – LOADING & ERRORS
========================================================= */

function showLoading(count = 6) {
  const container = document.getElementById("old-events-container");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < count; i++) {
    container.appendChild(createEventSkeletonCard());
  }
}

function showError(message) {
  const container = document.getElementById("old-events-container");
  if (!container) return;

  container.innerHTML = `
    <div class="error-message">
      <p>${message}</p>
      <button class="retry-button">Retry</button>
    </div>
  `;

  container.querySelector(".retry-button")?.addEventListener("click", () => {
    loadOldEvents(currentPage);
  });
}

/* =========================================================
   UI – EVENTS RENDERING
========================================================= */

/**
 * Render old events list
 */
function displayOldEvents(events) {
  const container = document.getElementById("old-events-container");
  if (!container) return;

  container.innerHTML = "";

  if (!events.length) {
    container.innerHTML = `
      <div class="no-events">
        <p>No past events available.</p>
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();

  events.forEach((event) => {
    fragment.appendChild(createEventCard(event));
  });

  container.appendChild(fragment);
}

//  
function resolveThumbnailUrl(event) {
  if (!event?.thumbnail_url) return null;

  // Already an absolute URL
  if (/^https?:\/\//i.test(event.thumbnail_url)) {
    return event.thumbnail_url;
  }

  // Relative Peertube path
  return `${PEERTUBE_INSTANCE}${event.thumbnail_url}`;
}

/**
 * Create a single event card
 */
function createEventCard(event) {
  const article = document.createElement("article");
  article.className = "old-event-item";

  const thumbnailUrl = resolveThumbnailUrl(event);
  // const thumbnailUrl = `https://picsum.photos/seed/event-${Math.random()}/600/400`;
  const formatted_date =  format_date(event.date)

  article.innerHTML = `
    <div class="event-image-container skeleton">
      <div class="event-media-wrapper">
        ${
          thumbnailUrl
            ? `<img 
                class="event-thumbnail" 
                alt="${event.title}" 
                loading="lazy"
              />`
            : `<div class="no-thumbnail"></div>`
        }
        ${
          event.video_url
            ? `<button class="play-button-overlay" aria-label="Play video">
                ▶
              </button>`
            : ""
        }
      </div>

      <span class="event-tag">${event.type || "remote"}</span>
    </div>

    <div class="event-body">
      
      <h3 class="event-title">${event.title}</h3>
      <p class="event-description">${event.description}</p>
    </div>
    <div class="event-footer">
        <div class="event-author">
          <img class="organizer-avatar" src="${event.organizer.profile_url}" alt="Organizer" />
         <div class="organizer-info">
             <span class="author-name">${event.organizer.name}</span>
            <span class="organizer-label">moderator</span>
         </div>
        </div>

        <div class="event-meta">
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M7 4V2.5M17 4V2.5"/><circle cx="16.5" cy="16.5" r="1.5"/><path stroke-linecap="round" d="M21.5 9H10.75M2 9h3.875M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07"/></g></svg>
          <span>${formatted_date.full}</span>
        </div>
    </div>
  `;

  /* DOM references (AFTER innerHTML) */
  const container = article.querySelector(".event-image-container");
  const img = article.querySelector(".event-thumbnail");
  const playBtn = article.querySelector(".play-button-overlay");

  /* Handle thumbnail loading */
  if (img && thumbnailUrl) {
    img.onload = () => {
      container.classList.remove("skeleton");
      container.classList.add("loaded");
    };

    img.onerror = () => {
      container.classList.remove("skeleton");
      container.classList.add("loaded");
      img.remove(); // no broken image
    };

    img.src = thumbnailUrl;
  } else {
    // No thumbnail at all → remove skeleton immediately
    container.classList.remove("skeleton");
    container.classList.add("loaded");
  }

  /* Play video */
  if (playBtn && event.video_url) {
    playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.open(event.video_url, "_blank", "noopener");
    });
  }

  return article;
}

/* =========================================================
   PAGINATION
========================================================= */

function updatePaginationControls() {
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

    // Afficher les numéros de page
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

    // Ajouter les écouteurs d'événements
    document.querySelectorAll('.pagination-button').forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('prev') && currentPage > 1) {
                loadOldEvents(currentPage - 1);
            } else if (button.classList.contains('next') && currentPage < totalPages) {
                loadOldEvents(currentPage + 1);
            }
        });
    });

    document.querySelectorAll('.pagination-page:not(.active)').forEach(button => {
        button.addEventListener('click', () => {
            const page = parseInt(button.dataset.page);
            if (page !== currentPage) {
                loadOldEvents(page);
            }
        });
    });
}

/* =========================================================
   MAIN CONTROLLER
========================================================= */

async function loadOldEvents(page = 1) {
  currentPage = page;

  const { events, total } = await getOldEvents(page);
  totalPages = Math.ceil(total / VIDEOS_PER_PAGE);

  displayOldEvents(events);
  updatePaginationControls();

  // Scroll vers le haut de la section événements après le rendu DOM
  setTimeout(() => {
    const header = document.querySelector(".page-header-content");
    if (header) {
      header.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: -40, behavior: "smooth" });
    }
  }, 100);
}

/* =========================================================
   UTILITIES
========================================================= */

function format_date(_date) {
  const date = new Date(_date);
  return {
    weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
    month: date.toLocaleDateString("en-US", { month: "short" }),
    day: date.getDate(),
    year: date.getFullYear(),
    full: date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    })
  };
}

function formatDuration(seconds) {
  if (!seconds) return "--:--";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/* =========================================================
   INIT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  loadOldEvents(1);

  // setInterval(() => {
  //   loadOldEvents(currentPage);
  // }, AUTO_REFRESH_INTERVAL);
});