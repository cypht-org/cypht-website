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
            <h1>Google OAuth in cypht</h1>
            <p>Welcome to the documentation allowing you to enable google authentication in cypht.</p>
        </div>
    </section>
    <section class="content-section-doc container">
        <div class="line">
            <div  class="element1 item ">
                <img src="/img/google-oauth-screen/google-oauth-1.png" alt="google-oauth-screen">
            </div>
            <div  class="element2 item ">
                <h2>1. Go to the Google Cloud Console</h2>
                <ul>
                    <li>Go to <a href="https://console.cloud.google.com/">Google Cloud Console</a></li>
                    <li>Sign in with your Google Account (the one associated with your app).</li>
                </ul>
                <h2>2. Create or select a project</h2>
                <ul>
                    <li>If you don't have a project yet, click on "Create Project" and give it a name</li>
                    <li>If you already have a project, select it from the list.</li>
                </ul>
            </div>
        </div>
    </section>
    
    <section class="content-section-doc container">
        <div class="line">
            <div  class="element1 item ">
                <img src="/img/google-oauth-screen/google-oauth-2.png" alt="google-oauth-screen">
            </div>
            <div  class="element2 item ">
                <h2>3. Set up the OAuth consent screen</h2>
                <ul>
                    <li>Go to "APIs and Services" > "OAuth Consent Screen".</li>
                    <li>
                        Fill in the required information :
                        <ul>
                            <li>Select the type of application (External or Internal depending on your case).</li>
                            <li>Application Name(visible to users).</li>
                            <li>Support email and administrative contact email.</li>
                            <li>Allowed domains (add your domain, e.g. votresite.com or localhost for development).</li>
                            <li>Privacy policy URL (if available).</li>
                            <li>Save and proceed to the next step.</li>
                        </ul>
                    </li>
                </ul>
                <h2>4. Since we are in Test mode, still in "API and Services" > "OAuth consent screen"</h2>
                <ul>
                    <li>Go to Audiance(1)</li>
                    <li>Add users(2)</li>
                    <li>Enter the addresses that will have access to the app(3)</li>
                    <li>Then the list(4) will be displayed</li>
                </ul>
                <p>NB : if you don't add the address, when you try to connect in cypht, you won't have access, google will return an error.</p>  
            </div>
        </div>
    </section>
    <section class="content-section-doc container">
        <div class="line">
            <div  class="element1 item ">
                <img src="/img/google-oauth-screen/google-oauth-2.png" alt="google-oauth-screen">
            </div>
            <div  class="element2 item ">
                <h2>5. Create OAuth credentials</h2>
                <ul>
                    <li>Go to "APIs and Services" > "Credentials"</li>
                    <li>Click on "Create credentials" > "OAuth client ID".</li>
                    <li>Choose the type of application: Web application.</li>
                    <li>
                        Fill in the fields :
                        <ul>
                            <li>Name (e.g. "My App - Gmail Authentication").</li>
                            <li>
                                Allowed redirect URI :
                                <ul>
                                <li>For development: http://localhost:3000/auth/google/callback (adjust the port according to your app).</li>
                                <li>For production: https://yourdomaine.com/auth/google/callback.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Click "Create".</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="content-section-doc container">
        <div class="line">
            <div  class="element1 item ">
                <h2>6. Get your GMAIL_CLIENT_ID and GMAIL_CLIENT_SECRET</h2>
                <p>After creation, Google will display</p>
                <ul>
                    <li>ID client(1) (GMAIL_CLIENT_ID).</li>
                    <li>Client secret (2)(GMAIL_CLIENT_SECRET).</li>
                </ul>
                <p>Once you already have your credentials, go to the ".env" file at the root of the cypht project, then look for "GMAIL_CLIENT_ID" where you will put the number 1 and "GMAIL_CLIENT_SECRET" where you will put the number 2.</p>
                       
                <p>Now your configuration is done.</p>        
            </div>
            <div  class="element2 item ">
                <img src="/img/google-oauth-screen/google-oauth-4.png" alt="google-oauth-screen">
            </div>
        </div>
    </section>
</main>