document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour charger les types de modules
    function loadModuleTypes() {
        const typeList = document.getElementById('md-type-items');
        
        // Vider la liste actuelle
        typeList.innerHTML = '';
        
        // Parcourir chaque type de module
        typeModules.forEach(type => {
            // Créer l'élément de liste
            const li = document.createElement('li');
            li.className = 'module-type-item';
            li.setAttribute('data-type-id', type.id);
            
            // Ajouter le contenu
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span>${type.name}</span>
                    <span class="badge bg-secondary">${module_length(type.id)}</span>
                </div>
            `;
            
            // Ajouter un gestionnaire d'événement
            li.addEventListener('click', () => loadModulesByType(type.id));
            
            // Ajouter à la liste
            typeList.appendChild(li);
            
            // Sélectionner le premier type par défaut
            if (type.id === 1) {
                li.classList.add('active');
                loadModulesByType(1);
            }
        });
    }
    
    // Fonction pour charger les modules par type
    function loadModulesByType(typeId) {
        const moduleList = document.getElementById('md-items');
        
        // Mettre à jour la sélection du type
        document.querySelectorAll('.module-type-item').forEach(item => {
            item.classList.toggle('active', parseInt(item.getAttribute('data-type-id')) === typeId);
        });
        
        // Filtrer les modules par type
        const filteredModules = modules.filter(module => module.type_id === typeId);
        
        // Vider la liste actuelle
        moduleList.innerHTML = '';
        
        // Ajouter chaque module à la liste
        filteredModules.forEach(module => {
            const li = document.createElement('li');
            li.className = 'module-item';
            li.innerHTML = `
                <div class="module-item-content">
                    <span class="module-chip">${module.chip}</span>
                    <h4>${module.name}</h4>
                    <p>${module.description}</p>
                    <a href="${module.issues_link}" target="_blank" class="btn btn-dark module-issue-link">
                        Issues <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                </div>
                <div class="module-item-cover">
                    <img src="${module.cover}" alt="${module.name}" />
                </div>
            `;
            moduleList.appendChild(li);
        });
    }
    
    // Initialiser le chargement
    loadModuleTypes();
});
