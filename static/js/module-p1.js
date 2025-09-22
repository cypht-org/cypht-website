document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const config = {
        coverSelector: '.module-cover',
        itemSelector: '.module-item',
        coverImageSelector: '.md-cover-content img',
        activeClass: 'active',
        offset: 100, // Délai avant l'activation
        debug: false // Activer les logs de débogage
    };

    // Tableau des chemins d'images pour chaque module
    // L'index correspond à la position du module dans le DOM (0 = premier module)
    const moduleImages = [
        '/svg/block-1.svg',
        '/svg/block-2.svg',
        '/svg/block-3.svg',
        '/svg/block-1.svg',
        '/svg/block-2.svg',
        '/svg/block-3.svg',
        '/svg/block-1.svg',
        '/svg/block-2.svg',
        '/svg/block-3.svg'
        // Ajoutez d'autres chemins d'images ici dans l'ordre des modules
    ];

    // Éléments du DOM
    const cover = document.querySelector(config.coverSelector);
    const coverImage = document.querySelector(config.coverImageSelector);
    const items = document.querySelectorAll(config.itemSelector);

    if (!cover || !coverImage || items.length === 0) {
        if (config.debug) console.log('Éléments non trouvés');
        return;
    }

    // Fonction pour mettre à jour l'image du cover
    function updateCoverImage(moduleIndex) {
        const imagePath = moduleImages[moduleIndex];
        if (coverImage.src.endsWith(imagePath)) return; // Évite les rechargements inutiles
        
        if (config.debug) console.log('Mise à jour de l\'image pour l\'index:', moduleIndex, '->', imagePath);
        
        // Animation de fondu
        coverImage.style.opacity = '0';
        setTimeout(() => {
            coverImage.src = imagePath;
            coverImage.alt = 'Module ' + (moduleIndex + 1) + ' Cover';
            coverImage.style.opacity = '1';
        }, 200);
    }

    // Fonction pour gérer le défilement
    function handleScroll() {
        const coverRect = cover.getBoundingClientRect();
        const coverTop = coverRect.top + window.scrollY;
        const coverBottom = coverTop + coverRect.height;
        
        // Trouver le module actif
        let activeItem = null;
        
        items.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            const itemTop = itemRect.top + window.scrollY;
            const itemBottom = itemTop + itemRect.height;
            
            // Vérifier si l'élément est dans la zone du cover
            if (itemTop <= coverBottom - config.offset && itemBottom >= coverTop + config.offset) {
                activeItem = item;
            }
        });
        
        // Mettre à jour l'image si un module actif est trouvé
        if (activeItem) {
            // Récupérer l'index du module actif
            const moduleIndex = Array.from(items).indexOf(activeItem);
            if (moduleIndex !== -1) {
                updateCoverImage(moduleIndex);
                
                // Mettre à jour les classes actives
                items.forEach(item => item.classList.remove(config.activeClass));
                activeItem.classList.add(config.activeClass);
            }
        }
    }

    // Détection de l'intersection avec l'API Intersection Observer
    function initIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const moduleIndex = Array.from(items).indexOf(entry.target);
                    if (moduleIndex !== -1) {
                        updateCoverImage(moduleIndex);
                        
                        // Mettre à jour les classes actives
                        items.forEach(item => item.classList.remove(config.activeClass));
                        entry.target.classList.add(config.activeClass);
                    }
                }
            });
        }, options);

        // Observer chaque élément de module
        items.forEach(item => {
            observer.observe(item);
        });
    }

    // Vérifier si l'API Intersection Observer est disponible
    if ('IntersectionObserver' in window) {
        initIntersectionObserver();
    } else {
        // Fallback pour les navigateurs qui ne supportent pas Intersection Observer
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll(); // Appel initial
    }

    // Détection du mode sombre
    function updateTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            cover.style.backgroundColor = '#2d2d2d';
            cover.style.borderColor = '#444';
            document.querySelector('.md-cover-content').style.borderColor = '#444';
        } else {
            cover.style.backgroundColor = '#E9E9EA';
            cover.style.borderColor = '#ccc';
            document.querySelector('.md-cover-content').style.borderColor = '#ccc';
        }
    }

    // Observer les changements de thème
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { 
        attributes: true, 
        attributeFilter: ['data-theme'] 
    });
    
    // Initialisation
    updateTheme();
});
