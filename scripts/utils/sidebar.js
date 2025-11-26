export const SIDEBAR_STORAGE_KEY = "sidebarVisibility";

/**
 * Save sidebar visibility preference to localStorage.
 * @param {boolean} isHidden
 */
export function saveSidebarPreference(isHidden) {
  try {
    localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(Boolean(isHidden)));
  } catch (e) {
    console.error("Failed to save sidebar preference:", e);
  }
}

/**
 * Load sidebar visibility preference from localStorage.
 * @returns {boolean|null} true = hidden, false = visible, null = no pref stored
 */
export function loadSidebarPreference() {
  try {
    const raw = localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (raw === null) return null;
    return JSON.parse(raw) === true;
  } catch (e) {
    console.error("Failed to load sidebar preference:", e);
    return null;
  }
}

/**
 * Toggle sidebar visibility and save preference
 * @param {HTMLElement} sidebar
 * @returns {boolean} isHidden after toggle
 */
export function toggleSidebarVisibility(sidebar) {
  if (!sidebar) {
    console.error("toggleSidebarVisibility: sidebar element not found");
    return false;
  }

  sidebar.classList.toggle("side-bar-visibility-hidden");
  const isHidden = sidebar.classList.contains("side-bar-visibility-hidden");
  saveSidebarPreference(isHidden);
  return isHidden;
}