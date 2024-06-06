"use client";
import { useEffect } from "react";
export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.error("hello error", error);
  }, [error]);
  return (
    <div className="text-center text-lg mt-[100px]">
      <h1>Something went wrong! Please don&apos;t leave my site...</h1>
      <h2>Wait for some time and try again.</h2>
      <div>
        <button
          onClick={() => reset()}
          className="bg-blue-500 rounded-lg text-white px-3 mt-4 py-1"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
