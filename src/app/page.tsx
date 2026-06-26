import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import VideoSalesLetter from "@/components/VideoSalesLetter";
import BooksPresentation from "@/components/BooksPresentation";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import TargetAudience from "@/components/TargetAudience";
import Bonuses from "@/components/Bonuses";
import Testimonials from "@/components/Testimonials";
import Offer from "@/components/Offer";
import Guarantee from "@/components/Guarantee";
import AuthorSection from "@/components/AuthorSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobilePurchaseBar from "@/components/MobilePurchaseBar";
import CookieNotice from "@/components/CookieNotice";
import { siteConfig } from "@/data/siteConfig";
import { books, bonuses } from "@/data/siteConfig";
import { currencyToNumber, getCheckoutUrl, getSiteUrl } from "@/lib/utils";

export default function Home() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: siteConfig.productName,
    description: siteConfig.seo.description,
    image: new URL(siteConfig.seo.ogImage, getSiteUrl(siteConfig.seo.siteUrl)).toString(),
    brand: {
      "@type": "Brand",
      name: siteConfig.brandName
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: currencyToNumber(siteConfig.promotionalPrice),
      availability: "https://schema.org/InStock",
      url: getCheckoutUrl(siteConfig.checkoutUrl)
    },
    isRelatedTo: books.map((book) => ({
      "@type": "Book",
      name: book.title,
      bookFormat: "https://schema.org/EBook"
    })),
    additionalProperty: siteConfig.sections.bonuses
      ? bonuses.map((bonus) => ({
          "@type": "PropertyValue",
          name: bonus.title,
          value: "Material complementar"
        }))
      : undefined
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Benefits />
        <VideoSalesLetter />
        <BooksPresentation />
        <WhatYouWillLearn />
        <TargetAudience />
        {siteConfig.sections.bonuses ? <Bonuses /> : null}
        {siteConfig.sections.testimonials ? <Testimonials /> : null}
<Offer />
        {siteConfig.sections.guarantee ? <Guarantee /> : null}
        {siteConfig.sections.author ? <AuthorSection /> : null}
        {siteConfig.sections.faq ? <FAQ /> : null}
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      {siteConfig.sections.mobilePurchaseBar ? <MobilePurchaseBar /> : null}
      <CookieNotice />
    </>
  );
}
