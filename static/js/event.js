// event list
const event_types = [
  {
    name: "All",
    value: undefined,
  },
  {
    name: "Meetup",
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
    title: "Cypht Installation & Setup Workshop — Live Hands-on Session",
    subtitle:
      "A practical, step-by-step live workshop covering Cypht installation, initial configuration, server requirements, and common setup pitfalls, with real-time Q&A.",
    cover_url: `https://picsum.photos/seed/event-0.15679512620868552/600/400`,
    date: "2025-01-25",
    hours: "14:00 - 17:30",
    location: "Online",
    status: true,
    type_key: 2,
    organizer: [
      {
        name: "Alex Martin",
        profile_url: "https://randomuser.me/api/portraits/men/32.jpg",
        github_link: "https://github.com/alexmartin",
        x: "https://x.com/alexmartin_dev"
      }
    ]
  },
  {
    title: "Cypht Community Meetup — Best Practices & Real Use Cases",
    subtitle:
      "An interactive community meetup focused on real-world Cypht use cases, productivity tips, performance optimization, and open discussions with experienced users.",
    cover_url: `https://picsum.photos/seed/event-0.7204123755084528/600/400`,
    date: "2025-03-02",
    hours: "15:00 - 18:00",
    location: "Online",
    status: true,
    type_key: 1,
    organizer: [
      {
        name: "Sophie Bernard",
        profile_url: "https://randomuser.me/api/portraits/women/44.jpg",
        github_link: "https://github.com/sophiebernard",
        x: "https://x.com/sophie_codes"
      }
    ]
  },
  {
    title: "Advanced Cypht Configuration — Expert-Level Workshop",
    subtitle:
      "A deep technical session covering advanced IMAP and SMTP configurations, multiple profiles, custom modules, performance tuning, and production-ready setups.",
    cover_url: `https://picsum.photos/seed/event-0.1956990521109031/600/400`,
    date: "2025-02-10",
    hours: "09:00 - 16:00",
    location: "Online",
    status: true,
    type_key: 2,
    organizer: [
      {
        name: "Marco Rossi",
        profile_url: "https://randomuser.me/api/portraits/men/65.jpg",
        github_link: "https://github.com/marcrossi",
        x: "https://x.com/marco_dev"
      }
    ]
  },
  {
    title: "Cypht Security & Encryption — Privacy-Focused Live Session",
    subtitle:
      "An in-depth security session covering PGP/GPG encryption, secure authentication methods, privacy best practices, and how to harden your Cypht installation.",
    cover_url: `https://picsum.photos/seed/event-0.2696668875814928/600/400`,
    date: "2025-04-05",
    hours: "08:30 - 12:00",
    location: "Online",
    status: true,
    type_key: 2,
    organizer: [
      {
        name: "Nadia El Amrani",
        profile_url: "https://randomuser.me/api/portraits/women/19.jpg",
        github_link: "https://github.com/nadia-sec",
        x: "https://x.com/nadia_security"
      }
    ]
  },
  {
    title: "Getting Started with Cypht — Complete Beginner Guide (On Demand)",
    subtitle:
      "A comprehensive on-demand guide introducing Cypht from installation to daily usage, including account setup, inbox management, and essential features.",
    cover_url: `https://picsum.photos/seed/event-${Math.random()}/600/400`,
    date: null,
    hours: "On demand",
    location: "Online",
    status: true,
    type_key: 3,
    organizer: [
      {
        name: "Lucas Meyer",
        profile_url: "https://randomuser.me/api/portraits/men/11.jpg",
        github_link: "https://github.com/lucasmeyer",
        x: "https://x.com/lucas_docs"
      }
    ]
  },
  {
    title: "Cypht Modules Deep Dive — Customization & Extensibility",
    subtitle:
      "A focused on-demand session explaining Cypht’s modular architecture, how modules work, and how to customize or extend them for specific workflows.",
    cover_url: `https://picsum.photos/seed/event-0.8348528803120625/600/400`,
    date: null,
    hours: "On demand",
    location: "Online",
    status: true,
    type_key: 3,
    organizer: [
      {
        name: "Emily Johnson",
        profile_url: "https://randomuser.me/api/portraits/women/52.jpg",
        github_link: "https://github.com/emilyjohnson",
        x: "https://x.com/emily_ui"
      }
    ]
  },
  {
    title: "Cypht Integration Hackathon — Build & Extend in 48h",
    subtitle:
      "A 48-hour online hackathon where developers collaborate to build integrations, plugins, and extensions that enhance the Cypht email ecosystem.",
    cover_url: `https://picsum.photos/seed/event-0.7995822454348985/600/400`,
    date: "2025-05-17",
    hours: "48h non-stop",
    location: "Online",
    status: true,
    type_key: 4,
    organizer: [
      {
        name: "David Nguyen",
        profile_url: "https://randomuser.me/api/portraits/men/83.jpg",
        github_link: "https://github.com/davidnguyen",
        x: "https://x.com/david_hacks"
      }
    ]
  },
  {
    title: "The Future of Email with Cypht — Open Source Conference Talk",
    subtitle:
      "A forward-looking talk exploring the future of open-source email, unified inbox solutions, community-driven development, and the Cypht roadmap.",
    cover_url: `https://picsum.photos/seed/event-0.4050603503046897/600/400`,
    date: "2025-08-20",
    hours: "10:00 - 13:00",
    location: "Online",
    status: true,
    type_key: 5,
    organizer: [
      {
        name: "Claire Dubois",
        profile_url: "https://randomuser.me/api/portraits/women/7.jpg",
        github_link: "https://github.com/clairedubois",
        x: "https://x.com/claire_open"
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
      weekday: "long",
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
          <span class="event-type ${event.type_key}">
            ${get_filter_item(event.type_key).name}
          </span>
          <h3>${event.title}</h3>
          ${event.subtitle ? `<div class="event-subtitle">${event.subtitle}</div>` : ""}
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

document.addEventListener("DOMContentLoaded", () => {
  load_event_filter();
  load_events();
});
