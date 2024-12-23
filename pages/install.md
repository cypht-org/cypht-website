---
title: Install
exclude: true
version: master
docker: https://hub.docker.com/r/cypht/cypht
php_versions: at least PHP 8.11
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
            # grab latest code

            wget https://github.com/cypht-org/cypht/archive/master.zip


            # unpack the archive

            unzip master.zip


            # run composer

            cd cypht-master && composer install && cd ..


            # create a vanilla ini file

            cp cypht-master/.env.example.ini cypht-master/.env


            # fix permissions and ownership

            find cypht-master -type d -print | xargs chmod 755

            find cypht-master -type f -print | xargs chmod 644

            sudo chown -R root:root cypht-master


            # copy to destination folder
            
            sudo mv cypht-master/* $DESTINATION
    three: >
        <p>To configure Cypht for your environment, make adjustments to the <a
            href="https://github.com/cypht-org/cypht/blob/master/.env.example">.env</a> file according to your
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
                Example github.php file: https://github.com/cypht-org/cypht/blob/master/config/github.php
                Authorize an application for github: https://github.com/settings/developers
            - title: OAUTH2 over IMAP
              description: Gmail and Outlook.com support OAUTH2 authentication over IMAP. This is preferable to normal IMAP authentication because Cypht never has access to your account password.
              links:
                Example oauth2.php file: https://github.com/cypht-org/cypht/blob/master/config/oauth2.php
                Authorize an application for gmail: https://console.developers.google.com/project
                Authorize an application for outlook.com: https://account.live.com/developers/applications/
            - title: LDAP contacts
              description: Cypht can use an LDAP server for contacts.
              links:
                Example ldap.php file: https://github.com/cypht-org/cypht/blob/master/config/ldap.php
            - title: WordPress
              description: Cypht can aggregate WordPress.com notifications.
              links:
                Example wordpress.php file:  https://github.com/cypht-org/cypht/blob/master/config/wordpress.php
                Authorize an application for WordPress.com:  https://developer.wordpress.com/apps/
            - title: Custom themes
              description: You can create your own themes for Cypht. Edit the themes.php file to include your theme, and put the css file in modules/themes/assets.
              links:
                Example wordpress.php file: https://github.com/cypht-org/cypht/blob/master/config/themes.php
    docker_compose: <a href="https://github.com/cypht-org/cypht/blob/master/docker/docker-compose.yaml">the example docker-compose file</a> in the created file or just download the example docker-compose file in the previously created directory.
---
