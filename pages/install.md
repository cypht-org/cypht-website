---
title: Install
exclude: true
version: master
php_versions: at least PHP 8.11
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
        config_file: .env
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
---
