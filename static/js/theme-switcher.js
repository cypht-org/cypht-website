// Theme Switcher for Cypht Website
// This script handles the dark/light mode toggle and persists the user's preference

class ThemeSwitcher {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = document.getElementById('theme-icon');
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.theme);

        // Add event listener if toggle button exists
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Listen for system color scheme changes
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        prefersDarkScheme.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    toggleTheme() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update icon if it exists
        if (this.themeIcon) {
            this.themeIcon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon';
        }
        
        // Update toggle button aria-label
        if (this.themeToggle) {
            this.themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
        }
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = new ThemeSwitcher();
    
    // Make it globally available if needed
    window.themeSwitcher = themeSwitcher;
});
