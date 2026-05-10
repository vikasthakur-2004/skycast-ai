import { NextResponse } from "next/server";

const API_KEY =
  process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export async function GET(
  request: Request
) {
  const { searchParams } =
    new URL(request.url);

  const city =
    searchParams.get("city");

  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );

  const data =
    await response.json();

  return NextResponse.json(data);
}