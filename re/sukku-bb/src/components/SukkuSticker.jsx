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
export default function SukkuSticker({ mood = "smile", className = "", scene }) {
  if (scene) return <MemorySticker mood={mood} scene={scene} className={className} />;
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

function MemorySticker({ mood, scene, className }) {
  const frame = (frames[mood] || frames.smile).join(" ");
  const person = (x, y, width = 48, height = 75) => (
    <svg x={x} y={y} width={width} height={height} viewBox={frame}>
      <image href={sheet} width="609" height="101" />
    </svg>
  );
  return (
    <svg className={`sukku-sticker memory-sticker ${className}`} viewBox="0 0 140 140" aria-hidden="true" focusable="false">
      <style>{`
        .memory-sticker .memory-spark { animation: memory-twinkle 2.4s ease-in-out infinite; }
        .memory-sticker .memory-drop { animation: memory-drizzle 1.3s linear infinite; }
        .memory-sticker .memory-wheel { transform-origin: 99px 48px; animation: memory-turn 18s linear infinite; }
        @keyframes memory-twinkle { 50% { opacity: .35; } }
        @keyframes memory-drizzle { to { transform: translate(-5px, 12px); opacity: 0; } }
        @keyframes memory-turn { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .memory-sticker * { animation: none !important; } }
      `}</style>
      <ellipse cx="70" cy="126" rx="54" ry="6" fill="#d9ba9a" opacity=".24" />
      {scene === "rain" && <>
        <path d="M19 111 Q65 104 120 113 M28 123 Q71 116 105 123" fill="none" stroke="#88aeb8" strokeWidth="2" />
        {[20, 41, 98, 119, 108].map((x, i) => <path className="memory-drop" key={x} d={`M${x} ${18 + i * 14} l-3 8`} stroke="#7cabbc" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `-${i * .23}s` }} />)}
        {person(42, 47)}
        <path d="M17 49 Q64 -4 115 49 Q101 40 88 49 Q75 40 63 49 Q50 40 38 49 Q27 41 17 49Z" fill="#a92f45" />
        <path d="M64 23 V77 q0 10 9 5" fill="none" stroke="#633e32" strokeWidth="3" strokeLinecap="round" />
      </>}
      {scene === "fair" && <>
        <g className="memory-wheel" stroke="#b38050" fill="none" strokeWidth="1.8">
          <circle cx="99" cy="48" r="28" />
          {[0, 60, 120].map(a => <path key={a} d="M71 48 H127" transform={`rotate(${a} 99 48)`} />)}
          {[0, 60, 120, 180, 240, 300].map(a => <rect key={a} x="94" y="16" width="10" height="8" rx="3" fill="#b14251" transform={`rotate(${a} 99 48)`} />)}
        </g>
        <path d="M99 48 L80 106 M99 48 L119 106" stroke="#b38050" strokeWidth="2" />
        <path d="M12 24 Q63 47 123 18" fill="none" stroke="#a77761" />
        <path d="M21 28 l4 12 9-8 M44 33 l5 12 8-10 M68 32 l6 11 6-13" fill="#bd4053" />
        {person(19, 48)}
      </>}
      {scene === "prayer" && <>
        <path d="M17 119 V57 L37 37 L57 57 V119 M25 50 H49 M31 40 L37 25 L43 40" fill="#e9d1ab" stroke="#b28c5d" strokeWidth="1.7" />
        {person(48, 41, 51, 81)}
        <path d="M89 110 Q106 129 123 110Z" fill="#b45f38" />
        <path className="memory-spark" d="M106 108 Q96 98 108 88 Q117 101 106 108Z" fill="#e8af3f" />
        <path d="M14 126 H126" stroke="#c49460" strokeWidth="2" />
      </>}
      {scene === "night" && <>
        <path d="M104 13 A22 22 0 1 0 126 43 A23 23 0 0 1 104 13" fill="#dab66e" />
        <g className="memory-spark" fill="#ad7b55"><path d="M23 23 l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" /><circle cx="78" cy="19" r="2" /><circle cx="123" cy="72" r="2" /></g>
        <rect x="11" y="48" width="35" height="23" rx="9" fill="#f7e3d0" stroke="#ba8a75" />
        <path d="M34 70 l7 8-1-9" fill="#f7e3d0" stroke="#ba8a75" />
        <text x="20" y="63" fontSize="12" fill="#7c5347">…</text>
        {person(48, 45, 50, 78)}
        <circle cx="111" cy="104" r="16" fill="#fff4de" stroke="#b58965" strokeWidth="2" />
        <path d="M111 93 V104 H119" fill="none" stroke="#8a564a" strokeWidth="2" strokeLinecap="round" />
      </>}
      {scene === "farewell" && <>
        <path d="M17 31 V124 M10 32 H51" stroke="#b18b6c" strokeWidth="3" />
        <rect x="24" y="36" width="25" height="19" rx="3" fill="#f4ddbc" stroke="#b18b6c" />
        <path d="M29 42 H44 M29 47 H44" stroke="#ac6854" strokeWidth="2" />
        <rect x="89" y="62" width="43" height="46" rx="8" fill="#b5575a" />
        <rect x="94" y="69" width="32" height="17" rx="3" fill="#f6dfc3" />
        <circle cx="99" cy="109" r="5" fill="#65443b" /><circle cx="122" cy="109" r="5" fill="#65443b" />
        {person(39, 48)}
        <path className="memory-spark" d="M83 29 C74 18 62 33 83 43 C104 33 92 18 83 29Z" fill="#bf6b76" />
      </>}
      {scene === "heart" && <>
        <path d="M70 124 C7 86 3 49 28 33 C46 21 62 32 70 44 C78 32 94 21 112 33 C137 49 133 86 70 124Z" fill="#f0ced0" />
        {person(43, 40, 54, 84)}
        <path className="memory-spark" d="M111 17 C104 9 96 20 111 29 C126 20 118 9 111 17Z" fill="#b7354d" />
        <path d="M18 83 l-7-4 M23 96 l-8 2 M123 92 l8 3" stroke="#b7354d" strokeWidth="2" strokeLinecap="round" />
      </>}
    </svg>
  );
}
