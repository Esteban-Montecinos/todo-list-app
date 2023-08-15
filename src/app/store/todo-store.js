import { create } from "zustand";

const saveTodosToStorage = (todos) => {
  window.localStorage.setItem("todos", JSON.stringify(todos));
};

const getInitialTodos = () => {
  const todosFromStorage = window.localStorage.getItem("todos");
  if (todosFromStorage) {
    return JSON.parse(todosFromStorage);
  } else {
    return [{ id: 0, title: "Learn React JS with Zustand", completed: false }];
  }
};
export const useTodoStore = create((set) => ({
  todos: getInitialTodos(),
  addTodo: (todo) => {
    set((state) => {
      const currentTodosAdd = [...state.todos, todo];
      saveTodosToStorage(currentTodosAdd);
      return { todos: currentTodosAdd };
    });
  },
  removeTodo: (id) => {
    set((state) => {
      const currentTodosRemove = state.todos.filter((todo) => todo.id !== id);
      saveTodosToStorage(currentTodosRemove);
      return { todos: currentTodosRemove };
    });
  },
  toggleTodo: (id) => {
    set((state) => {
      const currentTodosToggle = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      saveTodosToStorage(currentTodosToggle);
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
