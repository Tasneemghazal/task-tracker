"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchTodo } from "@/utils/todos";
import { ITask } from "@/types";

export default function TaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState<ITask>();

  useEffect(() => {
    const fetchTask = async () => {
        const data = await fetchTodo(Number(id));
        setTask(data);
    };
    fetchTask();
  }, [id]);

  return (
    <div>
      <div className="border rounded border-blue-900 max-w-screen-md mx-auto my-2 p-4">
        <div className="relative w-full h-56">
          <Image
            src="/task.jpg"
            alt="Task"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-xl font-bold text-center mt-4">{task?.title}</h1>
        <div className="flex justify-center">
          {task?.completed ? (
            <div className="flex items-center space-x-2">
              <Image
                src="/check.png"
                width={24}
                height={24}
                alt="Completed"
                className="my-2"
              />
              <div>Completed</div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Image
                src="/clock.png"
                width={24}
                height={24}
                alt="Pending"
                className="my-2"
              />
              <div>Pending</div>
            </div>
          )}
        </div>
      </div>
      <div className="w-1/4 m-auto text-center text-blue-600 p-2 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition-all">
        <Link href="/">Back To Home</Link>
      </div>
    </div>
  );
}
