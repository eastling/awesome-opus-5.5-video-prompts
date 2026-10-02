// Renders the GitHub Pages gallery. Every card is in the HTML, so the page reads fine without JavaScript;
// the script only adds filtering, search, copy and expand.
const PAGE_URL = "https://eastling.github.io/awesome-opus-5.5-video-prompts/";
const REPO_URL = "https://github.com/eastling/awesome-opus-5.5-video-prompts";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const likes = (n) => (n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : String(n));
const searchText = (p) => [p.title, p.note, p.prompt, p.author, p.authorName, p.tags.join(" ")].join(" ").toLowerCase();

const card = (p) => `<article class="card" data-cat="${p.category}" data-fmt="${p.format}" data-q="${esc(searchText(p))}">
  <a class="thumb fmt-${p.format.replace(":", "x")}" href="${esc(p.postUrl)}" target="_blank" rel="noopener" aria-label="Watch “${esc(p.title)}” on X">
    <img src="${esc(p.poster)}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <span class="badge mono">${p.format} · ${p.duration}s</span>
    <span class="watch">Watch on X ↗</span>
  </a>
  <div class="body">
    <h3>${esc(p.title)}</h3>
    <p class="by"><a href="${esc(p.postUrl)}" target="_blank" rel="noopener">@${esc(p.author)}</a><span>♥ ${likes(p.likes)}</span>${p.lang !== "English" ? `<span>${esc(p.lang)}</span>` : ""}</p>
    <p class="note">${esc(p.note)}</p>
    <div class="prompt"><pre><code>${esc(p.prompt)}</code></pre></div>
    ${p.truncated ? `<p class="excerpt">Excerpt. <a href="${esc(p.postUrl)}" target="_blank" rel="noopener">Full prompt on X</a></p>` : ""}
    <div class="actions">
      <button type="button" class="btn small" data-copy>Copy prompt</button>
      <button type="button" class="btn small ghost" data-expand hidden>Expand</button>
      <span class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</span>
    </div>
  </div>
</article>`;

const template = (t) => `<article class="tpl">
  <p class="mono tpl-meta">${t.format} · ${t.duration}s</p>
  <h3>${esc(t.title)}</h3>
  <p class="note">${esc(t.blurb)}</p>
  <div class="prompt open"><pre><code>${esc(t.prompt)}</code></pre></div>
  <p class="structure"><b>Structure that works:</b> ${esc(t.structure)}.</p>
  <div class="actions"><button type="button" class="btn small" data-copy>Copy prompt</button></div>
</article>`;

export function renderPage({ categories, templates, prompts, tips, utm }) {
  const count = prompts.length;
  const title = `Opus 5.5 Video Prompts: ${count} Curated Examples for Motion Graphics, Launch Videos, 3D and Games`;
  const description = `${count} hand-picked prompts people used to make videos with Claude Opus 5.5, each with a preview, the original post and a note on why it works. Copy one and adapt it.`;
  const og = prompts[0].poster;
  const byCat = (id) => prompts.filter((p) => p.category === id);
  const jsonLd = {
    "@context": "https://schema.org", "@type": "CollectionPage", name: "Awesome Opus 5.5 Video Prompts", url: PAGE_URL, description,
    mainEntity: { "@type": "ItemList", numberOfItems: count, itemListElement: prompts.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: p.postUrl })) },
  };

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${PAGE_URL}">
<meta property="og:type" content="website">
<meta property="og:title" content="Awesome Opus 5.5 Video Prompts">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${PAGE_URL}">
<meta property="og:image" content="${esc(og)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0b0b0f">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='10 10 44 44'%3E%3Ccircle cx='32' cy='32' r='17' fill='none' stroke='%23f4efe6' stroke-width='6'/%3E%3Crect x='40' y='40' width='12' height='12' rx='2' fill='%23FF5A36'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>
<style>
:root {
  --bg: #0b0b0f; --bg-2: #131318; --panel: #17171d; --code: #101015;
  --line: rgba(244,239,230,.1); --line-2: rgba(244,239,230,.2);
  --text: #f4efe6; --text-2: rgba(244,239,230,.68); --text-3: rgba(244,239,230,.45);
  --coral: #ff5a36; --coral-2: #ff7a5c; --radius: 10px;
  --display: "Inter Tight", system-ui, sans-serif; --mono: "JetBrains Mono", ui-monospace, monospace;
  color-scheme: dark;
}
* { box-sizing: border-box; }
[hidden] { display: none !important; }
html { scroll-behavior: smooth; scroll-padding-top: 150px; }
body { margin: 0; background: var(--bg); color: var(--text); font: 16px/1.6 var(--display); -webkit-font-smoothing: antialiased; }
a { color: inherit; }
img { display: block; max-width: 100%; }
button, input { font: inherit; color: inherit; }
:focus-visible { outline: 2px solid var(--coral); outline-offset: 2px; }
.wrap { width: min(1240px, 100% - 32px); margin-inline: auto; }
.mono { font-family: var(--mono); letter-spacing: .06em; text-transform: uppercase; font-size: 12px; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 44px; padding: 0 18px; border-radius: var(--radius);
  border: 1px solid var(--line-2); background: transparent; cursor: pointer; font-weight: 600; font-size: 15px; text-decoration: none; white-space: nowrap; }
.btn:hover { border-color: var(--text-3); }
.btn.primary { background: var(--coral); border-color: var(--coral); color: #140804; }
.btn.primary:hover { background: var(--coral-2); }
.btn.small { height: 32px; padding: 0 12px; font-size: 13px; }
.btn.ghost { border-color: transparent; color: var(--text-2); }
.btn.ghost:hover { color: var(--text); }
.btn.done { border-color: var(--coral); color: var(--coral); }

/* header + hero */
.top { border-bottom: 1px solid var(--line); }
.top .wrap { display: flex; align-items: center; gap: 16px; height: 60px; }
.brand { display: inline-flex; align-items: center; gap: 9px; font-weight: 800; letter-spacing: -.01em; text-decoration: none; }
.brand svg { width: 24px; height: 24px; }
.top nav { margin-left: auto; display: flex; gap: 20px; font-size: 14px; white-space: nowrap; }
.brand { white-space: nowrap; }
.top nav a { color: var(--text-2); text-decoration: none; }
.top nav a:hover { color: var(--text); }
.hero { padding: 64px 0 40px; max-width: 860px; }
.eyebrow { color: var(--coral); }
.hero h1 { font-size: clamp(40px, 7vw, 76px); line-height: 1; letter-spacing: -.04em; font-weight: 900; margin: 14px 0 20px; }
.hero h1 span { color: var(--coral); }
.lede { font-size: 19px; color: var(--text-2); max-width: 36em; margin: 0 0 28px; }
.cta { display: flex; flex-wrap: wrap; gap: 12px; }
.stats { display: flex; flex-wrap: wrap; gap: 28px; margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--line); }
.stats b { display: block; font-size: 28px; font-weight: 800; letter-spacing: -.02em; line-height: 1.1; }
.stats span { color: var(--text-3); font-size: 14px; }

/* toolbar */
.bar { position: sticky; top: 0; z-index: 10; background: rgba(11,11,15,.9); backdrop-filter: blur(12px); border-block: 1px solid var(--line); }
.bar .wrap { display: grid; gap: 12px; padding: 14px 0; }
.bar-row { display: flex; gap: 12px; align-items: center; }
.search { flex: 1; min-width: 0; height: 40px; padding: 0 14px; border-radius: var(--radius); border: 1px solid var(--line-2); background: var(--bg-2); }
.search::placeholder { color: var(--text-3); }
.seg { display: flex; border: 1px solid var(--line-2); border-radius: var(--radius); overflow: hidden; flex: none; }
.seg button { border: 0; background: none; height: 38px; padding: 0 12px; cursor: pointer; color: var(--text-2); font-size: 13px; font-family: var(--mono); }
.seg button[aria-pressed="true"] { background: var(--text); color: var(--bg); }
.chips { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; padding-bottom: 2px; }
.chips::-webkit-scrollbar { display: none; }
.chip { flex: none; height: 32px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--line-2); background: none; cursor: pointer; font-size: 13px; color: var(--text-2); }
.chip small { color: var(--text-3); margin-left: 4px; font-family: var(--mono); }
.chip[aria-pressed="true"] { background: var(--coral); border-color: var(--coral); color: #140804; }
.chip[aria-pressed="true"] small { color: rgba(20,8,4,.6); }

/* gallery */
.cat { padding: 48px 0 8px; }
.cat-head { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; }
.cat-head h2 { font-size: clamp(24px, 3vw, 32px); letter-spacing: -.02em; margin: 0; font-weight: 800; }
.cat-head .n { color: var(--text-3); font-family: var(--mono); font-size: 13px; }
.cat-head p { flex-basis: 100%; margin: 0; color: var(--text-2); }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(340px, 100%), 1fr)); gap: 20px; }
.card { background: var(--panel); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; display: flex; flex-direction: column; }
.thumb { position: relative; display: block; aspect-ratio: 16 / 10; background: #050507; overflow: hidden; }
.thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
.thumb.fmt-9x16 img, .thumb.fmt-1x1 img { object-fit: contain; }
.thumb:hover img { transform: scale(1.03); }
.badge { position: absolute; left: 10px; top: 10px; padding: 3px 8px; border-radius: 6px; background: rgba(11,11,15,.75); color: var(--text); font-size: 11px; }
.watch { position: absolute; right: 10px; bottom: 10px; padding: 5px 10px; border-radius: 999px; background: var(--text); color: var(--bg); font-size: 13px; font-weight: 600; opacity: 0; transform: translateY(4px); transition: .2s ease; }
.thumb:hover .watch, .thumb:focus-visible .watch { opacity: 1; transform: none; }
.body { padding: 18px 18px 16px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.body h3 { margin: 0; font-size: 19px; line-height: 1.25; letter-spacing: -.01em; font-weight: 700; }
.by { margin: 0; display: flex; flex-wrap: wrap; gap: 12px; font-size: 14px; color: var(--text-3); }
.by a { color: var(--text-2); text-decoration: none; }
.by a:hover { color: var(--coral); }
.note { margin: 0; color: var(--text-2); font-size: 15px; }
.prompt { position: relative; margin-top: auto; }
.prompt pre { margin: 0; padding: 14px; max-height: 10.5em; overflow: hidden; background: var(--code); border: 1px solid var(--line); border-radius: var(--radius);
  font: 13px/1.6 var(--mono); white-space: pre-wrap; overflow-wrap: anywhere; color: var(--text); }
.prompt:not(.open).clipped::after { content: ""; position: absolute; inset: auto 1px 1px; height: 3.5em; border-radius: 0 0 var(--radius) var(--radius); background: linear-gradient(transparent, var(--code)); pointer-events: none; }
.prompt.open pre { max-height: none; }
.excerpt { margin: 0; font-size: 13px; color: var(--text-3); }
.excerpt a { color: var(--text-2); }
.actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.tags { margin-left: auto; display: flex; gap: 6px; flex-wrap: wrap; }
.tags span { font: 11px var(--mono); color: var(--text-3); border: 1px solid var(--line); border-radius: 6px; padding: 2px 6px; }
.empty { padding: 80px 0; text-align: center; color: var(--text-2); }

/* tips + templates + footer */
.section { padding: 80px 0 0; }
.section > h2 { font-size: clamp(28px, 4vw, 40px); letter-spacing: -.03em; margin: 0 0 12px; font-weight: 800; }
.section > p { color: var(--text-2); max-width: 44em; margin: 0 0 28px; }
.tips { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; }
.tip { background: var(--bg); padding: 24px; }
.tip .mono { color: var(--coral); }
.tip h3 { margin: 8px 0 6px; font-size: 18px; }
.tip p { margin: 0; color: var(--text-2); font-size: 15px; }
.tpls { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(360px, 100%), 1fr)); gap: 20px; }
.tpl { border: 1px solid var(--line); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 10px; }
.tpl h3 { margin: 0; font-size: 19px; }
.tpl-meta { margin: 0; color: var(--text-3); }
.structure { margin: 0; font-size: 14px; color: var(--text-2); }
.structure b { color: var(--text); }
footer { margin-top: 96px; border-top: 1px solid var(--line); padding: 36px 0 56px; color: var(--text-3); font-size: 14px; }
footer p { margin: 0 0 8px; max-width: 60em; }
footer a { color: var(--text-2); }

@media (max-width: 720px) {
  .top nav a:not(.gh) { display: none; }
  .brand .wide { display: none; }
  .bar { position: static; }
  .hero { padding: 40px 0 28px; }
  .lede { font-size: 17px; }
  .bar-row { flex-wrap: wrap; }
  .seg { width: 100%; }
  .seg button { flex: 1; }
  html { scroll-padding-top: 16px; }
}
@media (prefers-reduced-motion: reduce) { * { transition: none !important; scroll-behavior: auto !important; } }
</style>
</head>
<body>
<header class="top"><div class="wrap">
  <a class="brand" href="${PAGE_URL}"><svg viewBox="10 10 44 44" aria-hidden="true"><circle cx="32" cy="32" r="17" fill="none" stroke="currentColor" stroke-width="6"/><rect x="40" y="40" width="12" height="12" rx="2" fill="#FF5A36"/></svg><span><span class="wide">Awesome </span>Opus 5.5 Video Prompts</span></a>
  <nav><a href="#gallery">Prompts</a><a href="#tips">Tips</a><a href="#templates">Templates</a><a class="gh" href="${REPO_URL}">GitHub ↗</a></nav>
</div></header>

<main>
<section class="wrap hero">
  <p class="mono eyebrow">Community prompt library</p>
  <h1>Opus 5.5 video prompts<span>.</span></h1>
  <p class="lede">${count} prompts people used to make videos with Claude Opus 5.5, picked from 470+ shared on X. Each links to the video it made, with a note on what makes it work. Copy one, swap in your product, and run it.</p>
  <div class="cta">
    <a class="btn primary" href="${REPO_URL}">★ Star on GitHub</a>
    <a class="btn" href="${utm("/")}">Make one in your browser at opus6.video</a>
  </div>
  <div class="stats">
    <div><b>${count}</b><span>curated prompts</span></div>
    <div><b>${categories.length}</b><span>categories</span></div>
    <div><b>${templates.length}</b><span>starter templates</span></div>
    <div><b>${likes(prompts.reduce((n, p) => n + p.likes, 0))}</b><span>likes on the originals</span></div>
  </div>
</section>

<div class="bar" id="gallery"><div class="wrap">
  <div class="bar-row">
    <input class="search" type="search" placeholder="Search prompts, e.g. logo, three.js, 9:16, music" aria-label="Search prompts" data-search>
    <div class="seg" role="group" aria-label="Format">
      <button type="button" data-fmt="all" aria-pressed="true">All</button><button type="button" data-fmt="16:9" aria-pressed="false">16:9</button><button type="button" data-fmt="9:16" aria-pressed="false">9:16</button><button type="button" data-fmt="1:1" aria-pressed="false">1:1</button>
    </div>
  </div>
  <div class="chips" role="group" aria-label="Category">
    <button type="button" class="chip" data-cat="all" aria-pressed="true">All<small>${count}</small></button>
    ${categories.map((c) => `<button type="button" class="chip" data-cat="${c.id}" aria-pressed="false">${esc(c.name)}<small>${byCat(c.id).length}</small></button>`).join("\n    ")}
  </div>
</div></div>

<div class="wrap">
${categories.map((c) => `<section class="cat" id="${c.id}" data-section="${c.id}">
  <div class="cat-head"><h2>${esc(c.name)}</h2><span class="n">${byCat(c.id).length} prompts</span><p>${esc(c.blurb)}</p></div>
  <div class="grid">
${byCat(c.id).map(card).join("\n")}
  </div>
</section>`).join("\n")}
  <p class="empty" data-empty hidden>No prompts match. Try another word or clear the filters.</p>

  <section class="section" id="tips">
    <h2>What the best prompts have in common</h2>
    <p>Opus 5.5 doesn't generate video pixels. It writes code (Canvas, SVG, GSAP, Three.js, shaders) that draws every frame, and a headless browser plus ffmpeg turns those frames into an MP4. So the strongest prompts read like a creative brief and an engineering spec at once.</p>
    <div class="tips">
${tips.map(([h, t], i) => `      <div class="tip"><span class="mono">${String(i + 1).padStart(2, "0")}</span><h3>${esc(h.replace(/\.$/, ""))}</h3><p>${esc(t)}</p></div>`).join("\n")}
    </div>
  </section>

  <section class="section" id="templates">
    <h2>Starter templates</h2>
    <p>Short, reusable starting points with a structure that works. Swap in your own product, topic or brand.</p>
    <div class="tpls">
${templates.map(template).join("\n")}
    </div>
  </section>
</div>
</main>

<footer><div class="wrap">
  <p>Every prompt belongs to its author and links to the original post. Wrote one of these and want it changed or removed? <a href="${REPO_URL}/issues">Open an issue</a>. Want to add one? <a href="${REPO_URL}/blob/main/CONTRIBUTING.md">Send a pull request</a>.</p>
  <p>Browse all 470+ community videos with filters at <a href="${utm("/examples")}">opus6.video/examples</a>.</p>
  <p>Independent project, not affiliated with or endorsed by Anthropic. Claude and Opus are trademarks of Anthropic, PBC. List and notes are CC0.</p>
</div></footer>

<script>
(() => {
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const cards = $$(".card"), sections = $$("[data-section]"), empty = document.querySelector("[data-empty]");
  const search = document.querySelector("[data-search]");
  const state = { cat: "all", fmt: "all", q: "" };
  const params = new URLSearchParams(location.search);
  if (params.get("cat") && document.querySelector('.chip[data-cat="' + CSS.escape(params.get("cat")) + '"]')) state.cat = params.get("cat");

  const apply = () => {
    const words = state.q.toLowerCase().split(/\\s+/).filter(Boolean);
    let shown = 0;
    for (const c of cards) {
      const ok = (state.cat === "all" || c.dataset.cat === state.cat) && (state.fmt === "all" || c.dataset.fmt === state.fmt) && words.every((w) => c.dataset.q.includes(w));
      c.hidden = !ok; if (ok) shown++;
    }
    for (const s of sections) s.hidden = !s.querySelector(".card:not([hidden])");
    empty.hidden = shown > 0;
    for (const b of $$(".chip")) b.setAttribute("aria-pressed", String(b.dataset.cat === state.cat));
    for (const b of $$(".seg button")) b.setAttribute("aria-pressed", String(b.dataset.fmt === state.fmt));
    const url = new URL(location.href);
    state.cat === "all" ? url.searchParams.delete("cat") : url.searchParams.set("cat", state.cat);
    history.replaceState(null, "", url);
  };
  const toGallery = () => { const top = document.getElementById("gallery"); if (top.getBoundingClientRect().top < 0) top.scrollIntoView(); };

  for (const b of $$(".chip")) b.addEventListener("click", () => { state.cat = b.dataset.cat; apply(); toGallery(); });
  for (const b of $$(".seg button")) b.addEventListener("click", () => { state.fmt = b.dataset.fmt; apply(); });
  search.addEventListener("input", () => { state.q = search.value; apply(); });

  // Long prompts are clipped with an Expand toggle.
  for (const box of $$(".card .prompt")) {
    const pre = box.querySelector("pre");
    if (pre.scrollHeight <= pre.clientHeight + 4) continue;
    box.classList.add("clipped");
    const btn = box.parentElement.querySelector("[data-expand]");
    btn.hidden = false;
    btn.addEventListener("click", () => { const open = box.classList.toggle("open"); btn.textContent = open ? "Collapse" : "Expand"; });
  }

  const copy = async (text) => {
    try { await navigator.clipboard.writeText(text); return true; } catch {}
    const ta = Object.assign(document.createElement("textarea"), { value: text });
    ta.style.cssText = "position:fixed;opacity:0"; document.body.append(ta); ta.select();
    const ok = document.execCommand("copy"); ta.remove(); return ok;
  };
  for (const b of $$("[data-copy]")) b.addEventListener("click", async () => {
    const ok = await copy(b.closest(".card, .tpl").querySelector("code").textContent);
    b.textContent = ok ? "Copied" : "Copy failed"; b.classList.toggle("done", ok);
    setTimeout(() => { b.textContent = "Copy prompt"; b.classList.remove("done"); }, 1600);
  });

  apply();
})();
</script>
</body>
</html>
`;
}
