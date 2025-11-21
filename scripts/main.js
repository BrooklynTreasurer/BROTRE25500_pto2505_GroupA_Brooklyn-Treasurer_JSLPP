import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
  setupEditTaskModalHandler,
} from "./ui/modalHandlers.js";
import { editTask } from "./tasks/taskManager.js";

function initTaskBoard() {
  const tasks = loadTasksFromStorage();
  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  setupEditTaskModalHandler();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
