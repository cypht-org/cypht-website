---
id: 0
title: Cypht in Tiki
description: "Cypht has been the webmail of Tiki Wiki CMS Groupware since Tiki 20. Use it as the Webmail screen or embed it in a wiki page with PluginCypht."
layout: section/integration
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>Cypht in Tiki</h3>
    </div>

    <div id="overview" class="doc-section">
        <div class="doc-section-header">
            <a href="#overview">Overview</a>
        </div>
        <span class="doc-section-text">
            <a href="https://tiki.org" target="_blank" rel="noopener">Tiki Wiki CMS Groupware</a> is an all-in-one
            web application: wiki, CMS, trackers (its database engine), calendars, forums and file galleries in a
            single codebase. Starting with Tiki 20, Cypht replaced the webmail Tiki had carried for more than ten
            years, and it has been the webmail of Tiki ever since.
        </span>
        <p class="doc-section-text">
            Because Cypht runs inside Tiki, mail stops being a silo: a message can be moved in and out of trackers,
            and it lives next to the documents, contacts and calendars of the same site. Cypht keeps doing what it
            does best, aggregating mail accounts, while Tiki adds the groupware layer around it.
        </p>

        <div class="integration-note">
            <i class="bi bi-box-seam" aria-hidden="true"></i>
            <p><strong>No separate installation.</strong> Cypht is a Composer dependency of Tiki, so it comes with the Tiki installation you already run.</p>
        </div>

        <div class="feature-card doc-img-card">
            <h6><i class="bi bi-window"></i> Tiki Webmail</h6>
            <img
                src="/img/integration/tiki-webmail.webp"
                alt="Cypht running as Tiki Webmail, showing the email folders of the home page"
                width="1893"
                height="1030"
                loading="lazy"
                decoding="async"/>
            <p>The webmail screen served by a Tiki site, with the mail folders of every configured account in the left column.</p>
        </div>
    </div>

    <div id="how_to_use_it" class="doc-section">
        <div class="doc-section-header">
            <a href="#how_to_use_it">How to use it</a>
        </div>
        <span class="doc-section-text">
            Tiki exposes Cypht in two different ways, which can be combined on the same site:
        </span>
        <ul>
            <li>
                <strong>Webmail</strong>: the standard webmail screen, where users read and send their mail.
                See <a href="https://doc.tiki.org/Webmail" target="_blank" rel="noopener">doc.tiki.org/Webmail</a>.
            </li>
            <li>
                <strong>PluginCypht</strong>: embeds the webmail inside a wiki page, next to other content.
                See <a href="https://doc.tiki.org/PluginCypht" target="_blank" rel="noopener">doc.tiki.org/PluginCypht</a>.
            </li>
        </ul>
        <span class="doc-section-text">
            The feature has to be enabled in the Tiki administration first, and each user then declares their own
            accounts. The procedure depends on the Tiki version, so follow the Tiki documentation.
        </span>
    </div>

    <div id="learn_more" class="doc-section">
        <div class="doc-section-header">
            <a href="#learn_more">Learn more</a>
        </div>
        <span class="doc-section-text">
            Everything about the integration, from the features Tiki adds on top of the webmail to the version by
            version history, is documented by the Tiki project itself. Start at
            <a href="https://doc.tiki.org/Cypht" target="_blank" rel="noopener">doc.tiki.org/Cypht</a>.
        </span>
        <span class="doc-section-text">
            Developers working on the integration will find the notes and the roadmap on
            <a href="https://dev.tiki.org/Cypht-integration" target="_blank" rel="noopener">dev.tiki.org/Cypht-integration</a>.
        </span>
    </div>

    <nav-pagination
        next-label="Cloudron"
        next-url="/integration/cloudron">
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
                <li><a href="#how_to_use_it">How to use it</a></li>
                <li><a href="#learn_more">Learn more</a></li>
            </ul>
        </nav>
    </div>
</div>
