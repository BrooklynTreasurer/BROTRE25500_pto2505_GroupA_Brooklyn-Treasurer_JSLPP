import { 
  saveSidebarPreference, 
  loadSidebarPreference, 
  toggleSidebarVisibility 
} from "../utils/sidebar.js";

export function initSidebarToggle() {
  const hideSidebarBtn = document.getElementById("hide-sidebar-btn");
  const sidebar = document.getElementById("side-bar-div");

  if (!hideSidebarBtn || !sidebar) {
    console.error("Sidebar button or sidebar element not found");
    return;
  }

  // Load saved preference and apply it
  const savedPreference = loadSidebarPreference();
  if (savedPreference !== null) {
    if (savedPreference) {
      sidebar.classList.add("side-bar-visibility-hidden");
      showSidebarToggleButton();
    } else {
      sidebar.classList.remove("side-bar-visibility-hidden");
      hideSidebarToggleButton();
    }
  }

  hideSidebarBtn.addEventListener("click", () => {
    toggleSidebarVisibility(sidebar);
    
    // Show/hide the toggle button based on sidebar state
    if (sidebar.classList.contains("side-bar-visibility-hidden")) {
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
  
  // If button doesn't exist, create it
  if (!showBtn) {
    showBtn = document.createElement("button");
    showBtn.id = "show-sidebar-btn";
    showBtn.className = "icon-btn show-sidebar-btn";
    showBtn.innerHTML = `
      <img
        src="./assets/icon-show-sidebar.svg"
        alt="show-sidebar-icon"
        id="show-sidebar-icon"
      />
    `;
    
    // Add to the main layout or body
    const layout = document.getElementById("layout");
    if (layout) {
      layout.insertAdjacentElement("beforebegin", showBtn);
    } else {
      document.body.insertAdjacentElement("afterbegin", showBtn);
    }

    // Add click listener only once (when button is created)
    showBtn.addEventListener("click", handleShowSidebar);
  }
  
  // Show the button
  showBtn.style.display = "block";
}

/**
 * Handler for showing the sidebar
 */
function handleShowSidebar() {
  const sidebar = document.getElementById("side-bar-div");
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

