document.addEventListener('DOMContentLoaded', function() {
  // Attendre que tout soit complètement chargé
  setTimeout(function() {
    initSidebar();
  }, 100);
  
  function initSidebar() {
    // Sélectionnez toutes les sections et les liens de la sidebar
    const sections = document.querySelectorAll('main h3[id]');
    const sidebarLinks = document.querySelectorAll('.sidebar-link-simple');
    
    // Vérification de débogage
    console.log('Sections trouvées:', sections.length);
    console.log('Liens sidebar trouvés:', sidebarLinks.length);
    
    if (sections.length === 0 || sidebarLinks.length === 0) {
      console.error('Éléments non trouvés. Vérifiez les sélecteurs ou la structure HTML.');
      return;
    }
    
    // Créer un tableau des positions des sections pour référence rapide
    const sectionPositions = Array.from(sections).map(section => {
      return {
        id: section.getAttribute('id'),
        top: section.getBoundingClientRect().top + window.pageYOffset,
        bottom: section.getBoundingClientRect().top + window.pageYOffset + section.offsetHeight
      };
    });
    
    console.log('Positions des sections:', sectionPositions);
    
    // Fonction pour déterminer quelle section est visible
    function setActiveSection() {
      // Position de défilement actuelle + une marge pour déclencher le changement plus tôt
      const scrollPosition = window.scrollY + 200;
      
      console.log('Position de défilement actuelle:', scrollPosition);
      
      // Trouver la section visible
      let currentSection = '';
      
      for (let i = 0; i < sectionPositions.length; i++) {
        const section = sectionPositions[i];
        const nextSection = sectionPositions[i + 1];
        
        // Si c'est la dernière section ou si nous sommes entre cette section et la suivante
        if (
          !nextSection && scrollPosition >= section.top ||
          scrollPosition >= section.top && scrollPosition < nextSection?.top
        ) {
          currentSection = section.id;
          break;
        }
      }
      
      console.log('Section actuelle détectée:', currentSection);
      
      // Mettre à jour la classe active dans la sidebar
      sidebarLinks.forEach((link) => {
        // Supprime la classe active de tous les liens
        link.classList.remove('active');
        
        // Ajoute la classe active au lien correspondant à la section visible
        const href = link.getAttribute('href').substring(1);
        if (href === currentSection) {
          link.classList.add('active');
          console.log('Lien actif mis à jour:', href);
        }
      });
    }
    
    // Utiliser throttle pour limiter le nombre d'appels pendant le défilement
    let isScrolling;
    window.addEventListener('scroll', function() {
      // Effacer le timeout précédent
      window.clearTimeout(isScrolling);
      
      // Définir un timeout pour appeler la fonction après que le défilement s'arrête
      isScrolling = setTimeout(function() {
        setActiveSection();
      }, 50);
    });
    
    // Exécuter une fois au chargement initial
    setActiveSection();
    
    // Gestion du clic sur les liens de la sidebar
    sidebarLinks.forEach((link) => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Récupérer l'ID de la section ciblée
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (!targetSection) {
          console.error('Section cible non trouvée:', targetId);
          return;
        }
        
        // Faire défiler jusqu'à la section avec une animation douce
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Mettre à jour manuellement la classe active
        sidebarLinks.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
        
        console.log('Clic sur lien, navigation vers:', targetId);
      });
    });
    
    // Recalculer les positions des sections lors du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
      sectionPositions.forEach((section, index) => {
        const elem = sections[index];
        section.top = elem.getBoundingClientRect().top + window.pageYOffset;
        section.bottom = section.top + elem.offsetHeight;
      });
      setActiveSection();
    });
  }
});