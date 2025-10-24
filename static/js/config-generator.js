//1. Copy env config
async function copy_env_config(preOrSelector = 'pre') {
  const pre = (typeof preOrSelector === 'string')
    ? document.querySelector(preOrSelector)
    : preOrSelector;

  if (!pre) {
    throw new Error('Element <pre> not found.');
  }

  const text = pre.innerText ?? pre.textContent ?? '';

  // Use Clipboard API if available
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return; // success
    } catch (err) {
      // fallback to old method
      console.warn('navigator.clipboard failed, using fallback', err);
    }
  }

  // Fallback (for older browsers)
  const textarea = document.createElement('textarea');
  textarea.value = text;
  // avoid showing the textarea on screen
  textarea.style.position = 'fixed';
  textarea.style.left = '-99999px';
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
  } finally {
    textarea.remove();
  }
}

//2. Download env config
function download_env_config(preOrSelector = 'pre', filename = '.env.config') {
  const pre = (typeof preOrSelector === 'string')
    ? document.querySelector(preOrSelector)
    : preOrSelector;

  if (!pre) {
    throw new Error('Element <pre> not found.');
  }

  const text = pre.innerText ?? pre.textContent ?? '';
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  // some browsers require the anchor to be in the DOM
  document.body.appendChild(a);
  a.click();
  a.remove();

  // release the URL
  URL.revokeObjectURL(url);
}

//3. Feedback animation 
function animateButtonIcon(button, newSVG, duration = 1500) {
  const originalSVG = button.innerHTML;
  const wrapper = document.createElement('span');
  wrapper.classList.add('icon-anim');
  wrapper.innerHTML = newSVG;

  // Étape 1 : animation de sortie de l’ancien SVG
  button.firstElementChild?.classList?.add('fade-out');
  setTimeout(() => {
    // Étape 2 : remplacement par le nouveau SVG animé
    button.innerHTML = '';
    button.appendChild(wrapper);
    wrapper.classList.add('pop'); // petit effet "pop"
  }, 200);

  // Étape 3 : retour à l’original avec effet doux
  setTimeout(() => {
    wrapper.classList.add('fade-out');
    setTimeout(() => {
      button.innerHTML = originalSVG;
      button.firstElementChild?.classList.add('fade-in');
      setTimeout(() => {
        button.firstElementChild?.classList.remove('fade-in');
      }, 250);
    }, 200);
  }, duration);
}

//4. Copy button icon
const checkSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M21.448 8.2c.052 1.05.052 2.3.052 3.8c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c1.072 0 2.016 0 2.85.02"/><path d="M8 11.5s1.5 0 3.5 3.5c0 0 5.059-9.167 10-11"/></g></svg>`;

document.getElementById('copy_btn')?.addEventListener('click', async () => {
  try {
    await copy_env_config('#env_config');
    animateButtonIcon(document.getElementById('copy_btn'), checkSVG);
  } catch (err) {
    console.error(err);
  }
});

//5. Download button icon
const downloadCheckSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"/><path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834c0-.083.007-.164.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22m-2.013-2.953a.75.75 0 0 0 1.026 0l2-1.875a.75.75 0 0 0-1.026-1.094l-.737.69V13.5a.75.75 0 0 0-1.5 0v3.269l-.737-.691a.75.75 0 0 0-1.026 1.094z" clip-rule="evenodd"/></svg>`;
document.getElementById('download_btn')?.addEventListener('click', () => {
  try {
    download_env_config('#env_config', '.env.config');
    animateButtonIcon(document.getElementById('download_btn'), downloadCheckSVG);
  } catch (err) {
    console.error(err);
  }
});

//6. Scroll to element
const scroll_to_element = (el) => {
  window.scrollTo({
    top: el.offsetTop - 100, // marge du haut
    behavior: "smooth"
  });
};

//7. Load navigation menu
const navigation_menu = (nav_id, active_class) => {
  const nav = document.querySelector(nav_id);
  if (!nav) {
    console.error(`Element with id "${nav_id}" not found`);
    return;
  }

  // Get all links from the main menu and sub-lists
  const allLinks = nav.querySelectorAll("a");

  // Get all sections linked (those referenced by href)
  const sections = Array.from(allLinks)
    .map(link => {
      const id = link.getAttribute("href");
      return id && id.startsWith("#") ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  // Function to update the active link based on scroll
  const update_active_link = () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 150) {
        current = `#${section.getAttribute("id")}`;
      }
    });

    allLinks.forEach(link => {
      const isActive = link.getAttribute("href") === current;
      link.classList.toggle(active_class, isActive);

      if (isActive) {
        // link.scrollIntoView({
        //     behavior: "smooth",
        //     block: "nearest", // garde un peu de marge visuelle
        //     inline: "nearest"
        //   });
        // link.scrollIntoView({ block: "center", behavior: "smooth" });
      //   const parentGroup = link.closest(".cg-menu-group");
      //   if (parentGroup) {
      //     const parentLink = parentGroup.querySelector(".config-generator-link");
      //     if (parentLink) parentLink.classList.add(active_class);
        }
    });
  };

  // 🎯 Scroll and load event
  window.addEventListener("scroll", update_active_link);
  window.addEventListener("load", update_active_link);

  allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                scroll_to_element(targetElement);
            }
        });
    });
};


// show toast
function showFeedback(btn_id, toast_id,message, type = 'success') {
    const toastTrigger = document.getElementById(btn_id);
    const toastLiveExample = document.getElementById(toast_id);
    const toastBody = document.querySelector('.toast-body');
   
    if (toastTrigger && toastLiveExample) {
        // toastBootstrap.hide();
       toastBody.textContent = message;
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample, {
            autohide: true,
            delay: 3000
        });
        
        toastTrigger.addEventListener('click', (e) => {
            e.preventDefault(); 
            toastBootstrap.show();
        });
    } else {
        console.error('Toast elements not found!');
        console.log('toastTrigger:', toastTrigger);
        console.log('toastLiveExample:', toastLiveExample);
    }
}


// === Document ready ===
document.addEventListener("DOMContentLoaded", () => {
  navigation_menu(".config-generator-list", "config-active");
  showFeedback('copy_btn', 'simple_toast','Copied to clipboard', 'success');
  // showFeedback('download_btn', 'download_toast','Downloaded success', 'success');
});

// === Toast ===
