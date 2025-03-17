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
            extensions as defined in <a                 href="https://github.com/cypht-org/cypht/blob/1.4.x/composer.json#L37-L44">composer.json</a>.
            Testing is done on <a href="https://www.debian.org/">Debian</a> and <a
                href="http://www.ubuntu.com/">Ubuntu</a>
            platforms with <a href="http://nginx.com/">Nginx</a> and <a href="http://httpd.apache.org/">Apache</a>.
    </p>
    <p>Before proceeding please make sure your system meets minimal requirements</p>
    <h2>Steps</h2>
    <h4>1. Check minimum requirements</h4>

    <pre>
        #!/bin/bash
        # You need to check php version which should be >=5.6 for version 1.4.x and 7.4 for Cypht version 2.x.x
        php --version
        # Next you need to check composer version which should be >=2.0.0
        composer --version
    </pre>

    <p>
        It's important to consider where you place the Cypht source.
        The web server will need read-only access to it, and moving it from one place to another requires re-running the configuration script.
        Do <b>not</b> put the source in the document root as it could create a security risk.
        On Debian systems, it's common to place the source in the "/usr/local/share/" sub-directory for such cases.
        The provided bash script downloads(installs or upgrades) the specified version of Cypht, prepares the necessary directories, sets up correct permissions and ownership, and places the Cypht source in "/usr/local/share/cypht/cypht-version".
        It also ensures that the required configuration files are created, such as .env or hm3.ini (depending on the version).
        The script requires sudo access to perform these actions:
    </p>

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

    <p>
        To configure Cypht for your environment, you must first edit the "hm3.ini" (for Cypht 1.4.x) or ".env"
        (for Cypht 2.x.x) file to your liking, then run the "config_gen.php" script to generate the optimized
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
        Using Docker is one of the easiest way to install cypht as the cypht docker image comes with all the steps required in the manual instalation done for you. But the bad news is that this installation way requiresdocker knowledge.<br /> Here is the cypht docker repository: <a                 href="https://hub.docker.com/r/sailfrog/cypht-docker">https://hub.docker.com/r/sailfrog/cypht-docker</a><br />
        To run containers required by cypht, please, first make sure you have docker and docker-compose installed on
        your system, then take a look on the section "example docker-compose" of repository overview, then do the
        following:
    </p>
    <ul>
        <li>Create a new directory on your system named as you want.</li>
        <li>
            In the directory created previously, create a file named "docker-compose.yaml" then copy and paste the content of <a href="https://hub.docker.com/r/sailfrog/cypht-docker">the example docker-compose section</a> in the created file.
        </li>
        <li>
            Open your CLI/terminal and move to the directory containing the docker-compose file and run the command to run containers
            <pre>docker-compose up -d</pre>
        </li>
        <li>
            After containers started, you can access cypht on port 80 of your host if you didn't change the port value in the docker-compose file.
        </li>
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
