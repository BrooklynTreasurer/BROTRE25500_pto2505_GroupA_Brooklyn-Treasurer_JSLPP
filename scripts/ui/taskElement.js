import { openTaskModal } from "./modalHandlers.js";
import { deleteTask } from "../tasks/taskManager.js";

export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;
  taskDiv.dataset.priority = task.priority;

  //priority indicator
  const priorityIndicator = document.createElement("span");
  priorityIndicator.className = `priority-indicator priority-${task.priority}`;

  taskDiv.append(priorityIndicator);

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}
