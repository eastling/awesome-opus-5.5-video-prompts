# Awesome Opus 5.5 Video Prompts [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> 90 hand-picked prompts people used to make videos with Claude Opus 5.5: motion graphics showreels, product launch films, UI animations, explainers, music videos, 3D scenes and games. Each one has a preview, a link to the original post, and a note on what makes it work.

## Contents

- [How Opus 5.5 makes videos](#how-opus-55-makes-videos)
- [What the best prompts have in common](#what-the-best-prompts-have-in-common)
- [Motion Design Showreels](#motion-design-showreels) (9)
- [Product Launch & SaaS Promos](#product-launch--saas-promos) (12)
- [UI Motion & App Walkthroughs](#ui-motion--app-walkthroughs) (9)
- [Social Shorts & Vertical Ads](#social-shorts--vertical-ads) (5)
- [Logo Reveals, Intros & Kinetic Type](#logo-reveals-intros--kinetic-type) (8)
- [Explainers & Education](#explainers--education) (10)
- [Storytelling & Animated Shorts](#storytelling--animated-shorts) (10)
- [Music Videos & Audio-Reactive](#music-videos--audio-reactive) (7)
- [3D Worlds & Scenes](#3d-worlds--scenes) (5)
- [Shaders, Particles & Generative Art](#shaders-particles--generative-art) (6)
- [Games & Interactive](#games--interactive) (9)
- [Starter templates](#starter-templates)
- [Contributing](#contributing)

## How Opus 5.5 makes videos

Claude Opus 5.5 does not generate video pixels the way diffusion models do. It writes code (HTML, Canvas, SVG, GSAP, Three.js or WebGL shaders) that draws every frame. A headless browser such as Playwright captures the frames, and ffmpeg encodes them into an MP4, often with music or sound made in code. That is why these prompts read like creative briefs and engineering specs at the same time.

Want to try one without setting anything up? [opus6.video](https://opus6.video/?utm_source=github&utm_medium=referral&utm_campaign=awesome-opus-prompts) turns a prompt into a rendered video in the browser.

## What the best prompts have in common

- **Collect assets first.** Several of the most-liked prompts open with an "Ask me for:" list (product name, UI states, a royalty-free song) so the model has real material before it writes a frame.
- **Ban the AI tells.** Name what you don't want: corner labels, fake UI frames, particle bursts, lens flares, camera shake.
- **Give timing in numbers.** Seconds per beat, camera moves of 1.5–3 s, a hook in the first second, the end card held for the last 15%.
- **Make rendering deterministic.** "Every frame is a pure function of time" or "one draw(t) function" lets the video render frame by frame without dropped or jittery frames.
- **Sync to sound.** Ask for cuts on the beat, or for a soundtrack synthesized in code so timing is exact.
- **Set the bar with a reference.** "Like a showreel for a résumé", "like it won an Emmy for main title design", "Apple keynote".

## Motion Design Showreels

The prompt that started the trend, and the variations people built on it.

### The original showreel prompt

<a href="https://x.com/stephanlivera/status/2103315922098470926"><img src="https://pbs.twimg.com/amplify_video_thumb/2103315748496302080/img/eScXkusmi5doSQFo.jpg" alt="The original showreel prompt" width="360"></a>

[@stephanlivera](https://x.com/stephanlivera/status/2103315922098470926) · 16:9 · 15s · ♥ 17k · `canvas`

The one-liner that started the trend. It is short on purpose and leaves every creative call to the model.

```text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.
```

### Showreel about your product

<a href="https://x.com/ann_nnng/status/2103723183899852885"><img src="https://pbs.twimg.com/amplify_video_thumb/2103721031798325248/img/AQACnSg93oS7mh4T.jpg" alt="Showreel about your product" width="360"></a>

[@ann_nnng](https://x.com/ann_nnng/status/2103723183899852885) · 16:9 · 15s · ♥ 985 · `canvas`

Same idea, but the model reads your product pages first and writes the script itself.

```text
Make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are. The content should focus on [your product]. You should visit the pages first to learn about the product, then write the video content yourself.
```

### Showreel with a soundtrack synthesized in code

<a href="https://x.com/prasenx/status/2103538744695693512"><img src="https://pbs.twimg.com/amplify_video_thumb/2103537567853666304/img/0aV5KGQ8E6aPmgLx.jpg" alt="Showreel with a soundtrack synthesized in code" width="360"></a>

[@prasenx](https://x.com/prasenx/status/2103538744695693512) · 16:9 · 15s · ♥ 198 · `shader` `canvas` `audio`

Adds a code-composed score with every cut on the beat, rendered to a 1080p60 MP4.

<details>
<summary>Show prompt</summary>

```text
make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. go all out.

compose the soundtrack yourself, fully synthesized in code. no samples, no audio files, no VST instruments. every cut and transition must land on the beat.

1920x1080, 60fps. render the final video with the music mixed in as an MP4 and tell me where it's saved.
```

</details>

### Showreel with a technique checklist

<a href="https://x.com/lukasersil/status/2103742861971726495"><img src="https://pbs.twimg.com/amplify_video_thumb/2103741580578295808/img/ZX8e_CdESlqGSX-y.jpg" alt="Showreel with a technique checklist" width="360"></a>

[@lukasersil](https://x.com/lukasersil/status/2103742861971726495) · 16:9 · 15s · ♥ 71 · `threejs` `shader` `canvas` `svg`

Names the techniques to show (kinetic type, masking, fluids, particles…), so the reel covers more ground.

<details>
<summary>Show prompt</summary>

```text
Create a bold, dynamic 15-second motion graphics showreel that feels like the ultimate portfolio piece of an exceptionally talented motion designer. Showcase a wide range of advanced techniques: kinetic typography, smooth transitions, 2D and 3D animation, abstract geometry, fluid simulations, particles, distortion, creative masking, compositing, lighting, depth, and seamless camera movement. Keep the pacing fast, confident, and visually surprising, with every shot transitioning naturally into the next. Make it feel meticulously art-directed rather than like a random collection of effects. Push…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/lukasersil/status/2103742861971726495).

**[See all 9 motion design showreels prompts →](categories/showreel.md)**

## Product Launch & SaaS Promos

Launch films, teasers and ads for products, apps and open-source projects.

### Slick startup video in one line

<a href="https://x.com/deedydas/status/2102787937482252537"><img src="https://pbs.twimg.com/amplify_video_thumb/2102787906494668800/img/agrbxvHg24w3nJQD.jpg" alt="Slick startup video in one line" width="360"></a>

[@deedydas](https://x.com/deedydas/status/2102787937482252537) · 16:9 · 26s · ♥ 3.3k · `svg` `gsap`

One sentence and no assets. A useful baseline before you add detail.

```text
make a modern slick and punchy video for a modern startup that works on inference
```

### Apple-keynote launch film in one continuous take

<a href="https://x.com/twoclipping/status/2103835273813496100"><img src="https://pbs.twimg.com/amplify_video_thumb/2103830256347910144/img/YsUzKmE5XqGD9NZR.jpg" alt="Apple-keynote launch film in one continuous take" width="360"></a>

[@twoclipping](https://x.com/twoclipping/status/2103835273813496100) · 1:1 · 29s · ♥ 2.1k · `canvas`

Opens with an "Ask me for" list, so the model gathers your assets before it builds. Each scene grows out of the last, with no cuts or fades.

<details>
<summary>Show prompt</summary>

```text
Ask me for: a one-word brand name for the wordmark (a verb works best), 9 to 12 high-res photos, a royalty-free song around 120 BPM with a drop and a quiet breakdown (Mixkit, free for commercial use), and a free stock clip of a plain wall with moving plant shadows (Pexels).

An Apple-keynote launch film, 2D only, one continuous take. Every scene is made out of the previous one: nothing fades, blurs or cuts. Objects change shape instead: text rises out of a mask line, icons pop from zero on a spring, bars draw across, pages push, and a black shape floods the whole…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/twoclipping/status/2103835273813496100).

### High-end minimal launch film with real footage

<a href="https://x.com/twoclipping/status/2102554209166000267"><img src="https://pbs.twimg.com/amplify_video_thumb/2102553635750125568/img/FhzzVrDbiRbpVBMN.jpg" alt="High-end minimal launch film with real footage" width="360"></a>

[@twoclipping](https://x.com/twoclipping/status/2102554209166000267) · 16:9 · 20s · ♥ 608 · `svg` `css`

Strict rules: one idea per shot, one accent color, and an explicit list of banned effects.

<details>
<summary>Show prompt</summary>

```text
Ask me for: the product name and a one-line promise, 3 to 5 UI moments to show, one accent color, 10 to 20 real vertical clips I own, and a royalty-free song with a clear drop (e.g. Mixkit, free for commercial use).

High-end minimal. One idea per shot, lots of empty space, one accent color, one clean sans (Geist or Inter) with tight tracking. Masked type reveals, match cuts, one smooth camera language. Real footage only, never placeholder cards. No full stops in on-screen text.
Banned: shockwave rings, particle bursts, RGB split, camera shake, lens flares, neon…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/twoclipping/status/2102554209166000267).

### SaaS launch video with real brand assets

<a href="https://x.com/moritzkremb/status/2103066071838466494"><img src="https://pbs.twimg.com/amplify_video_thumb/2103066013323624448/img/0dC1iLcOk74La4jK.jpg" alt="SaaS launch video with real brand assets" width="360"></a>

[@moritzkremb](https://x.com/moritzkremb/status/2103066071838466494) · 16:9 · 46s · ♥ 418 · `svg` `gsap`

One of the most copied prompts. Replace "go find some SaaS" with your own URL.

<details>
<summary>Show prompt</summary>

```text
I want you to create a highly professional SaaS product launch video. Go and find some SaaS, preferably just one that people know, so it's easier to identify with it. Pick that, and then make sure to get actual assets and images and all of that stuff from the internet. Turn it into these typical, very professionally edited, motion-graphics-styled product launch videos that you see people making on Twitter when they launch new SaaS products (which are showing off the features, the benefits, and all of these things).
```

</details>

**[See all 12 product launch & saas promos prompts →](categories/launch.md)**

## UI Motion & App Walkthroughs

Interfaces that morph, click and scroll: product UI as the hero of the video.

### One shape, many UI states

<a href="https://x.com/twoclipping/status/2103273003555402193"><img src="https://pbs.twimg.com/amplify_video_thumb/2103272964967804928/img/DTuQzS4NOGKMbTDA.jpg" alt="One shape, many UI states" width="360"></a>

[@twoclipping](https://x.com/twoclipping/status/2103273003555402193) · 1:1 · 14s · ♥ 12k · `svg`

A single element morphs through 8–12 interface states, driven by a cursor, with no cuts. Widely remixed.

<details>
<summary>Show prompt</summary>

```text
Ask me for: 8 to 12 UI states I want the shape to become (e.g. button, loader, player, slider, toggle, tabs, chart, command palette, toast), pure black and white or one accent color, and a royalty-free song around 120 BPM (e.g. Mixkit, free for commercial use).

Dribbble-level UI motion. One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur. A cursor drives every change with real clicks and drags. Light warm-gray canvas, black and white components, one clean UI font (Geist). Springs eve…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/twoclipping/status/2103273003555402193).

### UI story film with one draw(t) function

<a href="https://x.com/verbove/status/2103483957266268381"><img src="https://pbs.twimg.com/amplify_video_thumb/2103483857836134400/img/ymXwmW0WgvP80pxi.jpg" alt="UI story film with one draw(t) function" width="360"></a>

[@verbove](https://x.com/verbove/status/2103483957266268381) · 1:1 · 20s · ♥ 218 · `canvas`

Adds engineering rules for frame-perfect rendering: one canvas, one draw(t), no timers and no state between frames.

<details>
<summary>Show prompt</summary>

```text
Ask me for:
• my product + URL
• 8–12 UI states that tell its story
• the real data shown in each state
• brand colors + fonts + accent color
• required formats (1:1, 16:9, 9:16)

One HTML file. One canvas
One draw(t) function

No CSS transitions
No timers
No state carried between frames

One shape, never cut

Every state is the same element changing size, radius and color while the content swaps

A cursor drives the sequence with real clicks, typing and one drag

Real UI. Real data. No placeholders.

120 BPM grid

Something happens on e…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/verbove/status/2103483957266268381).

### Product promo built from your real UI

<a href="https://x.com/AnnaCher___/status/2103571096549433425"><img src="https://pbs.twimg.com/amplify_video_thumb/2103570995806375936/img/sleoZ_IcPyEwLMh-.jpg" alt="Product promo built from your real UI" width="360"></a>

[@AnnaCher___](https://x.com/AnnaCher___/status/2103571096549433425) · 1:1 · 42s · ♥ 11 · `svg`

The one-shape style, but the model studies your live site and uses its actual components.

<details>
<summary>Show prompt</summary>

```text
Analyze http://sprites.ai and build a product promo from our own UI, not generic components.

Dribbble-level UI motion. One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur. A cursor drives every change with real clicks and drags. Warm-gray canvas, black and white components, one accent (#FD9543), Geist. Springs everywhere, a tiny overshoot at most. The camera zooms so each state fills the frame. Last frame = first frame, so it loops.
Banned: bouncy easing, particles, glows, gradients on UI chrome, misma…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/AnnaCher___/status/2103571096549433425).

### Pokédex-style UI morph

<a href="https://x.com/TheGrootDev/status/2103516567824966114"><img src="https://pbs.twimg.com/amplify_video_thumb/2103516534241120256/img/la4WoyATEbAUArza.jpg" alt="Pokédex-style UI morph" width="360"></a>

[@TheGrootDev](https://x.com/TheGrootDev/status/2103516567824966114) · 1:1 · 14s · ♥ 1 · `svg`

A themed remix of the one-shape prompt: a Poké Ball turns into every interface component.

<details>
<summary>Show prompt</summary>

```text
Ask me for: my featured Pokémon or starter trio, 8–12 Pokémon-themed UI states, and a royalty-free song around 120 BPM with a playful adventure or electronic feel. Confirm that the song’s license permits the intended use.Default palette: warm off-white, black, and Poké Ball red. Pokémon artwork keeps its original colors.

A Pokémon-inspired UI motion film with Dribbble-level polish. Imagine a beautifully designed modern Pokédex: playful, precise, and instantly http://recognizable.One shape, never cut: a Poké Ball continuously morphs into every interface component…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/TheGrootDev/status/2103516567824966114).

**[See all 9 ui motion & app walkthroughs prompts →](categories/ui.md)**

## Social Shorts & Vertical Ads

9:16 edits, story ads and fast-cut shorts made for the feed.

### Production-grade social promo

<a href="https://x.com/davidmarcus/status/2103275618045686217"><img src="https://pbs.twimg.com/amplify_video_thumb/2103275588102537216/img/XBVUX6UkVQNuB2ek.jpg" alt="Production-grade social promo" width="360"></a>

[@davidmarcus](https://x.com/davidmarcus/status/2103275618045686217) · 9:16 · 23s · ♥ 283 · `svg` `gsap`

Short brief, vertical format, and a clear quality bar.

```text
make a punchy and modern short video for social that promotes @lightspark capabilities. Needs to be production grade with sound
```

### Talking-head clip into a punchy edit

<a href="https://x.com/sab8a/status/2103144778481475686"><img src="https://pbs.twimg.com/amplify_video_thumb/2103144418165538817/img/7XT3rMnErm6GYZ3I.jpg" alt="Talking-head clip into a punchy edit" width="360"></a>

[@sab8a](https://x.com/sab8a/status/2103144778481475686) · 16:9 · 37s · ♥ 291 · `canvas` `ai-image`

Hand the model raw footage and ask for subtitles, graphics and music.

```text
Cut a raw talking-head clip into a punchy, fun edit with subtitles, graphics and music
```

### 9:16 story ad starring your mascot

<a href="https://x.com/jackfriks/status/2103132260589338762"><img src="https://pbs.twimg.com/amplify_video_thumb/2103131986701230082/img/9PcFlH2KPZDZVz_U.jpg" alt="9:16 story ad starring your mascot" width="360"></a>

[@jackfriks](https://x.com/jackfriks/status/2103132260589338762) · 9:16 · 20s · ♥ 163 · `canvas` `svg` `gsap`

Uses existing character assets for a short story that ends on the app.

```text
can you help me use the pig assets on new branch of lovelee to make a 9:16 short story animation with sound effects about the pig sending his partner love notes in the mailbox and make it fun and good tease app at end?
```

### Chaotic brain-rot short in Python

<a href="https://x.com/kloss_xyz/status/2103664956482941143"><img src="https://pbs.twimg.com/amplify_video_thumb/2103664773103857664/img/i8n7bMMjWm9izUWi.jpg" alt="Chaotic brain-rot short in Python" width="360"></a>

[@kloss_xyz](https://x.com/kloss_xyz/status/2103664956482941143) · 9:16 · 154s · ♥ 54 · `canvas` `audio`

Generated with Python and rendered with ffmpeg, told from the model's own point of view.

<details>
<summary>Show prompt</summary>

```text
Use Python to generate a 9:16 chaotic brain rot video with excellent motion + sound design and render it using ffmpeg. Put your own personal spin on it so it’s aligned with Anthropic’s new launch. Also fully express what it’s like to be a very creative LLM used by me every day from your POV to give it some extra personality.
```

</details>

**[See all 5 social shorts & vertical ads prompts →](categories/social.md)**

## Logo Reveals, Intros & Kinetic Type

Logo builds, title sequences, identity bumpers and typography-driven pieces.

### Low-poly logo assembly

<a href="https://x.com/Mounnna/status/2103802871934497266"><img src="https://pbs.twimg.com/amplify_video_thumb/2103802493985808384/img/F_h8mEY82oXmLOFU.jpg" alt="Low-poly logo assembly" width="360"></a>

[@Mounnna](https://x.com/Mounnna/status/2103802871934497266) · 16:9 · 16s · ♥ 1 · `canvas`

Wireframe first, then faceted shards fly in one by one until the logo is built.

```text
Create a motion design video of a slow-reveal transition. Draw the logo as a wireframe first, then fly in faceted low-poly shards one by one until they assemble the logo. Finish by bringing in the app icon background and typing out the brand name.
```

### Turn a logo into a 10-second reel

<a href="https://x.com/0xValure/status/2103603025579331584"><img src="https://pbs.twimg.com/amplify_video_thumb/2103601210154426368/img/lb_4iGplcPUtFbhZ.jpg" alt="Turn a logo into a 10-second reel" width="360"></a>

[@0xValure](https://x.com/0xValure/status/2103603025579331584) · 16:9 · 10s · ♥ 37 · `threejs` `canvas`

Two sentences and a reference video.

```text
Make this PayBox logo into a reel. Pretend you are a world-class motion designer. Make a 10-second dynamic video like the reference
```

### Title sequence for a thriller that doesn't exist

<a href="https://x.com/abhinayguptha/status/2103565090721259981"><img src="https://pbs.twimg.com/amplify_video_thumb/2103564849188069376/img/w4D7_UKSw3SlXVJB.jpg" alt="Title sequence for a thriller that doesn't exist" width="360"></a>

[@abhinayguptha](https://x.com/abhinayguptha/status/2103565090721259981) · 16:9 · 20s · ♥ 0 · `shader` `webgl` `canvas`

Sets the bar with a single comparison: "like it won an Emmy for main title design".

```text
Make a 20-second title sequence for a Netflix thriller that doesn't exist yet. Make it feel like it won an Emmy for main title design.
```

### Loopable kinetic identity bumper

<a href="https://x.com/techhalla/status/2103411244468498547"><img src="https://pbs.twimg.com/amplify_video_thumb/2103409564657885184/img/yzB3EAzZHx4veQ_X.jpg" alt="Loopable kinetic identity bumper" width="360"></a>

[@techhalla](https://x.com/techhalla/status/2103411244468498547) · 1:1 · 20s · ♥ 270 · `canvas`

Exactly 20 s, first frame equals last frame, styled like a street poster that moves.

<details>
<summary>Show prompt</summary>

```text
You are a world-class motion designer doing a 20.00s kinetic identity bumper for TechHalla — an AI creator known for stealable workflows, not vibes. This piece must feel like the best designer in the room made a street-poster that moves. Showreel stakes: if this is weak, you don’t get hired.

DURATION: exactly 20.00 seconds. LOOPABLE: frame 0 == frame last (position, opacity, cursor if any).
FORMAT: one HTML file, 1080×1080 (square, X-native). 60fps.
PALETTE (strict):
- bg # 0A0A0A
- magenta # FF2BD6
- acid green # B8FF00
- white # F5F5F5 only for primary readable type when needed
No other hue…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/techhalla/status/2103411244468498547).

**[See all 8 logo reveals, intros & kinetic type prompts →](categories/intro.md)**

## Explainers & Education

Concepts, recipes, data and how-tos turned into animated lessons.

### Recursion, explained recursively

<a href="https://x.com/emollick/status/2103688362960019567"><img src="https://pbs.twimg.com/amplify_video_thumb/2103687838420131840/img/HC_R1rLMlIn0SvvN.jpg" alt="Recursion, explained recursively" width="360"></a>

[@emollick](https://x.com/emollick/status/2103688362960019567) · 16:9 · 75s · ♥ 554 · `canvas`

Every explanation switches to a different visual style. Self-referential by design.

```text
A video explaining recursion, where every explanation about recursion has a radically different video style, make this self-referential & clever & fast moving.
```

### 30-second business explainer template

<a href="https://x.com/alex_prompter/status/2103499977632997524"><img src="https://pbs.twimg.com/amplify_video_thumb/2103499934280585216/img/Q9KDv9vq9R-KuDaY.jpg" alt="30-second business explainer template" width="360"></a>

[@alex_prompter](https://x.com/alex_prompter/status/2103499977632997524) · 16:9 · 35s · ♥ 371 · `svg` `gsap`

Five fixed scenes: the problem, what you do, three steps, one proof point, your name.

<details>
<summary>Show prompt</summary>

```text
Adopt the role of an expert motion designer. Build a 30-second animated explainer for my business as a single HTML page. 5 scenes. The customer's problem, what I do, how it works in 3 steps, one proof point, and my name at the end. Bold text, smooth transitions, my brand colours. My business [DESCRIBE WHAT YOU SELL, WHO IT'S FOR AND YOUR COLOURS]
```

</details>

### Cocktail recipe, empty glass to finished drink

<a href="https://x.com/Ror_Fly/status/2102853258582880547"><img src="https://pbs.twimg.com/amplify_video_thumb/2102853041246347264/img/R5bqQTGaMotWD0xk.jpg" alt="Cocktail recipe, empty glass to finished drink" width="360"></a>

[@Ror_Fly](https://x.com/Ror_Fly/status/2102853258582880547) · 1:1 · 30s · ♥ 1.0k · `canvas`

Ingredients and measurements appear as they go into the glass.

<details>
<summary>Show prompt</summary>

```text
We're going to try a little test. Do you think you could render a recipe motion graphic animation using javascript or html (w/e you think will produce the best) to show the full recipe from start to finish (empty glass to completed cocktail) - Explainer video style - Showing the recipe ingreidents + measurements as they're going into the cup. Should be a 30s video.
```

</details>

### Whiteboard explainer of a physics concept

<a href="https://x.com/tak3sh8/status/2103667481139441895"><img src="https://pbs.twimg.com/amplify_video_thumb/2103667426126921728/img/_KptIiR-oF8fZ70T.jpg" alt="Whiteboard explainer of a physics concept" width="360"></a>

[@tak3sh8](https://x.com/tak3sh8/status/2103667481139441895) · 16:9 · 308s · ♥ 20 · `canvas` `audio`

A hand-drawn whiteboard lesson, then a second prompt for narration.

```text
Do a quick hand-drawn whiteboard animations explaining what is replica symmetry breaking in the SK model

Prompt 2: build the mp4 version with narration
```

**[See all 10 explainers & education prompts →](categories/explainer.md)**

## Storytelling & Animated Shorts

Short films, trailers and narrative pieces in hand-drawn, paper and anime styles.

### Origami history of civilization

<a href="https://x.com/songkeys/status/2102743212922384673"><img src="https://pbs.twimg.com/amplify_video_thumb/2102741054378360832/img/ItsKEXtZ75UNOn3v.jpg" alt="Origami history of civilization" width="360"></a>

[@songkeys](https://x.com/songkeys/status/2102743212922384673) · 16:9 · 108s · ♥ 423 · `canvas`

Doodle style with almost no text, so viewers from any culture can follow it.

<details>
<summary>Show prompt</summary>

```text
Create a short origami / doodle-style animation showing humanity’s development, progress, and civilization from birth to the present, and ultimately the hatching of AI. AI then gradually develops and advances, eventually hatching today’s Opus 5.5 (you). Style: doodly, cute, warm, strongly narrative, no spoken language (simple text is OK, but don’t use too much explanatory/narrative text, because I want different civilizations to be able to understand it), poetic, moving, high quality.
```

</details>

### Sand animation of 250 years of history

<a href="https://x.com/Michaelzsguo/status/2102592355165782312"><img src="https://pbs.twimg.com/amplify_video_thumb/2102592220888965120/img/wUEZT8hOqEwK1d1r.jpg" alt="Sand animation of 250 years of history" width="360"></a>

[@Michaelzsguo](https://x.com/Michaelzsguo/status/2102592355165782312) · 16:9 · 120s · ♥ 349 · `shader` `canvas`

Asks for music and sound design along with the visuals.

```text
Make a 2-minute sand animation that tells the story of 250 years of U.S. history. Keep it lively, engaging, and tasteful. Add appropriate background music and sound design.
```

### Four seasons outside a train window

<a href="https://x.com/itsolelehmann/status/2103124033365762215"><img src="https://pbs.twimg.com/amplify_video_thumb/2103123980039458816/img/DDPjksrlzGkxSB1K.jpg" alt="Four seasons outside a train window" width="360"></a>

[@itsolelehmann](https://x.com/itsolelehmann/status/2103124033365762215) · 16:9 · 30s · ♥ 264 · `canvas`

One sentence of scene plus a film-director style reference.

```text
4 seasons passing outside a train window, a cozy carriage, a cup of coffee on the table, Grand Budapest Hotel style
```

### Infinite-zoom vintage collage

<a href="https://x.com/koldo2k/status/2103129343253778767"><img src="https://pbs.twimg.com/amplify_video_thumb/2103123431558348801/img/Y0JXLfCRvHmqUs6I.jpg" alt="Infinite-zoom vintage collage" width="360"></a>

[@koldo2k](https://x.com/koldo2k/status/2103129343253778767) · 16:9 · 20s · ♥ 712 · `canvas` `ai-image`

A looping camera flies through objects into new landscapes. The full sequence is listed.

<details>
<summary>Show prompt</summary>

```text
Build a looping "infinite zoom" animation, After Effects style: the camera
travels from landscape to landscape by flying through vintage objects.

LOOK: vintage collage realistic photo landscapes + black & white newspaper
cutout objects (halftone, white paper border, soft shadow). Film grain,
vignette, light flicker.

WORLDS (loop): snowy mountains → pocket watch (swinging on its chain) →
sea cliffs → box camera lens → desert dunes → magnifying glass →
misty lake → hand mirror → back to start.
Extras: floating hat, phone, umbrella, gramophone, key; a 1950s man walking
toward the watch; a whale…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/koldo2k/status/2103129343253778767).

**[See all 10 storytelling & animated shorts prompts →](categories/story.md)**

## Music Videos & Audio-Reactive

Lyric videos, demoscene demos and visuals synced to a track.

### Lyric video for an existing song

<a href="https://x.com/anabology/status/2103534482930491441"><img src="https://pbs.twimg.com/amplify_video_thumb/2103533196721704960/img/ILpk1iqxJsJGiDcK.jpg" alt="Lyric video for an existing song" width="360"></a>

[@anabology](https://x.com/anabology/status/2103534482930491441) · 16:9 · 306s · ♥ 14k · `canvas` `ai-image`

Uses the original audio track and leaves the visual language completely open.

<details>
<summary>Show prompt</summary>

```text
I've included an MP4 file and an original link to a video that is called "Claude Pop." It's a pop song that is about increasing rate of progress and the experience of the singularity approaching.

I want you to independently do an end-to-end complete pass on making an updated version of this video. Use the exact same audio track and think and feel very deeply about what is the best way to visually represent all of the lyrics on screen. You do not need to anchor to the current style, you can do truly anything that you think might best let you visually express yourself, including abstract motion…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/anabology/status/2103534482930491441).

### 1990s demoscene demo

<a href="https://x.com/gandamu_ml/status/2102919394775220530"><img src="https://pbs.twimg.com/amplify_video_thumb/2102918851176595456/img/rVQ6EwIvD6iMHgOA.jpg" alt="1990s demoscene demo" width="360"></a>

[@gandamu_ml](https://x.com/gandamu_ml/status/2102919394775220530) · 16:9 · 383s · ♥ 776 · `threejs` `shader` `canvas` `audio`

Analyze the track first, research demoscene effects, then sync scenes to each section.

<details>
<summary>Show prompt</summary>

```text
I would like you to create a kickass, impressive 1990s style demoscene demo using this S3M track as the music. Prior to getting to work, please see how to best play and analyze the S3M track. This will be important since synchronization of effects and appropriateness of scenes to the musical vibe (and this song does have a variety of sections with different attitude) is essential to a great demoscene demo. Also prior to getting started, please research what kinds of effects, physics, etc. would be good to use in combination. Please use C/C++ -- with appropriate demoscene/embedded/console gamed…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/gandamu_ml/status/2102919394775220530).

### Music video full of references

<a href="https://x.com/doubleunplussed/status/2103697580421181894"><img src="https://pbs.twimg.com/amplify_video_thumb/2103695379518967808/img/alJRSYjzfcpeX99w.jpg" alt="Music video full of references" width="360"></a>

[@doubleunplussed](https://x.com/doubleunplussed/status/2103697580421181894) · 16:9 · 262s · ♥ 176 · `canvas`

Prefers obscure visual references over literal illustrations of the lyrics.

<details>
<summary>Show prompt</summary>

```text
I'd like you to make a music video in a similar style to this one:

https://github.com/JohnHeibel/PDoomVideo

To this song:

https://youtu.be/cobZuBii0Z0?si=ada6wxomeJbo-LRl

Don't feel the need to represent everything in the lyrics literally - feel free to include relevant references to concepts, events, and lore in the video, even if obscure (especially if obscure). E.g. when the lyrics say "when they say they're just predicting tokens...", you might depict a "stochastic parrot". That one's not particularly obscure but is the kind of thing I mean. Instead of depicting like, literally predict…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/doubleunplussed/status/2103697580421181894).

### Full-length music video synced to lyrics

<a href="https://x.com/ParanoidAmerica/status/2103570879619686717"><img src="https://pbs.twimg.com/amplify_video_thumb/2103570572227604480/img/hPLcycf4wajwMDEZ.jpg" alt="Full-length music video synced to lyrics" width="360"></a>

[@ParanoidAmerica](https://x.com/ParanoidAmerica/status/2103570879619686717) · 16:9 · 141s · ♥ 62 · `canvas` `ai-image`

A ballpoint-sketch style and a continuous camera path through the scene.

<details>
<summary>Show prompt</summary>

```text
create a music video for this entire song, check lyrics.txt to sync the visuals to. style should be a mix between monty-python/vox style "postcards in space" mixed with sketchy ballpoint pen style visuals. this needs to look professional. theme of the video is a creepy evil pizza parlor, camera starts outside and works through the inside, through a secret bookshelf door into a basement with untold horrors and pizza sauce all over the place. use whatever tools or methods you need to make this look professional. final export should be an .mp4 of the entire music video.

claude/opus 5.5 detected…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/ParanoidAmerica/status/2103570879619686717).

**[See all 7 music videos & audio-reactive prompts →](categories/music.md)**

## 3D Worlds & Scenes

Three.js and WebGL scenes: historical reconstructions, explorable worlds, particle landscapes.

### San Francisco, the day before the 1906 earthquake

<a href="https://x.com/alexalbert__/status/2102466523164274839"><img src="https://pbs.twimg.com/amplify_video_thumb/2102465460545675264/img/ILlgAuA7ctODSBai.jpg" alt="San Francisco, the day before the 1906 earthquake" width="360"></a>

[@alexalbert__](https://x.com/alexalbert__/status/2102466523164274839) · 16:9 · 8s · ♥ 1.1k · `threejs` `shader` `canvas`

Requires building a source file from maps, film and photos before modeling anything.

<details>
<summary>Show prompt</summary>

```text
Recreate Market Street, San Francisco as it stood on April 17, 1906, the afternoon before the earthquake, in Blender.

Scope: the Ferry Building up Market to Fifth Street, including the Palace Hotel, the Call Building, the Chronicle Building, Lotta's Fountain and the Emporium.

Before modeling anything, build a source file from: the 1899-1905 Sanborn fire insurance maps (footprints, heights, materials, occupants), the Miles Brothers film "A Trip Down Market Street" (April 1906), period photographs from OpenSFHistory, the Library of Congress and the David Rumsey collection, and USGS topography.…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/alexalbert__/status/2102466523164274839).

### Explorable world of surreal architecture

<a href="https://x.com/LexnLin/status/2103194052850241739"><img src="https://pbs.twimg.com/amplify_video_thumb/2103193948256616448/img/3tX0bmaxlmTc38iv.jpg" alt="Explorable world of surreal architecture" width="360"></a>

[@LexnLin](https://x.com/LexnLin/status/2103194052850241739) · 16:9 · 84s · ♥ 619 · `threejs` `shader`

Exploration only, no combat. Focused on composition and atmosphere.

<details>
<summary>Show prompt</summary>

```text
Create a cinematic browser-based 3D world that can be explored freely with a camera, focused on breathtaking landscapes and extraordinary original architecture. Fill the world with huge strange buildings, monumental structures, surreal ruins, cliffs, valleys, forests, water, and unusual ultra-detailed forms that feel mysterious and awe-inspiring. This is not a game and not combat-focused, the goal is pure exploration, atmosphere, composition, and visual discovery. Make the world feel epic, highly detailed, and completely original, with architecture that looks weird, ambitious, and unforgettabl…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/LexnLin/status/2103194052850241739).

### The most detailed pelican on a bicycle

<a href="https://x.com/AxtonLiu/status/2103119648271290566"><img src="https://pbs.twimg.com/amplify_video_thumb/2103119572568313856/img/vedd97bTOFX7F0Qg.jpg" alt="The most detailed pelican on a bicycle" width="360"></a>

[@AxtonLiu](https://x.com/AxtonLiu/status/2103119648271290566) · 16:9 · 38s · ♥ 69 · Chinese · `shader` `webgl`

Takes the classic model benchmark as far as it goes, with any technique and no time limit.

```text
每次一个新的模型出来呢，大家都让它去画 “鹈鹕骑自行车” 来判断这个模型的空间能力，基本上都是用 HTML、SVG 来画动画。当我实在看得都有审美疲劳了，我希望你能画一个最复杂、最精细、最精美的 “鹈鹕骑自行车”的动画视频，你可以用任何的技术，不用着急，画一天都可以。
```

### Particle-illustration beach by time of day

<a href="https://x.com/ishuagra02/status/2102920408743678129"><img src="https://pbs.twimg.com/amplify_video_thumb/2102920337184694272/img/7oyIS-xiio7Eiutr.jpg" alt="Particle-illustration beach by time of day" width="360"></a>

[@ishuagra02](https://x.com/ishuagra02/status/2102920408743678129) · 16:9 · 60s · ♥ 16 · `threejs` `shader` `particles`

Thousands of glowing specks instead of solid fills, with ribbon strokes for motion.

<details>
<summary>Show prompt</summary>

```text
Create a stylistic 3D environment of a busy Santa Monica beach that adapts to the time of day. The art style must be a particle illustration, which uses thousands of tiny glowing specks rather than solid fills with flowing ribbon strokes behind figures to suggest motion.

I had 2-3 more prompts on top of this, but this is a good starting point.

Repo link: https://github.com/ishuagrawal/particle-beach
```

</details>

**[See all 5 3d worlds & scenes prompts →](categories/3d.md)**

## Shaders, Particles & Generative Art

Open-ended visual showpieces: fireworks, fractals, pixel art and mosaics.

### Make people say "wow"

<a href="https://x.com/MiaAI_lab/status/2103837519615774895"><img src="https://pbs.twimg.com/amplify_video_thumb/2103835194968973312/img/vTWjv7AbUxDEVaTy.jpg" alt="Make people say &quot;wow&quot;" width="360"></a>

[@MiaAI_lab](https://x.com/MiaAI_lab/status/2103837519615774895) · 9:16 · 97s · ♥ 1.1k · `shader` `webgl` `canvas`

No subject and no format, just a high bar.

<details>
<summary>Show prompt</summary>

```text
Build me something when people see it, they will say "Wow". Must be immersive, when people see it, they will be stunned by what they see.

This can be a video, or anything else you can think of.

Be creative. Go wild. Dig deep.

No AI slop. Something unique, think outside of the box. Think big. Think amazing. Something no other model done before.

Be proud. Show your best. Don't disappoint.
```

</details>

### Pixel-art wizard casting a spell

<a href="https://x.com/majidmanzarpour/status/2102476258948927543"><img src="https://pbs.twimg.com/amplify_video_thumb/2102476231740399616/img/c0rCI7sJtWi1Gq5Q.jpg" alt="Pixel-art wizard casting a spell" width="360"></a>

[@majidmanzarpour](https://x.com/majidmanzarpour/status/2102476258948927543) · 16:9 · 11s · ♥ 2.6k · `canvas`

Strict pixel rules: a 128×96 logical canvas, integer scaling, no anti-aliasing.

<details>
<summary>Show prompt</summary>

```text
Create a single self-contained HTML file that renders an animated pixel art wizard casting a spell, using vanilla JavaScript and Canvas 2D. No external assets, libraries, or network requests.

RENDERING
- Draw everything to an offscreen canvas at a fixed logical resolution of 128x96, then blit to a fullscreen display canvas scaled by the largest integer factor that fits the window, centered, with imageSmoothingEnabled = false and CSS image-rendering: pixelated.
- All drawing snaps to integer coordinates on the logical canvas. No sub-pixel positions, anti-aliasing, gradients, or shadowBlur.
- F…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/majidmanzarpour/status/2102476258948927543).

### The most impressive fireworks show

<a href="https://x.com/FornYapayZeka/status/2102888241443795431"><img src="https://pbs.twimg.com/amplify_video_thumb/2102871387123724288/img/VWZ6gVvt5QbO7k5x.jpg" alt="The most impressive fireworks show" width="360"></a>

[@FornYapayZeka](https://x.com/FornYapayZeka/status/2102888241443795431) · 16:9 · 38s · ♥ 45 · Turkish · `threejs` `shader` `particles`

Asks for rhythm, depth and a finale instead of many identical bursts, and a replayable ending.

<details>
<summary>Show prompt</summary>

```text
Yapabileceğin en etkileyici havai fişek veya ışıklı parçacık gösterisini üret. Ortamı ve sanat yönünü sen seç. Tek tip küçük patlamaları çoğaltmak yerine ritmi, derinliği, ışığın çevreye etkisini ve unutulmaz bir final anını tasarla. Gösteri canlı çalışsın; kullanıcı finali tekrar oynatabilsin.

Yaratıcı seçimler senin: sahne, sanat yönü, kamera, mekanik, teknoloji ve etkileşimi önceden belirlenmiş sıradan kalıplara sıkıştırma. İlk akla gelen sıradan web demosuyla yetinme: önce kendi alanında birkaç fikri kısaca tart, videoda en güçlü görünecek özgün olanı seç, sonra onu çalışan bir ürüne dönü…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/FornYapayZeka/status/2102888241443795431).

### Paper-craft fractal visualizer

<a href="https://x.com/jrayon/status/2102861376184054015"><img src="https://pbs.twimg.com/amplify_video_thumb/2102851696594464768/img/HIPwBwo6NjVXcIYB.jpg" alt="Paper-craft fractal visualizer" width="360"></a>

[@jrayon](https://x.com/jrayon/status/2102861376184054015) · 16:9 · 35s · ♥ 1 · `shader` `webgl` `canvas`

Mandelbrot sets that look handmade from paper and cardboard, with a preview before coding.

<details>
<summary>Show prompt</summary>

```text
build an art project which is a fractal visulizer (mandelbrot, etc), but the styles look like handcrafted with paper, cardboard and such. Add post-procesing so it looks cinematic. Also want to use beautitful elaborated animations and transitions and a beautiful UX. Plan it first, show me a preview before coding everything
```

</details>

**[See all 6 shaders, particles & generative art prompts →](categories/generative.md)**

## Games & Interactive

Playable prototypes and game-style reward moments built in the browser.

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

**[See all 9 games & interactive prompts →](categories/games.md)**

## Starter templates

Short, reusable starting points with a suggested structure. Swap in your own product, topic or brand.

### Motion showreel

16:9 · 15s · Show off: 4–6 techniques and a title card.

```text
A dynamic 15-second motion graphics video that shows what an incredible motion designer you are, like it's your showreel for a résumé. Go all out.
```

**Structure that works:** a fast sequence of 4–6 visually distinct ideas, each using a different technique, tied together with transitions and ending on a title card.

### Product launch

16:9 · 30s · Hook, product reveal, three features, call to action.

```text
Launch video for Lumen, an app that turns meeting notes into tasks. Headline: "Meetings that do the work." Features: auto-assigned tasks, Slack sync, weekly digest. End with lumen.app
```

**Structure that works:** hook in the first 10%, product name reveal, one beat per feature with a simple UI-like illustration, end card with the call to action held for the last 15%.

### App walkthrough

16:9 · 30s · A cursor clicks through your product's UI.

```text
A walkthrough of Northwind, a CRM for small agencies: open the dashboard, click a client, drag a deal to "Won", watch revenue update. End with "Northwind — your pipeline, finally calm."
```

**Structure that works:** recreate a clean, believable app UI with canvas shapes (sidebar, header, cards, lists, charts); an animated cursor performs 3–4 actions with clicks and state changes; zoom in on the key moment; end with the product name and tagline.

### Social ad 9:16

9:16 · 15s · Vertical, punchy, hook in the first second.

```text
A punchy vertical ad for Brewly cold brew: hook in the first second, then "50% less sugar, 100% the kick", end with "Try it at brewly.co"
```

**Structure that works:** a hook in the first second, 3–4 quick beats with big centred type, a final call-to-action card; designed for a phone screen.

### Logo reveal

16:9 · 10s · An abstract build-up that resolves into your wordmark.

```text
A premium logo reveal for NORTHWIND with the tagline "Built for the long haul."
```

**Structure that works:** abstract shapes and light build tension, converge into the wordmark, then the tagline; hold the final lockup for the last 25%.

### Explainer

16:9 · 30s · A concept in clear, animated steps.

```text
Explain how compound interest works in three steps: you invest, your returns earn returns, growth speeds up over time.
```

**Structure that works:** title card, then one numbered step per scene with a simple diagram that builds up, then a one-line summary.

### Data story

16:9 · 15s · Count-ups and self-drawing charts.

```text
Animate our year in numbers: 12,480 new users, revenue up 214%, 99.98% uptime. Theme: celebratory but credible.
```

**Structure that works:** one metric per beat using count-ups and self-drawing charts, then a closing takeaway line.

### 3D world

16:9 · 15s · A cinematic camera move through a place or era.

```text
A cinematic flight over a 1920s harbour town at golden hour: fog on the water, warm window lights coming on, ending on the title "Harbourlight".
```

**Structure that works:** a Three.js (or carefully projected canvas) 3D scene with atmospheric lighting and fog; 2–3 continuous camera moves (dolly, crane, orbit) instead of cuts; a restrained title overlay at the end.

### Game moment

16:9 · 15s · Card reveals, level-ups and trailer beats.

```text
A gacha reveal for my mobile game Star Summon: a glowing pack bursts open, an SSR card for the hero Noctis flips over, stats count up, then the logo.
```

**Structure that works:** anticipation (charging glow, shaking), an explosive reveal with light rays and particles, the reward shown clearly with its stats or rarity, then the game logo.

### Kinetic quote

9:16 · 15s · A quote or lyric animated word by word.

```text
Animate this quote word by word: "Make it work, make it right, make it fast." — Kent Beck
```

**Structure that works:** words or short phrases appear in rhythm, with emphasis words given bigger type and a distinct motion, the attribution last.

### Recipe & how-to

9:16 · 30s · Ingredients, steps and timers, like a recipe card.

```text
A recipe card for 10-minute garlic noodles: ingredients appear one by one, then 4 steps with timers, ending with the finished bowl.
```

**Structure that works:** title, an ingredient list that builds up, numbered steps with simple illustrations and timers, a finished-result card.

## Contributing

Found a great Opus 5.5 video prompt? Open a pull request or an issue. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Credits

Every prompt belongs to its author and links back to the original post. If you wrote one of these and want it changed or removed, [open an issue](../../issues) and it will be handled quickly.

Browse all 470+ community videos with filters at [opus6.video/examples](https://opus6.video/examples?utm_source=github&utm_medium=referral&utm_campaign=awesome-opus-prompts).

This list is independent and not affiliated with or endorsed by Anthropic. Claude and Opus are trademarks of Anthropic, PBC.
