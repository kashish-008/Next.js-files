"use client";
import { useTheme } from "../context/ThemeContext";

export default function TodoCard({ todo, onDelete, onToggle, onEdit }) {
  const { isDark } = useTheme();
  const actionButtonClass = "rounded-lg px-3 py-2 text-sm font-medium transition";

  return (
    <div
      className={`flex items-start justify-between gap-3 rounded-2xl border p-4 shadow-sm transition-colors duration-300 ${
        isDark
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex-1">
        <p
          className={`text-sm leading-6 ${
            todo.completed
              ? "line-through text-slate-400"
              : isDark ? "text-slate-100" : "text-slate-800"
          }`}
        >
          {todo.text}
        </p>
        <span
          className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
            todo.completed
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <div className="flex flex-wrap justify-end gap-2">
        <button
          onClick={() => onEdit(todo)}
          className={`${actionButtonClass} bg-amber-50 text-amber-700 hover:bg-amber-100`}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className={`${actionButtonClass} bg-rose-50 text-rose-700 hover:bg-rose-100`}
        >
          Delete
        </button>
        <button
          onClick={() => onToggle(todo.id)}
          className={`${actionButtonClass} ${
            todo.completed
              ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
              : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
          }`}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
      </div>
    </div>
  );
}