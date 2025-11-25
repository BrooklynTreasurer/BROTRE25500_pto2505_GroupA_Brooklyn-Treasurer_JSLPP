export function initSidebarToggle() {
  const hideSidebarBtn = document.getElementById("hide-sidebar-btn");
  const sidebar = document.getElementById("side-bar-div");

  if (!hideSidebarBtn || !sidebar) {
    console.error("Sidebar button or sidebar element not found");
    return;
  }

  hideSidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("side-bar-visibility-hidden");
  });
}