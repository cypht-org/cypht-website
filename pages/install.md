---
title: Install
exclude: true
---
<h2>Install Cypht</h2>
<p>Cypht has four differents installation ways:</p>
<ul>
    <li>Manual installation</li>
    <li>Installation within Tiki</li>
    <li>install using Docker (use cypht docker image)</li>
    <li>Install cypht on a YunoHost server</li>
</ul>
<p>Please read the bellow explanations about each way and pick one of your choice.</p>
<hr>
<h2>1. Manual installation</h2>
<h2>Requirements</h2>
<p>Cypht master requires at least PHP 8.11,
    <a href="https://getcomposer.org/">Composer 2</a>,
    and at minimum the
    <a href="http://php.net/manual/en/book.openssl.php">OpenSSL</a>,
    <a href="http://php.net/manual/en/book.mbstring.php">mbstring</a> and
    <a href="http://php.net/manual/en/book.curl.php">cURL</a> extensions.
    Cypht can also leverage several other extensions as defined in
    <a href="https://github.com/cypht-org/cypht/blob/master/composer.json#L37-L44">composer.json</a>.
    Testing is done on <a href="https://www.debian.org/">Debian</a>
    and <a href="http://www.ubuntu.com/">Ubuntu</a> platforms with
    <a href="http://nginx.com/">Nginx</a> and
    <a href="http://httpd.apache.org/">Apache</a>.
</p>
<p>Before proceeding please make sure your system meets minimal requirements</p>

<h2>Steps</h2>
<h4>1. Check minimum requirements</h4>
<p>
</p>
<pre><code>#!/bin/bash

# You need to check php version which should be &gt;=8.1
php --version

# Next you need to check composer version which should be &gt;=2.0.0
composer --version

# List installed PHP extensions. at least OpenSSL, mbstring and cURL should be in the list
php -m
</code></pre>
<p></p>
<h4>2. Download and prepare the code</h4>
<p>It's important to consider where you put the Cypht source.
    The web-server will need read-only access to it, and
    moving it from one place to another requires re-running the configuration script. Do NOT put the source in
    the
    document root as this could create a security risk. On Debian, it's common to use the /usr/local/share/
    sub-directory for a situation like this. Here is short bash script that will download the latest code, setup
    the
    correct permissions and ownership, put the source in /usr/local/share/cypht, and create a default .env file.
    It requires sudo access:
</p>
<pre><code>
#!/bin/bash

# this is where Cypht will be installed
DESTINATION="/usr/local/share/cypht"

# validate the destination directory
sudo test -r $DESTINATION -a -x $DESTINATION
if [ $? -ne 0 ]; then
    sudo mkdir $DESTINATION
fi

# create working directory
mkdir cypht-temp
cd cypht-temp

# grab latest code
wget https://github.com/cypht-org/cypht/archive/master.zip

# unpack the archive
unzip master.zip

# run composer
cd cypht-master &amp;&amp; composer install &amp;&amp; cd ..

# create a vanilla ini file
cp cypht-master/.env.example.ini cypht-master/.env

# fix permissions and ownership
find cypht-master -type d -print | xargs chmod 755
find cypht-master -type f -print | xargs chmod 644
sudo chown -R root:root cypht-master

# copy to destination folder
sudo mv cypht-master/* $DESTINATION


# remove working directory
cd ..
sudo rm -rf cypht-temp
</code></pre>
<h4>3. Configure the program</h4>

<p>To configure Cypht for your environment, make adjustments to the <a
        href="https://github.com/cypht-org/cypht/blob/master/.env.example">.env</a> file according to your
    preferences. The .env file serves as the primary configuration file.</p>
<p>First edit the .env file to configure Cypht for your environment. If you choose to leverage a database for
    authentication, sessions, or user settings, ensure to complete the relevant sections within the .env file
    based on the information provided in the config/app.php file.</p>
<p>The necessary SQL commands for creating tables can be found in the config/app.php file, specifically starting
    from line 617 in the "DB Sessions" section. </p>


<p>Cypht needs read, and read-write access to a few directories on the server. For security reasons these should
    NOT be inside the web-server document root. A good place for these is under the /var/lib/ sub-directory.
    Here are the commands To create the required directories per the default values in the ini file (assuming
    your web-server software runs as the "www-data" user).</p>

<pre><code>sudo mkdir /var/lib/hm3
sudo mkdir /var/lib/hm3/attachments
sudo mkdir /var/lib/hm3/users
sudo mkdir /var/lib/hm3/app_data

sudo chown -R www-data /var/lib/hm3/
</code></pre>
<p>The "/var/lib/hm3/users" directory is only required if you are using the file-system and not a database to
    store
    user settings (user_config_type = file in the .env). You can put these directories anywhere, just make sure
    the values in the ini file point to the right place.
</p>
<h4>4. Generate the run-time configuration</h4>
<p>Cypht uses a build process to create an optimized configuration, and to combine and minimize page assets.
    Once
    you have edited your .env file, generate the configuration with:</p>

<pre><code>
cd /usr/local/share/cypht  (or wherever you put the code in section 1)
sudo php ./scripts/config_gen.php
    </code></pre>

<p>This will create a sub-directory called site that contains the code and page assets that need to be inside
    the
    document root, and it creates an optimized configuration file called hm3.rc in the current directory.
    Anytime
    you change the ini file settings, or move the source location, you will need to re-run the config_gen script
    to
    update the program.</p>


<h4>5. Enable the program in your web-server</h4>
<p>The easiest way to serve Cypht is to symlink it to the web-server document root. You can also copy the
    generated
    files to your web-server location, but then you will need to re-copy them anytime the config_gen script is
    run.
    If the source is located at /usr/local/share/cypht, and the web-server document root is at /var/www/html,
    the
    following command will make Cypht available under the "mail" path of the
    web-server:</p>

<pre><code>
sudo ln -s /usr/local/share/cypht/site /var/www/html/mail
    </code></pre>

<p>Now going to https://your-server/mail/ should load the Cypht login page. Note that If you use a symlink, your
    web-server must be configured to follow symlinks.</p>
<h4>6. Users</h4>
<p>Setting up users depends on what type of authentication you configure in the .env file. If you are using the
    local database configuration for users, there are scripts in the scripts/ directory to help manage them:
</p>
<pre><code>
# Generate necessary tables to manage users,sessions, or settings depending on the configuration in the .env file
php ./scripts/setup_database.php

# create an account
php ./scripts/create_account.php username password

# delete an account
php ./scripts/delete_account.php username

# change an account password
php ./scripts/update_password.php username password
</code></pre>
<p></p>
<h4>7. Debug mode</h4>
<p>Cypht has a debug or developer mode that can be used to troubleshoot problems or enable faster development of
    modules. To enable the debug version of Cypht, just sym-link the entire source directory instead of the site
    sub-directory:</p>

<pre>sudo ln -s /usr/local/share/cypht /var/www/html/mail-debug</pre>

<p>Debug mode is not as efficient as the normal version, and it is NOT designed to be secure. DO NOT RUN DEBUG
    MODE
    IN PRODUCTION. You have been warned! Debug mode outputs lots of information to the PHP error log that can be
    useful for trouble-shooting problems. The location of the error log varies based on your php.ini settings
    and
    web-server software.</p>
<h4>8. Other config files</h4>
<p>Some Cypht modules necessitate additional configuration files for proper setup. It is crucial that these files are
    NOT located within the web-server document root. Certain modules may require configuration with a service provider,
    particularly those related to Oauth2 client setup (such as Github, WordPress, Oauth2 over IMAP for Gmail, and
    Outlook). After configuring related files, there is no need to rerun the config_gen script; the changes will be
    automatically merged into the main configuration settings.Alternatively, you can clear your app cache.</p>
<ul>
    <li>
        <b>Github</b>
        <p>
            Cypht can connect to github and aggregate notification data about repository activity.
            <br><br>
            Example github.php file:<br>
            <a
                href="https://github.com/cypht-org/cypht/blob/master/config/github.php">https://github.com/cypht-org/cypht/blob/master/config/github.php</a>
            <br><br>
            Authorize an application for github:<br>
            <a href="https://github.com/settings/developers">https://github.com/settings/developers</a>
        </p>
    </li>
    <li>
        <b>OAUTH2 over IMAP</b>
        <p>
            Gmail and Outlook.com support OAUTH2 authentication over IMAP. This is preferable to normal IMAP
            authentication because Cypht never has access to your account password.
            <br><br>
            Example oauth2.php file:<br>
            <a
                href="https://github.com/cypht-org/cypht/blob/master/config/oauth2.php">https://github.com/cypht-org/cypht/blob/master/config/oauth2.php</a>
            <br><br>
            Authorize an application for gmail:<br>
            <a href="https://console.developers.google.com/project">https://console.developers.google.com/project</a>
            <br><br>
            Authorize an application for outlook.com:<br>
            <a
                href="https://account.live.com/developers/applications/">https://account.live.com/developers/applications/</a>
        </p>
    </li>
    <li>
        <b>LDAP contacts</b>
        <p>
            Cypht can use an LDAP server for contacts.
            <br><br>
            Example ldap.php file:<br>
            <a
                href="https://github.com/cypht-org/cypht/blob/master/config/ldap.php">https://github.com/cypht-org/cypht/blob/master/config/ldap.php</a>
        </p>
    </li>
    <li>
        <b>WordPress</b>
        <p>
            Cypht can aggregate WordPress.com notifications.
            <br><br>
            Example wordpress.php file:<br>
            <a
                href="https://github.com/cypht-org/cypht/blob/master/config/wordpress.php">https://github.com/cypht-org/cypht/blob/master/config/wordpress.php</a>
            <br><br>
            Authorize an application for WordPress.com:<br>
            <a href="https://developer.wordpress.com/apps/">https://developer.wordpress.com/apps/</a>
        </p>
    </li>
    <li>
        <b>Custom themes</b>
        <p>
            You can create your own themes for Cypht. Edit the themes.php file to include your theme, and put the css
            file in modules/themes/assets.
            <br><br>
            Example wordpress.php file:<br>
            <a
                href="https://github.com/cypht-org/cypht/blob/master/config/themes.php">https://github.com/cypht-org/cypht/blob/master/config/themes.php</a>
        </p>
    </li>
</ul>

<h2>2. Install cypht using Docker</h2>
<p>
    Using Docker is one of the easiest way to install cypht as the cypht docker image comes with all the steps
    required in the manual instalation done for you. But the bad news is that this installation way requires
    docker knowledge.<br>
    Here is the cypht docker repository: <a
        href="https://hub.docker.com/r/cypht/cypht">https://hub.docker.com/r/cypht/cypht</a><br>
    To run containers required by cypht, please, first make sure you have docker and docker-compose installed on
    your system, then take a look on the section "example docker-compose" of repository overview, then do the
    following:
</p>
<ul>
    <li>Create a new directory on your system named as you want.</li>
    <li>In the directory created previously, create a file named "docker-compose.yaml" then copy and paste the
        content of <a href="https://github.com/cypht-org/cypht/blob/master/docker/docker-compose.yaml">the example
            docker-compose file</a> in the created file or just download the example docker-compose file in the
        previously created directory.</li>
    <li>Open your CLI/terminal and move to the directory containing the docker-compose file and run the command
        to run containers
        <pre>docker-compose up -d</pre>
    </li>
    <li>After containers started, you can access cypht on port 80 of your host if you didn't change the port
        value in the docker-compose file.</li>
</ul>
<p>
    NOTE: Please change usernames and passwords before using the given docker-compose code in your production
    environment.
</p>

<h2>3. Install Cypht on a YunoHost server</h2>
<p>This is an other easy way of installing and use Cypht.<br>
    YunoHost is an operating system that aims to simplify server administration as much as possible to
    democratize self-hosting while remaining reliable,
    secure, ethical and lightweight. It is a free software project owned exclusively by volunteers. Technically,
    it can be seen as a distribution based on
    Debian GNU/Linux and can be installed on many types of hardware.<br>
    To learn more about YunoHost, visit <a
        href="https://yunohost.org/en/whatsyunohost">https://yunohost.org/en/whatsyunohost</a>
</p>
<p>To install Cypht on YunoHost, please follow these steps:</p>
<ul>
    <li>If you don't have an installed YunoHost server, please consult <a href="https://yunohost.org/#/install">the
            guide</a> to learn how to install it. If you have it,
        please go directly to the next step.</li>
    <li>If you just installed YunoHost or had it installed before, access your server and go to the admin
        dashboard, then click on "Applications"</li>
    <li>In the next page, click on the "install" button</li>
    <li>In the search area, enter "cypht"</li>
    <li>In the search result, click on cypht app</li>
    <li>Scroll down, then fill in the form according to your need or keep the default values, then clik on the
        "install" button. Note: Make sure the url value is not
        used by another app on the server or in case you have another cypht instance previously installed you
        have to modify it instead of using the default valuue.
    </li>
    <li>Once clicked on the "install" button, wait for the installation to complete, it may take while.</li>
    <li>Once the installation completed, you will be taking back to the dashboard.</li>
    <li>To open the app, click on the app recently installed and then on the "open the app" button, then the
        application opens in a new tab.</li>
    <li>Enter the username and admin password you've provided previously in the installation form and then click
        on the login button to enter cypht and start configuring your email accounts.</li>
</ul>
<h2>4. Install Cypht within Tiki</h2>
<p>If you have tiki installed, you can use Cypht within tiki. This is an easy way of installing Cypht.<br>
    Please follow the following link for a complete guide of how to install and use cypht within Tiki.<br>
    <a href="https://doc.tiki.org/Webmail">https://doc.tiki.org/Webmail</a>
</p><br>
<h4>Having problems?</h4>
We are happy to help trouble-shoot any installation issues you run into. Chat with us at Gitter <a
    href="https://gitter.im/cypht-org/community">Cypht at Gitter</a> and We'll get back to you as soon as we can.
