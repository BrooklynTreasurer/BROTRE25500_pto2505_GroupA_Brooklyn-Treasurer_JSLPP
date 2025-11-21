const API_URL = "https://jsl-kanban-api.vercel.app/"

let initialTasks;


export async function fetchIntialTasks() {
  if (initialTasks) {
    return initialTasks;
  }

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        initialTasks = await response.json();
        return initialTasks;
    } catch (error) {
        console.error("Failed to fetch tasks:", error);
        return [];
    }
}

export const allTasks = [];