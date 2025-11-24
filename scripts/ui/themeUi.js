import { applyTheme } from "../utils/theme.js";

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
 * Initialize UI: set checkbox from stored preference (if any),
 * apply theme, and register change listener to save preference.
 * Call this on DOMContentLoaded (or import/run from main.js).
 */
export function initThemeUi() {
  const checkbox = document.getElementById("theme-toggle-checkbox");
  if (!checkbox) return;

  const stored = loadThemePreference();
  if (stored !== null) {
    checkbox.checked = stored;
    applyTheme(stored);
  } else {
    // No stored preference: use current checkbox state
    applyTheme(checkbox.checked);
  }

  // Ensure single listener
  checkbox.addEventListener("change", () => {
    const isDark = checkbox.checked;
    applyTheme(isDark);
    saveThemePreference(isDark);
  });
}

// Auto-init when DOM is ready (safe if called from main.js instead - optional)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeUi);
} else {
  initThemeUi();
}