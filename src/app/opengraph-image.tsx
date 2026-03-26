import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mobile Solutionz — Premium Mobile Detailing in Medford, Oregon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0d0d0d",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Olive accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "6px",
            height: "100%",
            background: "#606c38",
          }}
        />

        {/* Subtle olive glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(96,108,56,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            position: "absolute",
            top: "56px",
            left: "86px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderLeft: "2px solid #606c38",
            paddingLeft: "14px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#a8a89a",
            }}
          >
            Medford, Oregon · System X Certified
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "32px" }}>
          <span
            style={{
              fontSize: "88px",
              fontWeight: 300,
              color: "#f0ebe3",
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            Premium Mobile
          </span>
          <span
            style={{
              fontSize: "88px",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#606c38",
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            Auto Detailing
          </span>
        </div>

        {/* Description + CTA row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "22px", color: "#8a8a7a", maxWidth: "600px", lineHeight: 1.5 }}>
            We bring the studio to your driveway. Serving the Rogue Valley.
          </span>
          <div
            style={{
              background: "#606c38",
              color: "#f0ebe3",
              fontSize: "16px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "16px 32px",
              fontWeight: 600,
            }}
          >
            Book a Detail
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
