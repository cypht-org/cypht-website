---
title: "Documentation"
weight: 30
nocontainer: true
h1: false
loadScriptAfter: /js/documentation-nav.js
---

<!-- Enhanced Hero Section -->
<section class="documentation-hero">
  <div class="documentation-hero-content">
    <!-- Badge -->
    <div class="chip">
      <span>📚 Complete Guide</span>
    </div>
    <!-- Main Heading -->
    <div class="hero-heading">
      <h1 class="hero-title">Cypht Documentation</h1>
      <p class="hero-subtitle">Everything you need to know about setting up, configuring, and using Cypht to manage all your email accounts in one powerful, secure interface. From basic setup to advanced features.</p>
    </div>
      <!-- Quick Stats -->
    <div class="doc-stats">
      <div class="stat-item">
        <div class="stat-number">15+</div>
        <div class="stat-label">Features Covered</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">100%</div>
        <div class="stat-label">Open Source</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">24/7</div>
        <div class="stat-label">Community Support</div>
      </div>
    </div>
    <!-- Call to Action -->
    <div class="hero-cta">
      <a href="#getting-started" class="btn btn-dark">
        <i class="bi bi-play-circle"></i>
        Start Learning
      </a>
      <a href="#quick-start" class="btn">
        <i class="bi bi-lightning"></i>
        Quick Start
      </a>
    </div>
  </div>
</section>
<!-- Table of Contents -->

<section>
  <!-- <div class="d-flex w-100"> -->
    <div class="doc-indicator d-flex align-items-center">
      <div class="doc-indicator-left">
        <img src="img/logo_dark.svg"/>
      </div>
      <div class="doc-indicator-right">
         <span>cypht version 1.0.2 🚀</span>
      </div>
    </div>
    <!-- </div> -->
    <div class="doc-container d-flex w-100 p-4 gap-4">
    <!-- Table des matières -->
    <aside class="doc-toc flex-shrink-0">
      <header class="toc-header mb-3">
        <h5 class="toc-title">On this page</h5>
        <p class="toc-subtitle">Master your unified email experience with our comprehensive guide.</p>
      </header>
<!--  -->
      <nav class="toc-nav mt-5">
        <div class="toc-section">
          <h5>Getting Started</h5>
          <ul>
            <li><a href="#getting-started">Initial Setup</a></li>
            <li><a href="#home-interface">Home Interface</a></li>
            <li><a href="#adding-accounts">Adding Email Accounts</a></li>
          </ul>
        </div>
<!--  -->
        <div class="toc-section">
          <h5>Core Features</h5>
          <ul>
            <li><a href="#combined-inbox">Combined Inbox</a></li>
            <li><a href="#compose-email">Compose Email</a></li>
            <li><a href="#contact-book">Contact Book</a></li>
            <li><a href="#calendar">Calendar</a></li>
          </ul>
        </div>
<!--  -->
        <div class="toc-section">
          <h5>Advanced Features</h5>
          <ul>
            <li><a href="#sieve-filters">Sieve Filters</a></li>
            <li><a href="#block-list">Block List</a></li>
            <li><a href="#snooze">Snooze</a></li>
            <li><a href="#archive">Archive</a></li>
          </ul>
        </div>
<!--  -->
        <div class="toc-section">
          <h5>Configuration</h5>
          <ul>
            <li><a href="#server-config">Server Setup</a></li>
            <li><a href="#ews-config">Exchange Servers</a></li>
            <li><a href="#user-profiles">User Profiles</a></li>
            <li><a href="#developer-options">Developer Options</a></li>
          </ul>
        </div>
      </nav>
    </aside>
    <!-- Contenu principal -->
    <main class="doc-content flex-grow-1">
      <!-- Section par défaut -->
      <div id="default-content" class="doc-section active">
        <h2>Documentation Overview</h2>
        <p>Welcome to the official Cypht documentation. Select a section from the navigation menu to begin exploring the features of the platform.</p>
        <div class="welcome-cards">
          <div class="welcome-card">
            <h4>🚀 Getting Started</h4>
            <p>Learn the basics of setting up and using Cypht</p>
          </div>
          <div class="welcome-card">
            <h4>⚡ Core Features</h4>
            <p>Discover the essential features for daily use</p>
          </div>
          <div class="welcome-card">
            <h4>🔧 Advanced Features</h4>
            <p>Explore powerful features for power users</p>
          </div>
          <div class="welcome-card">
            <h4>⚙️ Configuration</h4>
            <p>Advanced setup and customization options</p>
          </div>
        </div>
      </div>

      <!-- Section Getting Started -->
      <div id="getting-started" class="doc-section">
        <h2>Getting Started</h2>
        <p>Welcome to Cypht! This section will guide you through the initial setup and basic configuration.</p>

        <div class="subsection" id="initial-setup">
          <h3>Initial Setup</h3>
          <p>Learn how to install and configure Cypht for the first time.</p>
          <div class="steps">
            <div class="step">
              <h4>Step 1: Installation</h4>
              <p>Download and install Cypht on your server or local machine.</p>
              <pre><code># Download Cypht

git clone https://github.com/jasonmunro/cypht.git
cd cypht</code></pre>

</div>
<div class="step">
<h4>Step 2: Configuration</h4>
<p>Configure your basic settings and preferences.</p>
</div>
</div>
</div>

        <div class="subsection" id="home-interface">
          <h3>Home Interface</h3>
          <p>Understand the main dashboard and navigation elements.</p>
          <img src="/img/home.PNG" alt="Cypht Home Interface" class="doc-image">
        </div>

        <div class="subsection" id="adding-accounts">
          <h3>Adding Email Accounts</h3>
          <p>Connect your email accounts to Cypht for unified management.</p>
          <img src="/img/Add.PNG" alt="Add Email Account" class="doc-image">
        </div>
      </div>

      <!-- Section Core Features -->
      <div id="core-features" class="doc-section">
        <h2>Core Features</h2>
        <p>Explore the essential features that make Cypht powerful.</p>

        <div class="subsection" id="combined-inbox">
          <h3>Combined Inbox</h3>
          <p>View all your emails from different accounts in one unified inbox.</p>
          <img src="/img/Inbox.PNG" alt="Combined Inbox" class="doc-image">
        </div>

        <div class="subsection" id="compose-email">
          <h3>Compose Email</h3>
          <p>Create and send emails with advanced formatting options.</p>
          <img src="/img/Compose.PNG" alt="Compose Email" class="doc-image">
        </div>

        <div class="subsection" id="contact-book">
          <h3>Contact Book</h3>
          <p>Manage your contacts across all connected accounts.</p>
          <img src="/img/Contact.PNG" alt="Contact Book" class="doc-image">
        </div>

        <div class="subsection" id="calendar">
          <h3>Calendar</h3>
          <p>Schedule and manage events with the integrated calendar.</p>
          <img src="/img/Calendar.PNG" alt="Calendar" class="doc-image">
        </div>
      </div>

      <!-- Section Advanced Features -->
      <div id="advanced-features" class="doc-section">
        <h2>Advanced Features</h2>
        <p>Take advantage of powerful features for power users.</p>

        <div class="subsection" id="sieve-filters">
          <h3>Sieve Filters</h3>
          <p>Automatically organize your emails with server-side filtering.</p>
          <img src="/img/sieveFilters.png" alt="Sieve Filters" class="doc-image">
        </div>

        <div class="subsection" id="block-list">
          <h3>Block List</h3>
          <p>Block unwanted senders and domains.</p>
          <img src="/img/block_list.png" alt="Block List" class="doc-image">
        </div>

        <div class="subsection" id="snooze">
          <h3>Snooze</h3>
          <p>Temporarily hide emails and bring them back later.</p>
          <img src="/img/snooze.png" alt="Snooze Feature" class="doc-image">
        </div>

        <div class="subsection" id="archive">
          <h3>Archive</h3>
          <p>Archive emails for long-term storage and organization.</p>
          <img src="/img/Archive.png" alt="Archive Feature" class="doc-image">
        </div>
      </div>

      <!-- Section Configuration -->
      <div id="configuration" class="doc-section">
        <h2>Configuration</h2>
        <p>Advanced configuration options for administrators and power users.</p>

        <div class="subsection" id="server-config">
          <h3>Server Setup</h3>
          <p>Configure IMAP, SMTP, and other server connections.</p>
          <img src="/img/Multi.PNG" alt="Server Configuration" class="doc-image">
        </div>

        <div class="subsection" id="ews-config">
          <h3>Exchange Servers</h3>
          <p>Set up Microsoft Exchange and Office 365 integration.</p>
          <img src="/img/ews.png" alt="Exchange Server" class="doc-image">
        </div>

        <div class="subsection" id="user-profiles">
          <h3>User Profiles</h3>
          <p>Create and manage user profiles with different settings.</p>
          <img src="/img/userprofil.PNG" alt="User Profiles" class="doc-image">
        </div>

        <div class="subsection" id="developer-options">
          <h3>Developer Options</h3>
          <p>Access developer tools and API documentation.</p>
          <img src="/img/Developer.PNG" alt="Developer Options" class="doc-image">
        </div>
      </div>
    </main>

  </div>
<section>
