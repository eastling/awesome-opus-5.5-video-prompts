// Generates README.md and categories/*.md from data/prompts.json.
// Usage: node scripts/build.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const root = new URL("../", import.meta.url);
const { categories, templates, prompts } = JSON.parse(readFileSync(new URL("data/prompts.json", root), "utf8"));

const SITE = "https://opus6.video";
const utm = (path = "/") => `${SITE}${path}?utm_source=github&utm_medium=referral&utm_campaign=awesome-opus-prompts`;
const FEATURED = 4; // entries per category shown in the README; the rest live on the category page
const INLINE_MAX = 320; // longer prompts are collapsed

// GitHub's heading anchors: lowercase, punctuation dropped, spaces to hyphens.
const anchor = (s) => s.toLowerCase().replace(/[^\p{L}\p{N} -]/gu, "").replace(/ /g, "-");
const likes = (n) => (n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : String(n));
const fence = (s) => (s.includes("```") ? "````" : "```");
const code = (s) => `${fence(s)}text\n${s}\n${fence(s)}`;
const byCat = (id) => prompts.filter((p) => p.category === id);

const entry = (p) => {
  const lang = p.lang !== "English" ? ` · ${p.lang}` : "";
  const tags = p.tags.map((t) => `\`${t}\``).join(" ");
  const body = p.prompt.length > INLINE_MAX
    ? `<details>\n<summary>Show prompt</summary>\n\n${code(p.prompt)}\n\n</details>`
    : code(p.prompt);
  const excerpt = p.truncated ? `\n\n> Excerpt. The full prompt is in the [original post](${p.postUrl}).` : "";
  return `### ${p.title}

<a href="${p.postUrl}"><img src="${p.poster}" alt="${p.title.replace(/"/g, "&quot;")}" width="360"></a>

[@${p.author}](${p.postUrl}) · ${p.format} · ${p.duration}s · ♥ ${likes(p.likes)}${lang} · ${tags}

${p.note}

${body}${excerpt}
`;
};

const template = (t) => `### ${t.title}

${t.format} · ${t.duration}s · ${t.blurb}

${code(t.prompt)}

**Structure that works:** ${t.structure}.
`;

const tips = `## What the best prompts have in common

- **Collect assets first.** Several of the most-liked prompts open with an "Ask me for:" list (product name, UI states, a royalty-free song) so the model has real material before it writes a frame.
- **Ban the AI tells.** Name what you don't want: corner labels, fake UI frames, particle bursts, lens flares, camera shake.
- **Give timing in numbers.** Seconds per beat, camera moves of 1.5–3 s, a hook in the first second, the end card held for the last 15%.
- **Make rendering deterministic.** "Every frame is a pure function of time" or "one draw(t) function" lets the video render frame by frame without dropped or jittery frames.
- **Sync to sound.** Ask for cuts on the beat, or for a soundtrack synthesized in code so timing is exact.
- **Set the bar with a reference.** "Like a showreel for a résumé", "like it won an Emmy for main title design", "Apple keynote".
`;

const howItWorks = `## How Opus 5.5 makes videos

Claude Opus 5.5 does not generate video pixels the way diffusion models do. It writes code (HTML, Canvas, SVG, GSAP, Three.js or WebGL shaders) that draws every frame. A headless browser such as Playwright captures the frames, and ffmpeg encodes them into an MP4, often with music or sound made in code. That is why these prompts read like creative briefs and engineering specs at the same time.

Want to try one without setting anything up? [opus6.video](${utm()}) turns a prompt into a rendered video in the browser.
`;

const intro = (count) => `# Awesome Opus 5.5 Video Prompts [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> ${count} hand-picked prompts people used to make videos with Claude Opus 5.5: motion graphics showreels, product launch films, UI animations, explainers, music videos, 3D scenes and games. Each one has a preview, a link to the original post, and a note on what makes it work.
`;

const footer = `## Contributing

Found a great Opus 5.5 video prompt? Open a pull request or an issue. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Credits

Every prompt belongs to its author and links back to the original post. If you wrote one of these and want it changed or removed, [open an issue](../../issues) and it will be handled quickly.

Browse all 470+ community videos with filters at [opus6.video/examples](${utm("/examples")}).

This list is independent and not affiliated with or endorsed by Anthropic. Claude and Opus are trademarks of Anthropic, PBC.
`;

// README
const toc = [
  "- [How Opus 5.5 makes videos](#how-opus-55-makes-videos)",
  "- [What the best prompts have in common](#what-the-best-prompts-have-in-common)",
  ...categories.map((c) => `- [${c.name}](#${anchor(c.name)}) (${byCat(c.id).length})`),
  "- [Starter templates](#starter-templates)",
  "- [Contributing](#contributing)",
].join("\n");

const sections = categories.map((c) => {
  const list = byCat(c.id);
  const more = list.length > FEATURED
    ? `\n**[See all ${list.length} ${c.name.toLowerCase()} prompts →](categories/${c.id}.md)**\n`
    : "";
  return `## ${c.name}\n\n${c.blurb}\n\n${list.slice(0, FEATURED).map(entry).join("\n")}${more}`;
});

const readme = [
  intro(prompts.length),
  "## Contents\n\n" + toc + "\n",
  howItWorks,
  tips,
  ...sections,
  `## Starter templates\n\nShort, reusable starting points with a suggested structure. Swap in your own product, topic or brand.\n\n${templates.map(template).join("\n")}`,
  footer,
].join("\n");
writeFileSync(new URL("README.md", root), readme);

// One page per category with every entry.
mkdirSync(new URL("categories/", root), { recursive: true });
for (const c of categories) {
  const list = byCat(c.id);
  const page = `# ${c.name}: Opus 5.5 Video Prompts

${c.blurb} ${list.length} prompts, each with a preview and the original post.

[← Back to the full list](../README.md)

${list.map(entry).join("\n")}
[← Back to the full list](../README.md)
`;
  writeFileSync(new URL(`categories/${c.id}.md`, root), page);
}

console.log(`README.md: ${prompts.length} prompts, ${templates.length} templates; ${categories.length} category pages`);
