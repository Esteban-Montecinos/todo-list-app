import { create } from "zustand";

const getInitialState = () => {
  if (typeof window !== "undefined") {
    const todo = window.localStorage.getItem("todos-list");
    if (todo) return JSON.parse(todo);
    return [{ id: 0, title: "Crear una tarea", completed: true }];
  }
};

export const useTodoStore = create((set) => ({
  todos: getInitialState(),
  addTodo: (todo) => {
    set((state) => {
      const currentTodosAdd = [...state.todos, todo];
      if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "todos-list",
        JSON.stringify(currentTodosAdd)
      );
      }
      return { todos: currentTodosAdd };
    });
  },
  removeTodo: (id) => {
    set((state) => {
      const currentTodosRemove = state.todos.filter((todo) => todo.id !== id);
      if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "todos-list",
        JSON.stringify(currentTodosRemove)
      );
      }
      return { todos: currentTodosRemove };
    });
  },
  toggleTodo: (id) => {
    set((state) => {
      const currentTodosToggle = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "todos-list",
        JSON.stringify(currentTodosToggle)
      );
      }
      return {
        todos: currentTodosToggle,
      };
    });
  },
  clearCompleted: () =>
    set((state) => {
      const currentTodosClear = state.todos.filter((todo) => !todo.completed);
      if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "todos-list",
        JSON.stringify(currentTodosClear)
      );
      }
      return { todos: currentTodosClear };
    }),
}));

export const useFormStore = create((set) => ({
  input: "",
  setInput: (input) => set(() => ({ input })),
}));
