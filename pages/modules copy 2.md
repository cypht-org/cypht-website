---
title: Modules
weight: 20
loadScriptAfter: /js/module.js
---

<div class="d-flex flex-column justify-content-center gap-5"> 
    <section class="relative module-container w-100">
        <div class="module-hero w-100 d-flex justify-content-center align-items-center text-center">
            <div class="d-flex flex-column justify-content-center align-items-center text-center">
                <div class="mb-2 module-header">
                   <div class="mb-2">
                    <span class="chip"> 〽️ A simplified email experience</span>
                   </div> 
                    <h1 class="module-title">
                    Discover all Cypht modules<br>to personalize your email experience
                    </h1>
                </div>
                <div class="module-cards">
                <div class="module-card"><img src="/img/icon1.png" alt="Icon 1" /></div>
                <div class="module-card"><img src="/img/icon2.png" alt="Icon 2" /></div>
                <div class="module-card"><img src="/img/icon3.png" alt="Icon 3" /></div>
                <div class="module-card"><img src="/img/icon4.png" alt="Icon 4" /></div>
                <div class="module-card"><img src="/img/icon5.png" alt="Icon 5" /></div>
                <div class="module-card"><img src="/img/icon6.png" alt="Icon 6" /></div>
                </div>
                <p class="module-subtitle">
                Artists can finely craft components built with React, Tailwind, and Shadcn UI.
                Developers can copy and paste them.
                </p>
                <div class="module-buttons">
                    <a href="#join" class="btn btn-dark">Discover our modules</a>
                    <a href="https://github.com" target="_blank" class="btn btn-light">View on Github</a>
                </div>
            </div>  
        </div>
    </section>
    <div class="">
        <div class="d-flex flex-column module-overview-content">  
          <div class="d-flex flex-column align-items-center">
            <div class="w-100 px-lg-5">
                <div class="ov-header">
                    <div><span class="chip">Overview</span></div>
                    <h3>
                    Cypht's modular design centers on a core module with fully customizable components
                    </h3>
                </div>
            </div>
            <div class="ov-content column px-lg-5 pt-5">
              <div class="module-list col-lg-6">
                <ul class="module-items">
                    <li class="module-item">
                        <span class="module-chip">Two-Factor Auth</span>
                        <h4>TOTP Authentication</h4>
                        <p>TOTP based 2 factor authentication using the Google Authenticator mobile app</p>
                        <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3A2fa" target="_blank" class="btn btn-dark module-issue-link">Issues <i class="bi bi-box-arrow-up-right"></i></a>
                    </li>
                    <li class="module-item">
                        <span class="module-chip">User Accounts</span>
                        <h4>User Management</h4>
                        <p>UI features for admins to create accounts, and for users to update passwords (when using the built-in DB authentication)</p>
                        <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Aaccount" target="_blank" class="btn btn-dark module-issue-link">Issues <i class="bi bi-box-arrow-up-right"></i></a>
                    </li>
                    <li class="module-item">
                        <span class="module-chip">Advanced Search</span>
                        <h4>Advanced Search</h4>
                        <p>Powerful search capabilities across all your emails and attachments with support for complex queries, filters, and boolean operators to quickly find exactly what you need.</p>
                        <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Aadvanced_search" target="_blank" class="btn btn-dark module-issue-link">Issues <i class="bi bi-box-arrow-up-right"></i></a>
                    </li>
                    <li class="module-item">
                        <span class="module-chip">API Integration</span>
                        <h4>API Login</h4>
                        <p>Seamless integration with external authentication systems through a secure API, enabling single sign-on (SSO) capabilities and centralized user management across multiple applications.</p>
                        <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Aapi_login" target="_blank" class="btn btn-dark module-issue-link">Issues <i class="bi bi-box-arrow-up-right"></i></a>
                    </li>
                    <li class="module-item">
                        <span class="module-chip">Calendar System</span>
                        <h4>Basic Calendar</h4>
                        <p>Manage your schedule with a fully integrated calendar that supports events, reminders, and seamless synchronization with popular calendar services.</p>
                        <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Acalendar" target="_blank" class="btn btn-dark module-issue-link">Issues <i class="bi bi-box-arrow-up-right"></i></a>
                    </li>
                    <li class="module-item">
                        <span class="module-chip">Contact Manager</span>
                        <h4>Contact Management</h4>
                        <p>Contact management with support for multiple backends</p>
                        <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Acontacts" target="_blank" class="btn btn-dark module-issue-link">Issues <i class="bi bi-box-arrow-up-right"></i></a>
                    </li>
                    <li class="module-item">
                        <span class="module-chip">Core System</span>
                        <h4>Core Module</h4>
                        <p>Handles page layout, login/logout, and the default settings pages</p>
                        <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Acore" target="_blank" class="btn btn-dark module-issue-link">Issues <i class="bi bi-box-arrow-up-right"></i></a>
                    </li>
                    <li class="module-item">
                        <span class="module-chip">Desktop Alerts</span>
                        <h4>Desktop Notifications</h4>
                        <p>Stay informed with real-time desktop alerts for new messages, including sender information and message previews, even when Cypht isn't your active window.</p>
                        <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Adesktop_notifications" target="_blank" class="btn btn-dark module-issue-link">Issues <i class="bi bi-box-arrow-up-right"></i></a>
                    </li>
                    <li class="module-item">
                        <span class="module-chip">IMAP Support</span>
                        <h4>IMAP Support</h4>
                        <p>Full IMAP protocol support for accessing and managing your email accounts with features like folder management, message flagging, and server-side search.</p>
                        <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Aimap" target="_blank" class="btn btn-dark module-issue-link">Issues <i class="bi bi-box-arrow-up-right"></i></a>
                    </li>
                    <li class="module-item">
                        <span class="module-chip">JMAP Protocol</span>
                        <h4>JSON Meta Application Protocol</h4>
                        <p>Modern protocol for streamlined communication and optimized performance</p>
                        <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Ajmap" target="_blank" class="btn btn-dark module-issue-link">Issues <i class="bi bi-box-arrow-up-right"></i></a>
                    </li>
                    <li class="module-item">
                        <span class="module-chip">PGP Encryption</span>
                        <h4>PGP Encryption</h4>
                        <p>End-to-end email encryption using OpenPGP standard to ensure your communications remain private and secure, with support for key management and verification.</p>
                        <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3APGP" target="_blank" class="btn btn-dark module-issue-link">Issues <i class="bi bi-box-arrow-up-right"></i></a>
                    </li>
                    <li class="module-item">
                        <span class="module-chip">Tag System</span>
                        <h4>Content Tagging</h4>
                        <p>Efficiently categorize and retrieve your emails and files with a flexible tagging system that supports custom labels, color-coding, and batch operations for better organization.</p>
                        <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Atags" target="_blank" class="btn btn-dark module-issue-link">Issues <i class="bi bi-box-arrow-up-right"></i></a>
                    </li>
                </ul>
            </div>

            <div class="module-cover col-6">
                <div class="md-cover-content">
                    <img src="/svg/block-1.svg" alt="Module Cover">
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>

</div>
