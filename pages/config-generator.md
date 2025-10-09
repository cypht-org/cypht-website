---
title: Config generator
weight: 21
# loadScriptAfter: /config-generator.js
h1: false
# css: /assets/config-generator.css
---

<!-- Hero Section -->
<section class="config-hero">
  <div class="config-hero-container">
    <div class="config-hero-content">
      <div class="chip">⚙️ Configuration Tool</div>
      <h1 class="config-hero-title">Generate Your Perfect Cypht Configuration</h1>
      <p class="config-hero-subtitle">
        Create a customized configuration file tailored to your specific needs with our intuitive generator tool. 
        Configure authentication, database, security, and integration options with ease.
      </p>
      <a href="#generator" class="btn btn-dark">
        Start Generator
      </a>
    </div>
  </div>
</section>

<section class="mt-4">
  <div>
      <div class="config-options-header">
        <h2 class="config-options-title">Configuration Categories</h2>
        <p class="config-options-subtitle">
          Choose from the available configuration options to customize your Cypht installation. 
          Each category contains specific settings for different aspects of your email system.
        </p>
      </div>
      <!--  -->
      <div>
          <!-- Menu -->
        <ul>
            <li></li>
        </ul>

      </div>

  </div>
</section>

<!-- Configuration Options Overview -->
<section class="config-options">
  <div class="config-options-container">
    <div class="config-options-header">
      <h2 class="config-options-title">Configuration Categories</h2>
      <p class="config-options-subtitle">
        Choose from the available configuration options to customize your Cypht installation. 
        Each category contains specific settings for different aspects of your email system.
      </p>
    </div>
    
    <div class="config-categories-grid">
      <div class="config-category-card app">
        <div class="config-category-icon">📱</div>
        <h3 class="config-category-title">App Configuration</h3>
        <p class="config-category-description">Core application settings including session management, authentication types, and basic preferences.</p>
        <div class="config-category-status">Available</div>
      </div>
      
      <div class="config-category-card database">
        <div class="config-category-icon">🗄️</div>
        <h3 class="config-category-title">Database</h3>
        <p class="config-category-description">Database connection settings for MySQL, PostgreSQL, and SQLite with advanced configuration options.</p>
        <div class="config-category-status">Available</div>
      </div>
      
      <div class="config-category-card twofa">
        <div class="config-category-icon">🔐</div>
        <h3 class="config-category-title">Two-Factor Authentication</h3>
        <p class="config-category-description">Enhanced security with TOTP-based two-factor authentication for additional account protection.</p>
        <div class="config-category-status">Available</div>
      </div>
      
      <div class="config-category-card carddav">
        <div class="config-category-icon">📇</div>
        <h3 class="config-category-title">CardDAV</h3>
        <p class="config-category-description">Contact synchronization with CardDAV servers for seamless address book integration.</p>
        <div class="config-category-status">Available</div>
      </div>
      
      <div class="config-category-card dynamic-login">
        <div class="config-category-icon">🔄</div>
        <h3 class="config-category-title">Dynamic Login</h3>
        <p class="config-category-description">Auto-discovery and dynamic configuration for popular email services and providers.</p>
        <div class="config-category-status">Available</div>
      </div>
      
      <div class="config-category-card github">
        <div class="config-category-icon">🐙</div>
        <h3 class="config-category-title">GitHub Integration</h3>
        <p class="config-category-description">GitHub OAuth integration for seamless authentication and repository access.</p>
        <div class="config-category-status">Available</div>
      </div>
      
      <div class="config-category-card ldap">
        <div class="config-category-icon">🏢</div>
        <h3 class="config-category-title">LDAP</h3>
        <p class="config-category-description">Enterprise authentication with LDAP server integration for corporate environments.</p>
        <div class="config-category-status">Available</div>
      </div>
      
      <div class="config-category-card oauth2">
        <div class="config-category-icon">🔑</div>
        <h3 class="config-category-title">OAuth2</h3>
        <p class="config-category-description">Modern OAuth2 authentication for secure third-party service integration.</p>
        <div class="config-category-status">Available</div>
      </div>
      
      <div class="config-category-card recaptcha">
        <div class="config-category-icon">🤖</div>
        <h3 class="config-category-title">reCAPTCHA</h3>
        <p class="config-category-description">Bot protection and spam prevention with Google reCAPTCHA integration.</p>
        <div class="config-category-status">Available</div>
      </div>
      
      <div class="config-category-card wordpress">
        <div class="config-category-icon">🌐</div>
        <h3 class="config-category-title">WordPress</h3>
        <p class="config-category-description">WordPress integration for seamless content management and user synchronization.</p>
        <div class="config-category-status">Available</div>
      </div>
    </div>
  </div>
</section>

<!-- Generator Form Section -->
<section class="config-generator-form" id="generator">
  <div class="config-generator-container">
    <div class="config-generator-header">
      <h2 class="config-generator-title">Configuration Generator</h2>
      <p class="config-generator-subtitle">
        Configure your Cypht installation by selecting the options below. 
        Each section contains specific settings that will be included in your generated configuration file.
      </p>
    </div>
    
    <form id="config-generator">
        <h1>Cypht Config Generator</h1>
        <blockquote>
            Click any of the options below to configure Cypht!<br>
            On the bottom of the page you can find a button to generate your .env
        </blockquote>
        {% for file in site.data.configFiles %}
        <details>
            <summary class="h4">
                <h2 class="h4">{{file | replace({".php": ""})}}</h2>
            </summary>
            {% for option in site.data.configOptions[file] %}
            {% set select = option.inputType == "select" %}
            {% set inputId = option.key ~ "_CCGINPUT" %}
            <fieldset id="{{option.key}}">
                <legend>
                    <h3>{{option.key}}</h3>
                </legend>
                <label for="{{inputId}}">{{option.commentHtml}}</label>
                {% if option.valueDefault %}<p>Default: {{option.valueDefault}}</p>{% endif %}

                {% if not select %}
                <input id="{{inputId}}" type="{{option.inputType}}" name="{{option.key}}"
                    data-default="{{option.valueDefault}}" {% if option.valueDefault %} {% if option.inputType=="checkbox"
                    and option.valueDefault=="true" %} checked {% else %} value="{{option.valueDefault}}" {% endif %}
                    {% endif %} />
                {% else %}
                <select class="btn btn-light text-left" id="{{inputId}}" name="{{option.key}}" data-default="{{option.valueDefault}}">
                    {% for setValue in option.setValues %}
                    <option value="{{setValue.value}}">{{setValue.value}} - {{setValue.description}}</option>
                    {% endfor %}
                </select>
                {% endif %}
                <button class="reset btn btn-light">Reset</button>
            </fieldset>
            {% endfor %}
        </details>
        <hr>
        {% endfor %}

        <hr>

        <button class="btn btn-success" id="generate">Generate .env file</button>
        <button class="btn btn-light" id="reset-all">Reset all</button>
        <p>
            Please note that neither <code>allow_session_cache</code> &amp; <code>cache_class</code> are configurable
            through here,
            as it is not recommended and as such quite advanced usage.
            Check <a href="https://github.com/cypht-org/cypht/blob/master/config/app.php">
                app.php (@github:cypht-org/cypht)
            </a> for more info
        </p>
        <textarea class="container" id="result"></textarea>
        <hr>
        <p>The
            <a href="https://github.com/cypht-org/cypht-website#cypht-config-generator-generator">
                config-generator source code can be found on GitHub
            </a>
        </p>
    </form>

  </div>
</section>
