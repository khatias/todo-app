import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-4">Tasks</h1>
        <p className="text-gray-600 text-lg mb-8">
          click below to view the list of todos
        </p>
        <Link
          href="/list"
          className="flex items-center justify-center px-6 py-3 bg-blue-800 hover:bg-blue-600 text-white font-semibold rounded-full border-0 cursor-pointer"
        >
          View Tasks
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
