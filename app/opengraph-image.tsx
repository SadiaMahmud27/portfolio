import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { loadGoogleFont } from "@/lib/og/load-google-font";

export const alt = "Sadia Mahmud, UI/UX designer in Dhaka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Mirrors the site's design tokens (app/globals.css)
const colors = {
  paper: "#f6f3ee",
  ink: "#151413",
  ink2: "#3b3936",
  muted: "#6d6962",
  line: "rgba(21, 20, 19, 0.14)",
  sky: "#9ddcff",
  butter: "#ffe68c",
  blush: "#ffc9f0",
};

const firstName = "Sadia";
const lastName = "Mahmud";
const tagline = "I design calm interfaces for busy people.";
const footer = `UI/UX Designer · ${site.location}`;

const portrait = await readFile(join(process.cwd(), "assets/og/portrait.jpg"), "base64");

export default async function OpengraphImage() {
  const [serif, serifItalic, sans] = await Promise.all([
    loadGoogleFont("Newsreader", firstName),
    loadGoogleFont("Newsreader:ital@1", lastName),
    loadGoogleFont("Source+Sans+3:wght@400", `${tagline}${footer}UI·UX`),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: colors.paper,
          color: colors.ink,
          padding: "64px 80px",
          fontFamily: "Source Sans 3",
        }}
      >
        {/* Logo, as in the site header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{ fontFamily: "Newsreader", fontSize: 44 }}>{firstName}</span>
          <span style={{ fontSize: 18, letterSpacing: 2, color: colors.muted }}>/ UI·UX</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Newsreader",
                fontSize: 128,
                lineHeight: 1,
                letterSpacing: -2,
              }}
            >
              <span style={{ marginRight: 36 }}>{firstName}</span>
              <span style={{ fontStyle: "italic" }}>{lastName}</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element -- rendered by Satori, not the browser */}
            <img
              src={`data:image/jpeg;base64,${portrait}`}
              width={136}
              height={136}
              alt=""
              style={{ borderRadius: 999, border: `6px solid ${colors.sky}` }}
            />
          </div>
          <div style={{ fontSize: 40, color: colors.ink2 }}>{tagline}</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${colors.line}`,
            paddingTop: 28,
          }}
        >
          <span style={{ fontSize: 24, color: colors.muted }}>{footer}</span>
          <div style={{ display: "flex", gap: 10 }}>
            {[colors.sky, colors.butter, colors.blush].map((color) => (
              <div
                key={color}
                style={{ width: 44, height: 16, borderRadius: 999, background: color }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: serif, style: "normal", weight: 400 },
        { name: "Newsreader", data: serifItalic, style: "italic", weight: 400 },
        { name: "Source Sans 3", data: sans, style: "normal", weight: 400 },
      ],
    },
  );
}
