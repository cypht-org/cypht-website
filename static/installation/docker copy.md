<div class="guide-content">
  <div class="guide-center">
     <div class="guide-page-header">
       <h3>Install Cypht using Docker</h3>
       <p class="guide-page-subtitle">Using Docker is one of the easiest ways to install Cypht as the image bundles the necessary steps from the manual installation.</p>

       <p>
         Repository: <a href="https://hub.docker.com/r/cypht/cypht">https://hub.docker.com/r/cypht/cypht</a>
       </p>
     </div>

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

  <!-- <h3><b>Requirements</b></h3>
  <ul>
    <li><b>Docker Engine</b>: Ensure Docker is installed on your system. <a href="https://docs.docker.com/get-started/get-docker/">Get Docker</a></li>
    <li><b>Docker Compose</b>: Install Docker Compose (often included with Docker Desktop). <a href="https://docs.docker.com/compose/install/">Install Docker Compose</a></li>
  </ul> -->

  <h3><b>Quick Start</b></h3>
  <ol>
    <li>
      Create a Project Directory
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

  <p>
    <b>Security note</b>: Change default usernames/passwords in the compose file before using in production.
  </p>

  <h3 id="persisting-data"><b>Persisting Application Data</b></h3>
  <p>
    Mount persistent volumes to preserve user configurations and attachments:
  </p>
  <pre>
cypht:
  image: cypht/cypht:2.4.2
  ports:
    - "80:80"
  environment:
    - AUTH_USERNAME=admin
    # ... other environment variables
  volumes:
    - ./data/user_settings:/var/lib/hm3/users          # User profiles and settings
    - ./data/user_attachments:/var/lib/hm3/attachments # Email attachments
  </pre>
      </div>
      <div class="guide-actions">
           <a href="#docker-guide" class="">Docker Installation</a>
      </div>          
</div>
