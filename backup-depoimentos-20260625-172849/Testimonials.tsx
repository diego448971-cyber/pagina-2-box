import CTAButton from "@/components/CTAButton";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <MotionSection className="bg-white" id="depoimentos">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Depoimentos"
          title="Espaço preparado para feedbacks reais e autorizados"
          description="Os textos abaixo são exemplos temporários para demonstrar o layout. Substitua por relatos verdadeiros antes de publicar anúncios."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`${testimonial.name}-${testimonial.location}`} testimonial={testimonial} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <CTAButton icon="cart">Quero acessar o Box agora</CTAButton>
        </div>
      </div>
    </MotionSection>
  );
}
