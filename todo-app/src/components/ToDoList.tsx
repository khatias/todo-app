"use client";
import React, { useState, useEffect } from "react";
import { fetchToDo } from "@/utils/fetchToDo";
import { ToDo } from "@/types/ToDo";

function ToDoItem({ todo }: { todo: ToDo }) {
  return (
    <div key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.completed ? "Completed" : "Not completed"}</p>
    </div>
  );
}

function ToDoList() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchToDo();
        setTodos(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Failed to fetch todos: ${err.message}`);
          console.error("Error fetching todos:", err); 
        } else {
          setError("An unexpected error occurred.");
          console.error("Unexpected error fetching todos:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <p>Loading todos...</p>; 
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h2>To Do</h2>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} />
        ))
      ) : (
        <p>No todos found.</p>
      )}
    </div>
  );
}

export default ToDoList;