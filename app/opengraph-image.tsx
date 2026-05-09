import { ImageResponse } from "next/og";
import { getProfile } from "../data/profile";

export default function OpenGraphImage() {
  const copy = getProfile("en");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          background: "#fafaf8",
          color: "#0c1016",
          padding: "56px",
          fontFamily: "Arial, Helvetica, sans-serif",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid #dfe4eb",
            borderRadius: "28px",
            background: "#ffffff",
            padding: "48px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "700px" }}>
              <div
                style={{
                  fontSize: "18px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#1d4ed8",
                  marginBottom: "18px",
                }}
              >
                Founder profile
              </div>
              <div style={{ fontSize: "64px", lineHeight: 1.02, fontWeight: 700 }}>
                {copy.hero.headline}
              </div>
              <div style={{ fontSize: "24px", lineHeight: 1.4, color: "#4f5b6b", marginTop: "18px" }}>
                {copy.hero.subheadline}
              </div>
            </div>

            <div
              style={{
                width: "220px",
                border: "1px solid #dfe4eb",
                borderRadius: "24px",
                background: "#f3f5f7",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#1d4ed8" }}>
                Ramazan Akhmet
              </div>
              <div style={{ fontSize: "44px", fontWeight: 700, lineHeight: 1 }}>16</div>
              <div style={{ fontSize: "16px", color: "#4f5b6b" }}>{copy.hero.positioning}</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            {copy.metrics.slice(0, 4).map((metric) => (
              <div
                key={metric.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #dfe4eb",
                  borderRadius: "18px",
                  padding: "16px 18px",
                  minWidth: "210px",
                  background: "#fafaf8",
                }}
              >
                <div style={{ fontSize: "26px", fontWeight: 700 }}>{metric.value}</div>
                <div style={{ fontSize: "15px", color: "#4f5b6b", marginTop: "6px" }}>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
