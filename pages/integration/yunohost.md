---
id: 2
title: Cypht on YunoHost
description: "Cypht is in the YunoHost app catalogue. Install it from the admin dashboard or from the command line, and use it as the webmail of your YunoHost mail server."
layout: section/integration
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>Cypht on YunoHost</h3>
    </div>

    <div id="overview" class="doc-section">
        <div class="doc-section-header">
            <a href="#overview">Overview</a>
        </div>
        <span class="doc-section-text">
            <a href="https://yunohost.org/en/whatsyunohost" target="_blank" rel="noopener">YunoHost</a> is a
            Debian-based distribution that simplifies server administration to democratise self-hosting, while
            staying reliable, secure, ethical and lightweight. It can be installed on many kinds of hardware, from an
            old laptop to a VPS.
        </span>
        <p class="doc-section-text">
            A YunoHost server includes its own mail server, and it lets you choose the webmail that goes on top of
            it. Cypht is one of those choices, and the one to pick if you want a single interface over several
            mailboxes rather than one account at a time.
        </p>

        <div class="integration-note">
            <i class="bi bi-people" aria-hidden="true"></i>
            <p><strong>Packaged by the community.</strong> The package is maintained in the <a href="https://github.com/YunoHost-Apps/cypht_ynh" target="_blank" rel="noopener">YunoHost-Apps</a> organisation, not by the Cypht team, so its version can trail the latest Cypht release.</p>
        </div>
    </div>

    <div id="from_dashboard" class="doc-section">
        <div class="doc-section-header">
            <a href="#from_dashboard">Install from the dashboard</a>
        </div>
        <ol>
            <li>No server yet? Start with the <a href="https://yunohost.org/install" target="_blank" rel="noopener">YunoHost install guide</a>.</li>
            <li>From the admin dashboard, open <strong>Applications</strong>.</li>
            <li>Click <strong>Install</strong> and search for <strong>cypht</strong>.</li>
            <li>Select the Cypht app.</li>
            <li>Fill the form, or keep the defaults, and make sure the chosen URL is not already used by another app.</li>
            <li>Wait for the installation to finish, then use <strong>open the app</strong>.</li>
            <li>Log in with the credentials you provided during the installation and start declaring your email accounts.</li>
        </ol>
    </div>

    <div id="from_cli" class="doc-section">
        <div class="doc-section-header">
            <a href="#from_cli">Install from the command line</a>
        </div>
        <span class="doc-section-text">The same installation can be done over SSH:</span>
        <div class="code-preview-content gc-terminal">
<pre><code class="language-bash">sudo yunohost app install cypht</code></pre>
        </div>
        <span class="doc-section-text">
            The catalogue page lists the packaged version and its maintenance status:
            <a href="https://apps.yunohost.org/app/cypht" target="_blank" rel="noopener">apps.yunohost.org/app/cypht</a>.
        </span>
    </div>

    <div id="good_to_know" class="doc-section">
        <div class="doc-section-header">
            <a href="#good_to_know">Good to know</a>
        </div>
        <ul>
            <li>Cypht does not replace your YunoHost mailboxes: it reads them over IMAP and can add external accounts next to them.</li>
            <li>Since the package is community maintained, report installation problems to the package repository and Cypht bugs to the <a href="https://github.com/cypht-org/cypht/issues" target="_blank" rel="noopener">Cypht issue tracker</a>.</li>
            <li>A step-by-step version of this procedure is also available in the <a href="/install">installation guide</a>.</li>
        </ul>
    </div>

    <nav-pagination
        prev-label="Cloudron"
        prev-url="/integration/cloudron">
    </nav-pagination>

</div>

<div class="doc-content-right d-none d-xl-flex col-xl-2">
    <div class="dc-ctr-content">
        <div class="dc-ctr-header">
            <p class="dc-ctr-header-title">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h12M4 12h16M4 19h8" color="currentColor"/></svg>
                On this page
            </p>
        </div>
        <nav>
            <ul id="dc-ctr-nav">
                <li><a href="#overview" class="active">Overview</a></li>
                <li><a href="#from_dashboard">From the dashboard</a></li>
                <li><a href="#from_cli">From the CLI</a></li>
                <li><a href="#good_to_know">Good to know</a></li>
            </ul>
        </nav>
    </div>
</div>
