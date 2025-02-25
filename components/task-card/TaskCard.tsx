import { ITask } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const TaskCard = (props: ITask) => {
  return (
    <div className="border border-blue-900 rounded-md p-3 flex flex-col justify-between h-40 w-64">
      <div className="text-center">
        <span className="font-semibold text-lg">{props.id}</span>
        <h3 className="p-2 text-sm">{props.title}</h3>
      </div>
      <div className="flex justify-evenly items-center">
        {props.completed ? (
          <Image
            src="/check.png"
            width={24}
            height={24}
            alt="Completed"
            className="my-2"
          />
        ) : (
          <Image
            src="/clock.png"
            width={24}
            height={24}
            alt="Pending"
            className="my-2"
          />
        )}
        <Link
          href={`/task/${props.id}`}
          className="rounded bg-blue-500 px-3 py-1 text-white text-sm"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};
export default TaskCard;
