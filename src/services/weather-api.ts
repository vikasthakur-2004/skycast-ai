import { WeatherData } from "@/types/weather";

const API_KEY =
  process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export async function getCurrentWeather(
  city: string
): Promise<WeatherData> {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch weather data"
    );
  }

  return response.json();
}