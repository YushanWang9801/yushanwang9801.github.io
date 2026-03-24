import { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { experienceData } from "../components/Experience";
import "../css/ProjectPage.css";

const ProjectPage = () => {
  const projects = useMemo(() => experienceData.project || [], []);
  const [activeIndex, setActiveIndex] = useState(0);
  const wheelLockRef = useRef(false);
  const navigate = useNavigate();

  const total = projects.length;
  const current = projects[activeIndex] || {};

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleWheel = (event) => {
    if (!total || wheelLockRef.current) return;
    wheelLockRef.current = true;

    if (event.deltaY > 0) goNext();
    if (event.deltaY < 0) goPrev();

    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 700);
  };

  return (
    <div
      className="h-screen overflow-y-auto md:overflow-hidden bg-background text-secondary pt-16 md:pt-20 pb-14 md:pb-20"
      onWheel={handleWheel}
    >
      <div className="h-full max-w-[1160px] mx-auto px-8 sm:px-12 md:px-14">
        <section className="min-h-full md:h-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start md:items-center">
          <div key={`img-${activeIndex}`} className="md:col-span-7 lg:col-span-7 project-slide-in">
            <Link
              to={current.link || "/project"}
              className="group block border border-secondary/15 bg-secondary/[0.02]"
            >
              <div className="aspect-[16/11] overflow-hidden bg-secondary/5">
                <img
                  src={current.cover}
                  alt={current.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </Link>
          </div>

          <div key={`text-${activeIndex}`} className="md:col-span-5 lg:col-span-5 project-slide-in pb-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
              <h2 className="text-[1.7rem] md:text-[2.15rem] leading-[1.06] tracking-tight uppercase">
                {current.title}
              </h2>
              <span className="text-sm md:text-base font-mono text-secondary/70 whitespace-nowrap">
                [ {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} ]
              </span>
            </div>
            <div className="border-t border-secondary/20 pt-4 mb-5" />

            <p className="text-sm md:text-base text-secondary/80 mb-2">
              {current.category || current.role}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary/55 mb-5">
              {current.time}
            </p>

            <p className="text-base md:text-[1.05rem] leading-relaxed text-secondary/90 mb-3">
              {current.intro}
            </p>
            <p className="text-sm md:text-[0.96rem] leading-relaxed text-secondary/70 mb-7">
              {current.detail}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="px-3.5 py-1.5 border border-secondary/30 hover:bg-secondary/10 transition-colors text-xs tracking-wider"
              >
                PREV
              </button>
              <button
                type="button"
                onClick={goNext}
                className="px-3.5 py-1.5 border border-secondary/30 hover:bg-secondary/10 transition-colors text-xs tracking-wider"
              >
                NEXT
              </button>
              <Link
                to={current.link || "/project"}
                className="text-xs uppercase tracking-[0.16em] text-primary hover:opacity-80"
              >
                Open Project
              </Link>
            </div>

            <div className="mt-6 text-xs text-secondary/55 tracking-[0.12em] uppercase">
              Scroll up/down to browse projects
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
