import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage);

  return (
    <footer className="bg-slate-950 py-10 text-white" id="rodape">
      <div className="container-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-xl font-black">{siteConfig.productName}</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Produto de {siteConfig.authorName}. Este produto possui finalidade educacional e não oferece garantia de
            resultados financeiros. Os resultados variam de acordo com cada pessoa.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.14em] text-gold">Suporte</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/70">
            <a className="hover:text-gold" href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-gold"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.14em] text-gold">Legal</h3>
          <nav className="mt-3 grid gap-2 text-sm text-white/70" aria-label="Links legais">
            <a className="hover:text-gold" href="/politica-de-privacidade">
              Política de Privacidade
            </a>
            <a className="hover:text-gold" href="/termos-de-uso">
              Termos de Uso
            </a>
            <a className="hover:text-gold" href="/politica-de-reembolso">
              Política de Reembolso
            </a>
          </nav>
        </div>
      </div>
      <div className="container-shell mt-8 border-t border-white/10 pt-6 text-xs leading-5 text-white/50">
        <p>
          © {year} {siteConfig.productName}. Todos os direitos reservados. Esta página não possui vínculo com Facebook,
          Instagram, Meta, Google ou WhatsApp.
        </p>
      </div>
    </footer>
  );
}
