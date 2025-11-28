import { createTaskElement } from "./taskElement.js";

/**
 * Finds the task container element based on task status.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

export function sortTaskbyPriority() {
  const priorityWeight = { high: 3, medium: 2, low: 1 };

  // Loop through ALL task columns
  document.querySelectorAll(".tasks-container").forEach((container) => {
    const cards = Array.from(container.querySelectorAll(".task-div"));

    cards.sort((a, b) => {
      return priorityWeight[b.dataset.priority] - priorityWeight[a.dataset.priority];
    });

    cards.forEach(card => container.appendChild(card));
  });
}


/**
 * Clears all existing task-divs from all task containers.
 */
export function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders tasks to their appropriate columns.
 */
export function renderTasks(tasks) {
  tasks.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    }
  })
  sortTaskbyPriority();
}
