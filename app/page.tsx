import TaskCard from "@/components/task-card/TaskCard"
import type { ITask } from "@/types"
import { fetchTodos } from "@/utils/todos"

export default async function Home() {
  const data: ITask[] = await fetchTodos()

  const tasks = data.map((task, index) => ({
    ...task,
    priority: ["High", "Medium", "Low"][index % 3] as "High" | "Medium" | "Low",
  }))

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="mb-10 text-center">
          <h1 className="font-bold text-4xl font-mono text-blue-600 mb-2">Task Tracker</h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tasks.map((task, index) => (
            <div key={index} className="transform transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <TaskCard
                id={task.id}
                title={task.title}
                completed={task.completed}
                userId={task.userId}
                priority={task.priority}
              />
            </div>
          ))}
        </div>
        {tasks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No tasks found. Start by adding some tasks!</p>
          </div>
        )}
      </div>
    </div>
  )
}
