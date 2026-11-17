import {
  animate,
  motion,
  type MotionValue,
  useInView,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroTablet from "@/assets/hero-tablet-home.png";

const NICHES = [
  { name: "Papelaria Fofa", count: 29 },
  { name: "Bolsas, Mochilas e Malas", count: 66 },
  { name: "Semijoias", count: 39 },
  { name: "Games e Eletrônicos", count: 24 },
  { name: "Moda Feminina", count: 58 },
  { name: "E muito mais", count: "+" },
];

const Counter = ({ start, reduced }: { start: boolean; reduced: boolean }) => {
  const [value, setValue] = useState(reduced ? 320 : 0);

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setValue(320);
      return;
    }

    const controls = animate(0, 320, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [start, reduced]);

  return (
    <span aria-label="320">
      <span aria-hidden="true">{value}</span>
    </span>
  );
};

const NicheRow = ({
  niche,
  index,
  inView,
  reduced,
  desktopMotion,
  scrollProgress,
}: {
  niche: (typeof NICHES)[number];
  index: number;
  inView: boolean;
  reduced: boolean;
  desktopMotion: boolean;
  scrollProgress: MotionValue<number>;
}) => {
  const start = 0.14 + index * 0.047;
  const end = start + 0.11;
  const opacity = useTransform(scrollProgress, [0, start, end, 1], [0.5, 0.5, 1, 1]);
  const y = useTransform(scrollProgress, [0, start, end, 1], [9, 9, 0, 0]);
  const rowBackground = useTransform(
    scrollProgress,
    [start, start + 0.045, end, end + 0.075],
    ["rgba(255,255,255,0.03)", "rgba(0,239,255,0.085)", "rgba(0,239,255,0.07)", "rgba(255,255,255,0.03)"],
  );
  const rowBorder = useTransform(
    scrollProgress,
    [start, start + 0.045, end, end + 0.075],
    ["rgba(0,239,255,0.1)", "rgba(0,239,255,0.38)", "rgba(0,239,255,0.28)", "rgba(0,239,255,0.1)"],
  );
  const badgeGlow = useTransform(
    scrollProgress,
    [start, start + 0.045, end, end + 0.075],
    ["0 0 0 rgba(0,239,255,0)", "0 0 14px rgba(0,239,255,0.32)", "0 0 9px rgba(0,239,255,0.18)", "0 0 0 rgba(0,239,255,0)"],
  );

  return (
    <motion.div
      initial={reduced || desktopMotion ? false : { opacity: 0, y: 10 }}
      animate={inView || reduced ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.35, delay: reduced ? 0 : 0.5 + index * 0.08 }}
      className="flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors duration-500"
      style={{
        background: desktopMotion ? rowBackground : "rgba(255,255,255,0.03)",
        borderColor: desktopMotion ? rowBorder : "rgba(0,239,255,0.1)",
        borderStyle: "solid",
        borderWidth: 1,
        opacity: desktopMotion ? opacity : 1,
        y: desktopMotion ? y : 0,
      }}
    >
      <span className="text-[13px] font-semibold leading-tight text-white sm:text-sm">{niche.name}</span>
      <motion.span
        className="shrink-0 rounded-md px-2 py-0.5 text-[11px] font-bold"
        style={{
          background: "rgba(0,239,255,0.12)",
          color: "#00EFFF",
          border: "1px solid rgba(0,239,255,0.25)",
          boxShadow: desktopMotion ? badgeGlow : "0 0 0 rgba(0,239,255,0)",
        }}
      >
        {niche.count}
      </motion.span>
    </motion.div>
  );
};

export const HeroImportersPanel = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = !!useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [desktopMotion, setDesktopMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 960px)").matches && !reduced,
  );
  const [hoverMotion, setHoverMotion] = useState(false);
  const panelScale = useTransform(scrollProgress, [0, 0.08, 0.42, 0.72, 1], [1, 1.015, 1.058, 1.018, 1]);
  const panelY = useTransform(scrollProgress, [0, 0.08, 0.42, 0.72, 1], [0, -2, -10, -3, 0]);
  const glowOpacity = useTransform(scrollProgress, [0, 0.08, 0.42, 0.72, 1], [0.72, 0.8, 1, 0.82, 0.72]);
  const primaryScale = useTransform(scrollProgress, [0, 0.14, 0.28, 0.48, 0.7, 1], [1, 1, 1.05, 1.025, 1, 1]);
  const primaryGlow = useTransform(scrollProgress, [0, 0.14, 0.28, 0.48, 0.7, 1], [0.18, 0.18, 0.48, 0.3, 0.18, 0.18]);
  const primaryShadow = useTransform(primaryGlow, (value) => `0 0 24px rgba(0,239,255,${value})`);
  const primaryBorder = useTransform(
    scrollProgress,
    [0, 0.14, 0.28, 0.48, 0.7, 1],
    ["rgba(0,239,255,0.18)", "rgba(0,239,255,0.18)", "rgba(0,239,255,0.52)", "rgba(0,239,255,0.3)", "rgba(0,239,255,0.18)", "rgba(0,239,255,0.18)"],
  );
  const secondaryOpacity = useTransform(scrollProgress, [0, 0.12, 0.26, 1], [0.62, 0.62, 1, 1]);
  const scanY = useTransform(scrollProgress, [0, 0.1, 0.58, 1], [-8, -8, 390, 390]);
  const scanOpacity = useTransform(scrollProgress, [0, 0.1, 0.18, 0.58, 0.68, 1], [0, 0, 0.72, 0.62, 0, 0]);
  const activityScale = useTransform(scrollProgress, [0, 0.22, 0.34, 0.56, 0.7, 1], [1, 1, 1.38, 1.16, 1, 1]);
  const activityOpacity = useTransform(scrollProgress, [0, 0.2, 0.36, 0.62, 0.72, 1], [0.7, 0.7, 1, 0.9, 0.7, 0.7]);
  const activityGlow = useTransform(
    scrollProgress,
    [0, 0.2, 0.36, 0.62, 0.72, 1],
    ["0 0 0 rgba(74,222,128,0)", "0 0 0 rgba(74,222,128,0)", "0 0 10px rgba(74,222,128,0.7)", "0 0 6px rgba(74,222,128,0.35)", "0 0 0 rgba(74,222,128,0)", "0 0 0 rgba(74,222,128,0)"],
  );
  const panelShadow = useTransform(
    scrollProgress,
    [0, 0.08, 0.42, 0.72, 1],
    [
      "0 0 60px rgba(0,239,255,0.08), 0 30px 60px rgba(0,0,0,0.45)",
      "0 0 66px rgba(0,239,255,0.12), 0 34px 66px rgba(0,0,0,0.48)",
      "0 0 78px rgba(0,239,255,0.2), 0 42px 76px rgba(0,0,0,0.54)",
      "0 0 64px rgba(0,239,255,0.11), 0 32px 64px rgba(0,0,0,0.47)",
      "0 0 60px rgba(0,239,255,0.08), 0 30px 60px rgba(0,0,0,0.45)",
    ],
  );

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 960px)");
    const hoverMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => {
      setDesktopMotion(desktopMedia.matches && !reduced);
      setHoverMotion(desktopMedia.matches && hoverMedia.matches && !reduced);
    };

    update();
    desktopMedia.addEventListener("change", update);
    hoverMedia.addEventListener("change", update);
    return () => {
      desktopMedia.removeEventListener("change", update);
      hoverMedia.removeEventListener("change", update);
    };
  }, [reduced]);

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0.86, y: 12 }}
      animate={inView || reduced ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full will-change-transform"
    >
      <motion.div className="relative w-full" style={desktopMotion ? { scale: panelScale, y: panelY } : undefined}>
        <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2rem]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,239,255,0.13) 0%, transparent 70%)",
          filter: "blur(50px)",
          opacity: desktopMotion ? glowOpacity : 0.72,
        }}
      />

        <motion.div
          whileHover={
            hoverMotion
              ? {
                  y: -2,
                  boxShadow: "0 0 68px rgba(0,239,255,0.12), 0 34px 64px rgba(0,0,0,0.46)",
                }
              : undefined
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-2xl"
          style={{
            background: "linear-gradient(145deg, #0f2744 0%, #091b30 100%)",
            border: "1px solid rgba(0,239,255,0.2)",
            boxShadow: desktopMotion ? panelShadow : "0 0 60px rgba(0,239,255,0.08), 0 30px 60px rgba(0,0,0,0.45)",
          }}
        >
        {desktopMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px"
            style={{
              y: scanY,
              opacity: scanOpacity,
              background: "linear-gradient(90deg, transparent 3%, rgba(0,239,255,0.3) 24%, rgba(118,248,255,0.9) 50%, rgba(0,239,255,0.3) 76%, transparent 97%)",
              boxShadow: "0 0 10px rgba(0,239,255,0.38)",
            }}
          />
        )}

        {/* Top bar */}
        <div
          className="flex items-center justify-between gap-3 border-b px-4 py-3 sm:px-5"
          style={{ borderColor: "rgba(0,239,255,0.12)" }}
        >
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <motion.div
              className="h-2.5 w-2.5 rounded-full bg-green-400/70"
              style={{
                scale: desktopMotion ? activityScale : 1,
                opacity: desktopMotion ? activityOpacity : 0.7,
                boxShadow: desktopMotion ? activityGlow : "none",
              }}
            />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300/90 sm:text-[11px]">
            Central de Importadoras
          </span>
          <span className="w-10" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 px-4 pt-5 sm:px-5">
          <motion.div
            className="rounded-xl px-4 py-3"
            style={{
              background: "rgba(0,239,255,0.06)",
              borderColor: desktopMotion ? primaryBorder : "rgba(0,239,255,0.18)",
              borderStyle: "solid",
              borderWidth: 1,
              scale: desktopMotion ? primaryScale : 1,
              boxShadow: desktopMotion ? primaryShadow : "0 0 24px rgba(0,239,255,0.18)",
            }}
          >
            <div className="text-2xl font-extrabold leading-none text-white tabular-nums">
              <Counter start={inView} reduced={reduced} />
            </div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-300/90">
              Fornecedores
            </div>
          </motion.div>
          <motion.div
            className="rounded-xl px-4 py-3"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              opacity: desktopMotion ? secondaryOpacity : 1,
            }}
          >
            <div className="text-2xl font-extrabold leading-none text-white">14</div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white/70">
              Nichos ativos
            </div>
          </motion.div>
        </div>

        {/* Niches */}
        <div className="grid grid-cols-2 gap-3 p-4 sm:p-5">
          {NICHES.map((n, i) => (
            <NicheRow
              key={n.name}
              niche={n}
              index={i}
              inView={inView}
              reduced={reduced}
              desktopMotion={desktopMotion}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>

        <div className="px-4 pb-5 sm:px-5">
          <div className="flex items-center justify-between text-[11px] text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-green-400"
                style={{
                  scale: desktopMotion ? activityScale : 1,
                  opacity: desktopMotion ? activityOpacity : 1,
                  boxShadow: desktopMotion ? activityGlow : "none",
                }}
              />
              Atualizado hoje
            </span>
            <span className="font-semibold text-cyan-300/80">+ novos nichos em breve</span>
          </div>
        </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const benefits = ["Fornecedores verificados", "Acesso imediato", "7 dias de garantia"];

const HeroSection = () => (
  <section id="inicio" className="campaign-hero relative isolate overflow-hidden bg-[#061423]">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-no-repeat bg-right [background-size:auto_clamp(6rem,37vw,18rem)] top-[var(--navigation-height)] lg:bg-contain"
      style={{ backgroundImage: `url("${heroTablet}")` }}
    />
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#061423] to-transparent lg:hidden" />
    <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-9 sm:px-8 sm:py-12 lg:flex lg:min-h-[max(26rem,33.333vw)] lg:items-center lg:py-12 xl:px-12">
      <div className="max-w-xl lg:w-[46%]">
        <h1 className="max-w-[15ch] text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-6xl">
          Seu próximo <span className="text-cyan-300">fornecedor</span> pode estar aqui.
        </h1>
        <p className="mt-5 max-w-[min(56%,32ch)] text-base lg:max-w-lg leading-relaxed text-slate-200 sm:text-lg">
          Encontre importadoras e fornecedores da 25 de Março de forma mais rápida, organizada e segura.
        </p>
        <a
          href="#planos"
          className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-4 py-3 text-center text-sm font-extrabold text-[#061423] transition-colors hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#061423] sm:w-auto sm:px-6"
        >
          QUERO ACESSAR OS FORNECEDORES
          <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" />
        </a>
        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-200">
          {benefits.map((benefit) => (
            <li key={benefit} className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default HeroSection;
