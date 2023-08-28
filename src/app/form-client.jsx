"use client";
import { useFormStore, useTodoStore } from "./store/todo-store";
export default function FormClientPage() {
  const { addTodo } = useTodoStore();
  const { input, setInput } = useFormStore();
  function handleSubmit(event) {
    event.preventDefault();
    if (input != "") {
      const id = Date.now().toString();
      const completed = false;
      addTodo({ id, title: input, completed });
      setInput("");
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full max-w-2xl p-4 rounded-lg gap-y-2 bg-neutral-800 drop-shadow-lg"
    >
      <textarea
        name="todoInput"
        rows={3}
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full text-lg text-white bg-transparent border-b outline-none resize-none placeholder-neutral-400 border-neutral-600"
        placeholder="Agrega una nueva tarea"
      ></textarea>

      <button
        disabled={input == ""}
        type="submit"
        className="self-end px-5 py-2 text-sm font-bold text-white rounded-full bg-neutral-900 disabled:opacity-80 disabled:pointer-events-none"
      >
        Agregar
      </button>
    </form>
  );
}
