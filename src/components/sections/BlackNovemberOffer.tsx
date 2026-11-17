import { ArrowUpRight } from "lucide-react";

import campaignGifts from "@/assets/black-friday-sacolas.png";
import { Button } from "@/components/ui/button";
import { BLACK_NOVEMBER, formatCampaignPrice } from "@/lib/black-november";

const campaignDeadline = BLACK_NOVEMBER.validUntil.split("-").reverse().join("/");

const BlackNovemberOffer = () => (
  <section aria-labelledby="black-friday-title" className="relative isolate overflow-hidden border-t border-cyan-300/15 bg-[#031522]">
    <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-10 sm:px-8 sm:pt-12 lg:flex lg:min-h-[max(31rem,33.333vw)] lg:items-center lg:py-10 xl:px-12">
      <div className="max-w-xl lg:w-[46%]">
        <h2 id="black-friday-title" className="max-w-[18ch] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl xl:text-5xl">
          Seu ano de oportunidades <span className="text-cyan-300">começa agora.</span>
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
          Entre na plataforma com a oferta de Black Friday e tenha acesso a fornecedores, categorias e ferramentas para comprar melhor.
        </p>
        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-white">Plano anual</span>
            <span className="rounded-md border border-cyan-300/35 bg-cyan-300/10 px-2.5 py-1 text-xs font-extrabold text-cyan-200">
              {BLACK_NOVEMBER.discountPercent}% OFF
            </span>
          </div>
          <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <s className="text-base text-slate-300">{formatCampaignPrice(BLACK_NOVEMBER.originalPrice)}</s>
            <strong className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{formatCampaignPrice(BLACK_NOVEMBER.price)}</strong>
          </div>
          <p className="mt-2 text-sm text-slate-200">
            {BLACK_NOVEMBER.accessMonths} meses de acesso. Economize {formatCampaignPrice(BLACK_NOVEMBER.savings)}.
          </p>
        </div>
        <Button asChild className="mt-5 min-h-14 w-full bg-cyan-300 px-6 text-sm font-extrabold text-[#061423] hover:bg-cyan-200 sm:w-auto">
          <a href={BLACK_NOVEMBER.checkout} target="_blank" rel="noopener noreferrer">
            GARANTIR MINHA VAGA <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <p className="mt-3 text-xs text-slate-300">Oferta válida até {campaignDeadline}.</p>
      </div>
    </div>
    <div className="mt-1 flex justify-end overflow-hidden lg:absolute lg:inset-0 lg:mt-0">
      <img
        src={campaignGifts}
        alt="Sacolas e presentes com os dizeres Fornecedores da 25 de Março e Black Friday"
        width={2172}
        height={724}
        loading="lazy"
        className="h-auto w-[168%] max-w-none shrink-0 lg:h-full lg:w-full lg:object-contain lg:object-right xl:object-cover"
      />
    </div>
  </section>
);

export default BlackNovemberOffer;
