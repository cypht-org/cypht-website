// ─── Fn Utils ────────────────────────────────────────────────────────────────

function scroll_to_element(element, offset = 90) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

const load_doc_shortcut = (nav_id) => {
    const nav = document.getElementById(nav_id);
    if (!nav) {
        console.error(`Element with id "${nav_id}" not found`);
        return;
    }

    const links = Array.from(nav.querySelectorAll("a"));
    const sections = links
        .map(link => {
            const id = link.getAttribute('href');
            return id !== '#' ? document.querySelector(id) : null;
        })
        .filter(Boolean);

    // Update active link 
    const update_active_link = () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= (sectionTop - 150)) {
                current = `#${section.getAttribute('id')}`;
            }
        });

        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === current);
        });
    };

    // Scroll event listener
    window.addEventListener('scroll', update_active_link);
    window.addEventListener('load', update_active_link);

    // Click event listener
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Update active link
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                scroll_to_element(targetElement);
            }
        });
    });
};

// ─── Fn Main ──────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    load_doc_shortcut("dc-ctr-nav");
});