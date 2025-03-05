"use client"
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600">Something went wrong!</h1>
      <p className="text-gray-500 my-4">
        Please try refreshing the page or come back later.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Refresh Page
      </button>
    </div>
  );
}
