import { fetchInitialTasks } from "../api/fetchTasks.js";

/**
 * Loads tasks from localStorage or initializes with API tasks.
 * @returns {Array<Object>} The array of tasks.
 */
export async function loadTasksFromStorage() {
  const stored = localStorage.getItem("tasks");
  
  if (stored) {
    const parsedTasks = JSON.parse(stored);
    console.log("Loaded tasks from localStorage:", parsedTasks);
    
    // If localStorage has tasks, return them
    if (parsedTasks && parsedTasks.length > 0) {
      return parsedTasks;
    }
  }

  // If no tasks in storage or array is empty, fetch from API
  console.log("No tasks in storage or array is empty, fetching from API");
  const apiTasks = await fetchInitialTasks();
  
  if (apiTasks && apiTasks.length > 0) {
    console.log("API returned tasks, saving to localStorage:", apiTasks);
    saveTasksToStorage(apiTasks);
    return apiTasks;
  }

  console.warn("No tasks found from API or storage");
  return [];
}

/**
 * Saves the given task array to localStorage.
 * @param {Array<Object>} tasks
 */
export function saveTasksToStorage(tasks) {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks saved to localStorage:", tasks);
  } catch (e) {
    console.error("Failed to save tasks to storage:", e);
  }
}

