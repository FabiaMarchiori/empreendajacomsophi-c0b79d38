import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import campaignGlass from "@/assets/black-november-glass.jpg";
import { Button } from "@/components/ui/button";
import { BLACK_NOVEMBER, formatCampaignPrice } from "@/lib/black-november";

const BlackNovemberOffer = () => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="campaign-composition relative isolate mx-auto w-full max-w-[580px] overflow-hidden px-6 py-9 sm:px-10 sm:py-12"
    >
      <img src={campaignGlass} alt="" width={1024} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="campaign-composition-shade absolute inset-0 -z-10" />
      <p className="mb-7 flex items-center gap-3 text-xs font-extrabold text-campaign sm:text-sm">
        <span className="h-px w-8 bg-campaign" aria-hidden="true" />
        BLACK NOVEMBER 2026
      </p>
      <h2 className="max-w-[13ch] text-2xl font-extrabold leading-[1.12] text-foreground min-[380px]:text-3xl sm:text-4xl lg:text-5xl">
        SEU ANO DE <span className="text-campaign">OPORTUNIDADES</span>
      </h2>
      <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="text-base font-semibold text-foreground">Plano anual</span>
        <span className="border border-campaign/40 bg-campaign/10 px-2.5 py-1 text-xs font-extrabold text-campaign">
          {BLACK_NOVEMBER.discountPercent}% DE DESCONTO
        </span>
      </div>
      <div className="mt-5">
        <p className="text-base text-foreground">De <s>{formatCampaignPrice(BLACK_NOVEMBER.originalPrice)}</s> por</p>
        <p className="mt-1 flex items-baseline gap-2 font-extrabold text-foreground">
          <span className="text-2xl sm:text-3xl">R$</span>
          <span className="text-7xl leading-none sm:text-8xl">{BLACK_NOVEMBER.price}</span>
          <span className="text-2xl sm:text-3xl">,00</span>
        </p>
        <p className="mt-4 text-sm font-semibold text-foreground">{BLACK_NOVEMBER.accessMonths} meses de acesso. <span className="text-campaign">Economize R$ {BLACK_NOVEMBER.savings}.</span></p>
      </div>
      <Button asChild variant="campaign" className="mt-7 min-h-14 w-full whitespace-normal px-4 py-4 text-center text-sm font-extrabold">
        <a href={BLACK_NOVEMBER.checkout} target="_blank" rel="noopener noreferrer">
          QUERO APROVEITAR A OFERTA <ArrowUpRight aria-hidden="true" />
        </a>
      </Button>
      <p className="mt-4 text-center text-xs text-foreground">Oferta válida até 30/11/2026.</p>
    </motion.div>
  );
};

export default BlackNovemberOffer;