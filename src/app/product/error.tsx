"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl">Something went wrong!</h2>
      <button className="bg-red-500 text-white p-3 m-5" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
