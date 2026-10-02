# Contributing

Thanks for helping grow the list. A good entry is a prompt that produced a video worth watching, made with Claude Opus 5.5.

## Adding a prompt

1. Add an object to `prompts` in [`data/prompts.json`](data/prompts.json):

   ```json
   {
     "id": "<post id>",
     "category": "launch",
     "title": "Short, descriptive title",
     "note": "One sentence on what makes this prompt work.",
     "prompt": "The exact prompt text",
     "truncated": false,
     "lang": "English",
     "author": "<handle>",
     "authorName": "<display name>",
     "postUrl": "https://x.com/<handle>/status/<post id>",
     "poster": "<preview image URL>",
     "likes": 0,
     "format": "16:9",
     "duration": 15,
     "tags": ["canvas", "gsap"],
     "date": "2026-10-01"
   }
   ```

   `category` must be one of the ids in `categories`. Common `tags`: `canvas`, `svg`, `gsap`, `css`, `threejs`, `shader`, `webgl`, `particles`, `audio`, `pixel`, `physics`, `playable`.

2. Run `node scripts/build.mjs` to regenerate `README.md` and `categories/*.md`.
3. Open a pull request.

## Guidelines

- The video must be public and made with Opus 5.5.
- Use the author's original prompt text, unedited, and link to the original post.
- If you are not the author, credit them. If an author asks for removal, the entry is removed.
- No near-duplicates of an existing entry unless the change is meaningful (a new structure, constraint or technique).
- Keep the note to one sentence about the prompt itself, not the video.
