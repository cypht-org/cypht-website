
// ─── Variables ───────────────────────────────────────────────────────────────

// 1. Module types with Lucide icons
const typeModules = [
    { 
        id: 1, 
        name: 'Auth & Security',
        color: '#4f46e5', // Indigo
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-lock">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
            <rect x="8" y="11" width="8" height="5" rx="1"/>
            <path d="M10 11V9a2 2 0 1 1 4 0v2"/>
        </svg>`
    },
    { 
        id: 2, 
        name: 'Account Management',
        color: '#10b981', // Emerald
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>`
    },
    { 
        id: 3, 
        name: 'Email',
        color: '#0ea5e9', // Sky
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>`
    },
    { 
        id: 4, 
        name: 'Contacts',
        color: '#8b5cf6', // Violet
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-contact">
            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/>
            <rect width="18" height="18" x="3" y="4" rx="2"/>
            <circle cx="12" cy="10" r="2"/>
            <line x1="8" x2="8" y1="2" y2="4"/>
            <line x1="16" x2="16" y1="2" y2="4"/>
        </svg>`
    },
    { 
        id: 5, 
        name: 'Productivity',
        color: '#ec4899', // Pink-500
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>`
    },
    { 
        id: 6, 
        name: 'User Interface',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard">
            <rect width="7" height="9" x="3" y="3" rx="1"/>
            <rect width="7" height="5" x="14" y="3" rx="1"/>
            <rect width="7" height="9" x="14" y="12" rx="1"/>
            <rect width="7" height="5" x="3" y="16" rx="1"/>
        </svg>`
    },
    { 
        id: 7, 
        name: 'Diverse',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-puzzle">
            <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.522 3.194c.18.865.353 1.585.943 1.777l.57.178a1 1 0 0 1 .7.955V20a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1v-.09a.96.96 0 0 0-.69-.914l-1.1-.306a2.38 2.38 0 0 1-1.792-1.793L9 15.4a.96.96 0 0 0-.914-.69H7.9a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1h.09A.96.96 0 0 0 8 9.5l.306-1.1a2.38 2.38 0 0 1 1.793-1.793l1.1-.306A.96.96 0 0 0 11.5 5.9V5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v.09a.96.96 0 0 0 .69.914l1.1.306a2.38 2.38 0 0 1 1.793 1.793l.306 1.1c.09.424.49.754.914.69h.09a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-.09a.96.96 0 0 0-.69.914l-.306 1.1a2.38 2.38 0 0 1-1.793 1.793l-1.1.306a.96.96 0 0 0-.69.914V19"/>
        </svg>`
    }
];

// 2. Modules list
const modules = [
    // Authentication and Security
    {
        chip: '2FA',
        name: 'TOTP Authentication',
        description: 'TOTP based 2 factor authentication using the Google Authenticator mobile app',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3A2fa',
        cover: '/svg/security.svg',
        type_id: 1
    },
    {
        chip: 'API Login',
        name: 'API Integration',
        description: 'Seamless integration with external authentication systems through a secure API, enabling single sign-on (SSO) capabilities',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Aapi_login',
        cover: '/svg/api.svg',
        type_id: 1
    },
    {
        chip: 'reCAPTCHA',
        name: 'reCAPTCHA',
        description: 'Enable Recaptcha on the login form',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Arecaptcha',
        cover: '/svg/security.svg',
        type_id: 1
    },
    {
        chip: 'PGP',
        name: 'PGP Encryption',
        description: 'End-to-end email encryption using OpenPGP standard to ensure your communications remain private and secure',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3APGP',
        cover: '/svg/encryption.svg',
        type_id: 1
    },

    // Account Management
    {
        chip: 'User Accounts',
        name: 'User Management',
        description: 'UI features for admins to create accounts, and for users to update passwords',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Aaccount',
        cover: '/svg/account.svg',
        type_id: 2
    },
    {
        chip: 'Dynamic Login',
        name: 'Dynamic Login',
        description: 'Authenticate against popular mail services or auto-discover services for the specified email',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Adynamic_login',
        cover: '/svg/login.svg',
        type_id: 2
    },
    {
        chip: 'Profiles',
        name: 'User Profiles',
        description: 'Manage user profiles with custom settings, reply-to addresses, names, and signatures',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Aprofiles',
        cover: '/svg/profile.svg',
        type_id: 2
    },
    {
        chip: 'Settings',
        name: 'Recover Settings',
        description: 'Recover user settings after an external password change',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Arecover_settings',
        cover: '/svg/settings.svg',
        type_id: 2
    },

    // Email
    {
        chip: 'IMAP',
        name: 'IMAP Support',
        description: 'Full IMAP protocol support for accessing and managing your email accounts',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Aimap',
        cover: '/svg/email.svg',
        type_id: 3
    },
    {
        chip: 'IMAP Folders',
        name: 'IMAP Folder Management',
        description: 'IMAP email folder management support',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Aimap_folders',
        cover: '/svg/folder.svg',
        type_id: 3
    },
    {
        chip: 'SMTP',
        name: 'SMTP Support',
        description: 'Send outbound email using SMTP servers',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Asmtp',
        cover: '/svg/send.svg',
        type_id: 3
    },
    {
        chip: 'JMAP',
        name: 'JMAP Protocol',
        description: 'Modern JSON-based email protocol for faster, more reliable access to email data',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Ajmap',
        cover: '/svg/api.svg',
        type_id: 3
    },
    {
        chip: 'Sieve',
        name: 'Sieve Filters',
        description: 'Advanced email filtering using Sieve protocol',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Asievefilters',
        cover: '/svg/filter.svg',
        type_id: 3
    },

    // Contacts
    {
        chip: 'Contacts',
        name: 'Contact Management',
        description: 'Contact management with support for multiple backends',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Acontacts',
        cover: '/svg/contacts.svg',
        type_id: 4
    },
    {
        chip: 'CardDAV',
        name: 'CardDAV Contacts',
        description: 'Support for contacts stored in CardDAV',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Acarddav_contacts',
        cover: '/svg/contacts.svg',
        type_id: 4
    },
    {
        chip: 'LDAP',
        name: 'LDAP Contacts',
        description: 'Support for contacts stored in LDAP',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Aldap_contacts',
        cover: '/svg/contacts.svg',
        type_id: 4
    },
    {
        chip: 'Gmail',
        name: 'Gmail Contacts',
        description: 'Read-only support for Gmail contacts with OAuth2',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Agmail_contacts',
        cover: '/svg/gmail.svg',
        type_id: 4
    },
    {
        chip: 'Local',
        name: 'Local Contacts',
        description: 'Simple locally stored contact support',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Alocal_contacts',
        cover: '/svg/contacts.svg',
        type_id: 4
    },
    {
        chip: 'CardDAV',
        name: 'CardDAV Contacts',
        description: 'Support for contacts stored in CardDAV servers',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Acarddav_contacts',
        cover: '/svg/contacts.svg',
        type_id: 4
    },

    // Productivity
    {
        chip: 'Calendar',
        name: 'Calendar System',
        description: 'Basic calendar functionality',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Acalendar',
        cover: '/svg/calendar.svg',
        type_id: 5
    },
    {
        chip: 'Feeds',
        name: 'RSS/ATOM Feeds',
        description: 'RSS and ATOM feed support',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Afeeds',
        cover: '/svg/rss.svg',
        type_id: 5
    },
    {
        chip: 'GitHub',
        name: 'GitHub Integration',
        description: 'GitHub repository tracking',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Agithub',
        cover: '/svg/github.svg',
        type_id: 5
    },
    {
        chip: 'Searches',
        name: 'Saved Searches',
        description: 'Save and re-run searches easily',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Asaved_searches',
        cover: '/svg/search.svg',
        type_id: 5
    },
    {
        chip: 'Advanced',
        name: 'Advanced Search',
        description: 'Support for advanced search queries',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Aadvanced_search',
        cover: '/svg/search.svg',
        type_id: 5
    },

    // User Interface
    {
        chip: 'Core',
        name: 'Core System',
        description: 'Handles page layout, login/logout, and default settings',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Acore',
        cover: '/svg/core.svg',
        type_id: 6
    },
    {
        chip: 'Themes',
        name: 'UI Themes',
        description: 'Customize the look and feel with different CSS themes',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Athemes',
        cover: '/svg/theme.svg',
        type_id: 6
    },
    {
        chip: 'View',
        name: 'Inline Message View',
        description: 'View messages inline in a reading pane instead of a new page',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Ainline_message',
        cover: '/svg/view.svg',
        type_id: 6
    },
    {
        chip: 'Highlights',
        name: 'Message Highlights',
        description: 'Color highlighting for message lists',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Ahighlights',
        cover: '/svg/highlight.svg',
        type_id: 6
    },
    {
        chip: 'Shortcuts',
        name: 'Keyboard Shortcuts',
        description: 'Navigate and perform actions using keyboard shortcuts',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Akeyboard_shortcuts',
        cover: '/svg/keyboard.svg',
        type_id: 6
    },

    // Diverse
    {
        chip: 'Developer',
        name: 'Developer Tools',
        description: 'Development resources and installation details (debug mode only)',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Adeveloper',
        cover: '/svg/developer.svg',
        type_id: 7
    },
    {
        chip: 'WordPress',
        name: 'WordPress Integration',
        description: 'Integration with WordPress.com services',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Awordpress',
        cover: '/svg/wordpress.svg',
        type_id: 7
    },
    {
        chip: 'NASA',
        name: 'NASA APOD',
        description: 'Access the NASA Astronomy Picture of the Day API content',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Anasa',
        cover: '/svg/nasa.svg',
        type_id: 7
    },
    {
        chip: 'Hello World',
        name: 'Hello World',
        description: 'Example module with extensive documentation',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Ahello_world',
        cover: '/svg/hello.svg',
        type_id: 7
    },
    {
        chip: 'Site',
        name: 'Site Overrides',
        description: 'Site-specific overrides for module configurations',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Asite',
        cover: '/svg/site.svg',
        type_id: 7
    },
    {
        chip: 'NUX',
        name: 'New User Experience',
        description: 'Friendly interface for new users with common email service setup',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Anux',
        cover: '/svg/nux.svg',
        type_id: 7
    },
    {
        chip: 'Tags',
        name: 'Tag Management',
        description: 'Organize content with customizable tags for better categorization',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Atags',
        cover: '/svg/tag.svg',
        type_id: 7
    },
    {
        chip: 'History',
        name: 'Message History',
        description: 'Track recently read messages during the current session',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Ahistory',
        cover: '/svg/history.svg',
        type_id: 7
    },
    {
        chip: 'Notifications',
        name: 'Desktop Notifications',
        description: 'Get desktop notifications for new messages',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Adesktop_notifications',
        cover: '/svg/notification.svg',
        type_id: 7
    },
    {
        chip: 'Idle Timer',
        name: 'Idle Session Timer',
        description: 'Automatic logout after period of inactivity',
        issues_link: 'https://github.com/cypht-org/cypht/issues?q=is%3Aissue+is%3Aopen+label%3Aidle_timer',
        cover: '/svg/timer.svg',
        type_id: 7
    }
];

// ─── Utils ───────────────────────────────────────────────────────────────────

// 1. Get module length by type_id
const module_length = (type_id) => {
    return modules.filter(module => module.type_id === type_id).length || 0;
}

let type_selected = 0; // 0 means all types
// 2. Export modules and typeModules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { typeModules, modules };
}

// 3. DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {

    // 1. Get elements
    const typeList = document.getElementById('md-type-items');
    const moduleList = document.getElementById('md-items');

    // 2. Load module types
    function load_module_types() {
        // a. Clear current list
        typeList.innerHTML = '';
        
        // b. Create 'All' filter item
        const init_li = document.createElement('li');
        init_li.className = 'module-type-item';
        init_li.setAttribute('data-type-id', 0);

        // c. All modules item with icon
        init_li.innerHTML = `
            <div class="d-flex gap-3 p-0">
               <div>
                   <div class="module-type-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                            <path d="M2 17l10 5 10-5"/>
                            <path d="M2 12l10 5 10-5"/>
                        </svg>
                    </div>
               </div>
                <div class="d-flex flex-column">
                    <span>All</span>
                    <span>${modules.length} modules</span>
                </div>
            </div>
        `;

        init_li.addEventListener('click', () => {
            setActiveType(0);
            load_modules();
        });
        typeList.appendChild(init_li);

        // d. Add each module type
        typeModules.forEach(type => {
            // d.1 Create list item
            const li = document.createElement('li');
            li.className = 'module-type-item';
            li.setAttribute('data-type-id', type.id);
            
            // d.2 Add content with icon
            li.innerHTML = `
            <div class="d-flex gap-2 p-0">
                <div>
                    <div class="module-type-icon">
                        ${type.icon}
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <span>${type.name}</span>
                    <span>${module_length(type.id)} modules</span>
                </div>
            </div>`;
            
            // d.3 Add click event handler
            li.addEventListener('click', () => {
                setActiveType(type.id);
                load_modules(type.id);
            });
            
            // Set initial active state
            if (type.id === type_selected) {
                li.classList.add('active');
            }
            
            // d.4 Add to the list
            typeList.appendChild(li);
        });
    }

    // 2. Load module types
    function get_type_modules(id) {
        return typeModules.find(type => type.id === id);
    }
    
    // 2.1 Set active type
    function setActiveType(typeId) {
        type_selected = typeId;
        // Update active class on all type items
        document.querySelectorAll('.module-type-item').forEach(item => {
            item.classList.remove('md-type-item-active');
            if (parseInt(item.getAttribute('data-type-id')) === typeId) {
                item.classList.add('md-type-item-active');
            }
        });
    }

    // 2.2 Shuffle array function
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // 3. Load modules
    function load_modules(type_id) {
        // a. Clear current list
        moduleList.innerHTML = '';
        
        // b. Filter and shuffle modules
        let filteredModules = type_id ? modules.filter(module => module.type_id === type_id) : [...modules];
        filteredModules = shuffleArray(filteredModules);
        
        // c. Add each module to the list
        filteredModules.forEach(module => {
            const li = document.createElement('li');
            li.className = 'module-item';
            const typeInfo = get_type_modules(module.type_id);
            li.innerHTML = `
                <div class="module-item-content h-100">
                    <div class="md-item-header">
                        <div class="d-flex">
                            <span class="module-chip" style="background-color: ${typeInfo.color}1a; color: ${typeInfo.color}; border: 1px solid ${typeInfo.color}33;">
                                ${typeInfo.name}
                            </span>
                        </div>

                        <div class="module-item-cover d-flex ">
                            <span></span>
                        </div>
                        
                        <h4>${module.name}</h4>
                        <p>${module.description}</p>
                    </div>
                    <div class="md-item-buttons py-1 d-flex justify-content-start align-items-center">
                    <a href="${module.issues_link}" target="_blank" class="module-issue-link d-flex align-items-center gap-2"><i class="bi bi-box-arrow-up-right"></i>View module issues on GitHub</a>
                    </div>
                </div>
            `;
            moduleList.appendChild(li);
        });
    }


    // 4. Initialize module types and load modules
    load_module_types();
    load_modules();
    setActiveType(0);
    
})