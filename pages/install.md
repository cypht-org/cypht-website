---
title: Install
exclude: true
---
<section>
    <h2>Install Cypht</h2>
    <p>Cypht has four differents installation ways:</p>
    <ul>
        <li>Manual installation</li>
        <li>Installation within Tiki</li>
        <li>Install using Docker (use cypht docker image)</li>
        <li>Install cypht on a YunoHost server</li>
    </ul>
    <hr>

    <h2>1. Manual installation</h2>
    <h2>Requirements</h2>
    <p>

            <a href="https://github.com/cypht-org/cypht/tree/1.4.x">Cypht 1.4.x</a> requires PHP 5.6 to 7.4. For PHP 8.1+, please use <a href="https://github.com/cypht-org/cypht/tree/2.x">Cypht 2.x+</a>, <a href="https://getcomposer.org/">Composer 2</a>, and at minimum the
            <a href="http://php.net/manual/en/book.openssl.php">OpenSSL</a>, <a
                href="http://php.net/manual/en/book.mbstring.php">mbstring</a> and <a
                href="http://php.net/manual/en/book.curl.php">cURL</a> extensions. Cypht can also leverage several other
            extensions as defined in <a href="https://github.com/cypht-org/cypht/blob/1.4.x/composer.json#L37-L44">composer.json</a>.
            Testing is done on <a href="https://www.debian.org/">Debian</a> and <a href="http://www.ubuntu.com/">Ubuntu</a>
            platforms with <a href="http://nginx.com/">Nginx</a> and <a href="http://httpd.apache.org/">Apache</a>.
    </p>
    <p>Before proceeding please make sure your system meets minimal requirements</p>
    <h2>Steps</h2>
    <h4>1. Check minimum requirements</h4>

    <pre>
        #!/bin/bash
        # You need to check php version. For Cypht version 1.4.x, ensure PHP version is between 5.6 and 7.4, while for version 2.x.x, PHP 8.1 or higher is required.
        php --version
        # List installed PHP extensions. at least OpenSSL, mbstring and cURL should be in the list
        php -m
        <!-- should the following comment be removed because php-imap is deprecated, removed from php8.4, and not needed by Cypht? -->
        # For PHP 8.4 if there is missing php_imap extension, please download(to https://pecl.php.net/package/imap/1.0.3/windows) and add it manually(adding to php-8.4.4\ext and uncommenting ;extension=imap in php.ini)
        # Next you need to check composer version which should be >=2.0.0
        composer --version
    </pre>

    <h4>2. Download and prepare the code</h4>
    <p>
        It's important to consider where you place the Cypht source.
        The web server will need read-only access to it, and moving it from one place to another requires re-running the configuration script.
        Do <b>not</b> put the source in the document root as it could create a security risk.
        On Debian systems, it's common to place the source in the "/usr/local/share/" sub-directory for such cases.
        The provided bash script downloads(installs or upgrades) the specified version of Cypht, prepares the necessary directories, sets up correct permissions and ownership, and places the Cypht source in "/usr/local/share/cypht/cypht-version".
        It also ensures that the required configuration files are created, such as .env or hm3.ini (depending on the version).
        The script requires sudo access to perform these actions:
    </p>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="linux-tab" data-toggle="tab" href="#linux" role="tab" aria-controls="linux" aria-selected="true">Linux</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="windows-tab" data-toggle="tab" href="#windows" role="tab" aria-controls="windows" aria-selected="false">Windows</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="cpanel-tab" data-toggle="tab" href="#cpanel" role="tab" aria-controls="cpanel" aria-selected="false">Cpanel</a>
        </li>

    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="linux" role="tabpanel" aria-labelledby="linux-tab">
            <pre>

                #!/bin/bash

                bold_green() {
                echo -e "\033[1m\033[32m✓ $1\033[0m"
                }

                bold_red() {
                echo -e "\033[1m\033[31m$1\033[0m"
                }

                bold_blue() {
                echo -e "\033[1m\033[34m$1\033[0m"
                }

                bold_yellow() {
                echo -e "\033[1m\033[33m$1\033[0m"
                }

                # Function to check prerequisites
                check_prerequisites() {
                    echo "Checking prerequisites..."

                    # Check if jq is installed (needed for version parsing)
                    if ! command -v jq &>/dev/null; then
                        bold_red "Error: jq is not installed but required to fetch versions."
                        bold_red "Please install it with:"
                        bold_blue "  sudo apt update && sudo apt install jq"
                        exit 1
                    fi

                    # Check if PHP is installed
                    if ! command -v php &>/dev/null; then
                        bold_red "Error: PHP is not installed or not in the system PATH."
                        bold_red "Please install PHP before proceeding."
                        exit 1
                    fi

                    # Print the PHP version
                    bold_green "PHP is installed."

                    # List installed PHP extensions
                    required_extensions=("openssl" "mbstring" "curl" "session" "dom" "fileinfo" "filter" "gd" "mysqli" "phar" "simplexml" "soap" "tokenizer" "xml" "xmlwriter" "zlib")
                    missing_extensions=()

                    for ext in "${required_extensions[@]}"; do
                        if ! php -m | grep -iq "$ext"; then
                            missing_extensions+=("$ext")
                        fi
                    done

                    if [ ${#missing_extensions[@]} -gt 0 ]; then
                        bold_red "Error: The following required PHP extensions are missing: ${missing_extensions[*]}"
                        bold_red "Please install the missing extensions before proceeding."
                        exit 1
                    else
                        bold_green "All required PHP extensions (OpenSSL, mbstring, cURL, session, dom, fileinfo, filter, gd, mysqli, phar, simplexml, soap, tokenizer, xml, xmlwriter, zlib) are installed."
                    fi

                    # Check if Composer is installed
                    if ! command -v composer &>/dev/null; then
                        bold_red "Error: Composer is not installed or not in the system PATH."
                        bold_red "Please install Composer before proceeding: https://getcomposer.org/download/"
                        exit 1
                    fi

                    # Print the Composer version
                    bold_green "Composer is installed.\n"

                }

                # Function to fetch the list of valid tags from the GitHub repository
                fetch_tags() {
                    echo "Fetching latest versions from GitHub..." >&2  # Print to stderr to avoid mixing with output
                    curl -s https://api.github.com/repos/cypht-org/cypht/releases | \
                    jq -r '.[] | select(.created_at > "2018-11-13T03:58:48Z") | .tag_name' | sort -V | \
                    awk -F. '
                    {
                        major = substr($1, 2)  # Extract major version number (e.g., "1" from "v1.x.y")
                        latest[major] = $0     # Always update the latest version for this major version
                    }
                    END {
                        # Print the latest version for each major version
                        for (major in latest) {
                            print latest[major]
                        }
                    }' | sort -V  # Sort the final output by version
                }

                # Function to install Cypht for a given version
                install_cypht() {
                    local version=$1
                    local destination="$BASE_DIR/cypht-$version"

                    # Check if the destination directory already exists
                    if [ -d "$destination" ]; then
                        bold_yellow "Cypht version $version already exists at $destination."
                        read -p "Do you want to overwrite it? (yes/no) [yes]: " overwrite
                        overwrite="${overwrite:-yes}"  # Default to 'yes' if no input is provided
                        if [[ "$overwrite" != "yes" ]]; then
                            bold_red "Installation aborted."
                            exit 0
                        else
                            bold_blue "Overwriting existing installation..."
                            sudo rm -rf "$destination"
                        fi
                    fi

                    # Create destination directory
                    bold_blue "Creating directory for version $version: $destination\n\n"
                    sudo mkdir -p "$destination"

                    # Create temporary working directory
                    temp_dir=$(mktemp -d)
                    cd "$temp_dir" || exit 1

                    # Download the selected version of Cypht
                    if [ "$version" == "master" ]; then
                        bold_blue "Downloading the latest development version (master branch)..."
                        wget "https://github.com/cypht-org/cypht/archive/refs/heads/master.zip" -O "master.zip"
                        archive_name="master.zip"
                        extracted_folder="cypht-master"
                    else
                        bold_blue "Downloading version $version..."
                        wget "https://github.com/cypht-org/cypht/archive/refs/tags/$version.zip" -O "$version.zip"
                        archive_name="$version.zip"
                        extracted_folder="cypht-${version#v}"
                    fi

                    if [ $? -ne 0 ]; then
                        bold_red "Error downloading version $version."
                        exit 1
                    fi

                    # Unpack the archive
                    bold_blue "Unpacking the archive...\n"
                    unzip "$archive_name"

                    if [ $? -ne 0 ]; then
                        bold_red "Error unpacking the archive."
                        exit 1
                    fi

                    # Run composer
                    cd "$extracted_folder" || exit 1
                    bold_blue "Installing dependencies with composer...\n"
                    composer install

                    # Handle configuration file creation

                    if [[ "$selected_version" =~ ^v1 ]]; then
                        bold_blue "Creating hm3.ini from hm3.sample.ini\n"
                        cp hm3.sample.ini hm3.ini
                    else
                        bold_blue "Creating .env from .env.example....\n"
                        cp .env.example .env
                    fi

                    # Fix permissions and ownership
                    bold_blue "Fixing permissions...\n"
                    find . -type d -exec chmod 755 {} \;
                    find . -type f -exec chmod 644 {} \;

                    # Ask for group (root is default for other systems, or user for macOS)
                    read -p "Enter the group to own the files [root]: " group
                    group="${group:-root}"

                    sudo chown -R root:"$group" .

                    # Move files to the destination folder
                    bold_blue "Copying files to $destination...\n"
                    sudo mv ./* ./.[!.]* "$destination"

                    # Clean up temporary directory
                    cd ..
                    sudo rm -rf "$temp_dir"

                    if [ $? -ne 0 ]; then
                        echo "Error moving files to $destination."
                        exit 1
                    fi
                    bold_green "Cypht $version installed successfully to $destination"
                }

                # Main script execution

                # Check prerequisites
                check_prerequisites

                # Fetch available version tags
                available_versions=$(fetch_tags)
                available_versions=$(echo -e "$available_versions\nmaster")  # Add master branch to the list

                # Display available versions
                echo "$available_versions" | nl -s '. '

                # Prompt user to select a version
                read -p "Enter the version number (e.g. 1 for $(echo "$available_versions" | head -n 1)) [master]: " version_choice
                version_choice="${version_choice:-$(echo "$available_versions" | grep -n "master" | cut -d: -f1)}"

                # Get the version based on the user’s choice
                selected_version=$(echo "$available_versions" | sed -n "${version_choice}p")

                if [ -z "$selected_version" ]; then
                    bold_red "Error: Invalid version choice. Please select a valid number from the list."
                    exit 1
                fi

                # Prompt user for BASE_DIR
                read -p "Enter the base directory for Cypht installation [/usr/local/share/cypht]: " BASE_DIR
                BASE_DIR="${BASE_DIR:-/usr/local/share/cypht}"

                bold_blue "Installation of version: $selected_version"
                install_cypht "$selected_version"

            </pre>
        </div>
        <div class="tab-pane fade" id="windows" role="tabpanel" aria-labelledby="windows-tab">
            <pre>
                @echo off
                setlocal enabledelayedexpansion

                :: Enabling ANSI Support and UTF-8 Encoding
                chcp 65001 >nul
                reg add HKCU\Console /v VirtualTerminalLevel /t REG_DWORD /d 1 /f >nul 2>&1

                :: Définition des codes couleur et symboles
                for /F "tokens=2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do rem"') do (
                    set "ESC=%%a"
                )
                set "GREEN=%ESC%[32m"
                set "RED=%ESC%[31m"
                set "RESET=%ESC%[0m"

                :: Minimalist version and functional guarantee
                echo
                echo Checking prerequisites...
                echo.
                ::1. PHP Verification...
                where php >nul 2>&1
                if %errorlevel% neq 0 (
                echo %RED%Error: PHP is not installed or not in the system PATH.%RESET%
                echo %RED%Please install PHP before proceeding.%RESET%
                pause
                exit /b 1
                )
                echo %GREEN%   [✓] PHP is installed.%RESET%

                set "required_extensions=openssl mbstring curl "
                set "missing_extensions="

                for %%e in (%required_extensions%) do (
                    php -m | find /i "%%e" >nul 2>&1
                    if errorlevel 1 (
                        set "missing_extensions=!missing_extensions! %%e"
                        echo %RED%   [X] Extension PHP %%e missing%RESET%
                    )
                )

                if defined missing_extensions (
                    echo.
                    echo  %RED%   [X] Missing extension :%missing_extensions% %RESET%
                    echo %RED%Install these extensions before proceeding%RESET%
                    pause
                    exit /b 1
                ) else (
                    echo.
                    echo %GREEN%   [✓] All required PHP extensions [OpenSSL, mbstring, cURL] are installed.%RESET%
                )
                echo.

                :: 2. Composer Verification
                where composer >nul 2>&1
                if %errorlevel% neq 0 (
                echo %RED%   Error: Composer is not installed or not in the system PATH.%RESET%
                echo %RED%   Please install Composer before proceeding: https://getcomposer.org/download/%RESET%
                pause
                exit /b 1
                )
                echo %GREEN%   [✓] Composer is installed.%RESET%
                echo.
                :: fetch list of valid tags from the GitHub repository

                :: Create a temporary file
                set "temp_file=%temp%\cypht_versions.txt"

                :: fetch list
                powershell -command "$releases = Invoke-RestMethod -Uri 'https://api.github.com/repos/cypht-org/cypht/releases' -UseBasicParsing; $versions = $releases | Where-Object { $_.created_at -gt [datetime]'2018-11-13T03:58:48Z' } | Select-Object -ExpandProperty tag_name; $latest = $versions | Where-Object { $_ -match '^v\d+\.\d+\.\d+$' } | Group-Object { ($_ -split '\.')[0] } | ForEach-Object { $_.Group | Sort-Object -Descending | Select-Object -First 1 }; if ($versions -contains 'master') { $latest += 'master' }; $latest | Sort-Object" > "%temp_file%"

                :: Check if we have recovered any versions
                set "count=0"
                for /f "delims=" %%v in (%temp_file%) do (
                    set /a "count+=1"
                    set "version[!count!]=%%v"
                )

                :: Displaying Numbered Versions
                if !count! equ 0 (
                    echo %RED%No version found!%RESET%
                    goto cleanup
                )

                echo Fetching latest versions from GitHub...
                for /l %%i in (1,1,!count!) do (
                    echo    %%i. !version[%%i]!
                )

                :: Also offer the master version
                set /a "count+=1"
                set "version[!count!]=master"
                echo    !count!. master
                echo.

                :cleanup
                del "%temp_file%" 2>nul


                :: 3. Request version
                echo.
                :input_version_number
                set /p "VERSION=Enter the version number (e.g. 1 for v1.4.5) [master]:"
                if "!VERSION!"=="" set "VERSION=!count!"
                if not defined version[%VERSION%] (
                    echo %RED%   Error: Invalid version choice. Please select a valid number from the list..%RESET%
                    goto input_version_number
                )
                :: 4. Request directory
                set /p "INSTALL_DIR=Enter the base directory for Cypht installation [C:\cypht]:"
                if "!INSTALL_DIR!"=="" set "INSTALL_DIR=C:\cypht"
                :: 5. Confirmation
                echo.

                echo Installation in progress...
                set "version=!version[%VERSION%]!"
                set "destination=%INSTALL_DIR%\cypht-%version%"
                echo.

                :: Check if the folder already exists
                if exist "%destination%" (
                    echo %RED%[X] Version %version% already exists in %destination%.%RESET%
                    set /p "overwrite=Do you want to crush it? (yes/no) [yes]:"
                    if "!overwrite!"=="" set "overwrite=yes"
                    if /i "!overwrite!"=="no" (
                        echo Installation canceled.
                        exit /b 0
                    )
                    echo Overwriting of the existing installation...
                    rmdir /s /q "%destination%"
                )

                :: Create destination folder
                echo Creating the folder for the release %version%: %destination%
                mkdir "%destination%" 2>nul
                if not exist "%destination%" (
                    echo %RED%Failed to create the folder.%RESET%
                    exit /b 1
                )

                :: Create a temporary folder
                set "temp_dir=%temp%\cypht_install"
                mkdir "%temp_dir%" 2>nul

                :: Download Cypht
                if "%version%"=="master" (
                    echo Download the development version [master]...
                    powershell -command "Invoke-WebRequest -Uri 'https://github.com/cypht-org/cypht/archive/refs/heads/master.zip' -OutFile '%temp_dir%\master.zip'"
                    set "archive_name=master.zip"
                    set "extracted_folder=cypht-master"
                ) else (
                    echo Download the development version %version%...
                    powershell -command "Invoke-WebRequest -Uri 'https://github.com/cypht-org/cypht/archive/refs/tags/%version%.zip' -OutFile '%temp_dir%\%version%.zip'"
                    set "archive_name=%version%.zip"
                    set "extracted_folder=cypht-!version:v=!"
                )

                if not exist "%temp_dir%\%archive_name%" (
                    echo %RED%Error downloading.%RESET%
                    exit /b 1
                )


                echo Extracting the archive...
                powershell -command "Expand-Archive -Path '%temp_dir%\%archive_name%' -DestinationPath '%destination%'; $extracted = Get-ChildItem '%destination%' -Directory | Where-Object {$_.Name -like 'cypht-*'} | Select-Object -First 1; if ($extracted) { Get-ChildItem $extracted.FullName | Move-Item -Destination '%destination%' -Force; Remove-Item $extracted.FullName -Recurse -Force }"
                if not exist "%destination%" (
                    echo %RED%Error during extraction.%RESET%
                    exit /b 1
                )

                ::Cleaning
                rd /s /q "%temp_dir%"

                cd /d "%destination%"

                :: Create the configuration file
                if "!version:~0,2!"=="v1" (
                    echo Creating hm3.ini from hm3.sample.ini
                    copy "%destination%\hm3.sample.ini" "%destination%\hm3.ini"
                ) else (
                    echo Creating .env from .env.example
                    copy "%destination%\.env.example" "%destination%\.env"
                )


                echo.
                echo Installing dependencies with Composer...
                powershell -command "composer install"

                echo.
                echo Copying files to %destination%
                echo.
                echo  %GREEN% ✓ Cypht %version%  installed successfully to %destination% %RESET%
                pause
            </pre>
        </div>
        <div class="tab-pane fade" id="cpanel" role="tabpanel" aria-labelledby="cpanel-tab">
            <pre>
                #!/bin/bash

                bold_green() {
                echo -e "\033[1m\033[32m✓ $1\033[0m"
                }

                bold_red() {
                echo -e "\033[1m\033[31m$1\033[0m"
                }

                bold_blue() {
                echo -e "\033[1m\033[34m$1\033[0m"
                }

                bold_yellow() {
                echo -e "\033[1m\033[33m$1\033[0m"
                }

                # Function to check prerequisites
                check_prerequisites() {
                    echo "Checking prerequisites..."

                    # Check if PHP is installed
                    if ! command -v php &>/dev/null; then
                        bold_red "Error: PHP is not installed or not in the system PATH."
                        bold_red "Please install PHP before proceeding."
                        exit 1
                    fi

                    # Print the PHP version
                    bold_green "PHP is installed."

                    # List installed PHP extensions
                    required_extensions=("openssl" "mbstring" "curl")
                    missing_extensions=()

                    for ext in "${required_extensions[@]}"; do
                        if ! php -m | grep -iq "$ext"; then
                            missing_extensions+=("$ext")
                        fi
                    done

                    if [ ${#missing_extensions[@]} -gt 0 ]; then
                        bold_red "Error: The following required PHP extensions are missing: ${missing_extensions[*]}"
                        bold_red "Please install the missing extensions before proceeding."
                        exit 1
                    else
                        bold_green "All required PHP extensions (OpenSSL, mbstring, cURL) are installed."
                    fi

                    # Check if Composer is installed
                    if ! command -v composer &>/dev/null; then
                        bold_red "Error: Composer is not installed or not in the system PATH."
                        bold_red "Please install Composer before proceeding: https://getcomposer.org/download/"
                        exit 1
                    fi

                    # Print the Composer version
                    bold_green "Composer is installed.\n"

                    # Check if jq is installed (needed for version parsing)
                    # if ! command -v jq &>/dev/null; then
                    #     bold_red "Error: jq is not installed but required to fetch versions."
                    #     bold_red "Please install it with:"
                    #     bold_blue "  apt update && apt install jq"
                    #     exit 1
                    # fi

                }

                # Function to fetch the list of valid tags from the GitHub repository
                selected_version=""
                fetch_tags() {
                    echo "Fetching latest versions from GitHub..." >&2  # Print to stderr to avoid mixing with output
                    versions=$(curl -s https://api.github.com/repos/cypht-org/cypht/releases | grep '"tag_name":' | awk -F'"' '{print $4}' | sort -Vr)
                    local master_version="master"

                    declare -A latest_versions

                    for version in $versions; do
                        if [[ "$version" =~ ^v([0-9]+)\.[0-9]+\.[0-9]+$ ]]; then
                            local major_version=${BASH_REMATCH[1]}
                            if [[ -z "${latest_versions[$major_version]}" ]]; then
                                latest_versions[$major_version]=$version
                            fi
                        fi
                    done

                    local sorted_majors=($(printf "%s\n" "${!latest_versions[@]}" | sort -nr))

                    local count=1
                    for major in "${sorted_majors[@]}"; do
                        echo "$count. ${latest_versions[$major]}"
                        ((count++))
                    done
                    echo "---------------------"

                    local max_option=$count
                    echo "$max_option. $master_version"
                    echo ""

                    while true; do
                        read -p "Enter the version number (e.g. 1 for v1.4.5) [master]: " choice

                        if [[ -z "$choice" ]]; then
                            selected_version="$master_version"
                            break
                        fi

                        if ! [[ "$choice" =~ ^[0-9]+$ ]]; then
                            bold_red "Invalid version choice. Please select a valid number from the list.."
                            continue
                        fi

                        if (( choice < 1 || choice > max_option )); then
                            bold_red "Invalid version choice. Please select a valid number from the list.."
                            continue
                        fi

                        if (( choice == max_option )); then
                            selected_version="$master_version"
                        else
                            local selected_index=$((choice-1))
                            selected_version="${latest_versions[${sorted_majors[$selected_index]}]}"
                        fi
                        break
                    done
                }

                # Function to install Cypht for a given version
                install_cypht() {
                    local version=$1
                    local destination="$BASE_DIR"

                    # Create temporary working directory
                    temp_dir=$(mktemp -d)
                    cd "$temp_dir" || exit 1

                    # Download the selected version of Cypht
                    if [ "$version" == "master" ]; then
                        bold_blue "Downloading the latest development version (master branch)..."
                        wget "https://github.com/cypht-org/cypht/archive/refs/heads/master.zip" -O "master.zip"
                        archive_name="master.zip"
                        extracted_folder="cypht-master"
                    else
                        bold_blue "Downloading version $version..."
                        wget "https://github.com/cypht-org/cypht/archive/refs/tags/$version.zip" -O "$version.zip"
                        archive_name="$version.zip"
                        extracted_folder="cypht-${version#v}"
                    fi

                    if [ $? -ne 0 ]; then
                        bold_red "Error downloading version $version."
                        exit 1
                    fi

                    # Unpack the archive
                    bold_blue "Unpacking the archive...\n"
                    unzip "$archive_name"

                    if [ $? -ne 0 ]; then
                        bold_red "Error unpacking the archive."
                        exit 1
                    fi

                    # Run composer
                    cd "$extracted_folder" || exit 1
                    bold_blue "Installing dependencies with composer...\n"
                    composer install

                    # Handle configuration file creation

                    if [[ "$selected_version" =~ ^v1 ]]; then
                        bold_blue "Creating hm3.ini from hm3.sample.ini\n"
                        cp hm3.sample.ini hm3.ini
                    else
                        bold_blue "Creating .env from .env.example....\n"
                        cp .env.example .env
                    fi

                    # Move files to the destination folder
                    bold_blue "Copying files to $destination...\n"
                    rm -rf "$destination"
                    mkdir -p "$destination"
                    mv ./* ./.[!.]* "$destination/"

                    # Clean up temporary directory
                    cd ..
                    rm -rf "$temp_dir"

                    if [ $? -ne 0 ]; then
                        echo "Error moving files to $destination."
                        exit 1
                    fi
                    bold_green "Cypht $version installed successfully to $destination"
                }

                # Function: check_public_html_data
                # Description:  Checks if the user's public_html folder contains data.
                #               If data is found, it warns the user and asks
                #               for confirmation to continue, with 'no' as the default option.
                # Returns:      0 if the user chooses to continue or if the folder is empty/does not exist.
                #               1 if the user chooses to exit.
                check_public_html_data() {
                    local public_html_dir="$BASE_DIR"

                    if [ -n "$(ls -A "$public_html_dir")" ]; then
                        # Le dossier contient des données
                        echo ""
                        bold_yellow "WARNING: The folder public_html/ contains data."
                        bold_yellow "If you continue, this data could be lost or overwritten."
                        echo ""

                        read -p "Do you really want to continue? (yes/no) [no]: " -r user_response

                        user_response=${user_response,,} #
                        user_response=${user_response:-no} #

                        case "$user_response" in
                            yes|y)
                                return 0
                                ;;
                            *)
                                return 1
                                ;;
                        esac
                    else
                        return 0
                    fi
                }

                # Main script execution

                # Check prerequisites
                check_prerequisites
                BASE_DIR="$HOME/public_html"

                # Fetch available version tags
                fetch_tags

                if check_public_html_data; then

                    mkdir -p ~/hm3/{attachments,users,app_data}

                    bold_blue "Installation of version: $selected_version"
                    install_cypht "$selected_version"

                else

                    echo ""
                    bold_yellow "You have canceled the installation process."
                    echo ""
                    exit 1
                fi


            </pre>
        </div>
    </div>

    <h4>3. Configure the program</h4>
    <p>
        To configure Cypht for your environment, you must first edit the "hm3.ini" (for Cypht 1.4.x) or ".env"
        (for Cypht 2.x.x) file to your liking, .env content can be generated using the <a href='/config-generator'>Cypht Config Generator</a>, then run the "config_gen.php" script to generate the optimized
        configuration file and assets used at run-time.
    </p>

    <p>
        For Cypht 1.4.x, begin by editing the "hm3.ini" file to configure Cypht for your environment.
        If you choose to use a database for any of the three available purposes (authentication, sessions, or user settings),
        you will need to complete the "DB support" section and create the required tables.
        SQL to do so can be found in the "hm3.sample.ini" file. The "hm3.ini" file contains many comments explaining each configuration option and how to set it up for your environment.
    </p>

    <pre>
        sudo mkdir -p /var/lib/hm3/{attachments,users,app_data}
        sudo chown -R www-data /var/lib/hm3/
    </pre>

    <p>
        The "/var/lib/hm3/users" directory is only required if you are using the file-system and not a database to store             user settings (user_config_type = file in the "hm3.ini" or ".env"). You can put these directories anywhere, just make sure the values in the ini file point to the right place.
    </p>
    <h4>4. Generate the run-time configuration</h4>
    <p>Cypht uses a build process to create an optimized configuration, and to combine and minimize page assets.Once you have edited your "hm3.ini" or ".env" file, generate the configuration with:</p>
    <pre>
        cd /usr/local/share/cypht  (or wherever you put the code in section 1)
        sudo php ./scripts/config_gen.php
    </pre>
    <p>Now going to https://your-server/mail/ should load the Cypht login page. Note that If you use a symlink, your web-server must be configured to follow symlinks.</p>

    <h4>5. Enable the program in your web-server</h4>
    <p>The easiest way to serve Cypht is to symlink it to the web-server document root. You can also copy the generated files to your web-server location, but then you will need to re-copy them anytime the config_gen script is run. If the source is located at /usr/local/share/cypht, and the web-server document root is at /var/www/html, the following command will make Cypht available under the "mail" path of the web-server:</p>

    <pre>
        sudo ln -s /usr/local/share/cypht/site /var/www/html/mail
    </pre>

    <h4>Nginx Configuration</h4>
    <p>For Nginx users, add these security rules to your server configuration:</p>

    <pre>
    location = / {
        rewrite ^/$ /index.php last;
    }

    # Block hidden files starting with .
    location ~ /\. {
        deny all;
    }

    # Block sensitive files
    location ~* \.(env|ini|log|conf|json|lock|yml|yaml|md|txt|sh|bat|ps1|xml|bak|sql|dist|inc|cfg|db|csv)$ {
        deny all;
    }

    # Allow exceptions for specific files
    location ~* ^/(server_accounts_sample\.yaml|server_accounts_sample\.csv|contact_sample\.csv)$ {
        allow all;
    }

    # Block RELEASE_NOTES, Makefile, Docker-related configs
    location ~* /(RELEASE_NOTES|Makefile|Dockerfile|docker-compose\.yml|docker-compose\.dev\.yaml|docker-compose\.prod\.yaml)$ {
        deny all;
    }

    # Block .git directory
    location ~ /\.git {
        deny all;
    }

    # Disable directory listing
    autoindex off;
    </pre>

    <p>Make sure to reload Nginx after making these changes:</p>
    <pre>
    sudo systemctl reload nginx
    </pre>

    <p>Now going to https://your-server/mail/ should load the Cypht login page. Note that If you use a symlink, your web-server must be configured to follow symlinks.</p>

    <h4>6. Users</h4>
    <p>Setting up users depends on what type of authentication you configure in the hm3.ini file. If you are using the local database configuration for users, there are scripts in the scripts/ directory to help manage them:</p>

    <pre>
        # create an account
        php ./scripts/create_account.php username password

        # delete an account
        php ./scripts/delete_account.php username

        # change an account password
        php ./scripts/update_password.php username password
    </pre>

    <h4>7. Debug mode</h4>
    <p>Cypht has a debug or developer mode that can be used to troubleshoot problems or enable faster development of modules. To enable the debug version of Cypht, just sym-link the entire source directory instead of the site sub-directory:</p>

    <pre>sudo ln -s /usr/local/share/cypht /var/www/html/mail-debug</pre>
    <p>
        Debug mode is not as efficient as the normal version, and it is NOT designed to be secure. DO NOT RUN DEBUG MODE IN PRODUCTION. You have been warned! Debug mode outputs lots of information to the PHP error log that can be useful for trouble-shooting problems. The location of the error log varies based on your php.ini settings and web-server software.
    </p>

    <h4>8. Other INI files</h4>
    <p>
        Some Cypht modules require additional ini files to be configured. These should NOT be inside the web-server document root. Cypht will look for them in the location defined by "app_data_dir" in the hm3.ini file. A sample ini file for each module set that requires one is included in the source for that module. To configure them you must copy the sample ini file to the "app_data_dir" and edit it for your setup. Some of these require configuring your service with a provider, specifically ones related to Oauth2 client setup (Github,  WordPress, Oauth2 over IMAP for Gmail and Outlook). Re-run the config_gen script after configuring an ini file and it will be merged into the main configuration settings.
        <ul>
            <li><b>Github</b>
                <p>Cypht can connect to github and aggregate notification data about repository activity.<br />Example github.ini file:<br />
                    <a
                        href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/github/github.ini">https://github.com/cypht-org/cypht/blob/1.4.x/modules/github/github.ini</a><br /><br />
                    Authorize an application for github:<br />
                    <a
                        href="https://github.com/settings/developers">https://github.com/settings/developers</a>
                </p>
            </li>
            <li><b>OAUTH2 over IMAP</b>
                <p>Gmail and Outlook.com support OAUTH2 authentication over IMAP. This is preferable to normal IMAP
                    authentication because Cypht never has access to your account password.<br /><br />
                    Example oauth2 ini file:<br />
                    <a
                        href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/imap/oauth2.ini">https://github.com/cypht-org/cypht/blob/1.4.x/modules/imap/oauth2.ini</a><br /><br />
                    Authorize an application for gmail<br />
                    <a
                        href="https://console.developers.google.com/project">https://console.developers.google.com/project</a><br /><br />
                    Authorize an application for outlook.com<br />
                    <a
                        href="https://account.live.com/developers/applications/">https://account.live.com/developers/applications/</a><br /><br />
                </p>
            </li>
            <li><b>WordPress</b>
                <p>Cypht can aggregate WordPress.com notifications.<br /><br />
                    Example wordpress.ini file:<br />
                    <a
                        href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/wordpress/wordpress.ini">https://github.com/cypht-org/cypht/blob/1.4.x/modules/wordpress/wordpress.ini</a><br /><br />
                    Authorize an application for WordPress.com:<br />
                    <a href="https://developer.wordpress.com/apps/">https://developer.wordpress.com/apps/</a>
                </p>
            </li>
                        <li><b>Custom themes</b>
                <p>
                    You can create your own themes for Cypht. Edit the themes.ini file to include your theme, and put the css file in modules/themes/assets.<br />
                    <a
                        href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/themes/themes.ini">https://github.com/cypht-org/cypht/blob/1.4.x/modules/themes/themes.ini</a>
                </p>
            </li>
        </ul>
    </p>

    <h2>2. Install cypht using Docker</h2>
    <p>
        Using Docker is one of the easiest way to install cypht as the cypht docker image comes with all the steps required in the manual instalation done for you.
    </p>
    <p> Here is the Cypht docker repository: <a href="https://hub.docker.com/r/cypht/cypht">https://hub.docker.com/r/cypht/cypht</a>
    <h3><b>Requirements</b></h3>
        <ul>
            <li><b>Docker Engine</b>: Ensure Docker is installed on your system. <a href="https://docs.docker.com/get-started/get-docker/">Get Docker</a>
            <li><b>Docker Compose</b>: Ensure Docker Compose is installed (it's often included with modern Docker Desktop installations). <a href="https://docs.docker.com/compose/install/">Install Docker Compose</a>
        </ul>
    <h3><b>Quick Start</b></h3>
    <p>Follow these steps to get a basic Cypht instance running</p>
    <ol>
        <li>
            Create a Project Directory
            <pre>mkdir cypht-docker&#10;cd cypht-docker</pre>
        </li>
        <li>
            Create a new file named "docker-compose.yml" or "docker-compose.yaml" in the directory you just created
        </li>
        <li>
            Copy and paste the content of <a href="https://github.com/cypht-org/cypht/blob/master/docker/docker-compose.yaml">https://github.com/cypht-org/cypht/blob/master/docker/docker-compose.yaml</a> in the created file.
        </li>
        <li>
            Open your CLI/Terminal and move to the directory containing the docker-compose file and run the command to run containers
            <pre>docker compose up -d</pre>
            If you are using the Legacy Standalone docker-compose you will run 
            <pre>docker-compose up -d</pre>

            <b>Important Note on docker-compose (Legacy Standalone Tool)</b><br>
            <p>You may have the older, standalone docker-compose (with a hyphen) tool installed. This legacy version can sometimes experience incompatibility with newer Docker Engine versions, leading to errors or unexpected behavior.</p>

            <p>If you encounter errors when using the legacy docker-compose command, your best course of action is to migrate to the modern docker compose plugin. This modern version is bundled and maintained as part of the Docker CLI itself, guaranteeing compatibility with your current Docker Engine installation. Migration is the recommended solution over troubleshooting compatibility issues with the deprecated Standalone Tool.</p>
        </li>
        <li>
            After containers started, you can access cypht on port 80 of your host if you didn't change the port value in the docker-compose file. Open your web browser and navigate to http://your-server-ip:80 or http://localhost:80.
        </li>
    </ol>
    <p>
        NOTE: Please change usernames (default: admin) and passwords (default: admin) before using the given docker-compose code in your production
        environment.
    </p>
    <h3 id="persisting-data"><b>Persisting Application Data</b></h3>
    <p>
        To ensure user configurations and email attachments are preserved across container restarts and updates, you must mount persistent volumes to the container. Update your cypht service in the docker-compose.yml file to include the volumes section:
        <pre>
cypht:
    image: cypht/cypht:2.4.2
    ports:
        - "80:80"
    environment:
        - AUTH_USERNAME=admin
        # ... other environment variables
    volumes:
        # Mount host directories for persistent storage
        - ./data/user_settings:/var/lib/hm3/users          # User profiles and settings
        - ./data/user_attachments:/var/lib/hm3/attachments # Email attachments
        </pre>
    </p>

        <h2>3. Install Cypht on a YunoHost server</h2>
        <p>This is an other easy way of installing and use Cypht.<br>
            YunoHost is an operating system that aims to simplify server administration as much as possible to
            democratize self-hosting while remaining reliable,
            secure, ethical and lightweight. It is a free software project owned exclusively by volunteers. Technically,
            it can be seen as a distribution based on
            Debian GNU/Linux and can be installed on many types of hardware.<br />
            To learn more about YunoHost, visit <a
                href="https://yunohost.org/en/whatsyunohost">https://yunohost.org/en/whatsyunohost</a>
        </p>
        <p>To install Cypht on YunoHost, please follow these steps:</p>
        <ul>
            <li>
                If you don't have an installed YunoHost server, please consult <a
                    href="https://yunohost.org/#/install">the guide</a> to learn how to install it. If you have it,
                please go directly to the next step.
            </li>
            <li>
                If you just installed YunoHost or had it installed before, access your server and go to the admin
                dashboard, then click on "Applications"
            </li>
            <li>In the next page, click on the "install" button</li>
            <li>In the search area, enter "cypht"</li>
            <li>In the search result, click on cypht app</li>
            <li>
                Scroll down, then fill in the form according to your need or keep the default values, then clik on the
                "install" button. Note: Make sure the url value is not
                used by another app on the server or in case you have another cypht instance previously installed you
                have to modify it instead of using the default valuue.
            </li>
            <li>Once clicked on the "install" button, wait for the installation to complete, it may take while.</li>
            <li>Once the installation completed, you will be taking back to the dashboard.</li>
            <li>
                To open the app, click on the app recently installed and then on the "open the app" button, then the
                application opens in a new tab.
            </li>
            <li>
                Enter the username and admin password you've provided previously in the installation form and then click
                on the login button to enter cypht and start configuring your email accounts.
            </li>
        </ul>

                <h2>4. Install Cypht within Tiki</h2>
        <p>If you have tiki installed, you can use Cypht within tiki. This is an easy way of installing Cypht.<br />
            Please follow the following link for a complete guide of how to install and use cypht within Tiki.</br>
            <a href="https://doc.tiki.org/Webmail">https://doc.tiki.org/Webmail</a>
        </p></br>
        <h4>Having problems?</h4>
        We are happy to help trouble-shoot any installation issues you run into. Chat with us at Gitter <a href="https://gitter.im/cypht-org/community">Cypht at Gitter</a> and We'll get back to you as soon as we can.

</section>

