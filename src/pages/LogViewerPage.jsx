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
    title: "Building a VSCode-Style Log Viewer",
    slug: "logviewer",
    date: "Oct 05, 2024",
    excerpt: "As a developer, have you ever faced these scenarios: trying to open a hundreds-of-MB log file online only to watch your browser crash",
    content: `The core pain points of previewing large files lie in three layers: Memory Overload — browsers can't handle massive strings; Rendering Lag — smooth for thousands of lines, stuck for tens of thousands; Missing Interactions — what's the point of previewing if you can't find errors?

In log-viewer, I refined "virtual scrolling + smart interactions" to set it apart from basic preview tools. VSCode-style UI with error highlighting, virtual scrolling for smooth performance, and powerful navigation with keyword search.`
  },
  {
    title: "手搓VSCode风格日志查看器",
    slug: "logviewer_cn",
    date: "2024年10月05日",
    excerpt: "作为开发者，你是否遇到过这种场景：拿到一个几百MB的日志文件，想在线查看却发现浏览器直接崩溃",
    content: `大文件在线预览的核心痛点藏在三个层面：内存爆炸——浏览器扛不住海量字符串；渲染卡顿——几千行还行，几万行直接卡死；交互缺失——找不到错误，预览等于白看。

我在log-viewer中，把"虚拟滚动+智能交互"做到了极致：VSCode风格的UI设计、智能错误标记（Traceback、Segfault、SIGABRT等）、强大的行号跳转和关键词搜索功能。`
  }
];

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const LogViewerPage = () => {
  const { theme } = useTheme();
  const total = BLOG_POSTS.length;
  const isDark = theme === "dark";

  return (
    <div className={`w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth ${isDark ? "bg-[#1e1e1e]" : "bg-[#f8f8f8]"} ${isDark ? "text-[#d4d4d4]" : "text-[#333]"} font-mono rb6-hide-scrollbar`}>

      {/* ─────────────────────────────────────────────
          SECTION 1: COVER
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative flex flex-col justify-between overflow-hidden">

        {/* Full-bleed background with cover photo */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://enzgkfwjuxujnayxevyk.supabase.co/storage/v1/object/public/blog-assets/assets/logviewer.png"
            alt="Log Viewer Cover"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className={`absolute inset-0 ${isDark ? "bg-[#1e1e1e]/75" : "bg-white/70"}`} />
          {/* VSCode-style grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[linear-gradient(#3c3c3c_1px,transparent_1px),linear-gradient(90deg,#3c3c3c_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>
        </div>

        {/* Top bar - VSCode style */}
        <motion.div
          className="relative z-[105] flex justify-between items-center px-6 md:px-10 lg:px-14 pt-8 md:pt-10"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/project"
            className={`text-xs md:text-sm font-bold uppercase tracking-[0.25em] ${isDark ? "text-[#808080]" : "text-[#666]"} hover:${isDark ? "text-[#d4d4d4]" : "text-[#333]"} transition-all`}
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
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#608b4e] mb-3 md:mb-4">
              Developer Tool · File Processing
            </p>
            <h1 className={`text-[12vw] md:text-[7vw] lg:text-[6vw] leading-[0.85] font-mono uppercase tracking-tighter ${isDark ? "text-[#d4d4d4]" : "text-[#333]"}`}>
              log<span className="text-[#608b4e]">-</span>viewer
            </h1>
            <h2 className={`text-[6vw] md:text-[3vw] lg:text-[2.5vw] leading-[0.9] font-mono uppercase tracking-tighter ${isDark ? "text-[#808080]" : "text-[#666]"} -mt-1 md:-mt-2`}>
              VSCode Style
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
              { label: "Stack", value: "Vanilla JS" },
              { label: "Type", value: "Web Tool" },
              { label: "Lines", value: "100K+" },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className={`uppercase tracking-[0.15em] text-[10px] md:text-xs ${isDark ? "text-[#808080]" : "text-[#999]"}`}>
                  {label}
                </span>
                <p className={`font-medium text-sm md:text-base mt-0.5 ${isDark ? "text-[#d4d4d4]" : "text-[#333]"}`}>{value}</p>
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
          className={`absolute -bottom-6 md:-bottom-10 -right-4 md:-right-6 text-[30vw] md:text-[20vw] leading-none font-mono ${isDark ? "text-[#608b4e]/[0.05]" : "text-[#608b4e]/[0.08]"} pointer-events-none select-none`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {'</>'}
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2: Problem & Solution
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1e1e1e]" : "bg-[#f8f8f8]"}`}>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#d4d4d4]" : "text-[#333]"} transition-colors`}
          >
            BACK
          </Link>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#608b4e]">
            Problem
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
          <h2 className={`text-2xl md:text-3xl font-mono mb-8 ${isDark ? "text-[#d4d4d4]" : "text-[#333]"}`}>
            The <span className="text-[#608b4e]">Pain Points</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💥",
                title: "Memory Overload",
                desc: "100MB+ files crash browsers when loaded entirely into memory"
              },
              {
                icon: "🐌",
                title: "Rendering Lag",
                desc: "10K+ lines = slideshow scrolling, unusable for production logs"
              },
              {
                icon: "🔍",
                title: "Missing Search",
                desc: "Can't find ERROR or Exception in thousands of lines manually"
              }
            ].map((item) => (
              <div key={item.title} className={`border p-6 ${isDark ? "bg-[#252526] border-[#3c3c3c]" : "bg-white border-[#e0e0e0]"}`}>
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className={`font-mono font-bold text-sm mb-2 ${isDark ? "text-[#d4d4d4]" : "text-[#333]"}`}>{item.title}</h3>
                <p className={`text-xs leading-relaxed ${isDark ? "text-[#808080]" : "text-[#666]"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3: Solution
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1e1e1e]" : "bg-[#f8f8f8]"}`}>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#d4d4d4]" : "text-[#333]"} transition-colors`}
          >
            BACK
          </Link>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#608b4e]">
            Solution
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
          <h2 className={`text-2xl md:text-3xl font-mono mb-8 ${isDark ? "text-[#d4d4d4]" : "text-[#333]"}`}>
            How <span className="text-[#608b4e]">log-viewer</span> Breaks Through
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Virtual Scrolling",
                desc: "Only renders visible viewport + buffer. Even 100K lines need only hundreds of DOM nodes."
              },
              {
                title: "Incremental Loading",
                desc: "Loads chunks on demand (1000 lines at a time), avoiding memory overload."
              },
              {
                title: "Smart Error Highlighting",
                desc: "Auto-detects Traceback, Segfault, SIGABRT and highlights them with distinct colors."
              },
              {
                title: "Powerful Navigation",
                desc: "Line number jump, keyword search with Ctrl+F, error navigation sidebar."
              }
            ].map((item) => (
              <div key={item.title} className={`border-l-4 border-l-[#608b4e] p-4 ${isDark ? "bg-[#252526] border-[#3c3c3c]" : "bg-white border-[#e0e0e0]"}`}>
                <h3 className={`font-mono font-bold text-sm mb-2 ${isDark ? "text-[#d4d4d4]" : "text-[#333]"}`}>{item.title}</h3>
                <p className={`text-xs leading-relaxed ${isDark ? "text-[#808080]" : "text-[#666]"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 4: GitHub Card
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1e1e1e]" : "bg-[#f8f8f8]"}`}>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#d4d4d4]" : "text-[#333]"} transition-colors`}
          >
            BACK
          </Link>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#608b4e]">
            Live Demo
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
          <div className={`overflow-hidden ${isDark ? "bg-[#252526] border-[#3c3c3c]" : "bg-white border-[#e0e0e0]"} border`}>
            {/* Header */}
            <div className={`flex items-center gap-3 p-4 ${isDark ? "bg-[#2d2d2d] border-b border-[#3c3c3c]" : "bg-[#f5f5f5] border-b border-[#e0e0e0]"}`}>
              <svg className={`w-6 h-6 ${isDark ? "text-[#d4d4d4]" : "text-[#333]"}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <div>
                <h3 className={`font-mono font-bold ${isDark ? "text-[#d4d4d4]" : "text-[#333]"}`}>YushanWang9801 / log-viewer</h3>
                <p className={`text-xs ${isDark ? "text-[#808080]" : "text-[#666]"}`}>VSCode-style large file log viewer</p>
              </div>
            </div>

            {/* Preview */}
            <div className={`relative aspect-video ${isDark ? "bg-[#1e1e1e]" : "bg-[#f0f0f0]"}`}>
              <img
                src="https://enzgkfwjuxujnayxevyk.supabase.co/storage/v1/object/public/blog-assets/assets/logviewer.png"
                alt="Log Viewer Preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CTA */}
            <div className="p-6 flex flex-col sm:flex-row gap-4">
              <a
                href="https://yushanwang9801.github.io/log-viewer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#608b4e] text-white text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-opacity font-bold font-mono"
              >
                Try Live Demo
              </a>
              <a
                href="https://github.com/YushanWang9801/log-viewer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity font-mono"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 5-N: Blog Posts
      ───────────────────────────────────────────── */}
      {BLOG_POSTS.map((post, index) => (
        <section
          key={post.slug}
          className={`snap-start h-screen relative flex items-center justify-center p-6 md:p-10 ${isDark ? "bg-[#1e1e1e]" : "bg-[#f8f8f8]"}`}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
            <Link
              to="/project"
              className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#d4d4d4]" : "text-[#333]"} transition-colors`}
            >
              BACK
            </Link>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#608b4e]">
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
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#608b4e] mb-2 md:mb-3 font-mono">
                    {String(index + 5).padStart(2, '0')} — {String(total + 1).padStart(2, '0')}
                  </p>
                  <h2 className={`text-lg md:text-xl lg:text-2xl font-mono font-bold leading-tight mb-3 md:mb-4 ${isDark ? "text-[#d4d4d4]" : "text-[#333]"}`}>
                    {post.title}
                  </h2>
                  <p className={`text-xs mb-4 md:mb-6 font-mono ${isDark ? "text-[#808080]" : "text-[#999]"}`}>
                    {post.date}
                  </p>
                  <p className={`text-sm md:text-base leading-relaxed mb-4 md:mb-6 ${isDark ? "text-[#d4d4d4]/80" : "text-[#333]/70"}`}>
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.15em] text-[#608b4e] hover:opacity-80 transition-opacity"
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
                  className={`p-6 md:p-8 lg:p-10 ${isDark ? "bg-[#252526] border-[#3c3c3c]" : "bg-white border-[#e0e0e0]"} border font-mono ${
                    index % 2 === 0 ? 'md:border-l-4 md:border-l-[#608b4e]' : 'md:border-r-4 md:border-r-[#608b4e] md:text-right'
                  }`}
                >
                  <p className={`text-sm md:text-base leading-relaxed mb-4 ${isDark ? "text-[#d4d4d4]/90" : "text-[#333]/90"}`}>
                    "{post.content.split('\n')[0]}"
                  </p>
                  <p className={`text-xs leading-relaxed ${isDark ? "text-[#808080]" : "text-[#666]"}`}>
                    {post.content.split('\n').slice(1, 3).join(' ')}
                  </p>
                  <div className={`mt-6 pt-4 ${isDark ? "border-t border-[#3c3c3c]" : "border-t border-[#e0e0e0]"}`}>
                    <p className="text-xs text-[#608b4e]/60 uppercase tracking-wider">
                      Article {index + 1} of {total}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Page number */}
          <div className={`absolute bottom-8 ${
            index % 2 === 0 ? 'left-8 md:left-12' : 'right-8 md:right-12'
          } ${isDark ? "text-[#2d2d2d]" : "text-[#e0e0e0]"} text-[10px] md:text-xs font-mono uppercase tracking-widest`}>
            {String(index + 5).padStart(2, '0')} / {String(total + 1).padStart(2, '0')}
          </div>
        </section>
      ))}

      {/* ─────────────────────────────────────────────
          FINAL SECTION: CTA
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1e1e1e]" : "bg-[#f8f8f8]"} overflow-hidden`}>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#608b4e_1px,transparent_1px),linear-gradient(-45deg,#608b4e_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#d4d4d4]" : "text-[#333]"} transition-colors`}
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
          <p className={`text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 font-mono ${isDark ? "text-[#808080]" : "text-[#999]"}`}>
            "From 'crash' to 'browse' —<br />that's the value of a tool"
          </p>

          <h2 className={`text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold uppercase tracking-tighter font-mono ${isDark ? "text-[#608b4e]/60" : "text-[#608b4e]/80"} leading-none mb-8 md:mb-12`}>
            DONE
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href="https://yushanwang9801.github.io/log-viewer/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#608b4e] text-white text-xs md:text-sm uppercase tracking-[0.2em] hover:opacity-90 transition-opacity font-bold font-mono"
            >
              Try Live Demo
            </a>
            <Link
              to="/project"
              className={`px-6 py-3 border text-xs md:text-sm uppercase tracking-[0.2em] hover:opacity-80 transition-opacity font-mono ${isDark ? "border-[#3c3c3c] text-[#d4d4d4]" : "border-[#e0e0e0] text-[#333]"}`}
            >
              More Projects
            </Link>
          </div>
        </motion.div>

        {/* Decorative */}
        <motion.div
          className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] rounded-full bg-[#608b4e]/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-[50vw] md:w-[30vw] h-[50vw] md:h-[30vw] rounded-full bg-[#608b4e]/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

    </div>
  );
};

export default LogViewerPage;
