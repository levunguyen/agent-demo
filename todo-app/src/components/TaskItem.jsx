function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100 group">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-4 h-4 accent-blue-500 cursor-pointer flex-shrink-0"
      />

      <span
        onClick={() => onEdit(task)}
        className={`flex-1 cursor-pointer select-none ${
          task.completed
            ? 'line-through text-gray-400'
            : 'text-gray-800 hover:text-blue-600'
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500 text-sm font-medium flex-shrink-0"
        aria-label="Delete task"
      >
        Delete
      </button>
    </div>
  )
}

export default TaskItem
