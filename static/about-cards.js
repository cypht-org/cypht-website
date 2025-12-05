document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.about-grid-3');
  if (!grid) return;

  const cards = grid.querySelectorAll('.about-card');

  // Smoothly transition a card's height from current to target as a result of a DOM mutation
  const animateHeight = (card, mutate) => {
    // Ensure styles for smooth transition
    card.style.overflow = card.style.overflow || 'hidden';
    card.style.transition = card.style.transition || 'max-height 240ms ease';

    // Set explicit start height
    const start = card.scrollHeight;
    card.style.maxHeight = start + 'px';

    // Apply DOM change (e.g., expanding/collapsing desc)
    mutate();

    // Force reflow to ensure measurements are fresh, then animate to new height
    // eslint-disable-next-line no-unused-expressions
    card.offsetHeight; // reflow
    const end = card.scrollHeight;
    requestAnimationFrame(() => {
      card.style.maxHeight = end + 'px';
    });
  };

  const getCollapsedHeight = (el) => {
    // Estimate based on computed line-height * 3 lines
    const styles = window.getComputedStyle(el);
    const lineHeight = parseFloat(styles.lineHeight) || 20; // fallback
    return Math.round(lineHeight * 3);
  };

  const prepareCard = (card) => {
    const desc = card.querySelector('.card-desc');
    const btn = card.querySelector('.card-toggle');
    if (!desc || !btn) return;

    // Initialize collapsed max-height
    const collapsed = getCollapsedHeight(desc);
    desc.style.maxHeight = collapsed + 'px';

    // Initialize card height to current content height
    card.style.overflow = card.style.overflow || 'hidden';
    // Ensure CSS height doesn't conflict with max-height animation
    card.style.height = 'auto';
    card.style.transition = card.style.transition || 'max-height 240ms ease';
    card.style.maxHeight = card.scrollHeight + 'px';

    // Hide toggle if content fits within clamp height
    const fits = () => desc.scrollHeight <= collapsed + 4; // tolerance
    const updateToggleVisibility = () => {
      // Ensure clamped class for gradient when collapsed
      if (fits()) {
        btn.style.display = 'none';
      } else {
        btn.style.display = '';
      }
    };
    updateToggleVisibility();

    // Toggle behavior: expand only this card, collapse others
    btn.addEventListener('click', () => {
      const wantExpand = !card.classList.contains('expanded');
      // Recompute collapsed height at the moment of interaction
      const collapsedNow = getCollapsedHeight(desc);

      // Collapse all others
      cards.forEach(c => {
        if (c === card) return;
        const d = c.querySelector('.card-desc');
        const b = c.querySelector('.card-toggle');
        if (d && b) {
          animateHeight(c, () => {
            // Use fresh collapsed height for each other card
            const otherCollapsed = getCollapsedHeight(d);
            d.style.maxHeight = otherCollapsed + 'px';
            c.classList.remove('expanded');
            b.setAttribute('aria-expanded', 'false');
            b.textContent = 'Read more';
          });
        }
      });

      if (wantExpand) {
        // Expand this
        animateHeight(card, () => {
          desc.style.maxHeight = desc.scrollHeight + 'px';
          card.classList.add('expanded');
          btn.setAttribute('aria-expanded', 'true');
          btn.textContent = 'Read less';
        });
      } else {
        // Collapse this
        animateHeight(card, () => {
          desc.style.maxHeight = collapsedNow + 'px';
          card.classList.remove('expanded');
          btn.setAttribute('aria-expanded', 'false');
          btn.textContent = 'Read more';
        });
      }
    });

    // Recalculate on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const isExpanded = card.classList.contains('expanded');
        const collapsedNow = getCollapsedHeight(desc);
        if (isExpanded) {
          desc.style.maxHeight = desc.scrollHeight + 'px';
        } else {
          desc.style.maxHeight = collapsedNow + 'px';
        }
        // Update card height to match current content
        card.style.maxHeight = card.scrollHeight + 'px';
        // Update toggle visibility in case layout changed
        const btn = card.querySelector('.card-toggle');
        if (btn) btn.style.display = (desc.scrollHeight <= collapsedNow + 4) ? 'none' : '';
      }, 120);
    });
  };

  cards.forEach(prepareCard);
});
