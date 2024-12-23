---
title: Install v2
exclude: true
version: v2.x
php_versions: at least PHP 8.1
config_file: .env
steps:
    one: >
        #!/bin/bash


        # You need to check php version which should be >=8.1
        
        php --version


        # Next you need to check composer version which should be >=2.0.0

        composer --version


        # List installed PHP extensions. at least OpenSSL, mbstring and cURL should be in the list
        
        php -m
    two:
        install: >
            # Fetch latest release information

            $latest_release = Invoke-RestMethod -Uri "https://api.github.com/repos/cypht-org/cypht/releases/latest"


            # Extract tag name of the latest release

            $latest_tag = $latest_release.tag_name


            # Construct download URL for the latest release within the 2.x series

            $download_url = "https://github.com/cypht-org/cypht/archive/refs/tags/$latest_tag.zip"


            # Download the latest release

            Invoke-WebRequest -Uri $download_url -OutFile "latest_cypht_release.zip"


            # unpack the archive

            unzip latest_cypht_release.zip


            # run composer

            cd latest_cypht_release && composer install && cd ..


            # create a .env file

            cp latest_cypht_release/.env.example latest_cypht_release/.env


            # fix permissions and ownership

            find latest_cypht_release -type d -print | xargs chmod 755

            find latest_cypht_release -type f -print | xargs chmod 644

            sudo chown -R root:root latest_cypht_release


            # copy to destination folder
            
            sudo mv latest_cypht_release/* $DESTINATION
    three: >
        <p>To configure Cypht for your environment, make adjustments to the <a
            href="https://github.com/cypht-org/cypht/blob/2.x/.env.example">.env</a> file according to your
        preferences. The .env file serves as the primary configuration file.</p>

        <p>First edit the .env file to configure Cypht for your environment. If you choose to leverage a database for
            authentication, sessions, or user settings, ensure to complete the relevant sections within the .env file
            based on the information provided in the config/app.php file.</p>

        <p>The necessary SQL commands for creating tables can be found in the config/app.php file, specifically starting
            from line 617 in the "DB Sessions" section. </p>
    six:
        beforescripts: >
            # Generate necessary tables to manage users,sessions, or settings depending on the configuration in the .env file
            
            php ./scripts/setup_database.php
    eight:
        title: Other config files
        description: Some Cypht modules necessitate additional configuration files for proper setup. It is crucial that these files are NOT located within the web-server document root. Certain modules may require configuration with a service provider, particularly those related to Oauth2 client setup (such as Github, WordPress, Oauth2 over IMAP for Gmail, and Outlook). After configuring related files, there is no need to rerun the config_gen script; the changes will be automatically merged into the main configuration settings.Alternatively, you can clear your app cache. 
        configs:
            - title: Github
              description: Cypht can connect to github and aggregate notification data about repository activity.
              links:
                Example github.php file: https://github.com/cypht-org/cypht/blob/2.x/config/github.php
                Authorize an application for github: https://github.com/settings/developers
            - title: OAUTH2 over IMAP
              description: Gmail and Outlook.com support OAUTH2 authentication over IMAP. This is preferable to normal IMAP authentication because Cypht never has access to your account password.
              links:
                Example oauth2.php file: https://github.com/cypht-org/cypht/blob/2.x/config/oauth2.php
                Authorize an application for gmail: https://console.developers.google.com/project
                Authorize an application for outlook.com: https://account.live.com/developers/applications/
            - title: LDAP contacts
              description: Cypht can use an LDAP server for contacts.
              links:
                Example ldap.php file: https://github.com/cypht-org/cypht/blob/2.x/config/ldap.php
            - title: WordPress
              description: Cypht can aggregate WordPress.com notifications.
              links:
                Example wordpress.php file:  https://github.com/cypht-org/cypht/blob/2.x/config/wordpress.php
                Authorize an application for WordPress.com:  https://developer.wordpress.com/apps/
            - title: Custom themes
              description: You can create your own themes for Cypht. Edit the themes.php file to include your theme, and put the css file in modules/themes/assets.
              links:
                Example wordpress.php file: https://github.com/cypht-org/cypht/blob/2.x/config/themes.php
        
---
