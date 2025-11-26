import {
  loadSidebarPreference,
  toggleSidebarVisibility,
} from "../utils/sidebar.js";

export function initSidebarToggle() {
  const hideSidebarBtn = document.getElementById("hide-sidebar-btn");
  const sidebar = document.getElementById("side-bar-div");

  if (!hideSidebarBtn || !sidebar) {
    console.error("Sidebar button or sidebar element not found");
    return;
  }

  // Apply saved preference
  const savedPreference = loadSidebarPreference();
  if (savedPreference !== null) {
    if (savedPreference) {
      sidebar.classList.add("side-bar-visibility-hidden");
      showSidebarToggleButton(); // show the small tab if hidden
    } else {
      sidebar.classList.remove("side-bar-visibility-hidden");
      hideSidebarToggleButton();
    }
  } else {
    hideSidebarToggleButton();
  }

  hideSidebarBtn.addEventListener("click", () => {
    const isHidden = toggleSidebarVisibility(sidebar);
    if (isHidden) {
      showSidebarToggleButton();
    } else {
      hideSidebarToggleButton();
    }
  });
}

/**
 * Creates and displays a button to show the hidden sidebar
 */
function showSidebarToggleButton() {
  let showBtn = document.getElementById("show-sidebar-btn");

  if (!showBtn) {
    showBtn = document.createElement("button");
    showBtn.id = "show-sidebar-btn";
    showBtn.className = "icon-btn show-sidebar-btn";
    showBtn.type = "button";
    showBtn.innerHTML = `
      <img src="./assets/icon-show-sidebar.svg" alt="show-sidebar-icon" id="show-sidebar-icon" />
    `;

    const layout = document.getElementById("layout");
    if (layout) {
      layout.insertAdjacentElement("beforebegin", showBtn);
    } else {
      document.body.insertAdjacentElement("afterbegin", showBtn);
    }

    // attach listener once
    showBtn.addEventListener("click", handleShowSidebar);
  }

  showBtn.style.display = "flex";
}

/**
 * Handler for showing the sidebar
 */
function handleShowSidebar() {
  const sidebar = document.getElementById("side-bar-div");
  if (!sidebar) return;
  toggleSidebarVisibility(sidebar);
  hideSidebarToggleButton();
}

/**
 * Hides the "show sidebar" button
 */
function hideSidebarToggleButton() {
  const showBtn = document.getElementById("show-sidebar-btn");
  if (showBtn) {
    showBtn.style.display = "none";
  }
}
