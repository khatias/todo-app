"use client";
import { useState } from "react";
import { ToDoType } from "@/types/ToDo";
import useTodos from "@/hooks/useTodos";
import useSearchParamState from "@/hooks/useSearchParamState";
import Loader from "./Loader";

const useFilteredTodos = (todos: ToDoType[], search: string) => {
  return todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );
};

export default function ToDoTada() {
  const { todos, loading, error } = useTodos();
  const [search, setSearch] = useSearchParamState("search");
  const filteredTodos = useFilteredTodos(todos, search);

  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-red-500 font-semibold">{error}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-[1200px] mx-auto rounded-lg p-4">
        {/* Search */}
        <div className="mb-4 flex justify-start">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-[400px]"
          />
        </div>

        {/* Todo List */}
        <div className="space-y-5">
          {currentTodos.length > 0 ? (
            currentTodos.map((todo) => (
              <div
                key={todo.id}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <h3
                  className={`text-xl font-medium text-gray-800 ${
                    todo.completed ? "line-through" : ""
                  }`}
                >
                  {todo.title}
                </h3>
              </div>
            ))
          ) : (
            <p className="text-gray-700 text-center text-2xl">
              No tasks found.
            </p>
          )}
        </div>

        {/* Pagination Controls */}
        {filteredTodos.length > todosPerPage && (
          <div className="flex justify-center items-center space-x-4 mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Back
            </button>

            <span className="text-lg font-semibold">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
