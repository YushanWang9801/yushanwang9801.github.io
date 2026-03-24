import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../css/RB6Page.css";

/* ─────────────────────────────────────────────
   Blog Content Data
───────────────────────────────────────────── */
const BLOG_POSTS = [
  {
    title: "Pygame: Mario Run (Part I)",
    slug: "pygame-mario-part1",
    date: "Mar 03, 2023",
    excerpt: "This article will show how to use Pygame to build a simple Mario run game",
    content: `A simple Mario run game built with Pygame. The complete code includes screen initialization, sprite creation for Mario and obstacles, and collision detection logic.

For Part I we created the Mario player, obstacles, and coins, now it's time to display them on the screen and play with them. The player can jump with SPACE key, collect coins, and avoid obstacles.`
  },
  {
    title: "Pygame: Mario Run (Part II)",
    slug: "pygame-mario-part2",
    date: "Mar 04, 2023",
    excerpt: "we will continue to build a simple Mario run game with Pygame part II",
    content: `For Part I we created the Mario player, obstacles, and coins, now it's time to display them on the screen and play with them. However, we need to set up the background and a few key elements on the screen first.

The game includes sprite groups for player and obstacles, dynamic score display, and collision detection. Coins are randomly generated on either sky level or ground level.`
  },
  {
    title: "Pygame: Mario Run (Part III)",
    slug: "pygame-mario-part3",
    date: "Mar 05, 2023",
    excerpt: "We are almost finish building mario run...",
    content: `In this final part, we are going to build the game over state for the game. The game_over_render() function handles what the screen would look like if the game is over.

Now you should have a runnable Mario game. Thank you for your patience to go through all three parts of this Mario Game.`
  }
];

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const MarioPage = () => {
  const { theme } = useTheme();
  const total = BLOG_POSTS.length;
  const isDark = theme === "dark";

  return (
    <div className={`w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth ${isDark ? "bg-[#1a1a2e]" : "bg-[#f5f5f5]"} ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} rb6-hide-scrollbar`}>

      {/* ─────────────────────────────────────────────
          SECTION 1: COVER
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative flex flex-col justify-between overflow-hidden">

        {/* Background with cover photo */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://miro.medium.com/v2/resize:fit:1200/format:webp/1*GCw3byAR0bXeq2-k4iSeFg.gif"
            alt="Mario Cover"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className={`absolute inset-0 ${isDark ? "bg-[#1a1a2e]/70" : "bg-white/60"}`} />
          {/* Pixel art style pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#e94560_1px,transparent_1px),repeating-linear-gradient(90deg,#e94560_1px,transparent_1px)] bg-[size:8px_8px]" />
          </div>
        </div>

        {/* Top bar */}
        <motion.div
          className="relative z-[105] flex justify-between items-center px-6 md:px-10 lg:px-14 pt-8 md:pt-10"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/project"
            className={`text-xs md:text-sm font-bold uppercase tracking-[0.25em] ${isDark ? "text-[#808080]" : "text-[#666]"} hover:${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} transition-all`}
          >
            BACK
          </Link>
          <span className={`text-xs md:text-sm font-mono tracking-wider ${isDark ? "text-[#808080]" : "text-[#999]"}`}>
            {String(total + 1).padStart(2, "0")} — {String(total + 1).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Bottom: title + meta */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between px-6 md:px-10 lg:px-14 pb-10 md:pb-16 gap-8">

          {/* Left: Title */}
          <motion.div
            className="flex-1"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#e94560] mb-3 md:mb-4">
              Python · Game Development
            </p>
            <h1 className={`text-[14vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-bold uppercase tracking-tighter ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"}`}>
              Mario
            </h1>
            <h2 className="text-[10vw] md:text-[5vw] lg:text-[4vw] leading-[0.9] font-bold uppercase tracking-tighter text-[#e94560] -mt-2 md:-mt-4">
              Run
            </h2>
          </motion.div>

          {/* Right: Meta grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-3 md:text-right flex-shrink-0"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { label: "Year", value: "2023" },
              { label: "Tech", value: "Pygame" },
              { label: "Type", value: "Game" },
              { label: "Parts", value: "3" },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className={`uppercase tracking-[0.15em] text-[10px] md:text-xs ${isDark ? "text-[#808080]" : "text-[#999]"}`}>
                  {label}
                </span>
                <p className={`font-medium text-sm md:text-base mt-0.5 ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"}`}>{value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className={`absolute bottom-8 right-8 md:right-12 flex items-center gap-3 text-[9px] md:text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"}`}
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
          <span>Scroll</span>
        </motion.div>

        {/* Decorative */}
        <motion.div
          className="absolute -bottom-6 md:-bottom-10 -right-4 md:-right-6 text-[30vw] md:text-[20vw] leading-none font-bold text-[#e94560]/[0.05] pointer-events-none select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          M
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2: About the Project
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1a1a2e]" : "bg-[#f5f5f5]"}`}>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} transition-colors`}
          >
            BACK
          </Link>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#e94560]">
            About
          </span>
        </div>

        {/* Content */}
        <motion.div
          className="w-full max-w-4xl mx-6 mt-16 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"}`}>
            A Simple <span className="text-[#e94560]">Mario Run</span> Game
          </h2>

          <div className={`border p-6 md:p-8 mb-6 ${isDark ? "bg-[#16213e] border-[#0f3460]" : "bg-white border-[#ddd]"}`}>
            <p className={`leading-relaxed mb-4 ${isDark ? "text-[#eaeaea]/80" : "text-[#1a1a2e]/70"}`}>
              Built with Pygame, this Mario run game features sprite-based character animation,
              obstacle collision detection, and a coin collection system.
            </p>
            <p className={`leading-relaxed ${isDark ? "text-[#eaeaea]/60" : "text-[#1a1a2e]/50"}`}>
              The game includes three parts walking animation, background music, score tracking,
              and a game over state. Perfect for learning game development fundamentals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Sprite Animation", desc: "Smooth Mario walking and jumping animations" },
              { title: "Collision Detection", desc: "Detect obstacles and collect coins" },
              { title: "Game States", desc: "Start, play, and game over screens" }
            ].map((item) => (
              <div key={item.title} className={`border p-4 ${isDark ? "bg-[#16213e] border-[#0f3460]" : "bg-white border-[#ddd]"}`}>
                <h3 className="text-[#e94560] font-bold text-sm mb-2">{item.title}</h3>
                <p className={`text-xs ${isDark ? "text-[#808080]" : "text-[#666]"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3: GitHub Card
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1a1a2e]" : "bg-[#f5f5f5]"}`}>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} transition-colors`}
          >
            BACK
          </Link>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#e94560]">
            Source Code
          </span>
        </div>

        {/* GitHub card */}
        <motion.div
          className="w-full max-w-2xl mx-6 mt-16 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`overflow-hidden ${isDark ? "bg-[#16213e] border-[#0f3460]" : "bg-white border-[#ddd]"} border`}>
            {/* Header */}
            <div className={`flex items-center gap-3 p-4 ${isDark ? "bg-[#1a1a2e] border-b border-[#0f3460]" : "bg-[#f8f8f8] border-b border-[#ddd]"}`}>
              <svg className={`w-6 h-6 ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <div>
                <h3 className={`font-bold ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"}`}>YushanWang9801 / pygame-mario</h3>
                <p className={`text-xs ${isDark ? "text-[#808080]" : "text-[#666]"}`}>A simple Mario run game built with Pygame</p>
              </div>
            </div>

            {/* Preview */}
            <div className={`relative aspect-video ${isDark ? "bg-[#0f3460]" : "bg-[#f0f0f0]"}`}>
              <img
                src="https://miro.medium.com/v2/resize:fit:1200/format:webp/1*GCw3byAR0bXeq2-k4iSeFg.gif"
                alt="Mario Game Preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CTA */}
            <div className="p-6 flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/YushanWang9801/pygame-mario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#e94560] text-white text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-opacity font-bold"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              <Link
                to="/project"
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 border text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity ${isDark ? "border-[#0f3460] text-[#eaeaea]" : "border-[#ddd] text-[#1a1a2e]"}`}
              >
                More Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 4-N: Blog Posts
      ───────────────────────────────────────────── */}
      {BLOG_POSTS.map((post, index) => (
        <section
          key={post.slug}
          className={`snap-start h-screen relative flex items-center justify-center p-6 md:p-10 ${isDark ? "bg-[#1a1a2e]" : "bg-[#f5f5f5]"}`}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
            <Link
              to="/project"
              className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} transition-colors`}
            >
              BACK
            </Link>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#e94560]">
              {post.title}
            </span>
          </div>

          {/* Content card */}
          <div className="w-full max-w-4xl mt-16 md:mt-0">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-start`}>

              {/* Left: Blog info */}
              <div className={`w-full md:w-2/5 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e94560] mb-2 md:mb-3 font-mono">
                    {String(index + 4).padStart(2, '0')} — {String(total + 1).padStart(2, '0')}
                  </p>
                  <h2 className={`text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-3 md:mb-4 ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"}`}>
                    {post.title}
                  </h2>
                  <p className={`text-xs mb-4 md:mb-6 font-mono ${isDark ? "text-[#808080]" : "text-[#999]"}`}>
                    {post.date}
                  </p>
                  <p className={`text-sm md:text-base leading-relaxed mb-4 md:mb-6 ${isDark ? "text-[#eaeaea]/80" : "text-[#1a1a2e]/70"}`}>
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.15em] text-[#e94560] hover:opacity-80 transition-opacity"
                  >
                    Read Full Article →
                  </a>
                </motion.div>
              </div>

              {/* Right: Quote / Highlight */}
              <div className="w-full md:w-3/5">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className={`p-6 md:p-8 lg:p-10 ${isDark ? "bg-[#16213e] border-[#0f3460]" : "bg-white border-[#ddd]"} border ${
                    index % 2 === 0 ? 'md:border-l-4 md:border-l-[#e94560]' : 'md:border-r-4 md:border-r-[#e94560] md:text-right'
                  }`}
                >
                  <p className={`text-base md:text-lg lg:text-xl leading-relaxed italic mb-4 ${isDark ? "text-[#eaeaea]/90" : "text-[#1a1a2e]/90"}`}>
                    "{post.content.split('\n')[0]}"
                  </p>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-[#808080]" : "text-[#666]"}`}>
                    {post.content.split('\n').slice(1, 3).join(' ')}
                  </p>
                  <div className={`mt-6 pt-4 ${isDark ? "border-t border-[#0f3460]" : "border-t border-[#ddd]"}`}>
                    <p className="text-xs text-[#e94560]/60 uppercase tracking-wider">
                      Part {index + 1} of {total}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Page number */}
          <div className={`absolute bottom-8 ${
            index % 2 === 0 ? 'left-8 md:left-12' : 'right-8 md:right-12'
          } ${isDark ? "text-[#2a2a4e]" : "text-[#e0e0e0]"} text-[10px] md:text-xs font-mono uppercase tracking-widest`}>
            {String(index + 4).padStart(2, '0')} / {String(total + 1).padStart(2, '0')}
          </div>
        </section>
      ))}

      {/* ─────────────────────────────────────────────
          FINAL SECTION: CTA
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1a1a2e]" : "bg-[#f5f5f5]"} overflow-hidden`}>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#e94560_1px,transparent_1px),repeating-linear-gradient(90deg,#e94560_1px,transparent_1px)] bg-[size:8px_8px]" />
        </div>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} transition-colors`}
          >
            BACK
          </Link>
          <span className={`text-xs md:text-sm font-bold uppercase tracking-widest ${isDark ? "text-[#808080]" : "text-[#999]"}`}>
            The End
          </span>
        </div>

        {/* Center content */}
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={`text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 ${isDark ? "text-[#808080]" : "text-[#999]"}`}>
            "It's-a Me, Mario!"<br />— Nintendo, 1985
          </p>

          <h2 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold uppercase tracking-tighter text-[#e94560]/60 leading-none mb-8 md:mb-12">
            DONE
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href="https://github.com/YushanWang9801/pygame-mario"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#e94560] text-white text-xs md:text-sm uppercase tracking-[0.2em] hover:opacity-90 transition-opacity font-bold"
            >
              View on GitHub
            </a>
            <Link
              to="/project"
              className={`px-6 py-3 border text-xs md:text-sm uppercase tracking-[0.2em] hover:opacity-80 transition-opacity ${isDark ? "border-[#0f3460] text-[#eaeaea]" : "border-[#ddd] text-[#1a1a2e]"}`}
            >
              More Projects
            </Link>
          </div>
        </motion.div>

        {/* Decorative */}
        <motion.div
          className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] rounded-full bg-[#e94560]/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-[50vw] md:w-[30vw] h-[50vw] md:h-[30vw] rounded-full bg-[#e94560]/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

    </div>
  );
};

export default MarioPage;
