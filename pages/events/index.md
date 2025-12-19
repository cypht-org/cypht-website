---
title: Events
weight: 10
loadScriptAfter: /js/event.js
---

<div class="event-content">
  <div class="event-content-line">
    <div class="next-event-container">
      <div class="nec-header">
        <h2 class="page-title">Events</h2>
        <span class="page-subtitle">Join us at the following upcoming events</span>
      </div>
      <!--  -->
      <div class="event-separator"></div>
      <!--  -->
      <div class="next-event-content">
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
                <h2>The Cypht Monthly Community Meetings</h2>
                <span>Cypht Community</span>
              </div>
              <div class="nec-dh-actions d-md-flex d-none">
                <a href="https://meet.evoludata.com/rooms/5ih-sxu-osg-dvg/join" target="_blank" class="action-btn cypht-primary-btn">Participate</a>
              </div>
            </div>
            <div class="nec-date-content">
              <div>
                <span class="nec-date-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827c.26.02.506.045.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.05.375.084.784.107 1.23a.747.747 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46c.022-.445.056-.854.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c.233-.031.48-.056.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832c.016-.19.035-.369.058-.54c.135-1.005.389-1.585.812-2.008c.423-.423 1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812c.423.423.677 1.003.812 2.009c.023.17.042.35.058.539m-4.668 7.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"/></svg>
               </span>
              </div>
              <div class="nec-timer">
                  <span>Friday, Jan 30</span>
                  <span>02:00 PN - 3:00 PM</span>
                </div>
            </div>
            <!--  -->
            <span class="text-description">
               The Cypht Monthly Community Meetings are a recurring space for the global Cypht community to connect, collaborate, and stay aligned on the project’s evolution. Each session brings together contributors, users, and enthusiasts to share updates, exchange ideas, and discuss ongoing and upcoming initiatives.</br>
               Designed as an inclusive and open forum, these meetings span multiple time zones—from Los Angeles to Tokyo—ensuring broad participation across our worldwide community.
            </span>
          </div>
          <div class="nec-dh-actions d-md-none">
            <a href="https://meet.evoludata.com/rooms/5ih-sxu-osg-dvg/join" target="_blank" class="action-btn cypht-primary-btn">Participate</a>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="event-separator"></div>
      <!--  -->
      <div class="events">
         <!-- filter -->
        <div class="event-filter">
          <div class="event-filter-content">
            <div class="event-filter-header">
              <h2>Upcoming Events</h2>
                <span class="page-subtitle next-event-description">Discover and join our upcoming events and activities</span>
            </div>
            <div class="event-filter-body">
              <div id="event_filter" class="event-filter"></div>
            </div>
            <span class="page-subtitle next-event-description hold-event-text">Missed an event ? You can catch up on all past events <a href="/events/old">here</a>.</span>
          </div>
        </div>
         <!-- events list -->
         <div class="event-list-content">
            <ul id="event_list"></ul>
            <span class="page-subtitle next-event-description hold-event-text-list">Missed an event ? You can catch up on all past events <a href="/events/old">here</a>.</span>
         </div>
      </div>
    </div>
  </div>

<!-- Detail  -->
<div class="offcanvas offcanvas-end event-offcanvas" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="text-reset event-close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11 19l6-7l-1.5-1.75M11 5l2 2.333M7 5l6 7l-1.5 1.75M7 19l2-2.333"/></svg>
    </button>
    <button id="event_copy_btn" type="button" class="event-copy-btn">
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/480/ --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M20.998 10c-.012-2.175-.108-3.353-.877-4.121C19.243 5 17.828 5 15 5h-3c-2.828 0-4.243 0-5.121.879C6 6.757 6 8.172 6 11v5c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22h3c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16v-1"/><path d="M3 10v6a3 3 0 0 0 3 3M18 5a3 3 0 0 0-3-3h-4C7.229 2 5.343 2 4.172 3.172C3.518 3.825 3.229 4.7 3.102 6"/></g></svg>Copy the link 
    </button>
  </div>
  <div class="offcanvas-body">

      <div class="event-detail-header">
          <div class="event-detail-cover image-wrapper skeleton">
            <img id="event-detail-cover" src="" alt="" loading="lazy">
         </div>
        <h3 id="event-detail-title"></h3>
        <div id="event-detail-organizer" class="event-detail-organizer">
        </div>
        <div id="event_detail_date" class="event-detail-date">
              <div class="event-detail-date-content">
                 <div class="event-detail-calender">
                      <span id="ed_calender_month" class="ed-calender-month"></span>
                      <span id="ed_calender_day" class="ed-calender-day"></span>
                 </div>

                 <div class="event-detail-long-date">
                    <span id="" class="ed-long-date"></span>
                    <span class="ed-long-time"></span>
                 </div>
              </div>
              <div class="ed-location">
                 <span class="ed-location-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M9.451 3.25h.098c1.602 0 2.872 0 3.876.119c1.03.122 1.88.377 2.588.96c.24.197.461.417.659.658c.582.709.837 1.557.96 2.588c.027.232.048.478.064.739c.786-.392 1.452-.714 2.007-.896c.652-.213 1.343-.299 1.98.095s.87 1.05.97 1.728c.097.655.097 1.516.097 2.551v.416c0 1.035 0 1.896-.097 2.55c-.1.679-.333 1.335-.97 1.729c-.637.394-1.328.308-1.98.095c-.555-.182-1.221-.504-2.007-.896c-.016.261-.037.507-.065.739c-.122 1.03-.377 1.88-.96 2.588c-.197.24-.417.461-.658.659c-.709.582-1.557.837-2.588.96c-1.005.118-2.274.118-3.876.118H9.45c-1.602 0-2.872 0-3.876-.119c-1.03-.122-1.88-.377-2.588-.96a4.751 4.751 0 0 1-.659-.658c-.582-.709-.837-1.557-.96-2.588c-.118-1.005-.118-2.274-.118-3.876V11.45c0-1.602 0-2.872.119-3.876c.122-1.03.377-1.88.96-2.588a4.75 4.75 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 3.25 7.85 3.25 9.451 3.25m6.799 9.25v-1c0-1.662-.001-2.843-.108-3.749c-.105-.889-.304-1.415-.63-1.813a3.256 3.256 0 0 0-.45-.45c-.398-.326-.924-.525-1.813-.63c-.906-.107-2.087-.108-3.749-.108s-2.843.001-3.749.108c-.889.105-1.415.304-1.813.63a3.25 3.25 0 0 0-.45.45c-.326.398-.525.924-.63 1.813c-.107.906-.108 2.087-.108 3.749v1c0 1.662.001 2.843.108 3.749c.105.889.304 1.415.63 1.813a3.3 3.3 0 0 0 .45.45c.398.326.924.525 1.813.63c.906.107 2.087.108 3.749.108s2.843-.001 3.749-.108c.889-.105 1.415-.304 1.813-.63a3.3 3.3 0 0 0 .45-.45c.326-.398.525-.924.63-1.813c.107-.906.108-2.087.108-3.749m1.5 1.537l.244.121c.995.498 1.666.831 2.176.998c.499.163.65.1.724.055c.074-.046.198-.153.275-.673c.079-.53.081-1.28.081-2.392v-.292c0-1.113-.002-1.862-.08-2.392c-.078-.52-.202-.627-.276-.673c-.074-.046-.225-.108-.724.055c-.51.167-1.18.5-2.176.998l-.244.122v2.67zM13.03 7.97a.75.75 0 1 0-1.06 1.06a.75.75 0 0 0 1.06-1.06m-2.12-1.061a2.25 2.25 0 1 1 3.182 3.182a2.25 2.25 0 0 1-3.182-3.182" clip-rule="evenodd"/></svg></span>
                 <span class="ed-location-text"></span>
              </div>
        </div>
      </div>
      <div class="event-detail-footer">
        <div class="ed-footer-header">
            <span>About event</span>
        </div>
        <div class="ed-footer-content">
          <span id="ed_description" class="ed-description"></span>
      </div>
      </div>

  </div>
</div>

</div>
