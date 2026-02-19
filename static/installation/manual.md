<div class="guide-left col col-xl-9">
   <div class="guide-page-header">
      <h3>Manual installation</h3>
      <p class="guide-page-subtitle">Manual installation is the most flexible option, but it requires more setup and configuration.</p>
   </div>
   <!--  -->
   <div id="requirement" class="g-page-card">
      <div class="guide-card-header">
          <h4>Requirements</h5>
      </div>
      <div class="g-card-body">
         <p>
            <a href="https://github.com/cypht-org/cypht/tree/1.4.x">Cypht 1.4.x</a> requires PHP 5.6 to 7.4. For PHP 8.1+, please use
            <a href="https://github.com/cypht-org/cypht/tree/2.x">Cypht 2.x+</a>, <a href="https://getcomposer.org/">Composer 2</a>, and at minimum the
            <a href="http://php.net/manual/en/book.openssl.php">OpenSSL</a>, <a href="http://php.net/manual/en/book.mbstring.php">mbstring</a> and
            <a href="http://php.net/manual/en/book.curl.php">cURL</a> extensions. Cypht can also leverage several other extensions as defined in
            <a href="https://github.com/cypht-org/cypht/blob/1.4.x/composer.json#L37-L44">composer.json</a>. Testing is done on               <a href="https://www.debian.org/">Debian</a> and <a href="http://www.ubuntu.com/">Ubuntu</a> platforms with
            <a href="http://nginx.com/">Nginx</a> and <a href="http://httpd.apache.org/">Apache</a>.
         </p>
         <p>Before proceeding please make sure your system meets minimal requirements</p>
      </div>
   </div>
      <!--  -->
   <div id="step" class="g-page-card">
      <div class="g-card-header">
        <h4>Steps</h5>
      </div>
      <div id="check-in" class="g-card-body ms-3">
      <!-- <div> -->
         <span class="gpc-body-title">1. Check minimum requirements</span>
            <!-- step 1 -->
         <ul class="list_letter">
            <li>
               <span>
                  You need to check php version. For Cypht version 1.4.x,
                     ensure PHP version is between 5.6 and 7.4, while for version 2.x.x,
                     PHP 8.1 or higher is required
               </span>
               <div class="gc-terminal">
                  <p class="terminal-prompt"> <span class="terminal-command">php </span><span class="terminal-text">--version</span></p>
               </div>
            </li>
            <li>
               <span>
                  List installed PHP extensions. at least OpenSSL, mbstring and cURL
               </span>
               <div class="gc-terminal">
                  <p class="terminal-prompt"> <span class="terminal-command">php </span><span class="terminal-text">-m</span></p>
                     </div>
           </li>
            <li>
               <span> 
                  For PHP 8.4 if there is missing php_imap extension is deprecated and unmaintained - see <a href="https://php.watch/versions/8.4/imap-unbundled">imap-unbundled</a> and <a href="https://github.com/php/pecl-mail-imap">pecl-mail-imap</a>
                  please download and add it manually, particularly for Windows users who won't be able to log in Cypht without that extension installed.
                  Next you need to check composer version which should be &gt;=2.0.0
               </span>
               <div class="gc-terminal">
                  <p class="terminal-prompt"> <span class="terminal-command">composer </span><span class="terminal-text">--version</span></p>
               </div>
               </li>
         </ul>
            <!-- 2 Step  -->
         <div id="prepare-code">
            <span class="gpc-body-title">2. Download and prepare the code</span>
            <p>
               It's important to consider where you place the Cypht source. The web server will need read-only access to it, and moving it from one place to
               another requires re-running the configuration script. Do <b>not</b> put the source in the document root as it could create a security risk.
            </p>
            <p>
               On Debian systems, it's common to place the source in the <code>/usr/local/share/</code> sub-directory for such cases. The provided bash script
               downloads(installs or upgrades) the specified version of Cypht, prepares the necessary directories, sets up correct permissions and ownership,
               and places the Cypht source in <code>/usr/local/share/cypht/cypht-version</code>.
            </p>
            <p>
               It also ensures that the required configuration files are created,
               such as .env or hm3.ini (depending on the version). The script requires sudo access to perform these actions:
            </p>
            <ul class="nav system-tabs" id="myTab" role="tablist">
               <li class="tab-item" role="presentation">
                 <a class="tab-link active" id="linux-tab" data-bs-toggle="tab" data-bs-target="#linux-tab-pane" type="button" role="tab" aria-controls="linux-tab-pane" aria-selected="true">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"> <g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"/> <path fill="#ECEFF1" d="m85.95 199.926l24.53 13.62h37.096l34.702-26.055l15.556-40.859l-35.899-43.227l-10.171-24.278l-49.66 1.776l.598 13.62l-9.573 17.764l-14.958 29.016l-2.991 24.278z"/><path fill="#263238" d="M187.064 114.656c-9.573-13.62-17.351-21.91-21.539-39.082s1.197-12.435-2.393-27.24c-1.795-7.697-4.787-13.027-7.778-17.172c-3.59-4.145-7.778-6.514-10.172-7.106c-5.384-2.96-17.949-7.698-33.505.592c-16.155 8.29-14.36 26.055-11.368 62.177c0 2.368-.599 5.33-1.795 7.698c-2.393 5.33-6.582 10.066-10.171 14.212c-4.189 5.921-8.377 11.843-11.368 18.356c-7.18 13.62-13.762 30.792-11.967 37.306c2.992-.592 40.686 56.255 40.686 57.439c2.393-.592 12.564-.592 21.539-.592c12.565-.592 19.744-1.184 29.916 1.184c0-1.776-.599-3.553-.599-5.329c0-3.553.599-6.514 1.197-10.659c.598-2.961 1.197-5.921 1.795-9.474c-5.983 5.329-16.753 11.251-26.924 13.027c-8.975 1.776-23.933-1.184-31.113-10.067c.599 0 1.795 0 2.394-.592c1.795-.592 3.59-1.184 4.188-2.368c1.795-2.961.598-5.922-.598-7.698c-1.197-1.777-10.172-8.291-14.36-11.843c-4.188-3.553-6.581-5.33-8.975-7.698l-4.786-4.738c-1.197-1.184-1.795-2.368-2.393-2.961c-1.197-2.96-1.795-6.513-1.197-11.25c.598-6.514 2.991-11.844 5.983-17.765c1.197-2.369 4.188-7.106 4.188-7.106s-10.171 24.871-4.786 32.569c0 0 .598-7.698 2.991-15.396c1.795-5.33 4.787-13.028 8.377-17.173s12.564-19.541 13.163-29.016c0-4.145.598-8.29.598-11.25c-2.393-2.37 39.489-8.29 41.882-1.777c.598 2.369 8.975 23.686 13.761 34.937c2.393 5.33 5.385 10.067 7.18 15.988c1.795 6.514 2.991 15.396 2.991 24.279c0 1.776 0 4.737-.598 7.698c1.197 0 24.531-24.871-2.991-45.596c0 0 16.752 7.698 17.351 23.094c.598 12.435-4.787 22.502-5.983 24.278c.598 0 12.564 5.33 13.162 5.33c2.394 0 7.18-1.777 7.18-1.777c.599-1.776 2.393-6.514 2.393-8.29c4.189-13.62-5.983-35.529-15.556-49.149"/><path fill="#ECEFF1" d="M111.078 75.574c4.296 0 7.778-5.303 7.778-11.843c0-6.541-3.482-11.843-7.778-11.843S103.3 57.19 103.3 63.73s3.483 11.843 7.778 11.843m26.924 1.185c5.618 0 10.172-6.098 10.172-13.62S143.62 49.52 138.002 49.52c-5.617 0-10.171 6.098-10.171 13.62s4.554 13.62 10.171 13.62"/><path fill="#212121" d="M115.424 64.541c-.497-3.893-2.761-6.817-5.056-6.53s-3.752 3.676-3.254 7.57c.497 3.893 2.76 6.817 5.055 6.53c2.295-.288 3.752-3.677 3.255-7.57m21.981 8.664c3.304 0 5.983-3.446 5.983-7.698c0-4.251-2.679-7.698-5.983-7.698c-3.305 0-5.984 3.447-5.984 7.698s2.679 7.698 5.984 7.698"/><path fill="#FFC107" d="M216.98 195.781c-2.393-1.184-6.582-2.961-10.172-8.29c-1.794-2.961-1.196-11.251-4.188-14.804c-1.795-2.368-4.188-1.184-4.786-1.184c-5.385 1.184-17.95 9.474-26.326 0c-1.197-1.184-2.992-2.961-5.983-2.961c-2.992 0-4.188 1.184-5.385 3.553s-1.197 4.145-1.197 10.067c0 4.737 0 10.066-.598 14.211c-1.197 10.067-2.991 15.989-2.991 21.91c0 6.514 1.794 10.659 4.188 12.435c1.795 1.777 4.786 2.961 11.368 2.961c6.581 0 10.769-2.368 14.958-6.514c2.991-2.96 5.384-4.145 13.761-10.066c6.581-4.145 16.753-9.475 18.547-11.251c1.197-1.184 2.992-1.777 2.992-5.33c0-2.96-2.393-4.145-4.188-4.737m-120.261 1.777c-5.983-9.475-6.582-11.251-10.77-17.173c-3.59-5.921-11.368-17.172-16.154-17.172c-3.59 0-5.385 1.776-7.778 4.145c-2.394 2.368-4.787 7.698-8.975 10.659c-3.59 2.96-13.761 2.368-16.154 5.921s2.393 8.883 2.393 17.765c0 3.553-2.992 5.921-3.59 8.29c-.598 2.961-1.197 4.737 0 7.106c2.393 3.553 5.385 4.737 25.727 8.882c10.77 2.369 20.941 8.29 27.523 8.883c6.581.592 17.949 0 17.949-15.989c.599-9.474-4.786-11.843-10.171-21.317m11.368-107.18c-3.59-2.369-6.582-4.738-6.582-8.29c0-3.553 2.394-4.738 5.984-7.698c.598-.593 7.179-6.514 13.761-6.514s14.359 4.145 17.351 5.33c5.385 1.183 10.769 2.368 10.171 6.513c-.598 5.921-1.196 7.106-7.18 10.067c-4.188 1.184-11.966 7.698-17.351 7.698c-2.393 0-5.983 0-8.376-.593c-1.795-.592-4.787-3.553-7.778-6.513"/><path fill="#634703" d="M106.89 85.64c1.197 1.185 2.992 2.37 4.787 2.961c1.196.592 2.991 1.185 2.991 1.185h5.385c2.992 0 7.18-1.185 11.368-3.553c4.188-1.777 4.787-2.961 7.778-4.145c2.992-1.777 5.983-3.553 4.787-4.145c-1.197-.593-2.394 0-6.582 2.368c-3.59 2.369-6.581 3.553-10.171 5.33c-1.795.592-4.188 1.776-5.983 1.776h-5.385c-1.795 0-2.992-.592-4.787-1.184c-1.196-.593-1.795-1.185-2.393-1.185c-1.196-.592-3.59-2.96-4.786-3.553c0 0-1.197 0-.599.593zm17.95-13.027c.598 1.184 1.795 1.184 2.393 1.776s1.197.593 1.197.593c.598-.593 0-1.777-.599-1.777c0-1.184-2.991-1.184-2.991-.592m-9.573 1.184c0 .593 1.196 1.185 1.196.593c.599-.593 1.197-1.185 1.795-1.185c1.197-.592.598-1.184-1.196-1.184c-1.197.592-1.197 1.184-1.795 1.776"/><path fill="#455A64" d="M173.303 178.609v1.776c1.197 2.369 4.188 2.961 6.581 2.961c3.59 0 7.18-2.369 8.975-4.737c0-.592.598-1.185 1.197-1.777c1.196-1.776 1.795-2.96 2.393-3.553c0 0-.598-.592-.598-1.184c-.599-1.184-2.394-2.369-4.787-2.961c-1.795-.592-4.786-1.184-5.983-1.184c-5.385-.592-8.376 1.184-10.171 2.961c0 0 .598 0 .598.592c1.197 1.184 1.795 2.369 1.795 4.145c.598 1.184 0 1.776 0 2.961"/></g></svg>
                        Linux
                  </a>
               </li>
               <li class="tab-item" role="presentation">
                  <a class="tab-link" id="windows-tab" data-bs-toggle="tab" data-bs-target="#windows-tab-pane" type="button" role="tab" aria-controls="windows-tab-pane" aria-selected="false">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#0078D4" d="M0 0h121.329v121.329H0zm134.671 0H256v121.329H134.671zM0 134.671h121.329V256H0zm134.671 0H256V256H134.671z"/></svg>
                        Windows
                     </a>
               </li>
               <li class="tab-item" role="presentation">
                  <a  id="cpanel-tab"
                     class="tab-link" data-bs-toggle="tab" data-bs-target="#cpanel-tab-pane" type="button" role="tab" aria-controls="cpanel-tab-pane" aria-selected="false">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128"><path fill="#ff6c2c" d="M65.085 26.321a7.62 7.62 0 0 0-4.8 1.601a7.97 7.97 0 0 0-2.826 4.24l-18.56 69.517h13.096a7.5 7.5 0 0 0 4.71-1.601a7.97 7.97 0 0 0 2.826-4.145l13.753-51.149h10.55a9.6 9.6 0 0 1 4.506 1.083a10 10 0 0 1 3.391 2.826a10.4 10.4 0 0 1 1.837 4.003a9.26 9.26 0 0 1-.126 4.632a9.91 9.91 0 0 1-9.608 7.441H78.37a7.64 7.64 0 0 0-4.803 1.602a7.97 7.97 0 0 0-2.826 4.144l-3.392 12.717H84.4a27.52 27.52 0 0 0 22.984-12.293a28.2 28.2 0 0 0 3.768-8.336l.377-1.413a26.3 26.3 0 0 0 .377-12.874a28.01 28.01 0 0 0-14.648-19.028a26.6 26.6 0 0 0-12.481-2.967Zm43.984.132v1.033h3.172v8.98h1.165v-8.98h3.17v-1.033zm9.015 0v10.013h1.074V30.09q0-1.457-.094-2.512h.053l3.397 8.89h.94l3.44-8.865h.054a34 34 0 0 0-.097 2.412v6.452H128V26.453h-1.74l-3.197 8.258h-.056l-3.172-8.258zM28.16 44.878a27.3 27.3 0 0 0-9.058 1.507a28.2 28.2 0 0 0-7.85 4.192a27.85 27.85 0 0 0-9.935 14.836L.94 66.826A27.5 27.5 0 0 0 .607 79.7a27.76 27.76 0 0 0 5.134 11.146a28.2 28.2 0 0 0 9.486 7.866a26.6 26.6 0 0 0 12.481 2.967h6.594l3.768-13.941a3.27 3.27 0 0 0-.628-3.062a3.39 3.39 0 0 0-2.779-1.366h-6.029a10 10 0 0 1-4.52-1.036a9.5 9.5 0 0 1-3.392-2.779a10.4 10.4 0 0 1-1.825-4.003a10 10 0 0 1 .142-4.804a10.36 10.36 0 0 1 3.626-5.37a9.6 9.6 0 0 1 5.966-1.977h9.894a7.64 7.64 0 0 0 4.804-1.602a7.97 7.97 0 0 0 2.826-4.238l3.294-12.623z"/></svg>
                        Cpanel
                  </a>
               </li>
            </ul>
            <div class="tab-content" id="myTabCo  ntent">
               <!-- Manual -->
               <div class="tab-pane fade show active" id="linux-tab-pane" role="tabpanel" aria-labelledby="linux-tab" tabindex="0">
                  <div class="code-preview-content">
                     <pre><code class="language-bash">#!/bin/bash
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
echo "Checking prerequisites..." # Check if jq is installed (needed for version parsing)
if ! command -v jq &>/dev/null; then
bold_red "Error: jq is not installed but required to fetch versions."
bold_red "Please install it with:"
bold_blue " sudo apt update && sudo apt install jq"
exit 1
fi # Check if PHP is installed
if ! command -v php &>/dev/null; then
bold_red "Error: PHP is not installed or not in the system PATH."
bold_red "Please install PHP before proceeding."
exit 1
fi # Print the PHP version
bold_green "PHP is installed." # List installed PHP extensions
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
fi # Check if Composer is installed
if ! command -v composer &>/dev/null; then
bold_red "Error: Composer is not installed or not in the system PATH."
bold_red "Please install Composer before proceeding: https://getcomposer.org/download/"
exit 1
fi # Print the Composer version
bold_green "Composer is installed.\n"
}

# Function to fetch the list of valid tags from the GitHub repository

fetch_tags() {
echo "Fetching latest versions from GitHub..." >&2
curl -s https://api.github.com/repos/cypht-org/cypht/releases | \
 jq -r '.[] | select(.created_at > "2018-11-13T03:58:48Z") | .tag_name' | sort -V | \
 awk -F. '
{
major = substr($1, 2)
latest[major] = $0
}
END {
for (major in latest) {
print latest[major]
}
}' | sort -V
}

# Function to install Cypht for a given version

install_cypht() {
local version=$1
    local destination="$BASE_DIR/cypht-$version"
    # Check if the destination directory already exists
    if [ -d "$destination" ]; then
bold_yellow "Cypht version $version already exists at $destination."
        read -p "Do you want to overwrite it? (yes/no) [yes]: " overwrite
        overwrite="${overwrite:-yes}"
if [["$overwrite" != "yes"]]; then
bold_red "Installation aborted."
exit 0
else
bold_blue "Overwriting existing installation..."
sudo rm -rf "$destination"
        fi
    fi
    # Create destination directory
    bold_blue "Creating directory for version $version: $destination\n\n"
    sudo mkdir -p "$destination" # Create temporary working directory
temp_dir=$(mktemp -d)
    cd "$temp_dir" || exit 1 # Download the selected version of Cypht
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
fi # Run composer
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
fi # Fix permissions and ownership
bold_blue "Fixing permissions...\n"
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \; # Ask for group (root is default for other systems, or user for macOS)
read -p "Enter the group to own the files [root]: " group
group="${group:-root}"
    sudo chown -R root:"$group" . # Move files to the destination folder
bold_blue "Copying files to $destination...\n"
    sudo mv ./* ./.[!.]* "$destination" # Clean up temporary directory
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
available_versions=$(echo -e "$available_versions\nmaster")

# Display available versions

echo "$available_versions" | nl -s '. '

# Prompt user to select a version

read -p "Enter the version number (e.g. 1 for $(echo "$available_versions" | head -n 1)) [master]: " version_choice
version_choice="${version_choice:-$(echo "$available_versions" | grep -n "master" | cut -d: -f1)}"

# Get the version based on the user's choice

selected_version=$(echo "$available_versions" | sed -n "${version_choice}p")
if [ -z "$selected_version" ]; then
bold_red "Error: Invalid version choice. Please select a valid number from the list."
exit 1
fi

# Prompt user for BASE_DIR

read -p "Enter the base directory for Cypht installation [/usr/local/share/cypht]: " BASE_DIR
BASE_DIR="${BASE_DIR:-/usr/local/share/cypht}"
bold_blue "Installation of version: $selected_version"
install_cypht "$selected_version"</code></pre>

</div>
</div>
<!-- windows -->
<div class="tab-pane fade" id="windows-tab-pane" role="tabpanel" aria-labelledby="windows-tab" tabindex="0">
<div class="code-preview-content">
 <pre><code class="language-bash">@echo off
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
echo %GREEN% [✓] PHP is installed.%RESET%
set "required_extensions=openssl mbstring curl "
set "missing_extensions="
for %%e in (%required_extensions%) do (
php -m | find /i "%%e" >nul 2>&1
if errorlevel 1 (
set "missing_extensions=!missing_extensions! %%e"
echo %RED% [X] Extension PHP %%e missing%RESET%
)
)
if defined missing_extensions (
echo.
echo %RED% [X] Missing extension :%missing_extensions% %RESET%
echo %RED%Install these extensions before proceeding%RESET%
pause
exit /b 1
) else (
echo.
echo %GREEN% [✓] All required PHP extensions [OpenSSL, mbstring, cURL] are installed.%RESET%
)
echo.
:: 2. Composer Verification
where composer >nul 2>&1
if %errorlevel% neq 0 (
echo %RED% Error: Composer is not installed or not in the system PATH.%RESET%
echo %RED% Please install Composer before proceeding: https://getcomposer.org/download/%RESET%
pause
exit /b 1
)
echo %GREEN% [✓] Composer is installed.%RESET%
echo.
:: fetch list of valid tags from the GitHub repository
:: Create a temporary file
set "temp_file=%temp%\cypht_versions.txt"
:: fetch list
powershell -command "$releases = Invoke-RestMethod -Uri 'https://api.github.com/repos/cypht-org/cypht/releases' -UseBasicParsing; $versions = $releases | Where-Object { $*.created*at -gt [datetime]'2018-11-13T03:58:48Z' } | Select-Object -ExpandProperty tag_name; $latest = $versions | Where-Object { $* -match '^v\d+\.\d+\.\d+$' } | Group-Object { ($_ -split '\.')[0] } | ForEach-Object { $_.Group | Sort-Object -Descending | Select-Object -First 1 }; if ($versions -contains 'master') { $latest += 'master' }; $latest | Sort-Object" > "%temp_file%"
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
powershell -command "Expand-Archive -Path '%temp_dir%\%archive_name%' -DestinationPath '%destination%'; $extracted = Get-ChildItem '%destination%' -Directory | Where-Object {$\_.Name -like 'cypht-\*'} | Select-Object -First 1; if ($extracted) { Get-ChildItem $extracted.FullName | Move-Item -Destination '%destination%' -Force; Remove-Item $extracted.FullName -Recurse -Force }"
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
echo %GREEN% ✓ Cypht %version% installed successfully to %destination% %RESET%
pause</code></pre>
</div>
</div>
<!--  -->
<!-- cpanel -->
<div class="tab-pane fade" id="cpanel-tab-pane" role="tabpanel" aria-labelledby="cpanel-tab" tabindex="0">
<div class="code-preview-content">
<pre><code class="language-bash">#!/bin/bash
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
echo "Checking prerequisites..." # Check if PHP is installed
if ! command -v php &>/dev/null; then
bold_red "Error: PHP is not installed or not in the system PATH."
bold_red "Please install PHP before proceeding."
exit 1
fi # Print the PHP version
bold_green "PHP is installed." # List installed PHP extensions
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
fi # Check if Composer is installed
if ! command -v composer &>/dev/null; then
bold_red "Error: Composer is not installed or not in the system PATH."
bold_red "Please install Composer before proceeding: https://getcomposer.org/download/"
exit 1
fi # Print the Composer version
bold_green "Composer is installed.\n"
}

# Function to fetch the list of valid tags from the GitHub repository

selected_version=""
fetch_tags() {
echo "Fetching latest versions from GitHub..." >&2
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
    local destination="$BASE_DIR" # Create temporary working directory
temp_dir=$(mktemp -d)
    cd "$temp_dir" || exit 1 # Download the selected version of Cypht
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
fi # Run composer
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
fi # Move files to the destination folder
bold_blue "Copying files to $destination...\n"
    rm -rf "$destination"
mkdir -p "$destination"
    mv ./* ./.[!.]* "$destination/" # Clean up temporary directory
cd ..
rm -rf "$temp_dir"
if [ $? -ne 0 ]; then
echo "Error moving files to $destination."
exit 1
fi
bold_green "Cypht $version installed successfully to $destination"
}

# Function: check_public_html_data

# Description: Checks if the user's public_html folder contains data.

# If data is found, it warns the user and asks

# for confirmation to continue, with 'no' as the default option.

# Returns: 0 if the user chooses to continue or if the folder is empty/does not exist.

# 1 if the user chooses to exit.

check_public_html_data() {
local public_html_dir="$BASE_DIR"
    if [ -n "$(ls -A "$public_html_dir")" ]; then
        echo ""
        bold_yellow "WARNING: The folder public_html/ contains data."
        bold_yellow "If you continue, this data could be lost or overwritten."
        echo ""
        read -p "Do you really want to continue? (yes/no) [no]: " -r user_response
        user_response=${user_response,,}
user_response=${user_response:-no}
        case "$user_response" in
yes|y)
return 0
;;
\*)
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
fi</code></pre>

</div>
</div>
</div>
</div>
<!-- setp 3 -->
<div id="config-the-program">
<span class="gpc-body-title">3. Configure the program</span>
<p>
To configure Cypht for your environment, you must first edit the <code>hm3.ini</code> (for Cypht 1.4.x) or <code>.env</code> (for Cypht 2.x.x) file to your liking, .env content can be generated using the Cypht Config Generator, then run the <a href="/config-generator">config-generator</a> script to generate the optimized configuration file and assets used at run-time.
</p>
<p>
For Cypht 1.4.x, begin by editing the "hm3.ini" file to configure Cypht for your environment. If you choose to use a database for any of the three available purposes (authentication, sessions, or user settings), you will need to complete the "DB support" section and create the required tables. SQL to do so can be found in the "hm3.sample.ini" file. The "hm3.ini" file contains many comments explaining each configuration option and how to set it up for your environment.
</p>
<div class="gc-terminal">
<p class="terminal-prompt"> <span class="terminal-command">sudo mkdir -p </span><span class="terminal-text">/var/lib/hm3/{attachments,users,app_data}</span></p>
<p class="terminal-prompt"> <span class="terminal-command">sudo chown -R </span><span class="terminal-text">www-data:www-data /var/lib/hm3/</span></p>
</div>
<p class="mt-2">
The <code>"/var/lib/hm3/users"</code> directory is only required if you are using the file-system and not a database to store user settings <code>(user_config_type = file in the "hm3.ini"</code> or <code>".env").</code> You can put these directories anywhere, just make sure the values in the ini file point to the right place.
</p>
</div>
<!-- step 4 -->
<div id="run-time-config">
<span class="gpc-body-title">4. Generate the run-time configuration</span>
<p>
Cypht uses a build process to create an optimized configuration, and to combine and minimize page assets.Once you have edited your <code>hm3.ini</code> or <code>.env</code> file, generate the configuration with:
</p>
<div class="gc-terminal">
<p class="terminal-prompt"> <span class="terminal-command">cd </span><span class="terminal-text">/usr/local/share/cypht <span class="terminal-comment">(or wherever you put the code in section 1)</span></span></p>
</div>
<p class="mt-2">
Now going to <code >https://your-server/mail</code> should load the Cypht login page. Note that If you use a symlink, your web-server must be configured to follow symlinks.
</p>
</div>
<!-- step 5 -->
<div id="web-server">
<span class="gpc-body-title">5. Enable the program in your web-server</span>
<p>
The easiest way to serve Cypht is to symlink it to the web-server document root. You can also copy the generated files to your web-server location, but then you will need to re-copy them anytime the config_gen script is run. If the source is located at /usr/local/share/cypht, and the web-server document root is at /var/www/html, the following command will make Cypht available under the "mail" path of the web-server
</p>
<!-- <div class="gc-terminal"> -->
<!-- <p class="terminal-prompt"> <span class="terminal-command">sudo ln -s </span><span class="terminal-text">/usr/local/share/cypht /var/www/html/mail</span></p> -->

<div class="code-preview-content gc-terminal">
   <pre class="py-0">
      <code class="language-bash p-0">
sudo ln -s   /usr/local/share/cypht /var/www/html/mail
      </code>
   </pre>
</div>
<div class="mt-4">
   <span class="gpc-body-title">Nginx Configuration</span>
   <p>For Nginx users, add these security rules to your server configuration :</p>
   <div class="code-preview-content">
   <pre><code class="language-bash">
location = / {
rewrite ^/$ /index.php last;
}
#Block hidden files starting with
location ~ /\. {
deny all;
}
#Block sensitive files
location ~\* \.(env|ini|log|conf|json|lock|yml|yaml|md|txt|sh|bat|ps1|xml|bak|sql|dist|inc|cfg|db|csv)$ {
deny all;
}
#Allow exceptions for specific files
location ~\* ^/(server_accounts_sample\.yaml|server_accounts_sample\.csv|contact_sample\.csv)$ {
allow all;
}
#Block RELEASE_NOTES, Makefile, Docker-related configs
location ~\* /(RELEASE_NOTES|Makefile|Dockerfile|docker-compose\.yml|docker-compose\.dev\.yaml|docker-compose\.prod\.yaml)$ {
deny all;
}
#Block .git directory
location ~ /\.git {
deny all;
}
#Disable directory listing
autoindex off;
</code></pre>

<!--  -->
 </div>
</div>
<div>
<p>
Make sure to reload Nginx after making these changes:
</p>
<div class="gc-terminal">
<p class="terminal-prompt"> <span class="terminal-command">sudo systemctl </span><span class="terminal-text">reload nginx</span></p>
</div>
<p>
Now going to https://your-server/mail/ should load the Cypht login page. Note that If you use a symlink, your web-server must be configured to follow symlinks.
</p>
</div>
</div>
<!-- step 6  -->
<div id="users">
<span class="gpc-body-title">6. Users</span>
<p>
Setting up users depends on what type of authentication you configure in the <code>hm3.ini</code> file. If you are using the local database configuration for users, there are scripts in the <code>scripts/</code> directory to help manage them :
</p>
 <ol>
   <li class="">
      <span class="terminal-comment">create an account</span>
      <div class="code-preview-content gc-terminal">
         <pre>
             <code class="language-php">
php ./scripts/create_account.php username password
             </code>
         </pre>
      </div>
   </li>
   <li class="">
      <span class="terminal-comment">delete an account</span>
      <div class="code-preview-content gc-terminal">
         <pre>
             <code class="language-bash">
php ./scripts/delete_account.php username
             </code>
         </pre>
      </div>
   </li>
   <li class="">
      <span class="terminal-comment">change an account password</span>
      <div class="code-preview-content gc-terminal">
         <pre>
             <code class="language-bash py-0">
#Change an account password with old password (preserves user data):
   php ./scripts/update_password.php username old_password new_password
#Change an account password without old password (may lose user data):
php ./scripts/update_password.php username new_password
</code>
         </pre>
      </div>

   </li>
   <!--  -->
   <li class="">
      <span class="terminal-comment"> Password Special Characters</span>
      <div class="g-warning-card">
         <div class="g-warning-card-icon">
            <i class="bi bi-info-circle"></i>
         </div>
         <span class="g-warning-card-text">
          <b>Always quote passwords containing special characters</b> to prevent shell misinterpretation.
         </span>
      </div> 
      <span class="">Shell special characters that require quoting:</span>
      <div class="code-preview-content gc-terminal">
         <pre>
             <code class="language-bash">
    - & - Background operator
    - ; - Command separator  
    - | - Pipe operator
    - > < - Redirection operators
    - $ - Variable expansion
    - `command` - Command substitution
    - * ? - Wildcards
    - ! - History expansion
    - # - Comment marker
    - \ - Escape character
    - ( ) - Subshell
    - { } - Brace expansion
    - [ ] - Pattern matching
    - ~ - Home directory expansion
    - ' " - Quote characters
    - Spaces and tabs
            </code>
         </pre>
      </div>   
   </li>
 </ol>
</div>
<p class="mb-4">
Now going to <code >https://your-server/mail</code> should load the Cypht login page. Note that If you use a symlink, your web-server must be configured to follow symlinks.
</p>
</div>
<!--  -->

<div id="shell-history"> 
   <span class="gpc-body-title">7. Avoid Shell History Exposure</span>   
   <p>Passwords entered on the command line are saved to your shell history file in plain text. Anyone with access to your account can view them. Use these methods to prevent this:</p>
    <ul>
      <li>
        <h6>Method A : Prefix command with a space (Bash/Zsh)</h6>
        <pre><code>
# First, enable this feature (add to ~/.bashrc or ~/.zshrc):
  export HISTCONTROL=ignorespace  # For Bash
# or
  setopt HIST_IGNORE_SPACE        # For Zsh
    # Then prefix your command with a space (notice the space before 'php'):
     php ./scripts/create_account.php username 'password123'
        </code></pre>
      </li>
      <li>
        <h6>Method B : Remove command from history immediately after</h6>
        <pre><code>
# Run your command
   php ./scripts/create_account.php username 'password123'
# Then immediately delete it from history
   history -d $((HISTCMD-1))  # Bash
# or
   history -d -1              # Zsh
        </code> </pre>
      </li>
    </ul>

</div>
<!-- step 8  -->
<div id="debug-mode">
<span class="gpc-body-title">8. Debug mode</span>
<p>
Cypht has a debug or developer mode that can be used to troubleshoot problems or enable faster development of modules. To enable the debug version of Cypht, just sym-link the entire source directory instead of the site sub-directory
</p>
<div class="code-preview-content gc-terminal">
         <pre>
             <code class="language-bash">
sudo ln -s /usr/local/share/cypht /var/www/html/mail-debug
             </code>
         </pre>
      </div>
<p class="mt-2">
Debug mode is not as efficient as the normal version, and it is NOT designed to be secure. <strong>DO NOT RUN DEBUG MODE IN PRODUCTION.</strong> You have been warned! Debug mode outputs lots of information to the PHP error log that can be useful for trouble-shooting problems. The location of the error log varies based on your php.ini settings and web-server software.
</p>
</div>
</div>

   <!--  -->
   <div id="other" class="g-page-card">
      <div class="g-card-header">
         <h5>Other INI files</h5>
       </div>
      <div class="g-card-body">
         <p>
             Some Cypht modules require additional ini files to be configured. These should NOT be inside the web-server document root. Cypht will look for them in the location defined by "app_data_dir" in the hm3.ini file. A sample ini file for each module set that requires one is included in the source for that module. To configure them you must copy the sample ini file to the "app_data_dir" and edit it for your setup.
         </p>
          <p>Some of these require configuring your service with a provider, specifically ones related to Oauth2 client setup (Gi thub,  WordPress, Oauth2 over IMAP for Gmail and Outlook). Re-run the config_gen script after configuring an ini file and it will be merged into the main configuration settings.</p>
         <div>
            <ul>
               <li>
                  <b>Github</b>
                  <p>Cypht can connect to github and aggregate notification data about repository activity. Example github.ini file
                  <a  href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/github/github.ini">get github.ini example</a>
                        , Authorize an application for github
                   <a href="https://github.com/settings/developers">https://github.com/settings/developers</a>
                     </p>
               </li>
               <li>
                  <b>OAUTH2 over IMAP</b>
                  <p>Gmail and Outlook.com support OAUTH2 authentication over IMAP. This is preferable to normal IMAP
                  authentication because Cypht never has access to your account password.</p>
                  <p>
                     Example oauth2 ini file
                     <a href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/imap/oauth2.ini">get oauth2.ini example</a>
                           , Authorize an application for gmail
                     <a href="https://console.developers.google.com/project">https://console.developers.google.com/project</a>, Authorize an application for outlook.com
                     <a href="https://account.live.com/developers/applications/">https://account.live.com/developers/applications</a>
                     </p>
               </li>
               <li>
                  <b>WordPress</b>
                  <p>Cypht can aggregate WordPress.com notifications.Example wordpress.ini file
                     <a href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/wordpress/wordpress.ini">get wordpress.ini example</a>
                           , Authorize an application for WordPress.com
                     <a href="https://developer.wordpress.com/apps/">get example</a>
                  </p>
               </li>
               <li>
                  <b>Custom themes</b>
                  <p>
                     You can create your own themes for Cypht. Edit the themes.ini file to include your theme, and put the css file in modules/themes/assets<br/>
                     Example themes.ini file  <a href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/themes/themes.ini">get theme example</a>
                  </p>
               </li>
            </ul>
          </div>
      </div>
   </div>
</div>
<!--  -->
<div class="guide-actions col-xl-2">
   <div class="g-short-nav">
      <div class="ga-content-header">
         <p class="ga-content-header-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h12M4 12h16M4 19h8" color="currentColor"/></svg>
               On this page
         </p>
      </div>
      <nav>
         <ul id="ga-content-nav">
            <li><a href="#requirement" class="guide-page-menu-active">Requirement</a></li>
            <li class="item-group">
               <a href="#step" class="item-gr-title">Step</a>
               <div class="position-relative ">
                  <div class="cc-line-top"></div>
                  <ul class="sub-iten-list mt-3 mb-2">
                     <li><a href="#check-in" class="">Check-in</a></li>
                     <li><a href="#prepare-code" class="">Prepare code</a></li>
                     <li><a href="#config-the-program" class="">Config the program</a></li>
                     <li><a href="#run-time-config" class="">Run-time config</a></li>
                     <li><a href="#web-server" class="">web-server</a></li>
                     <li><a href="#users" class="">Users</a></li>
                     <li><a href="#shell-history" class="">Shell History</a></li>
                     <li><a href="#debug-mode" class="">Debug mode</a></li>
                  </ul>
                  <div class="cc-line-bottom"></div>
               </div>
            </li>
            <li><a href="#other">Other INI files</a></li>
            </ul>
         </nav>
   </div>
</div>
