"use client";

export default function TodoForm({
  addTodo,
  editId,
  editText,
  setEditText,
  updateTodo,
  cancelEdit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      updateTodo();
    } else {
      addTodo(editText);
      setEditText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {editId !== null ? "Update your todo" : "Add a new todo"}
      </label>
      <textarea
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        placeholder="Example: Buy groceries"
        rows="3"
        className="mb-4 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded-xl bg-amber-500 px-4 py-2 font-medium text-white transition hover:bg-amber-600"
        >
          {editId !== null ? "Update Note" : "Add Note"}
        </button>
        {editId !== null && (
          <button
            type="button"
            onClick={cancelEdit}
            className="rounded-xl bg-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-300"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}