import type { LucideIcon } from "lucide-react";

export type TrackingEvent =
  | "ViewContent"
  | "InitiateCheckout"
  | "Contact"
  | "PlayVideo"
  | "ViewOffer";

export type SectionToggles = {
  bonuses: boolean;
  testimonials: boolean;
  customerGallery: boolean;
  guarantee: boolean;
  author: boolean;
  faq: boolean;
  mobilePurchaseBar: boolean;
};

export type Book = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  lessons: string[];
};

export type SimpleCard = {
  title: string;
  description: string;
};

export type IconCard = SimpleCard & {
  iconName?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
  verified?: boolean;
  demo?: boolean;
};

export type TrustBadgeData = SimpleCard & {
  icon: LucideIcon;
};
