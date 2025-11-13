document.addEventListener('DOMContentLoaded', function() {
    // Load module categories
    function loadModuleTypes() {
        const typeList = document.getElementById('md-type-items');
        
        // Reset the current list
        typeList.innerHTML = '';
        
        // Iterate through every module category
        typeModules.forEach(type => {
            // Create the list element
            const li = document.createElement('li');
            li.className = 'module-type-item';
            li.setAttribute('data-type-id', type.id);
            
            // Inject the content
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <span>${type.name}</span>
                    <span class="badge bg-secondary">${module_length(type.id)}</span>
                </div>
            `;
            
            // Register click handler
            li.addEventListener('click', () => loadModulesByType(type.id));
            
            // Append to the list
            typeList.appendChild(li);
            
            // Select the first category by default
            if (type.id === 1) {
                li.classList.add('active');
                loadModulesByType(1);
            }
        });
    }
    
    // Render modules for the selected category
    function loadModulesByType(typeId) {
        const moduleList = document.getElementById('md-items');
        
        // Sync active state for the category list
        document.querySelectorAll('.module-type-item').forEach(item => {
            item.classList.toggle('active', parseInt(item.getAttribute('data-type-id')) === typeId);
        });
        
        // Filter modules by category
        const filteredModules = modules.filter(module => module.type_id === typeId);
        
        // Clear the existing list
        moduleList.innerHTML = '';
        
        // Append each module item
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
    
    // Kick things off
    loadModuleTypes();
});
