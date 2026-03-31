---
id: 18
title: Sieve Filters
layout: section/documentation
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>Sieve Filters</h3>
    </div>

    <!-- ======================================== -->
    <!-- 1. Introduction                          -->
    <!-- ======================================== -->

    <div id="introduction" class="doc-section">
        <div class="doc-section-header">
            <a href="#introduction">What Are Sieve Filters?</a>
        </div>
        <span class="doc-section-text">
            Sieve is a server-side mail filtering language supported by many IMAP servers. In Cypht, Sieve filters let you define rules that <strong>run automatically on every new message as it arrives</strong>, as long as the filter is active.
        </span>
        <span class="doc-section-text">
            Because the rules execute on the mail server itself, they work even when you are not logged into Cypht. Messages are sorted, flagged, forwarded, or discarded before they ever appear in your inbox view.
        </span>

        <div class="doc-grid-content">
            <div>
                <div class="feature-card h-100">
                    <h6><i class="bi bi-lightning-charge"></i> Automatic</h6>
                    <p class="mb-0">Active filters process every incoming message without manual intervention.</p>
                </div>
            </div>
            <div>
                <div class="feature-card h-100">
                    <h6><i class="bi bi-cloud-check"></i> Server-side</h6>
                    <p class="mb-0">Rules run on the mail server, so they work even when Cypht is closed or your device is off.</p>
                </div>
            </div>
            <div>
                <div class="feature-card h-100">
                    <h6><i class="bi bi-sliders"></i> Flexible</h6>
                    <p class="mb-0">Move, copy, flag, discard, redirect, or run custom Sieve scripts on matching messages.</p>
                </div>
            </div>
        </div>

        <div class="tip-card tip-warning mt-3">
            <span class="tip-warning-text"><i class="bi bi-exclamation-triangle"></i> Requirement</span>
            <p class="mb-0">Your mail server must support Sieve or ManageSieve. IMAP support alone is not enough — some providers do not expose Sieve management even though they support reading mail over IMAP.</p>
        </div>
    </div>

    <!-- ======================================== -->
    <!-- 2. Enable the module                     -->
    <!-- ======================================== -->

    <div id="enable_module" class="doc-section">
        <div class="doc-section-header">
            <a href="#enable_module">Step 1 — Enable the Sieve Filters Module</a>
        </div>
        <span class="doc-section-text">
            Before you can create any filter, the <strong>sievefilters</strong> module must be activated in your Cypht configuration. If the Sieve Filters section is already visible under Settings, you can skip this step.
        </span>

        <div class="doc-subsection-header">
            <a href="#cypht_2">Cypht 2.x (.env file)</a>
        </div>
        <span class="doc-section-text">Add <code>sievefilters</code> to the <code>CYPHT_MODULES</code> variable:</span>
        <pre><code class="language-bash">CYPHT_MODULES="core,imap,smtp,sievefilters"</code></pre>

        <div class="doc-subsection-header">
            <a href="#cypht_1">Cypht 1.4.x (hm3.ini file)</a>
        </div>
        <span class="doc-section-text">Add a new module entry:</span>
        <pre><code class="language-ini">modules[]=sievefilters</code></pre>

        <span class="doc-section-text">
            After saving the configuration, reload or redeploy your Cypht instance. The <strong>Filters</strong> menu will then appear under the Settings tab.
        </span>

        <br/>
        <img src="/img/docs/sieve_filters_0.png" alt="Settings sidebar showing the Filters menu item" loading="lazy" decoding="async" /> <br/><br/>
    </div>

    <!-- ======================================== -->
    <!-- 3. Create from the Sieve Filters page    -->
    <!-- ======================================== -->

    <div id="create_from_settings" class="doc-section">
        <div class="doc-section-header">
            <a href="#create_from_settings">Step 2 — Create from the Sieve Filters Page</a>
        </div>
        <span class="doc-section-text">
            The most direct way to manage filters is through the dedicated Sieve Filters page in Settings.
        </span>

        <div class="doc-subsection-header">
            <a href="#add_filter">Add a Filter</a>
        </div>
        <ol>
            <li>Open <strong>Settings</strong> in the sidebar.</li>
            <li>Click <strong>Filters</strong>.</li>

            <br/>
            <img src="/img/docs/sieve_filters_1.png" alt="Filters page showing the selected email account" loading="lazy" decoding="async" /> <br/><br/>

            <li>Select the email account you want to manage.</li>
            <li>Click <strong>Add Filter</strong>.</li>

            <br/>
            <img src="/img/docs/sieve_filters_2.png" alt="Filter list with Add Filter and Add Script buttons" loading="lazy" decoding="async" /> <br/><br/>
            <li>Enter a filter name and set its priority.</li>

            <br/>
            <img src="/img/docs/sieve_filters_3.png" alt="Empty Add Filter modal with name, priority, conditions and actions fields" loading="lazy" decoding="async" /> <br/><br/>

            <li>Add one or more conditions (sender, subject, recipient, body, etc.).</li>
            <li>Set the test logic: use <strong>ALLOF</strong> if every condition must match, or <strong>ANYOF</strong> if any single condition is enough.</li>
            <li>Choose the action: move to folder, copy, flag, discard, redirect, etc.</li>

            <br/>
            <img src="/img/docs/sieve_filters_4.png" alt="Filled Add Filter form with conditions and redirect action" loading="lazy" decoding="async" /> <br/><br/>

            <li>Click <strong>Dry Run</strong> to test the filter against visible messages and verify it matches the right ones.</li>
            <li>Save the filter.</li>
        </ol>

        <div class="feature-card">
            <h6><i class="bi bi-sort-numeric-up"></i> Priority order</h6>
            <span class="doc-section-text mb-0">Filters run from the lowest priority value to the highest. Place precise, high-confidence rules at lower numbers and broad catch-all rules at higher numbers to avoid conflicts.</span>
        </div>

        <div class="doc-subsection-header">
            <a href="#add_script">Add a Custom Script</a>
        </div>
        <span class="doc-section-text">
            Cypht now includes a <strong>Custom Actions</strong> dropdown in the message list controls so you can create, test, and reuse advanced filters without leaving the current view.
        </span>

        <div class="doc-grid-content">
            <div>
                <div class="feature-card h-100">
                    <h6><i class="bi bi-menu-button"></i> Custom Actions dropdown</h6>
                    <p class="mb-0">Clicking <strong>Custom Actions</strong> opens a dropdown containing your existing custom actions plus a <strong>Create from Selected</strong> entry.</p>
                </div>
            </div>
            <div>
                <div class="feature-card h-100">
                    <h6><i class="bi bi-stars"></i> Reusable actions</h6>
                    <p class="mb-0">Filters created from this workflow are automatically saved as custom actions so they appear in the dropdown the next time you need them.</p>
                </div>
            </div>
            <div>
                <div class="feature-card h-100">
                    <h6><i class="bi bi-pencil-square"></i> Quick editing</h6>
                    <p class="mb-0">Selecting an existing custom action opens the edit modal directly, which makes it easy to refine the rule before using it again.</p>
                </div>
            </div>
        </div>
        <span class="doc-section-text">
            All saved filters and scripts appear in the list on the Sieve Filters page. Click any entry to open the edit modal where you can update conditions, change actions, or delete the filter entirely.
        </span>
    </div>

    <!-- ======================================== -->
    <!-- 4. Create from Selected messages          -->
    <!-- ======================================== -->

    <div id="create_from_selected" class="doc-section">
        <div class="doc-section-header">
            <a href="#create_from_selected">Step 3 — Create from Selected Messages</a>
        </div>
        <span class="doc-section-text">
            The <strong>Custom Actions</strong> dropdown in the message list toolbar lets you build filters directly from messages you are looking at, without navigating to Settings.
        </span>

        <ol>
            <li>Select one or more messages in the current mailbox view.</li>

            <br/>
            <img src="/img/docs/sieve_filters_5.png" alt="Inbox with selected messages and toolbar showing QuickActions" loading="lazy" decoding="async" /> <br/><br/>

            <li>Click the <strong>Custom Actions</strong> button in the toolbar.</li>
            <li>Click <strong>Create from Selected</strong>.</li>

            <br/>
            <img src="/img/docs/sieve_filters_6.png" alt="QuickActions dropdown showing Create from Selected option" loading="lazy" decoding="async" /> <br/><br/>
            <li>Review the auto-populated conditions (From addresses and Subject keywords are prefilled from the selected messages).</li>

            <br/>
            <img src="/img/docs/sieve_filters_7.png" alt="Setup Filter from selected messages modal with auto-populated From emails and Subject keywords" loading="lazy" decoding="async" /> <br/><br/>

            <li>Adjust the matching options:
                <ul>
                    <li><strong>From:</strong> Matches / Does Not Match</li>
                    <li><strong>Subject:</strong> Contains / Does Not Contain / Ignore Subject</li>
                </ul>
            </li>
            <li>Choose the action to apply.</li>
            <li>Click <strong>Dry Run</strong> to test the filter against visible messages — matched and unmatched messages are shown in a results panel so you can verify the rule before committing.</li>
            <li>Save the filter.</li>
        </ol>

        <div class="feature-card">
            <h6><i class="bi bi-magic"></i> Auto-populated conditions</h6>
            <span class="doc-section-text mb-0">Cypht prefills From addresses and Subject keywords from the selected messages so you start from real data instead of an empty form.</span>
        </div>

        <div class="doc-subsection-header">
            <a href="#dry_run">Dry Run</a>
        </div>
        <span class="doc-section-text">
            The <strong>Dry Run</strong> button tests the current filter conditions against all visible messages in your active view and shows which messages match and which do not — without moving or changing anything.
        </span>

        <ol>
            <li>Create a filter from selected messages or open an existing custom action.</li>
            <li>Adjust the conditions, actions, and match logic.</li>
            <li>Click <strong>Dry Run</strong> in the modal.</li>
            <li>Review the matched and unmatched messages in the results panel.</li>
            <li>Close the results panel, refine the filter, and run it again if needed.</li>
            <li>Save only when the previewed behavior is correct.</li>
        </ol>

        <div class="doc-grid-content">
            <div>
                <div class="feature-card h-100">
                    <h6><i class="bi bi-play-circle"></i> Preview results</h6>
                    <p class="mb-0">Matched and unmatched messages are listed in a dismissible results panel. Refine conditions and run again until the preview is correct.</p>
                </div>
            </div>
            <div>
                <div class="feature-card h-100">
                    <h6><i class="bi bi-diagram-3"></i> Respects filter logic</h6>
                    <p class="mb-0">Dry Run uses the same <strong>ALLOF</strong> / <strong>ANYOF</strong> logic as the real filter, so the preview matches real-world behavior.</p>
                </div>
            </div>
        </div>

        <div class="doc-subsection-header">
            <a href="#reuse_actions">Reuse and Edit Custom Actions</a>
        </div>
        <span class="doc-section-text">
            Filters created through this workflow are automatically marked as custom actions and appear in the <strong>Custom Actions</strong> dropdown for future use. Click any existing action in the dropdown to reopen its edit modal, adjust conditions, dry run it against the current messages, or delete it.
        </span>
    </div>

    <!-- ======================================== -->
    <!-- 5. Create from an opened message          -->
    <!-- ======================================== -->

    <div id="create_from_message" class="doc-section">
        <div class="doc-section-header">
            <a href="#create_from_message">Step 4 — Create from an Opened Message</a>
        </div>
        <span class="doc-section-text">
            When you are reading a single email and want to filter similar messages in the future, use the <strong>Filter similar messages</strong> button.
        </span>

        <ol>
            <li>Open the message you want to base the filter on.</li>

            <br/>
            <img src="/img/docs/sieve_filters_8.png" alt="Opened message showing Filter similar messages button in the action bar" loading="lazy" decoding="async" /> <br/><br/>

            <li>Click <strong>Filter similar messages</strong> in the message actions area.</li>
            <li>Select the fields to match (From, To, Subject, Reply-To) and click <strong>Create filter</strong>.</li>

            <br/>
            <img src="/img/docs/sieve_filters_9.png" alt="Filter similar messages dropdown with From, To, Subject and Reply-To checkboxes" loading="lazy" decoding="async" /> <br/><br/>
            <li>Review the prefilled conditions — Cypht auto-populates the filter name, sender, recipient, and subject from the opened message.</li>

            <br/>
            <img src="/img/docs/sieve_filters_10.png" alt="Add Filter for message like this modal with auto-populated conditions and actions" loading="lazy" decoding="async" /> <br/><br/>

            <li>Adjust the conditions and choose the action (move, flag, discard, etc.).</li>
            <li>Click <strong>Dry Run</strong> to preview which messages would match before committing.</li>
            <li>Save the filter.</li>
        </ol>

        <div class="feature-card">
            <h6><i class="bi bi-envelope-open"></i> One-click starting point</h6>
            <span class="doc-section-text mb-0">This is the fastest way to react to a single message. You do not need to go to Settings or select multiple messages first — just open the email and create the rule from it.</span>
        </div>

        <div class="tip-card tip-info mt-3">
            <span class="tip-info-text"><i class="bi bi-info-circle"></i> Where does the filter go?</span>
            <p class="mb-0">The filter is saved to the same Sieve Filters list on the Settings page. You can edit or delete it later from there, or reuse it as a custom action.</p>
        </div>
    </div>

    <!-- ======================================== -->
    <!-- Troubleshooting                          -->
    <!-- ======================================== -->

    <div id="troubleshooting" class="doc-section">
        <div class="doc-section-header">
            <a href="#troubleshooting">Troubleshooting</a>
        </div>

        <div class="tip-card tip-warning">
            <span class="tip-warning-text"><i class="bi bi-tools"></i> Filter not appearing?</span>
            <p class="mb-0">Verify that the <strong>sievefilters</strong> module is enabled and that your instance has been reloaded after the configuration change.</p>
        </div>

        <div class="tip-card tip-warning mt-3">
            <span class="tip-warning-text"><i class="bi bi-server"></i> Filter saved but not running?</span>
            <p class="mb-0">Check whether your provider supports ManageSieve and whether the selected account is the same mailbox that receives the tested messages.</p>
        </div>

        <div class="tip-card tip-info mt-3">
            <span class="tip-info-text"><i class="bi bi-lightbulb"></i> Best practice</span>
            <p class="mb-0">When debugging, disable or simplify overlapping rules. Two filters that both match the same message can produce inconsistent behavior when the real issue is rule order.</p>
        </div>
    </div>

    <!-- ======================================== -->
    <!-- Related Work                             -->
    <!-- ======================================== -->

    <div id="related_work" class="doc-section">
        <div class="doc-section-header">
            <a href="#related_work">Related</a>
        </div>

        <ul>
            <li><strong>Issue:</strong> <a href="https://github.com/cypht-org/cypht/issues/398" target="_blank" rel="noopener">Configurable custom actions (buttons) #398</a></li>
            <li><strong>Sieve language resources:</strong> <a href="http://sieve.info/" target="_blank" rel="noopener">sieve.info</a>, <a href="https://p5r.uk/blog/2011/sieve-tutorial.html" target="_blank" rel="noopener">Sieve tutorial</a>, <a href="https://www.fastmail.com/help/technical/sieve.html" target="_blank" rel="noopener">Fastmail Sieve docs</a></li>
        </ul>
    </div>

    <nav-pagination
        prev-label="Search & Filters"
        prev-url="/documentation/search-filters"
        next-label="Screen Emails"
        next-url="/documentation/screen-emails">
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
                <li><a href="#introduction" class="active">Introduction</a></li>
                <li><a href="#enable_module">Enable Module</a></li>
                <li><a href="#create_from_settings">From Sieve Filters Page</a></li>
                <li><a href="#create_from_selected">From Selected Messages</a></li>
                <li><a href="#create_from_message">From Opened Message</a></li>
                <li><a href="#troubleshooting">Troubleshooting</a></li>
                <li><a href="#related_work">Related</a></li>
            </ul>
        </nav>
    </div>
</div>
