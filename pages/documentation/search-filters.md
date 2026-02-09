---
id: 7
title: Search & Filters
layout: section/documentation
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>Search & Filters</h3>
    </div>

    <div id="overview" class="doc-section">
        <div class="doc-section-header">
            <a href="#overview">Search & Filter Capabilities</a>
        </div>
        <span class="doc-section-text">
            Cypht provides search and filtering functionality to help you find and organize emails across your accounts.
        </span>

        <div class="feature-card text-center">
            <h6><i class="bi bi-search"></i> Search Across Accounts</h6>
            <p>Search all your email accounts and RSS feeds with simple forms or advanced search modules</p>
        </div>
    </div>

    <div id="unified_search" class="doc-section">
        <div class="doc-section-header">
            <a href="#unified_search">Unified Search</a>
        </div>
        <span class="doc-section-text">
            Search across all your configured email accounts and RSS feeds simultaneously.
        </span>

        <div class="doc-subsection-header">
            <a href="#simple_search">Simple Search Form</a>
        </div>
        <div class="feature-card">
            <h6><i class="bi bi-search"></i> Search All Accounts</h6>
            <p>Search all your E-mail accounts and RSS feeds at once with a simple form.</p>
        </div>

        <div class="doc-subsection-header">
            <a href="#advanced_search">Advanced Search Module</a>
        </div>
        <div class="feature-card">
            <h6><i class="bi bi-gear"></i> Complex Searches</h6>
            <p>Do complex searches across your accounts with the advanced search module set.</p>
        </div>
    </div>

    <div id="saved_searches" class="doc-section">
        <div class="doc-section-header">
            <a href="#saved_searches">Saved Search Parameters</a>
        </div>
        <span class="doc-section-text">
            Save frequently used search parameters for quick access later.
        </span>

        <div class="feature-card">
            <h6><i class="bi bi-bookmark"></i> Save and Access Searches</h6>
            <p>Save the parameters of a search so that you can quickly access them later from the menu without having to enter them again. This is particularly useful for parameters of searches that are used frequently. Saved search parameters can also be deleted later.</p>
        </div>
    </div>

    <div id="sieve_filters" class="doc-section">
        <div class="doc-section-header">
            <a href="#sieve_filters">Sieve Filters</a>
        </div>
        <span class="doc-section-text">
            Server-side email filtering to automatically organize your inbox.
        </span>

        <div class="feature-card">
            <h6><i class="bi bi-funnel-fill"></i> Automatic Email Organization</h6>
            <p>Sieve filters can be set up to automatically move, copy, or delete messages based on specific criteria such as sender, subject, keywords, or recipient. This allows for efficient organization and management of incoming emails, saving time and improving productivity.</p>
        </div>

        <div class="doc-subsection-header">
            <a href="#sieve_setup">Setting Up Sieve Filters</a>
        </div>
        <div class="feature-card">
            <h6><i class="bi bi-gear"></i> Add Filter Process</h6>
            <p>To add a Sieve filter, navigate to the Sieve Filters menu located in the Settings tab sidebar, select the email account for which you want to create a filter, and click the "Add Filter" button.</p>
        </div>

        <div class="feature-card mt-3">
            <h6><i class="bi bi-pencil-square"></i> Filter Management</h6>
            <p>Sieve filters can be easily edited or deleted as needed. For more information on how to create and manage Sieve filters, see the Email filters documentation.</p>
            <a href="https://www.cypht.org/email-filters" target="_blank" class="btn btn-outline-primary">Email Filters Guide</a>
        </div>
    </div>

    <div id="block_list" class="doc-section">
        <div class="doc-section-header">
            <a href="#block_list">Block List</a>
        </div>
        <span class="doc-section-text">
            Block specific email addresses or domains from sending emails to your inbox.
        </span>

        <div class="feature-card">
            <h6><i class="bi bi-lock"></i> Block Senders</h6>
            <p>The Block List feature allows users to block specific email addresses or domains from sending emails to your inbox. To block a sender in Cypht Webmail, open the email, click the BLOCK SENDER button (lock icon), and choose whether to block This Sender or the Whole Domain.</p>
        </div>

        <div class="doc-subsection-header">
            <a href="#block_actions">Block Actions</a>
        </div>
        <div class="feature-card">
            <h6><i class="bi bi-gear"></i> Available Actions</h6>
            <p>Select an action: Default Action, Discard, Move to Blocked Folder, Reject with Default Message, or Reject with Specific Message, and confirm by clicking BLOCK.</p>
        </div>

        <div class="tip-card tip-info">
            <span class="tip-info-text"><i class="bi bi-info-circle"></i> Requirement</span>
            <p class="mb-0">Make sure Sieve filters are enabled in your Cypht settings for this feature to work.</p>
        </div>

        <div class="doc-subsection-header">
            <a href="#manage_blocked">Managing Blocked Senders</a>
        </div>
        <div class="feature-card">
            <h6><i class="bi bi-list"></i> Block List Management</h6>
            <p>You can manage blocked senders later under Settings > Block List.</p>
        </div>
    </div>

    <nav-pagination
        prev-label="Compose Email"
        prev-url="/documentation/compose-email"
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
                <li><a href="#overview" class="active">Overview</a></li>
                <li><a href="#unified_search">Unified Search</a></li>
                <li><a href="#saved_searches">Saved Searches</a></li>
                <li><a href="#sieve_filters">Sieve Filters</a></li>
                <li><a href="#block_list">Block List</a></li>
            </ul>
        </nav>
    </div>
</div>
