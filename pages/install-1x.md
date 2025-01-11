---
title: Install v1
exclude: true
version: v1.4.x
docker: https://hub.docker.com/r/sailfrog/cypht-docker
php_versions: PHP 5.6 or 7.0 or 7.1 or 7.2 or 7.3 or 7.4 (for PHP 8.1+, please use Cypht 2.1+)
config_file: hm3.ini
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

            wget https://github.com/cypht-org/cypht/archive/1.4.x.zip


            # unpack the archive

            unzip 1.4.x.zip


            # run composer

            cd cypht-1.4.x && composer install && cd ..


            # create a vanilla ini file
            
            cp cypht-1.4.x/hm3.sample.ini cypht-1.4.x/hm3.ini


            # fix permissions and ownership

            find cypht-1.4.x -type d -print | xargs chmod 755

            find cypht-1.4.x -type f -print | xargs chmod 644

            sudo chown -R root:root cypht-1.4.x


            # copy to destination folder
            
            sudo mv cypht-1.4.x/* $DESTINATION
    three: ""
    eight:
        title: Other INI files
        description: Some Cypht modules require additional ini files to be configured. These should NOT be inside the web-server document root. Cypht will look for them in the location defined by "app_data_dir" in the hm3.ini file. A sample ini file for each module set that requires one is included in the source for that module. To configure them you must copy the sample ini file to the "app_data_dir" and edit it for your setup. Some of these require configuring your service with a provider, specifically ones related to Oauth2 client setup (Github, WordPress, Oauth2 over IMAP for Gmail and Outlook). Re-run the config_gen script after configuring an ini file and it will be merged into the main configuration settings.
        configs:
            - title: Github
              description: Cypht can connect to github and aggregate notification data about repository activity.
              links:
                Example github.ini file:  https://github.com/cypht-org/cypht/blob/1.4.x/modules/github/github.ini
                Authorize an application for github:  https://github.com/settings/developers
            - title: OAUTH2 over IMAP
              description: Gmail and Outlook.com support OAUTH2 authentication over IMAP. This is preferable to normal IMAP authentication because Cypht never has access to your account password.
              links:
                Example oauth2 ini file:  https://github.com/cypht-org/cypht/blob/1.4.x/modules/imap/oauth2.ini
                Authorize an application for gmail:  https://console.developers.google.com/project
                Authorize an application for outlook.com:  https://account.live.com/developers/applications/
            - title: LDAP contacts
              description: Cypht can use an LDAP server for contacts.
              links:
                 Example ldap.ini file: https://github.com/cypht-org/cypht/blob/1.4.x/modules/ldap_contacts/ldap.ini
            - title: WordPress
              description: Cypht can aggregate WordPress.com notifications.
              links:
                Example wordpress.ini file:  https://github.com/cypht-org/cypht/blob/1.4.x/modules/wordpress/wordpress.ini
                Authorize an application for WordPress.com:  https://developer.wordpress.com/apps/
            - title: Custom themes 
              description: You can create your own themes for Cypht. Edit the themes.ini file to include your theme, and put the css file in modules/themes/assets.
              links:
                Example themes.ini file: https://github.com/cypht-org/cypht/blob/1.4.x/modules/themes/themes.ini            
    docker_compose: <a href="https://hub.docker.com/r/sailfrog/cypht-docker">the example docker-compose section</a> in the created file.
---
