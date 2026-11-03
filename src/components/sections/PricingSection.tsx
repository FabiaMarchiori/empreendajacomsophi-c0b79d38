import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarCheck, Check, LockKeyhole, MessageCircle, ShieldCheck, Sparkles, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLACK_NOVEMBER, formatCampaignPrice } from "@/lib/black-november";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const features = [
  "Central de Fornecedores com mais de 320 opções",
  "Categorias e nichos organizados",
  "Precificação",
  "Gestão do negócio — ferramentas para organizar sua operação",
  "Soph — assistente digital que orienta você dentro da plataforma",
  "Guias e ferramentas para quem empreende",
];

const PricingSection = () => {
  const reduced = useReducedMotion();

  const entrance = (x: number, delay = 0) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, x },
    whileInView: reduced ? { opacity: 1 } : { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: reduced ? 0.01 : 0.55, delay: reduced ? 0 : delay, ease: "easeOut" as const },
  });

  return (
    <section id="planos" className="relative overflow-hidden bg-[#0A192F] py-20 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.header
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: reduced ? 0.01 : 0.55, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
        >
          <span className="mb-5 inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-white">
            PLANOS DO EMPREENDAJÁ
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Escolha como você quer acessar a plataforma.
          </h2>
        </motion.header>

        <div className="mx-auto grid max-w-4xl items-stretch gap-8 md:grid-cols-2">
          <motion.article
            {...entrance(-24)}
            className="card-premium flex flex-col p-6 transition-[transform,border-color] duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:hover:border-cyan-300/25 sm:p-8"
          >
            <header className="mb-6">
              <h3 className="mb-1.5 text-xl font-bold text-white">Plano Mensal</h3>
              <p className="text-base text-white">Para quem prefere começar mês a mês.</p>
            </header>

            <div className="mb-7">
              <span className="text-5xl font-extrabold tracking-tight text-white">R$ 47</span>
              <span className="text-white/70">/mês</span>
            </div>

            <ul className="mb-8 flex-1 space-y-3.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-base leading-snug text-white">{feature}</span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <CalendarCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <span className="text-base font-semibold leading-snug text-white">Pagamento mensal</span>
              </li>
              <li className="flex items-start gap-3">
                <X aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-white/40" />
                <span className="text-base leading-snug text-white/60">
                  <span className="line-through">Soph Gestão</span> — sistema de gestão exclusivo do Plano Anual
                </span>
              </li>
            </ul>

            <a
              href="https://pay.kiwify.com.br/gNROnVP"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-dark inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-center font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A192F]"
            >
              Assinar Mensal
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </motion.article>

          <motion.article
            {...entrance(24, 0.06)}
            className="campaign-plan relative flex flex-col p-6 transition-[transform,border-color] duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 sm:p-8"
          >
            <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-campaign px-5 py-1.5 text-sm font-bold text-campaign-foreground">
              <Sparkles aria-hidden="true" className="h-4 w-4" />
              BLACK FRIDAY
            </div>

            <header className="mb-6 mt-2">
              <h3 className="mb-1.5 text-xl font-bold text-white">Plano Anual</h3>
              <p className="text-base text-white">Para quem quer mais economia no acesso.</p>
            </header>

            <div className="mb-7">
              <p className="mb-2 text-base text-foreground">De <s>{formatCampaignPrice(BLACK_NOVEMBER.originalPrice)}</s></p>
              <div>
                <span className="text-5xl font-extrabold text-foreground">{formatCampaignPrice(BLACK_NOVEMBER.price)}</span>
                <span className="text-foreground">/ano</span>
              </div>
              <p className="mt-3 text-sm font-bold text-campaign">Economize {formatCampaignPrice(BLACK_NOVEMBER.savings)} • {BLACK_NOVEMBER.discountPercent}% de desconto</p>
              <p className="mt-2 text-sm text-foreground">{BLACK_NOVEMBER.accessMonths} meses de acesso.</p>
              <p className="mt-2 text-xs text-foreground">Oferta válida até 30/11/2026.</p>
            </div>

            <ul className="mb-8 flex-1 space-y-3.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-base leading-snug text-white">{feature}</span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <CalendarCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <span className="text-base font-semibold leading-snug text-white">Pagamento anual</span>
              </li>
              <li className="flex items-start gap-3 rounded-lg border border-cyan-300/15 bg-cyan-400/[0.06] px-3 py-2.5">
                <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <span className="text-base font-semibold leading-snug text-cyan-200">
                  Inclui Soph Gestão — sistema de gestão do negócio
                </span>
              </li>
            </ul>

            <Button asChild variant="campaign" className="min-h-14 w-full whitespace-normal rounded-xl px-5 py-4 text-center text-lg font-bold">
              <a href={BLACK_NOVEMBER.checkout} target="_blank" rel="noopener noreferrer">
                Assinar Plano Anual
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
            </Button>
          </motion.article>
        </div>

        <motion.ul
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduced ? 0.01 : 0.45, delay: reduced ? 0 : 0.12 }}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-3 rounded-xl border border-cyan-300/12 bg-white/[0.03] px-5 py-3.5 text-center"
        >
          {[
            { Icon: Zap, label: "Acesso imediato" },
            { Icon: ShieldCheck, label: "7 dias de garantia" },
            { Icon: LockKeyhole, label: "Pagamento seguro via Kiwify" },
          ].map(({ Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon
                aria-hidden="true"
                className="h-[18px] w-[18px] shrink-0 text-cyan-400 drop-shadow-[0_0_6px_rgba(0,239,255,0.35)]"
              />
              <span className="text-sm font-semibold text-white">{label}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0.01 : 0.45, delay: reduced ? 0 : 0.18 }}
          className="mt-10 text-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A192F]"
          >
            <MessageCircle aria-hidden="true" className="h-5 w-5" />
            Tem dúvidas? Fale no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
