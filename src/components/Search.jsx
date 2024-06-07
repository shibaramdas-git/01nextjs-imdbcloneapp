"use client";
import { useState } from "react";
export default function Searchbar() {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-between px-4 py-1 shadow-md max-w-[1440px] mx-4 rounded-md border border-slate-400 mt-2 "
      >
        <input
          type="search"
          placeholder="Search here..."
          className={`h-12 w-full pr-4 outline-none bg-transparent`}
          onChange={handleChange}
        />
        <button
          className={`${search ? "text-amber-600" : "disabled:text-gray-100"}`}
        >
          Search
        </button>
      </form>
    </div>
  );
}
