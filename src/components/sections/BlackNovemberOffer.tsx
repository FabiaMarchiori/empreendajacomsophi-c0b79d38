import { ArrowUpRight } from "lucide-react";

import campaignGifts from "@/assets/black-friday-sacolas.png";
import { Button } from "@/components/ui/button";
import { BLACK_NOVEMBER, formatCampaignPrice } from "@/lib/black-november";

const campaignDeadline = BLACK_NOVEMBER.validUntil.split("-").reverse().join("/");

const BlackNovemberOffer = () => (
  <section aria-labelledby="black-friday-title" className="relative isolate overflow-hidden border-t border-cyan-300/15 bg-[#031522]">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-no-repeat bg-right [background-size:auto_clamp(6rem,37vw,18rem)] max-md:hidden lg:bg-contain xl:bg-cover"
      style={{ backgroundImage: `url("${campaignGifts}")` }}
    />
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#031522] to-transparent max-md:hidden lg:hidden" />
    <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:flex lg:min-h-[max(31rem,33.333vw)] lg:items-center lg:py-10 xl:px-12">
      <div className="max-w-xl lg:w-[46%]">
        <h2 id="black-friday-title" className="max-w-[18ch] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl xl:text-5xl">
          Seu ano de oportunidades <span className="text-cyan-300">começa agora.</span>
        </h2>
        <p className="mt-4 max-w-[min(56%,32ch)] text-base leading-relaxed text-slate-200 max-md:hidden sm:text-lg lg:max-w-lg">
          Entre na plataforma com a oferta de Black Friday e tenha acesso a fornecedores, categorias e ferramentas para comprar melhor.
        </p>
        <p className="mt-3 max-w-md text-base leading-relaxed text-slate-200 md:hidden">
          Acesse fornecedores da 25 de Março com uma condição especial.
        </p>
        <img
          src={campaignGifts}
          alt="Sacola de fornecedores da 25 de Março, presentes e etiqueta Black Friday"
          width={2172}
          height={724}
          loading="lazy"
          className="mx-auto mt-5 block h-auto w-full md:hidden"
        />
        <div className="mt-6 max-md:mt-5">
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
        <Button asChild className="mt-5 min-h-14 w-full bg-cyan-300 px-6 text-sm font-extrabold text-[#061423] hover:bg-cyan-200 md:w-auto">
          <a href={BLACK_NOVEMBER.checkout} target="_blank" rel="noopener noreferrer">
            GARANTIR MINHA VAGA <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <p className="mt-3 text-xs text-slate-300">Oferta válida até {campaignDeadline}.</p>
      </div>
    </div>
  </section>
);

export default BlackNovemberOffer;
