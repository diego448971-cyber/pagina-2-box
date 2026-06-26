import type { Testimonial } from "@/types";

export const testimonials = [
  {
    name: "Cliente de demonstração",
    location: "Brasil",
    text: "Depoimento de demonstração. Substitua pelo feedback verdadeiro de um cliente que autorizou o uso do nome, imagem e texto.",
    rating: 5,
    image: "/images/customers/customer-1.jpg",
    verified: true,
    demo: true
  },
  {
    name: "Leitora de demonstração",
    location: "São Paulo, SP",
    text: "Texto temporário para mostrar como o bloco de depoimentos ficará. Troque por um feedback real antes de publicar.",
    rating: 5,
    image: "/images/customers/customer-2.jpg",
    verified: false,
    demo: true
  },
  {
    name: "Aluno de demonstração",
    location: "Minas Gerais",
    text: "Espaço reservado para relato verdadeiro sobre clareza, organização e experiência de leitura do material.",
    rating: 5,
    image: "/images/customers/customer-4.jpg",
    verified: true,
    demo: true
  }
] satisfies Testimonial[];
