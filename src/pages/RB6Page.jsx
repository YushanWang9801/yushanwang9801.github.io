import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/RB6Page.css";

/* ─────────────────────────────────────────────
   Blog Content Data
───────────────────────────────────────────── */
const BLOG_POSTS = [
  {
    title: "ThreeJs: Redbull Racing RB6 (Part I)",
    slug: "rb6-dribble-part1",
    date: "Apr 13, 2023",
    excerpt: "Today, we will explore how to create captivating 3D websites with just a few lines of code using Three.js, a library built on top of WebGL.",
    content: `This beginner's guide will start from the very basics of Three.js, allowing even those with no prior experience to follow along. This tutorial series will not only delve deeper into Three.js but also teach how to model with Blender, making it a comprehensive learning resource for those interested in 3D web development.

The design inspiration comes from the Scuderia Ferrari Web Header by Reynaldi Fachriza on Dribble. While I'm a huge Ferrari fan, given their recent Formula 1 performance, I decided to create a website featuring one of the best motorsport designs in Formula One history — the Red Bull RB6.`
  },
  {
    title: "ThreeJs: Redbull Racing RB6 (Part II)",
    slug: "rb6-dribble-part2",
    date: "Apr 15, 2023",
    excerpt: "Last part, we created the canvas and loaded an ambient light with the Redbull model on the screen. So far, one may have the issue of white edges around the canvas. To fix it, we could add simple CSS.",
    content: `We'll add two point lights to rotate around the car for an exhibition effect. To animate the lights, we create a loop using Date.now() for smooth rotation. For mouse interaction, we'll use OrbitControls to allow users to explore the 3D model from different angles.

Finally, we'll add a gray plane beneath the car to create a sense of grounding and realism. The animation loop updates the mixer, control, and renderer each frame for smooth performance.`
  },
  {
    title: "ThreeJs: Redbull Racing RB6 (Part III)",
    slug: "rb6-dribble-part3",
    date: "Apr 16, 2023",
    excerpt: "Welcome to the final part of the template, now we just need to add a few HTML elements then our website will be ready to go. I used the Optima font for this template.",
    content: `The header navigation includes links to different sections like Drivers, Mechanics, Races, and Team. The video bar at the bottom showcases a YouTube embed with information about the RB6, including technical details like the CTO Adrian Newey and Driver Sebastian Vettel.

RB6 set the fastest time in 15 out of the 19 rounds in Qualifying. Adrian Newey described it as "probably the car with the most downforce in the history of F1".`
  }
];

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const RB6Page = () => {
  const total = BLOG_POSTS.length;

  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-background text-secondary rb6-hide-scrollbar">

      {/* ─────────────────────────────────────────────
          SECTION 1: COVER
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative flex flex-col justify-between overflow-hidden">

        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/project-images/04.png"
            alt="RB6 Cover"
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
          <Link
            to="/project"
            className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-white/70 hover:text-white hover:opacity-50 transition-all"
          >
            BACK
          </Link>
          <span className="text-xs md:text-sm font-mono tracking-wider text-white/40">
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
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 mb-3 md:mb-4">
              Three.js · F1 Redbull Racing RB6
            </p>
            <h1 className="text-[14vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-background uppercase tracking-tighter text-white">
              Red Bull
            </h1>
            <h2 className="text-[10vw] md:text-[5vw] lg:text-[4vw] leading-[0.9] font-background uppercase tracking-tighter text-white/80 -mt-2 md:-mt-4">
              RB6
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
              { label: "年份", value: "2023" },
              { label: "CTO", value: "Adrian Newey" },
              { label: "车手", value: "Sebastian Vettel" },
              { label: "动力", value: "18,000 rpm" },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="text-white/40 uppercase tracking-[0.15em] text-[10px] md:text-xs">
                  {label}
                </span>
                <p className="text-white font-medium text-sm md:text-base mt-0.5">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 right-8 md:right-12 flex items-center gap-3 text-white/30 text-[9px] md:text-[10px] uppercase tracking-[0.2em]"
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

        {/* Decorative large number */}
        <motion.div
          className="absolute -bottom-6 md:-bottom-10 -right-4 md:-right-6 text-[30vw] md:text-[20vw] leading-none font-background text-white/[0.04] pointer-events-none select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          RB6
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2: Demo Link Card
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative bg-background flex items-center justify-center">

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary/40 hover:text-secondary/80 transition-colors"
          >
            BACK
          </Link>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary/60">
            Interactive Demo
          </span>
        </div>

        {/* Demo card */}
        <motion.div
          className="w-full max-w-3xl mx-6 mt-16 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-secondary/[0.03] border border-secondary/10 overflow-hidden">
            {/* Image preview */}
            <div className="relative aspect-video bg-black">
              <img
                src="/project-images/04.png"
                alt="RB6 Demo Preview"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://yushanwang9801.github.io/rb6_dribble/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-red-600 text-white text-sm uppercase tracking-[0.15em] hover:bg-red-700 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Open Live Demo
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">
                    Three.js Interactive Showcase
                  </h3>
                  <p className="text-sm text-secondary/60">
                    Drag to rotate · Scroll to zoom · Dynamic lighting effects
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://yushanwang9801.github.io/rb6_dribble/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary/80 text-xs uppercase tracking-wider transition-colors"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/YushanWang9801/rb6_dribble"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary/80 text-xs uppercase tracking-wider transition-colors"
                  >
                    Source
                  </a>
                </div>
              </div>

              <div className="border-t border-secondary/10 pt-4">
                <p className="text-xs text-secondary/40 uppercase tracking-wider mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Three.js", "WebGL", "OrbitControls", "GLTFLoader", "Blender"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary/5 text-secondary/60 text-[10px] uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3-N: Blog Posts
      ───────────────────────────────────────────── */}
      {BLOG_POSTS.map((post, index) => (
        <section
          key={post.slug}
          className={`snap-start h-screen relative flex items-center justify-center p-6 md:p-10 ${
            index % 2 === 0 ? "bg-background" : "bg-secondary/[0.02]"
          }`}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
            <Link
              to="/project"
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary/40 hover:text-secondary/80 transition-colors"
            >
              BACK
            </Link>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary/60">
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
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-red-600 mb-2 md:mb-3 font-mono">
                    {String(index + 3).padStart(2, '0')} — {String(total + 1).padStart(2, '0')}
                  </p>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-secondary leading-tight mb-3 md:mb-4">
                    {post.title}
                  </h2>
                  <p className="text-xs text-secondary/50 mb-4 md:mb-6 font-mono">
                    {post.date}
                  </p>
                  <p className="text-sm md:text-base text-secondary/80 leading-relaxed mb-4 md:mb-6">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.15em] text-red-600 hover:opacity-80 transition-opacity"
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
                  className={`bg-secondary/[0.03] border border-secondary/10 p-6 md:p-8 lg:p-10 ${
                    index % 2 === 0 ? 'md:border-l-4 md:border-l-red-600' : 'md:border-r-4 md:border-r-red-600 md:text-right'
                  }`}
                >
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-secondary/90 italic mb-4">
                    "{post.content.split('\n')[0]}"
                  </p>
                  <p className="text-sm text-secondary/60 leading-relaxed">
                    {post.content.split('\n').slice(1, 3).join(' ')}
                  </p>
                  <div className="mt-6 pt-4 border-t border-secondary/10">
                    <p className="text-xs text-red-600/60 uppercase tracking-wider">
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
          } text-secondary/20 text-[10px] md:text-xs font-mono uppercase tracking-widest`}>
            {String(index + 3).padStart(2, '0')} / {String(total + 1).padStart(2, '0')}
          </div>
        </section>
      ))}

      {/* ─────────────────────────────────────────────
          FINAL SECTION: CTA
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative flex items-center justify-center bg-black overflow-hidden">

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#dc2626_1px,transparent_1px),linear-gradient(-45deg,#dc2626_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors"
          >
            BACK
          </Link>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">
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
          <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6">
            "probably the car with the most downforce<br />in the history of F1"
          </p>
          <p className="text-white/30 text-[10px] md:text-xs font-mono mb-8 md:mb-12">
            — Adrian Newey, CTO
          </p>

          <h2 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-background uppercase tracking-tighter text-white/90 leading-none mb-8 md:mb-12">
            RB6
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href="https://github.com/YushanWang9801/rb6_dribble"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 text-white text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-red-700 transition-colors"
            >
              View on GitHub
            </a>
            <Link
              to="/project"
              className="px-6 py-3 border border-white/30 text-white/70 text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
            >
              More Projects
            </Link>
          </div>
        </motion.div>

        {/* Decorative */}
        <motion.div
          className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] rounded-full bg-red-600/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-[50vw] md:w-[30vw] h-[50vw] md:h-[30vw] rounded-full bg-red-600/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

    </div>
  );
};

export default RB6Page;
