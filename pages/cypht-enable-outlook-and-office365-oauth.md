---
title: Outlook and Office365 OAuth
h1: false
exclude: true
nocontainer: true
---
<div style="margin-top: 90px;"></div>
<main>
    <section class="security-section" style="padding-top:50px">
        <div class="container text-center">
            <h1>Outlook and Office365 OAuth in cypht</h1>
            <p>Welcome to the documentation allowing you to enable Outlook and Office365 authentication in cypht.</p>
        </div>
    </section>
    <section class="content-section-doc container">
        <div class="line">
            <div  class="element1 item ">
                <img src="/img/outlook-and-office365-oauth-screen/outlook-and-office365-oauth-section-01.png" alt="outlook-and-office365-oauth-screen">
            </div>
            <div  class="element2 item ">
                <h2>1. Go to the Azure portal</h2>
                <ul>
                    <li>Go to <a href="https://portal.azure.com/#home">Azure portal</a></li>
                    <li>Sign in with your Outlook Account (the one associated with your app).</li>
                </ul>
                <h2>2. Create or select a application</h2>
                <ul>
                    <li>In the search bar at the top of the portal, type "Application registrations" and select the corresponding service.</li>
                    <li>If you already have a application, select it from the list.</li>
                    <li>
                        If you don't have a application yet, click on "+ New registration" and give it a name:<br>
                        <i>Give a name to your application and configure the account type support options and redirect URIs if necessary, then click on 'Register'.</i>
                    </li>
                    
                </ul>
            </div>
        </div>
    </section>
    
    <section class="content-section-doc container" id="get-client-id">
        <div class="line">
            <div  class="element1 item ">
                <img src="/img/outlook-and-office365-oauth-screen/outlook-and-office365-oauth-section-02.png" alt="outlook-and-office365-oauth-screen">
            </div>
            <div  class="element2 item ">
                <h2>3. Get the client ID (application ID):</h2>
                <ul>
                    <li>Once the application is registered or selected, you will be redirected to the application's 'Overview' page.</li>
                    <li>The application (client) ID is displayed on this page. It is your client ID. Note it down.</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="content-section-doc container">
        <div class="line">
            <div  class="element1 item ">
                <img src="/img/outlook-and-office365-oauth-screen/outlook-and-office365-oauth-section-03.png" alt="outlook-and-office365-oauth-screen">
            </div>
            <div  class="element2 item ">
                <h2>4. Create the client secret key</h2>
                <ul>
                    <li>In the left menu of your application page, under 'Manage', select 'Certificates & secrets'.</li>
                    <li>Under the 'Client secrets' section, click on '+ New client secret.'</li>
                    <li>Add a description for your secret and choose a validity period (for example, 1 year, 2 years, or 'Never' - although 'Never' is not recommended for security reasons).</li>
                    <li>Click on "Add."</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="content-section-doc container">
        <div class="line">
            <div  class="element1 item ">
                <h2>5. Copy the value of the client secret key</h2>
                <p>Once the secret key is created, its value is displayed. This is your client secret key.</p>
                <p>It is crucial to copy this value immediately, as it will no longer be visible after leaving this page. If you do not copy it, you will need to generate a new secret key later.</p>
                <ul>
                    <li>ID client(1) (OUTLOOK_CLIENT_ID or OFFICE365_CLIENT_ID). <a href="#get-client-id">get here</a></li>
                    <li>Client secret (2)(OUTLOOK_CLIENT_SECRET or OFFICE365_CLIENT_SECRET).</li>
                </ul>
                <p>Once you already have your credentials, go to the ".env" file at the root of the cypht project, then look for "OUTLOOK_CLIENT_ID or OFFICE365_CLIENT_ID" where you will put the number 1 and "OUTLOOK_CLIENT_SECRET or OFFICE365_CLIENT_SECRET" where you will put the number 2.</p>
                       
                <p>Now your configuration is done.</p>        
            </div>
            <div  class="element2 item ">
                <img src="/img/outlook-and-office365-oauth-screen/outlook-and-office365-oauth-section-04.png" alt="outlook-and-office365-oauth-screen">
            </div>
        </div>
    </section>
</main>