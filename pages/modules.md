---
title: Modules
weight: 20
---
<h2>Overview</h2>
<p>Cypht has a modular design. Instead of an application with a plugin API, Cypht is an application comprised
    entirely of plugins, or as we call them, "module sets". There is only one required set, the "core" modules. The
    components of any module set can be added to, or even replaced, by site specific modules. All the functionality
    of Cypht is broken out into module sets, and each set is built from small pieces that are also easy to override.
    The module system is powerful, but also a bit complex. First let's take a look at the module sets that come with
    Cypht:</p>
<hr>
<ul>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/2fa"><b>2fa</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A2fa">issues</a><br />TOTP
        based 2 factor authentication using the Google Authenticator mobile app
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/account"><b>account</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Aaccount">issues</a><br />UI
        features for admins to create accounts, and for users to update passwords (when using the built-in DB
        authentication). Functional, but could use more admin features
    </li>
    <li>
        <a href="https://github.com/cypht-org/cypht/tree/master/modules/advanced_search"><b>advanced_search</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Aadvanced_search">issues</a><br />Support
        for advanced search
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/api_login"><b>api_login</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Aapi_login">issues</a><br />Login
        using an API to provide single sign on ability
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/calendar"><b>calendar</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Acalendar">issues</a><br />Basic
        calendar.
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/contacts"><b>contacts</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Acontacts">issues</a><br />Contact
        management. Requires at least one contact backend module set to be enabled
    </li>
    <li>
        <a href="https://github.com/cypht-org/cypht/tree/master/modules/carddav_contacts"><b>carddav_contacts</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Acarddav_contacts">issues</a><br />Support
        for contacts stored in CardDav
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/local_contacts"><b>local_contacts</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Alocal_contacts">issues</a><br />Simple
        locally stored contact support
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/ldap_contacts"><b>ldap_contacts</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Aldap_contacts">issues</a><br />Support
        for contacts stored in LDAP
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/gmail_contacts"><b>gmail_contacts</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Agmail_contacts">issues</a><br />Read-only
        support for Gmail contacts with an Oauth2 enabled Gmail account
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/core"><b>core</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Acore">issues</a><br />
        Handles page layout, login/logout, and the default settings pages
    </li>
    <li><a
            href="https://github.com/cypht-org/cypht/tree/master/modules/desktop_notifications"><b>desktop_notifications</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Adesktop_notifications">issues</a><br />Desktop
        notifications for new messages
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/developer"><b>developer</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Adeveloper">issues</a><br />
        For development, provides resources and installation details. Only available in "debug mode"
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/dynamic_login"><b>dynamic_login</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Adynamic_login">issues</a><br />Allows
        user to authenticate against a list of popular mail services, or to auto-discover the services for the
        specified E-mail address
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/feeds"><b>feeds</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Afeeds">issues</a><br />
        RSS/ATOM feed support
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/github"><b>github</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Agithub">issues</a><br />
        Github repository tracking
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/hello_world"><b>hello_world</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Ahello_world">issues</a><br />
        Example module set with lots of comments
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/highlights"><b>highlights</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Ahighlights">issues</a><br />
        Color highlighting for message lists
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/history"><b>history</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Ahistory">issues</a><br />
        Simple list of messages read since login
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/idle_timer"><b>idle_timer</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Aidle_timer">issues</a><br />
        Controls idle time and automatic logout
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/imap"><b>imap</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Aimap">issues</a><br />
        IMAP E-mail account support
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/imap_folders"><b>imap_folders</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Aimap_folders">issues</a><br />
        IMAP E-mail folder management support
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/inline_message"><b>inline_message</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Ainline_message">issues</a><br />
        View messages inline in a reading pane instead of on a new page
    </li>
    <li><a href="https://github.com/cypht-org/cypht/blob/master/modules/imap/hm-jmap.php"><b>jmap</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Ajmap">issues</a><br />
        JMAP (JSON Meta Application Protocol) It uses a JSON-based structure to streamline communication and optimize
        performance. By reducing the number of network round-trips compared to traditional protocols like IMAP and SMTP,
        JMAP enhances responsiveness and reduces resource usage. With its real-time updates and simplified structure. It
        is designed to improve the user experience by providing faster, more reliable access to data, making it ideal
        for modern applications.
    </li>
    <li>
        <a
            href="https://github.com/cypht-org/cypht/tree/master/modules/keyboard_shortcuts"><b>keyboard_shortcuts</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Akeyboard_shortcuts">issues</a><br />Adds
        support for site navigation and actions using the keyboard
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/nasa"><b>nasa</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Anasa">issues</a><br />Access
        the NASA APOD API content
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/nux"><b>nux</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Anux">issues</a><br />
        Friendly new user experience. Quickly add common E-mail services, and view development updates. Needs help
        text added
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/pgp"><b>PGP</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Apgp">issues</a><br />
        Encryption using Pretty Good Privacy
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/profiles"><b>profiles</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Aprofiles">issues</a><br />
        Profiles to set reply-to, name, and signature to associated E-mail accounts
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/recaptcha"><b>recaptcha</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Arecaptcha">issues</a><br />
        Enable Recaptcha on the login form
    </li>
    <li>
        <a href="https://github.com/cypht-org/cypht/tree/master/modules/recover_settings"><b>recover_settings</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Arecover_settings">issues</a><br />
        Ability to recover user settings after an external password change
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/saved_searches"><b>saved_searches</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Asaved_searches">issues</a><br />
        Save and re-run searches easily
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/sievefilters"><b>sievefilters</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Asievefilters">issues</a><br />
        Message filtering
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/site"><b>site</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Asite">issues</a><br />
        Site specific overrides. Used to control other module sets without hacking the code
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/smtp"><b>smtp</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Asmtp">issues</a><br />
        Send outbound E-mail using SMTP servers
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/tags"><b>tags</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Atags">issues</a><br />
        Allows users to organize content effectively by utilizing tags or labels. It is designed to enhance content
        management by enabling users to assign relevant tags, facilitating easy categorization, filtering, and retrieval
        of content. The tagging feature is fully implemented, allowing for seamless interaction where users can add,
        edit, or remove tags as needed.
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/themes"><b>themes</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Athemes">issues</a><br />
        Change the UI using CSS
    </li>
    <li><a href="https://github.com/cypht-org/cypht/tree/master/modules/wordpress"><b>wordpress</b></a><a
            title="Open issues at Github" class="issue_link"
            href="https://github.com/cypht-org/cypht/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3Awordpress">issues</a><br />
        WordPress.com notifications and freshly pressed lists
    </li>
</ul>
<br />
<p> Module sets are setup in the hm3.ini file. With the exception of the core module, they can all be enabled or
    disabled independently (though module sets can rely on each other, like the nux module). When the site build
    process is run, module assignments are calculated and saved in the configuration file (so they don't need to be
    re-calculated at run-time). There is also a debug mode in which modules are activated dynamically (for the most
    part) to make development easier. </p>
<h3>File Structure</h3>
<p> Module set names in the ini file match the directory the module code is in under modules/. Files in a module
    have pre-defined names. Any other required code should be included from one of these files.
</p>
<br /><br />
<ul>
    <li><b>setup.php</b><br />This is where a module set defines it's own modules and assigns them to request
        identifiers. This file must return an array of valid input and associated types in order for the module code
        to have access to it.
    </li>
    <li><b>modules.php</b><br />This is where the actual module code lives. If you have external libraries to include
        this is a good place to do so.
    </li>
    <li><b>site.js</b><br />Optional file to include JavaScript for the module set.</li>
    <li><b>site.css</b><br />Optional file to include CSS for the module set.</li>
</ul>
<br />
<p> A module set can also include an assets sub-directory. Anything in that directory will be made availble in the
    browser. An example of this is the HTML WSIWYG editor for the smtp module set. In debug mode the module site.css
    and site.js files are included directly if they exist. In production mode combined and optionally minified
    versions are used consisting of a single js file and a single CSS file generated by the build process. Minifying
    programs can be specified in the hm3.ini file.
</p>
<h3>Input and Output</h3>
<p> There are two kinds of modules: Input processing modules called "handler modules", and output formatting modules
    called "output modules". Modules can pass data to each other, and output modules have access to all the data
    input modules create. By default, module output is immutable and can't be stepped on by other modules. Data can
    be marked writable and an "appendable" data type is also supported. The typical job of a handler module is to
    analyze user input and do some work based on it, which it then sends to the output modules. The typical job of
    an output module is to take the results of an input module and format it for the browser.
</p>
<h3>Hello World</h3>
<p> For more information, check out the "hello world" module set. It illustrates how modules work and has loads of
    comments that explain what is going on:<br/><br />
</p>
https://github.com/cypht-org/cypht/tree/master/modules/hello_world