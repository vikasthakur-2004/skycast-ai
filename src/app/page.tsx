import { getCurrentWeather } from "@/services/weather-api";

export default async function Home() {
  const data = await getCurrentWeather("Pune");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">SkyCast AI</h1>

      <div>
        <p>City: {data.location.name}</p>
        <p>Country: {data.location.country}</p>
        <p>Temperature: {data.current.temp_c}°C</p>
      </div>
    </main>
  );
}