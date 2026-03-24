import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { experienceData } from "../components/Experience";
import "../css/CafeAtWorldsEndPage.css";

const CafeAtWorldsEndPage = () => {
  const project = useMemo(
    () =>
      experienceData.project.find((item) => item.link === "/project/CafeAtWorldsEnd"),
    []
  );
  const allProjects = experienceData.project;
  const index = allProjects.findIndex(
    (item) => item.link === "/project/CafeAtWorldsEnd"
  );
  const total = allProjects.length;
  const pageNum = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  const nextProject = allProjects[(index + 1) % total];

  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-[#0a0a0a] text-secondary cafe-hide-scrollbar">

      {/* ─────────────────────────────────────────────
          SECTION 1: COVER - Minimalist Dark
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative flex flex-col justify-between overflow-hidden">

        {/* Full-bleed background with gradient */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)'
            }}
          />
          {/* Subtle grain texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }} />
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
            className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-secondary/50 hover:text-secondary transition-all"
          >
            ← Back
          </Link>
          <span className="text-xs md:text-sm font-mono tracking-wider text-secondary/30">
            {pageNum} — {totalStr}
          </span>
        </motion.div>

        {/* Center: Title */}
        <motion.div
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-10 lg:px-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-[10vw] md:text-[6vw] lg:text-[5vw] leading-[0.85] text-secondary font-bold tracking-tight text-center"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            世界尽头的咖啡馆
          </motion.h1>
          <motion.p
            className="text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] uppercase tracking-[0.4em] text-secondary/40 mt-6 md:mt-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Cafe at the World's End
          </motion.p>
        </motion.div>

        {/* Bottom: Meta + Scroll hint */}
        <div className="relative z-10 px-6 md:px-10 lg:px-14 pb-10 md:pb-16">
          
          {/* Meta grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 mb-10"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { label: "Year", value: project?.time || "2025" },
              { label: "Stack", value: "React · Vite" },
              { label: "Type", value: "AI Chat App" },
              { label: "Style", value: "Minimalism" },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="text-[10px] uppercase tracking-[0.15em] text-secondary/40">
                  {label}
                </span>
                <p className="text-sm md:text-base text-secondary/80 mt-0.5">{value}</p>
              </div>
            ))}
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="flex items-center gap-3 text-secondary/30 text-[9px] md:text-[10px] uppercase tracking-[0.2em]"
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
        </div>

        {/* Decorative */}
        <motion.div
          className="absolute -bottom-10 md:-bottom-16 -right-6 md:-right-10 text-[35vw] md:text-[25vw] leading-none text-secondary/[0.02] pointer-events-none select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          ☕
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2: Concept - The Philosophy
      ───────────────────────────────────────────── */}
      <section className="snap-start min-h-screen relative flex items-center justify-center bg-[#0a0a0a] px-6 md:px-10 lg:px-14">

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary/40 hover:text-secondary/80 transition-colors"
          >
            ← Back
          </Link>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary/60">
            Concept
          </span>
        </div>

        <motion.div
          className="w-full max-w-4xl mx-auto mt-16 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-secondary/40 mb-6 md:mb-8">
            01 — Philosophy
          </p>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary leading-tight mb-8 md:mb-12">
            在信息的洪流中，<br />
            <span className="text-secondary/60">对话应当轻盈而私密。</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="border-l-2 border-secondary/20 pl-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-secondary/60 mb-3">极简主义</h3>
              <p className="text-sm leading-relaxed text-secondary/70">
                无多余的装饰，无复杂的交互。只有你和 AI 之间纯粹的对话。全屏深色渐变背景，衬线体字体，营造出沉浸式的思考空间。
              </p>
            </div>
            <div className="border-l-2 border-secondary/20 pl-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-secondary/60 mb-3">阅后即焚</h3>
              <p className="text-sm leading-relaxed text-secondary/70">
                每一次对话都是独立的。当页面关闭，所有记忆消散。敏感信息使用 AES-256-CBC 加密存储 API 密钥，确保本地安全。
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3: Features - The Experience
      ───────────────────────────────────────────── */}
      <section className="snap-start min-h-screen relative flex items-center justify-center bg-[#0a0a0a] px-6 md:px-10 lg:px-14">

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary/40 hover:text-secondary/80 transition-colors"
          >
            ← Back
          </Link>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary/60">
            Features
          </span>
        </div>

        <motion.div
          className="w-full max-w-4xl mx-auto mt-16 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-secondary/40 mb-6 md:mb-8">
            02 — Features
          </p>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                title: "全屏深色渐变",
                desc: "沉浸式的视觉体验，让对话成为唯一的焦点"
              },
              {
                title: "Framer Motion 动画",
                desc: "流畅的交互动画，让每一次输入都有回应"
              },
              {
                title: "AES-256-CBC 加密",
                desc: "本地加密存储 API 密钥，安全可靠"
              },
              {
                title: "阅后即焚体验",
                desc: "对话结束后，所有内容自动清除"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-6 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[10px] md:text-xs font-mono text-secondary/30 w-8 flex-shrink-0 pt-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 border-b border-secondary/10 pb-6 md:pb-8">
                  <h3 className="text-lg md:text-xl text-secondary mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 4: Technical Details
      ───────────────────────────────────────────── */}
      <section className="snap-start min-h-screen relative flex items-center justify-center bg-[#0a0a0a] px-6 md:px-10 lg:px-14">

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary/40 hover:text-secondary/80 transition-colors"
          >
            ← Back
          </Link>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary/60">
            Technical
          </span>
        </div>

        <motion.div
          className="w-full max-w-4xl mx-auto mt-16 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-secondary/40 mb-6 md:mb-8">
            03 — Technical Stack
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "React", desc: "UI 框架，组件化开发" },
              { name: "Vite", desc: "快速构建工具，即时热更新" },
              { name: "Tailwind", desc: "原子化 CSS，快速样式开发" },
              { name: "Framer Motion", desc: "声明式动画库" },
              { name: "CryptoJS", desc: "AES-256-CBC 加密实现" },
              { name: "OpenAI API", desc: "AI 对话能力" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-secondary/[0.03] border border-secondary/10 p-6 hover:bg-secondary/[0.05] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-base font-bold text-secondary mb-2">{tech.name}</h3>
                <p className="text-xs text-secondary/50">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 5: Links & CTA
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative flex items-center justify-center bg-[#0a0a0a] overflow-hidden">

        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-secondary/[0.02] blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-6 md:px-10 lg:px-14 h-14 md:h-16">
          <Link
            to="/project"
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary/40 hover:text-secondary/80 transition-colors"
          >
            ← Back
          </Link>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary/60">
            Links
          </span>
        </div>

        <motion.div
          className="relative z-10 w-full max-w-2xl mx-6 mt-16 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-secondary/40 mb-6">
              04 — Experience It
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-secondary leading-tight">
              来，坐下来<br />
              <span className="text-secondary/50">喝杯咖啡吧</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href="https://github.com/YushanWang9801/cafe-at-the-worlds-end"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-background text-sm font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity text-center"
            >
              View on GitHub
            </a>
            <Link
              to="/project"
              className="w-full sm:w-auto px-8 py-4 border border-secondary/30 text-secondary text-sm font-bold uppercase tracking-[0.2em] hover:bg-secondary/5 transition-colors text-center"
            >
              More Projects
            </Link>
          </div>

          {/* Next project hint */}
          {nextProject && (
            <div className="mt-16 md:mt-20 pt-8 border-t border-secondary/10 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-secondary/30 mb-3">
                Next Project
              </p>
              <Link
                to={nextProject.link || '/project'}
                className="text-lg md:text-xl text-secondary hover:text-secondary/70 transition-colors"
              >
                {nextProject.title} →
              </Link>
            </div>
          )}
        </motion.div>
      </section>

    </div>
  );
};

export default CafeAtWorldsEndPage;
