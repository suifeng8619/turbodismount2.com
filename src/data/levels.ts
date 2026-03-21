export type Difficulty = 1 | 2 | 3 | 4 | 5;

export interface Level {
  slug: string;
  name: string;
  theme: string;
  difficulty: Difficulty;
  type: string;
  description: string;
  highScoreTip: string;
  badge?: string;
  badgeColor?: string;
  // Detail page extended fields
  extendedGuide: string;
  bestVehicles: { slug: string; reason: string }[];
  tips: string[];
  faqs: { q: string; a: string }[];
}

export interface WorkshopLevel {
  name: string;
  creator: string;
  type: string;
  description: string;
  workshopUrl: string;
}

export const officialLevels: Level[] = [
  {
    slug: 'super-speed',
    name: 'Super-Speed',
    theme: 'Floating Highway',
    difficulty: 4,
    description: 'The largest level in the game — a floating elevated highway with 4 lanes of AI traffic flowing at full speed. Designed for maximum carnage and chaos.',
    highScoreTip: 'Use the Wedge vehicle for initial launch speed, aim for head-on AI collisions in the middle lanes for maximum impact scoring.',
    type: 'Open World',
    badge: 'Largest Level',
    badgeColor: '#F57200',
    extendedGuide: `Super-Speed is the largest level in Turbo Dismount 2, featuring a floating elevated highway with 4 lanes of AI traffic moving at full speed. The level's open design and high-speed traffic make it the primary destination for players chasing maximum damage scores.

The core scoring mechanic on this level revolves around relative velocity. AI vehicles are already moving at high speed, so a head-on collision with a fast player vehicle (like the Wedge at 10/10 speed) combines both velocities for maximum impact energy. The middle lanes tend to have the densest traffic flow, making them the highest-value target area.

The level's size also means there is room for long approach runs. Vehicles with high speed but low handling — the Wedge (2/10 handling) and Pink Lightning (5/10 handling) — can build up to top velocity before reaching the traffic zone because the highway provides enough straight-line distance.`,
    bestVehicles: [
      { slug: 'wedge', reason: 'Highest speed (10/10) maximizes collision energy against high-speed AI traffic on the long highway.' },
      { slug: 'pink-lightning', reason: 'Second-highest speed (8/10) with better handling (5/10) for aiming at specific traffic lanes.' },
      { slug: 'token-bird', reason: 'Gliding ability allows aerial approach from above the floating highway for unique collision angles.' },
    ],
    tips: [
      'The 4 lanes of AI traffic all move in defined patterns. Spend one run observing which lanes have the highest vehicle density before optimizing your approach.',
      'Head-on collisions produce the highest scores because relative velocity is the sum of both vehicles\' speeds. Aim against the flow of traffic, not with it.',
      'The middle two lanes typically have higher traffic density than the outer lanes. Target these for multi-vehicle chain reactions.',
      'The Wedge\'s 10/10 speed combined with opposing AI traffic creates the highest possible collision energy in the game on this level.',
      'Avoid using the Sasquatch here — its 3/10 speed means low relative velocity even against fast AI traffic, resulting in weaker collisions despite its mass.',
    ],
    faqs: [
      {
        q: 'Why is Super-Speed considered the best level for high scores?',
        a: 'Super-Speed combines three factors: it is the largest level, it has 4 lanes of high-speed AI traffic, and it provides long straight approaches for building maximum velocity. The high relative velocity between the player vehicle and opposing AI traffic produces the highest collision energy available in the game.',
      },
      {
        q: 'What is the best vehicle for Super-Speed?',
        a: 'The Wedge (10/10 speed) is the top choice for maximum single-impact scores. Pink Lightning (8/10 speed, 5/10 handling) is a strong alternative when you need steering ability to aim at specific lanes. Both are fragile, so plan for a decisive single collision.',
      },
      {
        q: 'How hard is Super-Speed?',
        a: 'Rated 4/5 difficulty. The level itself is straightforward — a long highway — but achieving top scores requires precise aim at high speed against fast-moving traffic. The combination of speed and accuracy makes it challenging to master.',
      },
    ],
  },
  {
    slug: 'going-down',
    name: 'Going Down',
    theme: 'Elevator / Vertical',
    difficulty: 3,
    description: 'A vertical elevator-themed level where the action cascades downward through multiple floors. Known as one of the best high-score levels due to layered collision chains.',
    highScoreTip: 'Position your character to clip every floor on the way down. Each contact adds to your combo multiplier — aim for unbroken contact chains.',
    type: 'High Score',
    badge: 'High Score Favorite',
    badgeColor: '#22C55E',
    extendedGuide: `Going Down is a vertical level structured around an elevator shaft with multiple floors. The player descends through these floors, and each floor contact contributes to a combo multiplier. This layered collision chain mechanic is what makes it one of the top high-score levels in Turbo Dismount 2.

The scoring strategy differs fundamentally from horizontal levels like Super-Speed. Here, sustained contact across multiple floors matters more than a single massive impact. Each floor you clip on the way down adds to a combo multiplier, and an unbroken chain from top to bottom produces significantly higher scores than missing even one floor.

Gravity is the primary speed source on this level, which changes vehicle selection. The Wedge's 10/10 engine speed advantage is less relevant because downward velocity comes from freefall, not engine power. Instead, durability matters — vehicles that survive contact with each floor can maintain the combo chain, while fragile vehicles break apart and end the run early.`,
    bestVehicles: [
      { slug: 'sasquatch', reason: 'Maximum durability (10/10) survives contact with every floor, maintaining the combo chain from top to bottom.' },
      { slug: 'ranger', reason: 'High durability (8/10) with better handling (7/10) for positioning against each floor.' },
      { slug: 'token-bird', reason: 'Gliding ability can control descent angle to clip more floors in sequence.' },
    ],
    tips: [
      'The combo multiplier depends on unbroken floor contacts. One missed floor resets the chain. Prioritize contact consistency over impact force.',
      'Durability is critical — each floor contact deals damage. The Sasquatch (10/10) and Ranger (8/10) can survive the full descent. The Wedge (2/10) may break apart mid-run.',
      'Gravity provides the speed, so engine speed ratings matter less here than on flat levels. Choose vehicles for durability and body shape instead.',
      'Token Bird\'s gliding ability allows mid-air trajectory adjustments between floors, potentially improving contact consistency on the way down.',
    ],
    faqs: [
      {
        q: 'Why is Going Down called a High Score Favorite?',
        a: 'Going Down\'s multi-floor combo multiplier mechanic rewards sustained contact chains. An unbroken sequence from top to bottom produces exponentially higher scores than individual impacts. This layered scoring structure creates higher score ceilings than most other levels.',
      },
      {
        q: 'What is the best vehicle for Going Down?',
        a: 'The Sasquatch (10/10 durability) is the safest pick — it survives contact with every floor. The Ranger (8/10 durability, 7/10 handling) is an alternative with better positioning control. Avoid low-durability vehicles like the Wedge (2/10) that may break apart before reaching the bottom.',
      },
      {
        q: 'How hard is Going Down?',
        a: 'Rated 3/5 difficulty. The concept is simple — fall and hit floors — but maximizing the combo chain requires precise positioning to clip every floor without missing any. It is more forgiving than Super-Speed because gravity does most of the work.',
      },
    ],
  },
  {
    slug: 'dismount-derby',
    name: 'Dismount Derby',
    theme: 'Arena / Combat',
    difficulty: 4,
    description: 'A competitive arena-style level focused on vehicle-to-vehicle collisions and elimination. Multiple vehicles compete in a confined space.',
    highScoreTip: 'Focus on T-bone collisions rather than head-on hits — side impacts transfer more rotational energy for better score multipliers.',
    type: 'Arena Combat',
    extendedGuide: `Dismount Derby is an arena combat level where multiple vehicles collide in a confined space. Unlike open-world levels like Super-Speed, the scoring here comes from repeated vehicle-to-vehicle impacts in a closed environment rather than single high-energy crashes.

The confined arena layout means handling and durability matter more than raw speed. Vehicles need to survive multiple collisions (high durability) and maneuver in tight spaces (reasonable handling) to stay in the action long enough to accumulate points. A fragile vehicle that breaks on the first impact scores once; a durable vehicle scores across an entire elimination round.

The high-score tip for this level specifically mentions T-bone (side-impact) collisions. Side impacts transfer rotational energy, which feeds into score multipliers differently than head-on hits. This means angled approaches into other vehicles produce better scoring than straight-line charges.`,
    bestVehicles: [
      { slug: 'sasquatch', reason: 'Maximum durability (10/10) outlasts all other vehicles in sustained arena combat.' },
      { slug: 'ranger', reason: 'Strong durability (8/10) combined with the best truck handling (7/10) for arena maneuvering.' },
      { slug: 'golf-r', reason: 'Best handling in the game (8/10) allows precise T-bone angle positioning in tight spaces.' },
    ],
    tips: [
      'T-bone (side-impact) collisions produce higher score multipliers than head-on hits due to rotational energy transfer. Approach other vehicles at 90-degree angles when possible.',
      'Durability is the most important stat in arena combat. The Sasquatch (10/10) and Ranger (8/10) can survive a full round of multi-vehicle collisions.',
      'The confined space negates high-speed vehicles\' primary advantage. The Wedge\'s 10/10 speed is irrelevant when there isn\'t room to build velocity.',
      'Focus on secondary collisions — when your T-bone sends a vehicle spinning into another vehicle, the chain reaction adds to your score multiplier.',
    ],
    faqs: [
      {
        q: 'What is the best vehicle for Dismount Derby?',
        a: 'The Sasquatch (10/10 durability) is the top pick for surviving sustained arena combat. The Golf R (8/10 handling) is an alternative if you want to precisely position T-bone angles for higher multipliers, though it is less durable (5/10).',
      },
      {
        q: 'Why are T-bone hits better than head-on collisions in Dismount Derby?',
        a: 'The level\'s high-score tip states that side impacts transfer more rotational energy, which feeds into higher score multipliers. A 90-degree impact sends the target vehicle spinning, often causing secondary collisions that further increase the chain multiplier.',
      },
      {
        q: 'How hard is Dismount Derby?',
        a: 'Rated 4/5 difficulty. The confined arena with multiple competing vehicles creates chaotic conditions. Consistent high scores require mastering T-bone angles and surviving through the entire round, which demands both durability and spatial awareness.',
      },
    ],
  },
  {
    slug: 'mine-skydive-classic',
    name: 'Mine Skydive Classic',
    theme: 'Mine / Skydiving',
    difficulty: 3,
    description: 'A classic level combining a mine shaft drop with an open skydive sequence. The freefall section allows for significant speed buildup before impact.',
    highScoreTip: 'Maximize your freefall distance before pulling into obstacles — velocity at impact is the key variable for score in this level.',
    type: 'Skydive',
    extendedGuide: '',
    bestVehicles: [],
    tips: [],
    faqs: [],
  },
  {
    slug: 'daytona-speedway',
    name: 'Daytona Speedway',
    theme: 'Racing Circuit',
    difficulty: 3,
    description: 'An oval racing circuit inspired by the iconic American speedway. High-speed banked turns create opportunities for spectacular multi-vehicle incidents.',
    highScoreTip: 'Use Pink Lightning for its sustained top speed. Target the tight banking turns where AI vehicles cluster before entering the straight.',
    type: 'Racing Circuit',
    extendedGuide: '',
    bestVehicles: [],
    tips: [],
    faqs: [],
  },
  {
    slug: 'expressway',
    name: 'Expressway',
    theme: 'Freeway',
    difficulty: 2,
    description: 'A classic multi-lane freeway level with varied traffic density. Good introductory level that teaches the core collision mechanics.',
    highScoreTip: 'Aim for the right-most lane at launch — traffic density is highest here, giving you the most collision opportunities in a single run.',
    type: 'Freeway',
    badge: 'Good for Beginners',
    badgeColor: '#22C55E',
    extendedGuide: '',
    bestVehicles: [],
    tips: [],
    faqs: [],
  },
  {
    slug: 't-junction',
    name: 'T-Junction',
    theme: 'Intersection',
    difficulty: 2,
    description: 'A T-shaped intersection level where three streams of traffic converge. The crossing point creates consistent multi-vehicle pileup opportunities.',
    highScoreTip: 'Time your launch to arrive at the intersection exactly when traffic from all three directions overlaps. The resulting chain reaction can clear an entire screen.',
    type: 'Intersection',
    extendedGuide: '',
    bestVehicles: [],
    tips: [],
    faqs: [],
  },
  {
    slug: 'wobbles',
    name: 'Wobbles',
    theme: 'Bumpy Terrain',
    difficulty: 3,
    description: 'An uneven, bumpy road surface that disrupts vehicle stability and creates unpredictable trajectories. Rewards creative use of the terrain geometry.',
    highScoreTip: 'Use the Ranger or Sasquatch — their high durability means you survive the repeated terrain impacts while accumulating ongoing damage multipliers.',
    type: 'Terrain Challenge',
    extendedGuide: `Wobbles features an uneven, bumpy road surface that continuously disrupts vehicle stability. Unlike smooth levels where speed is the primary variable, here the terrain itself is the scoring mechanism — every bump generates a small impact event, and those accumulate over the full run.

The level's high-score tip directly recommends the Ranger and Sasquatch, and the logic is visible in the stats: the repeated terrain impacts deal continuous damage, so durability determines how long a run lasts. The Sasquatch (10/10 durability) and Ranger (8/10 durability) survive significantly longer than fragile vehicles, which means they accumulate more terrain-impact scoring events.

Low-durability vehicles face a clear problem here. The Wedge (2/10), Pink Lightning (3/10), Token Bird (2/10), and Street Slicer (1/10) take the same terrain damage but cannot absorb it. Their runs end prematurely, cutting off score accumulation before reaching the values that durable vehicles achieve.`,
    bestVehicles: [
      { slug: 'sasquatch', reason: 'Maximum durability (10/10) survives the most terrain impacts, accumulating the longest possible damage chain.' },
      { slug: 'ranger', reason: 'High durability (8/10) plus off-road capability — explicitly recommended in the level\'s own high-score tip.' },
      { slug: 'corley', reason: 'Balanced stats (5/5/5 for speed/handling/durability) provide a middle-ground approach for learning the terrain patterns.' },
    ],
    tips: [
      'Durability is the dominant stat on this level. The level\'s own high-score tip recommends the Ranger and Sasquatch for this reason.',
      'Every bump in the terrain generates a small impact event. Longer runs = more events = higher scores. Fragile vehicles end runs early.',
      'The Street Slicer (1/10 durability) is the worst possible choice for Wobbles — it will break apart almost immediately on the uneven surface.',
      'The bumpy terrain makes handling less relevant than on smooth levels. Even the Sasquatch\'s 2/10 handling is acceptable because the terrain disrupts all vehicles equally.',
    ],
    faqs: [
      {
        q: 'Why is durability so important on Wobbles?',
        a: 'The bumpy terrain deals continuous damage through repeated small impacts. Durability determines how long your vehicle survives, and longer runs accumulate more scoring events. The Sasquatch (10/10 durability) can last through the entire level; the Street Slicer (1/10 durability) breaks almost immediately.',
      },
      {
        q: 'Can I use a fast vehicle on Wobbles?',
        a: 'You can, but the results are poor. The Wedge (10/10 speed, 2/10 durability) and Pink Lightning (8/10 speed, 3/10 durability) break apart quickly from terrain damage. Their speed advantage is negated by the short run duration. Slow durable vehicles consistently outscore fast fragile ones on this level.',
      },
      {
        q: 'How hard is Wobbles?',
        a: 'Rated 3/5 difficulty. The level concept is straightforward, but the unpredictable terrain makes it hard to plan optimal paths. The difficulty comes from vehicle selection and adapting to terrain RNG rather than requiring precise timing or aim.',
      },
    ],
  },
];

export const workshopLevels: WorkshopLevel[] = [
  {
    name: 'Highway Patrol Recreate',
    creator: 'Community Creator',
    type: 'Police Chase',
    description: 'A faithful recreation of a high-speed police chase scenario. Includes patrol vehicles and detailed highway infrastructure.',
    workshopUrl: 'https://steamcommunity.com/workshop/browse/?appid=2280350',
  },
  {
    name: 'Crossy Road',
    creator: 'Community Creator',
    type: 'Cross-Platform Inspired',
    description: 'Inspired by the mobile classic, this level reimagines Crossy Road as a physics-based dismount challenge with multiple lanes to cross.',
    workshopUrl: 'https://steamcommunity.com/workshop/browse/?appid=2280350',
  },
  {
    name: 'Hyperspeed Highway',
    creator: 'Community Creator',
    type: 'Extreme Speed',
    description: 'A community-built highway level where all traffic moves at extreme speeds, creating near-instant massive collisions. For experienced players only.',
    workshopUrl: 'https://steamcommunity.com/workshop/browse/?appid=2280350',
  },
  {
    name: 'Atrocious Alley',
    creator: 'Community Creator',
    type: 'Urban Alley',
    description: 'A tight urban alleyway packed with obstacles, traps, and hazards. Every run produces a different chain reaction of destruction.',
    workshopUrl: 'https://steamcommunity.com/workshop/browse/?appid=2280350',
  },
  {
    name: 'Road Trip',
    creator: 'Community Creator',
    type: 'Long Distance',
    description: 'An extended route that takes you through varied terrain — city streets, rural roads, and highway sections in a single continuous level.',
    workshopUrl: 'https://steamcommunity.com/workshop/browse/?appid=2280350',
  },
];

export const generalTips = [
  {
    title: 'Study AI Traffic Patterns First',
    tip: 'Before optimizing your score, spend one run just observing where AI vehicles cluster and which lanes have the highest density. Traffic patterns repeat consistently.',
  },
  {
    title: 'Replay is Your Best Teacher',
    tip: 'The enhanced replay system in TD2 lets you review every collision in detail. After each run, watch the replay to identify which impacts scored well and which were wasted.',
  },
  {
    title: 'Angle Matters More Than Speed Alone',
    tip: 'A perpendicular (90-degree) hit transfers maximum energy. A glancing blow at 15 degrees might produce a dramatic visual but scores poorly. Aim to intercept traffic at right angles.',
  },
  {
    title: 'Chain Reactions Multiply Scores',
    tip: 'Single-vehicle collisions have a fixed score ceiling. Multi-vehicle chains where your primary hit causes secondary collisions between AI vehicles unlock major score multipliers.',
  },
  {
    title: 'Level Height Adds Freefall Bonus',
    tip: 'Levels with elevation — like Mine Skydive Classic and Going Down — reward you for freefall distance before impact. The velocity bonus from height is significant.',
  },
];

export const difficultyColors: Record<Difficulty, string> = {
  1: '#22C55E',
  2: '#86EFAC',
  3: '#EAB308',
  4: '#F97316',
  5: '#E01C1C',
};
