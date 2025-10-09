---
title: "Documentation"
weight: 30
nocontainer: true
h1: false
---

<!-- Hero Section -->
<section class="documentation-hero">
  <div class="documentation-hero-content">
    <!-- Testimonials Label -->
    <div class="testimonials-label">
      <span>Documentation</span>
    </div>
    
    <!-- Portraits Grid -->
    <div class="portraits-grid">
      <div class="portrait-item">
        <img src="/img/cypht_shot1.png" alt="Cypht Interface" class="portrait-img">
      </div>
      <div class="portrait-item">
        <img src="/img/login.PNG" alt="Login Interface" class="portrait-img">
      </div>
      <div class="portrait-item">
        <img src="/img/home.PNG" alt="Home Interface" class="portrait-img">
      </div>
      <div class="portrait-item">
        <img src="/img/Add.PNG" alt="Add Account" class="portrait-img">
      </div>
      <div class="portrait-item">
        <img src="/img/Inbox.PNG" alt="Inbox View" class="portrait-img">
      </div>
      <div class="portrait-item">
        <img src="/img/Compose.PNG" alt="Compose Email" class="portrait-img">
      </div>
      <div class="portrait-item">
        <img src="/img/Contact.PNG" alt="Contact Book" class="portrait-img">
      </div>
      <div class="portrait-item">
        <img src="/img/Calendar.PNG" alt="Calendar" class="portrait-img">
      </div>
      <div class="portrait-item">
        <img src="/img/Developer.PNG" alt="Developer Options" class="portrait-img">
      </div>
      <div class="portrait-item">
        <img src="/img/combined_view.png" alt="Combined View" class="portrait-img">
      </div>
      <div class="portrait-item">
        <img src="/img/sieveFilters.png" alt="Sieve Filters" class="portrait-img">
      </div>
      <div class="portrait-item">
        <img src="/img/block_list.png" alt="Block List" class="portrait-img">
      </div>
    </div>
    
    <!-- Main Heading -->
    <div class="hero-heading">
      <h1 class="hero-title">Trusted by professionals</h1>
      <h2 class="hero-subtitle">from various industries</h2>
    </div>
    
    <!-- Description -->
    <p class="hero-description">
      Learn why professionals trust Cypht to manage their email communications efficiently and securely.
    </p>
    
    <!-- Call to Action -->
    <div class="hero-cta">
      <a href="#getting-started" class="cta-button">
        Read Documentation
        <span class="cta-arrow">→</span>
      </a>
    </div>
  </div>
</section>

<!-- Getting Started Section -->
<section class="documentation-content">
  <div class="documentation-container">
    <div class="doc-section" id="getting-started">
      <h1>Welcome to Cypht</h1>
      <div class="doc-grid">
        <div class="doc-grid-image">
          <img src="/img/login.PNG" alt="Cypht Login" class="doc-image">
        </div>
        <div class="doc-grid-text">
          <div class="feature-icon">🚀</div>
          <h2 class="feature-title">Getting Started</h2>
          <p class="feature-description">Once installation is in place, users can login to the webmail using their usernames & passwords. The login process is straightforward and secure, providing access to all your email accounts in one unified interface.</p>
          <a href="#getting-started" class="feature-button">Learn more</a>
        </div>
      </div>
    </div>

    <!-- Home Interface -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-text">
          <div class="feature-icon">🏠</div>
          <h2 class="feature-title">Home Interface</h2>
          <p class="feature-description">After successfully logging in to the webmail, users will be redirected to the home page where the interactive interface allows users to perform multiple actions. The clean and intuitive design makes it easy to navigate and manage your emails efficiently.</p>
          <a href="#home-interface" class="feature-button">Learn more</a>
        </div>
        <div class="doc-grid-image">
          <img src="/img/home.PNG" alt="Cypht Home Interface" class="doc-image">
        </div>
      </div>
    </div>

    <!-- Adding Email Accounts -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-image">
          <img src="/img/Add.PNG" alt="Add Email Account" class="doc-image">
        </div>
        <div class="doc-grid-text">
          <div class="feature-icon">📧</div>
          <h2 class="feature-title">Adding Email Accounts</h2>
          <p class="feature-description">Users can add email accounts from any service provider to access multiple inboxes from Cypht. This unified approach allows you to manage all your emails in one place.</p>
          <p>For some service providers (Gmail, Outlook, Office365), additional information is required in your configuration file (.env for Cypht 2.x.x or hm3.ini for Cypht 1.4.x):</p>
          <pre>

SERVICE_CLIENT_ID=
SERVICE_CLIENT_SECRET=
SERVICE_CLIENT_URI=

</pre>
<a href="#" type="button" data-toggle="modal" data-target="#serviceProviderModal" class="feature-button">
How to get them?
</a>

          <div class="modal fade" id="serviceProviderModal" tabindex="-1" role="dialog" aria-labelledby="serviceProviderModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="serviceProviderModalLabel">Service providers links</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  1. <a href="/cypht-enable-gmail-oauth">Gmail</a><br>
                  2. <a href="/cypht-enable-outlook-and-office365-oauth">Outlook and Office365</a><br>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- IMAP/JMAP/SMTP Servers -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-text">
          <div class="feature-icon">⚙️</div>
          <h2 class="feature-title">Adding IMAP/JMAP/SMTP Servers and ATOM/RSS Feed</h2>
          <p class="feature-description">Enhanced customization capabilities allow users to setup, configure, and manage IMAP and SMTP or SMTP and JMAP servers and setup the ATOM/RSS Feed. Adding servers in Cypht is a straightforward process that involves two main steps. These steps are illustrated in the following image for your reference.</p>
          <a href="#server-config" class="feature-button">Learn more</a>
        </div>
        <div class="doc-grid-image">
          <img src="/img/Multi.PNG" alt="IMAP/JMAP/SMTP Configuration" class="doc-image">
        </div>
      </div>
    </div>

    <!-- EWS Servers -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-text">
          <div class="feature-icon">🏢</div>
          <h2 class="feature-title">Adding EWS Servers</h2>
          <p class="feature-description">Cypht supports seamless integration with Exchange servers through easy setup and configuration. This section allows users to add, configure, and manage Exchange servers (EWS). Adding an Exchange server involves filling out key details such as server address, username, and password, with options to customize settings like creating profiles, setting a default profile, and adding a signature. The right-hand preview shows the Exchange inbox interface, highlighting features such as folder navigation and email list display. This process is designed to simplify Exchange account management for users, as illustrated in the image below.</p>
          <a href="#ews-config" class="feature-button">Learn more</a>
        </div>
        <div class="doc-grid-image">
          <img src="/img/ews.png" alt="Exchange Server" class="doc-image">
        </div>
      </div>
    </div>

    <!-- Combined Inbox -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-text">
          <div class="feature-icon">📥</div>
          <h2 class="feature-title">Combined Inbox</h2>
          <p class="feature-description">The advanced and most efficient service of Cypht enables users to access multiple email accounts at the same time. Users can view inboxes of different email providers and can send, receive, and manage email messages from the interactive webmail. The webmail also provides functionality to search, sort, and filter emails.</p>
          <a href="#combined-inbox" class="feature-button">Learn more</a>
        </div>
        <div class="doc-grid-image">
          <img src="/img/Inbox.PNG" alt="Combined Inbox" class="doc-image">
        </div>
      </div>
    </div>

    <!-- Combined View -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-text">
          <div class="feature-icon">📁</div>
          <h2 class="feature-title">Combined View</h2>
          <p class="feature-description">Cypht, your email client that allows you to access multiple email accounts simultaneously, features main folders such as Drafts, Everything, Flagged, Junk, Sent, Snoozed, Trash, and Unread. To ensure that email messages from your accounts appear in these folders, you need to add them by accessing the respective folder and clicking the "Add this folder to combined pages" icon located in the header of your folder view. This action integrates the folder into the combined view, making it easier to manage emails across all your accounts in one place. Refer to the provided image for visual guidance.</p>
          <a href="#combined-view" class="feature-button">Learn more</a>
        </div>
        <div class="doc-grid-image">
          <img src="/img/combined_view.png" alt="Combined View" class="doc-image">
        </div>
      </div>
    </div>

    <!-- Contact Book -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-image">
          <img src="/img/Contact.PNG" alt="Contact Book" class="doc-image">
        </div>
        <div class="doc-grid-text">
          <div class="feature-icon">👥</div>
          <h2 class="feature-title">Contact Book</h2>
          <p class="feature-description">One-click Contact Book allows users to efficiently add people to your contacts. Contacts can be added via clicking the Contacts button from the main menu, or simply by clicking on the "one-person" icon in the message you receive.</p>
          <a href="#contact-book" class="feature-button">Learn more</a>
        </div>
      </div>
    </div>

    <!-- Calendar -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-text">
          <div class="feature-icon">📅</div>
          <h2 class="feature-title">Calendar</h2>
          <p class="feature-description">The calendar feature allows users to create different events by clicking the "+" icon on the top-right corner. The created reminders and events will be shown in the calendar making it easier for users to keep track of special events.</p>
          <a href="#calendar" class="feature-button">Learn more</a>
        </div>
        <div class="doc-grid-image">
          <img src="/img/Calendar.PNG" alt="Calendar" class="doc-image">
        </div>
      </div>
    </div>

    <!-- Compose Email -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-image">
          <img src="/img/Compose.PNG" alt="Compose Email" class="doc-image">
        </div>
        <div class="doc-grid-text">
          <div class="feature-icon">✉️</div>
          <h2 class="feature-title">Compose Email</h2>
          <p class="feature-description">The webmail offers a simple and interactive interface to compose and send email messages from any of the added email accounts along with functionalities to access draft emails by clicking the "document" icon on the top-right corner, add signatures, attachments, etc.</p>
          <a href="#compose-email" class="feature-button">Learn more</a>
        </div>
      </div>
    </div>

    <!-- User Profiles -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-text">
          <div class="feature-icon">👤</div>
          <h2 class="feature-title">User Profiles</h2>
          <p class="feature-description">From webmail settings options, users can access the feature to add numerous profiles in the webmail allowing users to combine IMAP accounts with SMTP accounts and setup signatures and reply-to details.</p>
          <a href="#user-profiles" class="feature-button">Learn more</a>
        </div>
        <div class="doc-grid-image">
          <img src="/img/userprofil.PNG" alt="User Profiles" class="doc-image">
        </div>
      </div>
    </div>

    <!-- Developer Options -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-image">
          <img src="/img/Developer.PNG" alt="Developer Options" class="doc-image">
        </div>
        <div class="doc-grid-text">
          <div class="feature-icon">💻</div>
          <h2 class="feature-title">Developer Options</h2>
          <p class="feature-description">Another interesting feature of the open-source platform is its provision of developer documentation and links to the source code. Thereby enabling the developer community of the webmail to actively contribute to making the platform more efficient, advanced, and reliable.</p>
          <a href="#developer-options" class="feature-button">Learn more</a>
        </div>
      </div>
    </div>

    <!-- Sieve Filters -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-text">
          <div class="feature-icon">🔍</div>
          <h2 class="feature-title">Sieve Filters</h2>
          <p class="feature-description">Sieve filters can be set up to automatically move, copy, or delete messages based on specific criteria such as sender, subject, keywords, or recipient. To add a Sieve filter, navigate to the Sieve Filters menu located in the Settings tab sidebar, select the email account for which you want to create a filter, and click the "Add Filter" button. Refer to the following image for a visual guide.</p>
          <a href="#sieve-filters" class="feature-button">Learn more</a>
        </div>
        <div class="doc-grid-image">
          <img src="/img/sieveFilters.png" alt="Sieve Filters" class="doc-image">
        </div>
      </div>
    </div>

    <!-- Block List -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-text">
          <div class="feature-icon">🚫</div>
          <h2 class="feature-title">Block List</h2>
          <p class="feature-description">The Block List feature allows users to block specific email addresses or domains from sending emails to your inbox. To block a sender in Cypht Webmail, open the email, click the BLOCK SENDER button (lock icon), and choose whether to block This Sender or the Whole Domain. Then select an action: Default Action, Discard, Move to Blocked Folder, Reject with Default Message, or Reject with Specific Message, and confirm by clicking BLOCK. You can manage blocked senders later under Settings > Block List. Make sure Sieve filters are enabled in your Cypht settings for this feature to work. Refer to the following image for a visual guide.</p>
          <a href="#block-list" class="feature-button">Learn more</a>
        </div>
        <div class="doc-grid-image">
          <img src="/img/block_list.png" alt="Block List" class="doc-image">
        </div>
      </div>
    </div>

    <!-- Snooze -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-image">
          <img src="/img/snooze.png" alt="Snooze Feature" class="doc-image">
        </div>
        <div class="doc-grid-text">
          <div class="feature-icon">😴</div>
          <h2 class="feature-title">Snooze</h2>
          <p class="feature-description">The snooze feature allows users to snooze emails with choices like 1 day, 1 week, 1 month, or pick a date. The snoozed emails should all be findable in a "snoozed" folder (or similar name), with a column for the snoozed-until date. Here, you can un-snooze them (it becomes a normal email), or change the snooze date. At the end of the snooze period, the email should appear in a dedicated section above all other emails. Then, you deal with them, or snooze them again. Alternate names for this feature: Snooze, Defer, Postpone, Delay, Reminder.</p>
          <a href="#snooze" class="feature-button">Learn more</a>
        </div>
      </div>
    </div>

    <!-- Archive -->
    <div class="doc-section">
      <div class="doc-grid">
        <div class="doc-grid-text">
          <div class="feature-icon">📦</div>
          <h2 class="feature-title">Archive</h2>
          <p class="feature-description">To archive emails in Cypht, you'll need to create an archive folder. The 'Archive' button is always available, but you won't be able to use it until you've set up a destination folder. Once you've done that, clicking 'Archive' will move the email to the designated folder and display a confirmation message.</p>
          <a href="#archive" class="feature-button">Learn more</a>
        </div>
        <div class="doc-grid-image">
          <img src="/img/Archive.png" alt="Archive Feature" class="doc-image">
        </div>
      </div>
    </div>

  </div>
</section>
