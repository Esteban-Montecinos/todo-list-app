import FormClientPage from "./form-client";
import TodosClientPage from "./todos-client";
export default function Home() {
  return (
    <main className="flex max-w-4xl m-auto flex-col items-center mt-10 p-4 rounded-lg">
      <header className="p-2 my-10 max-w-2xl">
        <h1 className="text-4xl font-bold">Todo List 📃</h1>
      </header>
      <FormClientPage/>
      <TodosClientPage/>
    </main>
  );
}
