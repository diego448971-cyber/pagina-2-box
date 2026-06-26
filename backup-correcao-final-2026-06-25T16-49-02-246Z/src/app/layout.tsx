import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { getSiteUrl } from "@/lib/utils";
import TrackingScripts from "@/components/TrackingScripts";

const siteUrl = getSiteUrl(siteConfig.seo.siteUrl);
const ogImageUrl = new URL(siteConfig.seo.ogImage, siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  alternates: {
    canonical: getSiteUrl(siteConfig.seo.canonicalUrl)
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteUrl,
    siteName: siteConfig.productName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${siteConfig.productName} - 2 livros digitais`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [ogImageUrl]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111f"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo-principal">
          Pular para o conteúdo
        </a>
        {children}
        <TrackingScripts />
      </body>
    </html>
  );
}
