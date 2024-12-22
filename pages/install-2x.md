---
title: Install v2
exclude: true
version: v2.x
php_versions: at least PHP 8.1
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
        config_file: hm3.ini
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
---
