"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({
  onSearch,
}: SearchBarProps) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;

    onSearch(city);
    setCity("");
  };

  return (
    <div className="flex gap-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 px-5 rounded-xl"
      >
        Search
      </button>
    </div>
  );
}