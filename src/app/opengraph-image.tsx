import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mobile Solutionz — Premium Mobile Detailing in Medford, Oregon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO =
  "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEBjs2Ejo9mYyqLZCIFHU20rv6bAaGlhj5fpoX";
const HERO =
  "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEMgTeNELGIJHax2lP6TN5yh9RsdMu1tOZ3e0E";

export default async function OGImage() {
  const [logoSrc, heroSrc] = await Promise.all([
    fetch(LOGO)
      .then((r) => r.arrayBuffer())
      .then(
        (buf) =>
          `data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(buf)))}`
      ),
    fetch(HERO)
      .then((r) => r.arrayBuffer())
      .then(
        (buf) =>
          `data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(buf)))}`
      ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#080808",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Car photo — right half */}
        <img
          src={heroSrc}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "620px",
            height: "630px",
            objectFit: "cover",
          }}
        />

        {/* Darken the car photo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "620px",
            height: "630px",
            background: "rgba(8,8,8,0.68)",
          }}
        />

        {/* Gradient fade: dark left → transparent right */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "linear-gradient(to right, #080808 42%, rgba(8,8,8,0.7) 58%, rgba(8,8,8,0.15) 100%)",
          }}
        />

        {/* Olive radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "640px",
            height: "640px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(96,108,56,0.18) 0%, transparent 65%)",
          }}
        />

        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "4px",
            height: "100%",
            background:
              "linear-gradient(to bottom, transparent 0%, #606c38 25%, #606c38 75%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 72px",
            width: "680px",
            height: "100%",
          }}
        >
          {/* Logo */}
          <img
            src={logoSrc}
            style={{
              width: "176px",
              height: "72px",
              objectFit: "contain",
            }}
          />

          {/* Headline block */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "18px",
              }}
            >
              <div
                style={{ width: "28px", height: "1px", background: "#606c38" }}
              />
              <span
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "#606c38",
                  fontFamily: "sans-serif",
                }}
              >
                Medford, Oregon · System X Certified
              </span>
            </div>

            <span
              style={{
                fontSize: "82px",
                fontWeight: 300,
                color: "#f0ebe3",
                letterSpacing: "0.02em",
                lineHeight: 1,
                fontFamily: "serif",
              }}
            >
              Premium Mobile
            </span>
            <span
              style={{
                fontSize: "82px",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#606c38",
                letterSpacing: "0.02em",
                lineHeight: 1.05,
                fontFamily: "serif",
              }}
            >
              Auto Detailing
            </span>
          </div>

          {/* Bottom strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "22px",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                color: "#6a6a5a",
                letterSpacing: "0.05em",
                fontFamily: "sans-serif",
              }}
            >
              We bring the studio to your driveway.
            </span>
            <div
              style={{
                background: "#606c38",
                color: "#f0ebe3",
                fontSize: "12px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "12px 26px",
                fontWeight: 600,
                fontFamily: "sans-serif",
              }}
            >
              Book a Detail
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
