---
title: Home
weight: 1
nocontainer: true
h1: Welcome to Cypht
loadScriptAfter: /js/home-page.js
---

<div>
    <!-- hero -->
    <section id="hero_minimal">
    	<div class="section-content home-hero">
    		<div class="home-hs-text-content">
                <span class="hs-chip">✨ Supports IMAP/SMTP, JMAP and EWS</span>
                <h2 class="display-6 fw-bold">All your E-mail, from all your accounts, in one place</h2>
                <p class="home-hs-subtitle">Cypht (pronounced "sift") is like a news reader, but for email. It doesn't replace your existing accounts, it combines them into a single, streamlined inbox.</p>
                <div class="home-hero-actions">
                    <a class="action-btn cypht-primary-btn" href="/install">Get Started</a>
                    <a class="action-btn cypht-secondary-btn" href="/documentation">See How it works</a>
                </div>
            </div>
            <div class="mini-stat d-flex align-items-center">
                <div class="avatar-group">
                    <img src="https://avatars.githubusercontent.com/u/3793556?v=4" alt="Customer avatar" class="avatar" />
                    <img src="https://avatars.githubusercontent.com/u/81784141?v=4" alt="Customer avatar" class="avatar" />
                    <img src="https://avatars.githubusercontent.com/u/28566468?v=4" alt="Customer avatar" class="avatar" />
                    <img src="https://avatars.githubusercontent.com/u/62720246?v=4" alt="Customer avatar" class="avatar" />
                </div>
                <!-- <span id="packagist-downloads">Loading downloads...</span> -->
                <p class="stat-text d-flex flex-column align-items-start mb-0"><span class="d-block">Trusted. With <span id="packagist-downloads" class="fw-bold"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from SVG Spinners by Utkarsh Verma - https://github.com/n3r4zzurr0/svg-spinners/blob/main/LICENSE --><circle cx="4" cy="12" r="3" fill="currentColor"><animate id="SVG7x14Dcom" fill="freeze" attributeName="opacity" begin="0;SVGqSjG0dUp.end-0.25s" dur="0.75s" values="1;.2"/></circle><circle cx="12" cy="12" r="3" fill="currentColor" opacity=".4"><animate fill="freeze" attributeName="opacity" begin="SVG7x14Dcom.begin+0.15s" dur="0.75s" values="1;.2"/></circle><circle cx="20" cy="12" r="3" fill="currentColor" opacity=".3"><animate id="SVGqSjG0dUp" fill="freeze" attributeName="opacity" begin="SVG7x14Dcom.begin+0.3s" dur="0.75s" values="1;.2"/></circle></svg></span></span> downloads worldwide</p>
            </div>
            <div class="minimal-mockup">
                <img src="/img/home/message_list_light.png" alt="App preview - light mode" class="mockup-light" />
                <img src="/img/home/message_list-dark.png" alt="App preview - dark mode" class="mockup-dark" />
            </div>
        </div>
    </section>
    <section>
    	<div class="section-content about-section">
                <div class="about-section-header">
                    <p class="home-overline">What is Cypht?</p>
                    <h1 class="section-card-title">About Cypht</h1>
                  <p class="section-card-subtitle subtitle-center">Cypht unifies your emails and RSS feeds in a simple, clear interface for easy message management.</p>
                </div>
                <div class="about-grid-3">
                    <div>
                        <div class="about-card">
                            <div class="card-illustration">
                                <img src="/img/home/_client.png" alt="Mail icon" loading="eager" decoding="async" />
                            </div>
                            <div class="card-content">
                                <h3>A standard E-mail client</h3>
                                <p class="card-desc">The driving force behind Cypht development is to provide combined views for multiple accounts, but it's also a standard E-mail client that lets you browse and manage IMAP folders and send outbound messages with SMTP.</p>
                            </div>
                            <button class="card-toggle action-btn cypht-primary-btn" type="button" aria-expanded="false">Read more</button>
                         </div>
                    </div>
                    <!-- 2 -->
                    <div>
                        <div class="about-card">
                            <div class="card-illustration">
                                <img src="/img/home/_plugins.png" alt="Module system illustration" loading="eager" decoding="async" />
                            </div>
                            <div class="card-content">
                                <h3>A set of plugins</h3>
                                <p class="card-desc">Cypht is an application built entirely of plugins, or as we call them, module sets (which is obviously way cooler sounding than plugins), that are executed by the framework. Modules provide a flexible way to add new features or customize the program without hacking the code.</p>
                            </div>
                            <button class="card-toggle action-btn cypht-primary-btn" type="button" aria-expanded="false">Read more</button>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div>
                        <div class="about-card">
                            <div class="card-illustration">
                                <img src="/img/home/_privacy.png" alt="Privacy illustration" loading="eager" decoding="async" />
                            </div>
                            <div class="card-content">
                                <h3>Privacy‑first</h3>
                                <p class="card-desc">Cypht is Open Source (LGPL V2), and written in PHP and JavaScript. If you are looking for a lightweight webmail solution for an ISP, school, business, or just personal use, I hope that Cypht can help!</p>
                            </div>
                            <button class="card-toggle action-btn cypht-primary-btn" type="button" aria-expanded="false">Read more</button>
                        </div>
                    </div>
             </div>
    	</div>
    </section>
    <!-- features -->
    <section class="features-section" id="features">
        <div class="section-content features-wide px-4">
            <div class="w-full">
                <span class="home-overline">Key Features</span>
                <h1 class="section-card-title">A new way to manage your emails</h1>
                <p class="features-subtitle">No more switching tabs. Cypht gives you a clear and centralized view of all your communications.</p>
            </div>
            <!--  -->
            <div class="features-grid mosaic-grid">
                <div class="f-card m-hero">
                    <div class="m-hero-col">
                       <div class="mb-3"> <span class="pill pill-soft">Unified Interface</span> </div>
                        <h3>Combined inbox for all your email accounts</h3>
                        <p>Get unified views for inbox, unread, sent, and flagged messages across all your accounts in one place, including RSS feeds.</p>
                    </div>
                    <div class="m-hero-col">
                        <img src="/img/u3.png" alt="Cypht Unified Interface" class="phone-mock">
                    </div>
                </div>
                <!-- left card -->
                <div class="f-card f-soft m-left">
                    <div class="f-illus">
                           <img src="/img/u1.png" alt="Cypht Unified Interface" class="phone-mock">
                    </div>
                    <h3>Advanced Email Management</h3>
                    <p>Move or copy emails between accounts. Compose in plain text, HTML, or Markdown with flexible signature options.</p>
                </div>
                <!-- right card -->
                <div class="f-card f-soft m-right">
                    <div class="f-illus">
                              <img src="/img/u4.png" alt="Cypht Unified Interface" class="phone-mock">
                    </div>
                    <h3>Universal Search</h3>
                    <p>Instantly search across all your email accounts and RSS feeds with a powerful search engine.</p>
                </div>
                <!-- yellow card -->
                <div class="f-card m-yellow">
                    <div class="f-apps">
                        <h3>Extensive Module System</h3>
                        <p>Easily extend functionality with a flexible and scalable module system.</p>
                        <div class="apps">
                            <i class="bi bi-google"></i>
                            <i class="bi bi-microsoft"></i>
                            <i class="bi bi-dropbox"></i>
                            <i class="bi bi-github"></i>
                            <i class="bi bi-wordpress"></i>
                        </div>
                        <a href="/modules" class="see-all-link fw-medium">See all modules</a>
                    </div>
                </div>
                <!-- cyan card -->
                <div class="f-card m-cyan">
                    <div class="f-sync">
                        <h3>Server-Side Filtering</h3>
                        <p>Organize your inbox with Sieve email filtering that works even when you're offline.</p>
                        <div class="stack-illus">
                            <div class="layer"></div>
                            <div class="layer"></div>
                        </div>
                    </div>
                </div>
                <!-- CTA card -->
                <div class="f-card f-others cypht-card-bg">
                    <div>
                        <div class="cta-badge">
                            <i class="bi bi-rocket"></i>
                        </div>
                        <h3>Flexible Authentication</h3>
                        <p>Support for IMAP, LDAP, database, and popular email providers with auto-discovery.</p>
                        <a href="/features" class="btn btn-light cta-btn fw-bold">See all features <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="faq" class="faq-section">
        <div class="section-content px-4">
            <div class="faq-container">
                <div class="faq-left section-card-header">
                 <span class="home-overline">faq</span>
                    <h1 class="section-card-title">Frequently Asked Questions</h1>
                    <p class="section-card-subtitle">Trusted by users in more than 50 countries and thousands of developers worldwide.</p>
                    <div class="faq-contact-box mt-3">
                        <div class="faq-contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#81B441"stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <div>
                            <h4>Do you have suge=gestion or other questions ?</h4>
                            <p class="simple-description">Our team will answer all your questions, we ensure a quick response.</p>
                            <a href="https://matrix.to/#/#cypht-org_community:gitter.im" class="action-btn contact-btn cypht-primary-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-4 2.25a4.124 4.124 0 0 0-4.095 3.642l-.65 5.52a.75.75 0 0 0 1.49.176l.65-5.52a2.624 2.624 0 0 1 1.855-2.209v4.193c0 .899 0 1.648.08 2.242c.084.628.27 1.195.726 1.65c.455.456 1.022.642 1.65.726c.594.08 1.344.08 2.242.08h.104c.899 0 1.648 0 2.243-.08c.627-.084 1.194-.27 1.65-.726c.455-.455.64-1.022.725-1.65c.08-.594.08-1.343.08-2.242v-4.193a2.624 2.624 0 0 1 1.856 2.208l.65 5.52a.75.75 0 1 0 1.489-.175l-.65-5.52A4.124 4.124 0 0 0 16 12.25z"/></svg>
                                Contact Our Team
                            </a>
                        </div>
                    </div>
                </div>
                <div class="faq-right">
                    <div class="accordion accordion-flush faq-accordion" id="accordion_flush_faq">
                        <!-- 1 -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Can I access multiple email accounts with Cypht ?
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordion_flush_faq">
                            <div class="accordion-body">Yes! Cypht is specifically designed to manage multiple email accounts simultaneously. You can add accounts from various providers (Gmail, Outlook, IMAP, JMAP, EWS) and access them all through a unified interface.</div>
                            </div>
                        </div>
                        <!-- 2 -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-2" aria-expanded="false" aria-controls="flush-collapse-2">
                                Does Cypht support multiple users ?
                            </button>
                            </h2>
                            <div id="flush-collapse-2" class="accordion-collapse collapse" data-bs-parent="#accordion_flush_faq">
                            <div class="accordion-body">Yes, Cypht supports multiple users. Each user can have their own login and manage their collection of email accounts independently.</div>
                            </div>
                        </div>
                        <!-- 3 -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-3" aria-expanded="false" aria-controls="flush-collapse-3">
                                What is the Combined Inbox ?
                            </button>
                            </h2>
                            <div id="flush-collapse-3" class="accordion-collapse collapse" data-bs-parent="#accordion_flush_faq">
                            <div class="accordion-body">The Combined Inbox displays emails from all your connected accounts in one unified view, allowing you to read, sort, and manage messages from different providers without switching between accounts.</div>
                            </div>
                        </div>
                        <!-- 4 -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-4" aria-expanded="false" aria-controls="flush-collapse-4">
                               Can I create email filters ?
                            </button>
                            </h2>
                            <div id="flush-collapse-4" class="accordion-collapse collapse" data-bs-parent="#accordion_flush_faq">
                            <div class="accordion-body">Yes, Cypht supports Sieve filters. Go to Settings > Sieve Filters, select your account, and create filters to automatically organize emails based on criteria like sender, subject, or keywords.</div>
                            </div>
                        </div>
                        <!-- 5 -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-5" aria-expanded="false" aria-controls="flush-collapse-5">
                               Is there a contact management system ?
                            </button>
                            </h2>
                            <div id="flush-collapse-5" class="accordion-collapse collapse" data-bs-parent="#accordion_flush_faq">
                            <div class="accordion-body">Yes, Cypht includes a contact book. You can add contacts manually from contacts page or quickly add senders by clicking the person icon in received messages.</div>
                            </div>
                        </div>
                        <!-- 6 -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-6" aria-expanded="false" aria-controls="flush-collapse-6">
                               How do I add new email accounts ?
                            </button>
                            </h2>
                            <div id="flush-collapse-6" class="accordion-collapse collapse" data-bs-parent="#accordion_flush_faq">
                            <div class="accordion-body">Click “Add” in the accounts section. For services like Gmail or Outlook, you may need to configure OAuth settings in your configuration file.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
