import WeatherCard from "@/components/weather/WeatherCard";
import { getCurrentWeather } from "@/services/weather-api";

export default async function Home() {
  const weather = await getCurrentWeather("Pune");

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4">
      <WeatherCard weather={weather} />
    </main>
  );
}