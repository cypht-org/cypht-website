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
    eight: >
        
---
