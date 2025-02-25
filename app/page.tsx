import { ITask } from "@/types";
import { fetchTodos } from "@/utils/todos";

export default async function Home() {
  const data: ITask[] = await fetchTodos();
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="p-3 flex justify-center ">
        <h1 className="font-bold text-3xl font-mono text-blue-600">
          Task Tracker
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data.map((task) => (
          <div key={task.id} className="border p-4 rounded">
            <span className="font-semibold">{task.id}:</span> 
            <h3>{task.title}</h3>
            <span>{task.completed? "Completed":"Pending"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
