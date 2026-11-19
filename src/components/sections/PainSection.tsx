import { motion, useReducedMotion } from "framer-motion";
import optionsIcon from "@/assets/dificuldades/opcoes.png";
import securityIcon from "@/assets/dificuldades/seguranca.png";
import decisionIcon from "@/assets/dificuldades/decisao.png";
import timeIcon from "@/assets/dificuldades/tempo.png";

const pains = [
  {
    icon: optionsIcon,
    label: "Poucas opções",
    text: "Compra sempre dos mesmos fornecedores e encontra poucas opções para comparar.",
    surface:
      "bg-[radial-gradient(circle_at_12%_0%,rgba(34,211,238,0.11),transparent_42%),linear-gradient(145deg,rgba(16,48,76,0.96),rgba(10,31,53,0.98))]",
    accent: "left-6 right-[42%]",
  },
  {
    icon: securityIcon,
    label: "Segurança",
    text: "Tem receio de cair em golpes ao comprar de fornecedores que ainda não conhece.",
    surface:
      "bg-[radial-gradient(circle_at_88%_8%,rgba(56,189,248,0.09),transparent_40%),linear-gradient(155deg,rgba(11,35,60,0.98),rgba(15,45,70,0.96))]",
    accent: "left-[44%] right-6",
  },
  {
    icon: decisionIcon,
    label: "Decisão",
    text: "Encontra fornecedores, mas tem dificuldade para comparar opções e decidir onde comprar.",
    surface:
      "bg-[radial-gradient(circle_at_8%_92%,rgba(6,182,212,0.1),transparent_42%),linear-gradient(135deg,rgba(12,38,63,0.98),rgba(13,43,68,0.96))]",
    accent: "left-10 right-[36%]",
  },
  {
    icon: timeIcon,
    label: "Tempo",
    text: "Passa horas pesquisando fornecedores e ainda termina sem saber por onde comprar.",
    surface:
      "bg-[radial-gradient(circle_at_92%_88%,rgba(34,211,238,0.09),transparent_40%),linear-gradient(145deg,rgba(15,45,70,0.96),rgba(9,30,52,0.98))]",
    accent: "left-[38%] right-10",
  },
];

const PainSection = () => {
  const reduced = !!useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "linear-gradient(180deg, #0A192F 0%, #06172B 18%, #06172B 82%, #0A192F 100%)" }}
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[340px] w-[min(780px,94vw)] -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[120px]"
      />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={reduced ? false : { opacity: 0.94, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-4xl text-center md:mb-16"
        >
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            Encontrar <span className="gradient-text">fornecedores</span> não deveria ser a parte mais difícil do seu
            negócio.
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white sm:text-lg">
            Para quem vende ou quer começar a vender, encontrar boas opções, comparar fornecedores e decidir onde
            comprar nem sempre é tão simples quanto deveria.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.label}
              initial={reduced ? false : { opacity: 0.42, transform: "translateY(16px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.46, delay: reduced ? 0 : i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className={`group relative flex min-h-[132px] items-start gap-4 overflow-hidden rounded-2xl border border-cyan-200/[0.14] p-5 shadow-[0_14px_38px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.035)] sm:min-h-[140px] sm:gap-5 sm:p-6 ${pain.surface}`}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/65 to-transparent opacity-70 ${pain.accent}`}
              />
              <div
                className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center"
              >
                <img src={pain.icon} alt="" loading="lazy" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="mb-1.5 text-[10px] font-extrabold uppercase leading-none tracking-[0.16em] text-cyan-300/85 sm:text-[11px]">
                  {pain.label}
                </p>
                <p className="text-base font-semibold leading-relaxed text-white">{pain.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={reduced ? false : { opacity: 0.94, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="mx-auto mt-12 max-w-2xl text-center text-sm font-semibold leading-relaxed text-cyan-200/80 sm:text-base"
        >
          Foi para simplificar esse caminho que o EmpreendaJá começou pelos fornecedores.
        </motion.p>
      </div>
    </section>
  );
};

export default PainSection;
