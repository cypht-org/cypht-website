const spy_scroll = () => {
    const nav_links = document.querySelectorAll('#dc-ctr-nav a');
    const sections = document.querySelectorAll('.doc-content-left [id]');

    const options = {
        root: null, // utilise le viewport
        rootMargin: '0px 0px -80% 0px', // déclenche quand l'élément est en haut de page
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Supprimer la classe active de tous les liens
                nav_links.forEach(link => link.classList.remove('active'));
                
                // Ajouter la classe au lien correspondant à l'ID de la section
                const active_link = document.querySelector(`#dc-ctr-nav a[href="#${entry.target.id}"]`);
                if (active_link) {
                    active_link.classList.add('active');
                }
            }
        });
    }, options);

    // On observe chaque section/titre ayant un ID dans le contenu
    sections.forEach(section => observer.observe(section));
};

// Lancement de la fonction après le chargement du DOM
document.addEventListener('DOMContentLoaded', spy_scroll);