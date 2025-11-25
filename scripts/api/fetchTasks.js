const API_URL = "https://jsl-kanban-api.vercel.app/";

let initialTasks;

export async function fetchInitialTasks() {
  if (initialTasks) {
    return initialTasks;
  }

  try {
    console.log("Fetching from API:", `${API_URL}tasks`);
    const response = await fetch(`${API_URL}tasks`);
    
    console.log("Response status:", response.status);
    console.log("Response ok:", response.ok);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Raw API response:", data);
    console.log("Response type:", typeof data);
    console.log("Is array?:", Array.isArray(data));
    
    // Check if data is wrapped in an object
    if (data && typeof data === "object" && !Array.isArray(data)) {
      console.log("Data keys:", Object.keys(data));
      // Try to find the tasks array in the response
      const tasksArray = data.tasks || data.data || data.items || [];
      initialTasks = tasksArray;
    } else {
      initialTasks = data;
    }
    
    console.log("Final initialTasks:", initialTasks);
    return initialTasks;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return [];
  }
}

export const allTasks = [];