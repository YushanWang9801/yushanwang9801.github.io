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
    title: "Teaching AI Through Game, Long time no see 2048",
    slug: "AI_2048",
    date: "Jan 15, 2024",
    excerpt: "From a Lecture Idea to Code Sharing. 2048 is a puzzle game almost everyone recognizes—simple rules, satisfying gameplay, but with enough depth to showcase real AI decision-making.",
    content: `The real magic for the lecture was adding an AI player using the Minimax algorithm. The AI (maximizer) tries to maximize its score, while assuming the "game" will spawn the worst possible new tiles.

During the lecture, I showed how tweaking the evaluation function drastically changes the AI's performance—perfect for demonstrating how "intelligence" in code is often just clever scoring.`
  },
  {
    title: "From Python to Browser: 2048 Gets a JavaScript Web Version!",
    slug: "AI_2048_JS",
    date: "Jan 24, 2024",
    excerpt: "After sharing the Python version of 2048, many students asked for a web version they can play without setting up an environment.",
    content: `The web edition keeps the core gameplay: use arrow keys to move and merge tiles, with the goal still being to reach 2048. But the web version has obvious perks: no need to install Python or Pygame, no code cloning required.

Visually, it retains the clean style of the original but with smoother animations: tiles glide gently when moving, numbers pop slightly when merged.`
  }
];

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const AI2048Page = () => {
  const { theme } = useTheme();
  const total = BLOG_POSTS.length;
  const isDark = theme === "dark";

  return (
    <div className={`w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth ${isDark ? "bg-[#1a1a2e]" : "bg-[#faf3e0]"} ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} rb6-hide-scrollbar`}>

      {/* ─────────────────────────────────────────────
          SECTION 1: COVER
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative flex flex-col justify-between overflow-hidden">

        {/* Background with cover photo */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://enzgkfwjuxujnayxevyk.supabase.co/storage/v1/object/public/blog-assets/assets/AI_2048_JS.png"
            alt="AI 2048 Cover"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className={`absolute inset-0 ${isDark ? "bg-[#1a1a2e]/70" : "bg-[#faf3e0]/50"}`} />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#f67c3c_1px,transparent_1px),repeating-linear-gradient(90deg,#f67c3c_1px,transparent_1px)] bg-[size:8px_8px]" />
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
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#f67c3c] mb-3 md:mb-4">
              Game AI · Minimax Algorithm
            </p>
            <h1 className={`text-[14vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-bold uppercase tracking-tighter ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"}`}>
              AI
            </h1>
            <h2 className="text-[10vw] md:text-[5vw] lg:text-[4vw] leading-[0.9] font-bold uppercase tracking-tighter text-[#f67c3c] -mt-2 md:-mt-4">
              2048
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
              { label: "Year", value: "2024" },
              { label: "Tech", value: "Python + Vue" },
              { label: "Type", value: "Game + AI" },
              { label: "Parts", value: "2" },
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
          className="absolute -bottom-6 md:-bottom-10 -right-4 md:-right-6 text-[30vw] md:text-[20vw] leading-none font-bold text-[#f67c3c]/[0.05] pointer-events-none select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          2048
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2: About the Project
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1a1a2e]" : "bg-[#faf3e0]"}`}>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} transition-colors`}
          >
            BACK
          </Link>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#f67c3c]">
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
            Play <span className="text-[#f67c3c]">2048</span> with AI
          </h2>

          <div className={`border p-6 md:p-8 mb-6 ${isDark ? "bg-[#16213e] border-[#0f3460]" : "bg-white border-[#e8dcc8]"}`}>
            <p className={`leading-relaxed mb-4 ${isDark ? "text-[#eaeaea]/80" : "text-[#1a1a2e]/70"}`}>
              A 2048 game with an AI opponent powered by the Minimax algorithm. The AI simulates future game states, evaluates board quality, and chooses optimal moves to reach 2048.
            </p>
            <p className={`leading-relaxed ${isDark ? "text-[#eaeaea]/60" : "text-[#1a1a2e]/50"}`}>
              Originally created for a lecture on programming and AI for high school seniors—perfect for demonstrating how "intelligence" in code is often just clever scoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Minimax Algorithm", desc: "AI simulates game tree to find optimal moves" },
              { title: "Evaluation Function", desc: "Scores board quality based on multiple factors" },
              { title: "Dual Versions", desc: "Python/Pygame + Vue.js web version" }
            ].map((item) => (
              <div key={item.title} className={`border p-4 ${isDark ? "bg-[#16213e] border-[#0f3460]" : "bg-white border-[#e8dcc8]"}`}>
                <h3 className="text-[#f67c3c] font-bold text-sm mb-2">{item.title}</h3>
                <p className={`text-xs ${isDark ? "text-[#808080]" : "text-[#666]"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3: Demo + GitHub Card
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1a1a2e]" : "bg-[#faf3e0]"}`}>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} transition-colors`}
          >
            BACK
          </Link>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#f67c3c]">
            Play Now
          </span>
        </div>

        {/* Card */}
        <motion.div
          className="w-full max-w-2xl mx-6 mt-16 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`overflow-hidden ${isDark ? "bg-[#16213e] border-[#0f3460]" : "bg-white border-[#e8dcc8]"} border`}>
            {/* Header */}
            <div className={`flex items-center gap-3 p-4 ${isDark ? "bg-[#1a1a2e] border-b border-[#0f3460]" : "bg-[#faf3e0] border-b border-[#e8dcc8]"}`}>
              <svg className={`w-6 h-6 ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <div>
                <h3 className={`font-bold ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"}`}>YushanWang9801 / 2048_AI</h3>
                <p className={`text-xs ${isDark ? "text-[#808080]" : "text-[#666]"}`}>2048 game with AI using Minimax algorithm</p>
              </div>
            </div>

            {/* Preview */}
            <div className={`relative aspect-video ${isDark ? "bg-[#0f3460]" : "bg-[#faf3e0]"}`}>
              <img
                src="https://enzgkfwjuxujnayxevyk.supabase.co/storage/v1/object/public/blog-assets/assets/AI_2048_JS.png" 
                alt="AI 2048 Preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CTA */}
            <div className="p-6 flex flex-col sm:flex-row gap-4">
              <a
                href="https://yushanwang9801.github.io/2048_AI/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#f67c3c] text-white text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-opacity font-bold"
              >
                Play Online
              </a>
              <a
                href="https://github.com/YushanWang9801/2048_AI"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 border text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity ${isDark ? "border-[#0f3460] text-[#eaeaea]" : "border-[#e8dcc8] text-[#1a1a2e]"}`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
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
          className={`snap-start h-screen relative flex items-center justify-center p-6 md:p-10 ${isDark ? "bg-[#1a1a2e]" : "bg-[#faf3e0]"}`}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
            <Link
              to="/project"
              className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} transition-colors`}
            >
              BACK
            </Link>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#f67c3c]">
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
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#f67c3c] mb-2 md:mb-3 font-mono">
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
                    className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.15em] text-[#f67c3c] hover:opacity-80 transition-opacity"
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
                  className={`p-6 md:p-8 lg:p-10 ${isDark ? "bg-[#16213e] border-[#0f3460]" : "bg-white border-[#e8dcc8]"} border ${
                    index % 2 === 0 ? 'md:border-l-4 md:border-l-[#f67c3c]' : 'md:border-r-4 md:border-r-[#f67c3c] md:text-right'
                  }`}
                >
                  <p className={`text-base md:text-lg lg:text-xl leading-relaxed italic mb-4 ${isDark ? "text-[#eaeaea]/90" : "text-[#1a1a2e]/90"}`}>
                    "{post.content.split('\n')[0]}"
                  </p>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-[#808080]" : "text-[#666]"}`}>
                    {post.content.split('\n').slice(1, 3).join(' ')}
                  </p>
                  <div className={`mt-6 pt-4 ${isDark ? "border-t border-[#0f3460]" : "border-t border-[#e8dcc8]"}`}>
                    <p className="text-xs text-[#f67c3c]/60 uppercase tracking-wider">
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
          } ${isDark ? "text-[#2a2a4e]" : "text-[#e8dcc8]"} text-[10px] md:text-xs font-mono uppercase tracking-widest`}>
            {String(index + 4).padStart(2, '0')} / {String(total + 1).padStart(2, '0')}
          </div>
        </section>
      ))}

      {/* ─────────────────────────────────────────────
          FINAL SECTION: CTA
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1a1a2e]" : "bg-[#faf3e0]"} overflow-hidden`}>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#f67c3c_1px,transparent_1px),repeating-linear-gradient(90deg,#f67c3c_1px,transparent_1px)] bg-[size:8px_8px]" />
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
            "How smart can a game AI be?"<br />— 2048 says, pretty smart
          </p>

          <h2 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold uppercase tracking-tighter text-[#f67c3c]/60 leading-none mb-8 md:mb-12">
            DONE
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href="https://yushanwang9801.github.io/2048_AI/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#f67c3c] text-white text-xs md:text-sm uppercase tracking-[0.2em] hover:opacity-90 transition-opacity font-bold"
            >
              Play Now
            </a>
            <Link
              to="/project"
              className={`px-6 py-3 border text-xs md:text-sm uppercase tracking-[0.2em] hover:opacity-80 transition-opacity ${isDark ? "border-[#0f3460] text-[#eaeaea]" : "border-[#e8dcc8] text-[#1a1a2e]"}`}
            >
              More Projects
            </Link>
          </div>
        </motion.div>

        {/* Decorative */}
        <motion.div
          className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] rounded-full bg-[#f67c3c]/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-[50vw] md:w-[30vw] h-[50vw] md:h-[30vw] rounded-full bg-[#f67c3c]/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

    </div>
  );
};

export default AI2048Page;
