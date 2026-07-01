class NavPagination extends HTMLElement {
    connectedCallback() {
        const prev_label = this.getAttribute('prev-label');
        const prev_url = this.getAttribute('prev-url') || '#';
        const next_label = this.getAttribute('next-label');
        const next_url = this.getAttribute('next-url') || '#';

        this.innerHTML = `
            <div class="doc-pagination-container">
                ${prev_label ? `
                <a href="${prev_url}" class="nav-card prev">
                    <svg aria-hidden="true" class="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    <div class="nav-content align-right">
                        <span class="nav-subtitle">Previous</span>
                        <span class="nav-title">${prev_label}</span>
                    </div>
                </a>` : '<div class="spacer"></div>'}

                ${next_label ? `
                <a href="${next_url}" class="nav-card next">
                    <div class="nav-content">
                        <span class="nav-subtitle">Next</span>
                        <span class="nav-title">${next_label}</span>
                    </div>
                    <svg aria-hidden="true" class="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>` : '<div class="spacer"></div>'}
            </div>
        `;
    }
}

customElements.define('nav-pagination', NavPagination);