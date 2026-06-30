import { useState, useEffect, useRef } from 'react'
import './App.css'

const STORAGE_KEY = 'todo-app-tasks'

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

function createTask(title) {
  return { id: crypto.randomUUID(), title: title.trim(), isCompleted: false }
}

function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [newTitle, setNewTitle] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editingTitle, setEditingTitle] = useState('')
  const [filter, setFilter] = useState('all')
  const editInputRef = useRef(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    if (editingId) editInputRef.current?.focus()
  }, [editingId])

  function addTask(e) {
    e.preventDefault()
    const title = newTitle.trim()
    if (!title) return
    setTasks(prev => [...prev, createTask(title)])
    setNewTitle('')
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
    )
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  function startEdit(task) {
    setEditingId(task.id)
    setEditingTitle(task.title)
  }

  function commitEdit(id) {
    const title = editingTitle.trim()
    if (title) {
      setTasks(prev => prev.map(t => (t.id === id ? { ...t, title } : t)))
    }
    setEditingId(null)
    setEditingTitle('')
  }

  function cancelEdit() {
    setEditingId(null)
    setEditingTitle('')
  }

  function handleEditKeyDown(e, id) {
    if (e.key === 'Enter') commitEdit(id)
    if (e.key === 'Escape') cancelEdit()
  }

  const visibleTasks = tasks.filter(t => {
    if (filter === 'active') return !t.isCompleted
    if (filter === 'done') return t.isCompleted
    return true
  })

  const remaining = tasks.filter(t => !t.isCompleted).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with inline add input */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-800 shrink-0">Todo App</h1>
          <form onSubmit={addTask} className="flex flex-1 gap-2">
            <input
              type="text"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-4 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors"
            >
              Add
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Filter tabs */}
        <div className="flex items-center gap-1 mb-4 border-b border-gray-200">
          {[['all', 'All'], ['active', 'Active'], ['done', 'Done']].map(([val, label]) => (
            <button
              key={val}
              onClick={() => setFilter(val)}
              className={`px-4 py-2 text-sm font-medium rounded-t border-b-2 transition-colors ${
                filter === val
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-400">
            {remaining} remaining
          </span>
        </div>

        {/* Task list */}
        {visibleTasks.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-12">
            {filter === 'done' ? 'No completed tasks yet.' : 'No tasks. Add one above!'}
          </p>
        ) : (
          <ul className="space-y-1">
            {visibleTasks.map(task => (
              <li
                key={task.id}
                className="flex items-center gap-3 px-3 py-2.5 bg-white rounded-lg border border-gray-200 group hover:border-gray-300 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => toggleTask(task.id)}
                  className="w-4 h-4 shrink-0 accent-blue-600 cursor-pointer"
                />

                {editingId === task.id ? (
                  <input
                    ref={editInputRef}
                    type="text"
                    value={editingTitle}
                    onChange={e => setEditingTitle(e.target.value)}
                    onBlur={() => commitEdit(task.id)}
                    onKeyDown={e => handleEditKeyDown(e, task.id)}
                    className="flex-1 px-2 py-0.5 text-sm border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <span
                    onClick={() => !task.isCompleted && startEdit(task)}
                    title={task.isCompleted ? undefined : 'Click to edit'}
                    className={`flex-1 text-sm select-none ${
                      task.isCompleted
                        ? 'line-through text-gray-400'
                        : 'text-gray-700 cursor-text hover:text-blue-600'
                    }`}
                  >
                    {task.title}
                  </span>
                )}

                <button
                  onClick={() => deleteTask(task.id)}
                  title="Delete task"
                  className="shrink-0 p-1 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  )
}

export default App
