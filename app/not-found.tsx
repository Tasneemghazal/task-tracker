import Link from "next/link";
import React from "react";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <h2 className="text-4xl font-bold text-red-600">Task Not Found</h2>
      <p className="text-gray-700 mt-2">
        The task you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
