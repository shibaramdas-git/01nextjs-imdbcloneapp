"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
  const queryParam = useSearchParams();
  const genre = queryParam.get("genre");

  return (
    <div className="flex justify-center gap-8 bg-neutral-700 text-lg py-3 dark:bg-slate-600 text-white">
      <Link
        href="?genre=movie"
        className={`hover:text-amber-500 ${
          genre === "movie"
            ? "underline decoration-amber-500 decoration-4 underline-offset-8"
            : ""
        }`}
      >
        Movies
      </Link>
      <Link
        href="?genre=series"
        className={`hover:text-amber-500 ${
          genre === "series"
            ? "underline decoration-amber-500 decoration-4 underline-offset-8"
            : ""
        }`}
      >
        Series
      </Link>
    </div>
  );
}
