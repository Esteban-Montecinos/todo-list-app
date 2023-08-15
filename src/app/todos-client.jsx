"use client";
import { RiCheckFill, RiCloseFill } from "react-icons/ri";
import { useTodoStore } from "./store/todo-store";

export default function TodosClientPage() {
  const { todos } = useTodoStore();
  const { toggleTodo, removeTodo, clearCompleted } = useTodoStore();
  return (
    <section className="mt-5 mb-10 divide-y divide-slate-500 w-full flex flex-col max-w-2xl bg-slate-800 rounded-lg drop-shadow-lg">
      {todos ? (
        todos.map(({ id, title, completed }) => (
          <article
            key={id}
            className="flex w-full items-center min-h-[4rem] pl-4  gap-2"
          >
            <button
            className="py-4"
              onClick={() => {
                toggleTodo(id);
              }}
              aria-label="Toggle todo"
            >
              <RiCheckFill className={`w-8 h-8 ${completed? "text-green-500": "text-slate-500"} hover:text-green-700 transition-colors `} />
            </button>
            <span
              className={`${
                completed ? "text-slate-500 line-through" : "text-slate-200"
              } flex-1 `}
            >
              {title}
            </span>
            <button
              onClick={() => {
                removeTodo(id);
              }}
              aria-label="Remove todo"
              className="pr-4 text-slate-500 hover:text-slate-700"
            >
              <RiCloseFill className="w-8 h-8  " />
            </button>
          </article>
        ))
      ) : null}

      <footer className="flex justify-between items-center w-full p-4">
        <span className="text-slate-400">
          {todos ? todos.length : 0}{" "}Tareas
        </span>
        <button onClick={() =>{clearCompleted()}} className="text-slate-400 hover:text-slate-100 transition-colors">
          Clear completed
        </button>
      </footer>
    </section>
  );
}
