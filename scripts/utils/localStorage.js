import { fetchInitialTasks } from "../api/fetchTasks.js";

/**
 * Loads tasks from localStorage or initializes with API tasks.
 * @returns {Array<Object>} The array of tasks.
 */
export async function loadTasksFromStorage() {
  const stored = localStorage.getItem("tasks");
  
  if (stored) {
    console.log("Loading tasks from localStorage");
    return JSON.parse(stored);
  }

  // If no tasks in storage, fetch from API
  console.log("No tasks in storage, fetching from API");
  const apiTasks = await fetchInitialTasks();
  
  if (apiTasks && apiTasks.length > 0) {
    localStorage.setItem("tasks", JSON.stringify(apiTasks));
    return apiTasks;
  }

  return [];
}

/**
 * Saves the given task array to localStorage.
 * @param {Array<Object>} tasks
 */
export function saveTasksToStorage(tasks) {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks saved to localStorage");
  } catch (e) {
    console.error("Failed to save tasks to storage:", e);
  }
}

