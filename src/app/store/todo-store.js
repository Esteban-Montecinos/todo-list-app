import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [{ id: 0, title: "Crear una tarea", completed: true }],
  addTodo: (todo) => {
    set((state) => {
      const currentTodosAdd = [...state.todos, todo];
      return { todos: currentTodosAdd };
    });
  },
  removeTodo: (id) => {
    set((state) => {
      const currentTodosRemove = state.todos.filter((todo) => todo.id !== id);
      return { todos: currentTodosRemove };
    });
  },
  toggleTodo: (id) => {
    set((state) => {
      const currentTodosToggle = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      return {
        todos: currentTodosToggle,
      };
    });
  },
  clearCompleted: () =>
    set((state) => ({ todos: state.todos.filter((todo) => !todo.completed) })),
}));

export const useFormStore = create((set) => ({
  input: "",
  setInput: (input) => set(() => ({ input })),
}));
