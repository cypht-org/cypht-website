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
              <div class="tab-pane fade show active" id="linux-tab-pane" role="tabpanel" aria-labelledby="linux-tab" tabindex="0">Linux</div>
              <div class="tab-pane fade" id="windows-tab-pane" role="tabpanel" aria-labelledby="windows-tab" tabindex="0">Windows</div>
              <div class="tab-pane fade" id="cpanel-tab-pane" role="tabpanel" aria-labelledby="cpanel-tab" tabindex="0">Cpanel</div>
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
           <p class="guide-page-subtitle">For Nginx users, add these security rules to your server configuration :</p>
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
