import type { APIRoute } from 'astro';

const site = 'https://turbodismount2.com';

const items = [
  {
    title: 'Turbo Dismount 2 Full Release — March 13, 2026',
    link: `${site}/news/`,
    description: 'Turbo Dismount 2 officially leaves Early Access with 96% positive reviews on Steam.',
    pubDate: new Date('2026-03-13'),
  },
  {
    title: 'How to Play Turbo Dismount 2 — Complete Guide',
    link: `${site}/guides/how-to-play/`,
    description: 'Learn controls, game modes, vehicle physics, scoring system, and pro tips for Turbo Dismount 2.',
    pubDate: new Date('2026-03-16'),
  },
  {
    title: 'Turbo Dismount 2 Tips & Tricks',
    link: `${site}/guides/tips/`,
    description: '15 pro tips for scoring higher and crashing better in Turbo Dismount 2.',
    pubDate: new Date('2026-03-16'),
  },
];

export const GET: APIRoute = () => {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Turbo Dismount 2 Wiki & Guides</title>
    <link>${site}</link>
    <description>Latest news, guides, and updates for Turbo Dismount 2</description>
    <language>en</language>
    <atom:link href="${site}/feed.xml" rel="self" type="application/rss+xml" />
    ${items.map(item => `<item>
      <title>${item.title}</title>
      <link>${item.link}</link>
      <description>${item.description}</description>
      <pubDate>${item.pubDate.toUTCString()}</pubDate>
      <guid>${item.link}</guid>
    </item>`).join('\n    ')}
  </channel>
</rss>`;
  return new Response(rss, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
