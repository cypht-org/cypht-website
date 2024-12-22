---
title: Install v1
exclude: true
version: v1.4.x
php_versions: PHP 5.6 or 7.0 or 7.1 or 7.2 or 7.3 or 7.4 (for PHP 8.1+, please use Cypht 2.1+)
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
---
