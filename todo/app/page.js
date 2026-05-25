"use client";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoCard from "./components/TodoCard";

export default function Home() {
  // State for all todos
  const [todos, setTodos] = useState([]);

  // State to track which todo we are editing
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Add new todo
  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // If deleting the one being edited, reset edit mode
    if (editId === id) {
      setEditId(null);
      setEditText("");
    }
  };

  // Toggle complete (strikethrough)
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Start editing-populate form
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  // Save edited todo
  const updateTodo = () => {
    if (editText.trim() === "") return;
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, text: editText } : todo
      )
    );
    setEditId(null);
    setEditText("");
  };
  // Cancel editing
  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-10">
      <section className="mb-6 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
          Todo App
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Keep your day organized
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
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
          <p className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-6 text-center text-slate-500">
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