---
title: Features
weight: 10
loadScriptAfter: /js/feature.js
---

<div class="d-flex flex-column justify-content-center gap-4">
    <section class="hero-features">
        <div class="hero-content text-center d-flex flex-column row-gap-4">
            <div class="d-flex flex-column gap-3">
                <div >
                    <span class="chip">A simplified email experience</span>
                </div>
                <h1 class="hero-title">
                    Advanced features <br> for Cypht
                </h1>
                <p class="hero-subtitle">
                    Modern and high-performance interface with optimal security <br>
                    for a unified and customizable email experience.
                </p>
            </div>    
            <div class="d-flex justify-center">
                <ul class="d-flex gap-2  flex-wrap">
                    <li><a>Messaging</a></li>
                    <li><a>Search</a></li>
                    <li><a>Performance</a></li>
                    <li><a>Security</a></li>
                    <li><a>Development</a></li>
                </ul>
            </div>
        </div>
        <div class="hero-buttons">
            <a href="#messaging" class="btn btn-dark py-2">View features</a>
            <a href="/download" class="btn btn-light py-2">Install Cypht</a>
        </div>
    </section>
<!--  -->
    <div class="d-flex flex-column align-items-center gap-8 w-full">
        <!-- 1 -->
        <div id="messaging" class="fc-left ml-5">
            <div  class="fc-header">
                <span class="chip">Messaging</span>
                <p class="fc-h-title fc-h-title-left">Unified email experience for all your accounts in one place.</p>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
                <div class="col">
                    <div class="fc-card">
                        <div class="fc-card-header">
                            <img src="/img/fc_1.png" alt="IMAP">
                        </div>
                        <div class="fc-card-body">
                            <h5 class="feature-title">Unified Inbox</h5>
                            <p class="feature-description">Inbox, sent, flagged, and RSS views combined across all accounts.</p>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="col">
                    <div class="fc-card">
                        <div class="fc-card-header">
                            <img src="/img/fc_8.png" alt="IMAP">
                        </div>
                        <div class="fc-card-body">
                            <h5 class="feature-title">Flexible Profiles</h5>
                            <p class="feature-description">Combine IMAP & SMTP accounts, manage signatures and reply-to details.</p>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="col">
                    <div class="fc-card">
                        <div class="fc-card-header">
                            <img src="/img/fc_4.png" alt="IMAP">
                        </div>
                        <div class="fc-card-body">
                            <h5 class="feature-title">Move & Copy</h5>
                            <p class="feature-description">Easily move or copy emails between different accounts.</p>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="col">
                    <div class="fc-card">
                        <div class="fc-card-header">
                            <img src="/img/fc_3.png" alt="IMAP">
                        </div>
                        <div class="fc-card-body">
                            <h5 class="feature-title">Smart Filters</h5>
                            <p class="feature-description">Automatic rules (Sieve) to move, copy, or delete messages.</p>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="col">
                    <div class="fc-card">
                        <div class="fc-card-header">
                            <img src="/img/fc_5.png" alt="IMAP">
                        </div>
                        <div class="fc-card-body">
                            <h5 class="feature-title">Tags & Labels</h5>
                            <p class="feature-description">Organize and categorize emails with labels for quick access.</p>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="col">
                    <div class="fc-card">
                        <div class="fc-card-header">
                            <img src="/img/fc_7.png" alt="IMAP">
                        </div>
                        <div class="fc-card-body">
                            <h5 class="feature-title">IMAP Folder Sharing</h5>
                            <p class="feature-description">Collaborate by sharing IMAP folders with other accounts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Performance -->
        <div id="performance" class="fc-right">
            <div class="fc-header  d-flex flex-column align-items-center">
                <span class="chip">Performance</span>
                <p class="fc-h-title fc-h-title-center">Cypht (pronounced "sift") is like a news reader, but for E-mail.
                </p>
            </div>
            <div class="fp-grid">
                <div class="fp-feature-card fp-1">
                    <div class="fp-feature-card-body">
                        <h5 class="fp-feature-title">Lightweight Pages</h5>
                        <p class="fp-feature-description">Only 3 HTTP requests (~50KB gzipped), fast and efficient</p>
                    </div>
                </div>
                <div class="fp-feature-card fp-2">
                    <div class="fp-feature-card-body">
                        <h5 class="fp-feature-title">Smart Caching</h5>
                        <p class="fp-feature-description">Parallel AJAX + local storage for faster reloads.</p>
                    </div>
                </div>
                <div class="fp-feature-card fp-3">
                    <div class="fp-feature-card-body">
                        <h5 class="fp-feature-title">Accessibility</h5>
                        <p class="fp-feature-description">Semantic HTML5 with RTL language support.</p>
                    </div>
                </div>
                <div class="fp-feature-card fp-4">
                    <div class="fp-feature-card-body">
                        <h5 class="fp-feature-title">JMAP Sync</h5>
                        <p class="fp-feature-description">Faster synchronization with JMAP protocol.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 2 -->
        <div id="search" class="fc-right">
            <div class="fc-header">
                <span class="chip">Search</span>
                <p class="fc-h-title fc-h-title-left">Advanced search across all your email accounts in one place.</p>
            </div>

            <div class="fsearch-grid">
                <div class="fss-1 fss-card">
                    <div class="fss-card-body">
                        <h5 class="fss-title">Advanced Search</h5>
                        <p class="fss-description">Search across all accounts with powerful filters and boolean operators for precise results.</p>
                    </div>
                </div>
                <div class="fss-2 fss-card">
                    <div class="fss-card-body">
                        <h5 class="fss-title">Saved Searches</h5>
                        <p class="fss-description">Save your frequent searches for quick access and stay updated with automatic notifications.</p>
                    </div>
                </div>
                <div class="fss-3 fss-card">
                    <div class="fss-card-body">
                        <h5 class="fss-title">Saved Searches</h5>
                        <p class="fss-description">Save your frequent searches for quick access and stay updated with automatic notifications.</p>
                    </div>
                </div>
                <div class="fss-4 fss-card">
                    <div class="fss-card-body">
                        <h5 class="fss-title">Saved Searches</h5>
                        <p class="fss-description">Save your frequent searches for quick access and stay updated with automatic notifications.</p>
                    </div>
                </div>
                <div class="fss-5 fss-card">
                    <div class="fss-card-body">
                        <h5 class="fss-title">Saved Searches</h5>
                        <p class="fss-description">Save your frequent searches for quick access and stay updated with automatic notifications.</p>
                    </div>
                </div>
            </div>
         </div>
        <!-- 4 - Security -->
        <div id="security" class="fc-left fs-content">
            <div class="fc-header text-center">
                <span class="chip">Security</span>
                <p class="fc-h-title px-5">Cypht secures your emails and data with enterprise-grade protection.</p>
            </div>

            <div class="fs-grid">
                <div class="fs-1 fs-card">
                    <div class="fp-feature-card-body">
                        <h5 class="fs-title">Advanced Encryption</h5>
                        <p class="fs-description">End-to-end encryption for all communications with support for PGP/GPG, ensuring your emails remain private and secure from unauthorized access.</p>
                    </div>
                </div>
                <div class="fs-2 fs-card">
                    <div class="fp-feature-card-body">
                        <h5 class="fs-title">Flexible Authentication</h5>
                        <p class="fs-description">Supports IMAP, LDAP, database, or custom auth methods with 2FA integration.</p>
                    </div>
                </div>
                <div class="fs-3 fs-card">
                    <div class="fp-feature-card-body">
                        <h5 class="fs-title">Secure Storage</h5>
                        <p class="fs-description">Sessions stored in PDO databases or encrypted flat files with configurable security policies.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 5 -->
        <div id="development" class="fc-left">
            <div class="fc-header fc-h-title-left">
                <span class="chip">Development</span>
                <p class="fc-h-title">Cypht does not replace your existing accounts - it combines them into one.</p>
            </div>

            <div class="fd-grid">
              <div class="fd-1 fd-card">
                <div class="fp-feature-card-body">
                        <h5 class="fp-feature-title">Modules</h5>
                        <p class="fp-feature-description">IMAP, SMTP, LDAP, WordPress, GitHub and more modules available.</p>
                    </div>
              </div>
              <div class="fd-2 fd-card">
                <div class="fp-feature-card-body">
                        <h5 class="fp-feature-title">Build Process</h5>
                        <p class="fp-feature-description">Pre-calculated assets, developer mode for easy debugging.</p>
                    </div>
              </div>
              <div class="fd-3 fd-card">
                <div class="fp-feature-card-body">
                        <h5 class="fp-feature-title">EWS Support</h5>
                        <p class="fp-feature-description">Exchange Web Services (EWS) support for Exchange Server integration.</p>
                    </div>
              </div>
            </div>
        </div>
    </div>

</div>
