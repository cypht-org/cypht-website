---
title: "Join the Community"
description: "Get started with the Cypht open-source community. Connect on Gitter, contribute on GitHub, set up your development environment, and follow our guidelines to start contributing."
nocontainer: true
exclude: true
h1: false
---

<div class="contribute-page">

  <!-- Hero Section -->
  <section class="contribute-hero">
    <div class="contribute-hero-content">
      <div>
        <span class="hs-chip">🌍 Open Source Community</span>
      </div>
      <h1 class="display-5 fw-bold mb-0">
        Getting Started with the Cypht Community
      </h1>
      <p class="contribute-subtitle home-hs-subtitle">
        Welcome! We're excited to have you join us. Whether you're a developer, designer, or documentation writer,
        there's a place for you in the Cypht community.
      </p>
      <div class="contribute-buttons mt-3">
        <a href="#get-involved" class="action-btn cypht-primary-btn">Get Involved</a>
        <a href="https://matrix.to/#/#cypht-org_community:gitter.im" class="action-btn cypht-secondary-btn" target="_blank" rel="noopener">
          Join the Community
        </a>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section class="contribute-main cy-container" id="get-involved">
    <div class="contribute-content-grid">

      <!-- About Cypht -->
      <div class="contribute-section-block">
        <div class="contribute-section-header">
          <span class="home-overline">About the Community</span>
          <h2 class="section-card-title">What is Cypht?</h2>
        </div>
        <div class="contribute-section-body">
          <p>
            Cypht is an Open Source email client and news aggregator with a modular design. Unlike traditional
            applications, Cypht is built entirely from plugins (called "module sets"), with core modules being
            essential. Users can customize their experience by adding or replacing modules to suit their needs.
          </p>
          <h4>Our Values</h4>
          <p>
            As a community, we prioritize collaboration, inclusivity, and transparency. We encourage respect for
            others and open communication. Our goal is to create a welcoming environment for all contributors,
            regardless of experience level.
          </p>
        </div>
      </div>

      <!-- How to Get Involved -->
      <div class="contribute-section-block">
        <div class="contribute-section-header">
          <span class="home-overline">Join Us</span>
          <h2 class="section-card-title">Getting Involved</h2>
        </div>
        <div class="contribute-cards-grid">
          <div class="contribute-card">
            <div class="contribute-card-icon">
              <i class="bi bi-chat-dots"></i>
            </div>
            <h4>Connect on Gitter</h4>
            <p>Reach out, ask questions, and connect with other community members on our Gitter channel.</p>
            <a href="https://matrix.to/#/#cypht-org_community:gitter.im" class="action-btn cypht-primary-btn btn-sm mt-2" target="_blank" rel="noopener">
              Open Gitter
            </a>
          </div>
          <div class="contribute-card">
            <div class="contribute-card-icon">
              <i class="bi bi-github"></i>
            </div>
            <h4>Contribute on GitHub</h4>
            <p>Browse issues, submit pull requests, and help improve the codebase directly on GitHub.</p>
            <a href="https://github.com/cypht-org/cypht" class="action-btn cypht-secondary-btn btn-sm mt-2" target="_blank" rel="noopener">
              Open GitHub
            </a>
          </div>
          <div class="contribute-card">
            <div class="contribute-card-icon">
              <i class="bi bi-book"></i>
            </div>
            <h4>Read the Docs</h4>
            <p>Read the official documentation to understand how Cypht works before contributing.</p>
            <a href="/documentation" class="action-btn cypht-secondary-btn btn-sm mt-2">
              Read Docs
            </a>
          </div>
        </div>
      </div>

      <!-- Development Environment -->
      <div class="contribute-section-block">
        <div class="contribute-section-header">
          <span class="home-overline">Setup</span>
          <h2 class="section-card-title">Setting Up Your Environment</h2>
        </div>
        <div class="contribute-section-body">
          <p>Before contributing to Cypht, you'll need to set up your development environment with the following tools:</p>
          <ul class="contribute-checklist">
            <li><i class="bi bi-check-circle-fill text-primary"></i> A code editor of your choice (e.g., VSCode, Sublime Text)</li>
            <li><i class="bi bi-check-circle-fill text-primary"></i> Git for version control</li>
            <li><i class="bi bi-check-circle-fill text-primary"></i> PHP for developing Cypht</li>
            <li><i class="bi bi-check-circle-fill text-primary"></i> A web server (e.g., Apache, Nginx) for testing</li>
          </ul>
          <p>For full installation, configuration, and setup instructions, visit the
            <a href="/install" class="text-link">Installation Guide</a>.
          </p>
        </div>
      </div>

      <!-- Contributing Practices -->
      <div class="contribute-section-block">
        <div class="contribute-section-header">
          <span class="home-overline">Guidelines</span>
          <h2 class="section-card-title">Contributing to Cypht</h2>
        </div>
        <div class="contribute-section-body">
          <p>
            When contributing to Cypht, please follow our community
            <a href="/contribute" class="text-link">contribution guidelines</a>. 
            This ensures a smooth collaboration experience for everyone.
          </p>
          <p>
            Don't hesitate to ask for help or guidance. We have experienced community members who are happy to
            mentor and support newcomers.
          </p>
        </div>
      </div>

    </div>
  </section>

</div>

<style>
.contribute-main {
  padding: 4rem 1.5rem;
  max-width: var(--container-6xl);
  margin: 0 auto;
}
.contribute-content-grid {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}
.contribute-section-block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.contribute-section-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.contribute-section-body p,
.contribute-section-body ul {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
}
.contribute-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}
.contribute-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.contribute-card-icon {
  font-size: 1.75rem;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}
.contribute-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}
.contribute-card p {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.6;
}
.contribute-checklist {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.contribute-checklist li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.98rem;
  color: var(--color-text-secondary);
}
</style>
