import { NextResponse } from "next/server";

const API_KEY =
  process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export async function GET(
  request: Request
) {
  try {
    const { searchParams } =
      new URL(request.url);

    const city =
      searchParams.get("city");

    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            "Failed to fetch weather",
        },
        {
          status: response.status,
        }
      );
    }

    const data =
      await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Weather service unavailable",
      },
      {
        status: 500,
      }
    );
  }
}