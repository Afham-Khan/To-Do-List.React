import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-gray-300 rounded-l-lg px-3 outline-none py-1.5 transition-all bg-gray-100 hover:bg-gray-200"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-4 py-1 bg-blue-600 text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
