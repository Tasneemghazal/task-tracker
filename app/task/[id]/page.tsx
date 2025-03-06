"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { fetchTodo } from "@/utils/todos"
import type { ITask } from "@/types"
import { ClipboardCopy, ArrowLeft} from "lucide-react";

export default function TaskPage() {
  const { id } = useParams()
  const [task, setTask] = useState<ITask>()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const fetchTask = async () => {
      const data = await fetchTodo(Number(id))
      setTask(data)
    }
    fetchTask()
  }, [id])

  const handleCopy = () => {
    if (task?.title) {
      try {
        navigator.clipboard.writeText(task.title)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (error) {
        console.error("Failed to copy:", error)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
          <div className="relative w-full h-64 sm:h-72">
            <Image src="/task.jpg" alt="Task" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-800 line-clamp-2">{task?.title}</h1>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label={copied ? "Copied to clipboard" : "Copy title to clipboard"}
              >
                <ClipboardCopy className="h-4 w-4" />
                <span className="text-sm font-medium">{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            <div className="mt-4">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                  task?.completed ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                }`}
              >
                {task?.completed ? (
                  <>
                  <Image src="/check.png" width={20} height={20} alt="Completed" className="mr-2" />
                  <span>Completed</span>
                  </>
                ) : (
                  <>
                     <Image src="/clock.png" width={20} height={20} alt="Pending" className="mr-2" />
                    <span>Pending</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}