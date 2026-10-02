# Music Videos & Audio-Reactive: Opus 5.5 Video Prompts

Lyric videos, demoscene demos and visuals synced to a track. 7 prompts, each with a preview and the original post.

[← Back to the full list](../README.md)

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

### Psychedelic glitch MV cut on every beat

<a href="https://x.com/pound75423/status/2103722556918464968"><img src="https://pbs.twimg.com/amplify_video_thumb/2103721284228263936/img/WjA7dDuNXQLo_WEK.jpg" alt="Psychedelic glitch MV cut on every beat" width="360"></a>

[@pound75423](https://x.com/pound75423/status/2103722556918464968) · 16:9 · 64s · ♥ 3 · Japanese · `canvas` `css`

Detailed editing rules: BPM analysis, one cut per beat, effect strength per song section.

<details>
<summary>Show prompt</summary>

```text
添付した楽曲とキャラクター画像を使って、「サイケデリック・グリッチ系」のアニメーション MV を作ってください。

【制作方法】
HTML Canvas でアニメーションを書き、Playwright で 1 フレームずつキャプチャし、ffmpeg で音声と合成して MP4 を出力してください（1280×720、30fps、30MB 以内）。
AI 動画生成は使わず、すべてプログラムによるアニメーションで作ってください。

【前処理】
1. キャラクター画像はすべて背景を透過し、白いステッカー風の縁取りと薄い影をつける。
2. 楽曲を解析する：BPM、最初の拍の位置、各小節（4 拍）の頭、
   各セクションのエネルギーの高低（イントロ／A メロ／サビ／落ちる部分）を求める。

【編集ルール】
- 1 拍ごとにカットを切り替える。カットはランダムにローテーション：全身、
  バストアップ、目の超アップ、2 ポーズ並び、同じポーズの 5 連（それぞれ色相違い）、シーン画像。
- 隣り合う 2 拍で同じポーズを使わない。
- エネルギーが低い箇所はシーン画像や静かなカットにして、ひと息つかせる。
- エフェクトの強さはセクションに合わせる：イントロ約 40%、A メロ 70%、サビ 100%。

【エフェクト】
1. 白フラッシュ：毎拍フラッシュしてすぐ消える。小節の 1 拍目が一番強い…
```

</details>

> Excerpt. The full prompt is in the [original post](https://x.com/pound75423/status/2103722556918464968).

### A machine where every note is a collision

<a href="https://x.com/KamStudioLabs/status/2102899866762440893"><img src="https://pbs.twimg.com/amplify_video_thumb/2102899418798182401/img/Wu6va9cLjJ3fqYG5.jpg" alt="A machine where every note is a collision" width="360"></a>

[@KamStudioLabs](https://x.com/KamStudioLabs/status/2102899866762440893) · 16:9 · 47s · ♥ 1 · `canvas` `physics` `audio`

A single sentence that combines physics and music.

```text
Build a 45-second machine that plays an original piece of music, where every note comes from a visible collision.
```

### Music video and song in a classic style

<a href="https://x.com/DavidShulmanFL/status/2103336310089842921"><img src="https://pbs.twimg.com/amplify_video_thumb/2103336274031484928/img/WLYweRTsoz7b_hsF.jpg" alt="Music video and song in a classic style" width="360"></a>

[@DavidShulmanFL](https://x.com/DavidShulmanFL/status/2103336310089842921) · 16:9 · 60s · ♥ 3 · `threejs` `canvas` `audio`

The model writes the song and the video.

```text
Create a 60 second music video in the style of Peter Gabriel's Sledgehammer and Big Time. But use modern references and figures. Also create the song, something sounds like it would fit on Peter Gabriel's So album.
```

[← Back to the full list](../README.md)
