---
id: 1
title: Version
description: "Cypht release notes, versioning policy and lifecycle. The 2.x branch is the current, supported branch; 1.4.x is End of Life. See highlights here and the full changelog on GitHub."
layout: section/documentation
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>Release Notes</h3>
    </div>

    <div id="versioning_policy" class="doc-section">
        <div class="doc-section-header">
            <a href="#versioning_policy">Versioning & Lifecycle</a>
        </div>
        <span class="doc-section-text">
            Cypht is a lightweight Open Source webmail aggregator, written in PHP and JavaScript. It supports IMAP/SMTP, JMAP and EWS, allowing you to centralize multiple email accounts in a single modern and modular interface.
        </span>

        <ul>
            <li><strong>Versioning:</strong> Cypht follows a semantic versioning approach <a target="_blank" href="https://semver.org/" class="text-link">learn more</a>.</li>
            <li><strong>2.x - current branch:</strong> actively maintained and <strong>recommended for all installations</strong>, new and existing. It brings EWS, Sieve filters, SPA navigation and ongoing security updates. Requires PHP 8.0+.</li>
            <li><strong>1.4.x - End of Life:</strong> no longer maintained; it receives no further releases or security fixes (last supported on PHP 7.2+). See the <a target="_blank" href="https://github.com/cypht-org/cypht/wiki/Lifecycle" class="text-link">lifecycle policy</a>.</li>
        </ul>

        <div class="tip-card tip-warning mt-4">
            <span class="tip-warning-text"><i class="bi bi-info-circle"></i> Which version should I use?</span>
            <ul class="mb-0">
                <li><strong>Always use the 2.x branch.</strong> It is the only supported branch and the only one receiving security updates.</li>
                <li><strong>Still on 1.4.x?</strong> Plan an upgrade to 2.x - 1.4.x is End of Life and unsupported.</li>
                <li><strong>Stay current:</strong> always run the latest release within the 2.x branch.</li>
            </ul>
        </div>
    </div>

    <div id="recent_versions" class="doc-section">
        <div class="doc-section-header">
            <a href="#recent_versions">Release Highlights</a>
        </div>
        <span class="doc-section-text">
            Highlights from recent Cypht 2.x releases. For the complete, always up-to-date changelog, see the <a target="_blank" href="https://github.com/cypht-org/cypht/releases" class="text-link">releases on GitHub</a>.
        </span>

        <div id="v2.9.0" class="version-card">
            <div class="doc-subsection-header">
                <a href="#v2.9.0"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg> v2.9.0 - latest stable (May 2025)</a>
            </div>
            <ul>
                <li><strong>New features:</strong> scheduled messages view, brute force login lockout, MTA-STS/TLS-RPT support, contacts page redesign, flagged message search across folders, auto BCC exclusion option.</li>
                <li><strong>Bug fixes:</strong> EWS folder manipulation, SCRAM authentication, SPA navigation inline message clicks, advanced search mobile CSS, message read-on-open setting, mailbox cache clearing.</li>
                <li><strong>Improvements:</strong> php-ews upgraded to >=0.11.2, Sieve filter unit tests, PHP 7.x deprecation removals.</li>
            </ul>
        </div>

        <div id="v2.5.0" class="version-card">
            <div class="doc-subsection-header">
                <a href="#v2.5.0"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg> v2.5.0 - v2.5.1 (October-November 2024)</a>
            </div>
            <ul>
                <li><strong>v2.5.0:</strong> EWS support, browser history API navigation (no page reloads), sidebar redesign, scheduled send, snooze feature, BEC detection, concurrent message loading, drag-and-drop on touchscreens, settings search.</li>
                <li><strong>v2.5.1:</strong> fix on site.js generation comments.</li>
            </ul>
        </div>

        <div id="v2.4.0" class="version-card">
            <div class="doc-subsection-header">
                <a href="#v2.4.0"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg> v2.4.0 - v2.4.2 (2023-2024)</a>
            </div>
            <ul>
                <li><strong>v2.4.0:</strong> bulk CSV account import, multibyte character fixes, IMAP quota handling, searchbar/form UI corrections, Docker config updates.</li>
                <li><strong>v2.4.2:</strong> HTML sanitizer for external background images, security fixes for request parameters.</li>
            </ul>
        </div>

        <div id="v2.3.0" class="version-card">
            <div class="doc-subsection-header">
                <a href="#v2.3.0"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg> v2.3.0 (August 2022)</a>
            </div>
            <ul>
                <li><strong>New features:</strong> email screening, reply-to-new-contact warning, Autocrypt auto-encryption.</li>
                <li><strong>Bug fixes:</strong> email display security, database connection errors, profiles page, Selenium tests.</li>
                <li><strong>Improvements:</strong> Sieve filter rules handling, Bootstrap icons in Docker, php-sieve-manager update.</li>
            </ul>
        </div>

        <div id="v2.2.0" class="version-card">
            <div class="doc-subsection-header">
                <a href="#v2.2.0"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg> v2.2.0 (2024)</a>
            </div>
            <ul>
                <li><strong>New features:</strong> GitHub repo querying, IMAP quota display, forward-as-attachment, zh-TW translations, labels/tags, server capabilities display, custom headers support.</li>
                <li><strong>Bug fixes:</strong> contact autocomplete, special folders save, Sieve filter mailbox listing, IMAP TLS/STARTTLS, cookie SameSite settings, profile duplication.</li>
                <li><strong>Improvements:</strong> Unicode/multibyte support, PHP 8.2+ compatibility, reply-all recipient management, 2.x branch stabilization.</li>
            </ul>
        </div>

        <div id="v1.4.x" class="version-card">
            <div class="doc-subsection-header">
                <a href="#v1.4.x"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg> 1.4.x Branch - End of Life</a>
            </div>
            <ul>
                <li>The 1.4.x branch has reached <strong>End of Life</strong>: it is no longer maintained and will not receive new features or security fixes.</li>
                <li>If you are still running 1.4.x, upgrade to the 2.x branch. See the <a target="_blank" href="https://github.com/cypht-org/cypht/wiki/Lifecycle" class="text-link">lifecycle policy</a> and the <a target="_blank" href="https://github.com/cypht-org/cypht/releases" class="text-link">1.4.x release history</a> on GitHub.</li>
            </ul>
        </div>
    </div>

    <nav-pagination
        prev-label="Introduction"
        prev-url="/documentation/introduction"
        next-label="Getting Started"
        next-url="/documentation/getting-started">
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
            <li><a href="#versioning_policy" class="active">Versioning & Lifecycle</a></li>
            <li><a href="#recent_versions">Release Highlights</a></li>
            </ul>
        </nav>
    </div>
</div>
