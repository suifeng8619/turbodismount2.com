import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgBuffer = fs.readFileSync('public/favicon.svg');
const sizes = [
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-16x16.png', size: 16 },
];

for (const { name, size } of sizes) {
  await sharp(svgBuffer).resize(size, size).png().toFile(`public/${name}`);
  console.log(`Generated ${name}`);
}
