---
id: 4
title: Account Setup
layout: section/documentation
---

<div class="doc-content-left col mx-xl-3">
    <div class="doc-page-header">
        <h3>Account Setup</h3>
    </div>

    <div id="prerequisites_check" class="doc-section">
        <div class="doc-section-header">
            <a href="#prerequisites_check">🔍 Prerequisites Check</a>
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
                    <img src="https://supabase.com/images/index/products/realtime-dark.svg" alt=""/>
                    <p>Standard email accounts including Gmail, Outlook, Yahoo, and custom domain emails. Supports SSL/TLS encryption and various authentication methods.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card doc-img-card">
                    <h6><i class="bi bi-rss"></i> RSS/Atom Feeds</h6>
                    <img src="https://supabase.com/images/index/products/realtime-dark.svg" alt=""/>
                    <p>News feeds, blogs, and content streams displayed as message threads. Perfect for staying updated with your favorite sources.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card doc-img-card">
                    <h6><i class="bi bi-cloud"></i> Exchange Web Services</h6>
                    <img src="https://supabase.com/images/index/products/realtime-dark.svg" alt=""/>
                    <p>Microsoft Exchange and Office 365 accounts with full calendar and contact synchronization capabilities.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card doc-img-card">
                    <h6><i class="bi bi-people"></i> LDAP/Server</h6>
                    <img src="https://supabase.com/images/index/products/realtime-dark.svg" alt=""/>
                    <p>Corporate directory services and local contact databases for integrated address book functionality.</p>
                </div>
            </div>
        </div>
    </div>

    <div id="adding_email_accounts" class="doc-section">
        <div class="doc-section-header">
            <a href="#adding_email_accounts">Adding Email Accounts</a>
        </div>
        <span class="doc-section-text">
            Configure your email accounts with the proper server settings and authentication credentials.
        </span>

        <div class="doc-subsection-header">
            <a href="#access_settings">1. Access Account Settings</a>
        </div>
        <p>Navigate to <strong>Settings → Accounts</strong> in the top navigation bar. Click "Add Account" to begin the configuration process.</p>

        <div class="doc-subsection-header">
            <a href="#basic_settings">2. Basic Account Information</a>
        </div>
        <p>Enter the essential details for your email account:</p>
        <ul>
            <li><strong>Account Name:</strong> A descriptive name for identification (e.g., "Work Email", "Personal Gmail")</li>
            <li><strong>Email Address:</strong> Your complete email address</li>
            <li><strong>Display Name:</strong> Name that appears in sent messages</li>
            <li><strong>Reply-to Address:</strong> Optional alternative reply address</li>
        </ul>

        <div class="doc-subsection-header">
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

        <div class="doc-subsection-header">
            <a href="#app_passwords">App-Specific Passwords</a>
        </div>
        <p>Many providers (Google, Microsoft, Yahoo) require app-specific passwords instead of your regular password:</p>

        <div class="doc-grid-content">
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-google"></i> Google/Gmail</h6>
                    <p class="small">Enable 2-Step Verification, then generate an App Password in your Google Account settings.</p>
                </div>
            </div>
            <div class="">
                <div class="feature-card h-100">
                    <h6><i class="bi bi-microsoft"></i> Microsoft/Outlook</h6>
                    <p class="small">Use App Passwords or OAuth2 authentication for Office 365 and Outlook accounts.</p>
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

    <div id="rss_feeds" class="doc-section">
        <div class="doc-section-header">
            <a href="#rss_feeds">Adding RSS/Atom Feeds</a>
        </div>
        <span class="doc-section-text">
            Transform your favorite content sources into readable message threads within Cypht.
        </span>

        <div class="doc-subsection-header">
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h12M4 12h16M4 19h8" color="currentColor"/></svg>
                On this page
            </p>
        </div>
        <nav>
            <ul id="dc-ctr-nav">
                <li><a href="#prerequisites_check" class="active">Prerequisites Check</a></li>
                <li><a href="#account_types">Account Types</a></li>
                <li><a href="#adding_email_accounts">Email Setup</a></li>
                <li><a href="#security_authentication">Security</a></li>
                <li><a href="#rss_feeds">RSS Feeds</a></li>
                <li><a href="#advanced_settings">Advanced Settings</a></li>
                <li><a href="#troubleshooting">Troubleshooting</a></li>
            </ul>
        </nav>
    </div>
</div>
