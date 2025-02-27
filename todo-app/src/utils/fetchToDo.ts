export async function fetchToDo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch error: ", error.message);
    } else {
      console.error("Fetch error: ", error);
    }

    return [];
  }
}
