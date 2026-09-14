import { ImageResponse } from "next/og";

export const alt = "Abbas Taofeeq | Frontend Engineer for AI-Powered Web Applications";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F7F4EC",
          color: "#1B1D19",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 4,
            color: "#5E5B52",
            textTransform: "uppercase"
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "#46583A",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 19,
              fontWeight: 700
            }}
          >
            AT
          </div>
          <div>Frontend Engineer — Building Intelligent Web Apps</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3
            }}
          >
            Abbas Taofeeq
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 40,
              color: "#C1663F"
            }}
          >
            Intelligent, AI-powered web applications.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #E4DFD0",
            paddingTop: 28,
            fontSize: 22,
            color: "#8C8778"
          }}
        >
          <div style={{ display: "flex" }}>abbastaofeeq.com</div>
          <div style={{ display: "flex" }}>Abuja, Nigeria · Remote</div>
        </div>
      </div>
    ),
    size
  );
}
