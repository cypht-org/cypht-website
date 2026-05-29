---
id: 1
title: Version
description: "Cypht release notes and version history. Review changelogs, new features, bug fixes, and breaking changes for each Cypht release with our versioning policy."
layout: section/documentation
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>Release Notes</h3>
    </div>

    <div id="versioning_policy" class="doc-section">
        <div class="doc-section-header">
            <a href="#versioning_policy">Versioning Policy & Support</a>
        </div>
        <span class="doc-section-text">
            Cypht is a lightweight Open Source webmail aggregator, written in PHP and JavaScript. It supports IMAP/SMTP, JMAP and EWS, allowing you to centralize multiple email accounts in a single modern and modular interface.
        </span>

        <ul>
            <li><strong>Versioning:</strong> Semantic versioning approach <a target="_blank" href="https://semver.org/" class=
            "text-link">learn more</a>.</li>
            <li><strong>Stability:</strong> 1.4.x branch recommended for critical environments.</li>
            <li><strong>Evolution:</strong> 2.x branch introduces EWS, Sieve filters, smooth navigation.</li>
        </ul>
    </div>

    <div id="recent_versions" class="doc-section">
        <div class="doc-section-header">
            <a href="#recent_versions">Recent Versions</a>
        </div>
        <span class="doc-section-text">
            Below is a comprehensive overview of recent Cypht releases with their key features and improvements.
        </span>

        <div class="version-card">
            <div class="doc-subsection-header">
                <a href="#v2.9.0"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg> v2.9.0 (May 2025)</a>
            </div>
            <ul>
                <li><strong>New features:</strong> scheduled messages view, brute force login lockout, MTA-STS/TLS-RPT support, contacts page redesign, flagged message search across folders, auto BCC exclusion option.</li>
                <li><strong>Bug fixes:</strong> EWS folder manipulation, SCRAM authentication, SPA navigation inline message clicks, advanced search mobile CSS, message read-on-open setting, mailbox cache clearing.</li>
                <li><strong>Improvements:</strong> php-ews upgraded to >=0.11.2, Sieve filter unit tests, PHP 7.x deprecation removals.</li>
            </ul>
        </div>

        <div class="version-card">
            <div class="doc-subsection-header">
                <a href="#v2.6.0"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg> v2.6.0 (November 2025)</a>
            </div>
            <ul>
                <li><strong>New features:</strong> scheduled messages view, brute force login lockout, MTA-STS/TLS-RPT support, contacts page redesign, flagged message search across folders, auto BCC exclusion option.</li>
                <li><strong>Bug fixes:</strong> EWS folder manipulation, SCRAM authentication, SPA navigation inline message clicks, advanced search mobile CSS, message read-on-open setting, mailbox cache clearing.</li>
                <li><strong>Improvements:</strong> php-ews upgraded to >=0.11.2, Sieve filter unit tests, PHP 7.x deprecation removals.</li>
            </ul>
        </div>

        <div class="version-card">
            <div class="doc-subsection-header">
                <a href="#v2.5.0"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg>v2.5.0 – v2.5.1 (October–November 2024)</a>
            </div>
            <ul>
                <li><strong>v2.5.0:</strong> EWS support, browser history API navigation (no page reloads), sidebar redesign, scheduled send, snooze feature, BEC detection, concurrent message loading, drag-and-drop on touchscreens, settings search.</li>
                <li><strong>v2.5.1:</strong> fix on site.js generation comments.</li>
            </ul>
        </div>

        <div class="version-card">
            <div class="doc-subsection-header">
                <a href="#v2.4.0"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg>v2.4.0 – v2.4.2 (September 2023 – May 2025)</a>
            </div>
            <ul>
                <li><strong>v2.4.0:</strong> bulk CSV account import, multibyte character fixes, IMAP quota handling, searchbar/form UI corrections, Docker config updates.</li>
                <li><strong>v2.4.2:</strong> HTML sanitizer for external background images, security fixes for request parameters.</li>
            </ul>
        </div>

        <div class="version-card">
            <div class="doc-subsection-header">
                <a href="#v2.3.0"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg>v2.3.0 (August 2022)</a>
            </div>
            <ul>
                <li><strong>New features:</strong> email screening, reply-to-new-contact warning, Autocrypt auto-encryption.</li>
                <li><strong>Bug fixes:</strong> email display security, database connection errors, profiles page, Selenium tests.</li>
                <li><strong>Improvements:</strong> Sieve filter rules handling, Bootstrap icons in Docker, php-sieve-manager update.</li>
            </ul>
        </div>

        <div class="version-card">
            <div class="doc-subsection-header">
                <a href="#v2.2.0"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg>v2.2.0 (August 2024)</a>
            </div>
            <ul>
                <li><strong>New features:</strong> GitHub repo querying, IMAP quota display, forward-as-attachment, zh-TW translations, labels/tags, server capabilities display, custom headers support.</li>
                <li><strong>Bug fixes:</strong> contact autocomplete, special folders save, Sieve filter mailbox listing, IMAP TLS/STARTTLS, cookie SameSite settings, profile duplication.</li>
                <li><strong>Improvements:</strong> Unicode/multibyte support, PHP 8.2+ compatibility, reply-all recipient management, 2.x branch stabilization.</li>
            </ul>
        </div>

        <div class="version-card">
            <div class="doc-subsection-header">
                <a href="#v1.4.x"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022z" clip-rule="evenodd"/></svg>1.4.x Branch (2024–2025)</a>
            </div>
            <ul>
                <li><strong>v1.4.7:</strong> Fastmail SMTP/IMAP fix, DKIM body hash fix, local message storage, reply-all sender dedup, DNS prefetch tag stripping.</li>
                <li><strong>v1.4.6:</strong> README cleanup, php-sieve-manager 1.0.9 update, DNS prefetch privacy fix.</li>
                <li><strong>v1.4.5:</strong> keyboard shortcuts restored, IMAP error messages improved, attachment forwarding fix, composer dependencies updated.</li>
            </ul>
        </div>
    </div>

    <div id="version_comparison" class="doc-section">
        <div class="doc-section-header">
            <a href="#version_comparison">Version Comparison</a>
        </div>
        <span class="doc-section-text">
            Compare different Cypht versions to choose the right one for your needs.
        </span>

        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Version</th>
                        <th>PHP *</th>
                        <th>Release Date</th>
                        <th>Key Features</th>
                        <th>Stability</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>v2.9.0</strong></td>
                        <td>PHP 8.0+</td>
                        <td>May 2025</td>
                        <td>Scheduled messages, brute force lockout, MTA-STS/TLS-RPT, contacts redesign</td>
                        <td><span class="badge bg-success">Stable</span></td>
                    </tr>
                    <tr>
                        <td><strong>v2.5.0</strong></td>
                        <td>PHP 8.0+</td>
                        <td>October 2024</td>
                        <td>EWS support, SPA navigation, sidebar redesign, scheduled send, BEC detection</td>
                        <td><span class="badge bg-success">Stable</span></td>
                    </tr>
                    <tr>
                        <td><strong>v2.4.0</strong></td>
                        <td>PHP 7.4+</td>
                        <td>September 2023</td>
                        <td>Bulk CSV import, multibyte fixes, Docker config updates</td>
                        <td><span class="badge bg-success">Stable</span></td>
                    </tr>
                    <tr>
                        <td><strong>v2.3.0</strong></td>
                        <td>PHP 7.4+</td>
                        <td>August 2022</td>
                        <td>Email screening, Autocrypt, reply-to-new-contact warning, Sieve filter improvements</td>
                        <td><span class="badge bg-success">Stable</span></td>
                    </tr>
                    <tr>
                        <td><strong>v2.2.0</strong></td>
                        <td>PHP 7.4+</td>
                        <td>August 2024</td>
                        <td>GitHub repo querying, IMAP quota display, forward-as-attachment, labels/tags, zh-TW translations</td>
                        <td><span class="badge bg-success">Stable</span></td>
                    </tr>
                    <tr>
                        <td><strong>v1.4.7</strong></td>
                        <td>PHP 7.2+</td>
                        <td>November 2024</td>
                        <td>Fastmail SMTP/IMAP fix, DKIM validation fix, local message storage, reply-all dedup</td>
                        <td><span class="badge bg-warning">Legacy</span></td>
                    </tr>
                    <tr>
                        <td><strong>v1.4.6</strong></td>
                        <td>PHP 7.2+</td>
                        <td>May 2024</td>
                        <td>README cleanup, php-sieve-manager 1.0.9, DNS prefetch privacy fix</td>
                        <td><span class="badge bg-warning">Legacy</span></td>
                    </tr>
                    <tr>
                        <td><strong>v1.4.5</strong></td>
                        <td>PHP 7.2+</td>
                        <td>December 2023</td>
                        <td>Keyboard shortcuts restored, IMAP error messages, attachment forwarding fix</td>
                        <td><span class="badge bg-warning">Legacy</span></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="tip-card tip-warning mt-4">
            <span class="tip-warning-text"><i class="bi bi-info-circle"></i> Choosing the Right Version</span>
            <ul class="mb-0">
                <li><strong>Production environments :</strong> Use 1.4.x branch for maximum stability</li>
                <li><strong>New features :</strong> Use 2.x branch for latest features and improvements</li>
                <li><strong>PHP compatibility :</strong> Ensure your PHP version meets the requirements</li>
                <li><strong>Security updates :</strong> Always use the latest version in your chosen branch</li>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h12M4 12h16M4 19h8" color="currentColor"/></svg>
                On this page
            </p>
        </div>
        <nav>
            <ul id="dc-ctr-nav">
            <li><a href="#versioning_policy" class="active">Versioning Policy</a></li>
            <li><a href="#recent_versions">Recent Versions</a></li>
            <li><a href="#version_comparison">Version Comparison</a></li>
            </ul>
        </nav>
    </div>
</div>
