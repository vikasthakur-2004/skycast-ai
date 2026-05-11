import { getCurrentDate } from "@/utils/getCurrentDate";
import { WeatherData } from "@/types/weather";

interface WeatherCardProps {
  weather: WeatherData;
}

export default function WeatherCard({
  weather,
}: WeatherCardProps) {
  return (
      <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.02] transition-all duration-300-8 rounded-3xl shadow-2xl w-full max-w-md">
      <div className="flex flex-col items-center gap-3">
        <p className="text-zinc-400 mb-2">{getCurrentDate()}</p>
        <img
          src={`https:${weather.current.condition.icon}`}
          alt={weather.current.condition.text}
          className="w-24 h-24"
        />

        <h2 className="text-3xl font-bold">
          📍 {weather.location.name}, {weather.location.country}
        </h2>

        <h1 className="text-6xl font-bold">{weather.current.temp_c}°</h1>

        <p className="text-lg">{weather.current.condition.text}</p>

        <div className="grid grid-cols-2 gap-4 mt-4 w-full">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
            💧 Humidity
            <p>{weather.current.humidity}%</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
            💨 Wind
            <p>{weather.current.wind_kph} km/h</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl col-span-2">
            🤒 Feels Like
            <p>{weather.current.feelslike_c}°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}