"use client";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoCard from "./components/TodoCard";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();

  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const resetEdit = () => {
    setEditId(null);
    setEditText("");
  };

  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    if (editId === id) {
      resetEdit();
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const startEdit = (todo) => { setEditId(todo.id); setEditText(todo.text); };

  const updateTodo = () => {
    if (editText.trim() === "") return;
    setTodos(todos.map((todo) =>
      todo.id === editId ? { ...todo, text: editText } : todo
    ));
    resetEdit();
  };

  const cancelEdit = () => {
    resetEdit();
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-10">

      {/* Header section */}
      <section
        className={`mb-6 rounded-3xl p-6 shadow-sm ring-1 sm:py-4 px-6 transition-colors duration-300 ${
          isDark
            ? "bg-slate-800/80 ring-slate-700"
            : "bg-white/80 ring-slate-200"
        }`}
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          Todo App
        </p>
        <h1
          className={`text-3xl font-bold tracking-tight sm:text-4xl ${
            isDark ? "text-slate-100" : "text-slate-900"
          }`}
        >
          Keep your day organized
        </h1>
        <p className={`mt-3 max-w-2xl text-sm leading-6 sm:text-base ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}>
          Add tasks, mark them done, and keep things neat with a clean color style.
        </p>
      </section>

      <TodoForm
        addTodo={addTodo}
        editId={editId}
        editText={editText}
        setEditText={setEditText}
        updateTodo={updateTodo}
        cancelEdit={cancelEdit}
      />

      <div className="mt-6 space-y-3">
        {todos.length === 0 && (
          <p
            className={`rounded-2xl border border-dashed px-4 py-4 text-center transition-colors duration-300 ${
              isDark
                ? "border-slate-600 bg-slate-800 text-slate-400"
                : "border-slate-300 bg-white text-slate-500"
            }`}
          >
            No todos yet. Add one to get started.
          </p>
        )}
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleComplete}
            onEdit={startEdit}
          />
        ))}
      </div>
    </div>
  );
}