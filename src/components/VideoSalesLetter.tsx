import CTAButton from "@/components/CTAButton";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import VideoPlayer from "@/components/VideoPlayer";
import { siteConfig } from "@/data/siteConfig";

export default function VideoSalesLetter() {
  return (
    <MotionSection className="bg-white" id="vsl">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Apresentação"
          title="Assista e conheça o conteúdo do Box"
          description="Veja como os dois livros se complementam para organizar ideias, prestação de serviços e busca pelos primeiros clientes."
        />
        <div className="mx-auto mt-10 max-w-4xl">
          <VideoPlayer
            localVideoSrc={siteConfig.localVideoSrc}
            poster={siteConfig.videoPoster}
            youtubeVideoId={siteConfig.youtubeVideoId}
          />
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-graphite">
            O vídeo não inicia automaticamente. Configure um link do YouTube ou um MP4 local quando o material
            estiver pronto para publicação.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton icon="cart">Quero receber os 2 livros</CTAButton>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
