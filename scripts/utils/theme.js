// Function to apply the theme based on the checkbox state
export function applyTheme(isDark) {
  const Themeicon = document.getElementById("logo");
  if (!Themeicon) return;

  document.body.classList.toggle("dark-theme", isDark);
  Themeicon.src = isDark ? "assets/logo-dark.svg" : "assets/logo-light.svg";
}

// Function to toggle between light and dark themes
export function toggleTheme() {
  const checkbox = document.getElementById("theme-toggle-checkbox");
  if (!checkbox) return;
  applyTheme(checkbox.checked);
}

// Initialize the theme on page load
export function initTheme() {
  const checkbox = document.getElementById("theme-toggle-checkbox");
  if (!checkbox) return;

  // Apply initial theme from the checkbox state
  applyTheme(checkbox.checked);

  // Register a single change listener
  checkbox.addEventListener("change", () => applyTheme(checkbox.checked));
}

// Run init on DOM ready so the checkbox state is respected on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTheme);
} else {
  initTheme();
}

