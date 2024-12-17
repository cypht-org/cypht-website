---
title: Home
weight: 1
nocontainer: true
---
<section class="banner">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-sm-7">
                <div class="hero">
                    <h2>All your E-mail, from all your accounts, in one place</h2>
                    <p>Cypht (pronounced "sift") is like a news reader, but for E-mail. Cypht does
                        not replace your existing accounts - it combines them into one. And it's also a news reader.</p>
                        <div class="button_cont">
                            <a class="example_d float-right" href="/install">Install</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="as-services">
    <div class="container">
        <div class="row text-center">
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="as-services-head">
                    <h2> A standard E-mail client</h2>
                    <p> The driving force behind Cypht development is to provide combined views for multiple
                        accounts, but it's also a standard E-mail client that lets you browse and manage IMAP
                        folders and send outbound messages with SMTP </p>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="as-services-head">
                    <h2>A set of plugins</h2>
                    <p> Cypht is an application built entirely of plugins, or as we call them, module sets (which is
                        obviously way cooler sounding than plugins), that are executed by the framework. Modules
                        provide a flexible way to add new features or customize the program without hacking the code
                    </p>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="as-services-head">
                    <h2>An open source solution</h2>
                    <p> Cypht is Open Source (LGPL V2), and written in PHP and JavaScript. If you are looking for a
                        lightweight webmail solution for an ISP, school, business, or just personal use, I hope that
                        Cypht can help!</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="feature-section">
    <div class="container">
        <h2>Features</h2>
        <div class="row  ">
            <div class="col-md-4">
                <ul>
                    <li>Combined inbox, unread, sent, and flagged message views for all your E-mail accounts (and
                        RSS feeds), as well as standard E-mail client folder navigation
                    </li>
                    <li>Flexible profiles to combined IMAP accounts with SMTP accounts and setup signatures and
                        reply to details
                    </li>
                    <li>Move or copy emails from one account to another</li>
                    <li>Compose messages in plain text, HTML, or Markdown (markdown formatted messages are converted
                        to HTML before being sent)
                    </li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul>
                    <li>Search all your E-mail accounts and RSS feeds at once with a simple form</li>
                    <li>Simple interface translation system that does not use gettext or .po files, just arrays of
                        translated strings defined in PHP. Right to left languages are supported.
                    </li>
                    <li>Module sets for IMAP, SMTP, LDAP or local contacts, WordPress, Github, and lots more!
                        Check out the Modules page for a complete list.
                    </li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul>
                    <li>Sessions and user data can be stored in any PDO compatible database or flat files on the
                        server
                    </li>
                    <li>Authentication is flexible and currently supports IMAP, LDAP, an included database
                        schema, dynamic authentication using popular E-mail providers, auto-discovery based on the
                        user's E-mail domain, or you can roll your own with the site module set
                    </li>
                    <li>Sessions and Authentication can be customized without breaking any modules using the site
                        module set
                    </li>
                </ul>
            </div>
            <a style="width: 100%; text-align: center;" href="/features">the complete list</a>
        </div>
    </div>
</section>
<section class="security-section">
    <div class="container text-center">
        <h2>Have a question about security?</h2>
        <h3>Found a flaw in Cypht? </h3>
        <p> We want to hear from you! Drop by the Cypht Gitter channel. We take security seriously. Cypht is an entirely
            volunteer effort, so we can't
            afford a bounty program. We can however promise that any security issue reported to us before release
            will receive a quick response, a thorough review, a sincere thanks, and an honorable mention on this
            page. </p><a href="security.html">
        <button type="button" class="btn btn-success">Read more</button>
    </a>
    </div>
</section>
<section class="module-section">
    <div class="container text-center">
        <h2>A modular design</h2>
        <p>Instead of an application with a plugin API, Cypht is an application comprised entirely of plugins, or as
            we call them, "module sets". There is only one required set, the "core" modules. The components of any
            module set can be added to, or even replaced, by site specific modules. All the functionality of Cypht
            is broken out into module sets, and each set is built from small pieces that are also easy to override.
        </p><a href="/modules">
        <button type="button" class="btn btn-light">Read more</button>
    </a>
    </div>
</section>
