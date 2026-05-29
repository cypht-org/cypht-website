---
title: "Modules & Extensions"
description: "Discover 30+ Cypht modules to personalize your email experience. Enable or disable module sets independently for IMAP, SMTP, LDAP, WordPress, GitHub, and more."
weight: 20
loadScriptAfter: /js/module.js
---

<div class="d-flex flex-column justify-content-center gap-2"> 
    <section class="relative module-container w-100">
        <div class="module-hero w-100 d-flex justify-content-center align-items-center text-center">
            <div class="d-flex flex-column justify-content-center align-items-center text-center">
                <div class="mb-2 module-header">
                   <div class="mb-2">
                    <span class="hs-chip"> 〽️ A simplified email experience</span>
                   </div> 
                    <h1 class="display-6 fw-bold">
                    Discover all <span class="text-primary">Cypht</span> modules<br>to personalize your email experience
                    </h1>
                </div>
                <p class="module-subtitle home-hs-subtitle">
                    Cypht uses module sets to separate functionality in the program. Module sets can be enabled and disabled independently.
                </p>
                <div class="module-buttons">
                    <a href="#modules" class="action-btn cypht-primary-btn">Discover our modules</a>
                    <a href="https://github.com/cypht-org/cypht" target="_blank" class="action-btn cypht-secondary-btn">View it on GitHub</a>
                </div>
            </div>  
        </div>
    </section>
    <div class="module-overview">
        <div class="d-flex flex-column module-overview-content">  
            <div class="w-100 px-lg-1 d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start gap-4 gap-lg-5 text-center text-lg-start ov-text-content">
                <div class="ov-header">
                    <div><span class="home-overline">Overview</span></div>
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
                            <a href="https://github.com/cypht-org/cypht" target="_blank" class="action-btn cypht-primary-btn"> <i class="bi bi-github"></i> Contribute on GitHub</a>
                        </div>
                    </div>
                </div>
<!--  -->
                <div class="d-none d-lg-flex flex-grow-1 ov-img">
                    <img src="/img/puzzle.png" alt="Illustration of modular puzzle pieces" width="500" height="500" loading="eager" fetchpriority="high" decoding="async" class="object-fit-contain"  />
                </div>
            </div>
            <!--  -->
            <div id="modules" class="ov-content column">
                <div class="row w-100">
                    <div class="col-lg-3 md-type-content mb-4">
                        <div class="md-type-header">
                            <div class="type-header-title header-title d-none d-lg-flex">
                                <h5 class="mb-0">
                                Module Categories</h5>
                                <span class="">
                                Filter modules by category
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
                    <div class="col-lg-9  md-list-content">
                        <!-- <div class="md-items-header mb-sm-4 mb-lg-1">
                            <div class="header-title d-flex flex-column flex-md-row  justify-content-between gap-3">
                                 <div class="header-copy d-flex flex-column gap-1">
                                    <h5 class="mb-0">
                                    Modules</h5>
                                    <span class="header-subtitle">
                                    Explore reusable building blocks to tailor your email experience.
                                    </span>
                                 </div>
                                 <div class="header-meta d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                                    <span class="header-count">
                                        Showing <span id="md-items-count">0</span> modules
                                    </span>
                                 </div>
                            </div>
                        </div> -->
                        <div class="d-flex justify-content-end float-content">
                                <button class="md-type-toggle btn" type="button" aria-expanded="false" aria-controls="md-type-items" data-open-text="Afficher les catégories" data-close-text="Masquer les catégories">
                                <i class="bi bi-funnel-fill md-type-toggle-icon" aria-hidden="true"></i>
                                </button>
                        </div>
                        <div class="md-items-content">
                            <ul id="md-items"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
