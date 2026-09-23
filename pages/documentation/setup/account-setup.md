---
weight: 30
id: 4
title: Account Setup
description: "Learn how to add and configure email accounts in Cypht. Set up IMAP, SMTP, Gmail, Outlook, and other providers with auto-discovery and OAuth authentication."
layout: section/documentation
format: md
toc_labels:
  prerequisites_check: Prerequisites Check
  account_types: Account Types
  adding_email_accounts: Email Setup
  security_authentication: Security
  gmail_oauth: Gmail OAuth
  outlook_oauth: Outlook & Office 365 OAuth
  rss_feeds: RSS Feeds
  advanced_settings: Advanced Settings
  troubleshooting: Troubleshooting
nav_prev:
  label: Interfaces
  url: /documentation/setup/interfaces
nav_next:
  label: Unified Inbox
  url: /documentation/features/unified-inbox
---

## Prerequisites Check {#prerequisites_check}

Before adding accounts to Cypht, ensure you have completed the essential setup steps. Account setup requires a fully
functional Cypht installation.

:::warning
**Complete These First**
- **Installation :** Cypht must be deployed on your web server with proper PHP configuration
- **Need help?** Go to [Installation Guide](/install)
:::

## Supported Account Types {#account_types}

Cypht supports multiple account types, allowing you to centralize various communication channels in one interface.

:::grid
- **JMAP/IMAP/SMTP/ Servers**
  ![JMAP, IMAP and SMTP server setup screen](/img/docs/jmap_imap_smtp_servers.webp)
  Standard email accounts including Gmail, Outlook, Yahoo, and custom domain emails. Supports SSL/TLS encryption and
  various authentication methods.
- **RSS/Atom Feeds**
  ![Add an RSS / Atom feed screen](/img/docs/add_an_rss_atom_feed.webp)
  News feeds, blogs, and content streams displayed as message threads. Perfect for staying updated with your favorite
  sources.
- **Exchange Web Services**
  ![Exchange Web Services account screen](/img/docs/exchange_web_services.webp)
  Microsoft Exchange and Office 365 accounts with full calendar and contact synchronization capabilities.
:::

## Adding Email Accounts {#adding_email_accounts}

Configure your email accounts with the proper server settings and authentication credentials.

### 1. Access Account Settings {#access_settings}

Navigate to **Settings → Servers** in the top navigation bar. Click "Add Account" to begin the configuration process.

### 2. Basic Account Information {#basic_settings}

Enter the essential details for your email account :

- **Account Name :** A descriptive name for identification (e.g., "Work Email", "Personal Gmail")
- **Email Address :** Your complete email address
- **Display Name :** Name that appears in sent messages
- **Reply-to Address :** Optional alternative reply address

### 3. Server Configuration {#server_configuration}

Configure the incoming and outgoing mail servers :

**IMAP (Incoming)**

- **Server :** imap.gmail.com (example)
- **Port :** 993 (SSL) or 143 (STARTTLS)
- **Encryption :** SSL/TLS recommended
- **Username :** Your full email address
- **Password :** Your account password

**SMTP (Outgoing)**

- **Server :** smtp.gmail.com (example)
- **Port :** 587 (STARTTLS) or 465 (SSL)
- **Encryption :** STARTTLS recommended
- **Authentication :** Required
- **Username :** Same as IMAP

:::info
**Auto-Discovery.** Cypht can automatically detect server settings for many popular email providers. Simply enter your
email address and password, then click "Auto-Configure" if available.
:::

## Security & Authentication {#security_authentication}

Modern email services often require additional security measures for third-party applications.

### App-Specific Passwords {#app_passwords}

Many providers (Google, Microsoft, Yahoo) require app-specific passwords instead of your regular password :

:::grid
- **Google/Gmail**
  Enable 2-Step Verification, then generate an App Password in your Google Account settings or set up
  [Gmail OAuth](#gmail_oauth).
- **Microsoft/Outlook**
  Use App Passwords, or set up [OAuth2 for Outlook & Office 365](#outlook_oauth).
- **Corporate Email**
  Contact your IT administrator for proper server settings and authentication requirements.
:::

:::warning
**Security Note.** Never share your app-specific passwords. They provide direct access to your email account. Revoke
them immediately if suspicious activity is detected.
:::

## Gmail OAuth {#gmail_oauth}

OAuth2 lets your users connect their Gmail account without ever typing their Google password, and without app
passwords. Cypht receives a token it can refresh, which can be revoked at any time from the Google account.

The setup happens in the Google Cloud Console : create a project, configure the consent screen, generate an OAuth
client, then copy the two resulting values into your Cypht `.env` file.

:::info
**What you need.** A Google account allowed to manage the project, and access to the `.env` file at the root of your
Cypht installation.
:::

### 1. Create a Google Cloud project {#google_cloud_project}

- Visit the [Google Cloud Console](https://console.cloud.google.com/).
- Sign in with the Google account that manages your application.
- If you do not have a project yet, choose **Create Project** and give it a name.
- If a project already exists, select it from the project list.

The project selector sits in the top bar of the console :

![Google Cloud Console with the project selector](/img/google-oauth-screen/google-oauth-1.webp)

### 2. Configure the OAuth consent screen {#google_consent_screen}

The consent screen is what your users see when they authorize Cypht to read their mailbox. Navigate to
**APIs & Services** > **OAuth consent screen**, then provide :

- The application type **External** or **Internal**, depending on your needs.
- The application name displayed to users.
- Support and administrative contact email addresses.
- Your authorized domains (for example `yourdomain.com`, or `localhost` for development).
- A privacy policy URL if you have one.

Save your changes and continue, then add the accounts allowed to use the application while it is in test mode :

1. In the same **OAuth consent screen**, open the **Test users** tab.
2. Select **Add users**.
3. Enter the email addresses allowed to use the application during testing.
4. Confirm to display the list of authorized test accounts.

:::warning
**Test mode blocks everyone else.** While the application stays in test mode, any email address not listed as a test
user is refused at sign-in.
:::

The consent screen and its test users tab :

![Google OAuth consent screen configuration](/img/google-oauth-screen/google-oauth-2.webp)

### 3. Create the OAuth credentials {#google_credentials}

1. Return to **APIs & Services** and choose **Credentials**.
2. Select **Create credentials** > **OAuth client ID**.
3. Set the application type to **Web application**.
4. Name the client, for example "Cypht – Gmail Authentication".
5. Define the authorized redirect URIs, then click **Create**.

The application type (1), the client name (2) and the authorized redirect URI (3) :

![Google Cloud Console Create OAuth client ID form showing application type, client name and redirect URI](/img/google-oauth-screen/google-oauth-3.webp)

The redirect URI is the address of your Cypht instance. Adjust the host and path to your installation :

```bash
# Development
http://localhost/my_cypht/?page=home

# Production
https://yourdomain.com/?page=home
```

:::warning
**The redirect URI must match exactly.** Scheme, host, port and path are compared character for character. A trailing
slash or an `http`/`https` mismatch is enough for Google to refuse the authorization.
:::

### 4. Set the variables in .env {#google_env}

Once the client is created, Google displays the two values Cypht needs :

- Client ID (1) this becomes your `GMAIL_CLIENT_ID`.
- Client secret (2) this becomes your `GMAIL_CLIENT_SECRET`.

Open the `.env` file at the root of your Cypht project and fill in both variables :

```bash
GMAIL_CLIENT_ID=<client-id>
GMAIL_CLIENT_SECRET=<client-secret>
```

Both values are shown right after the client is created :

![Google OAuth client ID and client secret displayed after creation](/img/google-oauth-screen/google-oauth-4.webp)

Your configuration is now complete : users can add their Gmail account from Cypht and authorize it through Google.

## Outlook & Office 365 OAuth {#outlook_oauth}

Outlook.com and Office 365 accounts authenticate through the same Microsoft identity platform, so a single application
registration in the Azure portal covers both.

You register an application, note its client ID, create a client secret, then copy both values into your Cypht `.env`
file.

:::info
**What you need.** A Microsoft account allowed to register applications in the Azure portal, and access to the `.env`
file at the root of your Cypht installation.
:::

### 1. Register the application {#azure_app_registration}

1. Go to the [Azure portal](https://portal.azure.com/#home) and sign in with the Outlook account associated with your
   app.
2. In the search bar at the top, type **App registrations** and select the matching service.
3. If you already have an application, select it from the list.
4. Otherwise click **+ New registration**, name your application, set the supported account types and the redirect
   URIs if needed, then click **Register**.

The app registrations service in the Azure portal :

![Azure portal app registrations page](/img/outlook-and-office365-oauth-screen/outlook-and-office365-oauth-section-01.webp)

### 2. Get the client ID {#azure_client_id}

- Once the application is registered or selected, you land on its **Overview** page.
- The **Application (client) ID** is displayed there. Note it down : it becomes `OUTLOOK_CLIENT_ID` or
  `OFFICE365_CLIENT_ID`.

The client ID on the application overview page :

![Azure application overview page showing the client ID](/img/outlook-and-office365-oauth-screen/outlook-and-office365-oauth-section-02.webp)

### 3. Create the client secret {#azure_client_secret}

1. In the left menu of your application page, under **Manage**, select **Certificates & secrets**.
2. In the **Client secrets** section, click **+ New client secret**.
3. Add a description and choose a validity period 1 or 2 years, for example.
4. Click **Add**.

:::warning
**Copy the secret immediately.** The value is only displayed once, right after creation. Leave the page without
copying it and you will have to generate a new secret. Avoid the "Never expires" option for security reasons.
:::

The Certificates & secrets screen where the secret is created :

![Azure Certificates and secrets page with the new client secret form](/img/outlook-and-office365-oauth-screen/outlook-and-office365-oauth-section-03.webp)

### 4. Set the variables in .env {#azure_env}

You now have both values : the client ID (1) from the overview page, and the client secret (2) you just created.

Open the `.env` file at the root of your Cypht project and fill in the pair matching your provider :

```bash
# Outlook.com
OUTLOOK_CLIENT_ID=<client-id>
OUTLOOK_CLIENT_SECRET=<client-secret>

# Office 365
OFFICE365_CLIENT_ID=<client-id>
OFFICE365_CLIENT_SECRET=<client-secret>
```

The client secret value, displayed once after creation :

![Azure client secret value shown after creation](/img/outlook-and-office365-oauth-screen/outlook-and-office365-oauth-section-04.webp)

Your configuration is now complete : users can add their Outlook or Office 365 account from Cypht and authorize it
through Microsoft.

:::tip
**Generating a full .env.** The [configuration generator](/config-generator) builds a complete `.env` for you, OAuth
variables included.
:::

## Adding RSS/Atom Feeds {#rss_feeds}

Transform your favorite content sources into readable message threads within Cypht.

### Feed Configuration {#feed_setup}

1. Click **Settings → Accounts → Add Account**
2. Select **"RSS/Atom Feed"** as account type
3. Enter the **Feed URL** (e.g., https://example.com/feed.xml)
4. Choose a **Display Name** for the feed
5. Set **Update Frequency** (hourly, daily, manual)
6. Click **Test Connection** to verify the feed
7. Save and the feed will appear in your folder list

:::grid
- **Popular Feed Sources**
  News sites, blogs, GitHub repositories, project management tools, and notification services often provide RSS feeds
  for staying updated with latest content.
:::

## Advanced Settings {#advanced_settings}

Fine-tune your account configuration for optimal performance and functionality.

- **Folder Prefix :** Specify IMAP folder prefix (INBOX., etc.) for server compatibility
- **Connection Limits :** Set maximum concurrent connections to prevent server overload
- **Message Limits :** Configure how many messages to sync per folder
- **Signature Management :** Create and manage email signatures per account
- **Notification Settings :** Configure desktop or email notifications for new messages

## Troubleshooting Common Issues {#troubleshooting}

Resolve common account setup issues with these solutions.

:::grid
- **Connection Failed**
  Check server settings, firewall rules, and ensure SSL/TLS ports are open. Verify credentials and try app-specific
  passwords.
  [See Issues](https://github.com/cypht-org/cypht/issues?q=is%3Aissue+connection+failed)
- **Authentication Error**
  Enable two-factor authentication and generate app passwords. Verify that the username matches the email address
  format.
  [See Issues](https://github.com/cypht-org/cypht/issues?q=is%3Aissue+authentication)
- **Sync Issues**
  Increase connection limits, check server quotas, and verify folder permissions. Use manual refresh if needed.
  [See Issues](https://github.com/cypht-org/cypht/issues?q=is%3Aissue+sync)
- **Security Blocks**
  Review account security settings, allow less secure app access if needed, or use OAuth2 authentication.
  [See Issues](https://github.com/cypht-org/cypht/issues?q=is%3Aissue+security)
- **Folder Configuration**
  Check system folder mappings (Inbox, Sent) and IMAP folder prefixes (like INBOX.) for server compatibility.
  [See Issues](https://github.com/cypht-org/cypht/issues?q=is%3Aissue+folder)
- **SSL/TLS Certificate Issues**
  Ensure certificates are up to date and properly configured. For self-signed certificates, add them to trusted
  certificates.
  [See Issues](https://github.com/cypht-org/cypht/issues?q=is%3Aissue+ssl+OR+tls+certificate)
:::
