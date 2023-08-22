'use client'
import { RiAddFill } from "react-icons/ri";
import { useFormStore, useTodoStore } from "./store/todo-store";
export default function FormClientPage() {
  const {addTodo} = useTodoStore();
  const {input, setInput} = useFormStore()
    function handleSubmit(event) {
        event.preventDefault();
        if(input != ''){
            const id = Date.now().toString();
            const completed = false;
            addTodo({id, title: input, completed});
            setInput("")
        }
        
      }
  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full max-w-2xl rounded-lg bg-neutral-900 drop-shadow-lg">
        <input
          type="text"
          name="todoInput"
          placeholder="Agrega una nueva tarea"
          className="flex-1 p-4 rounded-l-lg outline-none bg-neutral-800 text-neutral-200"
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="p-4 transition-colors rounded-r-lg hover:bg-neutral-900/40"
          type="submit"
          aria-label="add todo"
        >
          <RiAddFill className="w-6 h-6 text-white" />
        </button>
      </form>
  )
}
