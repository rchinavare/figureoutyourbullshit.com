import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Stay Calm. You're Probably The Problem.™"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 900,
          color: "white",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        Stay Calm. You're Probably The Problem.™
      </div>
    </div>,
    {
      ...size,
    },
  )
}
