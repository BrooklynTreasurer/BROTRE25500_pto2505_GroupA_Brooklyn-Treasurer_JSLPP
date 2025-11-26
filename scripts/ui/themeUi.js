import { applyTheme, updateAllThemeCheckboxes } from "../utils/theme.js";

const STORAGE_KEY = "prefersDarkTheme";

/**
 * Save theme preference to localStorage.
 * @param {boolean} isDark
 */
export function saveThemePreference(isDark) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Boolean(isDark)));
  } catch (e) {
    console.error("Failed to save theme preference:", e);
  }
}

/**
 * Load theme preference from localStorage.
 * @returns {boolean|null} true = dark, false = light, null = no pref stored
 */
export function loadThemePreference() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return null;
    return JSON.parse(raw) === true;
  } catch (e) {
    console.error("Failed to load theme preference:", e);
    return null;
  }
}

/**
 * Initialize UI: set all checkboxes from stored preference,
 * apply theme, and register change listeners to save preference.
 */
export function initThemeUi() {
  const checkboxes = document.querySelectorAll("#theme-toggle-checkbox");
  if (checkboxes.length === 0) return;

  const stored = loadThemePreference();
  const isDark = stored !== null ? stored : checkboxes[0].checked;

  // Update all checkboxes and apply theme
  updateAllThemeCheckboxes(isDark);
  applyTheme(isDark);

  // Add listener to each checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const newDarkState = e.target.checked;
      updateAllThemeCheckboxes(newDarkState);
      applyTheme(newDarkState);
      saveThemePreference(newDarkState);
    });
  });
}

// Auto-init when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeUi);
} else {
  initThemeUi();
}