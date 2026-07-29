---
id: 4
title: Account Setup
description: "Learn how to add and configure email accounts in Cypht. Set up IMAP, SMTP, Gmail, Outlook, and other providers with auto-discovery and OAuth authentication."
layout: section/documentation
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>Account Setup</h3>
    </div>

    <div id="prerequisites_check" class="doc-section">
        <div class="doc-section-header">
            <a href="#prerequisites_check">Prerequisites Check</a>
        </div>
        <span class="doc-section-text">
            Before adding accounts to Cypht, ensure you have completed the essential setup steps. Account setup requires a fully functional Cypht installation.
        </span>

        <div class="tip-card tip-warning">
            <span class="tip-warning-text"><i class="bi bi-exclamation-triangle"></i> Complete These First</span>
            <ul class="mb-2">
                <li><strong>Installation:</strong> Cypht must be deployed on your web server with proper PHP configuration</li>
            </ul>
            <p class="mb-0"><strong>Need help?</strong> Go to <a href="/install">Installation Guide</a></p>
        </div>
    </div>

    <div id="account_types" class="doc-section">
        <div class="doc-section-header">
            <a href="#account_types">Supported Account Types</a>
        </div>
        <span class="doc-section-text">
            Cypht supports multiple account types, allowing you to centralize various communication channels in one interface.
        </span>

        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card doc-img-card">
                    <h6><i class="bi bi-envelope"></i> JMAP/IMAP/SMTP/ Servers</h6>
                    <img src="/img/docs/jmap_imap_smtp_servers.webp" alt="JMAP, IMAP and SMTP server setup screen" width="2000" height="2000" loading="lazy" decoding="async"/>
                    <p>Standard email accounts including Gmail, Outlook, Yahoo, and custom domain emails. Supports SSL/TLS encryption and various authentication methods.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card doc-img-card">
                    <h6><i class="bi bi-rss"></i> RSS/Atom Feeds</h6>
                    <img src="/img/docs/add_an_rss_atom_feed.webp" alt="Add an RSS / Atom feed screen" width="2000" height="2000" loading="lazy" decoding="async"/>
                    <p>News feeds, blogs, and content streams displayed as message threads. Perfect for staying updated with your favorite sources.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card doc-img-card">
                    <h6><i class="bi bi-cloud"></i> Exchange Web Services</h6>
                    <img src="/img/docs/exchange_web_services.webp" alt="Exchange Web Services account screen" width="2000" height="2000" loading="lazy" decoding="async"/>
                    <p>Microsoft Exchange and Office 365 accounts with full calendar and contact synchronization capabilities.</p>
                </div>
            </div>
            <!-- <div class="">
                <div class="feature-card doc-img-card">
                    <h6><i class="bi bi-people"></i> LDAP/Server</h6>
                    <img src="https://supabase.com/images/index/products/realtime-dark.svg" alt=""/>
                    <p>Corporate directory services and local contact databases for integrated address book functionality.</p>
                </div>
            </div> -->
        </div>
    </div>

    <div id="adding_email_accounts" class="doc-section">
        <div class="doc-section-header">
            <a href="#adding_email_accounts">Adding Email Accounts</a>
        </div>
        <span class="doc-section-text">
            Configure your email accounts with the proper server settings and authentication credentials.
        </span>

        <div id="access_settings" class="doc-subsection-header">
            <a href="#access_settings">1. Access Account Settings</a>
        </div>
        <p>Navigate to <strong>Settings → Servers</strong> in the top navigation bar. Click "Add Account" to begin the configuration process.</p>

        <div id="basic_settings" class="doc-subsection-header">
            <a href="#basic_settings">2. Basic Account Information</a>
        </div>
        <p>Enter the essential details for your email account:</p>
        <ul>
            <li><strong>Account Name:</strong> A descriptive name for identification (e.g., "Work Email", "Personal Gmail")</li>
            <li><strong>Email Address:</strong> Your complete email address</li>
            <li><strong>Display Name:</strong> Name that appears in sent messages</li>
            <li><strong>Reply-to Address:</strong> Optional alternative reply address</li>
        </ul>

        <div id="server_configuration" class="doc-subsection-header">
            <a href="#server_configuration">3. Server Configuration</a>
        </div>
        <p>Configure the incoming and outgoing mail servers:</p>

        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-download"></i> IMAP (Incoming)</h6>
                    <ul class="small mb-0">
                        <li><strong>Server:</strong> imap.gmail.com (example)</li>
                        <li><strong>Port:</strong> 993 (SSL) or 143 (STARTTLS)</li>
                        <li><strong>Encryption:</strong> SSL/TLS recommended</li>
                        <li><strong>Username:</strong> Your full email address</li>
                        <li><strong>Password:</strong> Your account password</li>
                    </ul>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-upload"></i> SMTP (Outgoing)</h6>
                    <ul class="small mb-0">
                        <li><strong>Server:</strong> smtp.gmail.com (example)</li>
                        <li><strong>Port:</strong> 587 (STARTTLS) or 465 (SSL)</li>
                        <li><strong>Encryption:</strong> STARTTLS recommended</li>
                        <li><strong>Authentication:</strong> Required</li>
                        <li><strong>Username:</strong> Same as IMAP</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="tip-card tip-info mt-3">
            <span class="tip-info-text"><i class="bi bi-info-circle"></i> Auto-Discovery</span>
            <p class="mb-0">Cypht can automatically detect server settings for many popular email providers. Simply enter your email address and password, then click "Auto-Configure" if available.</p>
        </div>
    </div>

    <div id="security_authentication" class="doc-section">
        <div class="doc-section-header">
            <a href="#security_authentication">Security & Authentication</a>
        </div>
        <span class="doc-section-text">
            Modern email services often require additional security measures for third-party applications.
        </span>

        <div id="app_passwords" class="doc-subsection-header">
            <a href="#app_passwords">App-Specific Passwords</a>
        </div>
        <p>Many providers (Google, Microsoft, Yahoo) require app-specific passwords instead of your regular password:</p>

        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-google"></i> Google/Gmail</h6>
                    <p class="small">Enable 2-Step Verification, then generate an App Password in your Google Account settings or set up <a href="#gmail_oauth" class="text-link">Gmail OAuth</a>.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-microsoft"></i> Microsoft/Outlook</h6>
                    <p class="small">Use App Passwords, or set up <a href="#outlook_oauth" class="text-link">OAuth2 for Outlook &amp; Office 365</a>.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-shield-check"></i> Corporate Email</h6>
                    <p class="small">Contact your IT administrator for proper server settings and authentication requirements.</p>
                </div>
            </div>
        </div>

        <div class="tip-card tip-warning mt-3">
            <span class="tip-warning-text"><i class="bi bi-shield-exclamation"></i> Security Note</span>
            <p class="mb-0">Never share your app-specific passwords. They provide direct access to your email account. Revoke them immediately if suspicious activity is detected.</p>
        </div>
    </div>

    <!-- Gmail OAuth -->
    <div id="gmail_oauth" class="doc-section">
        <div class="doc-section-header">
            <a href="#gmail_oauth">Gmail OAuth</a>
        </div>
        <span class="doc-section-text">
            OAuth2 lets your users connect their Gmail account without ever typing their Google password, and without app passwords. Cypht receives a token it can refresh, which can be revoked at any time from the Google account.
        </span>
        <span class="doc-section-text">
            The setup happens in the Google Cloud Console: create a project, configure the consent screen, generate an OAuth client, then copy the two resulting values into your Cypht <code>.env</code> file.
        </span>

        <div class="tip-card tip-info mt-3">
            <span class="tip-info-text"><i class="bi bi-info-circle"></i> What you need</span>
            <p class="mb-0">A Google account allowed to manage the project, and access to the <code>.env</code> file at the root of your Cypht installation.</p>
        </div>

        <div id="google_cloud_project" class="doc-subsection-header">
            <a href="#google_cloud_project">1. Create a Google Cloud project</a>
        </div>
        <ul>
            <li>Visit the <a href="https://console.cloud.google.com/" target="_blank" rel="noopener" class="text-link">Google Cloud Console</a>.</li>
            <li>Sign in with the Google account that manages your application.</li>
            <li>If you do not have a project yet, choose <strong>Create Project</strong> and give it a name.</li>
            <li>If a project already exists, select it from the project list.</li>
        </ul>

        <div class="doc-code-group">
        <p>The project selector sits in the top bar of the console:</p>
        <img class="doc-screenshot" src="/img/google-oauth-screen/google-oauth-1.webp" alt="Google Cloud Console with the project selector" width="1791" height="1128" loading="lazy" decoding="async" />
        </div>

        <div id="google_consent_screen" class="doc-subsection-header">
            <a href="#google_consent_screen">2. Configure the OAuth consent screen</a>
        </div>
        <p>The consent screen is what your users see when they authorize Cypht to read their mailbox. Navigate to <strong>APIs &amp; Services</strong> &gt; <strong>OAuth consent screen</strong>, then provide:</p>
        <ul>
            <li>The application type <strong>External</strong> or <strong>Internal</strong>, depending on your needs.</li>
            <li>The application name displayed to users.</li>
            <li>Support and administrative contact email addresses.</li>
            <li>Your authorized domains (for example <code>yourdomain.com</code>, or <code>localhost</code> for development).</li>
            <li>A privacy policy URL if you have one.</li>
        </ul>
        <p>Save your changes and continue, then add the accounts allowed to use the application while it is in test mode:</p>
        <ol>
            <li>In the same <strong>OAuth consent screen</strong>, open the <strong>Test users</strong> tab.</li>
            <li>Select <strong>Add users</strong>.</li>
            <li>Enter the email addresses allowed to use the application during testing.</li>
            <li>Confirm to display the list of authorized test accounts.</li>
        </ol>

        <div class="tip-card tip-warning mt-3">
            <span class="tip-warning-text"><i class="bi bi-exclamation-triangle"></i> Test mode blocks everyone else</span>
            <p class="mb-0">While the application stays in test mode, any email address not listed as a test user is refused at sign-in.</p>
        </div>

        <div class="doc-code-group">
        <p>The consent screen and its test users tab:</p>
        <img class="doc-screenshot" src="/img/google-oauth-screen/google-oauth-2.webp" alt="Google OAuth consent screen configuration" width="1791" height="1128" loading="lazy" decoding="async" />
        </div>

        <div id="google_credentials" class="doc-subsection-header">
            <a href="#google_credentials">3. Create the OAuth credentials</a>
        </div>
        <ol>
            <li>Return to <strong>APIs &amp; Services</strong> and choose <strong>Credentials</strong>.</li>
            <li>Select <strong>Create credentials</strong> &gt; <strong>OAuth client ID</strong>.</li>
            <li>Set the application type to <strong>Web application</strong>.</li>
            <li>Name the client, for example "Cypht – Gmail Authentication".</li>
            <li>Define the authorized redirect URIs, then click <strong>Create</strong>.</li>
        </ol>

        <div class="doc-code-group">
        <p>The application type (1), the client name (2) and the authorized redirect URI (3):</p>
        <img class="doc-screenshot" src="/img/google-oauth-screen/google-oauth-3.webp" alt="Google Cloud Console Create OAuth client ID form showing application type, client name and redirect URI" width="1791" height="1128" loading="lazy" decoding="async" />
        </div>

        <div class="doc-code-group">
        <p>The redirect URI is the address of your Cypht instance. Adjust the host and path to your installation:</p>
        <div class="code-preview-content gc-terminal">

<pre><code class="language-bash"># Development
http://localhost/my_cypht/?page=home

# Production
https://yourdomain.com/?page=home</code></pre>

        </div>
        </div>

        <div class="tip-card tip-warning mt-3">
            <span class="tip-warning-text"><i class="bi bi-exclamation-triangle"></i> The redirect URI must match exactly</span>
            <p class="mb-0">Scheme, host, port and path are compared character for character. A trailing slash or an <code>http</code>/<code>https</code> mismatch is enough for Google to refuse the authorization.</p>
        </div>

        <div id="google_env" class="doc-subsection-header">
            <a href="#google_env">4. Set the variables in .env</a>
        </div>
        <p>Once the client is created, Google displays the two values Cypht needs:</p>
        <ul>
            <li>Client ID (1) this becomes your <code>GMAIL_CLIENT_ID</code>.</li>
            <li>Client secret (2) this becomes your <code>GMAIL_CLIENT_SECRET</code>.</li>
        </ul>

        <div class="doc-code-group">
        <p>Open the <code>.env</code> file at the root of your Cypht project and fill in both variables:</p>
        <div class="code-preview-content gc-terminal">

<pre><code class="language-bash">GMAIL_CLIENT_ID=&lt;client-id&gt;
GMAIL_CLIENT_SECRET=&lt;client-secret&gt;</code></pre>

        </div>
        </div>

        <div class="doc-code-group">
        <p>Both values are shown right after the client is created:</p>
        <img class="doc-screenshot" src="/img/google-oauth-screen/google-oauth-4.webp" alt="Google OAuth client ID and client secret displayed after creation" width="1791" height="1128" loading="lazy" decoding="async" />
        </div>

        <p>Your configuration is now complete: users can add their Gmail account from Cypht and authorize it through Google.</p>
    </div>

    <!-- Outlook / Office 365 OAuth -->
    <div id="outlook_oauth" class="doc-section">
        <div class="doc-section-header">
            <a href="#outlook_oauth">Outlook &amp; Office 365 OAuth</a>
        </div>
        <span class="doc-section-text">
            Outlook.com and Office 365 accounts authenticate through the same Microsoft identity platform, so a single application registration in the Azure portal covers both.
        </span>
        <span class="doc-section-text">
            You register an application, note its client ID, create a client secret, then copy both values into your Cypht <code>.env</code> file.
        </span>

        <div class="tip-card tip-info mt-3">
            <span class="tip-info-text"><i class="bi bi-info-circle"></i> What you need</span>
            <p class="mb-0">A Microsoft account allowed to register applications in the Azure portal, and access to the <code>.env</code> file at the root of your Cypht installation.</p>
        </div>

        <div id="azure_app_registration" class="doc-subsection-header">
            <a href="#azure_app_registration">1. Register the application</a>
        </div>
        <ol>
            <li>Go to the <a href="https://portal.azure.com/#home" target="_blank" rel="noopener" class="text-link">Azure portal</a> and sign in with the Outlook account associated with your app.</li>
            <li>In the search bar at the top, type <strong>App registrations</strong> and select the matching service.</li>
            <li>If you already have an application, select it from the list.</li>
            <li>Otherwise click <strong>+ New registration</strong>, name your application, set the supported account types and the redirect URIs if needed, then click <strong>Register</strong>.</li>
        </ol>

        <div class="doc-code-group">
        <p>The app registrations service in the Azure portal:</p>
        <img class="doc-screenshot" src="/img/outlook-and-office365-oauth-screen/outlook-and-office365-oauth-section-01.webp" alt="Azure portal app registrations page" width="1791" height="930" loading="lazy" decoding="async" />
        </div>

        <div id="azure_client_id" class="doc-subsection-header">
            <a href="#azure_client_id">2. Get the client ID</a>
        </div>
        <ul>
            <li>Once the application is registered or selected, you land on its <strong>Overview</strong> page.</li>
            <li>The <strong>Application (client) ID</strong> is displayed there. Note it down: it becomes <code>OUTLOOK_CLIENT_ID</code> or <code>OFFICE365_CLIENT_ID</code>.</li>
        </ul>

        <div class="doc-code-group">
        <p>The client ID on the application overview page:</p>
        <img class="doc-screenshot" src="/img/outlook-and-office365-oauth-screen/outlook-and-office365-oauth-section-02.webp" alt="Azure application overview page showing the client ID" width="1791" height="1128" loading="lazy" decoding="async" />
        </div>

        <div id="azure_client_secret" class="doc-subsection-header">
            <a href="#azure_client_secret">3. Create the client secret</a>
        </div>
        <ol>
            <li>In the left menu of your application page, under <strong>Manage</strong>, select <strong>Certificates &amp; secrets</strong>.</li>
            <li>In the <strong>Client secrets</strong> section, click <strong>+ New client secret</strong>.</li>
            <li>Add a description and choose a validity period 1 or 2 years, for example.</li>
            <li>Click <strong>Add</strong>.</li>
        </ol>

        <div class="tip-card tip-warning mt-3">
            <span class="tip-warning-text"><i class="bi bi-exclamation-triangle"></i> Copy the secret immediately</span>
            <p class="mb-0">The value is only displayed once, right after creation. Leave the page without copying it and you will have to generate a new secret. Avoid the "Never expires" option for security reasons.</p>
        </div>

        <div class="doc-code-group">
        <p>The Certificates &amp; secrets screen where the secret is created:</p>
        <img class="doc-screenshot" src="/img/outlook-and-office365-oauth-screen/outlook-and-office365-oauth-section-03.webp" alt="Azure Certificates and secrets page with the new client secret form" width="1791" height="1128" loading="lazy" decoding="async" />
        </div>

        <div id="azure_env" class="doc-subsection-header">
            <a href="#azure_env">4. Set the variables in .env</a>
        </div>
        <p>You now have both values: the client ID (1) from the overview page, and the client secret (2) you just created.</p>

        <div class="doc-code-group">
        <p>Open the <code>.env</code> file at the root of your Cypht project and fill in the pair matching your provider:</p>
        <div class="code-preview-content gc-terminal">

<pre><code class="language-bash"># Outlook.com
OUTLOOK_CLIENT_ID=&lt;client-id&gt;
OUTLOOK_CLIENT_SECRET=&lt;client-secret&gt;

# Office 365
OFFICE365_CLIENT_ID=&lt;client-id&gt;
OFFICE365_CLIENT_SECRET=&lt;client-secret&gt;</code></pre>

        </div>
        </div>

        <div class="doc-code-group">
        <p>The client secret value, displayed once after creation:</p>
        <img class="doc-screenshot" src="/img/outlook-and-office365-oauth-screen/outlook-and-office365-oauth-section-04.webp" alt="Azure client secret value shown after creation" width="1791" height="1128" loading="lazy" decoding="async" />
        </div>

        <p>Your configuration is now complete: users can add their Outlook or Office 365 account from Cypht and authorize it through Microsoft.</p>

        <div class="tip-card tip-info mt-3">
            <span class="tip-info-text"><i class="bi bi-lightbulb"></i> Generating a full .env</span>
            <p class="mb-0">The <a href="/config-generator" class="text-link">configuration generator</a> builds a complete <code>.env</code> for you, OAuth variables included.</p>
        </div>
    </div>

    <div id="rss_feeds" class="doc-section">
        <div class="doc-section-header">
            <a href="#rss_feeds">Adding RSS/Atom Feeds</a>
        </div>
        <span class="doc-section-text">
            Transform your favorite content sources into readable message threads within Cypht.
        </span>

        <div id="feed_setup" class="doc-subsection-header">
            <a href="#feed_setup">Feed Configuration</a>
        </div>
        <ol>
            <li>Click <strong>Settings → Accounts → Add Account</strong></li>
            <li>Select <strong>"RSS/Atom Feed"</strong> as account type</li>
            <li>Enter the <strong>Feed URL</strong> (e.g., https://example.com/feed.xml)</li>
            <li>Choose a <strong>Display Name</strong> for the feed</li>
            <li>Set <strong>Update Frequency</strong> (hourly, daily, manual)</li>
            <li>Click <strong>Test Connection</strong> to verify the feed</li>
            <li>Save and the feed will appear in your folder list</li>
        </ol>

        <div class="feature-card">
            <h6><i class="bi bi-lightbulb"></i> Popular Feed Sources</h6>
            <p>News sites, blogs, GitHub repositories, project management tools, and notification services often provide RSS feeds for staying updated with latest content.</p>
        </div>
    </div>

    <div id="advanced_settings" class="doc-section">
        <div class="doc-section-header">
            <a href="#advanced_settings">Advanced Settings</a>
        </div>
        <span class="doc-section-text">
           Fine-tune your account configuration for optimal performance and functionality.
        </span>

        <ul>
            <li><strong>Folder Prefix:</strong> Specify IMAP folder prefix (INBOX., etc.) for server compatibility</li>
            <li><strong>Connection Limits:</strong> Set maximum concurrent connections to prevent server overload</li>
            <li><strong>Message Limits:</strong> Configure how many messages to sync per folder</li>
            <li><strong>Signature Management:</strong> Create and manage email signatures per account</li>
            <li><strong>Notification Settings:</strong> Configure desktop or email notifications for new messages</li>
        </ul>
    </div>

    <div id="troubleshooting" class="doc-section">
        <div class="doc-section-header">
            <a href="#troubleshooting">Troubleshooting Common Issues</a>
        </div>
        <span class="doc-section-text">
            Resolve common account setup issues with these solutions.
        </span>

        <div class="doc-grid-content">
            <div class="feature-card d-flex flex-column">
                <div class="flex-grow-1">
                    <h6><i class="bi bi-x-circle"></i> Connection Failed</h6>
                    <p class="small">Check server settings, firewall rules, and ensure SSL/TLS ports are open. Verify credentials and try app-specific passwords.</p>
                </div>
                <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+connection+failed" target="_blank" class="doc-btn-card btn-sm mt-2 align-self-start">
                        <i class="bi bi-github"></i> See Issues
                    </a>
            </div>
            <div class="feature-card d-flex flex-column">
                <div class="flex-grow-1">
                    <h6><i class="bi bi-exclamation-triangle"></i> Authentication Error</h6>
                    <p class="small">Enable two-factor authentication and generate app passwords. Verify that the username matches the email address format.</p>
                </div>
                <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+authentication" target="_blank" class="doc-btn-card btn-sm mt-2 align-self-start">
                        <i class="bi bi-github"></i> See Issues
                    </a>
            </div>
            <div class="feature-card d-flex flex-column">
                <div class="flex-grow-1">
                    <h6><i class="bi bi-arrow-repeat"></i> Sync Issues</h6>
                    <p class="small">Increase connection limits, check server quotas, and verify folder permissions. Use manual refresh if needed.</p>
                </div>
                <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+sync" target="_blank" class="doc-btn-card btn-sm mt-2 align-self-start">
                        <i class="bi bi-github"></i> See Issues
                    </a>
            </div>
            <div class="feature-card d-flex flex-column">
                <div class="flex-grow-1">
                        <h6><i class="bi bi-shield-lock"></i> Security Blocks</h6>
                        <p class="small">Review account security settings, allow less secure app access if needed, or use OAuth2 authentication.</p>
                    </div>
                    <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+security" target="_blank" class="doc-btn-card btn-sm mt-2 align-self-start">
                        <i class="bi bi-github"></i> See Issues
                    </a>
            </div>
            <div class="feature-card d-flex flex-column">
                <div class="flex-grow-1">
                    <h6><i class="bi bi-folder"></i> Folder Configuration</h6>
                    <p class="small">Check system folder mappings (Inbox, Sent) and IMAP folder prefixes (like INBOX.) for server compatibility.</p>
                </div>
                <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+folder" target="_blank" class="doc-btn-card btn-sm mt-2 align-self-start">
                        <i class="bi bi-github"></i> See Issues
                </a>
            </div>
            <div class="feature-card d-flex flex-column">
                <div class="flex-grow-1">
                    <h6><i class="bi bi-shield-check"></i> SSL/TLS Certificate Issues</h6>
                    <p class="small">Ensure certificates are up to date and properly configured. For self-signed certificates, add them to trusted certificates.</p>
                </div>
                <a href="https://github.com/cypht-org/cypht/issues?q=is%3Aissue+ssl+OR+tls+certificate" target="_blank" class="doc-btn-card btn-sm mt-2 align-self-start">
                        <i class="bi bi-github"></i> See Issues
                </a>
            </div>
        </div>
    </div>

    <nav-pagination
        prev-label="Interfaces"
        prev-url="/documentation/interfaces"
        next-label="Unified Inbox"
        next-url="/documentation/unified-inbox">
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
                <li><a href="#prerequisites_check" class="active">Prerequisites Check</a></li>
                <li><a href="#account_types">Account Types</a></li>
                <li><a href="#adding_email_accounts">Email Setup</a></li>
                <li><a href="#security_authentication">Security</a></li>
                <li><a href="#gmail_oauth">Gmail OAuth</a></li>
                <li><a href="#outlook_oauth">Outlook &amp; Office 365 OAuth</a></li>
                <li><a href="#rss_feeds">RSS Feeds</a></li>
                <li><a href="#advanced_settings">Advanced Settings</a></li>
                <li><a href="#troubleshooting">Troubleshooting</a></li>
            </ul>
        </nav>
    </div>
</div>
