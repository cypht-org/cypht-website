<div class="guide-content">
  <div class="guide-center">
    <div class="guide-page-header">
       <h3>Manual installation</h3>
       <p class="guide-page-subtitle">Manual installation is the most flexible option, but it requires more setup and configuration.</p>
    </div>
    <!--  -->
    <div id="requirement" class="g-page-card">
      <div class="guide-card-header">
        <h5>Requirements</h5>
      </div>
      <div class="g-card-body">
        <p>
          <a href="https://github.com/cypht-org/cypht/tree/1.4.x">Cypht 1.4.x</a> requires PHP 5.6 to 7.4. For PHP 8.1+, please use
          <a href="https://github.com/cypht-org/cypht/tree/2.x">Cypht 2.x+</a>, <a href="https://getcomposer.org/">Composer 2</a>, and at minimum the
          <a href="http://php.net/manual/en/book.openssl.php">OpenSSL</a>, <a href="http://php.net/manual/en/book.mbstring.php">mbstring</a> and
          <a href="http://php.net/manual/en/book.curl.php">cURL</a> extensions. Cypht can also leverage several other extensions as defined in
          <a href="https://github.com/cypht-org/cypht/blob/1.4.x/composer.json#L37-L44">composer.json</a>. Testing is done on
          <a href="https://www.debian.org/">Debian</a> and <a href="http://www.ubuntu.com/">Ubuntu</a> platforms with
          <a href="http://nginx.com/">Nginx</a> and <a href="http://httpd.apache.org/">Apache</a>.
        </p>
        <p>Before proceeding please make sure your system meets minimal requirements</p>
      </div>
    </div>
    <!--  -->
    <div id="step" class="g-page-card">
      <div class="g-card-header">
          <h5>Steps</h5>
      </div>
      <div class="g-card-body ms-3">
      <!-- step 1 -->
      <div>
        <span class="gpc-body-title">1. Check minimum requirements</span>
        <ul class="list_letter" >
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
      </div>
      <!-- step 2 -->
      <div>
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

          <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="linux-tab" data-bs-toggle="tab" data-bs-target="#linux-tab-pane" type="button" role="tab" aria-controls="linux-tab-pane" aria-selected="true">Linux</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="windows-tab" data-bs-toggle="tab" data-bs-target="#windows-tab-pane" type="button" role="tab" aria-controls="windows-tab-pane" aria-selected="false">Windows</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="cpanel-tab" data-bs-toggle="tab" data-bs-target="#cpanel-tab-pane" type="button" role="tab" aria-controls="cpanel-tab-pane" aria-selected="false">Cpanel</button>
              </li>
            </ul>
            <div class="tab-content" id="myTabCo  ntent">
              <div class="tab-pane fade show active" id="linux-tab-pane" role="tabpanel" aria-labelledby="linux-tab" tabindex="0">
                <div class="gc-code-card">
                  <!-- <pre class="line-numbers"> -->
                  <code class="language-bash">
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
                      if ! command -v jq &amp;&gt;/dev/null; then
                          bold_red "Error: jq is not installed but required to fetch versions."
                          bold_red "Please install it with:"
                          bold_blue "  sudo apt update &amp;&amp; sudo apt install jq"
                          exit 1
                      fi

                      # Check if PHP is installed
                      if ! command -v php &amp;&gt;/dev/null; then
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
                      if ! command -v composer &amp;&gt;/dev/null; then
                          bold_red "Error: Composer is not installed or not in the system PATH."
                          bold_red "Please install Composer before proceeding: https://getcomposer.org/download/"
                          exit 1
                      fi

                      # Print the Composer version
                      bold_green "Composer is installed.\n"

                  }

                  # Function to fetch the list of valid tags from the GitHub repository
                  fetch_tags() {
                      echo "Fetching latest versions from GitHub..." &gt;&amp;2  # Print to stderr to avoid mixing with output
                      curl -s https://api.github.com/repos/cypht-org/cypht/releases | \
                      jq -r '.[] | select(.created_at &gt; "2018-11-13T03:58:48Z") | .tag_name' | sort -V | \
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
                  </code>
                  <!-- </pre> -->

                </div>
              </div>
              <div class="tab-pane fade" id="windows-tab-pane" role="tabpanel" aria-labelledby="windows-tab" tabindex="0">
                <div class="gc-code-card">

                </div>
              </div>
              <div class="tab-pane fade" id="cpanel-tab-pane" role="tabpanel" aria-labelledby="cpanel-tab" tabindex="0">
                <div class="gc-code-card">

                </div>
              </div>
            </div>
        </div>
      </div>
      <!-- step 3 -->
      <div>
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
      <div>
        <span class="gpc-body-title">4. Generate the run-time configuration</span>
        <p>
            Cypht uses a build process to create an optimized configuration, and to combine and minimize page assets.Once you have edited your <code>hm3.ini</code> or <code>.env</code> file, generate the configuration with:
        </p>
        <div class="gc-terminal">
          <p class="terminal-prompt"> <span class="terminal-command">cd </span><span class="terminal-text">/usr/local/share/cypht  <span class="terminal-comment">(or wherever you put the code in section 1)</span></span></p>
        </div>
        <p class="mt-2">
            Now going to <code >https://your-server/mail</code> should load the Cypht login page. Note that If you use a symlink, your web-server must be configured to follow symlinks.
        </p>
      </div>
      <!-- step 5 -->
      <div>
        <span class="gpc-body-title">5. Enable the program in your web-server</span>
        <p>
          The easiest way to serve Cypht is to symlink it to the web-server document root. You can also copy the generated files to your web-server location, but then you will need to re-copy them anytime the config_gen script is run. If the source is located at /usr/local/share/cypht, and the web-server document root is at /var/www/html, the following command will make Cypht available under the "mail" path of the web-server
        </p>
        <div class="gc-terminal">
          <p class="terminal-prompt"> <span class="terminal-command">sudo ln -s </span><span class="terminal-text">/usr/local/share/cypht  /var/www/html/mail</span></p>
        </div>
        <div>
           <span class="gpc-body-title">Nginx Configuration</span>
           <p>
            For Nginx users, add these security rules to your server configuration :
           </p>
           <div class="gc-code-card">
              <span>
                location = / {
                    rewrite ^/$ /index.php last;
                }
                   </span>

                <span>
                # Block hidden files starting with<br/>
                location ~ /\. {
                    deny all;
                }
                </span>

                <span>
                # Block sensitive files<br/>
                location ~* \.(env|ini|log|conf|json|lock|yml|yaml|md|txt|sh|bat|ps1|xml|bak|sql|dist|inc|cfg|db|csv)$ {
                    deny all;
                }
                </span>

                <span>
                # Allow exceptions for specific files<br/>
                location ~* ^/(server_accounts_sample\.yaml|server_accounts_sample\.csv|contact_sample\.csv)$ {
                    allow all;
                }
                </span>

                <span>
                # Block RELEASE_NOTES, Makefile, Docker-related configs<br/>
                location ~* /(RELEASE_NOTES|Makefile|Dockerfile|docker-compose\.yml|docker-compose\.dev\.yaml|docker-compose\.prod\.yaml)$ {
                    deny all;
                }
                </span>

                <span>
                # Block .git directory<br/>
                location ~ /\.git {
                    deny all;
                }
                </span>

                <span>
                # Disable directory listing<br/>
                autoindex off;
                </span>
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
      <div>
        <span class="gpc-body-title">6. Users</span>
        <p>
           Setting up users depends on what type of authentication you configure in the <code>hm3.ini</code> file. If you are using the local database configuration for users, there are scripts in the <code>scripts/</code> directory to help manage them:
        </p>
        <div class="gc-terminal">
          <div>
            <p class="terminal-prompt">
            <span class="terminal-comment"># create an account</span>
            </p>
            <p class="terminal-prompt">
            <span class="terminal-command">php </span><span class="terminal-text"> ./scripts/create_account.php username password </span>
            </p>
          </div>
          <div>
            <p class="terminal-prompt">
            <span class="terminal-comment"># delete an account</span>
            </p>
            <p class="terminal-prompt">
            <span class="terminal-command">php </span><span class="terminal-text"> ./scripts/delete_account.php username </span>
            </p>
          </div>
          <div>
            <p class="terminal-prompt">
            <span class="terminal-comment"># change an account password</span>
            </p>
            <p class="terminal-prompt">
            <span class="terminal-command">php </span><span class="terminal-text"> ./scripts/update_password.php username password </span>
            </p>
          </div>
        </div>
        <p class="mt-2">
            Now going to <code >https://your-server/mail</code> should load the Cypht login page. Note that If you use a symlink, your web-server must be configured to follow symlinks.
        </p>
      </div>
      <!-- step 7  -->
      <div>
        <span class="gpc-body-title">7. Debug mode</span>
        <p>
           Cypht has a debug or developer mode that can be used to troubleshoot problems or enable faster development of modules. To enable the debug version of Cypht, just sym-link the entire source directory instead of the site sub-directory
        </p>
        <div class="gc-terminal">
          <div>
            <p class="terminal-prompt">
            <span class="terminal-command">sudo ln -s </span><span class="terminal-text">/usr/local/share/cypht  /var/www/html/mail-debug</span>
            </p>
          </div>
        </div>
        <p class="mt-2">
           Debug mode is not as efficient as the normal version, and it is NOT designed to be secure. <strong>DO NOT RUN DEBUG MODE IN PRODUCTION.</strong> You have been warned! Debug mode outputs lots of information to the PHP error log that can be useful for trouble-shooting problems. The location of the error log varies based on your php.ini settings and web-server software.
        </p>
      </div>
    </div>


    <!-- nginx -->
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
            <li><b>Github</b>
                <p>Cypht can connect to github and aggregate notification data about repository activity. Example github.ini file
                    <a
                        href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/github/github.ini">get github.ini example</a>
                    , Authorize an application for github
                    <a
                        href="https://github.com/settings/developers">https://github.com/settings/developers</a>
                </p>
            </li>
            <li><b>OAUTH2 over IMAP</b>
                <p>Gmail and Outlook.com support OAUTH2 authentication over IMAP. This is preferable to normal IMAP
                    authentication because Cypht never has access to your account password. Example oauth2 ini file
                    <a
                        href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/imap/oauth2.ini">get oauth2.ini example</a>
                    , Authorize an application for gmail
                    <a
                        href="https://console.developers.google.com/project">https://console.developers.google.com/project</a>
                    , Authorize an application for outlook.com
                    <a
                        href="https://account.live.com/developers/applications/">https://account.live.com/developers/applications/</a>
                </p>
            </li>
            <li><b>WordPress</b>
                <p>Cypht can aggregate WordPress.com notifications.Example wordpress.ini file
                    <a
                        href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/wordpress/wordpress.ini">get wordpress.ini example</a>
                    , Authorize an application for WordPress.com
                    <a href="https://developer.wordpress.com/apps/">get example</a>
                </p>
            </li>
              <li>
                <b>Custom themes</b>
                <p>
                    You can create your own themes for Cypht. Edit the themes.ini file to include your theme, and put the css file in modules/themes/assets<br/>
                    Example themes.ini file  <a
                        href="https://github.com/cypht-org/cypht/blob/1.4.x/modules/themes/themes.ini">get theme example</a>
                </p>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>

  <!-- guide actions -->
  <div class="guide-actions">
    <div class="ga-content">
      <div class="ga-content-header">
        <p class="ga-content-header-title">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h12M4 12h16M4 19h8" color="currentColor"/></svg>
              On this page
        </p>
      </div>
      <nav>
        <ul id="ga-content-nav">
          <li><a href="#meet_cypht" class="guide-page-menu-active">Requirement</a></li>
          <li><a href="#why_cypht">Step</a></li>
          <li><a href="#security_privacy">Other INI files</a></li>
        </ul>
      </nav>
    </div>
  </div>          
</div>
