---
title: Install
exclude: true
version: master
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
        other: Config files
---
