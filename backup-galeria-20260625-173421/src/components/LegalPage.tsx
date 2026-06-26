import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

type LegalPageProps = {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <>
      <main className="bg-cloud">
        <section className="container-shell py-12 sm:py-16">
          <a className="mb-8 inline-flex rounded-lg text-sm font-black text-amber-800 hover:text-ink" href="/">
            Voltar para a página inicial
          </a>
          <div className="max-w-3xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">{siteConfig.productName}</p>
            <h1 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">{title}</h1>
            <p className="mt-2 text-sm text-graphite">Última atualização: {updatedAt}</p>
            <div className="prose-legal mt-8 text-sm leading-7 text-slate-700">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
