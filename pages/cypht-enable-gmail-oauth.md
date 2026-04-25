---
title: Gmail OAuth
h1: false
exclude: true
nocontainer: true
---

<div style="margin-top: 100px;"></div>
<main>
    <section class="security-section" style="padding-top:50px">
        <div class="container text-center">
            <h1>Google OAuth in Cypht</h1>
            <p>Follow this guide to enable Google authentication for your Cypht installation.</p>
        </div>
    </section>
    <section class="content-section-doc container">
        <div class="line">
            <div  class="element1 item ">
                <img src="/img/google-oauth-screen/google-oauth-1.png" alt="Google OAuth setup step 1" width="1791" height="1128" loading="lazy" decoding="async">
            </div>
            <div  class="element2 item ">
                <h2>1. Open the Google Cloud Console</h2>
                <ul>
                    <li>Visit the <a href="https://console.cloud.google.com/">Google Cloud Console</a>.</li>
                    <li>Sign in with the Google Account that manages your application.</li>
                </ul>
                <h2>2. Create or select a project</h2>
                <ul>
                    <li>If you do not already have a project, choose <strong>Create Project</strong> and provide a name.</li>
                    <li>If a project exists, select it from the project list.</li>
                </ul>
            </div>
        </div>
    </section>
    
    <section class="content-section-doc container">
        <div class="line">
            <div  class="element1 item ">
                <img src="/img/google-oauth-screen/google-oauth-2.png" alt="Google OAuth setup step 2" width="1791" height="1128" loading="lazy" decoding="async">
            </div>
            <div  class="element2 item ">
                <h2>3. Configure the OAuth consent screen</h2>
                <ul>
                    <li>Navigate to <strong>APIs &amp; Services</strong> &gt; <strong>OAuth consent screen</strong>.</li>
                    <li>
                        Provide the required information:
                        <ul>
                            <li>Select the application type (<strong>External</strong> or <strong>Internal</strong>, depending on your needs).</li>
                            <li>Enter the application name that will be displayed to users.</li>
                            <li>Provide support and administrative contact email addresses.</li>
                            <li>Add your authorized domains (for example, <code>yourdomain.com</code> or <code>localhost</code> for development).</li>
                            <li>Include a privacy policy URL if you have one.</li>
                            <li>Save your changes and continue.</li>
                        </ul>
                    </li>
                </ul>
                <h2>4. Add test users (Test mode)</h2>
                <ul>
                    <li>Within the same <strong>OAuth consent screen</strong>, open the <strong>Test users</strong> tab.</li>
                    <li>Select <strong>Add users</strong>.</li>
                    <li>Enter the email addresses that should be allowed to access the application during testing.</li>
                    <li>Confirm to display the list of authorized test accounts.</li>
                </ul>
                <p><strong>Note:</strong> Any email address not listed here will be blocked from signing in while the application remains in test mode.</p>  
            </div>
        </div>
    </section>
    <section class="content-section-doc container">
        <div class="line">
            <div  class="element1 item ">
                <img src="/img/google-oauth-screen/google-oauth-2.png" alt="Google OAuth setup step 2" width="1791" height="1128" loading="lazy" decoding="async">
            </div>
            <div  class="element2 item ">
                <h2>5. Create OAuth credentials</h2>
                <ul>
                    <li>Return to <strong>APIs &amp; Services</strong> and choose <strong>Credentials</strong>.</li>
                    <li>Select <strong>Create credentials</strong> &gt; <strong>OAuth client ID</strong>.</li>
                    <li>Set the application type to <strong>Web application</strong>.</li>
                    <li>
                        Complete the form:
                        <ul>
                            <li>Name the client (e.g., “Cypht – Gmail Authentication”).</li>
                            <li>
                                Define the authorized redirect URIs:
                                <ul>
                                <li>Development: <code>http://localhost:3000/auth/google/callback</code> (adjust the port as needed).</li>
                                <li>Production: <code>https://yourdomain.com/auth/google/callback</code>.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Click <strong>Create</strong>.</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="content-section-doc container">
        <div class="line">
            <div  class="element1 item ">
                <h2>6. Retrieve your GMAIL_CLIENT_ID and GMAIL_CLIENT_SECRET</h2>
                <p>After the client is created, Google displays the credentials:</p>
                <ul>
                    <li>Client ID (1) — this becomes your <code>GMAIL_CLIENT_ID</code>.</li>
                    <li>Client secret (2) — this becomes your <code>GMAIL_CLIENT_SECRET</code>.</li>
                </ul>
                <p>Open the <code>.env</code> file at the root of your Cypht project and update the following variables with these values:</p>
                <ul>
                    <li><code>GMAIL_CLIENT_ID=&lt;client-id&gt;</code></li>
                    <li><code>GMAIL_CLIENT_SECRET=&lt;client-secret&gt;</code></li>
                </ul>
                <p>Your configuration is now complete.</p>        
            </div>
            <div  class="element2 item ">
                <img src="/img/google-oauth-screen/google-oauth-4.png" alt="Google OAuth setup step 4" width="1791" height="1128" loading="lazy" decoding="async">
            </div>
        </div>
    </section>
</main>
