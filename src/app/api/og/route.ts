import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const res = await fetch("https://myogimage.com/v1/images", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "og:corporate",
      params: {
        companyName: {
          text: "Mobile Solutionz",
          fontFamily: "inter",
          fontWeight: 700,
          fontSize: 32,
          color: "#f0ebe3",
        },
        tagline: {
          text: "Medford, Oregon  ·  System X Certified",
          fontFamily: "inter",
          fontWeight: 400,
          fontSize: 18,
          color: "#606c38",
        },
        title: {
          text: "Premium Mobile Auto Detailing",
          fontFamily: "inter",
          fontWeight: 600,
          fontSize: 52,
          color: "#f0ebe3",
        },
        subtitle: {
          text: "We bring the studio to your driveway. Serving the Rogue Valley.",
          fontFamily: "inter",
          fontWeight: 400,
          fontSize: 22,
          color: "#8a8a7a",
        },
        logo: {
          url: "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEBjs2Ejo9mYyqLZCIFHU20rv6bAaGlhj5fpoX",
        },
        brandColor: "#606c38",
      },
      background: {
        type: "linear-gradient",
        direction: "to bottom right",
        colorStops: ["#0d0d0d", "#161610", "#0a0a08"],
        noise: 0.03,
      },
      canvas: {
        width: 1200,
        height: 630,
      },
    }),
  });

  const image = await res.arrayBuffer();

  return new NextResponse(image, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
