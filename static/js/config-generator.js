//1. Copy env config
async function copy_env_config(preOrSelector = "pre") {
  const pre =
    typeof preOrSelector === "string"
      ? document.querySelector(preOrSelector)
      : preOrSelector;

  if (!pre) {
    throw new Error("Element <pre> not found.");
  }

  const text = pre.innerText ?? pre.textContent ?? "";

  // Use Clipboard API if available
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return; // success
    } catch (err) {
      // fallback to old method
      console.warn("navigator.clipboard failed, using fallback", err);
    }
  }

  // Fallback (for older browsers)
  const textarea = document.createElement("textarea");
  textarea.value = text;
  // avoid showing the textarea on screen
  textarea.style.position = "fixed";
  textarea.style.left = "-99999px";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand("copy");
  } finally {
    textarea.remove();
  }
}

//2. Download env config
function download_env_config(preOrSelector = "pre", filename = ".env.config") {
  const pre =
    typeof preOrSelector === "string"
      ? document.querySelector(preOrSelector)
      : preOrSelector;

  if (!pre) {
    throw new Error("Element <pre> not found.");
  }

  const text = pre.innerText ?? pre.textContent ?? "";
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
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
  const wrapper = document.createElement("span");
  wrapper.classList.add("icon-anim");
  wrapper.innerHTML = newSVG;

  // Step 1: animate the outgoing original SVG
  button.firstElementChild?.classList?.add("fade-out");
  setTimeout(() => {
    // Step 2: replace it with the new animated SVG
    button.innerHTML = "";
    button.appendChild(wrapper);
    wrapper.classList.add("pop"); // small "pop" effect
  }, 200);

  // Step 3: revert to the original with a smooth effect
  setTimeout(() => {
    wrapper.classList.add("fade-out");
    setTimeout(() => {
      button.innerHTML = originalSVG;
      button.firstElementChild?.classList.add("fade-in");
      setTimeout(() => {
        button.firstElementChild?.classList.remove("fade-in");
      }, 250);
    }, 200);
  }, duration);
}

//4. Copy button icon
const checkSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M21.448 8.2c.052 1.05.052 2.3.052 3.8c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c1.072 0 2.016 0 2.85.02"/><path d="M8 11.5s1.5 0 3.5 3.5c0 0 5.059-9.167 10-11"/></g></svg>`;

// Copy button handler
const handleCopyClick = async (buttonId) => {
  try {
    await copy_env_config("#env_config");
    animateButtonIcon(document.getElementById(buttonId), checkSVG);
  } catch (err) {
    console.error(err);
  }
};

document
  .getElementById("copy_btn")
  ?.addEventListener("click", () => handleCopyClick("copy_btn"));
document
  .getElementById("copy_btn_lg")
  ?.addEventListener("click", () => handleCopyClick("copy_btn_lg"));

//5. Download button icon
const downloadCheckSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"/><path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834c0-.083.007-.164.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22m-2.013-2.953a.75.75 0 0 0 1.026 0l2-1.875a.75.75 0 0 0-1.026-1.094l-.737.69V13.5a.75.75 0 0 0-1.5 0v3.269l-.737-.691a.75.75 0 0 0-1.026 1.094z" clip-rule="evenodd"/></svg>`;

// Download button handler
const handleDownloadClick = (buttonId) => {
  try {
    download_env_config("#env_config", ".env.config");
    animateButtonIcon(document.getElementById(buttonId), downloadCheckSVG);
  } catch (err) {
    console.error(err);
  }
};

document
  .getElementById("download_btn")
  ?.addEventListener("click", () => handleDownloadClick("download_btn"));
document
  .getElementById("download_btn_lg")
  ?.addEventListener("click", () => handleDownloadClick("download_btn_lg"));

//6. Scroll to element
const scroll_to_element = (el) => {
  window.scrollTo({
    top: el.offsetTop - 100, // marge du haut
    behavior: "smooth",
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
    .map((link) => {
      const id = link.getAttribute("href");
      return id && id.startsWith("#") ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  // Function to update the active link based on scroll
  const update_active_link = () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 150) {
        current = `#${section.getAttribute("id")}`;
      }
    });

    allLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === current;
      link.classList.toggle(active_class, isActive);
    });
  };

  // 🎯 Scroll and load event
  window.addEventListener("scroll", update_active_link);
  window.addEventListener("load", update_active_link);

  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        scroll_to_element(targetElement);
      }
    });
  });
};

// show toast
function showFeedback(btn_id, toast_id, message, type = "success") {
  const toastTrigger = document.getElementById(btn_id);
  const toastLiveExample = document.getElementById(toast_id);
  const toastBody = document.querySelector(".toast-body");

  if (toastTrigger && toastLiveExample) {
    // toastBootstrap.hide();
    toastBody.textContent = message;
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(
      toastLiveExample,
      {
        autohide: true,
        delay: 80000,
      },
    );

    toastTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      toastBootstrap.show();
    });
  } else {
    console.error("Toast elements not found!");
    console.log("toastTrigger:", toastTrigger);
    console.log("toastLiveExample:", toastLiveExample);
  }
}

// 8. Store default values for reset functionality
const defaultValues = {};

// 9. Initialize default values from form
function initializeDefaultValues() {
  const inputs = document.querySelectorAll("input[name], select[name]");

  inputs.forEach((input) => {
    const name = input.getAttribute("name");
    if (!name) return;

    if (input.type === "checkbox") {
      defaultValues[name] = input.checked;
    } else if (input.type === "radio") {
      if (input.checked) {
        defaultValues[name] = input.value;
      }
    } else {
      const defaultValue = input.getAttribute("value") || input.value || "";
      defaultValues[name] = defaultValue;
    }
  });
}

// 10. Collect all form values and update preview
function collectFormValues() {
  const envConfig = {};

  // Get all form inputs, selects, and checkboxes
  const inputs = document.querySelectorAll("input[name], select[name]");

  inputs.forEach((input) => {
    const name = input.getAttribute("name");
    if (!name) return;

    let value = "";

    if (input.type === "checkbox") {
      value = input.checked ? "true" : "false";
    } else if (input.type === "radio") {
      if (input.checked) {
        value = input.value;
      } else {
        return; // Skip unchecked radio buttons
      }
    } else {
      value = input.value || "";
    }

    envConfig[name] = value;
  });

  return envConfig;
}

// 11. Update preview with collected values
function updatePreview() {
  const values = collectFormValues();
  const preElement = document.getElementById("env_config");

  if (!preElement) return;

  // Add default settings that aren't in the form
  const defaultSettings = {
    DEFAULT_SETTING_NO_PASSWORD_SAVE: "false",
    DEFAULT_SETTING_IMAP_PER_PAGE: "20",
    DEFAULT_SETTING_SIMPLE_MSG_PARTS: "false",
    DEFAULT_SETTING_PAGINATE_LINKS: "true",
    DEFAULT_SETTING_MSG_PART_ICONS: "true",
    DEFAULT_SETTING_REVIEW_SENT_EMAIL: "true",
    DEFAULT_SETTING_TEXT_ONLY: "false",
    DEFAULT_SETTING_SENT_PER_SOURCE: "20",
    DEFAULT_SETTING_SENT_SINCE: "-1 week",
    DEFAULT_SETTING_JUNK_PER_SOURCE: "20",
    DEFAULT_SETTING_JUNK_SINCE: "-1 week",
    DEFAULT_SETTING_SNOOZED_PER_SOURCE: "20",
    DEFAULT_SETTING_SNOOZED_SINCE: "-1 week",
    DEFAULT_SETTING_ENABLE_SNOOZE: "false",
    DEFAULT_SETTING_TAGS_PER_SOURCE: "20",
    DEFAULT_SETTING_TAGS_SINCE: "-1 week",
    DEFAULT_SETTING_TRASH_PER_SOURCE: "20",
    DEFAULT_SETTING_TRASH_SINCE: "-1 week",
    DEFAULT_SETTING_DRAFT_PER_SOURCE: "20",
    DEFAULT_SETTING_DRAFT_SINCE: "-1 week",
    DEFAULT_SETTING_SHOW_LIST_ICONS: "true",
    DEFAULT_SETTING_START_PAGE: "none",
    DEFAULT_SETTING_DISABLE_DELETE_PROMPT: "false",
    DEFAULT_SETTING_FLAGGED_PER_SOURCE: "20",
    DEFAULT_SETTING_NO_FOLDER_ICONS: "false",
    DEFAULT_SETTING_ALL_EMAIL_PER_SOURCE: "20",
    DEFAULT_SETTING_ALL_EMAIL_SINCE: "-1 week",
    DEFAULT_SETTING_ALL_SINCE: "-1 week",
    DEFAULT_SETTING_ALL_PER_SOURCE: "20",
    DEFAULT_SETTING_FLAGGED_SINCE: "-1 week",
    DEFAULT_SETTING_UNREAD_PER_SOURCE: "20",
    DEFAULT_SETTING_UNREAD_SINCE: "-1 week",
    DEFAULT_SETTING_SEARCH_SINCE: "-1 week",
    DEFAULT_SETTING_TIMEZONE: "UTC",
    DEFAULT_SETTING_LIST_STYLE: "email_style",
    DEFAULT_SETTING_LANGUAGE: "en",
    DEFAULT_SETTING_UNREAD_EXCLUDE_FEEDS: "false",
    DEFAULT_SETTING_FEED_LIMIT: "20",
    DEFAULT_SETTING_FEED_SINCE: "-1 week",
    DEFAULT_SETTING_SMTP_COMPOSE_TYPE: "0",
    DEFAULT_SETTING_SMTP_AUTO_BCC: "false",
    DEFAULT_SETTING_THEME: "default",
    DEFAULT_SETTING_UNREAD_EXCLUDE_WORDPRESS: "false",
    DEFAULT_SETTING_WORDPRESS_SINCE: "-1 week",
    DEFAULT_SETTING_UNREAD_EXCLUDE_GITHUB: "false",
    DEFAULT_SETTING_GITHUB_LIMIT: "20",
    DEFAULT_SETTING_GITHUB_SINCE: "-1 week",
    DEFAULT_SETTING_INLINE_MESSAGE: "false",
    DEFAULT_SETTING_INLINE_MESSAGE_STYLE: "right",
    DEFAULT_SETTING_ENABLE_KEYBOARD_SHORTCUTS: "false",
    DEFAULT_SETTING_ENABLE_SIEVE_FILTER: "false",
    DEFAULT_SETTING_ENABLE_COLLECT_ADDRESS_ON_SEND: "false",
  };

  // Build CYPHT_MODULES from core + selected modules
  const allModules = [...module_selected];
  values['CYPHT_MODULES'] = allModules.join(',');

  // Merge form values with default settings
  const allValues = { ...defaultSettings, ...values };

  // Build the config text
  let configText = "";

  // Sort keys alphabetically for better readability
  const sortedKeys = Object.keys(allValues).sort();

  const quotedKeys = [
    'REDIS_SERVER', 'MEMCACHED_SERVER',
    'DEFAULT_SETTING_SENT_SINCE', 'DEFAULT_SETTING_JUNK_SINCE',
    'DEFAULT_SETTING_SNOOZED_SINCE', 'DEFAULT_SETTING_TAGS_SINCE',
    'DEFAULT_SETTING_TRASH_SINCE', 'DEFAULT_SETTING_DRAFT_SINCE',
    'DEFAULT_SETTING_ALL_EMAIL_SINCE', 'DEFAULT_SETTING_ALL_SINCE',
    'DEFAULT_SETTING_FLAGGED_SINCE', 'DEFAULT_SETTING_UNREAD_SINCE',
    'DEFAULT_SETTING_SEARCH_SINCE', 'DEFAULT_SETTING_LIST_STYLE',
    'DEFAULT_SETTING_FEED_SINCE', 'DEFAULT_SETTING_THEME',
    'DEFAULT_SETTING_WORDPRESS_SINCE', 'DEFAULT_SETTING_GITHUB_SINCE',
    'DEFAULT_SETTING_INLINE_MESSAGE_STYLE',
    'LDAP_BASE_DN', 'LDAP_UID_ATTR', 'LDAP_AUTH_BASE_DN',
    'CYPHT_MODULES'
  ];

  sortedKeys.forEach((key) => {
    const val = allValues[key];
    configText += quotedKeys.includes(key)
      ? `${key}="${val}"\n`
      : `${key}=${val}\n`;
  });

  preElement.textContent = configText;
}

// 12. Reset all form values to defaults
function resetAllValues() {
  // Reset all input fields
  const inputs = document.querySelectorAll("input[name]");
  inputs.forEach((input) => {
    const name = input.getAttribute("name");

    if (input.type === "checkbox") {
      input.checked = defaultValues[name] || false;
    } else if (input.type === "radio") {
      input.checked = false;
    } else {
      input.value = defaultValues[name] || "";
    }
  });

  // Reset all select fields
  const selects = document.querySelectorAll("select[name]");
  selects.forEach((select) => {
    select.selectedIndex = 0;
  });

  // Reset modules: clear array, remove selected classes, re-add required modules
  module_selected.length = 0;
  document.querySelectorAll('.module_selected').forEach(el => el.classList.remove('module_selected'));
  _modules.forEach(group => {
    if (group.is_required) {
      group.items.forEach(item => module_selected.push(item));
    }
  });
  updatePreview();
}

// 13. Reset section values
function resetSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    console.error(`Section with id "${sectionId}" not found`);
    return;
  }

  // Reset inputs in this section
  const inputs = section.querySelectorAll("input[name]");
  inputs.forEach((input) => {
    const name = input.getAttribute("name");

    if (input.type === "checkbox") {
      input.checked = defaultValues[name] || false;
    } else if (input.type === "radio") {
      input.checked = false;
    } else {
      input.value = defaultValues[name] || "";
    }
  });

  // Reset selects in this section
  const selects = section.querySelectorAll("select[name]");
  selects.forEach((select) => {
    select.selectedIndex = 0;
  });

  // Update preview after reset
  updatePreview();
}


// 14. Modules 
const _modules = [
  {
    title: 'Core',
    is_required: true,
    items: ["core", "contacts", "local_contacts", "feeds", "imap", "smtp", "account", "idle_timer", "calendar", "themes", "nux", "developer", "history", "saved_searches", "profiles", "inline_message", "imap_folders", "advanced_search", "highlights"]
  },
  {
    title: 'Integrations/providers',
    is_required: false,
    items: [
      'keyboard_shortcuts',
      'tags']
  },
]

// const _core_modules = ['core', 'contacts', 'local_contacts', 'idle_timer', 'calendar'];
const module_selected = []

// a. Select module
function select_module(module_id, item_id) {

  const module_item = document.getElementById(item_id);

  if (module_selected.includes(module_id)) {
    module_selected.splice(module_selected.indexOf(module_id), 1);
    module_item.classList.remove('module_selected');
  } else {
    module_selected.push(module_id);
    module_item.classList.add('module_selected');
  }

  updatePreview();
}

// b. Initialize modules
function init_config_modules(group_ul, group, index) {

  group.items.forEach((item) => {

    const li = document.createElement('li');
    const itemId = `mdl-${index}`;

    li.textContent = item;
    li.className = 'config-module-item';
    li.id = itemId;
    li.dataset.moduleId = item;

    if (!group.is_required) {
      li.addEventListener('click', () => {
        select_module(item, itemId);
      });
    } else {
      li.classList.add('required_module');
      module_selected.push(item);
    }

    group_ul.appendChild(li);
    index++;
  });

  return index;
}

//c. Group Module
function group_module() {

  const moduleZone = document.getElementById('module-zone');
  if (!moduleZone) return;

  moduleZone.innerHTML = '';
  let moduleIndex = 0;

  _modules.forEach((group, index) => {

    const groupContainer = document.createElement('div');
    groupContainer.classList.add('module-group');
    const header = module_header(group.title);
    const groupUl = document.createElement('ul');

    groupUl.classList.add('config-modules');
    groupUl.id = `grp-${index}`;

    groupContainer.appendChild(header);
    groupContainer.appendChild(groupUl);
    moduleZone.appendChild(groupContainer);

    moduleIndex = init_config_modules(
      groupUl,
      group,
      moduleIndex
    );

  });

}

// d. build content
function module_header(title) {
  const group_module_header = document.createElement('div');
  group_module_header.className = "module-group-header";

  const _title = document.createElement('span');
  _title.className = "module-group-title";
  _title.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c-.818 0-1.6-.335-3.163-1.006C4.946 19.324 3 18.49 3 17.085V7.747M12 22c.818 0 1.6-.335 3.163-1.006C19.054 19.324 21 18.49 21 17.085V7.747M12 22v-9.83m9-4.422c0 .603-.802.984-2.405 1.747l-2.92 1.39C13.87 11.741 12.97 12.17 12 12.17m9-4.423c0-.604-.802-.985-2.405-1.748M3 7.747c0 .604.802.986 2.405 1.748l2.92 1.39c1.804.857 2.705 1.286 3.675 1.286M3 7.748c0-.604.802-.985 2.405-1.748m.927 7.311l1.994.948M12 2v2m4-1l-1.5 2M8 3l1.5 2" color="currentColor"/></svg>${title}`;

  group_module_header.appendChild(_title);
  return group_module_header;
}

// Make resetSection available globally
window.resetSection = resetSection;

// === Document ready ===
document.addEventListener("DOMContentLoaded", () => {
  // Initialize default values
  initializeDefaultValues();

  navigation_menu(".config-generator-list", "config-active");
  showFeedback("copy_btn", "simple_toast", "Copied to clipboard", "success");

  // Update preview when any form field changes
  const formElements = document.querySelectorAll("input[name], select[name]");
  formElements.forEach((element) => {
    element.addEventListener("change", updatePreview);
    element.addEventListener("input", updatePreview);
  });

  // Initialize preview with current values
  updatePreview();

  // Add event listener for Reset All button
  const resetAllBtn = document.getElementById("liveToastBtn");
  if (resetAllBtn) {
    resetAllBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Are you sure you want to reset all configuration values?")) {
        resetAllValues();
      }
    });
  }

  // Update preview when offcanvas is opened
  const offcanvas = document.getElementById("offcanvasRight");
  if (offcanvas) {
    offcanvas.addEventListener("show.bs.offcanvas", updatePreview);
  }

  //
  group_module()
});
