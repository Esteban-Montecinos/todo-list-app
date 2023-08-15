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
            if(typeof window !== 'undefined'){
            addTodo({id, title: input, completed});
            setInput("")
            }
        }
        
      }
  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full max-w-2xl bg-slate-900 rounded-lg drop-shadow-lg">
        <input
          type="text"
          name="todoInput"
          placeholder="Create a new todo..."
          className="bg-slate-800 text-slate-200 rounded-l-lg p-4 flex-1 outline-none"
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="p-4 rounded-r-lg hover:bg-black transition-colors"
          type="submit"
          aria-label="add todo"
        >
          <RiAddFill className="w-6 h-6 text-white" />
        </button>
      </form>
  )
}
