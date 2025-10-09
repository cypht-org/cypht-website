---
title: Tests
exclude: true
loadScriptAfter: /assets/tests.css
---

<!-- Hero Section -->
<section class="tests-hero">
  <div class="tests-hero-container">
    <div class="tests-hero-content">
      <div>
        <span class="chip">🧪 Quality Assurance</span>
      </div>
      <h1 class="tests-hero-title">
        Comprehensive Testing & Quality Assurance
      </h1>
      <p class="tests-hero-subtitle">
        Ensuring reliability and performance through extensive unit tests, integration testing, and continuous quality monitoring.
      </p>
    </div>
    <div class="tests-hero-image">
      <img src="/img/puzzle.png" alt="Testing and quality assurance illustration" loading="eager" decoding="async" />
    </div>
  </div>
</section>

<!-- Overview Section -->
<section class="tests-overview">
  <div class="tests-overview-container">
    <div class="tests-overview-header">
      <h2 class="tests-overview-title">Testing Overview</h2>
      <p class="tests-overview-subtitle">
        Cypht uses PHPUnit for unit tests and Selenium for integration testing. Our comprehensive testing strategy ensures code quality and reliability across multiple environments.
      </p>
    </div>
    
    <div class="tests-stats-grid">
      <div class="tests-stat-card">
        <div class="tests-stat-icon">📊</div>
        <div class="tests-stat-number">98%</div>
        <div class="tests-stat-label">Unit Test Coverage</div>
      </div>
      <div class="tests-stat-card">
        <div class="tests-stat-icon">🔧</div>
        <div class="tests-stat-number">18</div>
        <div class="tests-stat-label">Build Combinations</div>
      </div>
      <div class="tests-stat-card">
        <div class="tests-stat-icon">🌐</div>
        <div class="tests-stat-number">4</div>
        <div class="tests-stat-label">Browser Tests</div>
      </div>
      <div class="tests-stat-card">
        <div class="tests-stat-icon">⚡</div>
        <div class="tests-stat-number">6</div>
        <div class="tests-stat-label">PHP Versions</div>
      </div>
    </div>
  </div>
</section>

<!-- Testing Tools Section -->
<section class="tests-tools">
  <div class="tests-tools-container">
    <div class="tests-tools-header">
      <h2 class="tests-tools-title">Testing Infrastructure</h2>
      <p class="tests-tools-subtitle">
        We leverage industry-leading tools and services to maintain the highest standards of code quality and reliability.
      </p>
    </div>
    
    <div class="tests-tools-grid">
      <div class="tests-tool-card">
        <div class="tests-tool-header">
          <div class="tests-tool-icon travis">🚀</div>
          <h3 class="tests-tool-title">Travis CI</h3>
        </div>
        <p class="tests-tool-description">
          Continuous integration service that automatically runs our unit and UI tests on every code push. Our build matrix includes 18 combinations across 6 PHP versions (5.4-7.2) and 3 databases (MySQL, PostgreSQL, SQLite).
        </p>
        <a href="https://travis-ci.org/cypht-org/cypht/builds" class="tests-tool-link" target="_blank" rel="noopener">
          View Build Status
        </a>
      </div>
      
      <div class="tests-tool-card">
        <div class="tests-tool-header">
          <div class="tests-tool-icon browserstack">🌐</div>
          <h3 class="tests-tool-title">BrowserStack</h3>
        </div>
        <p class="tests-tool-description">
          Cloud-based Selenium grid for cross-browser testing. We test across 4 major browsers (Safari, IE, Edge, Chrome) to ensure compatibility and reliability across different environments.
        </p>
        <a href="https://www.browserstack.com/" class="tests-tool-link" target="_blank" rel="noopener">
          Learn More
        </a>
      </div>
      
      <div class="tests-tool-card">
        <div class="tests-tool-header">
          <div class="tests-tool-icon coveralls">📈</div>
          <h3 class="tests-tool-title">Coveralls</h3>
        </div>
        <p class="tests-tool-description">
          Provides detailed PHPUnit test coverage reports with beautiful metrics and tracking over time. Updated automatically on every GitHub push with comprehensive coverage analysis.
        </p>
        <a href="https://coveralls.io/github/cypht-org/cypht" class="tests-tool-link" target="_blank" rel="noopener">
          View Coverage
        </a>
      </div>
      
      <div class="tests-tool-card">
        <div class="tests-tool-header">
          <div class="tests-tool-icon scrutinizer">🔍</div>
          <h3 class="tests-tool-title">Scrutinizer</h3>
        </div>
        <p class="tests-tool-description">
          Static code analyzer with advanced options for detecting potential issues, type mismatches, and code quality improvements. Analyzes our application framework with every code push.
        </p>
        <a href="https://scrutinizer-ci.com/g/cypht-org/cypht/" class="tests-tool-link" target="_blank" rel="noopener">
          View Analysis
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Coverage Report Section -->
<section class="tests-coverage">
  <div class="tests-coverage-container">
    <div class="tests-coverage-header">
      <h2 class="tests-coverage-title">Test Coverage Report</h2>
      <p class="tests-coverage-subtitle">
        Access our comprehensive HTML coverage report to see detailed test coverage metrics and analysis.
      </p>
    </div>
    
    <div class="tests-coverage-card">
      <div class="tests-coverage-content">
        <div class="tests-coverage-icon">📋</div>
        <h3 class="tests-coverage-title-card">Detailed Coverage Analysis</h3>
        <p class="tests-coverage-description">
          Our unit tests cover the application framework (lib/) and core module set. The HTML coverage report provides detailed insights into test coverage across all components.
        </p>
        <a href="docs/test_coverage/index.html" class="tests-coverage-btn" target="_blank" rel="noopener">
          View Coverage Report
        </a>
      </div>
    </div>
  </div>
</section>
