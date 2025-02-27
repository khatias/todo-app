# Next.js Todo App

## Overview

This is a simple Next.js application that fetches and displays a list of todos. It includes a search feature, pagination, and proper handling of asynchronous data fetching.

## Features

-   **Fetch Todos:** Retrieves a list of todos from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos).
-   **Search Functionality:** Filters todos by title.
-   **Pagination:** Supports navigating through multiple pages of todos.
-   **Loading Indicator:** Displays a loader while fetching data.
-   **Cleanup on Navigation:** Cancels API requests when navigating away.

## Tech Stack

-   **Next.js** – React framework for server-side rendering and static site generation.
-   **Fetch API** – Used for data fetching from the JSONPlaceholder API.
-   **React Hooks** – `useState`, `useEffect` for managing state and side effects.
-   **Tailwind CSS** – For styling.

## Installation & Setup

1.  Clone the repository:

    ```bash
    git clone https://github.com/khatias/todo-app.git
    ```

2.  Navigate to the project directory:

    ```sh
    cd todo-app
    ```

3.  Install dependencies:

    ```sh
    npm install
    ```

4.  Run the development server:

    ```sh
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:3000`.

## Usage

-   **Search:** Use the search bar to filter todos by title.
-   **Pagination:** Use the pagination controls to navigate through different pages of todos.
-   **Loading:** A loading indicator will appear while fetching data.
