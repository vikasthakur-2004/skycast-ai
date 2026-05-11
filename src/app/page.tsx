"use client";

import { useEffect, useState } from "react";

import SearchBar from "@/components/weather/SearchBar";
import WeatherCard from "@/components/weather/WeatherCard";

import { WeatherData } from "@/types/weather";

export default function Home() {
  const [weather, setWeather] =
    useState<WeatherData | null>(null);

  const [city, setCity] =
    useState("Pune");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    fetchWeather(city);
  }, []);

  async function fetchWeather(
    cityName: string
  ) {
    try {
      setLoading(true);

      const response = await fetch(
        `/api/weather?city=${cityName}`
      );

      const data = await response.json();

      setWeather(data);
      setCity(cityName);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 flex flex-col items-center justify-center gap-6 p-4">
      <SearchBar
        onSearch={fetchWeather}
      />

      {loading && (
        <p>Loading...</p>
      )}

      {weather?.current && (
        <WeatherCard weather={weather} />
      )}
    </main>
  );
}