"use client";
import { RiCheckFill, RiCloseFill } from "react-icons/ri";
import { useTodoStore } from "./store/todo-store";

export default function TodosClientPage() {
  const { todos } = useTodoStore();
  const { toggleTodo, removeTodo, clearCompleted } = useTodoStore();
  return (
    <section className="flex flex-col flex-1 w-full max-w-2xl mt-5 mb-10 divide-y rounded-lg divide-neutral-500 bg-neutral-800 drop-shadow-lg">
      {todos ? (
        todos.map(({ id, title, completed }) => (
          <article
            key={id}
            className="flex items-center justify-between w-full"
          >
            <button
              className="p-4"
              onClick={() => {
                toggleTodo(id);
              }}
              aria-label="Toggle todo"
            >
              <RiCheckFill
                className={`w-8 h-8 ${
                  completed ? "text-emerald-500" : "text-neutral-500"
                } hover:text-emerald-500 transition-colors `}
              />
            </button>
            <span
              className={`${
                completed ? "text-neutral-500 line-through" : "text-neutral-100"
              } break-all flex-1`}
            >
              {title}
            </span>
            <button
              onClick={() => {
                removeTodo(id);
              }}
              aria-label="Eliminar todo"
              className="p-4 text-neutral-500 hover:text-pink-500"
            >
              <RiCloseFill className="w-8 h-8 " />
            </button>
          </article>
        ))
      ) : null}

      <footer className="flex items-center justify-between w-full p-4">
        <span className="text-neutral-400">
          {todos ? todos.length : 0} Tareas
        </span>
        <button
          onClick={() => {
            clearCompleted();
          }}
          className="transition-colors text-neutral-400 hover:text-neutral-100"
        >
          Borrar completados
        </button>
      </footer>
    </section>
  );
}
