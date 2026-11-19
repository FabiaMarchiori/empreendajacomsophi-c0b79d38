import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import suppliersIcon from "@/assets/pilares/fornecedores.png";
import pricingIcon from "@/assets/pilares/precificacao.png";
import managementIcon from "@/assets/pilares/gestao.png";
import sophIcon from "@/assets/pilares/soph.png";

import suppliersTablet from "@/assets/tour-tablet-fornecedores.png";
import importersTablet from "@/assets/tour-tablet-importadoras.png";
import categoriesTablet from "@/assets/tour-tablet-categorias.png";
import homeTablet from "@/assets/tour-tablet-home.png";

const pillars = [
  {
    number: "01",
    icon: suppliersIcon,
    title: "CENTRAL DE FORNECEDORES",
    description: "Mais de 320 fornecedores e importadoras organizados por categorias para facilitar sua pesquisa.",
    surface: "bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.12),transparent_42%),linear-gradient(145deg,rgba(16,48,76,0.98),rgba(9,29,50,0.98))]",
    accent: "left-6 right-[38%]",
  },
  {
    number: "02",
    icon: pricingIcon,
    title: "PRECIFICAÇÃO",
    description: "Organize custos, margem e outros dados importantes para chegar a um preço de venda mais consciente.",
    surface: "bg-[radial-gradient(circle_at_90%_8%,rgba(56,189,248,0.08),transparent_40%),linear-gradient(155deg,rgba(10,33,57,0.98),rgba(14,43,68,0.96))]",
    accent: "left-[44%] right-6",
  },
  {
    number: "03",
    icon: managementIcon,
    title: "GESTÃO DO NEGÓCIO",
    description: "Recursos para acompanhar áreas como produtos, vendas, estoque, clientes, caixa e operação.",
    surface: "bg-[radial-gradient(circle_at_8%_92%,rgba(6,182,212,0.09),transparent_42%),linear-gradient(135deg,rgba(11,36,60,0.98),rgba(13,42,67,0.96))]",
    accent: "left-10 right-[34%]",
  },
  {
    number: "04",
    icon: sophIcon,
    title: "SOPH — SUA SÓCIA DIGITAL",
    description: "Uma camada de assistência criada para apoiar você ao longo da sua jornada dentro da plataforma.",
    surface: "bg-[radial-gradient(circle_at_92%_88%,rgba(34,211,238,0.08),transparent_40%),linear-gradient(145deg,rgba(14,43,68,0.96),rgba(8,29,50,0.98))]",
    accent: "left-[38%] right-10",
  },
];

const slides = [
  {
    label: "Central de Fornecedores",
    title: "Encontre fornecedores com mais facilidade.",
    description: "Explore diferentes segmentos, descubra oportunidades de compra e encontre fornecedores em um só lugar.",
    image: suppliersTablet,
  },
  {
    label: "Importadoras 25 de Março",
    title: "Oportunidades da 25 de Março, mais perto de você.",
    description: "Explore importadoras, encontre contatos e organize seus fornecedores favoritos sem precisar pesquisar em vários lugares.",
    image: importersTablet,
  },
  {
    label: "Categorias",
    title: "Escolha seu nicho. Descubra novas possibilidades.",
    description: "De bolsas e acessórios a papelaria, cosméticos e eletrônicos. Navegue pelas categorias e encontre fornecedores para o seu negócio.",
    image: categoriesTablet,
  },
  {
    label: "Home",
    title: "Muito além dos fornecedores.",
    description: "Tenha acesso a ferramentas para estruturar seu negócio, organizar sua gestão, calcular preços e contar com o apoio da Soph.",
    image: homeTablet,
  },
];

const autoplayDelay = 4000;
const arrowClassName = "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 bg-[#071c32] text-cyan-100 transition-colors duration-300 hover:border-cyan-200/65 hover:bg-[#0d2944] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 motion-reduce:transition-none min-[900px]:absolute min-[900px]:top-1/2 min-[900px]:-translate-y-1/2";

const sectionReveal = (reduced: boolean, delay = 0, distance = 6) => ({
  initial: reduced ? false : { opacity: 0.94, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.24, delay: reduced ? 0 : delay, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
});

export const BenefitsSection = () => {
  const [touchedPillar, setTouchedPillar] = useState<string | null>(null);
  const reduced = !!useReducedMotion();
  const reveal = (delay = 0, distance = 6) => sectionReveal(reduced, delay, distance);

  return (
    <section className="relative overflow-hidden bg-deep pb-16 pt-10 md:pb-24 md:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[min(700px,92vw)] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[150px]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div {...reveal()} className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
          <span className="mb-6 inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-white">MUITO ALÉM DOS FORNECEDORES</span>
          <h2 className="mb-6 text-balance text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">Você entra pelos fornecedores. E encontra <span className="gradient-text">muito mais.</span></h2>
          <p className="mx-auto max-w-3xl text-pretty text-base leading-relaxed text-white sm:text-lg">Além da Central de Fornecedores, o EmpreendaJá reúne ferramentas para ajudar você a precificar, organizar e administrar seu negócio — com a Soph como camada de assistência dentro da plataforma.</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              data-touch-active={touchedPillar === pillar.title || undefined}
              onPointerDown={(event) => {
                if (!reduced && event.pointerType === "touch") setTouchedPillar(pillar.title);
              }}
              onPointerUp={() => setTouchedPillar(null)}
              onPointerCancel={() => setTouchedPillar(null)}
              onLostPointerCapture={() => setTouchedPillar(null)}
              className={`sales-benefit group relative flex min-h-[144px] items-start gap-4 overflow-hidden rounded-2xl border p-5 shadow-[0_14px_38px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)] sm:gap-5 sm:p-6 ${index === 0 ? "border-cyan-200/[0.24]" : "border-cyan-200/[0.13]"} ${pillar.surface}`}
            >
              <div aria-hidden="true" className={`pointer-events-none absolute top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/65 to-transparent opacity-70 ${pillar.accent}`} />
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center sm:h-16 sm:w-16">
                <div className="sales-benefit-icon grid h-full w-full place-items-center">
                  <img src={pillar.icon} alt="" loading="lazy" className="h-full w-full object-contain" />
                </div>
              </div>
              <div className="min-w-0 pt-0.5">
                <div className="mb-2 flex items-center gap-2"><span className="text-[10px] font-extrabold tracking-[0.18em] text-cyan-300/75">{pillar.number}</span><span aria-hidden="true" className="h-px w-6 bg-cyan-300/20" /></div>
                <h3 className="text-sm font-extrabold uppercase leading-snug tracking-[0.1em] text-white sm:text-base">{pillar.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-white sm:text-base">{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>

        <motion.p {...reveal(0.06)} className="mx-auto mt-12 max-w-3xl text-balance text-center text-base font-bold leading-relaxed text-white sm:text-lg"><span className="text-cyan-300">Fornecedores</span> para encontrar. Ferramentas para administrar. Soph para acompanhar.</motion.p>
      </div>
    </section>
  );
};

const ModulesSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [tourInView, setTourInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => typeof document === "undefined" || !document.hidden);
  const [pressedPointer, setPressedPointer] = useState<number | null>(null);
  const [instant, setInstant] = useState(true);
  const [interaction, setInteraction] = useState(0);
  const tourRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const reduced = !!useReducedMotion();
  const activeSlide = slides[activeIndex];
  const reveal = (delay = 0, distance = 6) => sectionReveal(reduced, delay, distance);

  const paginate = (step: number, instant = false) => {
    setInstant(instant);
    setInteraction((count) => count + 1);
    setActiveIndex((current) => (current + step + slides.length) % slides.length);
  };

  const selectSlide = (index: number, instant: boolean) => {
    setInstant(instant);
    setInteraction((count) => count + 1);
    setActiveIndex(index);
  };

  useEffect(() => {
    const node = tourRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => setTourInView(entry.intersectionRatio >= 0.18), { threshold: 0.18 });
    const handleVisibility = () => {
      setPageVisible(!document.hidden);
      if (document.hidden) setPressedPointer(null);
    };
    const releasePointer = (event: PointerEvent) => {
      setPressedPointer((pointer) => pointer === event.pointerId ? null : pointer);
    };
    const clearPointer = () => setPressedPointer(null);

    observer.observe(node);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pointerup", releasePointer);
    window.addEventListener("pointercancel", releasePointer);
    window.addEventListener("blur", clearPointer);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pointerup", releasePointer);
      window.removeEventListener("pointercancel", releasePointer);
      window.removeEventListener("blur", clearPointer);
    };
  }, []);

  useEffect(() => {
    if (reduced || !tourInView || !pageVisible || pressedPointer !== null) return;

    const timer = window.setTimeout(() => {
      setInstant(false);
      setActiveIndex((current) => (current + 1) % slides.length);
    }, autoplayDelay);

    return () => window.clearTimeout(timer);
  }, [activeIndex, interaction, pageVisible, pressedPointer, reduced, tourInView]);

  return (
    <section id="ecossistema" className="relative overflow-hidden bg-[#0A192F] py-16 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[48%] h-[620px] w-[min(980px,94vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-[170px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4">
        <motion.header {...reveal()} className="mx-auto mb-6 max-w-4xl text-center md:mb-10">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">Conheça a plataforma <span className="gradient-text">por dentro</span></h2>
        </motion.header>

        <motion.div
          ref={tourRef}
          {...reveal()}
          role="region"
          aria-roledescription="carrossel"
          aria-label="Tour da plataforma EmpreendaJá"
          tabIndex={0}
          onFocusCapture={() => setInteraction((count) => count + 1)}
          onPointerDown={(event) => {
            if (event.isPrimary && event.button === 0) setPressedPointer(event.pointerId);
          }}
          onKeyDown={(event) => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            paginate(event.key === "ArrowLeft" ? -1 : 1, true);
          }}
          className="mx-auto max-w-7xl rounded-[1.5rem] border border-cyan-200/[0.16] bg-[#071c32]/95 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.42),0_0_54px_rgba(0,239,255,0.07),inset_0_1px_0_rgba(255,255,255,0.045)] outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F] sm:p-5 lg:p-6"
        >
          <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {slides.map((slide, index) => (
              <button key={slide.label} type="button" onClick={(event) => selectSlide(index, event.detail === 0)} aria-current={activeIndex === index ? "true" : undefined} className={`min-h-11 min-w-0 rounded-lg border px-2 py-2 text-[10px] font-extrabold uppercase tracking-[0.07em] transition-[border-color,background-color,color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 motion-reduce:transition-none lg:text-xs ${activeIndex === index ? "border-cyan-300/45 bg-cyan-300/[0.1] text-cyan-100 shadow-[inset_0_1px_0_rgba(165,243,252,0.08),0_0_18px_rgba(0,239,255,0.06)]" : "border-white/[0.06] bg-[#0d2944]/70 text-white/70 hover:border-cyan-300/20 hover:text-white"}`}>{slide.label}</button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-cyan-200/[0.12] bg-[#06172b] min-[900px]:px-16">
            <div
              className="touch-pan-y"
              onTouchStart={(event) => {
                const touch = event.touches[0];
                touchStart.current = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
              }}
              onTouchCancel={() => { touchStart.current = null; }}
              onTouchEnd={(event) => {
                const start = touchStart.current;
                touchStart.current = null;
                if (!start) return;
                const touch = event.changedTouches[0];
                const dx = touch.clientX - start.x;
                const dy = touch.clientY - start.y;
                if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) paginate(dx < 0 ? 1 : -1);
              }}
            >
              <motion.article
                key={activeIndex}
                initial={reduced || instant ? false : { opacity: 0.48, transform: "translateY(10px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: reduced || instant ? 0 : 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                className="grid min-w-0 min-[900px]:grid-cols-[minmax(250px,0.85fr)_minmax(0,1.15fr)] min-[900px]:items-center min-[900px]:gap-6"
              >
                <div className="flex min-w-0 items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(0,239,255,0.075),transparent_68%)] px-2 pt-2 min-[900px]:order-2 min-[900px]:p-4">
                  <img src={activeSlide.image} alt={`Tablet com a tela de ${activeSlide.label}`} width={1122} height={1402} loading="lazy" decoding="async" draggable={false} className="h-auto w-full max-w-[440px] select-none object-contain" />
                </div>

                <div className="min-w-0 px-4 pb-4 pt-3 sm:px-6 min-[900px]:order-1 min-[900px]:px-0 min-[900px]:py-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-cyan-300/85 sm:text-xs">{activeSlide.label}</span>
                    <span className="shrink-0 text-sm font-bold tabular-nums text-white/60"><span className="text-cyan-300">{String(activeIndex + 1).padStart(2, "0")}</span> / {String(slides.length).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">{activeSlide.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-base">{activeSlide.description}</p>
                </div>
              </motion.article>
            </div>

            <div className="flex items-center gap-3 border-t border-cyan-200/[0.09] px-3 py-1 sm:px-4 min-[900px]:px-0">
              <button type="button" onClick={(event) => paginate(-1, event.detail === 0)} aria-label="Slide anterior" className={`${arrowClassName} min-[900px]:left-2`}><ArrowLeft className="h-5 w-5" aria-hidden="true" /></button>
              <div className="flex flex-1 items-center gap-2" aria-label={`Slide ${activeIndex + 1} de ${slides.length}`}>
                {slides.map((slide, index) => (
                  <button key={slide.label} type="button" onClick={(event) => selectSlide(index, event.detail === 0)} aria-label={`Ir para ${slide.label}`} aria-current={activeIndex === index ? "true" : undefined} className="flex h-11 flex-1 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"><span className={`h-1.5 w-full rounded-full transition-[background-color,box-shadow] duration-300 motion-reduce:transition-none ${activeIndex === index ? "bg-cyan-300 shadow-[0_0_10px_rgba(0,239,255,0.55)]" : "bg-white/15"}`} /></button>
                ))}
              </div>
              <button type="button" onClick={(event) => paginate(1, event.detail === 0)} aria-label="Próximo slide" className={`${arrowClassName} min-[900px]:right-2`}><ArrowRight className="h-5 w-5" aria-hidden="true" /></button>
            </div>
          </div>

          <p className="sr-only" aria-live={reduced || interaction > 0 ? "polite" : "off"}>Slide {activeIndex + 1} de {slides.length}: {activeSlide.label}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
