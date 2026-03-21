import sharp from 'sharp';
import fs from 'fs';

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function createOgSvg(subtitle) {
  const safeSubtitle = escapeXml(subtitle.toUpperCase());
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0D0D0F"/>
      <stop offset="100%" style="stop-color:#141417"/>
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#FF8C12"/>
      <stop offset="50%" style="stop-color:#F57200"/>
      <stop offset="100%" style="stop-color:#C95A00"/>
    </linearGradient>
    <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:transparent"/>
      <stop offset="50%" style="stop-color:#F57200"/>
      <stop offset="100%" style="stop-color:transparent"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="100" y="260" width="1000" height="2" fill="url(#line)" opacity="0.3"/>
  <rect x="150" y="400" width="900" height="2" fill="url(#line)" opacity="0.2"/>
  <text x="600" y="270" text-anchor="middle" font-family="Arial Black, Helvetica, sans-serif" font-weight="900" font-size="64" letter-spacing="6" fill="url(#textGrad)">TURBO</text>
  <text x="600" y="345" text-anchor="middle" font-family="Arial Black, Helvetica, sans-serif" font-weight="900" font-size="64" letter-spacing="6" fill="url(#textGrad)">DISMOUNT 2</text>
  <text x="600" y="420" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="28" letter-spacing="3" fill="#B0B0BE">${safeSubtitle}</text>
  <rect x="0" y="0" width="1200" height="4" fill="url(#line)"/>
  <rect x="0" y="626" width="1200" height="4" fill="url(#line)"/>
</svg>`;
}

const pages = [
  { filename: 'og-how-to-play.png', subtitle: 'How to Play' },
  { filename: 'og-tips.png', subtitle: 'Tips & Tricks' },
  { filename: 'og-vehicles.png', subtitle: 'Vehicle Database' },
  { filename: 'og-levels.png', subtitle: 'Level Guide' },
  { filename: 'og-workshop.png', subtitle: 'Steam Workshop' },
  { filename: 'og-news.png', subtitle: 'News & Updates' },
  { filename: 'og-faq.png', subtitle: 'FAQ' },
  { filename: 'og-download.png', subtitle: 'Download' },
  { filename: 'og-play-online.png', subtitle: 'Play Online Free' },
  { filename: 'og-mobile.png', subtitle: 'Mobile' },
  { filename: 'og-system-requirements.png', subtitle: 'System Requirements' },
  { filename: 'og-games-like.png', subtitle: 'Games Like TD2' },
  { filename: 'og-guides.png', subtitle: 'Guides' },
  { filename: 'og-database.png', subtitle: 'Database' },
  { filename: 'og-privacy.png', subtitle: 'Privacy Policy' },
];

// Generate default OG image from existing SVG
const svgBuffer = fs.readFileSync('public/og-default.svg');
await sharp(svgBuffer)
  .resize(1200, 630)
  .png({ quality: 90 })
  .toFile('public/og-default.png');
console.log('Generated og-default.png');

// Generate page-specific OG images
for (const page of pages) {
  const svg = createOgSvg(page.subtitle);
  await sharp(Buffer.from(svg))
    .resize(1200, 630)
    .png({ quality: 90 })
    .toFile(`public/${page.filename}`);
  console.log(`Generated ${page.filename}`);
}

console.log(`\nDone! Generated ${pages.length + 1} OG images.`);
