// Theme Switcher for Cypht Website
// This script handles the dark/light mode toggle and persists the user's preference

class ThemeSwitcher {
    constructor() {
        // Get all theme toggle buttons (there can be multiple in navbar and offcanvas)
        // Use both ID selector and class selector to catch all instances
        this.themeToggles = document.querySelectorAll('#theme-toggle, .theme-toggle');
        // Get all theme icons (there can be multiple)
        this.themeIcons = document.querySelectorAll('#theme-icon, .theme-icon');
        // Safe localStorage access with fallback
        try {
            this.theme = localStorage.getItem('theme') || 'dark';
        } catch (e) {
            // If localStorage is blocked, use dark as default
            this.theme = 'dark';
        }
        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.theme);

        // Add event listener to all toggle buttons
        this.themeToggles.forEach(toggle => {
            toggle.addEventListener('click', () => this.toggleTheme());
        });

        // Listen for system color scheme changes
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        prefersDarkScheme.addEventListener('change', (e) => {
            try {
                if (!localStorage.getItem('theme')) {
                    this.setTheme(e.matches ? 'dark' : 'dark');
                }
            } catch (e) {
                // If localStorage is blocked, just set theme without storing
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        // Safe localStorage access
        try {
            localStorage.setItem('theme', newTheme);
        } catch (e) {
            // If localStorage is blocked, theme still works but won't persist
            console.warn('Theme preference cannot be saved due to privacy settings');
        }
    }

    setTheme(theme) {
        this.theme = theme;
        // Disable transitions during theme change to prevent lag
        const html = document.documentElement;
        html.classList.add('theme-transitioning');

        // Force reflow to ensure the class is applied before changing theme
        void html.offsetHeight;

        html.setAttribute('data-theme', theme);

        // Update all icons if they exist
        this.themeIcons.forEach(icon => {
            icon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon';
        });

        // Update all toggle buttons aria-label
        this.themeToggles.forEach(toggle => {
            toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
        });

        // Re-enable transitions after a short delay to ensure DOM updates
        setTimeout(() => {
            requestAnimationFrame(() => {
                html.classList.remove('theme-transitioning');
            });
        }, 50);
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = new ThemeSwitcher();
    
    // Make it globally available if needed
    window.themeSwitcher = themeSwitcher;
});