import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { BLACK_NOVEMBER } from "@/lib/black-november";
import PricingSection from "@/components/sections/PricingSection";
import BlackNovemberOffer from "@/components/sections/BlackNovemberOffer";
import FinalCTASection from "@/components/sections/FinalCTASection";

vi.mock("framer-motion", async () => {
  const React = await import("react");
  return {
    useReducedMotion: () => true,
    motion: new Proxy({}, {
      get: (_, tag: string) => ({ initial, animate, whileInView, viewport, transition, ...props }: Record<string, unknown>) =>
        React.createElement(tag, props),
    }),
  };
});
afterEach(cleanup);

describe("Black November commercial rules", () => {
  it("sets the annual price to R$67", () => expect(BLACK_NOVEMBER.price).toBe(67));
  it("preserves the original annual price of R$97", () => expect(BLACK_NOVEMBER.originalPrice).toBe(97));
  it("saves R$30", () => expect(BLACK_NOVEMBER.originalPrice - BLACK_NOVEMBER.price).toBe(30));
  it("advertises approximately 31% discount", () => {
    expect(BLACK_NOVEMBER.discountPercent).toBe(31);
    expect(Math.round(BLACK_NOVEMBER.savings / BLACK_NOVEMBER.originalPrice * 100)).toBe(31);
  });
  it("provides 12 months of access", () => expect(BLACK_NOVEMBER.accessMonths).toBe(12));
  it("ends on 30 November 2026", () => expect(BLACK_NOVEMBER.validUntil).toBe("2026-11-30"));
  it("preserves the monthly checkout", () => {
    render(<PricingSection />);
    expect(screen.getByRole("link", { name: "Assinar Mensal" }).getAttribute("href")).toBe("https://pay.kiwify.com.br/gNROnVP");
  });
  it("uses the official campaign checkout for annual purchase", () => {
    render(<PricingSection />);
    expect(screen.getByRole("link", { name: "Assinar Plano Anual" }).getAttribute("href")).toBe("https://pay.kiwify.com.br/cYf0nTs");
  });
  it("uses the official campaign checkout in the Hero", () => {
    render(<BlackNovemberOffer />);
    expect(screen.getByRole("link", { name: "QUERO APROVEITAR A OFERTA" }).getAttribute("href")).toBe("https://pay.kiwify.com.br/cYf0nTs");
  });
  it("takes the final campaign CTA to the plans", () => {
    render(<FinalCTASection />);
    expect(screen.getByRole("link", { name: "QUERO APROVEITAR A OFERTA" }).getAttribute("href")).toBe("#planos");
  });
});