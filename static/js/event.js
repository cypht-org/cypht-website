// event list
const event_types = [
  {
    name: "All",
    value: undefined,
  },
  {
    name: "Community Meeting",
    value: 1,
  },
  {
    name: "Workshop",
    value: 2,
  },
  {
    name: "On Demand",
    value: 3,
  },
  {
    name: "Other",
    value: 4,
  },
  {
    name: "Conference / Talk",
    value: 5,
  },
];

// events
const events = [
  {
    title: "Cypht Community Event #02 – 2K26 Edition",
    subtitle:
      "A recurring community meeting bringing together Cypht users, contributors, and enthusiasts to connect, collaborate, and stay aligned on the project’s evolution.",
    cover_url: `https://picsum.photos/seed/event-0.15679512620868552/600/400`,
    date: "2026-02-13",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: "https://meet.evoludata.com/rooms/5ih-sxu-osg-dvg/join",
    status: true,
    type_key: 1,
    organizer: [
      {
        name: "Baraka Kinywa",
        profile_url:
          "https://videos.evoludata.com/lazy-static/avatars/966a08a6-f4be-4db8-9bb6-918ef6b71ebd.png",
        github_link: "https://github.com/alexmartin",
        x: "https://x.com/alexmartin_dev"
      }
    ]
  },
  {
    title: "Cypht Community Event #03 – 2K26 Edition",
    subtitle:
      "A global Cypht community session focused on sharing updates, exchanging ideas, and discussing ongoing and upcoming initiatives.",
    cover_url: `https://picsum.photos/seed/event-0.7204123755084528/600/400`,
    date: "2026-03-13",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: "https://meet.evoludata.com/rooms/5ih-sxu-osg-dvg/join",
    status: true,
    type_key: 1,
    organizer: [
      {
        name: "Baraka Kinywa",
        profile_url:
          "https://videos.evoludata.com/lazy-static/avatars/966a08a6-f4be-4db8-9bb6-918ef6b71ebd.png",
        github_link: "https://github.com/alexmartin",
        x: "https://x.com/alexmartin_dev"
      }
    ]
  },
  {
    title: "Cypht Community Event #04 – 2K26 Edition",
    subtitle:
      "An open and recurring forum for the Cypht community to connect, collaborate, and stay informed about the project’s direction and progress.",
    cover_url: `https://picsum.photos/seed/event-0.1956990521109031/600/400`,
    date: "2026-04-10",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: "https://meet.evoludata.com/rooms/5ih-sxu-osg-dvg/join",
    status: true,
    type_key: 1,
    organizer: [
      {
        name: "Baraka Kinywa",
        profile_url:
          "https://videos.evoludata.com/lazy-static/avatars/966a08a6-f4be-4db8-9bb6-918ef6b71ebd.png",
        github_link: "https://github.com/alexmartin",
        x: "https://x.com/alexmartin_dev"
      }
    ]
  },
  {
    title: "Cypht Community Event #5 – 2K26 Edition",
    subtitle:
      "A recurring global meetup where the Cypht community comes together to share insights, exchange ideas, and contribute to the project’s evolution.",
    cover_url: `https://picsum.photos/seed/event-0.2696668875814928/600/400`,
    date: "2026-05-08",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: "https://meet.evoludata.com/rooms/5ih-sxu-osg-dvg/join",
    status: true,
    type_key: 1,
    organizer: [
      {
        name: "Baraka Kinywa",
        profile_url:
          "https://videos.evoludata.com/lazy-static/avatars/966a08a6-f4be-4db8-9bb6-918ef6b71ebd.png",
        github_link: "https://github.com/alexmartin",
        x: "https://x.com/alexmartin_dev"
      }
    ]
  },
  {
    title: "Getting Started with Cypht — Complete Beginner Guide (On Demand)",
    subtitle:
      "An on-demand introduction to the Cypht ecosystem, helping users understand the project, its goals, and how to get involved with the community.",
    cover_url: `https://picsum.photos/seed/event-${Math.random()}/600/400`,
    date: null,
    hours: "On demand",
    location: "Online",
    meet_link: "https://meet.evoludata.com/rooms/5ih-sxu-osg-dvg/join",
    status: true,
    type_key: 3,
    organizer: [
      {
        name: "Baraka Kinywa",
        profile_url:
          "https://videos.evoludata.com/lazy-static/avatars/966a08a6-f4be-4db8-9bb6-918ef6b71ebd.png",
        github_link: "https://github.com/alexmartin",
        x: "https://x.com/alexmartin_dev"
      }
    ]
  },
  {
    title: "Cypht Modules Deep Dive — Customization & Extensibility",
    subtitle:
      "An on-demand community session exploring Cypht’s modular architecture and how contributors can extend and customize the platform.",
    cover_url: `https://picsum.photos/seed/event-0.8348528803120625/600/400`,
    date: null,
    hours: "On demand",
    location: "Online",
    meet_link: "https://meet.evoludata.com/rooms/5ih-sxu-osg-dvg/join",
    status: true,
    type_key: 3,
    organizer: [
      {
        name: "Baraka Kinywa",
        profile_url:
          "https://videos.evoludata.com/lazy-static/avatars/966a08a6-f4be-4db8-9bb6-918ef6b71ebd.png",
        github_link: "https://github.com/alexmartin",
        x: "https://x.com/alexmartin_dev"
      }
    ]
  },
  {
    title: "Cypht Integration Hackathon — Build & Extend in 48h",
    subtitle:
      "A community-driven event where contributors collaborate, exchange ideas, and work together to extend the Cypht ecosystem.",
    cover_url: `https://picsum.photos/seed/event-0.7995822454348985/600/400`,
    date: "2026-06-12",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: "https://meet.evoludata.com/rooms/5ih-sxu-osg-dvg/join",
    status: true,
    type_key: 1,
    organizer: [
      {
        name: "Baraka Kinywa",
        profile_url:
          "https://videos.evoludata.com/lazy-static/avatars/966a08a6-f4be-4db8-9bb6-918ef6b71ebd.png",
        github_link: "https://github.com/alexmartin",
        x: "https://x.com/alexmartin_dev"
      }
    ]
  },
  {
    title: "Cypht Community Event #6 – 2K26 Edition",
    subtitle:
      "A recurring monthly gathering for the global Cypht community to connect, collaborate, and discuss the future of the project.",
    cover_url: `https://picsum.photos/seed/event-0.4050603503046897/600/400`,
    date: "2026-07-10",
    hours: "10:00 - 13:00",
    location: "Online",
    meet_link: "https://meet.evoludata.com/rooms/5ih-sxu-osg-dvg/join",
    status: true,
    type_key: 1,
    organizer: [
      {
        name: "Baraka Kinywa",
        profile_url:
          "https://videos.evoludata.com/lazy-static/avatars/966a08a6-f4be-4db8-9bb6-918ef6b71ebd.png",
        github_link: "https://github.com/alexmartin",
        x: "https://x.com/alexmartin_dev"
      }
    ]
  }
];

// get filter item
function get_filter_item(type_key) {
  return event_types.find((type) => type.value === type_key);
}

//
function format_date(_date) {
  const date = new Date(_date);
  return {
    weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
    month: date.toLocaleDateString("en-US", { month: "short" }),
    day: date.getDate(),
    year: date.getFullYear(),
    full: date.toLocaleDateString("en-US", {
      // weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric"
    })
  };
}

// load events
function create_event_item(event) {
  let formatted_date = "TBD";

  if (event.date) {
    formatted_date = format_date(event.date)
  }

  // <li>
  const li = document.createElement("li");
  li.classList.add("event-item-li");
  li.setAttribute("role", "listitem");

  // <a>
  const a = document.createElement("a");
  // a.href = "#";
  a.classList.add("event-item");
  a.setAttribute("role", "button");
  a.setAttribute("tabindex", "0");
  a.setAttribute("aria-label", `View details for ${event.title}`);

  // Data attributes
  a.dataset.eventTitle = event.title;
  a.dataset.eventDate = formatted_date;
  a.dataset.eventTime = event.hours || "Time TBD";
  a.dataset.eventLocation = event.location || "Location TBD";
  a.dataset.eventDescription = event.subtitle || "";
  a.dataset.eventType = get_filter_item(event.type_key).name;
  a.dataset.eventOrganizer = event.organizer[0]?.name || "Cypht Community";
  a.dataset.eventOrganizerAvatar =
    event.organizer[0]?.profile_url || "/img/logo.svg";

  // Click + clavier (accessibilité)
  a.addEventListener("click", (e) => {
    e.preventDefault();
    openEventOffcanvas(event, a);
  });

  a.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openEventOffcanvas(event, a);
    }
  });

  // Contenu HTML
  a.innerHTML = `
    <div class="event-item-content">
      <div class="event-item-header">
       <div>
          <div class="event-item-date">
            <span class="event-day">${event.date ? new Date(event.date).getDate():"--"}</span>
            <span class="event-month">${event.date ?  new Date(event.date).toLocaleString("en-US", { month: "short" }):"--"}</span>
         </div> 
       </div>
        <div class="event-header-content">
          <div>
              <span class="event-type ${event.type_key}">
            ${get_filter_item(event.type_key).name}
          </span>
          </div>
          <h3>${event.title}</h3>
          ${event.subtitle ? `<span class="event-subtitle">${event.subtitle}</span>` : ""}
        </div>
      </div>

      <div class="event-item-footer">
        <div class="event-host">
          <img
            src="${event.organizer[0]?.profile_url || "/img/logo.svg"}"
            alt="${event.organizer[0]?.name || "Cypht"}"
            class="organizer-avatar"
            loading="lazy"
          />
          <span class="event-host-name">
            ${event.organizer[0]?.name || "Cypht Community"}
          </span>
        </div>
        <span class="event-cta">
          View Details <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </div>
  `;

  li.appendChild(a);
  return li;
}

// open offcanvas
function openEventOffcanvas(event, triggerEl) {
  const coverImg = document.getElementById("event-detail-cover");
  const wrapper = coverImg?.closest(".image-wrapper");
  let formatted_date = "";
  
  if (event.date) {
    formatted_date = format_date(event.date)
  }

  if (coverImg && wrapper) {
    wrapper.classList.add("skeleton");

    coverImg.onload = () => {
      wrapper.classList.remove("skeleton");
      wrapper.classList.add("loaded");
    };

    coverImg.onerror = () => {
      wrapper.classList.remove("skeleton");
      wrapper.classList.add("loaded");
      coverImg.src = "/images/fallback.jpg";
    };

    coverImg.src = event.cover_url || "/img/default-event-cover.jpg";
    coverImg.alt = event.title;
  }

  document.getElementById("event-detail-title").textContent = event.title;
  document.getElementById("ed_description").textContent = event.subtitle || "";

  document.getElementById("event-detail-organizer").innerHTML = `
    <img src="${event.organizer[0]?.profile_url || "/img/logo.svg"}"
         alt="${event.organizer[0]?.name || "Cypht"}"
         class="organizer-avatar">
    <div class="event-detail-organizer-content">
      <span>${event.organizer[0]?.name || "Cypht Community"}</span>
      <span class="organizer-label">moderator</span>
    </div>
  `;

  document.getElementById("ed_calender_month").textContent= formatted_date.month || "--";
  document.getElementById("ed_calender_day").textContent= formatted_date.day || "--";
  document.querySelector(".ed-long-date").textContent = formatted_date.full || "--";
  document.querySelector(".ed-long-time").textContent = event.date ? event.hours : "--";
  document.querySelector(".ed-location-text").textContent = event.location || "--";

  const offcanvas = new bootstrap.Offcanvas(
    document.getElementById("offcanvasExample")
  );
  offcanvas.show();

  // Update copy button with event link
  if (event.meet_link) {
    const copyBtn = document.getElementById('event_copy_btn');
    if (copyBtn) {
      // Remove previous event listeners
      const newCopyBtn = copyBtn.cloneNode(true);
      copyBtn.parentNode.replaceChild(newCopyBtn, copyBtn);
      // Add click event with current event link
      newCopyBtn.addEventListener('click', () => copyEventLink(event.meet_link));
    }
  }

  // Focus management (a11y)
  setTimeout(() => {
    document.getElementById("event-detail-title")?.focus();
  }, 300);
}

function load_events(type_key) {
  const event_list = document.getElementById("event_list");
  event_list.innerHTML = "";

  const filtered_events =
    type_key === undefined || type_key === -1
      ? events
      : events.filter((event) => event.type_key === type_key);

  if (!filtered_events.length) {
    event_list.textContent = "No events found";
    event_list.classList.add("no_events_found");
    return;
  }

  const fragment = document.createDocumentFragment();

  filtered_events.forEach((event) => {
    fragment.appendChild(create_event_item(event));
  });

  event_list.appendChild(fragment);
}
// load event filter
function load_event_filter() {
  const filter = event_types;
  const event_filter = document.getElementById("event_filter");
  let index = 0;

  // Clear filter container
  event_filter.innerHTML = "";

  filter.forEach((type) => {
    const count =
      index === 0
        ? events.length
        : events.filter((event) => event.type_key === type.value).length;

    const filter_item = document.createElement("div");
    filter_item.classList.add("event-filter-item");
    filter_item.innerHTML = `
      <span class="event-filter-item-name">${type.name} <span class="event-filter-item-count">(${count})</span></span>
    `;

    //  Initial active filter
    if (index === 0) {
      filter_item.classList.add("filter_active");
    }

    filter_item.addEventListener("click", () => {
      // Remove the active class from all filters
      document.querySelectorAll(".event-filter-item").forEach((item) => {
        item.classList.remove("filter_active");
      });

      // Add the active class to the clicked filter
      filter_item.classList.add("filter_active");

      // Load events
      const value = type.value !== undefined ? Number(type.value) : undefined;
      load_events(value);
    });

    event_filter.appendChild(filter_item);
    index++;
  });
}

// Function to copy event link to clipboard
function copyEventLink(link) {
  navigator.clipboard.writeText(link).then(() => {
    const copyBtn = document.getElementById('event_copy_btn');
    if (copyBtn) {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"/></svg> Link copied!';
      
      // Reset button text after 2 seconds
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2000);
    }
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
}

// Add click event listener to copy button
function setupCopyButton(link) {
  const copyBtn = document.getElementById('event_copy_btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => copyEventLink(link));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  load_event_filter();
  load_events();
  
  // Initialize copy button with empty link (will be updated when event is opened)
  setupCopyButton('');
});
