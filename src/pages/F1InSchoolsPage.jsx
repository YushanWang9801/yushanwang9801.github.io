import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { experienceData } from "../components/Experience";
import { fetchProjectImages } from "../services/supabaseQueries";
import { useState, useEffect, useRef, useCallback } from "react";
import "../css/F1InSchoolsPage.css";

const FIS_TAG = "FIS Engineering";

function encodeImgUrl(url) {
  return url ? encodeURI(url) : "";
}

/* ─────────────────────────────────────────────
   SECTION 2: PDF-like Image Reader
───────────────────────────────────────────── */
const ImageReader = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainRef = useRef(null);

  const scrollToIndex = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(index, images.length - 1));
      setActiveIndex(clamped);
      const el = mainRef.current;
      if (el) {
        const target = el.querySelector(`[data-page="${clamped}"]`);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    [images.length]
  );

  const handleMainScroll = useCallback(() => {
    const el = mainRef.current;
    if (!el) return;
    const children = Array.from(el.querySelectorAll("[data-page]"));
    let closest = 0;
    let minDist = Infinity;
    children.forEach((child) => {
      const rect = child.getBoundingClientRect();
      const dist = Math.abs(rect.top);
      if (dist < minDist) {
        minDist = dist;
        closest = parseInt(child.dataset.page, 10);
      }
    });
    setActiveIndex(closest);
  }, []);

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-secondary/30 text-xs uppercase tracking-widest">
        No images found
      </div>
    );
  }

  return (
    <div className="flex h-full w-full overflow-hidden bg-background">

      {/* ── LEFT: Full-height scrollable reader ── */}
      <div
        ref={mainRef}
        onScroll={handleMainScroll}
        className="flex-1 h-full overflow-y-auto snap-y snap-mandatory hide-scrollbar"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {images.map((img, i) => (
          <div
            key={img.id ?? i}
            data-page={i}
            className="snap-start min-h-full flex items-center justify-center p-4 md:p-8 lg:p-12 bg-background"
          >
            <div className="relative max-h-full max-w-full flex items-center justify-center">
              <img
                src={encodeImgUrl(img.url)}
                alt={img.name || `Page ${i + 1}`}
                className="max-h-[85vh] w-auto max-w-full object-contain shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── RIGHT: Thumbnail sidebar ── */}
      <div className="w-[120px] md:w-[140px] lg:w-[160px] h-full overflow-y-auto hide-scrollbar border-l border-secondary/10 bg-background flex flex-col items-center py-4 gap-3">
        {images.map((img, i) => (
          <button
            key={img.id ?? i}
            onClick={() => scrollToIndex(i)}
            className={`relative flex-shrink-0 w-[88px] md:w-[100px] lg:w-[116px] cursor-pointer transition-all duration-300 ${
              activeIndex === i
                ? "ring-2 ring-secondary/70 scale-[1.04]"
                : "opacity-40 hover:opacity-75"
            }`}
          >
            <img
              src={encodeImgUrl(img.url)}
              alt={img.name || `Thumb ${i + 1}`}
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-background/70 py-1 text-center">
              <span className="text-[8px] md:text-[9px] text-secondary/80 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const F1InSchoolsPage = () => {
  const project = useMemo(
    () =>
      experienceData.project.find((item) => item.link === "/project/F1InSchools"),
    []
  );
  const allProjects = experienceData.project;
  const index = allProjects.findIndex(
    (item) => item.link === "/project/F1InSchools"
  );
  const total = allProjects.length;
  const pageNum = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  const [coverSrc, setCoverSrc] = useState(project?.cover || "/project-images/01.png");
  const [fisImages, setFisImages] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProjectImages(FIS_TAG);
      if (data) setFisImages(data.slice(2));
    };
    load();
  }, []);

  const nextProject = allProjects[(index + 1) % total];

  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-background text-secondary f1-hide-scrollbar">

      {/* ─────────────────────────────────────────────
          SECTION 1: COVER  (Metropole / TG style)
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative flex flex-col justify-between overflow-hidden">

        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={coverSrc}
            alt="cover"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-black/55" />
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
            className="text-xs md:text-sm font-bold uppercase tracking-[0.25em]  text-white hover:opacity-50 transition-opacity"
          >
            ← Back
          </a>
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
              {project?.intro?.split(".")[0]}
            </p>
            <h1 className="text-[14vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] text-white uppercase tracking-tighter">
              {project?.title?.replace("Formula1", "F1") || "F1 In Schools"}
            </h1>
          </motion.div>

          {/* Right: Meta grid — larger text */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-3 md:text-right flex-shrink-0"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { label: "Year", value: project?.time || "2016" },
              { label: "TEAM", value: "LeSports Chequered Flag Racing" },
              { label: "Role", value: project?.role || "Team Manager" },
              { label: "Type", value: "Engineering Portfolio" },
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
          className="absolute -bottom-6 md:-bottom-10 -right-4 md:-right-6 text-[30vw] md:text-[20vw] leading-none font-background text-white/[0.03] pointer-events-none select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {pageNum}
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2: Image Reader (PDF-style)
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative bg-background">
        {/* Top bar — no bg, uses z-[105] to sit above HeaderWang */}
        <div className="absolute top-0 left-0 right-0 z-[105] flex items-center justify-between px-4 md:px-6 lg:px-8 h-14">
          <div className="flex items-center gap-4">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary">
              FIS Engineering
            </span>
            <span className="text-xs text-secondary font-mono">
              {fisImages.length > 0 ? `${fisImages.length} Pages` : ""}
            </span>
          </div>
          <a
            href="/project"
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-secondary/40 hover:text-secondary/80 transition-colors"
          >
            ← Back
          </a>
        </div>

        {/* Reader body */}
        <div className="h-full pt-14">
          <ImageReader images={fisImages} />
        </div>
      </section>

    </div>
  );
};

export default F1InSchoolsPage;
