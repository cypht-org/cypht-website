---
title: Events
weight: 10
loadScriptAfter: /js/event.js
---

<div class="event-content">
  <div class="event-content-line">
    <div class="next-event-container">
      <div class="next-event-content">
        <div class="nec-header">
          <h2 class="page-title">Events</h2>
          <span class="page-subtitle">Join us at the following upcoming events</span>
        </div>
        <div class="nec-details-content">
          <div class="">
            <div class="nec-cover">
              <!--  -->
              <img src="https://picsum.photos/seed/event-0.6332654670036725/600/400" alt="Cypht Community Event"/>
            </div>
          </div>
          <div class="nec-details">
            <div class="nec-detail-header">
              <div class="nec-dh-text">
                <h2>Cypht Community Conference 2025</h2>
                <span>Cypht Community</span>
              </div>
              <div class="nec-dh-actions">
                <button class="action-btn cypht-primary-btn">Register</button>
              </div>
            </div>
            <div class="nec-date-content">
              <div>
                <span class="nec-date-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827c.26.02.506.045.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.05.375.084.784.107 1.23a.747.747 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46c.022-.445.056-.854.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c.233-.031.48-.056.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832c.016-.19.035-.369.058-.54c.135-1.005.389-1.585.812-2.008c.423-.423 1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812c.423.423.677 1.003.812 2.009c.023.17.042.35.058.539m-4.668 7.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"/></svg>
               </span>
              </div>
              <div class="nec-timer">
                  <span>Tuesday, Dec 2</span>
                  <span>3:00 AM - 5:00 AM</span>
                </div>
            </div>
            <!--  -->
            <span class="text-description">
                Join the Cypht Community Conference 2025, the premier event for email management enthusiasts. Discover the latest features, learn advanced configuration techniques, and connect with the open-source community. Explore unified inbox solutions, security best practices, module development, and integration strategies. <br/> Features live demos, hands-on workshops, networking sessions, and keynote presentations from the Cypht development team.
            </span>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="events">
         <!-- filter -->
        <div class="">
          <div class="event-filter-content">
            <div class="event-filter-header">
              <h2>Upcoming Events</h2>
                <span class="page-subtitle">Discover and join our upcoming events and activities</span>
            </div>
            <div class="event-filter-body">
              <div id="event_filter" class="event-filter"></div>
            </div>
            <span class="page-subtitle next-event-description">Missed an event ? You can catch up <br/>on all past events <a href="/events/old">here</a>.</span>
          </div>
        </div>
         <!-- events list -->
         <div class="event-list-content">
            <div id="event_list"></div>
         </div>
      </div>
    </div>

  </div>
</div>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
