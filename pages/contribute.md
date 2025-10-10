---
title: Contribute
weight: 40
nocontainer: true
h1: Contributing to Cypht
loadScriptAfter: /js/contribute.js
---

<!-- Hero Section -->
<section class="contribute-hero">
  <div class="contribute-hero-content">
    <div class="contribute-header">
      <div class="mb-2">
        <span class="chip">🤝 Open Source Community</span>
      </div>
      <h1 class="contribute-title">
        Contributing to Cypht
      </h1>
    </div>
    <p class="contribute-subtitle">
      Join our open source community and help make Cypht better! Whether you're a developer, designer, 
      or documentation writer, there are many ways to contribute to the project.
    </p>
    <div class="contribute-buttons">
      <a href="#contributing" class="btn btn-dark">
        Get Started
      </a>
      <a href="https://github.com/cypht-org/cypht" class="btn btn-light" target="_blank" rel="noopener">
        View on GitHub
      </a>
    </div>
  </div>
</section>

<!-- Contribute Content -->
<section class="contribute-content">
  <div class="contribute-container">
    <!-- Navigation -->
    <div class="contribute-nav px-4">
      <div class="text-left lc-header">
        <h2>Want to contribute ?</h2>
        <p>
          The goal of this page is to provide everything you need to know in order to contribute to cypht-website and its different integrations.
        </p>
      </div>
      <ul>
        <li>
          <a href="#dev" class="nav-active">
            <i class="bi bi-collection-fill"></i>
            Dev Workflow
          </a>
        </li>
        <li>
          <a href="#req">
            <i class="bi bi-braces-asterisk"></i>
            Requirements
          </a>
        </li>
        <li>
          <a href="#git">
            <i class="bi bi-git"></i>
            Git Guidelines
          </a>
        </li>
      </ul>
    </div>
    <!-- Content Card -->
    <div class="content-card">
      <!-- Development Workflow Section -->
      <div id="dev" class="dev-content">
         <div class="parent">
           <div class="div1">
              <div class="dev-header">
                <div class="req-header-chip">
                  <span class="req-header-chip-icon">
                    <i class="bi bi-collection-fill"></i>
                  </span>
                  <span class="req-header-chip-text">Development Workflow</span>
                </div>
                 <h3>Our Development Approach</h3>
              </div>
           </div>
            <div class="div2 dev-flow-card">
               <h4>Backend Development</h4>
               <ul>
                 <li>Pure PHP</li>
                 <li>No heavy frameworks</li>
                 <li>Lightweight & Fast</li>
               </ul>
               <p>Our backend is built with pure PHP, ensuring optimal performance without the overhead of heavy frameworks.</p>
            </div>
            <div class="div3 dev-flow-card">
               <h4>Frontend Development</h4>
               <ul>
                 <li>HTML & CSS</li>
                 <li>Semantic structure</li>
              </ul>
              <p>We use clean HTML and CSS with semantic structure to create modern, accessible user interfaces.</p>
            </div>
            <div class="div4 dev-flow-card">
               <h4>Framework Integration</h4>
               <ul>
                 <li>Bootstrap</li>
                 <li>Enhanced UI/UX</li>
              </ul>
              <p>Bootstrap framework integration enhances our UI/UX with responsive components and modern design patterns.</p>
            </div>
         </div>
        <div class="dev-flow-label-card">
            <img src="img/contribute.png" alt="Contribute illustration" />
            <div class="dev-flow-text">
              <h4>Want to Contribute?</h4>
              <p>Join our open-source team and help us build next-gen mailing features 🚀</p>
            </div>
        </div>
      </div>
      <!-- Requirements Section -->
      <div id="req" class="req-content">
        <div class="req-header">
          <div class="req-header-chip">
              <span class="req-header-chip-icon">
                <i class="bi bi-braces-asterisk"></i>
              </span>
              <span class="req-header-chip-text">Requirements</span>
          </div>
          <h3>Before contributing, make sure you meet these requirements</h3>
        </div>
        <div class="req-list">
          <ul>
            <li>
            <div>
              <span class="req-list-item-icon">
                <!-- <i class="bi bi-check-circle"></i> -->
              01
              </span>
            </div>
            <span class="req-list-item-text">
            You're familiar with <a href="https://github.com" target="_blank" rel="noopener"><i class="bi bi-github"></i>GitHub</a> and the
                <a href="https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests" target="_blank" rel="noopener"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="5" cy="6" r="3"/><path d="M5 9v12"/><circle cx="19" cy="18" r="3"/><path d="m15 9l-3-3l3-3"/><path d="M12 6h5a2 2 0 0 1 2 2v7"/></g></svg>pull Request</a> (PR) workflow.
            </span>
            </li>
            <li>
              <div>
                <span class="req-list-item-icon">
                  <!-- <i class="bi bi-check-circle"></i> -->
                02
                </span>
              </div>
              <span class="req-list-item-text">
              You've read the Cypht <a href="/documentation"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 12h1m7 0h-4m4-4h-1m-3 0H8m0 8h5M3 14v-4c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"/></svg>documentation</a> and the <a
                    href="https://github.com/cypht-org/cypht#readme" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M5.25 14.5a.75.75 0 0 1 .75-.75h8a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"/><path d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854c-.529-.529-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094c.203.204.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a45.815 45.815 0 0 0-1.17-1.076l-3.959-3.563A37.2 37.2 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678c.412.924.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.056z"/></g></svg>README</a>.
              </span>
            </li>
            <li>
              <div>
                <span class="req-list-item-icon">
                  <!-- <i class="bi bi-check-circle"></i> -->
                 03
                </span>
              </div>
              <span class="req-list-item-text">
                You know about the <a href="https://gitter.im/cypht-org/community" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"/></svg>Cypht community.</a> Please use this as help and check <a href="/how-to-join"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M8 13h8m-8 0v5c0 1.886 0 2.828.586 3.414C9.172 22 10.114 22 12 22c1.886 0 2.828 0 3.414-.586C16 20.828 16 19.886 16 18v-5m-8 0a7.459 7.459 0 0 1-5.618-5.472L2 6m14 7c1.71 0 3.15 1.28 3.35 2.98L20 21.5"/><circle cx="12" cy="6" r="4"/></g></svg>How to join the community.</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
      <div id="git" class="req-content">
        <div class="req-header">
          <div class="req-header-chip">
            <span class="req-header-chip-icon">
              <i class="bi bi-git"></i>
            </span>
            <span class="req-header-chip-text">Git Guidelines</span>
          </div>
          <h3>Follow these steps to contribute to the project</h3>
        </div>
        <div class="req-list">
          <ul>
            <li>
              <div>
                <span class="req-list-item-icon">
                  <!-- <i class="bi bi-check-circle"></i> -->
                 01
                </span>
              </div>
              <span class="req-list-item-text">
                Make sure that the contribution you want to make is explained or detailed in a GitHub issue! Find an
                <a href="https://github.com/cypht-org/cypht-website/issues" target="_blank" rel="noopener">
                  <i class="bi bi-github"></i>
                  existing issue
                </a>
                or
                <a href="https://github.com/cypht-org/cypht-website/issues/new/choose" target="_blank" rel="noopener">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"> <!-- Icon from Huge Icons by Hugeicons - undefined --> <g fill="none" stroke="currentColor" stroke-linecap="round"><path stroke-width="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10s0 5.657-1.172 6.828S17.771 18 14 18h-4c-3.771 0-5.657 0-6.828-1.172S2 13.771 2 10Zm14 12a8.4 8.4 0 0 0-4-1a8.4 8.4 0 0 0-4 1"/><path stroke-linejoin="round" stroke-width="2" d="M12 14h.009"/><path stroke-linejoin="round" stroke-width="1.5" d="M12 11V7"/></g></svg>
                  open a new one
                </a>.
              </span>
            </li>
            <li>
              <div>
                <span class="req-list-item-icon">
                  <!-- <i class="bi bi-check-circle"></i> -->
                  02
                </span>
              </div>
              <span class="req-list-item-text">
                Once done,
                <a href="https://github.com/cypht-org/cypht-website/fork" target="_blank" rel="noopener">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"> <!-- Icon from Fluent UI System Icons by Microsoft Corporation - https://github.com/microsoft/fluentui-system-icons/blob/main/LICENSE --><path fill="currentColor" d="M11 5.5a3.5 3.5 0 0 1-3 3.465V11.5h6.25a2.25 2.25 0 0 0 2.25-2.25v-.395A3.502 3.502 0 0 1 17.5 2a3.5 3.5 0 0 1 .5 6.965v.285A3.75 3.75 0 0 1 14.25 13H8v2.035a3.5 3.5 0 1 1-1.5.11v-6.29A3.502 3.502 0 0 1 7.5 2A3.5 3.5 0 0 1 11 5.5"/></svg>
                  fork the cypht website repository
                </a>
                to your own GitHub account.
                You can request a maintainer to check your issue before making a PR.
              </span>
            </li>
            <li>
              <div>
                <span class="req-list-item-icon">
                  <!-- <i class="bi bi-check-circle"></i> -->
                03
                </span>
              </div>
              <span class="req-list-item-text">
                Create a new Git branch.
              </span>
            </li>
            <li>
              <div>
                <span class="req-list-item-icon">
                  <!-- <i class="bi bi-check-circle"></i> -->
                  04
                </span>
              </div>
              <span class="req-list-item-text">
                Review the
                <a href="#development-workflow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"> <!-- Icon from Huge Icons by Hugeicons - undefined --><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 18c0-1.414 0-2.121.44-2.56C15.878 15 16.585 15 18 15s2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C15 20.122 15 19.415 15 18ZM3 9c0-1.414 0-2.121.44-2.56C3.878 6 4.585 6 6 6s2.121 0 2.56.44C9 6.878 9 7.585 9 9s0 2.121-.44 2.56C8.122 12 7.415 12 6 12s-2.121 0-2.56-.44C3 11.122 3 10.415 3 9Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M9 9h3c2.828 0 4.243 0 5.121.879C18 10.757 18 12.172 18 15M6 12v10M6 6V2"/></g></svg>
                  Development Workflow
                </a>
                section that describes the project's technology used.
              </span>
            </li>
            <li>
              <div>
                <span class="req-list-item-icon">
                  <!-- <i class="bi bi-check-circle"></i> -->
                05
                </span>
              </div>
              <span class="req-list-item-text">
                Implement the changes on your branch.
              </span>
            </li>
            <li>
              <div>
                <span class="req-list-item-icon">
                  <!-- <i class="bi bi-check-circle"></i> -->
                06
                </span>
              </div>
              <span class="req-list-item-text">
                Submit the branch as a PR pointing to the
                <code>master</code>
                branch of cypht-website repository.
              </span>
            </li>
            <li>
              <div>
                <span class="req-list-item-icon">
                07
                  <!-- <i class="bi bi-check-circle"></i> -->
                </span>
              </div>
              <span class="req-list-item-text">
                A maintainer will comment and/or review your Pull Request. Depending on the circumstances, this process may take some time.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>  
  </div>
</section>

<section class="contributors-section">
  <div class="contributors-wrapper">
   <div class="contributor-header mb-5">
     <div class="req-header-chip">
        <span class="req-header-chip-icon">
          <i class="bi bi-people-fill"></i>
        </span>
        <span class="req-header-chip-text">Contributors</span>
      </div>
      <div class="contributor-header-text">
        <h3>Meet the talented developers who make Cypht possible.</h3>
      </div>
    </div>

    <div id="contributors" class="contributors-grid">
      <!-- contributors will load here -->
    </div>

  </div>
</section>
