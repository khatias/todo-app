export async function fetchToDo(signal: AbortSignal) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", { signal });
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Error fetching todos:", error);
      }
      return [];
    }
  }
  