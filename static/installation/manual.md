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
        <span class="gpc-body-title">1. Check minimum requirements</span>
        <pre>
            <code>
            #!/bin/bash
            # You need to check php version. For Cypht version 1.4.x, 
            # ensure PHP version is between 5.6 and 7.4, while for version 2.x.x, 
            # PHP 8.1 or higher is required php --version
            # List installed PHP extensions. at least OpenSSL, mbstring and cURL 
            # should  be in the list php -m
            # For PHP 8.4 if there is missing php_imap extension is deprecated and unmaintained - see https://php.watch/versions/8.4/imap-unbundled and https://github.com/php/pecl-mail-imap
            # please download and add it manually, particularly for Windows users who won't be able to log in Cypht without that extension installed.
            # Next you need to check composer version which should be &gt;=2.0.0
            # composer --version
            </code>
        </pre>

        <span class="gpc-body-title">2. Download and prepare the code</span>
        <p>
          It's important to consider where you place the Cypht source. The web server will need read-only access to it, and moving it from one place to
          another requires re-running the configuration script. Do <b>not</b> put the source in the document root as it could create a security risk.
        </p>

        <p>
              On Debian systems, it's common to place the source in the "/usr/local/share/" sub-directory for such cases. The provided bash script
              downloads(installs or upgrades) the specified version of Cypht, prepares the necessary directories, sets up correct permissions and ownership,
              and places the Cypht source in "/usr/local/share/cypht/cypht-version".
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
      <!-- </div> -->
    </div>

      <!-- other -->
      <div id="other">
        <h4>8. Other INI files</h4>
        <p>
            Some Cypht modules require additional ini files to be configured. These should NOT be inside the web-server document root. Cypht will look for them in the location defined by "app_data_dir" in the hm3.ini file. A sample ini file for each module set that requires one is included in the source for that module. To configure them you must copy the sample ini file to the "app_data_dir" and edit it for your setup. Some of these require configuring your service with a provider, specifically ones related to Oauth2 client setup (Github,  WordPress, Oauth2 over IMAP for Gmail and Outlook). Re-run the config_gen script after configuring an ini file and it will be merged into the main configuration settings.
        </p>

        <div>
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
