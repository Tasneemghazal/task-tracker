import { notFound } from "next/navigation";

export async function fetchTodos() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    if (!res.ok) throw new Error("Failed to fetch tasks");
    return await res.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    notFound();
  }
}

export async function fetchTodo(id: number){
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      if (!res.ok) throw new Error("Failed to fetch tasks");
      return await res.json();
    } catch (error) {
      console.error("Error fetching task details:", error);
      notFound();
    }
  }


