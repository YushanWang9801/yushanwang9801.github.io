import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { experienceData } from "../components/Experience";
import "../css/BrickRiddlePage.css";

/* ─────────────────────────────────────────────
   SECTION 2: Video Player
───────────────────────────────────────────── */
const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const handleSeek = (e) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * v.duration;
  };

  return (
    <div className="flex flex-col h-full w-full bg-background">
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="max-h-full max-w-full object-contain"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onClick={togglePlay}
          controlsList="nodownload"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 px-6 py-4 border-t border-secondary/10 bg-background">
        <button
          onClick={togglePlay}
          className="text-secondary hover:text-primary transition-colors flex-shrink-0"
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div
          className="flex-1 h-1 bg-secondary/20 rounded-full cursor-pointer group relative"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[10px] text-primary font-mono uppercase tracking-wider flex-shrink-0">
          Gameplay Demo
        </span>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const BrickRiddlePage = () => {
  const project = useMemo(
    () =>
      experienceData.project.find((item) => item.link === "/project/BrickRiddle"),
    []
  );
  const allProjects = experienceData.project;
  const index = allProjects.findIndex(
    (item) => item.link === "/project/BrickRiddle"
  );
  const total = allProjects.length;
  const pageNum = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  const VIDEO_URL = "/files/VRgame.mp4";

  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-background text-secondary brick-hide-scrollbar">

      {/* ─────────────────────────────────────────────
          SECTION 1: COVER — Image background
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative flex flex-col justify-between overflow-hidden">

        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/project-images/02.png"
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
            ← Back
          </a>
          <span className="text-xs md:text-sm font-mono tracking-wider text-white/40">
            {pageNum} — {totalStr}
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
              Unity · Oculus · VR Collaboration
            </p>
            <h1 className="text-[13vw] md:text-[7.5vw] lg:text-[6.5vw] leading-[0.85] font-background uppercase tracking-tighter text-white">
              Brick Riddle
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
              A first-person VR draw-and-guess game built in Unity for the Oculus Quest 2.
              Two players share a virtual room — one sketches in mid-air, the other guesses in real time.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                { label: "Year", value: project?.time || "2022" },
                { label: "Platform", value: "Oculus Quest 2" },
                { label: "Engine", value: "Unity 2021" },
                { label: "Role", value: "Solo Developer" },
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
          <span>Demo</span>
        </motion.div>

        {/* Decorative large number */}
        <motion.div
          className="absolute -bottom-6 md:-bottom-10 -right-4 md:-right-6 text-[30vw] md:text-[20vw] leading-none font-background text-white/[0.025] pointer-events-none select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {pageNum}
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2: 视频左文字右（电脑）｜文字上视频下（手机）
      ───────────────────────────────────────────── */}
      <section className="snap-start h-screen relative bg-background flex items-center justify-center p-4 md:p-6">

        {/* 外层容器 */}
        <div className="w-full md:w-[85%] h-[90%] md:h-[80%] flex flex-col md:flex-row overflow-hidden rounded-lg border border-secondary/10 mt-16">

          {/* 电脑：左侧视频 / 手机：下方视频 */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col order-2 md:order-1">
            <div className="flex-1 min-h-0">
              <VideoPlayer src={VIDEO_URL} />
            </div>
          </div>

          {/* 电脑：右侧文字 / 手机：上方文字 */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto brick-hide-scrollbar order-1 md:order-2">
            <div className="px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12 flex flex-col gap-4 md:gap-6">

              {/* 手机版文字（完整内容） */}
              <div className="md:hidden">
                <div>
                  <h2 className="text-xs uppercase tracking-[0.25em] text-primary/60 mb-4">
                    Project Overview
                  </h2>
                  <p className="text-sm leading-relaxed text-secondary/80">
                    Brick Riddle is a first-person VR draw-and-guess game built in Unity
                    for the Oculus Quest 2. Two players occupy the same virtual room — one
                    picks a word and sketches it in mid-air using a hand controller, while
                    the other watches the floating strokes materialize in real time and
                    tries to guess the answer.
                  </p>
                </div>

                <div className="h-px bg-secondary/10 my-4" />

                <div>
                  <h2 className="text-xs uppercase tracking-[0.25em] text-primary/60 mb-4">
                    Why Collaboration in VR?
                  </h2>
                  <p className="text-sm leading-relaxed text-secondary/70 mb-4">
                    Most consumer VR experiences are fundamentally solo. Even multiplayer
                    titles often treat other players as targets rather than
                    co-creators sharing a space. Brick Riddle was designed as a small
                    provocation: what if VR's spatial presence could be harnessed for
                    low-stakes creative collaboration?
                  </p>
                  <p className="text-sm leading-relaxed text-secondary/70">
                    Drawing in three-dimensional space adds a physicality that 2D video
                    calls lack. The act of shaping a form in the air, watching your partner
                    react in real time, creates a feedback loop that feels qualitatively
                    different from a shared screen.
                  </p>
                </div>

                <div className="h-px bg-secondary/10 my-4" />

                <div>
                  <h2 className="text-xs uppercase tracking-[0.25em] text-primary/60 mb-4">
                    Technical Notes
                  </h2>
                  <div className="flex flex-col gap-3">
                    {[
                      {
                        tag: "Input",
                        desc: "Oculus Integration package mapped controller triggers to a freehand drawing API. Stroke points were recorded as a list of 3D vectors and rendered as a glowing line renderer in real time."
                      },
                      {
                        tag: "Networking",
                        desc: "Photon Unity Networking handled player state synchronization. Each player's controller position was broadcast at 20 Hz — sufficient for smooth sketching without noticeable latency."
                      },
                      {
                        tag: "Word Bank",
                        desc: "A curated JSON word bank with difficulty tiers loaded at session start. The round logic and scoring ran entirely client-side."
                      }
                    ].map(({ tag, desc }) => (
                      <div key={tag} className="flex gap-3 text-sm">
                        <span className="text-primary/50 font-mono text-xs flex-shrink-0 pt-0.5 uppercase tracking-wider">
                          {tag}
                        </span>
                        <p className="text-secondary/60 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-secondary/10 my-4" />

                <div>
                  <h2 className="text-xs uppercase tracking-[0.25em] text-primary/60 mb-4">
                    Reflections
                  </h2>
                  <p className="text-sm leading-relaxed text-secondary/70">
                    The project reinforced a belief that the most compelling VR experiences
                    are not necessarily the most technically ambitious — they are the ones
                    that make you feel genuinely present with another person.
                  </p>
                </div>
              </div>

              {/* 电脑版文字（完整内容） */}
              <div className="hidden md:block">
                <div>
                  <h2 className="text-xs uppercase tracking-[0.25em] text-primary/60 mb-4">
                    Project Overview
                  </h2>
                  <p className="text-sm leading-relaxed text-secondary/80">
                    Brick Riddle is a first-person VR draw-and-guess game built in Unity
                    for the Oculus Quest 2. Two players occupy the same virtual room — one
                    picks a word and sketches it in mid-air using a hand controller, while
                    the other watches the floating strokes materialize in real time and
                    tries to guess the answer.
                  </p>
                </div>

                <div className="h-px bg-secondary/10 my-4" />

                <div>
                  <h2 className="text-xs uppercase tracking-[0.25em] text-primary/60 mb-4">
                    Why Collaboration in VR?
                  </h2>
                  <p className="text-sm leading-relaxed text-secondary/70 mb-4">
                    Most consumer VR experiences are fundamentally solo. Even multiplayer
                    titles often treat other players as targets rather than
                    co-creators sharing a space. Brick Riddle was designed as a small
                    provocation: what if VR's spatial presence could be harnessed for
                    low-stakes creative collaboration?
                  </p>
                  <p className="text-sm leading-relaxed text-secondary/70">
                    Drawing in three-dimensional space adds a physicality that 2D video
                    calls lack. The act of shaping a form in the air, watching your partner
                    react in real time, creates a feedback loop that feels qualitatively
                    different from a shared screen.
                  </p>
                </div>

                <div className="h-px bg-secondary/10 my-4" />

                <div>
                  <h2 className="text-xs uppercase tracking-[0.25em] text-primary/60 mb-4">
                    Technical Notes
                  </h2>
                  <div className="flex flex-col gap-3">
                    {[
                      {
                        tag: "Input",
                        desc: "Oculus Integration package mapped controller triggers to a freehand drawing API. Stroke points were recorded as a list of 3D vectors and rendered as a glowing line renderer in real time."
                      },
                      {
                        tag: "Networking",
                        desc: "Photon Unity Networking handled player state synchronization. Each player's controller position was broadcast at 20 Hz — sufficient for smooth sketching without noticeable latency."
                      },
                      {
                        tag: "Word Bank",
                        desc: "A curated JSON word bank with difficulty tiers loaded at session start. The round logic and scoring ran entirely client-side."
                      }
                    ].map(({ tag, desc }) => (
                      <div key={tag} className="flex gap-3 text-sm">
                        <span className="text-primary/50 font-mono text-xs flex-shrink-0 pt-0.5 uppercase tracking-wider">
                          {tag}
                        </span>
                        <p className="text-secondary/60 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-secondary/10 my-4" />

                <div>
                  <h2 className="text-xs uppercase tracking-[0.25em] text-primary/60 mb-4">
                    Reflections
                  </h2>
                  <p className="text-sm leading-relaxed text-secondary/70">
                    The project reinforced a belief that the most compelling VR experiences
                    are not necessarily the most technically ambitious — they are the ones
                    that make you feel genuinely present with another person.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default BrickRiddlePage;