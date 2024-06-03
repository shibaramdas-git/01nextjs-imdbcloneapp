"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
  const queryParam = useSearchParams();
  const genre = queryParam.get("genre");

  return (
    <div className="flex justify-center gap-8 bg-yellow-100 text-lg py-3 dark:bg-slate-600 ">
      <Link
        href="?genre=fetchTrending"
        className={`hover:text-amber-500 ${
          genre === "fetchTrending"
            ? "underline decoration-amber-500 decoration-4 underline-offset-8"
            : ""
        }`}
      >
        Trending
      </Link>
      <Link
        href="?genre=fetchTopRated"
        className={`hover:text-amber-500 ${
          genre === "fetchTopRated"
            ? "underline decoration-amber-500 decoration-4 underline-offset-8"
            : ""
        }`}
      >
        Top Rated
      </Link>
    </div>
  );
}
