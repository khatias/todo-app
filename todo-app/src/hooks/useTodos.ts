import { useState, useEffect } from "react";
import { ToDoType } from "@/types/ToDo";
import { fetchToDo } from "@/utils/fetchToDo";

const useTodos = () => {
  const [todos, setTodos] = useState<ToDoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getData = async () => {
      try {
        const data = await fetchToDo(signal);
        if (data) {
          setTodos(data);
        }
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Failed to fetch todos:", error);
          setError("Failed to load to-do list"); 
        }
      } finally {
        setLoading(false);
      }
    };

    getData();

    return () => controller.abort();
  }, []);

  return { todos, loading, error }; 
};

export default useTodos;
