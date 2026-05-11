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
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 outline-none"
      />

      <button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-500 transition-all duration-300 px-5 rounded-2xl">
        Search
      </button>
    </div>
  );
}