"use client";
import { ToDoType } from "@/types/ToDo";
import useTodos from "@/hooks/useTodos";
import useSearchParamState from "@/hooks/useSearchParamState";

const useFilteredTodos = (todos: ToDoType[], search: string) => {
  return todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );
};

export default function ToDoTada() {
  const { todos, loading, error } = useTodos();
  const [search, setSearch] = useSearchParamState("search");
  const filteredTodos = useFilteredTodos(todos, search);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return <h1>...loading</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h2>To Do</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.completed ? "Completed" : "Not completed"}</p>
          </div>
        ))
      ) : (
        <p>No results found...</p>
      )}
    </div>
  );
}
