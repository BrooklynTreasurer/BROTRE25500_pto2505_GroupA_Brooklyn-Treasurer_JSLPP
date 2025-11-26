// Task prioritization helper functions

export function prioritizeTasks(tasks) {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

export function filterTasksByPriority(tasks, priority) {
    return tasks.filter(task => task.priority === priority);
}

export function getTasksByPriorityLevel(tasks) {
    return {
        high: filterTasksByPriority(tasks, 'high'),
        medium: filterTasksByPriority(tasks, 'medium'),
        low: filterTasksByPriority(tasks, 'low'),
    };
}

export function addTaskWithPriority(tasks, newTask) {
    tasks.push(newTask);
    return prioritizeTasks(tasks);
}

export function updateTaskPriority(tasks, taskId, newPriority) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.priority = newPriority;
    }
    return prioritizeTasks(tasks);
}

