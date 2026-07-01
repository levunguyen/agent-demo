import { useState } from 'react'
import './App.css'

function Header({ onAddTask }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (trimmed) {
      onAddTask(trimmed)
      setInput('')
    }
  }

  return (
    <header className="app-header">
      <div className="container">
        <h1 className="app-title">My Tasks</h1>
        <form onSubmit={handleSubmit} className="task-input-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="task-input"
            aria-label="New task"
          />
          <button type="submit" className="task-input-btn">Add</button>
        </form>
      </div>
    </header>
  )
}

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (title) => {
    setTasks((prev) => [...prev, { id: Date.now(), title }])
  }

  return (
    <div className="app">
      <Header onAddTask={addTask} />
      <main className="main-content">
        <div className="container">
          {tasks.length === 0 ? (
            <p className="empty-state">No tasks yet. Add one above!</p>
          ) : (
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.id} className="task-item">
                  {task.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
