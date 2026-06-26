import { MailCheck, MessageCircle, ShieldCheck } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata = {
  title: `Obrigado | ${siteConfig.productName}`,
  description: "Orientações após a compra do Box Renda Extra com Estratégia."
};

export default function ObrigadoPage() {
  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage);

  return (
    <>
      <main className="bg-cloud">
        <section className="container-shell grid min-h-[70vh] place-items-center py-16">
          <div className="max-w-2xl rounded-lg border border-slate-200 bg-white p-6 text-center shadow-premium sm:p-10">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-50 text-emeraldSoft">
              <MailCheck aria-hidden="true" className="h-8 w-8" />
            </span>
            <h1 className="mt-6 text-3xl font-black leading-tight text-ink sm:text-4xl">
              Obrigado pelo interesse no Box
            </h1>
            <p className="mt-4 text-base leading-7 text-graphite">
              Caso seu pagamento tenha sido confirmado, as instruções de acesso serão enviadas pelos canais informados
              durante a compra.
            </p>
            <div className="mt-6 grid gap-3 text-left text-sm leading-6 text-slate-700">
              <p className="flex gap-3">
                <MailCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-emeraldSoft" />
                Verifique o e-mail usado na compra e também as pastas de spam ou lixo eletrônico.
              </p>
              <p className="flex gap-3">
                <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-emeraldSoft" />
                O envio do acesso depende da confirmação do pagamento pela plataforma de checkout.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:flex sm:justify-center">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 text-sm font-black text-ink hover:bg-slate-100"
                href={whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
                Falar com o suporte
              </a>
              <CTAButton href="/" icon="arrow" variant="dark">
                Voltar ao início
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
