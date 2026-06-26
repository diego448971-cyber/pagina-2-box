import ImageGallery from "@/components/ImageGallery";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import { customerGallery } from "@/data/siteConfig";

export default function CustomerGallery() {
  return (
    <MotionSection className="bg-cloud">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Galeria"
          title="Feedbacks de quem já conheceu o material"
          description="Use este espaço para fotos, prints do WhatsApp, mensagens do Instagram e outros feedbacks com autorização."
        />
        {/* Coloque em public/images/customers e public/images/testimonials apenas fotos, prints do WhatsApp, prints do Instagram e feedbacks autorizados. */}
        <div className="mt-10">
          <ImageGallery images={customerGallery} />
        </div>
      </div>
    </MotionSection>
  );
}
