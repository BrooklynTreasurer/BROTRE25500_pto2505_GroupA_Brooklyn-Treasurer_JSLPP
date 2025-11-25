const API_URL = "https://jsl-kanban-api.vercel.app/";

let initialTasks;

export async function fetchInitialTasks() {
  if (initialTasks) {
    return initialTasks;
  }

  try {
    const response = await fetch(`${API_URL}tasks`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    initialTasks = await response.json();
    console.log("Fetched initial tasks:", initialTasks);
    return initialTasks;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return [];
  }
}

export const allTasks = [];