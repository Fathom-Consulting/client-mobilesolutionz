import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mobile Solutionz — Premium Mobile Detailing in Medford, Oregon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO =
  "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEBjs2Ejo9mYyqLZCIFHU20rv6bAaGlhj5fpoX";
const HERO =
  "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEMgTeNELGIJHax2lP6TN5yh9RsdMu1tOZ3e0E";

export default function OGImage() {
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
        {/* Car image — right half, fading left */}
        <img
          src={HERO}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "620px",
            height: "630px",
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.35) contrast(1.1) saturate(0.6)",
          }}
        />

        {/* Gradient fade: dark left → transparent right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #080808 45%, rgba(8,8,8,0.85) 60%, rgba(8,8,8,0.2) 100%)",
          }}
        />

        {/* Olive radial glow — left side */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(96,108,56,0.14) 0%, transparent 65%)",
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
            background: "linear-gradient(to bottom, transparent, #606c38 30%, #606c38 70%, transparent)",
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
            src={LOGO}
            style={{
              width: "180px",
              objectFit: "contain",
              objectPosition: "left",
              opacity: 0.95,
            }}
          />

          {/* Headline block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <div style={{ width: "32px", height: "1px", background: "#606c38" }} />
              <span
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.28em",
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
                fontSize: "80px",
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
                fontSize: "80px",
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

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "24px",
            }}
          >
            <span
              style={{
                fontSize: "16px",
                color: "#6e6e5e",
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
                fontSize: "13px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "12px 28px",
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
