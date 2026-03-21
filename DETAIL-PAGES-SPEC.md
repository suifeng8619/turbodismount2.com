# E3 详情页实施规范

> turbodismount2.com 车辆/关卡详情页的完整实施标准
> 版本: 1.0 | 日期: 2026-03-21

---

## 1. 核心原则

### 1.1 数据真实性（最高优先级）
- **禁止编造**游戏体验、操作手感、具体数值
- 所有 stats 标注 "Community-estimated relative stats — not official game values"
- 描述只写**可验证的事实**：来自 Steam 页面、开发者公告、社区讨论
- 不知道的就不写，**宁短不假**
- FAQ 回答只回答有确定答案的问题

### 1.2 颜色禁令
| 禁止使用 | 替代方案 |
|----------|----------|
| 蓝色 #0080F5 / blue 系 | 橙色 #F57200 或 黄色 #EAB308 |
| 紫色 #A855F7 / purple 系 | 红色 #E01C1C 或 石色 #8888A0 |
| 蓝紫色 indigo/violet 系 | 绿色 #22C55E 或 橙色 #FF8C12 |

适用范围：badge、边框、按钮、链接 hover、强调色、进度条、图标色、选中态

### 1.3 允许使用的颜色
```
橙色系:  #F57200 (主), #FF8C12 (亮), #C95A00 (暗), #FFAA44 (极亮)
绿色:    #22C55E
黄色:    #EAB308
红色:    #E01C1C
背景:    #0D0D0F (主), #141417 (面板), #1E1E24 (表面)
边框:    #2A2A33 (默认), #1E1E24 (微弱)
文字:    #F0F0F2 (主), #B0B0BE (次), #8888A0 (弱)
```

---

## 2. 数据架构

### 2.1 数据文件位置
```
src/data/vehicles.ts   — 车辆数据（从 vehicles/index.astro 提取）
src/data/levels.ts     — 关卡数据（从 levels/index.astro 提取）
src/data/constants.ts  — 游戏常量（已存在）
```

### 2.2 车辆数据结构
```typescript
export interface Vehicle {
  slug: string;              // kebab-case, 用于 URL
  name: string;              // 显示名称
  type: string;              // 车型描述
  category: 'Cars' | 'Trucks' | 'Special Vehicles';
  speed: number;             // 1-10
  handling: number;          // 1-10
  durability: number;        // 1-10
  specialAbility: string;    // 一句话特殊能力
  recommendedFor: string;    // 推荐场景
  badge?: string;            // 可选标签文字
  badgeColor?: string;       // 标签颜色（遵守颜色禁令）
  // 以下为详情页扩展字段
  description: string;       // 2-3 段详细描述（纯事实）
  bestLevels: string[];      // 推荐关卡 slug 列表
  tips: string[];            // 3-5 条使用建议
  faqs: { q: string; a: string }[];  // 2-3 个 FAQ
}
```

### 2.3 关卡数据结构
```typescript
export interface Level {
  slug: string;
  name: string;
  theme: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  type: string;
  description: string;       // 现有描述
  highScoreTip: string;      // 现有攻略
  badge?: string;
  badgeColor?: string;
  // 详情页扩展
  extendedGuide: string;     // 2-3 段扩展攻略
  bestVehicles: { slug: string; reason: string }[];  // 推荐车辆
  tips: string[];            // 3-5 条关卡技巧
  faqs: { q: string; a: string }[];
}
```

### 2.4 Slug 生成规则
```
name → slug 转换:
"Pink Lightning" → "pink-lightning"
"Golf R"         → "golf-r"
"Super-Speed"    → "super-speed"
"T-Junction"     → "t-junction"
"Token Bird"     → "token-bird"
```
规则: `name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')`

---

## 3. 页面模板规范

### 3.1 车辆详情页 `/database/vehicles/[slug]/`

#### 页面结构（从上到下）
```
┌─────────────────────────────────────────────┐
│ Header (全局)                                │
├─────────────────────────────────────────────┤
│ Hero Section                                 │
│   面包屑: Home > Database > Vehicles > Name  │
│   Badge (如有)                               │
│   H1: Turbo Dismount 2 {Name}               │
│   副标题: {Type} — {Category}                │
│   一段 intro 文字                            │
├─────────────────────────────────────────────┤
│ Stats 可视化                                 │
│   三个水平进度条 (Speed/Handling/Durability)  │
│   "Community-estimated" 标注                  │
├─────────────────────────────────────────────┤
│ Stats 对比表                                 │
│   当前车辆 vs 同 category 车辆               │
│   表格: Name | Speed | Handling | Durability │
│   当前车辆行高亮                             │
├─────────────────────────────────────────────┤
│ 特殊能力 & 推荐场景                          │
│   H2: Special Ability                        │
│   段落描述                                   │
│   推荐游戏模式列表                           │
├─────────────────────────────────────────────┤
│ 最佳关卡搭配                                 │
│   H2: Best Levels for {Name}                 │
│   关卡卡片 (链接到关卡详情页)                 │
├─────────────────────────────────────────────┤
│ 使用技巧                                     │
│   H2: Tips for {Name}                        │
│   编号列表 3-5 条                            │
├─────────────────────────────────────────────┤
│ FAQ (2-3 条, details/summary)                │
│   H2: {Name} FAQ                             │
├─────────────────────────────────────────────┤
│ 相关视频 (YouTube lite embed)                │
│   H2: See {Name} in Action                   │
├─────────────────────────────────────────────┤
│ 上一辆/下一辆导航                            │
│   ← Previous | All Vehicles | Next →         │
├─────────────────────────────────────────────┤
│ Footer (全局)                                │
└─────────────────────────────────────────────┘
```

#### SEO 标签
```
Title:       "{Name} — Turbo Dismount 2 Vehicle Stats & Guide"
Description: "Turbo Dismount 2 {Name} ({Type}) — Speed {X}/10, Handling {Y}/10, Durability {Z}/10. {recommendedFor}. Community stats and tips."
H1:          "Turbo Dismount 2 {Name}" (游戏名在内)
OG Image:    /og-vehicles.png (共用)
Canonical:   https://turbodismount2.com/database/vehicles/{slug}/
```

#### Schema
```json
{
  "@type": "Article",
  "headline": "{Title}",
  "description": "{Description}",
  "image": "https://turbodismount2.com/og-vehicles.png",
  "author": { "@type": "Organization", "name": "turbodismount2.com" },
  "publisher": { "@type": "Organization", "name": "turbodismount2.com" },
  "datePublished": "2026-03-21",
  "dateModified": "2026-03-21"
}
```
加 BreadcrumbList + FAQPage schema。

### 3.2 关卡详情页 `/database/levels/[slug]/`

#### 页面结构
```
┌─────────────────────────────────────────────┐
│ Header (全局)                                │
├─────────────────────────────────────────────┤
│ Hero Section                                 │
│   面包屑: Home > Database > Levels > Name    │
│   Badge (如有) + 难度星级                    │
│   H1: Turbo Dismount 2 {Name}               │
│   副标题: {Theme} — {Type}                   │
│   难度: ★★★☆☆ (CSS 实现)                    │
├─────────────────────────────────────────────┤
│ 关卡概述                                     │
│   H2: Level Overview                         │
│   description 段落                           │
│   Info 表格: Theme | Type | Difficulty       │
├─────────────────────────────────────────────┤
│ 高分攻略                                     │
│   H2: High Score Strategy                    │
│   highScoreTip 展开为 2-3 步                 │
│   编号步骤                                   │
├─────────────────────────────────────────────┤
│ 推荐车辆                                     │
│   H2: Best Vehicles for {Name}               │
│   车辆卡片 (链接到车辆详情页)                 │
│   每个含: 名称 + 原因                        │
├─────────────────────────────────────────────┤
│ 关卡技巧                                     │
│   H2: Tips & Tricks                          │
│   编号列表 3-5 条                            │
├─────────────────────────────────────────────┤
│ FAQ (2-3 条)                                 │
│   H2: {Name} FAQ                             │
├─────────────────────────────────────────────┤
│ 相关视频                                     │
├─────────────────────────────────────────────┤
│ 上一关/下一关导航                            │
├─────────────────────────────────────────────┤
│ Footer                                       │
└─────────────────────────────────────────────┘
```

#### SEO 标签
```
Title:       "{Name} — Turbo Dismount 2 Level Guide & Strategy"
Description: "Turbo Dismount 2 {Name} level walkthrough. Difficulty: {X}/5. Theme: {Theme}. High score tips and best vehicle recommendations."
H1:          "Turbo Dismount 2 {Name}"
```

---

## 4. 内容写作规范

### 4.1 允许写的内容
- Steam 商店页面可查证的游戏功能描述
- 来自数据数组的 stats 数值（标注来源）
- 基于物理逻辑的推理（"高速度 + 低耐久 = 适合距离跑"）
- 车辆/关卡之间的交叉引用和对比
- 开发者公告中确认的信息

### 4.2 禁止写的内容
- 虚构的操作手感描述（"转弯时感觉很丝滑"）
- 编造的具体数值（"加速到 100km/h 只需 2.3 秒"）
- 假装玩过游戏的第一人称体验
- AI 废话填充（"在游戏中，玩家可以体验到..."）
- 未经验证的 Workshop 内容细节

### 4.3 内容长度
- 车辆详情页: 300-500 字正文 + stats 表格 + FAQ
- 关卡详情页: 300-500 字正文 + 攻略步骤 + FAQ
- **宁短不假，禁止灌水**

### 4.4 FAQ 写作规则
- 每页 2-3 个 FAQ
- 只回答有确定答案的问题
- 答案简洁直接，不重复页面已有内容
- FAQ 示例:
  - "Is {Vehicle} good for beginners?" → 基于 stats 给出明确判断
  - "What's the best vehicle for {Level}?" → 引用 bestVehicles 数据
  - "How hard is {Level}?" → 引用 difficulty 评级

---

## 5. 视觉设计规范

### 5.1 Stats 进度条
```
Speed      ████████░░  8/10
Handling   █████░░░░░  5/10
Durability ███░░░░░░░  3/10
```
- 填充色: #F57200 (橙色)
- 背景色: #1E1E24
- 圆角: rounded-full
- 高度: h-2.5
- 数字在右侧

### 5.2 难度星级
```
★★★☆☆ Difficulty 3/5
```
- 填充星: #EAB308 (黄色)
- 空星: #2A2A33
- 用 SVG 星形或 Unicode ★/☆

### 5.3 对比表格
- 表头: bg-[#0D0D0F], 文字 #8888A0, uppercase, text-xs
- 奇偶行: bg-[#0D0D0F] / bg-[#141417]
- 当前行: border-l-2 border-[#F57200], bg-[rgba(245,114,0,0.05)]
- hover: bg-[#1E1E24]
- 移动端: 水平滚动 + "← Scroll →" 提示

### 5.4 卡片链接
```css
rounded-xl border border-[#2A2A33] bg-[#141417]
hover:border-[rgba(245,114,0,0.3)] hover:bg-[#1E1E24]
transition-all duration-200
```

### 5.5 上一页/下一页导航
```
┌──────────────────────────────────────────┐
│ ← Corley          All Vehicles    Golf R →│
│   Standard Sedan                Sport...  │
└──────────────────────────────────────────┘
```
- 三列布局: justify-between
- 中间: 链接回列表页
- 左右: 上一个/下一个，含 name + type

---

## 6. 技术实现规范

### 6.1 文件结构
```
src/data/vehicles.ts                    — 车辆数据
src/data/levels.ts                      — 关卡数据
src/pages/database/vehicles/[slug].astro — 车辆详情页模板
src/pages/database/levels/[slug].astro   — 关卡详情页模板
```

### 6.2 Astro 动态路由
```typescript
// [slug].astro
export function getStaticPaths() {
  return vehicles.map(v => ({
    params: { slug: v.slug },
    props: { vehicle: v },
  }));
}
```

### 6.3 数据提取原则
- 从 index.astro 中的数组提取到独立 .ts 文件
- index.astro 改为 import 数据文件
- 确保 index 页面和详情页使用**同一份数据**，DRY

### 6.4 导入规则
- 使用 GAME 常量引用价格/URL
- 使用相对路径 import

### 6.5 图片规则
- 不为详情页创建新图片
- 复用现有 Steam CDN 图片（header.jpg 等）作为 hero 背景
- OG 图片: 车辆页共用 /og-vehicles.png，关卡页共用 /og-levels.png
- 所有 img 标签必须有 width + height

---

## 7. 交叉链接规范

### 7.1 车辆页链出
- → 推荐关卡详情页 (bestLevels)
- → 同类别其他车辆（对比表中的链接）
- → 车辆列表页 /database/vehicles/
- → Tips & Tricks 页 /guides/tips/
- → Steam 购买页 (GAME.steamUrl)

### 7.2 关卡页链出
- → 推荐车辆详情页 (bestVehicles)
- → 关卡列表页 /database/levels/
- → How to Play 页 /guides/how-to-play/
- → Workshop 页 /workshop/

### 7.3 父页面回链
- vehicles/index.astro: 每辆车添加 "View Details →" 链接到详情页
- levels/index.astro: 每个关卡添加 "Full Guide →" 链接到详情页

---

## 8. 实施分期

### Phase 1（试点 — 4 个页面）
先做搜索潜力最高的 4 个:
1. `/database/vehicles/wedge/` — "Max Speed" badge, 最极端 stats
2. `/database/vehicles/pink-lightning/` — 知名车辆
3. `/database/levels/super-speed/` — "Largest Level" badge
4. `/database/levels/going-down/` — "High Score Favorite" badge

验证: 部署后检查 Google Search Console 索引状态 + Lighthouse

### Phase 2（剩余 12 个页面）
确认 Phase 1 无问题后，批量生成剩余页面。

---

## 9. 质量检查清单

每个详情页上线前必须通过:

- [ ] H1 包含 "Turbo Dismount 2" + 车辆/关卡名
- [ ] Title 在 55-60 字符以内
- [ ] Description 在 140-160 字符以内
- [ ] 面包屑 HTML 和 Schema 一致，父级 URL 存在
- [ ] 无蓝色/紫色/蓝紫色出现
- [ ] Stats 标注 "Community-estimated"
- [ ] 无虚构内容（每段可追溯数据来源）
- [ ] 所有图片有 width + height
- [ ] 所有外部链接有 rel="noopener noreferrer"
- [ ] 竞品链接有 nofollow
- [ ] FAQ schema 与页面内容一致
- [ ] 上一页/下一页导航正确
- [ ] 移动端表格可滚动
- [ ] `npm run build` 无错误
- [ ] 父页面有回链到此详情页
