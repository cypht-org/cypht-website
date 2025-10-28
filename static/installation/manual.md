<div class="guide-right">
      <div class="guide-center">
              <h2>1. Manual installation</h2>

  <h3>Requirements</h3>
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

  <h3>Steps</h3>
  <h4>1. Check minimum requirements</h4>
  <pre>
#!/bin/bash
# You need to check php version. For Cypht version 1.4.x, ensure PHP version is between 5.6 and 7.4, while for version 2.x.x, PHP 8.1 or higher is required.
php --version
# List installed PHP extensions. at least OpenSSL, mbstring and cURL should be in the list
php -m
# For PHP 8.4 if there is missing php_imap extension is deprecated and unmaintained - see https://php.watch/versions/8.4/imap-unbundled and https://github.com/php/pecl-mail-imap
# please download and add it manually, particularly for Windows users who won't be able to log in Cypht without that extension installed.
# Next you need to check composer version which should be &gt;=2.0.0
composer --version
  </pre>

  <h4>2. Download and prepare the code</h4>
  <p>
    It's important to consider where you place the Cypht source. The web server will need read-only access to it, and moving it from one place to
    another requires re-running the configuration script. Do <b>not</b> put the source in the document root as it could create a security risk.
    On Debian systems, it's common to place the source in the "/usr/local/share/" sub-directory for such cases. The provided bash script
    downloads(installs or upgrades) the specified version of Cypht, prepares the necessary directories, sets up correct permissions and ownership,
    and places the Cypht source in "/usr/local/share/cypht/cypht-version". It also ensures that the required configuration files are created,
    such as .env or hm3.ini (depending on the version). The script requires sudo access to perform these actions:
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

bold_green() { echo -e "\033[1m\033[32m✓ $1\033[0m"; }
bold_red() { echo -e "\033[1m\033[31m$1\033[0m"; }
bold_blue() { echo -e "\033[1m\033[34m$1\033[0m"; }
bold_yellow(){ echo -e "\033[1m\033[33m$1\033[0m"; }

# (Truncated for brevity) This script checks prerequisites, fetches tags, downloads the selected version,

# runs composer, creates configuration files, fixes permissions and installs Cypht into your chosen directory.

      </pre>
    </div>
    <div class="tab-pane fade" id="windows" role="tabpanel" aria-labelledby="windows-tab">
      <pre>

@echo off
:: Minimal Windows bootstrap (truncated). Verifies PHP/Composer and downloads the chosen version.

</pre>
</div>
<div class="tab-pane fade" id="cpanel" role="tabpanel" aria-labelledby="cpanel-tab">
<pre>
#!/bin/bash

# Minimal cPanel flow (truncated). Verifies PHP/Composer and installs the selected version to public_html.

      </pre>
    </div>

  </div>

  <h4>3. Configure the program</h4>
  <p>
    To configure Cypht for your environment, edit the "hm3.ini" (for Cypht 1.4.x) or ".env" (for Cypht 2.x.x) file, then run the "config_gen.php"
    script to generate the optimized configuration file and assets used at run-time.
  </p>
  <pre>
sudo mkdir -p /var/lib/hm3/{attachments,users,app_data}
sudo chown -R www-data /var/lib/hm3/
  </pre>

  <h4>4. Generate the run-time configuration</h4>
  <p>Cypht uses a build process to create an optimized configuration, and to combine and minimize page assets.</p>
  <pre>
cd /usr/local/share/cypht  # or wherever you put the code in section 1
sudo php ./scripts/config_gen.php
  </pre>

  <h4>5. Enable the program in your web-server</h4>
  <p>
    The easiest way to serve Cypht is to symlink it to the web-server document root. You can also copy the generated files to your web-server
    location, but then you will need to re-copy them anytime the config_gen script is run.
  </p>
  <pre>
sudo ln -s /usr/local/share/cypht/site /var/www/html/mail
  </pre>

  <h4>Nginx Configuration</h4>
  <pre>
location = / { rewrite ^/$ /index.php last; }
location ~ /\. { deny all; }
location ~* \.(env|ini|log|conf|json|lock|yml|yaml|md|txt|sh|bat|ps1|xml|bak|sql|dist|inc|cfg|db|csv)$ { deny all; }
location ~* /(RELEASE_NOTES|Makefile|Dockerfile|docker-compose\.yml|docker-compose\.dev\.yaml|docker-compose\.prod\.yaml)$ { deny all; }
location ~ /\.git { deny all; }
autoindex off;
  </pre>

  <h4>6. Users</h4>
  <pre>
# create an account
php ./scripts/create_account.php username password
# delete an account
php ./scripts/delete_account.php username
# change an account password
php ./scripts/update_password.php username password
  </pre>

  <h4>7. Debug mode</h4>
  <pre>
sudo ln -s /usr/local/share/cypht /var/www/html/mail-debug
  </pre>
  <p>Debug mode is not as efficient as the normal version, and it is NOT designed to be secure. DO NOT RUN DEBUG MODE IN PRODUCTION.</p>
      </div>
      <div class="guide-actions">
           <a href="#manual-guide" class="">Manual Installation</a>
      </div>          
</div>
