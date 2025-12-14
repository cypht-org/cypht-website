<div class="guide-left px-2 col col-xl-9 scroll"
data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0"
>
    <div class="guide-page-header">
       <h3>Install Cypht using Docker</h3>
       <p class="guide-page-subtitle">Using Docker is one of the easiest ways to install Cypht as the image bundles the necessary steps from the manual installation.</p>

       <p>
         Repository: <a href="https://hub.docker.com/r/cypht/cypht">https://hub.docker.com/r/cypht/cypht</a>
       </p>
    </div>

    <div  class="g-page-card">
        <div class="guide-card-header">
          <h4 id="requirement">Requirements</h4>
        </div>
        <div class="g-card-body">
          <ul>
            <li><b>Docker Engine</b>: Ensure Docker is installed on your system. <a href="https://docs.docker.com/get-started/get-docker/">Get Docker</a></li>
            <li><b>Docker Compose</b>: Install Docker Compose (often included with Docker Desktop). <a href="https://docs.docker.com/compose/install/">Install Docker Compose</a></li>
          </ul>
        </div>
    </div>
    <div class="g-page-card">
        <div class="guide-card-header">
          <h4 id="quick_start">Quick Start</h4>
        </div>
        <div class="g-card-body">
          <ol>

  <li>
   <span class="terminal-comment">Create a Project Directory</span>
     <div class="code-preview-content gc-terminal mt-1">
          <pre><code class="language-bash">
mkdir cypht-docker
cd cypht-docker
</code>
</pre>
</div>
</li>

<li>Create a file named <code>docker-compose.yaml</code> in the directory you just created.</li>
<li>Copy and paste the content from <a href="https://github.com/cypht-org/cypht/blob/master/docker/docker-compose.yaml">the official compose file</a>.</li>
<li>
Run containers
If you use the legacy standalone tool:
<div class="gc-terminal">
<p class="terminal-prompt"> <span class="terminal-command">docker compose </span><span class="terminal-text">up -d</span></p>
</div>
<div class="g-warning-card">
<div class="g-warning-card-icon">
<i class="bi bi-info-circle"></i>
</div>
<span class="g-warning-card-text">
<b>Note</b>: The legacy docker-compose can be incompatible with newer Docker Engine versions. Prefer the modern Docker Compose plugin.
</span>
</div>
</li>
<li>Access Cypht at <code>http://localhost:80</code> (or your server IP) unless you changed the mapped port.</li>
</ol>
</div>
</div>
<div class="g-page-card">
<div class="guide-card-header">
<h4 id="persisting_data">Persisting Application Data</h4>
</div>
<div class="g-card-body">
<ol>
<li><b>Docker Engine</b>: Ensure Docker is installed on your system. <a href="https://docs.docker.com/get-started/get-docker/">Get Docker</a></li>
<li><b>Docker Compose</b>: Install Docker Compose (often included with Docker Desktop). <a href="https://docs.docker.com/compose/install/">Install Docker Compose</a></li>
</ol>
</div>
</div>

  </div>

   <!-- guide actions -->
  <div class="guide-actions col-xl-2">
    <div class="g-short-nav">
      <div class="ga-content-header">
        <p class="ga-content-header-title">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h12M4 12h16M4 19h8" color="currentColor"/></svg>
              On this page
        </p>
      </div>
      <nav id="navbar-example2" class="">
        <ul id="ga-content-nav" class="">
          <li class=""><a class="" href="#requirement" class="guide-page-menu-active">Requirement</a></li>
          <li class=""><a class="" href="#quick_start">Quick start</a></li>
          <li class=""><a class="" href="#persisting_data">Persisting data</a></li>
        </ul>
      </nav>
    </div>
  </div>
