import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Carlos Baeza — Design Systems Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "600px",
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.18) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            width: 110,
            height: 110,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 44,
            fontWeight: 700,
            color: "white",
            marginBottom: 28,
            letterSpacing: "-1px",
          }}
        >
          CB
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            marginBottom: 12,
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          Carlos Baeza
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#60a5fa",
            marginBottom: 24,
            letterSpacing: "-0.5px",
          }}
        >
          Design Systems Architect
        </div>
        <div
          style={{
            width: 60,
            height: 2,
            background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
            borderRadius: 2,
            marginBottom: 24,
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: "#6b7280",
            textAlign: "center",
            maxWidth: 780,
            lineHeight: 1.5,
          }}
        >
          AI-Ready Agentic Design Systems Infrastructure at Enterprise Scale
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 36,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["Figma", "Design Tokens", "React", "Storybook", "AI Tools"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  borderRadius: 20,
                  padding: "6px 16px",
                  fontSize: 15,
                  color: "#93c5fd",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 56,
            fontSize: 15,
            color: "#374151",
            letterSpacing: "0.5px",
          }}
        >
          carlosbaeza.design
        </div>
      </div>
    ),
    { ...size }
  );
}
