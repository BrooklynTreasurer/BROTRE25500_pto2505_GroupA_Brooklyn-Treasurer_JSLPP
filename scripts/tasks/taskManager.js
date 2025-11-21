import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";

export function addNewTask() {
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("desc-input").value.trim();
  const status = document.getElementById("select-status").value;
  const overlay = document.querySelector(".modal-overlay");

  if (!title) return;

  const tasks = loadTasksFromStorage();
  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title,
    description,
    status,
  };

  const updatedTasks = [...tasks, newTask];
  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
  resetForm();
  overlay.close();
}

export function editTask(taskId) {
  const title = document.getElementById("task-title").value.trim();
  const description = document.getElementById("task-desc").value.trim();
  const status = document.getElementById("task-status").value;

  console.log("Editing task:", taskId, { title, description, status });

  if (!title) return;

  const tasks = loadTasksFromStorage();
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) return;

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title,
    description,
    status,
  };

  saveTasksToStorage(tasks);
  clearExistingTasks();
  renderTasks(tasks);
  resetForm();
}