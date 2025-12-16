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
    title: "Cypht Community Meetup",
    subtitle: "Unified Email Management with Cypht - Best Practices & Tips",
    cover_url: "https://picsum.photos/seed/cypht-meetup/600/300",
    date: "2025-03-02",
    hours: "15:00 - 18:00",
    location: "Online (Zoom Link)",
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
    title: "Advanced Cypht Configuration",
    subtitle: "Master IMAP, SMTP settings, profiles, and custom modules",
    cover_url: "https://picsum.photos/seed/cypht-config/600/300",
    date: "2025-02-10",
    hours: "09:00 - 16:00",
    location: "Online (Zoom Link)",
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
    title: "Cypht Security & Encryption",
    subtitle:
      "PGP/GPG encryption, secure authentication, and privacy best practices",
    cover_url: "https://picsum.photos/seed/cypht-security/600/300",
    date: "2025-04-05",
    hours: "08:30 - 12:00",
    location: "Online (Zoom Link)",
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
    title: "Getting Started with Cypht",
    subtitle:
      "Complete guide from installation to managing multiple email accounts",
    cover_url: "https://picsum.photos/seed/cypht-guide/600/300",
    date: null,
    hours: "On demand",
    location: "https://doc.cypht.org/getting-started",
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
    title: "Cypht Modules Deep Dive",
    subtitle: "Understanding and customizing Cypht modules for your workflow",
    cover_url: "https://picsum.photos/seed/cypht-modules/600/300",
    date: null,
    hours: "On demand",
    location: "https://doc.cypht.org/modules",
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
    title: "Cypht Integration Hackathon",
    subtitle: "Build integrations and extensions for Cypht email client",
    cover_url: "https://picsum.photos/seed/cypht-hackathon/600/300",
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
    title: "The Future of Email with Cypht",
    subtitle: "Open source email management and unified inbox solutions",
    cover_url: "https://picsum.photos/seed/cypht-future/600/300",
    date: "2025-08-20",
    hours: "10:00 - 13:00",
    location: "Online (Zoom Link)",
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
    video_url: "https://www.youtube.com/watch?v=rfscVS0vtbw"
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
    video_url: "https://www.youtube.com/watch?v=2l-AOB8dFzE"
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
  }
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
      event_item.href = event.url || '#';
      event_item.innerHTML = `
        <div class="event-item-content">
          <div class="event-item-date">
            <span class="event-day">${new Date(event.date).getDate()}</span>
            <span class="event-month">${new Date(event.date).toLocaleString('en-US', { month: 'short' })}</span>
          </div>
          <div class="event-item-details">
            <div class="event-item-details-header">
              <h3>${event.title}</h3>
              <span class="event-type ${event.type_key}">${get_filter_item(event.type_key).name}</span>
            </div>
            <div class="event-meta">
              <span class="event-time">${event.hours || 'Time TBD'}</span>
              <span class="event-location">${event.type === 'remote' ? '🌐' : '📍'} ${event.address || 'Location TBD'}</span>
            </div>
            <div class="event-item-footer">
              <div class="event-host">
                <img src="${event.organizer[0]?.profile_url || '/img/logo.svg'}" alt="${event.organizer[0]?.name || 'Cypht'}" class="organizer-avatar" />
                <span>${event.organizer[0]?.name || 'Cypht Community'}</span>
              </div>
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
