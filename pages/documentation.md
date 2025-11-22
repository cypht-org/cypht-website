---
title: "Documentation"
weight: 30
nocontainer: true
h1: false
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
      <h1 class="module-title">Cypht Documentation</h1>
      <p class="module-subtitle">Everything you need to know about setting up, configuring, and using Cypht to manage all your email accounts in one powerful, secure interface. From basic setup to advanced features.</p>
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
      <a href="#quick-start" class="btn btn-light">
        <i class="bi bi-lightning"></i>
        Quick Start
      </a>
    </div>
  </div>
</section>
<!-- Table of Contents -->
<scetion>
  <div>
    <!-- top menu -->
    <div id="getting-started" class="doc-top-nav">
      <div class="doc-top-nav-center">
        <img src="/img/logo_dark.svg"/>
      </div>
      <div class="doc-top-nav-right d-flex gap-2 gap-lg-0">
        <div class="custom-select">
          <button class="select-btn">
              <span id="selected_text" class="selected-text"></span>
                <span class="arrow">
                  <i class="bi bi-chevron-down dropdown-arrow"></i>
                </span>
          </button>
          <ul class="select-menu">
            <li data-value="Version 1.0.1">Version 1.x</li>
            <li data-value="Version 1.0.1">Version 2.x</li>
          </ul>
        </div>
        <div class="d-flex justify-content-center align-items-center d-lg-none">
            <button 
            type="button" data-bs-toggle="offcanvas" data-bs-target="#docNav" aria-controls="offcanvasRight"
            class="mobi-nav-btn">
              <i class="bi bi-three-dots-vertical"></i>
            </button>
        </div>
      </div>
    </div>
    <!-- doc-container -->
    <div class="doc-container">
      <div class="row p-2">
          <div class="col-lg-3 col-xl-2">
            <!-- on desk -->
            <div id="doc_menu_desktop_wrapper" class="doc-toc flex-shrink-0 d-none d-lg-block h-full">
              <nav id="doc_menu" class="toc-nav my-lg-5 accordion">
              </nav>
            </div>
            <!-- on mobile -->
            <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="docNav" aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">
                    Menu
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <div id="doc_menu_mobile_wrapper" class="toc-nav-container"></div>
                </div>
          </div>
          </div>
        <!-- Right -->
          <div class="col">
            <div class="row doc-content">
            </div>
          </div>
      </div>
    </div>

  </div>
</section>
