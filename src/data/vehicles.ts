export interface Vehicle {
  slug: string;
  name: string;
  type: string;
  category: 'Cars' | 'Trucks' | 'Special Vehicles';
  speed: number;
  handling: number;
  durability: number;
  specialAbility: string;
  recommendedFor: string;
  badge?: string;
  badgeColor?: string;
  note?: string;
  // Detail page extended fields
  description: string;
  bestLevels: string[];
  tips: string[];
  faqs: { q: string; a: string }[];
}

export const vehicles: Vehicle[] = [
  {
    slug: 'corley',
    name: 'Corley',
    type: 'Standard Sedan',
    category: 'Cars',
    speed: 5,
    handling: 7,
    durability: 5,
    specialAbility: 'Balanced all-rounder, predictable behavior',
    recommendedFor: 'Learning the game, general play',
    note: 'Community-estimated relative stats — not official game values. Ratings are comparative 1-10 scales.',
    description: '',
    bestLevels: [],
    tips: [],
    faqs: [],
  },
  {
    slug: 'pink-lightning',
    name: 'Pink Lightning',
    type: 'Sports Car',
    category: 'Cars',
    speed: 8,
    handling: 5,
    durability: 3,
    specialAbility: 'High-speed launch, quick acceleration',
    recommendedFor: 'Distance records, high-speed crashes',
    note: 'Community-estimated relative stats — not official game values. Ratings are comparative 1-10 scales.',
    description: `Pink Lightning is a sports car with the second-highest speed rating in the game at 8/10, trailing only the Wedge (10/10). Its quick acceleration and high-speed launch capability make it one of the strongest choices for distance-based scoring.

The trade-off is clear in the numbers: with handling at 5/10 and durability at only 3/10, Pink Lightning sacrifices control and survivability for raw speed. It will not hold up through multiple collisions the way a Ranger (8/10 durability) or Sasquatch (10/10 durability) would.

Where Pink Lightning stands apart from the Wedge is its slightly better handling (5/10 vs 2/10) and marginally higher durability (3/10 vs 2/10). On levels where you need some ability to steer — not just a straight-line launch — Pink Lightning offers a more balanced high-speed option.`,
    bestLevels: ['super-speed', 'daytona-speedway', 'expressway'],
    tips: [
      'Pink Lightning\'s 8/10 speed is best utilized on open levels with long straightaways — Super-Speed and Daytona Speedway are strong matches.',
      'With only 3/10 durability, avoid levels with repeated impacts like Wobbles. One or two major collisions may be all you get.',
      'Compared to the Wedge, Pink Lightning\'s 5/10 handling gives you meaningful steering. Use this advantage on levels that require even slight course correction before impact.',
      'For high-score runs, the physics logic is straightforward: speed at impact determines collision energy. Pink Lightning delivers high speed with enough control to aim your hit.',
    ],
    faqs: [
      {
        q: 'Is Pink Lightning better than the Wedge?',
        a: 'It depends on the level. The Wedge has higher top speed (10/10 vs 8/10), but Pink Lightning has better handling (5/10 vs 2/10) and durability (3/10 vs 2/10). On straight open highways, the Wedge wins. On levels requiring any steering, Pink Lightning is more practical.',
      },
      {
        q: 'Is Pink Lightning good for beginners?',
        a: 'Not recommended. Its low durability (3/10) means runs end quickly on mistakes. Beginners should start with the Ranger (handling 7/10, durability 8/10) to learn level layouts before switching to a fragile high-speed vehicle.',
      },
      {
        q: 'What levels should I avoid with Pink Lightning?',
        a: 'Avoid terrain-heavy levels like Wobbles and tight arenas like Dismount Derby. Pink Lightning\'s 3/10 durability and 5/10 handling make it poorly suited for levels with repeated impacts or tight maneuvering.',
      },
    ],
  },
  {
    slug: 'golf-r',
    name: 'Golf R',
    type: 'Sport Compact',
    category: 'Cars',
    speed: 7,
    handling: 8,
    durability: 5,
    specialAbility: 'Excellent cornering and stability',
    recommendedFor: 'Technical levels, precision driving',
    note: 'Community-estimated relative stats — not official game values. Ratings are comparative 1-10 scales.',
    description: '',
    bestLevels: [],
    tips: [],
    faqs: [],
  },
  {
    slug: 'ranger',
    name: 'Ranger',
    type: 'Jeep / SUV',
    category: 'Trucks',
    speed: 5,
    handling: 7,
    durability: 8,
    specialAbility: 'Off-road capable, survives heavy impacts',
    recommendedFor: 'Beginners, obstacle courses',
    badge: 'Beginner Pick',
    badgeColor: '#22C55E',
    note: 'Community-estimated relative stats — not official game values. Ratings are comparative 1-10 scales.',
    description: '',
    bestLevels: [],
    tips: [],
    faqs: [],
  },
  {
    slug: 'wedge',
    name: 'Wedge',
    type: 'Wedge Racer',
    category: 'Cars',
    speed: 10,
    handling: 2,
    durability: 2,
    specialAbility: 'Maximum velocity, aerodynamic body',
    recommendedFor: 'Max distance runs, open highways',
    badge: 'Max Speed',
    badgeColor: '#F57200',
    note: 'Community-estimated relative stats — not official game values. Ratings are comparative 1-10 scales.',
    description: `With a Speed rating of 10/10 — the highest of any vehicle — the Wedge is built for one thing: maximum velocity. No other vehicle in the game matches its top speed, making it the default choice for distance records and high-energy collisions on open maps.

The cost of that speed is severe. Handling sits at 2/10 (tied for lowest with the Sasquatch) and durability at 2/10 (second-lowest, above only the Street Slicer at 1/10). The Wedge cannot turn effectively and will not survive repeated impacts. It is a single-use projectile: launch, collide, score.

The aerodynamic body shape affects how the Wedge interacts with the physics engine. Its low profile and wedge geometry create a distinct trajectory compared to boxier vehicles like the Ranger or Sasquatch. On levels with ramps or elevation changes, this body shape can produce different launch angles and flight paths.`,
    bestLevels: ['super-speed', 'expressway', 'daytona-speedway'],
    tips: [
      'The Wedge\'s 10/10 speed is maximized on long, straight levels. Super-Speed\'s floating highway and Expressway\'s multi-lane freeway are ideal.',
      'With 2/10 handling, do not attempt to steer mid-run. Set your angle at launch and commit — corrections at speed will likely cause a spin-out before reaching the target.',
      'At 2/10 durability, every collision is likely your last. Aim for the highest-value single impact rather than trying to chain multiple hits.',
      'On levels with AI traffic, head-on collisions with the Wedge produce the highest collision energy due to combined relative velocity.',
      'Avoid Wobbles and T-Junction entirely — both require repeated impacts or precise positioning that the Wedge cannot deliver.',
    ],
    faqs: [
      {
        q: 'Is the Wedge the best vehicle in Turbo Dismount 2?',
        a: 'The Wedge has the highest speed (10/10) but the lowest handling (2/10) and near-lowest durability (2/10). It produces the highest single-impact scores on open levels, but is poorly suited for technical levels or survival runs. The "best" vehicle depends entirely on the level and your scoring strategy.',
      },
      {
        q: 'What is the best level for the Wedge?',
        a: 'Super-Speed is the strongest match. It is the largest level in the game with a long floating highway and 4 lanes of high-speed AI traffic — exactly the conditions where the Wedge\'s 10/10 speed produces maximum collision energy.',
      },
      {
        q: 'Why does the Wedge have such low handling?',
        a: 'The Wedge\'s stats reflect a design trade-off: maximum speed at the expense of everything else. Its 2/10 handling and 2/10 durability mean it excels only in straight-line scenarios. This extreme stat distribution makes it a specialist vehicle, not an all-rounder.',
      },
    ],
  },
  {
    slug: 'sasquatch',
    name: 'Sasquatch',
    type: 'Monster Truck',
    category: 'Trucks',
    speed: 3,
    handling: 2,
    durability: 10,
    specialAbility: 'Crushes everything, near-indestructible',
    recommendedFor: 'Survival runs, rampage modes',
    badge: 'Max Durability',
    badgeColor: '#EAB308',
    note: 'Community-estimated relative stats — not official game values. Ratings are comparative 1-10 scales.',
    description: `The Sasquatch is a monster truck with the highest durability in the game at 10/10 — the only vehicle to reach that maximum. Where every other vehicle eventually breaks apart from accumulated damage, the Sasquatch continues through impacts that would destroy anything else.

The stats tell the full story of its design trade-off: speed is 3/10 (second-lowest, above only the Street Slicer at tied 5/10 — actually lowest among trucks) and handling is 2/10 (tied for lowest with the Wedge). The Sasquatch is slow and difficult to steer. It arrives at collisions later and cannot navigate tight spaces.

What the Sasquatch offers is sustained scoring. On levels with repeated impacts — Wobbles, Dismount Derby, Going Down — the ability to survive through an entire chain of collisions means accumulating damage multipliers that fragile vehicles miss entirely. The Sasquatch's mass also means it delivers significant impact force to other vehicles and obstacles.`,
    bestLevels: ['wobbles', 'going-down', 'dismount-derby'],
    tips: [
      'The Sasquatch\'s 10/10 durability is wasted on levels where a single big hit is all you need. Use it on multi-collision levels like Wobbles, Going Down, and Dismount Derby.',
      'With 3/10 speed, the Sasquatch builds velocity slowly. On levels with elevation (Going Down, Mine Skydive Classic), gravity compensates for low engine speed.',
      'The 2/10 handling means you need to set your trajectory before the run begins. Pre-aim carefully at the launch point.',
      'On Dismount Derby, the Sasquatch\'s mass and durability let it survive arena combat that destroys lighter vehicles in one hit.',
      'Do not use the Sasquatch on speed-focused levels like Super-Speed or Daytona Speedway — its 3/10 speed produces weak collision energy on flat ground.',
    ],
    faqs: [
      {
        q: 'Is the Sasquatch good for beginners?',
        a: 'The Sasquatch\'s 10/10 durability makes it forgiving — you survive mistakes. However, its 2/10 handling makes steering very difficult. For beginners, the Ranger (durability 8/10, handling 7/10) is a better starting choice because it combines high survivability with usable steering.',
      },
      {
        q: 'What is the Sasquatch best used for?',
        a: 'Survival runs and levels with repeated collisions. Its 10/10 durability means it outlasts every other vehicle. On multi-floor levels like Going Down and arena levels like Dismount Derby, the Sasquatch can accumulate damage multipliers from sustained collision chains.',
      },
    ],
  },
  {
    slug: 'street-slicer',
    name: 'Street Slicer',
    type: 'Skateboard',
    category: 'Special Vehicles',
    speed: 5,
    handling: 6,
    durability: 1,
    specialAbility: 'Low profile, unique physics behavior',
    recommendedFor: 'Challenge runs, trick scores',
    badge: 'Unique',
    badgeColor: '#EAB308',
    note: 'Community-estimated relative stats — not official game values. Ratings are comparative 1-10 scales.',
    description: '',
    bestLevels: [],
    tips: [],
    faqs: [],
  },
  {
    slug: 'token-bird',
    name: 'Token Bird',
    type: 'Bird Vehicle',
    category: 'Special Vehicles',
    speed: 7,
    handling: 4,
    durability: 2,
    specialAbility: 'Gliding ability, airborne maneuvers',
    recommendedFor: 'Aerial challenges, creative runs',
    badge: 'Unique',
    badgeColor: '#EAB308',
    note: 'Community-estimated relative stats — not official game values. Ratings are comparative 1-10 scales.',
    description: `Token Bird is a bird-shaped special vehicle with a gliding ability that no other vehicle possesses. At 7/10 speed, it matches the Golf R and sits in the upper tier of the roster — fast enough for meaningful collision energy while offering a unique airborne mechanic.

The key distinction is the gliding ability listed under its special traits. On levels with elevation changes or airborne sections — Mine Skydive Classic, Going Down, Super-Speed (which has a floating highway) — Token Bird can extend its time in the air and control its trajectory mid-flight. This is a capability that ground-locked vehicles simply do not have.

The trade-offs are notable: handling at 4/10 is below average, and durability at 2/10 is tied with the Wedge for second-lowest. Token Bird is fragile and difficult to steer on the ground. Its value comes specifically from aerial segments where the gliding ability changes the physics interaction.`,
    bestLevels: ['mine-skydive-classic', 'going-down', 'super-speed'],
    tips: [
      'Token Bird\'s gliding ability is only valuable on levels with airborne segments. On flat ground levels like Expressway or T-Junction, it offers no advantage over standard vehicles.',
      'At 7/10 speed, Token Bird generates solid collision energy — use the glide to aim for high-value impact targets from above.',
      'With 2/10 durability, Token Bird will not survive multiple major impacts. Plan for a single decisive collision after your glide path.',
      'Mine Skydive Classic is the ideal level for Token Bird — the freefall section allows the gliding ability to extend distance and control the landing angle.',
      'Compare to Pink Lightning before choosing: Pink Lightning is faster (8/10 vs 7/10) with better handling (5/10 vs 4/10), but lacks the gliding ability. Choose Token Bird only when airborne control matters.',
    ],
    faqs: [
      {
        q: 'How does Token Bird\'s gliding work?',
        a: 'Token Bird has a gliding ability that allows airborne maneuvers. On levels with jumps, ramps, or elevation drops, it can extend air time and adjust trajectory mid-flight — something no other vehicle can do. The effect is most noticeable on levels like Mine Skydive Classic and Going Down.',
      },
      {
        q: 'Is Token Bird competitive for high scores?',
        a: 'On levels with significant airborne segments, yes. Its 7/10 speed generates good collision energy, and the gliding ability allows precise targeting during freefall. On flat ground levels, other vehicles with better handling or speed will outperform it.',
      },
    ],
  },
];

export const bestFor = [
  { mode: 'High Score Runs', vehicle: 'Wedge', reason: 'Maximum speed for massive collision energy' },
  { mode: 'Distance Records', vehicle: 'Pink Lightning', reason: 'Fast launch + aerodynamic body for long slides' },
  { mode: 'Obstacle Courses', vehicle: 'Ranger', reason: 'High durability survives multiple hits' },
  { mode: 'Beginners', vehicle: 'Ranger', reason: 'Forgiving handling and tough construction' },
  { mode: 'Survival Mode', vehicle: 'Sasquatch', reason: 'Near-indestructible, outlasts every obstacle' },
  { mode: 'Technical Tracks', vehicle: 'Golf R', reason: 'Best handling for precise navigation' },
  { mode: 'Creative Challenges', vehicle: 'Street Slicer', reason: 'Unique physics enable special trick opportunities' },
  { mode: 'Aerial Levels', vehicle: 'Token Bird', reason: 'Gliding helps control trajectory mid-air' },
];

export const categories = ['Cars', 'Trucks', 'Special Vehicles'] as const;
