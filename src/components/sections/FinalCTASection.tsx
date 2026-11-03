import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLACK_NOVEMBER, formatCampaignPrice } from "@/lib/black-november";

const WHATSAPP_LINK = "https://wa.me/5511983348749?text=Pagina%20de%20vendas";

const FinalCTASection = () => (
  <section id="cta-final" className="relative py-16 md:py-24 bg-deep overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
    </div>
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          <span className="text-foreground">AINDA DÁ TEMPO DE </span>
          <span className="text-campaign">TRANSFORMAR SEU NEGÓCIO!</span>
        </h2>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
          Um ano de acesso ao EmpreendaJá com Soph por apenas {formatCampaignPrice(BLACK_NOVEMBER.price)}.
        </p>
        <p className="text-base text-foreground">Aproveite a Black November até 30 de novembro de 2026.</p>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <Button asChild variant="campaign" className="h-auto min-h-14 w-full whitespace-normal rounded-xl px-6 py-5 text-base font-bold sm:w-auto">
            <a href="#planos">
              QUERO APROVEITAR A OFERTA
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/35 px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/[0.07] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5 text-cyan-300" />
            Tirar dúvidas no WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
