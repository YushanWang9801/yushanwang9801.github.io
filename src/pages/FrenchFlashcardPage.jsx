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
    title: "Vue + Vite: French FlashCard (Part I)",
    slug: "french-flashcard-part1",
    date: "Jun 11, 2023",
    excerpt: "While waiting for my work visa application, I decided to channel this nervous energy into something productive - learning French.",
    content: `I created a French flashcard application using Vue 3 with Vite, drawing vocabulary from an excellent YouTube French course. The core component is the FlashcardViewer, which handles displaying French words, their English translations, flip animation, and navigation.

Built with Vue Router for navigation between lessons, plain CSS for styling, and JSON files to store vocabulary data.`
  },
  {
    title: "Vue + Vite: French FlashCard (Part II)",
    slug: "french-flashcard-part2",
    date: "Jun 14, 2023",
    excerpt: "Wrapping on the flashcard part and building a category page.",
    content: `Added pronunciation using Web Speech API throughout the app. Built the course directory page showing all available courses and lessons with responsive design and mobile-friendly sidebar toggle.

Configured Vue Router with dynamic route parameters for lesson URLs and deployed to GitHub Pages.`
  },
  {
    title: "Vue + Vite: French FlashCard (Published)",
    slug: "french-flashcard-published",
    date: "Jun 18, 2023",
    excerpt: "French Flashcard published with LEA 800 and Taxi A1 vocab list.",
    content: `Built an interactive flashcard application to help master vocabulary from Léa Français's 800 Most Common French Words and the Taxi! A1 textbook.

Key features: Bilingual cards with French/English sides, self-generated example sentences, one-click pronunciation using Web Speech API, and mobile-friendly design with swipe gestures.`
  },
  {
    title: "French FlashCards: A2 Level, Maintenant en ligne!",
    slug: "french_flashcard_A2",
    date: "Jun 29, 2024",
    excerpt: "Say hello to A2 French vocabulary in the flashcard app—perfect for anyone ready to move beyond basics.",
    content: `Expanded vocabulary with trickier but super useful words like "réserver une chambre" (book a room) or "prendre le métro" (take the subway). Added expanded scenarios covering work conversations, travel logistics, and everyday routines.

Same fan-favorite features: flip cards for translations, click to hear pronunciation, and example sentences that actually make sense.`
  }
];

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const FrenchFlashcardPage = () => {
  const { theme } = useTheme();
  const total = BLOG_POSTS.length;
  const isDark = theme === "dark";

  return (
    <div className={`w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth ${isDark ? "bg-[#1a1a2e]" : "bg-[#fff5f5]"} ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} rb6-hide-scrollbar`}>

      {/* ─────────────────────────────────────────────
          SECTION 1: COVER
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative flex flex-col justify-between overflow-hidden">

        {/* Background with cover photo */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/project-images/french_flashcard.png"
            alt="French Flashcard Cover"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className={`absolute inset-0 ${isDark ? "bg-[#1a1a2e]/70" : "bg-[#fff5f5]/60"}`} />
          {/* French flag inspired pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#002395_1px,transparent_1px,transparent_33px,#ed2939_1px,transparent_33px)] bg-[size:100%_8px]" />
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
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#002395] mb-3 md:mb-4">
              Vue 3 · Language Learning
            </p>
            <h1 className={`text-[14vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-bold uppercase tracking-tighter ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"}`}>
              French
            </h1>
            <h2 className="text-[10vw] md:text-[5vw] lg:text-[4vw] leading-[0.9] font-bold uppercase tracking-tighter text-[#002395] -mt-2 md:-mt-4">
              Flashcard
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
              { label: "Year", value: "2023-2024" },
              { label: "Tech", value: "Vue + Vite" },
              { label: "Levels", value: "A1, A2" },
              { label: "Parts", value: "4" },
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
          className="absolute -bottom-6 md:-bottom-10 -right-4 md:-right-6 text-[30vw] md:text-[20vw] leading-none font-bold text-[#002395]/[0.05] pointer-events-none select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          🇫🇷
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2: About the Project
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1a1a2e]" : "bg-[#fff5f5]"}`}>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} transition-colors`}
          >
            BACK
          </Link>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#002395]">
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
            Learn French <span className="text-[#002395]">Anytime, Anywhere</span>
          </h2>

          <div className={`border p-6 md:p-8 mb-6 ${isDark ? "bg-[#16213e] border-[#0f3460]" : "bg-white border-[#f0e0e0]"}`}>
            <p className={`leading-relaxed mb-4 ${isDark ? "text-[#eaeaea]/80" : "text-[#1a1a2e]/70"}`}>
              An interactive flashcard application built with Vue 3 and Vite, featuring vocabulary from Léa Français's 800 Most Common French Words and the Taxi! A1 textbook.
            </p>
            <p className={`leading-relaxed ${isDark ? "text-[#eaeaea]/60" : "text-[#1a1a2e]/50"}`}>
              Includes A1 level basics and A2 level vocabulary for intermediate learners. Built during visa application wait time—turning nervous energy into productive learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Web Speech API", desc: "One-click French pronunciation" },
              { title: "Multiple Levels", desc: "A1 basics + A2 intermediate" },
              { title: "Mobile Friendly", desc: "Swipe gestures on mobile" }
            ].map((item) => (
              <div key={item.title} className={`border p-4 ${isDark ? "bg-[#16213e] border-[#0f3460]" : "bg-white border-[#f0e0e0]"}`}>
                <h3 className="text-[#002395] font-bold text-sm mb-2">{item.title}</h3>
                <p className={`text-xs ${isDark ? "text-[#808080]" : "text-[#666]"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3: Live Demo Card
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1a1a2e]" : "bg-[#fff5f5]"}`}>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} transition-colors`}
          >
            BACK
          </Link>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#002395]">
            Learn Now
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
          <div className={`overflow-hidden ${isDark ? "bg-[#16213e] border-[#0f3460]" : "bg-white border-[#f0e0e0]"} border`}>
            {/* Header */}
            <div className={`flex items-center gap-3 p-4 ${isDark ? "bg-[#1a1a2e] border-b border-[#0f3460]" : "bg-[#fff5f5] border-b border-[#f0e0e0]"}`}>
              <svg className={`w-6 h-6 ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"}`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <div>
                <h3 className={`font-bold ${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"}`}>YushanWang9801 / french_flashcards</h3>
                <p className={`text-xs ${isDark ? "text-[#808080]" : "text-[#666]"}`}>Vue 3 French flashcard app with pronunciation</p>
              </div>
            </div>

            {/* Preview */}
            <div className={`relative aspect-video ${isDark ? "bg-[#0f3460]" : "bg-[#f8f0f0]"}`}>
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*pJQUn9HBkBvGBnFYZ1Dlaw.png"
                alt="French Flashcard Preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CTA */}
            <div className="p-6 flex flex-col sm:flex-row gap-4">
              <a
                href="https://yushanwang9801.github.io/french_flashcards/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#002395] text-white text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-opacity font-bold"
              >
                Learn French Now
              </a>
              <a
                href="https://github.com/YushanWang9801/french_flashcards"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 border text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity ${isDark ? "border-[#0f3460] text-[#eaeaea]" : "border-[#f0e0e0] text-[#1a1a2e]"}`}
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
          className={`snap-start h-screen relative flex items-center justify-center p-6 md:p-10 ${isDark ? "bg-[#1a1a2e]" : "bg-[#fff5f5]"}`}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
            <Link
              to="/project"
              className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-[#808080]" : "text-[#999]"} hover:${isDark ? "text-[#eaeaea]" : "text-[#1a1a2e]"} transition-colors`}
            >
              BACK
            </Link>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#002395]">
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
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#002395] mb-2 md:mb-3 font-mono">
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
                    className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.15em] text-[#002395] hover:opacity-80 transition-opacity"
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
                  className={`p-6 md:p-8 lg:p-10 ${isDark ? "bg-[#16213e] border-[#0f3460]" : "bg-white border-[#f0e0e0]"} border ${
                    index % 2 === 0 ? 'md:border-l-4 md:border-l-[#002395]' : 'md:border-r-4 md:border-r-[#002395] md:text-right'
                  }`}
                >
                  <p className={`text-base md:text-lg lg:text-xl leading-relaxed italic mb-4 ${isDark ? "text-[#eaeaea]/90" : "text-[#1a1a2e]/90"}`}>
                    "{post.content.split('\n')[0]}"
                  </p>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-[#808080]" : "text-[#666]"}`}>
                    {post.content.split('\n').slice(1, 3).join(' ')}
                  </p>
                  <div className={`mt-6 pt-4 ${isDark ? "border-t border-[#0f3460]" : "border-t border-[#f0e0e0]"}`}>
                    <p className="text-xs text-[#002395]/60 uppercase tracking-wider">
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
          } ${isDark ? "text-[#2a2a4e]" : "text-[#f0e0e0]"} text-[10px] md:text-xs font-mono uppercase tracking-widest`}>
            {String(index + 4).padStart(2, '0')} / {String(total + 1).padStart(2, '0')}
          </div>
        </section>
      ))}

      {/* ─────────────────────────────────────────────
          FINAL SECTION: CTA
      ───────────────────────────────────────────── */}
      <section className={`snap-start h-screen relative flex items-center justify-center ${isDark ? "bg-[#1a1a2e]" : "bg-[#fff5f5]"} overflow-hidden`}>

        {/* Background pattern - French flag colors */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#002395_1px,transparent_1px,transparent_33px,#ed2939_1px,transparent_33px)] bg-[size:100%_8px]" />
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
            "Parlez-vous français?"<br />— Oui, un petit peu!
          </p>

          <h2 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold uppercase tracking-tighter text-[#002395]/60 leading-none mb-8 md:mb-12">
            DONE
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href="https://yushanwang9801.github.io/french_flashcards/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#002395] text-white text-xs md:text-sm uppercase tracking-[0.2em] hover:opacity-90 transition-opacity font-bold"
            >
              Learn French
            </a>
            <Link
              to="/project"
              className={`px-6 py-3 border text-xs md:text-sm uppercase tracking-[0.2em] hover:opacity-80 transition-opacity ${isDark ? "border-[#0f3460] text-[#eaeaea]" : "border-[#f0e0e0] text-[#1a1a2e]"}`}
            >
              More Projects
            </Link>
          </div>
        </motion.div>

        {/* Decorative */}
        <motion.div
          className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] rounded-full bg-[#002395]/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-[50vw] md:w-[30vw] h-[50vw] md:h-[30vw] rounded-full bg-[#ed2939]/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

    </div>
  );
};

export default FrenchFlashcardPage;
