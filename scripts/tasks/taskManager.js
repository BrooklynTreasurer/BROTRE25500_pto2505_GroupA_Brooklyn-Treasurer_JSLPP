import { loadTasksFromStorage, saveTasksToStorage } from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";

export async function addNewTask() {
  console.log("addNewTask called");
  
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("desc-input").value.trim();
  const status = document.getElementById("select-status").value;
  const overlay = document.querySelector(".modal-overlay");

  console.log("Form values:", { title, description, status });

  if (!title) {
    console.warn("Title is empty, returning");
    return;
  }

  const tasks = await loadTasksFromStorage();
  console.log("Loaded tasks before adding:", tasks);

  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title,
    description,
    status,
  };

  console.log("New task created:", newTask);

  const updatedTasks = [...tasks, newTask];
  console.log("Updated tasks array:", updatedTasks);

  saveTasksToStorage(updatedTasks);
  clearExistingTasks();
  renderTasks(updatedTasks);
  resetForm();
  overlay.close();
}

export async function editTask(taskId) {
  console.log("editTask called with taskId:", taskId);
  
  const title = document.getElementById("task-title").value.trim();
  const description = document.getElementById("task-desc").value.trim();
  const status = document.getElementById("task-status").value;

  console.log("Form values:", { title, description, status });

  if (!title) {
    console.warn("Title is empty, returning");
    return;
  }

  const tasks = await loadTasksFromStorage();
  console.log("Loaded tasks:", tasks);

  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  console.log("Task index found:", taskIndex);

  if (taskIndex === -1) {
    console.warn("Task not found");
    return;
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title,
    description,
    status,
  };

  console.log("Updated tasks:", tasks);

  saveTasksToStorage(tasks);
  clearExistingTasks();
  renderTasks(tasks);
  resetForm();
}

export async function deleteTask(taskId) {
  console.log("deleteTask called with taskId:", taskId);
  
  const tasks = await loadTasksFromStorage();
  console.log("Loaded tasks before deletion:", tasks);

  const updatedTasks = tasks.filter((t) => t.id !== taskId);
  console.log("Tasks after filtering:", updatedTasks);

  saveTasksToStorage(updatedTasks);
  clearExistingTasks();
  renderTasks(updatedTasks);
}