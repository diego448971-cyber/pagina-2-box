import FAQItem from "@/components/FAQItem";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import { faqs } from "@/data/siteConfig";

export default function FAQ() {
  return (
    <MotionSection className="bg-cloud" id="duvidas">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Perguntas frequentes"
          title="Dúvidas comuns antes de acessar o Box"
          description="Respostas objetivas sobre acesso, formato, suporte, pagamento e finalidade educativa do material."
        />
        <div className="mx-auto mt-10 grid max-w-3xl gap-3">
          {faqs.map((faq) => (
            <FAQItem answer={faq.answer} key={faq.question} question={faq.question} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
