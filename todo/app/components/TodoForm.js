"use client";
import { useTheme } from "../context/ThemeContext";

export default function TodoForm({
  addTodo, editId, editText, setEditText, updateTodo, cancelEdit,
}) {
  const { isDark } = useTheme();
  const isEditing = editId !== null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateTodo();
    } else {
      addTodo(editText);
      setEditText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border p-5 shadow-sm transition-colors duration-300 ${
        isDark
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <label
        className={`mb-2 block text-sm font-medium ${
          isDark ? "text-slate-300" : "text-slate-700"
        }`}
      >
        {isEditing ? "Update your todo" : "Add a new todo"}
      </label>

      <textarea
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        placeholder="Example: Buy groceries"
        rows="3"
        className={`mb-4 w-full rounded-xl border p-3 outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 ${
          isDark
            ? "border-slate-600 bg-slate-700 text-slate-100"
            : "border-slate-300 bg-slate-50 text-slate-800"
        }`}
      />

      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded-xl bg-amber-500 px-4 py-2 font-medium text-white transition hover:bg-amber-600"
        >
          {isEditing ? "Update Note" : "Add Note"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`rounded-xl px-4 py-2 font-medium transition ${
              isDark
                ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}