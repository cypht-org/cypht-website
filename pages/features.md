---
title: Features
weight: 2
---
<h2>List of Features</h2>
<hr>
<ul>
    <li>
        Combined inbox, unread, sent, and flagged message views for all your E-mail accounts (and
        RSS feeds), as well as standard E-mail client folder navigation
    </li>
    <hr>
    <li>
        Flexible profiles to combine IMAP accounts with SMTP accounts and setup signatures and
        reply-to details
    </li>
    <hr>
    <li>
        Search all your E-mail accounts and RSS feeds at once with a simple form., or do complex searches across
        your accounts with the advanced search module set
    </li>
    <hr>
    <li>
        Move or copy emails from one account to another
    </li>
    <hr>
    <li>
        Compose messages in plain text, HTML, or Markdown
    </li>
    <hr>
    <li>
        Pages are comprised of only 3 HTTP requests totaling ~50KB (gzipped). Data to
        populate a page from different sources is collected with parallel AJAX
        requests. Output is validated HTML5 and local storage (session only) is used to
        cache content for speedier reloads. All the little interface icons use
        data-urls so they are served inline (and they can all be disabled). With
        standard browser caching, pages tend to transfer 10 to 20 KB
    </li>
    <hr>
    <li>
        Simple interface translation system that does not use gettext or .po files, just
        arrays of translated strings defined in PHP. Right to left languages are supported.
    </li>
    <hr>
    <li>
        Module sets for IMAP, SMTP, LDAP or local contacts, WordPress, Github,
        and lots more! Check out the <a href="modules.html">Modules</a> page for a
        complete list
    </li>
    <hr>
    <li>
        Sessions and user data can be stored in any PDO compatible database or flat
        files on the server
    </li>
    <hr>
    <li>
        Authentication is flexible and currently supports IMAP, LDAP, an included
        database schema, dynamic authentication using popular E-mail providers,
        auto-discovery based on the user's E-mail domain, or you can roll your own with
        the site module set
    </li>
    <hr>
    <li>
        Sessions and Authentication can be customized without breaking any modules using
        the site module set
    </li>
    <hr>
    <li>
        On the server, page request processing peaks at around 4-5MB of memory. The module system only includes PHP
        files required to process the
        current request, so time is not wasted parsing unused code paths
    </li>
    <hr>
    <li>
        All the work of processing a request and providing a response is done with
        module sets. The application framework manages module assignment and provides a
        controlled execution environment, but modules are where the actual work is done
    </li>
    <hr>
    <li>
        There is a build process that pre-calculates module assignments and combines
        and compresses page assets, making the production version of your site as fast
        as possible. There is also a developer mode in which individual components are
        included directly for easy debugging and module development
    </li>
    <hr>
    <li>
        The HTML5 Page structure is semantic and simple, with attention paid to
        accessibility best-practices
    </li>
    <hr>
    <li>
        Save the parameters of a search so that you can quickly access them later from
        the menu without having to enter them again. This is particularly useful for parameters of
        searches that are used frequently. Saved search parameters can also be deleted later.
    </li>
    <li>
        Sieve filters can be created to automatically move, copy, or delete messages based on specific criteria such as sender, subject, keywords, or recipient. This allows for efficient organization and management of incoming emails, saving time and improving productivity. Sieve filters can be easily edited or deleted as needed. For more information on how to create and manage Sieve filters, see <a href="email-filters.html">Email filters</a>.
    </li>
    <hr>
    <li>
        JMAP (JSON Meta Application Protocol) support for faster, more efficient synchronization of emails across devices.
    </li>
    <hr>
    <li>
        Snooze feature to temporarily hide emails and bring them back at a more convenient time.
    </li>
    <hr>
    <li>
        Screen emails to help manage unwanted or irrelevant communications by filtering or prioritizing certain types of messages.
    </li>
    <hr>
    <li>
        IMAP capabilities for sharing folders to allow collaboration by sharing email folders between accounts.
    </li>
    <hr>
    <li>
        Delivery receipt to get confirmation when your emails are delivered to the recipient's inbox.
    </li>
    <hr>
    <li>
        Support for setting and managing environment variables to customize server-side configurations.
    </li>
    <hr>
    <li>
        IMAP folder subscriptions for managing which folders you want to subscribe to and view in your mail client.
    </li>
    <hr>
    <li>
        Collected Recipients and Trusted Senders feature to track commonly contacted people and trusted email addresses for enhanced security and efficiency.
    </li>
    <hr>
    <li>
        A simpler way to show the source of an email for better understanding of its origin and security analysis.
    </li>
    <hr>
    <li>
        Tags/Labels support to organize and categorize emails easily for better management and quick access to relevant content.
    </li>
    <hr>
    <li>
        Exchange Web Services (EWS) support is in development. For more details and updates, check out the progress <a href="https://github.com/cypht-org/cypht/pull/1278">here</a>.
    </li>
</ul>
<hr>
