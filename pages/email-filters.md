---
title: Email filters
exclude: true
---
<h2>Email filters</h2>
<p>Cypht now supports Sieve, a powerful email filtering language that gives you complete control over your inbox. With
    Sieve, you can create complex filters to sort, move, delete, and flag your emails automatically. You can also use
    Sieve to create custom notifications and alerts.</p>
<p>One key feature of Sieve is that filters run server-side, so they work even when you are not currently logged in.
    However, it is important to note that your email server must support Sieve for these filters to function properly.</p>
<p>Here are just a few of the things you can do with Sieve:</p>
<hr>
<ul class="line-between">
    <li>
        Filter out spam and unwanted emails. Sieve filters can be used to filter out spam and unwanted emails based on
        their sender, subject, or content.
    </li>
    <li>
        Organize your inbox automatically. Sieve filters can be used to automatically move or copy your emails into
        different folders based on their sender, subject, or content.
    </li>
    <li>
        Forward important emails to specific people. Sieve filters can be used to automatically forward important emails
        to specific people, such as your manager or your assistant.
    </li>
    <li>
        Sieve filters can be used to create custom notifications and alerts for important emails, such as those from
        your boss or clients. Unlike simply forwarding the email, these notifications and alerts can provide immediate
        and specific information, ensuring you stay updated without needing to sift through your inbox.
    </li>
</ul>
<p>To get started with Sieve in Cypht, simply go to your config file (hm3.ini for Cypht 1.4.x or .env for Cypht 2.0.x)
    and enable the Sieve filter engine by enabling modules[ ]=sievefilters or by adding sievefilters on CYPHT_MODULES
    variable like:</p>
<pre>modules[]=sievefilters #For Cypht 1.4.x
CYPHT_MODULES="sievefilters" #For Cypht 2.0.x</pre>
Once you have enabled the Sieve filter engine, you can create and manage your filters in the Filters section of the
Cypht interface. You can create new filters, edit existing filters, and delete filters as needed.
<h3>How to create a Sieve filter in Cypht?</h3>
<p>
    To create a Sieve filter in Cypht follow these steps:
</p>

<ul>
    <li>
        Go to <b>Settings</b> tab in the sidebar.<br />Then click on <b>Filters</b> tab, select the E-mail account you
        want for filters and click on the "Add Filter" button.
    </li>
    <li>
        In the "Filter name" field, enter a name for your new filter. Then, provide other details of the filter:<br>
        <ul>
            <li><b>Priority</b>: It defines an order value (or priority value) for your filter. Note that filters will
                run from the lowest to the highest priority value.</li>
            <li><b>Test</b>: This will help to combine two or more conditions.</li>
        </ul>
    </li>
    <li>
        In the "Conditions section", <br>
        you can add one or many conditions to your filter. You can add conditions based on the sender, subject, body,
        etc. Check out the <a href="/documentation">documentation</a> page for other information.
    </li>
</ul>
<p>
    And there you go: 😄Enjoy filters with Cypht.
</p>
<h3>Creating custom notifications and alerts:
</h3>
<p>You can also use Sieve to create custom notifications and alerts for important emails. For example, you could create
    a filter that sends you a notification every time you receive an email from your boss.
    To create a custom notification or alert in Cypht, simply go to your settings and click on the "Filters" tab. Then,
    select the E-mail account you want for filters and click on the "Add Script" button.
    In the "Filter name" field, enter a name for your new filter. In the "Filter script" field, enter your Sieve code.
    In addition to the Sieve code for filtering emails, you will also need to add the following code to your filter
    script:
</p>
<pre>require ["fileinto", "imap4flags", "notify"];

# Set variables
set "boss_email" "boss@example.com";

# Rule to match emails from your boss
if address :is "from" "${boss_email}" {
    # Notify you of the new email
    notify :message "You have a new email from your boss!" :options ["Important"] :method "mailto:your-email@example.com";
}</pre>
<h3>Some examples of Sieve filters:
</h3>
<p>The following are some examples of Sieve filters that you can use in Cypht:</p>
<pre>
# Filter out spam and unwanted emails
require ["fileinto"];

# Move all emails from the sender "spam@example.com" to the "Spam" folder
if address :from "spam@example.com" {
    fileinto "Spam";
}
</pre>
<pre>
# Organize your inbox automatically
require ["fileinto"];
# Move all emails from the sender "john.doe@example.com" to the "Work" folder
if address :from "john.doe@example.com" {
    fileinto "Work";
}
# Move all emails with the subject "Important" to the "Important" folder
if header :subject "Important" {
  fileinto "Important";
}
</pre>
<h3>Related links:</h3>

- http://sieve.info/
- https://p5r.uk/blog/2011/sieve-tutorial.html
- https://www.fastmail.com/help/technical/sieve.html
- https://docs.gandi.net/en/gandimail/sieve/sieve_tutorial.html
