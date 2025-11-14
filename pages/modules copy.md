---
title: Modules
weight: 20
loadScriptAfter: /js/module.js
---

<div class="d-flex flex-column justify-content-center gap-2"> 
    <section class="relative module-container w-100">
        <div class="module-hero w-100 d-flex justify-content-center align-items-center text-center">
            <div class="d-flex flex-column justify-content-center align-items-center text-center">
                <div class="mb-2 module-header">
                   <div class="mb-2">
                    <span class="chip"> 〽️ A simplified email experience</span>
                   </div> 
                    <h1 class="module-title">
                    Discover all <span class="text-primary">Cypht</span> modules<br>to personalize your email experience
                    </h1>
                </div>
                <p class="module-subtitle">
                Artists can finely craft components built with React, Tailwind, and Shadcn UI.
                Developers can copy and paste them.
                </p>
                <div class="module-buttons">
                    <a href="#modules" class="btn btn-dark">Discover our modules</a>
                    <a href="https://github.com/cypht-org/cypht" target="_blank" class="btn btn-light">View on Github</a>
                </div>
            </div>  
        </div>
    </section>
    <div class="module-overview">
        <div class="d-flex flex-column module-overview-content">  
            <div class="w-100 px-lg-1 d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start gap-4 gap-lg-5 text-center text-lg-start ov-text-content">
                <div class="ov-header" id="modules">
                    <div><span class="chip">Overview</span></div>
                    <h2>
                    <span class="text-primary">Cypht's</span> Modular design centers on a core module with fully customizable components
                    </h2>
<!--  -->
                    <div class="ov-stat-content">
                        <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-5 gap-lg-5">
                            <div class="d-flex flex-column">
                                <span class="ov-header-stats">30+</span>
                                <span class="ov-header-label">Modules</span>
                            </div>
                            <div class="d-flex flex-column">
                                <span class="ov-header-stats">50+</span>
                                <span class="ov-header-label">Contributors</span>
                            </div>
                        </div>
<!--  -->
                        <div class="mt-3">
                            <a href="https://github.com" target="_blank" class="btn btn-light bg-primary py-2"> <i class="bi bi-github"></i> Contribute on Github</a>
                        </div>
                    </div>
                </div>
<!--  -->
                <div class="d-none d-lg-flex flex-grow-1 ov-img">
                    <img src="/img/puzzle.png" alt="Illustration of modular puzzle pieces" class="object-fit-contain"  />
                </div>
            </div>
            <!--  -->
            <div class="ov-content column">
                <div class="row g-3 g-lg-1 w-100">
                    <div class="col-lg-3 md-type-content mb-4 mb-lg-0">
                        <div class="md-type-header">
                            <div class="header-title d-none">
                                <h5 class="mb-0">Categories</h5>
                                <span class="">
                                we can filter by category
                                </span>
                            </div>
                            <div class="md-type-body" role="dialog" aria-modal="true" aria-labelledby="md-type-popover-title">
                                <div class="md-type-popover">
                                    <div class="md-type-popover-header">
                                        <h6 class="md-type-popover-title mb-0" id="md-type-popover-title">Choose a category</h6>
                                        <button class="md-type-close btn btn-icon" type="button" aria-label="Close category list">
                                            <i class="bi bi-x-lg" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                    <div class="md-type-popover-content">
                                        <ul id="md-type-items"></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div class="col-lg-9 position-relative md-list-content">
                        <div class="md-items-header mb-sm-4 mb-lg-1">
                            <div class="header-title d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                 <div class="header-copy d-flex flex-column gap-1">
                                    <h5 class="mb-0">Modules</h5>
                                    <span class="header-subtitle">
                                    Explore reusable building blocks to tailor your email experience.
                                    </span>
                                 </div>
                                 <div class="header-meta d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                                    <span class="header-count badge rounded-pill text-bg-light">
                                        Showing <span id="md-items-count">0</span> modules
                                    </span>
                                    <span class="header-active-filter badge rounded-pill text-bg-primary-subtle text-primary-emphasis" id="md-active-filter" data-label="All categories">
                                        All categories
                                    </span>
                                    <button class="md-type-toggle btn d-lg-none" type="button" aria-expanded="false" aria-controls="md-type-items" data-open-text="Show categories" data-close-text="Hide categories">
                                        <i class="bi bi-funnel-fill md-type-toggle-icon" aria-hidden="true"></i>
                                        <span class="md-type-toggle-label">Show categories</span>
                                    </button>
                                 </div>
                            </div>
                        </div>
                        <div class="md-items-separator"></div>
                        <div class="md-items-content">
                            <ul id="md-items"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
