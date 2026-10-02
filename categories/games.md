# Games & Interactive: Opus 5.5 Video Prompts

Playable prototypes and game-style reward moments built in the browser. 9 prompts, each with a preview and the original post.

[← Back to the full list](../README.md)

### Mobile-game reward moment in 3D

<a href="https://x.com/op7418/status/2104085484347818226"><img src="https://pbs.twimg.com/amplify_video_thumb/2104085291439144961/img/iAeJM8TyuCSzDBKb.jpg" alt="Mobile-game reward moment in 3D" width="360"></a>

[@op7418](https://x.com/op7418/status/2104085484347818226) · 16:9 · 18s · ♥ 1.2k · Chinese · `canvas` `svg` `gsap` `css`

A full art-direction spec: toon shading, edge-detection outlines, rarity-based color tiers.

<details>
<summary>Show prompt</summary>

```text
帮我做一个原创的手游「高光时刻」动效：[主体，例如：开宝箱 / 段位晋升 / 成就解锁 / Boss 掉落 / 角色升级]。
做成一个可以直接打开的单文件网页（HTML + CSS + JS），点一下就能完整播放，效果对标商业手游的结算 / 奖励演出。

【世界观与风格】
- 原创美术，不要模仿任何现有游戏的 IP、角色或 Logo。
- 卡通手游风：高饱和配色，统一的深色描边（例如 #1A1033），圆润厚重的造型。
- 配色随等级升级：[等级阶梯，例如：普通绿 → 稀有蓝 → 史诗紫 → 传说金]。每升一级都要切换主色、光效颜色和背景色调。
- 标题用圆胖的游戏字体（如 Titan One / Lilita One），描黑边，加投影；文字逐字「砸」进画面，带回弹。

【主体物：做成真 3D】
- 用 Three.js 建模，不要用平面 SVG 贴图。要有厚度、倒角，以及符合主体的结构细节（木板缝、铆钉、包边、宝石切面、锁扣等）；木板缝这类细节用真实几何体拼出来，不要贴黑线条。
- 着色用卡通分阶（MeshToonMaterial 加 3～4 阶的渐变贴图），配三种灯光：主光、天光、等级色的轮廓光。
- 描边用后期边缘检测：渲染法线图 + 深度图，再用着色器画线。外轮廓粗、零件交界细，粗细全程一致；另外做 1.5 倍超采样和多重采样抗锯齿。
  不要用「放大一圈的黑色背面」那种描…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/op7418/status/2104085484347818226).

### Find the cats inside a Van Gogh painting

<a href="https://x.com/MandelDuck/status/2103802923465768972"><img src="https://pbs.twimg.com/amplify_video_thumb/2103802857933721600/img/5eB4dSCdmilj9D1o.jpg" alt="Find the cats inside a Van Gogh painting" width="360"></a>

[@MandelDuck](https://x.com/MandelDuck/status/2103802923465768972) · 16:9 · 34s · ♥ 67 · `threejs` `shader` `canvas`

A 3D walk-around game set in a famous painting.

```text
can you make a 3d game where you walk around and spot cats inside of a van gogh painting? we can start with stary night and its town
```

### Browser voxel game with realistic shaders

<a href="https://x.com/Viggle_PINOC/status/2102861939072434495"><img src="https://pbs.twimg.com/amplify_video_thumb/2102859066372481024/img/A7jckjbWbDkd-Jgr.jpg" alt="Browser voxel game with realistic shaders" width="360"></a>

[@Viggle_PINOC](https://x.com/Viggle_PINOC/status/2102861939072434495) · 16:9 · 55s · ♥ 16 · `threejs` `shader` `canvas`

No build step: ES modules, procedural terrain, PBR, god rays and a day/night cycle.

<details>
<summary>Show prompt</summary>

```text
Create a playable version of Minecraft in my browser. Add advanced shaders that make it look as real and beautiful as possible.

World: vanilla ES modules + three.js (importmap from jsdelivr, no build step). Procedural voxel terrain with trees, beaches and water. Make it look as real and beautiful as possible: physically based sky, clouds, soft shadows, water reflections and caustics, god rays, bloom, PBR block textures. First/third-person player (V toggles), mining and placing blocks, torches, stairs, a hotbar and an inventory (E), a day/night cycle with nights that are still readable.

C…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/Viggle_PINOC/status/2102861939072434495).

### Top-down racer inspired by a 1997 classic

<a href="https://x.com/_nieGRAMotny_/status/2103128800909197521"><img src="https://pbs.twimg.com/amplify_video_thumb/2103128542816980992/img/eWA2Tz9UT3ns7Ikg.jpg" alt="Top-down racer inspired by a 1997 classic" width="360"></a>

[@_nieGRAMotny_](https://x.com/_nieGRAMotny_/status/2103128800909197521) · 16:9 · 30s · ♥ 10 · `threejs` `shader` `canvas` `physics`

A full stack spec with original assets only and custom 2.5D physics.

<details>
<summary>Show prompt</summary>

```text
Build a racing game inspired by Ignition (1997): angled top-down camera, arcade-leaning
physics, vehicles with very distinct personalities. This must be an original game,
not a copy. Use an original name, an original track, and zero original assets.

## Stack
- Vite + TypeScript (strict), Three.js for rendering, no UI framework
  (HUD in plain DOM/CSS).
- Low-poly graphics generated in code (BoxGeometry, CylinderGeometry, etc.),
  no external models or textures. Solid colors and simple materials.
- Custom simplified 2.5D physics (movement on the XZ plane, height from terrain).
  No physics eng…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/_nieGRAMotny_/status/2103128800909197521).

### Police-chase arcade game from a PRD

<a href="https://x.com/froessell/status/2103789415323562325"><img src="https://pbs.twimg.com/amplify_video_thumb/2103788548369309696/img/F-9fe6PFR5FHOeUM.jpg" alt="Police-chase arcade game from a PRD" width="360"></a>

[@froessell](https://x.com/froessell/status/2103789415323562325) · 16:9 · 59s · ♥ 222 · `threejs` `canvas` `physics` `playable`

Written as a product requirements doc: vision, input, core loop.

<details>
<summary>Show prompt</summary>

```text
PRD — Police Chase Arcade Game

Working title: Heatwave
Platform: iOS + Android
Engine: Unity
Genre: Top-down 3D arcade chase / survival
Orientation: Portrait
Input: One-thumb touch controls
Business model: TBD — design MVP around gameplay first
Primary goal: Build a genuinely fun playable prototype before adding progression or monetization.
⸻
Product vision
A fast, chaotic mobile arcade game where the player is constantly being pursued by increasingly aggressive police.
The player cannot directly attack.
Instead, they survive by driving aggressively, drifting around obstacles, making sudden t…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/froessell/status/2103789415323562325).

### Squad space battle against a capital ship

<a href="https://x.com/0xChuckstock/status/2103804606794879327"><img src="https://pbs.twimg.com/amplify_video_thumb/2103590472900120576/img/H_-C-r4lyNnOKPRe.jpg" alt="Squad space battle against a capital ship" width="360"></a>

[@0xChuckstock](https://x.com/0xChuckstock/status/2103804606794879327) · 16:9 · 28s · ♥ 17 · `threejs` `shader` `playable`

A multiplayer premise with objectives and enemy waves.

```text
A 3D multiplayer game where the players are a squad of x-wings taking on a star destroyer. They pilot their ships to take out key components of the star destroyer while also dealing with guns mounted on the star destroyer and waves of tie fighters.
```

### Cartoon battle-royale HUD

<a href="https://x.com/MyCodeCoach/status/2103181065976459574"><img src="https://pbs.twimg.com/amplify_video_thumb/2103177704413741056/img/5fh9uUPpAzTe-q2m.jpg" alt="Cartoon battle-royale HUD" width="360"></a>

[@MyCodeCoach](https://x.com/MyCodeCoach/status/2103181065976459574) · 16:9 · 185s · ♥ 26 · `threejs` `svg`

Lists the UI pieces: storm timer, minimap, hotbar, emote wheel, results screen.

```text
A cartoony battle royale: storm timer, players alive, inventory hotbar, minimap, emote wheel and a victory results screen
```

### 1-on-1 card game in pixel art

<a href="https://x.com/aisongman/status/2103763192971461057"><img src="https://pbs.twimg.com/amplify_video_thumb/2103761863293157376/img/0ejMz2vvqlYArnMO.jpg" alt="1-on-1 card game in pixel art" width="360"></a>

[@aisongman](https://x.com/aisongman/status/2103763192971461057) · 16:9 · 15s · ♥ 1 · `canvas` `pixel` `playable`

"Just make it. As best you can."

```text
Create a 1-on-1 card game like Hearthstone.
Just make it. As best you can.
In pixel art style.
```

### Retro strategy game with a classic vibe

<a href="https://x.com/opener_ai/status/2103437714695843891"><img src="https://pbs.twimg.com/amplify_video_thumb/2103435827250659328/img/zKyN6oDAYgx-t6kK.jpg" alt="Retro strategy game with a classic vibe" width="360"></a>

[@opener_ai](https://x.com/opener_ai/status/2103437714695843891) · 16:9 · 32s · ♥ 0 · `canvas` `pixel` `playable`

A one-line genre reference.

```text
Make a game like Romance of the Three Kingdoms III with a retro, pixelated classic vibe.
```

[← Back to the full list](../README.md)
