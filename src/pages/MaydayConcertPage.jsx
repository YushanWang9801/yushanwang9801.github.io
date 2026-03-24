import React from "react";
import { motion } from "framer-motion";
import "../css/MaydayConcertPage.css";

/* ─────────────────────────────────────────────
   SECTION 2: Bilibili Video Embed
───────────────────────────────────────────── */
const BilibiliPlayer = ({ bvid, title }) => {
  const embedUrl = `https://player.bilibili.com/player.html?bvid=${bvid}&high_quality=1&danmaku=0&autoplay=0`;

  return (
    <div className="flex flex-col h-full w-full bg-background">
      <div className="flex-1 flex items-center justify-center overflow-hidden bg-black">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-presentation"
          loading="lazy"
        />
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-t border-secondary/10 bg-background">
        <span className="text-[10px] text-primary/60 font-mono uppercase tracking-wider flex-shrink-0">
          bilibili
        </span>
        <span className="text-[10px] text-secondary/60 font-mono uppercase tracking-wider">
          {title}
        </span>
        <a
          href={`https://www.bilibili.com/video/${bvid}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-primary/40 hover:text-primary/80 transition-colors flex-shrink-0 uppercase tracking-wider"
        >
          观看原链接 →
        </a>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   视频数据
───────────────────────────────────────────── */
const VIDEO_DATA = [
  {
    id: 1,
    title: "倔強",
    bvid: "BV1wDAFzFEWL",
    description: "「當我和世界不一樣，那就讓我不一樣」——倔強，是面對困境時最溫柔的反擊。",
  },
  {
    id: 2,
    title: "突然好想你",
    bvid: "BV138AFzCEDT",
    description: "「突然好想你，你會在哪裡」——有些歌，總在不經意的瞬間擊中心底。",
  },
  {
    id: 3,
    title: "如果我們不曾相遇 (feat. 汪蘇瀧)",
    bvid: "BV1QaAFzGEAq",
    description: "那是鳥巢最驚喜的瞬間。汪蘇瀧作為嘉賓現身，與五月天並肩歌唱。當安可（Encore）的歌聲再次響起，這首歌不僅是相遇的慶祝，更是十萬人共同編織的限定回憶。",
  },
  {
    id: 4,
    title: "20250804 鳥巢 · 終章混剪",
    bvid: "BV1gYAFzrEsG",
    description: "2025年5月25日，北京鳥巢。十萬人的吶喊最終匯聚成這幾分鐘的縮影。這不是一場演出的結束，而是我們帶著那晚的星光，繼續倔強生活的開始。",
  },
];

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const MaydayConcertPage = () => {
  const total = VIDEO_DATA.length;
  const totalStr = String(total).padStart(2, "0");

  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-background text-secondary concert-hide-scrollbar">

      {/* ─────────────────────────────────────────────
          SECTION 1: COVER
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative flex flex-col justify-between overflow-hidden">

        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/project-images/03.jpg"
            alt="cover"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Top bar */}
        <motion.div
          className="relative z-[105] flex justify-between items-center px-6 md:px-10 lg:px-14 pt-8 md:pt-10"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="/project"
            className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-white/70 hover:text-white hover:opacity-50 transition-all"
          >
            BACK
          </a>
          <span className="text-xs md:text-sm font-mono tracking-wider text-white/40">
            {totalStr} — {totalStr}
          </span>
        </motion.div>

        {/* Bottom content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between px-6 md:px-10 lg:px-14 pb-10 md:pb-16 gap-8">

          {/* Left: Title */}
          <motion.div
            className="flex-1"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 mb-3 md:mb-4">
              Live Concert · 五月天
            </p>
            <h1 className="text-[13vw] md:text-[7.5vw] lg:text-[6.5vw] leading-[0.85] font-background uppercase tracking-tighter text-white">
              Mayday
            </h1>
          </motion.div>

          {/* Right: Meta + Intro */}
          <motion.div
            className="flex-shrink-0 flex flex-col gap-6 md:items-end"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs md:text-sm leading-relaxed text-white/50 max-w-xs md:max-w-sm">
              每一首歌，都是一段青春。這是我最愛的樂隊，記錄那些在演唱會現場與萬人合唱的瞬間。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                { label: "乐队", value: "五月天" },
                { label: "类型", value: "Live 现场" },
                { label: "地点", value: "北京鸟巢" },
                { label: "年份", value: "2025" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/40">
                    {label}
                  </span>
                  <p className="text-white/70 font-medium text-sm md:text-base mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 right-8 md:right-12 flex items-center gap-3 text-white/20 text-[9px] md:text-[10px] uppercase tracking-[0.2em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1v8M1 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
          <span>Live</span>
        </motion.div>

        {/* Decorative large number */}
        <motion.div
          className="absolute -bottom-6 md:-bottom-10 -right-4 md:-right-6 text-[30vw] md:text-[20vw] leading-none font-background text-white/[0.025] pointer-events-none select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          01
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTIONS 2-5: 四个视频
      ───────────────────────────────────────────── */}
      {VIDEO_DATA.map((video, index) => (
        <section
          key={video.id}
          className="snap-start h-screen relative bg-background flex items-center justify-center p-4 md:p-6"
        >
          {/* 外层容器 */}
          <div className="w-full md:w-[85%] h-[90%] md:h-[80%] flex flex-col md:flex-row overflow-hidden rounded-lg border border-secondary/10 mt-16">

            {/* 电脑：左侧视频 / 手机：下方视频 */}
            <div className={`w-full md:w-1/2 h-1/2 md:h-full flex flex-col ${index % 2 === 1 ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
              <div className="flex-1 min-h-0">
                <BilibiliPlayer bvid={video.bvid} title={video.title} />
              </div>
            </div>

            {/* 电脑：右侧文字 / 手机：上方文字 */}
            <div className={`w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto concert-hide-scrollbar ${index % 2 === 1 ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
              <div className="px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12 flex flex-col gap-4 md:gap-6">

                {/* 手机版文字 */}
                <div className="md:hidden">
                  <div>
                    <h2 className="text-xs uppercase tracking-[0.25em] text-primary/60 mb-4">
                      {video.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-secondary/80">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* 电脑版文字 */}
                <div className="hidden md:block">
                  <div>
                    <h2 className="text-xs uppercase tracking-[0.25em] text-primary/60 mb-4">
                      {video.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-secondary/80">
                      {video.description}
                    </p>
                  </div>

                  <div className="h-px bg-secondary/10 my-4" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/30 mb-3">
                      视频编号
                    </p>
                    <p className="text-[8vw] md:text-[5vw] lg:text-[4vw] font-background text-white/5 leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* 页码指示器 */}
          <div className="absolute top-24 right-8 md:right-12 text-[10px] md:text-xs font-mono text-secondary/30 tracking-wider">
            {String(index + 2).padStart(2, '0')} — {totalStr}
          </div>
        </section>
      ))}

    </div>
  );
};

export default MaydayConcertPage;
