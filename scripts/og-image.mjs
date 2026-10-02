// One-off: renders public/og.png, the link-preview image for social sites. Re-run after changing the hero.
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <filter id="wc"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="7"/><feDisplacementMap in="SourceGraphic" scale="12"/></filter>
  </defs>
  <rect width="1200" height="630" fill="#E7E4DD"/>
  <rect y="560" width="1200" height="70" fill="#8FA6A8"/>
  <g filter="url(#wc)">
    <path d="M-40 330 C 200 300, 420 350, 640 320 S 1040 300, 1260 330 L1260 700 L-40 700 Z" fill="#9DB3B5" opacity=".75"/>
    <path d="M-40 420 C 260 395, 520 450, 780 410 S 1100 420, 1260 400 L1260 700 L-40 700 Z" fill="#8AA3A6" opacity=".55"/>
    <path d="M-40 540 C 300 520, 640 570, 900 535 S 1160 540, 1260 525 L1260 700 L-40 700 Z" fill="#7E989B" opacity=".45"/>
  </g>
  <g transform="translate(150 330) scale(1.15)">
    <path d="M150 96 L 228 150" stroke="#6B4A33" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="128" cy="72" rx="20" ry="24" fill="#E8873A"/>
    <path d="M108 70 q 20 -20 40 0 l 0 30 l -40 0 z" fill="#E8873A"/>
    <circle cx="128" cy="40" r="15" fill="#E9C9A9" stroke="#2B2A26" stroke-width="1.5"/>
    <path d="M113 38 q 2 -18 18 -16 q 14 2 12 16 q -6 -8 -16 -6 q -8 2 -14 6 z" fill="#2B2A26"/>
    <circle cx="140" cy="24" r="7" fill="#2B2A26"/>
    <path d="M30 98 Q 130 92 230 98 Q 214 140 130 142 Q 50 140 30 98 Z" fill="#8C6446" stroke="#2B2A26" stroke-width="1.6"/>
    <path d="M120 98 L 40 152" stroke="#6B4A33" stroke-width="5" stroke-linecap="round"/>
  </g>
  <g fill="#E8873A">
    <g transform="translate(760 500)"><ellipse rx="18" ry="9"/><path d="M-16 0 L-30 -9 L-28 0 L-30 9 Z"/></g>
    <g transform="translate(980 590) rotate(-10)"><ellipse rx="16" ry="8"/><path d="M-14 0 L-26 -8 L-24 0 L-26 8 Z"/></g>
  </g>
  <text x="80" y="150" font-family="Georgia, serif" font-size="84" fill="#2B2A26">Jesslyn Devina</text>
  <text x="84" y="210" font-family="Bradley Hand, Marker Felt, cursive" font-size="36" fill="#6B4A33">come along my journey to build</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('wrote public/og.png');
