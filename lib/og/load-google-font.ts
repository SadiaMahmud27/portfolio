/**
 * Fetches a Google Font subset as TTF for next/og (Satori can't read woff2).
 * Runs at build time only, since the OG image is statically generated.
 */
export async function loadGoogleFont(family: string, text: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!src) throw new Error(`Could not resolve a TTF for Google Font "${family}"`);

  const res = await fetch(src);
  if (!res.ok) throw new Error(`Failed to download Google Font "${family}" (${res.status})`);
  return res.arrayBuffer();
}
