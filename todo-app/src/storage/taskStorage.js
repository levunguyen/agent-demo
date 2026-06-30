const STORAGE_KEY = 'todo-app-tasks';

/** @returns {import('../types/task.js').Task[]} */
export function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** @param {import('../types/task.js').Task[]} tasks */
export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/** @param {import('../types/task.js').Task} task */
export function addTask(task) {
  const tasks = loadTasks();
  saveTasks([...tasks, task]);
}

/** @param {string} id @param {Partial<import('../types/task.js').Task>} updates */
export function updateTask(id, updates) {
  const tasks = loadTasks().map((t) => (t.id === id ? { ...t, ...updates } : t));
  saveTasks(tasks);
}

/** @param {string} id */
export function deleteTask(id) {
  saveTasks(loadTasks().filter((t) => t.id !== id));
}
