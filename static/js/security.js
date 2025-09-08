document.addEventListener('DOMContentLoaded', function() {
  // Animation pour les éléments de sécurité
  const securityFeatures = document.querySelectorAll('.security-feature');
  
  // Observer pour déclencher l'animation quand les éléments sont visibles
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observer chaque élément de sécurité
  securityFeatures.forEach(feature => {
    observer.observe(feature);
  });
  
  // Gestion des onglets
  const tabLinks = document.querySelectorAll('.security-tabs .nav-link');
  const tabContents = document.querySelectorAll('.tab-pane');
  
  tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Retirer la classe active de tous les onglets
      tabLinks.forEach(l => l.classList.remove('active'));
      
      // Ajouter la classe active à l'onglet actuel
      this.classList.add('active');
      
      // Afficher le contenu de l'onglet
      const targetId = this.getAttribute('data-bs-target').substring(1);
      
      tabContents.forEach(content => {
        if (content.id === targetId) {
          content.classList.add('show', 'active');
        } else {
          content.classList.remove('show', 'active');
        }
      });
      
      // Réinitialiser l'animation des éléments de sécurité
      const features = document.querySelectorAll(`#${targetId} .security-feature`);
      features.forEach((feature, index) => {
        feature.style.opacity = 0;
        feature.style.transform = 'translateY(20px)';
        setTimeout(() => {
          feature.style.opacity = 1;
          feature.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
      });
    });
  });
});