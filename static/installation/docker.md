<div class="guide-content">
  <div class="guide-center">
    <div class="guide-page-header">
       <h3>Install Cypht using Docker</h3>
       <p class="guide-page-subtitle">Using Docker is one of the easiest ways to install Cypht as the image bundles the necessary steps from the manual installation.</p>

       <p>
         Repository: <a href="https://hub.docker.com/r/cypht/cypht">https://hub.docker.com/r/cypht/cypht</a>
       </p>
    </div>

    <div class="g-page-card">
        <div class="guide-card-header">
          <h5>Requirements</h5>
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
          <h5>Quick Start</h5>
        </div>
        <div class="g-card-body">
          <ol>
            <li>Create a Project Directory
              <pre>mkdir cypht-docker
              cd cypht-docker</pre>
            </li>
            <li>Create a file named <code>docker-compose.yaml</code> in the directory you just created.</li>
            <li>Copy and paste the content from <a href="https://github.com/cypht-org/cypht/blob/master/docker/docker-compose.yaml">the official compose file</a>.</li>
            <li>
              Run containers:
              <pre>docker compose up -d</pre>
              If you use the legacy standalone tool:
              <pre>docker-compose up -d</pre>
              <b>Note</b>: The legacy docker-compose can be incompatible with newer Docker Engine versions. Prefer the modern Docker Compose plugin.
            </li>
            <li>Access Cypht at <code>http://localhost:80</code> (or your server IP) unless you changed the mapped port.</li>
          </ol>
        </div>
    </div>
    <div class="g-page-card">
        <div class="guide-card-header">
          <h5>Persisting Application Data</h5>
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
