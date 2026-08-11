---
id: 1
title: Cypht on Cloudron
description: "Install Cypht on Cloudron from the community app store: add the repository URL, install the app and sign in with your existing Cloudron mailbox credentials."
layout: section/integration
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>Cypht on Cloudron</h3>
    </div>

    <div id="overview" class="doc-section">
        <div class="doc-section-header">
            <a href="#overview">Overview</a>
        </div>
        <span class="doc-section-text">
            <a href="https://cloudron.io" target="_blank" rel="noopener">Cloudron</a> turns a server into an app
            store: it handles TLS certificates, backups, updates, user accounts and email for the apps it runs. Since
            Cloudron already provides mailboxes, adding Cypht gives those mailboxes a webmail that can also aggregate
            external accounts and feeds.
        </span>
        <p class="doc-section-text">
            Cypht is not in the official Cloudron catalogue. It is published as a <strong>community app</strong>
            (package id <code>eu.9wd.cypht</code>) by Felix Bartels, whose packaging sources are at
            <a href="https://git.9wd.eu/apps/cloudron-cypht" target="_blank" rel="noopener">git.9wd.eu/apps/cloudron-cypht</a>.
            You add the repository once, then install and update Cypht like any other Cloudron app.
        </p>

        <div class="integration-note">
            <i class="bi bi-people" aria-hidden="true"></i>
            <p><strong>Community maintained.</strong> Packaging issues go to the package maintainer; problems in Cypht itself belong on the <a href="https://github.com/cypht-org/cypht/issues" target="_blank" rel="noopener">Cypht issue tracker</a>.</p>
        </div>
    </div>

    <div id="install_it" class="doc-section">
        <div class="doc-section-header">
            <a href="#install_it">Install it</a>
        </div>
        <ol>
            <li>Open your Cloudron dashboard and go to the <strong>App Store</strong>.</li>
            <li>
                Select <strong>Community apps</strong> and add this repository URL:
                <div class="code-preview-content gc-terminal">
<pre><code class="language-text">https://git.9wd.eu/apps/cloudron-cypht/raw/branch/release/CloudronVersions.json</code></pre>
                </div>
            </li>
            <li>Pick <strong>Cypht</strong> in the list and install it on the domain of your choice.</li>
            <li>Open the app from the dashboard once the installation finishes.</li>
        </ol>
        <span class="doc-section-text">
            The app listing, with its changelog, is at
            <a href="https://ca.cloudron.io/app/cypht" target="_blank" rel="noopener">ca.cloudron.io/app/cypht</a>.
            Plan for around 512 MB of memory for the app.
        </span>
    </div>

    <div id="sign_in" class="doc-section">
        <div class="doc-section-header">
            <a href="#sign_in">Sign in</a>
        </div>
        <span class="doc-section-text">
            The package authenticates against Cloudron's email addon, so there is no IMAP host to type in: log in with
            your existing Cloudron email address and its password.
        </span>
        <span class="doc-section-text">
            Once inside, you can add any number of additional IMAP, SMTP or RSS/Atom sources from Cypht itself,
            exactly as in a standalone installation.
        </span>
    </div>

    <div id="good_to_know" class="doc-section">
        <div class="doc-section-header">
            <a href="#good_to_know">Good to know</a>
        </div>
        <span class="doc-section-text">
            Cypht prioritises security over out-of-the-box convenience: remote images are blocked by default, for
            instance. That is intentional, and the behaviour can be relaxed in the settings.
        </span>
        <span class="doc-section-text">
            The packaging history and troubleshooting reports live in the
            <a href="https://forum.cloudron.io/topic/1070/cypht-lightweight-open-source-webmail-application-written-in-php-and-javascript" target="_blank" rel="noopener">Cloudron forum thread</a>.
        </span>
    </div>

    <nav-pagination
        prev-label="Tiki"
        prev-url="/integration/tiki"
        next-label="YunoHost"
        next-url="/integration/yunohost">
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
                <li><a href="#install_it">Install it</a></li>
                <li><a href="#sign_in">Sign in</a></li>
                <li><a href="#good_to_know">Good to know</a></li>
            </ul>
        </nav>
    </div>
</div>
