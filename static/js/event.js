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
    title: "Cypht Installation & Setup Workshop",
    subtitle: "Learn how to install and configure Cypht for your email needs",
    cover_url: "https://picsum.photos/seed/cypht-install/600/300",
    date: "2025-01-25",
    hours: "14:00 - 17:30",
    location: "Online (Zoom Link)",
    status: true,
    type_key: 2, // Workshop
    owner: [
      {
        name: "Cypht Team",
        avatar: "https://picsum.photos/seed/cypht-team/100",
        github_link: "https://github.com/cypht-org",
        x: "https://x.com/cypht",
      },
    ],
  },
  {
    title: "Cypht Community Meetup",
    subtitle: "Unified Email Management with Cypht - Best Practices & Tips",
    cover_url: "https://picsum.photos/seed/cypht-meetup/600/300",
    date: "2025-03-02",
    hours: "15:00 - 18:00",
    location: "Online (Zoom Link)",
    status: true,
    type_key: 1, // Meetup
    owner: [
      {
        name: "Cypht Community",
        avatar: "https://picsum.photos/seed/cypht-community/100",
        github_link: "https://github.com/cypht-org/cypht",
        x: "https://x.com/cypht",
      },
    ],
  },
  {
    title: "Advanced Cypht Configuration",
    subtitle: "Master IMAP, SMTP settings, profiles, and custom modules",
    cover_url: "https://picsum.photos/seed/cypht-config/600/300",
    date: "2025-02-10",
    hours: "09:00 - 16:00",
    location: "Online (Zoom Link)",
    status: true,
    type_key: 2, // Workshop
    owner: [
      {
        name: "Cypht Developers",
        avatar: "https://picsum.photos/seed/cypht-dev/100",
        github_link: "https://github.com/cypht-org",
        x: "https://x.com/cypht",
      },
    ],
  },
  {
    title: "Cypht Security & Encryption",
    subtitle:
      "PGP/GPG encryption, secure authentication, and privacy best practices",
    cover_url: "https://picsum.photos/seed/cypht-security/600/300",
    date: "2025-04-05",
    hours: "08:30 - 12:00",
    location: "Online (Zoom Link)",
    status: true,
    type_key: 2, // Workshop
    owner: [
      {
        name: "Cypht Security Team",
        avatar: "https://picsum.photos/seed/cypht-security-team/100",
        github_link: "https://github.com/cypht-org/cypht",
        x: "https://x.com/cypht",
      },
    ],
  },
  {
    title: "Getting Started with Cypht",
    subtitle:
      "Complete guide from installation to managing multiple email accounts",
    cover_url: "https://picsum.photos/seed/cypht-guide/600/300",
    date: null,
    hours: "On demand",
    location: "https://doc.cypht.org/getting-started",
    status: true,
    type_key: 3, // On Demand
    owner: [
      {
        name: "Cypht Documentation",
        avatar: "https://picsum.photos/seed/cypht-docs/100",
        github_link: "https://github.com/cypht-org/cypht",
        x: "https://x.com/cypht",
      },
    ],
  },
  {
    title: "Cypht Modules Deep Dive",
    subtitle: "Understanding and customizing Cypht modules for your workflow",
    cover_url: "https://picsum.photos/seed/cypht-modules/600/300",
    date: null,
    hours: "On demand",
    location: "https://doc.cypht.org/modules",
    status: true,
    type_key: 3, // On Demand
    owner: [
      {
        name: "Cypht Team",
        avatar: "https://picsum.photos/seed/cypht-modules-team/100",
        github_link: "https://github.com/cypht-org/cypht",
        x: "https://x.com/cypht",
      },
    ],
  },
  {
    title: "Cypht Integration Hackathon",
    subtitle: "Build integrations and extensions for Cypht email client",
    cover_url: "https://picsum.photos/seed/cypht-hackathon/600/300",
    date: "2025-05-17",
    hours: "48h non-stop",
    location: "Online",
    status: true,
    type_key: 4, // Other
    owner: [
      {
        name: "Cypht Community",
        avatar: "https://picsum.photos/seed/cypht-hack/100",
        github_link: "https://github.com/cypht-org",
        x: "https://x.com/cypht",
      },
    ],
  },
  {
    title: "The Future of Email with Cypht",
    subtitle: "Open source email management and unified inbox solutions",
    cover_url: "https://picsum.photos/seed/cypht-future/600/300",
    date: "2025-08-20",
    hours: "10:00 - 13:00",
    location: "Online (Zoom Link)",
    status: true,
    type_key: 5, // Conference / Talk
    owner: [
      {
        name: "Cypht Foundation",
        avatar: "https://picsum.photos/seed/cypht-foundation/100",
        github_link: "https://github.com/cypht-org/cypht",
        x: "https://x.com/cypht",
      },
    ],
  },
];

// get filter item
function get_filter_item(type_key) {
  return event_types.find((type) => type.value === type_key);
}

// load events
function load_events(type_key) {
  const event_list = document.getElementById("event_list");
  event_list.innerHTML = "";

  console.log(type_key);
  const filtered_events =
    type_key === undefined || type_key === -1
      ? events
      : events.filter((event) => event.type_key === type_key);

  console.log(filtered_events.length);

  if (filtered_events.length > 0) {
    filtered_events.forEach((event) => {
      let formatted_date = "TBD";

      if (event.date) {
        const date = new Date(event.date);
        const day = date.toLocaleDateString("en-US", { weekday: "long" });
        const month = date.toLocaleDateString("en-US", { month: "short" });
        const day_of_month = date.getDate();
        const year = date.getFullYear();
        formatted_date = `${day}, ${month} ${day_of_month}, ${year}`;
      }

      //
      const event_item = document.createElement("a");
      event_item.classList.add("event-item");
      event_item.innerHTML = `
        <div class="event-item-content">
          <div class="event-item-date">
            <span>${formatted_date}</span>
          </div>
          <div class="event-item-details"> 
            <div class="event-item-details-header">
               <h3>${event.title}</h3>
               <span class="event-type">${
                 get_filter_item(event.type_key).name
               }</span>
            </div>
            <div class="event-item-footer">
               <div class="event-item-footer-logo"><img src="/img/logo.svg" alt="Cypht" /></div>
               <span class="event-item-footer-text">
               Hosted by Cypht Community</span>
            </div>
          </div>
        </div>
      `;
      event_list.appendChild(event_item);
    });
  } else {
    event_list.innerHTML = "No events found";
    event_list.classList.add("no_events_found");
  }
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
