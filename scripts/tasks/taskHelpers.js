/**
 * Priority weight map (used for sorting)
 */
const PRIORITY_WEIGHT = {
  high: 3,
  medium: 2,
  low: 1,
};

/**
 * Sort tasks based on priority (highest first)
 * @param {Array} tasks
 * @returns sorted array
 */
export function sortTasksByPriority(tasks) {
  return tasks.sort(
    (a, b) => PRIORITY_WEIGHT[b.priority] - PRIORITY_WEIGHT[a.priority]
  );
}

/**
 * Filter tasks by priority
 * @param {Array} tasks
 * @param {string} priority - "low", "medium", "high"
 * @returns filtered array
 */
export function filterTasks(tasks, priority) {
  if (priority === "all") return tasks;
  return tasks.filter((task) => task.priority === priority);
}

/**
 * Link the priority <select> dropdown
 * and auto-filter tasks on change
 * @param {HTMLElement} prioritySelect
 * @param {Function} callback - function(filteredTasks) {}
 */
export function bindPrioritySelector(prioritySelect, callback) {
  prioritySelect.addEventListener("change", (e) => {
    const selected = e.target.value;
    callback(selected);
  });
}
