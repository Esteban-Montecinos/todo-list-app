import FormClientPage from "./form-client";
import TodosClientPage from "./todos-client";
export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-4xl p-4 m-auto mt-10 rounded-lg">
      <header className="max-w-2xl p-2 my-10">
        <h1 className="text-4xl font-bold">*MNTodo List 📃</h1>
      </header>
      <FormClientPage/>
      <TodosClientPage/>
    </main>
  );
}
