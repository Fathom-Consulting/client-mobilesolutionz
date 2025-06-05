import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Make sure the API key is correctly injected from environment variables
    const apiKey = process.env.PEXELS_API_KEY;
    if (!apiKey) {
      console.error("PEXELS_API_KEY is not set in environment variables.");
      return NextResponse.json(
        { error: "Server misconfiguration: missing API key" },
        { status: 500 },
      );
    }

    const response = await fetch(
      "https://api.pexels.com/videos/videos/13643113",
      {
        headers: {
          Authorization: apiKey,
        },
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "Pexels API responded with error:",
        response.status,
        errorText,
      );
      return NextResponse.json(
        { error: "Failed to fetch video from Pexels API" },
        { status: response.status },
      );
    }

    const data = await response.json();
    interface VideoFile {
      quality: string;
      link: string;
    }
    const videoFile = data.video_files?.find(
      (file: VideoFile) => file.quality === "hd",
    );
    return NextResponse.json({ videoUrl: videoFile?.link || "" });
  } catch (error) {
    console.error("Pexels API Fetch Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch video" },
      { status: 500 },
    );
  }
}
