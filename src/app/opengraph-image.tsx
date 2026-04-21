import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Orlando Ferazzani | Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: "-1px",
            marginBottom: 16,
          }}
        >
          Orlando Ferazzani
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a1a1aa",
            marginBottom: 32,
          }}
        >
          Fullstack Developer · Padova, Italy
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#71717a",
          }}
        >
          orlandoferazzani.dev
        </div>
      </div>
    ),
    size
  );
}
