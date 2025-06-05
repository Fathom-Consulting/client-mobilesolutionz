import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.pexels.com/videos/videos/13643113",
      {
        headers: {
          Authorization: "process.env.PEXELS_API_KEY" || "",
        },
      },
    );
    const data = await response.json();
    interface VideoFile {
      quality: string;
      link: string;
    }
    const videoFile = data.video_files.find(
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
