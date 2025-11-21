import { openTaskModal, setupEditTaskModalHandler } from "./modalHandlers.js";

export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}

export function setupTaskClickHandler(taskDiv, task) {
  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
    setupEditTaskModalHandler(task.id);
  });
}