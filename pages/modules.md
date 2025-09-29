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
                <!-- <div class="module-cards">
                <div class="module-card"><img src="/svg/block-1.svg" /></div>
                <div class="module-card"><img src="/svg/block-1.svg" /></div>
                <div class="module-card"><img src="/svg/block-1.svg" /></div>
                <div class="module-card"><img src="/svg/block-1.svg" /></div>
                <div class="module-card"><img src="/svg/block-1.svg" /></div>
                <div class="module-card"><img src="/svg/block-1.svg" /></div>
                </div> -->
                <p class="module-subtitle">
                Artists can finely craft components built with React, Tailwind, and Shadcn UI.
                Developers can copy and paste them.
                </p>
                <div class="module-buttons">
                    <a href="#modules" class="btn btn-dark">Discover our modules</a>
                    <a href="https://github.com" target="_blank" class="btn btn-light">View on Github</a>
                </div>
            </div>  
        </div>
    </section>
    <div class="module-overview">
        <div class="d-flex flex-column module-overview-content">  
            <div class="w-100 px-lg-1 d-flex justify-content-between align-items-center">
                <div class="ov-header" id="modules">
                    <div><span class="chip">Overview</span></div>
                    <h3>
                    <span class="text-primary">Cypht's</span> Modular design centers on a core module with fully customizable components
                    </h3>

                    <div>
                        <div class="d-flex gap-5 mt-3">
                            <div class="d-flex flex-column">
                                <span class="fs-3 fw-bold opacity-75">30+</span>
                                <span class="ov-header-label">Modules</span>
                            </div>
                            <div class="d-flex flex-column">
                                <span class="fs-3 fw-bold opacity-75">50+</span>
                                <span class="ov-header-label">Contributors</span>
                            </div>
                        </div>

                        <div class="mt-3">
                            <a href="https://github.com" target="_blank" class="btn btn-light bg-primary py-2"> <i class="bi bi-github"></i> Contribute on Github</a>
                        </div>
                    </div>
                </div>

                <div class="d-flex gap-5 p-2 ">
                    <img src="/img/puzzle.png" alt="module_like_puzzle" class="object-fit-cover" style="width: 100%; height: 70%;" />
                </div>
            </div>
            <div class="ov-content column">
                <div class="row g-1 w-100">
                    <div class="col-lg-3 md-type-content">
                        <div class="md-type-header">
                            <div class="header-title">
                                <h5 class="mb-0">Categories</h5>
                                <span class="">
                                we can filter by category
                                </span>
                            </div>
                            <div class="md-type-body">
                                <ul id="md-type-items"></ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="md-items-header">
                            <div class="header-title d-flex gap-2">
                                 <!-- <div>
                                  <i class="bi bi-puzzle"></i>
                                 </div> -->
                                 <div>
                                    <h5 class="mb-0">Modules</h5>
                                    <span class="">
                                    List of modules
                                    </span>
                                 </div>
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

</div>
