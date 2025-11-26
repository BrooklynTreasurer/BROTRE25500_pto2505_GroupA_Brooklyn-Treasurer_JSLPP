/**
 * Apply theme to all elements (logo and body)
 * @param {boolean} isDark
 */
export function applyTheme(isDark) {
  const logo = document.getElementById("logo");
  if (logo) {
    logo.src = isDark ? "assets/logo-dark.svg" : "assets/logo-light.svg";
  }

  document.body.classList.toggle("dark-theme", isDark);
}

/**
 * Update all theme checkboxes to the same state
 * @param {boolean} checked
 */
export function updateAllThemeCheckboxes(checked) {
  const checkboxes = document.querySelectorAll("#theme-toggle-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
}

/**
 * Initialize theme and sync all checkboxes
 */
export function initTheme() {
  const checkboxes = document.querySelectorAll("#theme-toggle-checkbox");
  if (checkboxes.length === 0) return;

  // Apply initial theme from first checkbox
  const firstCheckbox = checkboxes[0];
  applyTheme(firstCheckbox.checked);

  // Add listener to each checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      // Update all checkboxes to match the one that changed
      updateAllThemeCheckboxes(e.target.checked);
      applyTheme(e.target.checked);
    });
  });
}

// Run init on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTheme);
} else {
  initTheme();
}

