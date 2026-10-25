import sheet from "../assets/stickers/sukku-sheet.webp";

// Each viewBox frames one original sticker; the source illustration is unchanged.
const frames = {
  giggle: [6, 0, 58, 98],
  pout: [72, 0, 56, 98],
  shy: [133, 0, 58, 98],
  surprise: [207, 0, 59, 98],
  sleepy: [267, 0, 62, 98],
  wink: [332, 0, 62, 98],
  peaceful: [410, 0, 63, 98],
  smile: [479, 0, 61, 98],
  wow: [541, 0, 64, 98],
};
export default function SukkuSticker({ mood = "smile", className = "" }) {
  return (
    <svg
      className={`sukku-sticker ${className}`}
      viewBox={(frames[mood] || frames.smile).join(" ")}
      aria-hidden="true"
      focusable="false"
    >
      <image href={sheet} width="609" height="101" />
    </svg>
  );
}
