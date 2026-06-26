"use client";

import { PlayCircle } from "lucide-react";
import { useRef, useState } from "react";
import ResponsiveImage from "@/components/ResponsiveImage";
import { isConfigured, getYoutubeEmbedUrl } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

type VideoPlayerProps = {
  youtubeVideoId: string;
  localVideoSrc: string;
  poster: string;
};

export default function VideoPlayer({ youtubeVideoId, localVideoSrc, poster }: VideoPlayerProps) {
  const [started, setStarted] = useState(false);
  const tracked = useRef(false);
  const youtubeUrl = getYoutubeEmbedUrl(youtubeVideoId);
  const hasYoutube = isConfigured(youtubeVideoId) && youtubeUrl;
  const hasLocalVideo = isConfigured(localVideoSrc);

  function trackVideoStart() {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent("PlayVideo", { video_type: hasYoutube ? "youtube" : "local" });
    }
  }

  if (hasYoutube && started) {
    return (
      <div className="aspect-video overflow-hidden rounded-lg bg-black shadow-premium">
        <iframe
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
          loading="lazy"
          src={`${youtubeUrl}&autoplay=1`}
          title="VÃ­deo de apresentaÃ§Ã£o do Box Renda Extra com EstratÃ©gia"
        />
      </div>
    );
  }

  if (hasLocalVideo) {
    return (
      <video
        className="aspect-video w-full rounded-lg bg-black shadow-premium"
        controls
        autoPlay
        muted
        playsInline
        loop
        onPlay={trackVideoStart}
        poster={poster}
        preload="auto"
      >
        <source src={localVideoSrc} type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
    );
  }

  return (
    <button
      aria-label={
        hasYoutube
          ? "Reproduzir vÃ­deo de apresentaÃ§Ã£o"
          : "EspaÃ§o reservado para o vÃ­deo de apresentaÃ§Ã£o"
      }
      className="group relative block aspect-video w-full overflow-hidden rounded-lg bg-ink text-left shadow-premium"
      disabled={!hasYoutube}
      onClick={() => {
        setStarted(true);
        trackVideoStart();
      }}
      type="button"
    >
      <ResponsiveImage
        alt="Capa do vÃ­deo de apresentaÃ§Ã£o do box"
        className="absolute inset-0 h-full w-full rounded-none opacity-78"
        imageClassName="transition duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 900px"
        src={poster}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <span className="absolute inset-x-4 bottom-4 z-10 rounded-lg border border-white/20 bg-white/10 p-4 text-white backdrop-blur sm:inset-x-8 sm:bottom-8">
        <span className="flex items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold text-ink shadow-button">
            <PlayCircle aria-hidden="true" className="h-6 w-6" />
          </span>
          <span>
            <strong className="block text-base font-black sm:text-xl">
              {hasYoutube
                ? "Assistir Ã  apresentaÃ§Ã£o"
                : "Adicione aqui o vÃ­deo de apresentaÃ§Ã£o do seu produto."}
            </strong>
            <span className="mt-1 block text-sm text-white/80">
              {hasYoutube
                ? "O vÃ­deo comeÃ§a somente depois do seu clique."
                : "Configure YouTube ou MP4 em src/data/siteConfig.ts."}
            </span>
          </span>
        </span>
      </span>
    </button>
  );
}


