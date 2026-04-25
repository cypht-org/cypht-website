---
id: 8
title: Screen Emails
layout: section/documentation
---

<div class="doc-content-left col mx-xl-3">
    <div id="overview" class="doc-page-header">
        <h3>Screen Emails</h3>
    </div>

    <div class="doc-section">
        <div class="doc-section-header">
            <a href="#overview">Overview</a>
        </div>
        <span class="doc-section-text">
           This feature allows you to filter emails in your inbox in a semi-automatic way. It enables you to perform two main actions:
        </span>
    </div>

    <div id="dislike" class="doc-section">
        <div class="doc-section-header">
            <a href="#dislike">Dislike an Email</a>
        </div>
        <span class="doc-section-text">
           This action moves the selected emails to a dedicated folder named “Screen Emails” (default label). As a side effect, the senders of those emails are automatically added to the Block List, which is managed by <a href="/documentation/search-filters" class="text-link">Filters</a>.
        </span>

        <div class="tip-card tip-info">
            <span class="tip-info-text"><i class="bi bi-info-circle"></i> Note</span>
            <p>This action affects all emails from the selected sender and will result in all existing emails from that sender being moved to the screening folder.</p>
        </div>
    </div>

    <div id="like" class="doc-section">
        <div class="doc-section-header">
            <a href="#like">Like an Email</a>
        </div>
        <span class="doc-section-text">
           Liking an email places the sender on the White List, which removes them from the Block List if they were previously listed there.
        </span>
    </div>

    <div id="proceeding" class="doc-section">
        <div class="doc-section-header">
            <a href="#proceeding">How to Proceed</a>
        </div>

        To screen emails:
        <ol>
            <li>Go to the Inbox folder of any mailbox.</li>
            <li>Click the “Screen” button.</li>

            <br/>
            <img src="/img/screen_button.png" alt="Screen button location in the inbox toolbar" width="2764" height="1674" loading="lazy" decoding="async" /> <br/><br/>

            <li>Select one or more emails, then choose an action (Like or Dislike).</li>

            <br/>
            <img src="/img/selecting_emails_to_screen.png" alt="Selecting emails to screen with Like or Dislike action" width="2770" height="1664" loading="lazy" decoding="async" /> <br/><br/>
        </ol>
    </div>

    <div id="result" class="doc-section">
        <div class="doc-section-header">
            <a href="#result">Behavior</a>
        </div>

        <ul>
            <li><strong>Liked emails</strong> remain in the inbox, and their senders are white-listed.</li>
            <li><strong>Disliked emails</strong> are moved to the “Screen Emails” folder, where you can decide what to do next (e.g., delete, mark as spam, archive, flag, etc.).</li>
        </ul>

        <div class="tip-card tip-info">
            <span class="tip-info-text"><i class="bi bi-info-circle"></i> Note</span>
            <p>You do not need to manually create the “Screen Emails” folder. It will be automatically created the first time you dislike emails in a mailbox.</p>
        </div>
    </div>

    <nav-pagination
        prev-label="Sieve Filters"
        prev-url="/documentation/sieve-filters"
        next-label="Tags & Folders"
        next-url="/documentation/tags">
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
                <li><a href="#overview">Overview</a></li>
                <li><a href="#dislike">Dislike an Email</a></li>
                <li><a href="#like">Like an Email</a></li>
                <li><a href="#proceeding">How to Proceed</a></li>
                <li><a href="#result">Behavior</a></li>
            </ul>
        </nav>
    </div>
</div>
