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

const MEET_LINK = "https://meet.evoludata.com/rooms/5ih-sxu-osg-dvg/join";

const defaultOrganizer = [
  {
    name: "Baraka Kinywa",
    profile_url:
      "https://videos.evoludata.com/lazy-static/avatars/966a08a6-f4be-4db8-9bb6-918ef6b71ebd.png",
    github_link: "https://github.com/alexmartin",
    x: "https://x.com/alexmartin_dev",
  },
];

// events (monthly community meets: every 2nd Friday — same room link)
const events = [
  {
    title: "Cypht Monthly Sync — February: Roadmap & Q1 priorities",
    subtitle:
      "Open session on where the project stands and what ships next. We review recent progress, walk through priority issues and milestones, and align on features targeted for the coming weeks. Bring questions about the backlog, release scope, and how you can plug into active work.",
    cover_url: `https://picsum.photos/seed/event-0.15679512620868552/600/400`,
    date: "2026-02-13",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 1,
    organizer: defaultOrganizer,
  },
  {
    title: "Cypht Monthly Sync — March: Issue triage & contributor check‑in",
    subtitle:
      "We focus on the issue tracker: what’s blocked, what needs labels or owners, and which feature requests deserve discussion. Expect a concise project health update, then room for proposals, bug reports, and coordination on pull requests and reviews.",
    cover_url: `https://picsum.photos/seed/event-0.7204123755084528/600/400`,
    date: "2026-03-13",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 1,
    organizer: defaultOrganizer,
  },
  {
    title: "Cypht Monthly Sync — April: Features in flight & release notes",
    subtitle:
      "Deep dive into features under development and recently merged work. We connect implementation progress to user-facing changes, surface risks or dependencies, and use issues and discussions to decide what needs follow-up before the next cut.",
    cover_url: `https://picsum.photos/seed/event-monthly-2026-04/600/400`,
    date: "2026-04-10",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 1,
    organizer: defaultOrganizer,
  },
  {
    title: "Cypht Monthly Sync — May: UX polish, integrations & open floor",
    subtitle:
      "A practical call on refinements and extensibility: UI/UX feedback, integration points, and how modules evolve. We recap project advancement since last month, review outstanding issues affecting real usage, and prioritize what to tackle next together.",
    cover_url: `https://picsum.photos/seed/event-0.2696668875814928/600/400`,
    date: "2026-05-08",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 1,
    organizer: defaultOrganizer,
  },
  {
    title: "Getting Started with Cypht — Complete Beginner Guide (On Demand)",
    subtitle:
      "An on-demand introduction to the Cypht ecosystem, helping users understand the project, its goals, and how to get involved with the community.",
    cover_url: `https://picsum.photos/seed/event-ondemand-beginner/600/400`,
    date: null,
    hours: "On demand",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 3,
    organizer: defaultOrganizer,
  },
  {
    title: "Cypht Modules Deep Dive — Customization & Extensibility",
    subtitle:
      "An on-demand community session exploring Cypht’s modular architecture and how contributors can extend and customize the platform.",
    cover_url: `https://picsum.photos/seed/event-0.8348528803120625/600/400`,
    date: null,
    hours: "On demand",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 3,
    organizer: defaultOrganizer,
  },
  {
    title: "Cypht Monthly Sync — June: Mid‑year review, velocity & open issues",
    subtitle:
      "Halfway through the year we take stock of shipped work versus the plan: burn‑down on key issues, feature readiness, and blockers. Come prepared to discuss what’s landing next, which bugs deserve a spike, and how we keep momentum through the summer.",
    cover_url: `https://picsum.photos/seed/event-monthly-2026-06/600/400`,
    date: "2026-06-12",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 1,
    organizer: defaultOrganizer,
  },
  {
    title: "Cypht Integration Hackathon — Build & Extend in 48h",
    subtitle:
      "A focused sprint to prototype integrations and extensions: small teams pick issues or feature ideas and ship demos. Not the monthly sync—this is hands‑on coding with the same community room link for coordination.",
    cover_url: `https://picsum.photos/seed/event-0.7995822454348985/600/400`,
    date: "2026-06-26",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 1,
    organizer: defaultOrganizer,
  },
  {
    title:
      "Cypht Monthly Sync — July: PR queue, code review & summer priorities",
    subtitle:
      "We put the spotlight on pull requests and review throughput: what’s waiting on feedback, which features need design input, and how we balance bugfixes with new capability. A short update on project progress, then we work through the issue list together.",
    cover_url: `https://picsum.photos/seed/event-0.4050603503046897/600/400`,
    date: "2026-07-10",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 1,
    organizer: defaultOrganizer,
  },
  {
    title:
      "Cypht Monthly Sync — August: Stabilization, regressions & quality bar",
    subtitle:
      "After recent changes we focus on reliability: regressions, test gaps, and performance notes from the field. We tie discussions to concrete issues, agree on severity, and decide which fixes or features should lead the next iteration.",
    cover_url: `https://picsum.photos/seed/event-monthly-2026-08/600/400`,
    date: "2026-08-14",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 1,
    organizer: defaultOrganizer,
  },
  {
    title:
      "Cypht Monthly Sync — September: Q4 roadmap draft & feature proposals",
    subtitle:
      "We sketch the roadmap for the rest of the year: candidate features, technical debt paydown, and community‑driven proposals. Expect transparent talk about project advancement, issue grooming for Q4, and space to pitch ideas backed by use cases.",
    cover_url: `https://picsum.photos/seed/event-monthly-2026-09/600/400`,
    date: "2026-09-11",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 1,
    organizer: defaultOrganizer,
  },
  {
    title: "Cypht Monthly Sync — October: Security, privacy & hardening",
    subtitle:
      "Dedicated time for security‑related issues, dependency updates, and safe‑defaults in features. We review progress on prior action items, triage vulnerability reports, and align on what must ship before year‑end from a risk perspective.",
    cover_url: `https://picsum.photos/seed/event-monthly-2026-10/600/400`,
    date: "2026-10-09",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 1,
    organizer: defaultOrganizer,
  },
  {
    title:
      "Cypht Monthly Sync — November: Release train, scope cuts & deadlines",
    subtitle:
      "As milestones approach we reconcile scope with reality: what stays, what slips, and which issues are release‑blocking. Open discussion on feature completeness, documentation gaps, and how contributors can help close the loop before the holidays.",
    cover_url: `https://picsum.photos/seed/event-monthly-2026-11/600/400`,
    date: "2026-11-13",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 1,
    organizer: defaultOrganizer,
  },
  {
    title:
      "Cypht Monthly Sync — December: Year in review, lessons & 2027 outlook",
    subtitle:
      "We close the loop on the year: highlights from shipped features, what we learned from issues and discussions, and where the project is headed. Bring reflections on process, gaps to address next year, and priorities for the issue backlog in January.",
    cover_url: `https://picsum.photos/seed/event-monthly-2026-12/600/400`,
    date: "2026-12-11",
    hours: "14:00 - 15:00",
    location: "Online",
    meet_link: MEET_LINK,
    status: true,
    type_key: 1,
    organizer: defaultOrganizer,
  },
];

/** Start of local calendar day for comparisons */
function startOfLocalDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

/** Events with a scheduled date strictly after today, earliest first */
function getSortedUpcomingEvents() {
  const today = startOfLocalDay(new Date());
  return events
    .filter((e) => {
      if (!e.date) return false;
      const day = startOfLocalDay(new Date(`${e.date}T12:00:00`));
      return day > today;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

/** Pool for the list: upcoming events except the next one (hero block) */
function getListEventsPool() {
  const upcoming = getSortedUpcomingEvents();
  return upcoming.slice(1);
}

function renderNextEvent() {
  const block = document.getElementById("next_event_block");
  if (!block) return;

  const upcoming = getSortedUpcomingEvents();
  const next = upcoming[0];

  if (!next) {
    block.hidden = true;
    block.setAttribute("aria-hidden", "true");
    return;
  }

  block.hidden = false;
  block.removeAttribute("aria-hidden");

  const formatted = format_date(next.date);
  const dateLine = `${formatted.weekday}, ${formatted.month} ${formatted.day}`;

  const cover = document.getElementById("next_event_cover");
  if (cover) {
    cover.src = next.cover_url || "/img/default-event-cover.jpg";
    cover.alt = next.title;
  }

  const titleEl = document.getElementById("next_event_title");
  if (titleEl) titleEl.textContent = next.title;

  const orgEl = document.getElementById("next_event_organizer_label");
  if (orgEl) {
    orgEl.textContent = next.organizer?.[0]?.name || "Cypht Community";
  }

  const dateLineEl = document.getElementById("next_event_date_line");
  if (dateLineEl) dateLineEl.textContent = dateLine;

  const timeLineEl = document.getElementById("next_event_time_line");
  if (timeLineEl) timeLineEl.textContent = next.hours || "";

  const descEl = document.getElementById("next_event_description");
  if (descEl) {
    descEl.innerHTML = (next.subtitle || "").replace(/\n/g, "<br>");
  }

  const meet = next.meet_link || "#";
  const desktop = document.getElementById("next_event_participate_desktop");
  const mobile = document.getElementById("next_event_participate_mobile");
  if (desktop) desktop.href = meet;
  if (mobile) mobile.href = meet;
}

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
      year: "numeric",
    }),
  };
}

// load events
function create_event_item(event) {
  let formatted_date = "TBD";

  if (event.date) {
    formatted_date = format_date(event.date);
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
            <span class="event-day">${event.date ? new Date(event.date).getDate() : "--"}</span>
            <span class="event-month">${event.date ? new Date(event.date).toLocaleString("en-US", { month: "short" }) : "--"}</span>
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
    formatted_date = format_date(event.date);
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

  document.getElementById("ed_calender_month").textContent =
    formatted_date.month || "--";
  document.getElementById("ed_calender_day").textContent =
    formatted_date.day || "--";
  document.querySelector(".ed-long-date").textContent =
    formatted_date.full || "--";
  document.querySelector(".ed-long-time").textContent = event.date
    ? event.hours
    : "--";
  document.querySelector(".ed-location-text").textContent =
    event.location || "--";

  const offcanvas = new bootstrap.Offcanvas(
    document.getElementById("offcanvasExample"),
  );
  offcanvas.show();

  // Update copy button with event link
  if (event.meet_link) {
    const copyBtn = document.getElementById("event_copy_btn");
    if (copyBtn) {
      // Remove previous event listeners
      const newCopyBtn = copyBtn.cloneNode(true);
      copyBtn.parentNode.replaceChild(newCopyBtn, copyBtn);
      // Add click event with current event link
      newCopyBtn.addEventListener("click", () =>
        copyEventLink(event.meet_link),
      );
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

  const pool = getListEventsPool();
  const filtered_events =
    type_key === undefined || type_key === -1
      ? pool
      : pool.filter((event) => event.type_key === type_key);

  if (!filtered_events.length) {
    event_list.textContent = "No events found";
    event_list.classList.add("no_events_found");
    return;
  }

  event_list.classList.remove("no_events_found");

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

  const listPool = getListEventsPool();

  filter.forEach((type) => {
    const count =
      index === 0
        ? listPool.length
        : listPool.filter((event) => event.type_key === type.value).length;

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
  navigator.clipboard
    .writeText(link)
    .then(() => {
      const copyBtn = document.getElementById("event_copy_btn");
      if (copyBtn) {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"/></svg> Link copied!';

        // Reset button text after 2 seconds
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2000);
      }
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
}

// Add click event listener to copy button
function setupCopyButton(link) {
  const copyBtn = document.getElementById("event_copy_btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => copyEventLink(link));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderNextEvent();
  load_event_filter();
  load_events();

  // Initialize copy button with empty link (will be updated when event is opened)
  setupCopyButton("");
});
