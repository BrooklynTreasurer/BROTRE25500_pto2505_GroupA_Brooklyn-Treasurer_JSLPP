// Entrypoint: import and call UI init functions used across the app

import { initThemeUi } from "./ui/themeUi.js";
import { setupNewTaskModalHandler, setupModalCloseHandler,setupMobileTopModalHandler } from "./ui/modalHandlers.js";
import { renderTasks, clearExistingTasks } from "./ui/render.js";
import { loadTasksFromStorage } from "./utils/localStorage.js";
import { initSidebarToggle } from "./ui/sideBarUi.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Theme (loads saved preference and wires the toggle)
  initThemeUi();

  // Sidebar toggle
  initSidebarToggle();

  // Modals / form handlers
  setupNewTaskModalHandler();
  setupModalCloseHandler();
  setupMobileTopModalHandler();

  // Render tasks stored in localStorage or fetch from API
  clearExistingTasks();
  const tasks = await loadTasksFromStorage();
  console.log("Tasks to render:", tasks);
  renderTasks(tasks);
});
