// Entrypoint: import and call UI init functions used across the app

import { initThemeUi } from "./ui/themeUi.js";
import { setupNewTaskModalHandler, setupModalCloseHandler } from "./ui/modalHandlers.js";
import { renderTasks, clearExistingTasks } from "./ui/render.js";
import { loadTasksFromStorage } from "./utils/localStorage.js";

document.addEventListener("DOMContentLoaded", () => {
  // Theme (loads saved preference and wires the toggle)
  initThemeUi();

  // Modals / form handlers
  setupNewTaskModalHandler();
  setupModalCloseHandler();

  // Render tasks stored in localStorage (or initial tasks if none)
  clearExistingTasks();
  const tasks = loadTasksFromStorage();
  renderTasks(tasks);
});
