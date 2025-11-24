import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
  setupEditTaskModalHandler,
  setupDeleteTaskHandler,
} from "./ui/modalHandlers.js";
import { editTask } from "./tasks/taskManager.js";
import {toggleTheme } from "./utils/theme.js";

function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  setupEditTaskModalHandler();
  setupDeleteTaskHandler();
  toggleTheme();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
