import type { ITask } from "@/types"
import Image from "next/image"
import Link from "next/link"

interface IProps extends ITask {
  priority: "High" | "Medium" | "Low"
}

const priorityStyles = {
  High: "bg-red-100 text-red-800 border-red-200",
  Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Low: "bg-green-100 text-green-800 border-green-200",
}

const TaskCard = (props: IProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow duration-200">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-lg text-gray-700">#{props.id}</span>
          <div className={`text-xs font-medium px-2 py-1 rounded-full border ${priorityStyles[props.priority]}`}>
            {props.priority}
          </div>
        </div>
        <h3 className="text-sm text-gray-600 line-clamp-2">{props.title}</h3>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center ">
            {props.completed ? (
              <Image src="/check.png" width={20} height={20} alt="Completed" className="mr-2" />
            ) : (
              <Image src="/clock.png" width={20} height={20} alt="Pending" className="mr-2" />
            )}
            <span className="text-sm text-gray-500">{props.completed ? "Completed" : "Pending"}</span>
          </div>
        </div>
        <Link
          href={`/task/${props.id}`}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors duration-200"
        >
          Show Details
        </Link>
      </div>
    </div>
  )
}

export default TaskCard;