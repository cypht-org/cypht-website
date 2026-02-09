---
id: 2
title: Getting Started
layout: section/documentation
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>Getting Started</h3>
    </div>

    <div id="overview" class="doc-section">
        <div class="doc-section-header">
            <a href="#overview">The Architecture of Digital Freedom</a>
        </div>
        <span class="doc-section-text">
            Welcome to the <strong>Cypht</strong> ecosystem. If you're reading this, you've chosen to reclaim control over your data. Unlike traditional email clients (Outlook, Thunderbird) or centralized webmails (Gmail), Cypht was designed as a <strong>server-side modular aggregator</strong>.
        </span>
        <span class="doc-section-text">
            This means Cypht doesn't just "read" your emails; it synthesizes, organizes, and presents them in a unified interface—without permanently storing your messages on its own server (unless configured otherwise). It's an ultra-lightweight gateway between you and your multiple digital identities.
        </span>
    </div>

    <div id="prerequisites" class="doc-section">
        <div class="doc-section-header">
            <a href="#prerequisites">🛑 Step Zero: Environment Setup</a>
        </div>
        <span class="doc-section-text">
            Before exploring the interface, Cypht must be deployed on a web server (Apache/Nginx) with PHP. This process is technical and requires specific prerequisites.
        </span>
        <div class="tip-card tip-warning">
            <span class="tip-warning-text"><i class="bi bi-exclamation-triangle"></i> Haven't installed Cypht yet?</span>
            <p class="mb-2">Don't attempt to configure your accounts now. Follow our step-by-step installation protocol first: <a href="/install" class="text-link">Access Technical Installation Guide</a></p>
        </div>
    </div>

    <div id="concepts" class="doc-section">
        <div class="doc-section-header">
            <a href="#concepts">Understanding Fundamental Concepts</a>
        </div>
        <span class="doc-section-text">
            It's crucial to understand the distinction between your local profile and remote accounts.
        </span>
        <div class="feature-card">
            <h6>Local Profile vs Remote Accounts</h6>
            <p>Your <strong>Cypht Profile</strong> contains your preferences and encryption keys. Your <strong>Remote Accounts</strong> are the data sources Cypht queries in real-time.</p>
        </div>
    </div>

    <div id="setup" class="doc-section">
        <div class="doc-section-header">
            <a href="#setup">Detailed Configuration: Your First Steps</a>
        </div>
        <span class="doc-section-text">
            Follow these steps to get your Cypht instance configured and ready to use.
        </span>

        <div class="doc-subsection-header">
            <a href="#first_connection">1. First Connection</a>
        </div>
        <p>Once installation is complete, you'll land on the profile creation page. Here, privacy is paramount: the password you choose encrypts your settings in the local database. If you lose this password, no one can recover your linked account access—we don't offer "email resets" for security reasons.</p>

        <div class="doc-subsection-header">
            <a href="#adding_accounts">2. Adding Data Sources (Accounts)</a>
        </div>
        <p>To bring your interface to life, go to the <strong>"Settings"</strong> menu then <strong>"Accounts"</strong>. Cypht excels in versatility:</p>

        <div class="row">
            <div class="col-md-4 mb-3">
                <div class="feature-card">
                    <h6><i class="bi bi-envelope"></i> IMAP (Email)</h6>
                    <p class="small">Standard protocol. Requires server address, port (usually 993 with SSL), and credentials.</p>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="feature-card">
                    <h6><i class="bi bi-rss"></i> RSS/Atom</h6>
                    <p class="small">Enter feed URL to transform articles into readable messages in your inbox.</p>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="feature-card">
                    <h6><i class="bi bi-cloud"></i> Cloud Services</h6>
                    <p class="small">Link external contact or calendar services via activated modules.</p>
                </div>
            </div>
        </div>

        <div class="tip-card tip-info mt-3">
            <span class="tip-info-text"><i class="bi bi-info-circle"></i> Google/Microsoft Security</span>
            <p class="mb-0">These providers often block direct password connections. You'll need to generate an "App Password" in your Google or Microsoft account settings to allow Cypht to connect.</p>
        </div>
    </div>

    <div id="workflow" class="doc-section">
        <div class="doc-section-header">
            <a href="#workflow">Optimizing Your Workflow</a>
        </div>
        <span class="doc-section-text">
            Cypht's major advantage is its <strong>Combined View</strong>. In a world where we all have 3-4 email addresses, switching between them is time-consuming. Cypht eliminates this barrier.
        </span>

        <div class="row">
            <div class="col-md-6 mb-3">
                <div class="feature-card">
                    <h6><i class="bi bi-funnel"></i> Custom Views</h6>
                    <p>Create filters to group "Urgent" emails or social media notifications from all accounts.</p>
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="feature-card">
                    <h6><i class="bi bi-search"></i> Global Search</h6>
                    <p>Single search across work account, personal account, and local archives simultaneously.</p>
                </div>
            </div>
        </div>
    </div>

    <div id="modules" class="doc-section">
        <div class="doc-section-header">
            <a href="#modules">The Module Ecosystem</a>
        </div>
        <span class="doc-section-text">
            Cypht is "Lean" by default—minimalist. To extend it, explore the <strong>Modules</strong> tab. You can activate various modules to enhance functionality.
        </span>

        <ul>
            <li><strong>Notes Module:</strong> Keep quick memos and reminders</li>
            <li><strong>Advanced Search Module:</strong> Complex queries on email headers</li>
            <li><strong>Themes Module:</strong> Adapt the interface (Dark Mode, compact themes, etc.)</li>
        </ul>
    </div>

    <nav-pagination
        prev-label="Introduction"
        prev-url="/documentation/introduction"
        next-label="Interfaces"
        next-url="/documentation/interfaces">
    </nav-pagination>

</div>

<div class="doc-content-right d-none d-xl-flex col-xl-2">
    <div class="dc-ctr-content">
        <div class="dc-ctr-header">
            <p class="dc-ctr-header-title">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h12M4 12h16M4 19h8" color="currentColor"/></svg>
                On this page
            </p>
        </div>
        <nav>
            <ul id="dc-ctr-nav">
                <li><a href="#overview" class="active">Architecture Overview</a></li>
                <li><a href="#prerequisites">Prerequisites</a></li>
                <li><a href="#concepts">Core Concepts</a></li>
                <li><a href="#setup">Configuration</a></li>
                <li><a href="#workflow">Workflow Optimization</a></li>
                <li><a href="#modules">Module Ecosystem</a></li>
            </ul>
        </nav>
    </div>
</div>
