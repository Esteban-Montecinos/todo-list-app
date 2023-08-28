import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(persist((set) => ({
  todos: [{ id: 0, title: "Crear una tarea", completed: true }],
  addTodo: (todo) => {
    set((state) => ({ todos: [...state.todos, todo] }));
  },
  removeTodo: (id) => {
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
  },
  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  clearCompleted: () =>
    set((state) => ({ todos: state.todos.filter((todo) => !todo.completed) })),
}),{
  name: 'todos-list'
}));

export const useFormStore = create((set) => ({
  input: "",
  setInput: (input) => set(() => ({ input })),
}));
