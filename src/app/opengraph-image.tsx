import { ImageResponse } from "next/og";

export const alt = "Orlando Ferazzani | Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(180deg, #0065a4 0%, #002c65 55%, #050b1c 100%)",
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
            color: "#f5f8fc",
            letterSpacing: "-1px",
            marginBottom: 16,
          }}
        >
          Orlando Ferazzani
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#cfdcf0",
            marginBottom: 32,
          }}
        >
          Fullstack Developer · Padova, Italy
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#f3d53a",
          }}
        >
          orlandoferazzani.dev
        </div>
      </div>
    ),
    size
  );
}
