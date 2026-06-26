import type { Book, FAQ, GalleryImage, IconCard, SectionToggles, SimpleCard } from "@/types";

export const siteConfig = {
  productName: "Box Renda Extra com EstratÃ©gia",
  brandName: "Renda Extra com EstratÃ©gia",
  authorName: "Diego dos Santos Lima",
  topBarText: "Oferta especial do Box com 2 livros digitais",
  heroTitle:
    "Dois livros prÃ¡ticos para ajudar vocÃª a organizar suas ideias e comeÃ§ar sua jornada na renda extra",
  heroSubtitle:
    "ConheÃ§a estratÃ©gias, possibilidades e orientaÃ§Ãµes para quem deseja comeÃ§ar com mais organizaÃ§Ã£o, mesmo tendo pouco tempo disponÃ­vel.",
  description:
    "Um box digital com dois materiais educativos sobre organizaÃ§Ã£o, prestaÃ§Ã£o de serviÃ§os, divulgaÃ§Ã£o e primeiros clientes.",
  originalPrice: "R$ 59,90",
  promotionalPrice: "R$ 29,90",
  paymentInfo: "Pagamento Ãºnico. Produto 100% digital.",
  paymentMethods: ["Pix", "CartÃ£o de crÃ©dito", "Boleto, quando disponÃ­vel no checkout"],
  checkoutUrl: "CHECKOUT_URL_AQUI",
  whatsappNumber: "WHATSAPP_AQUI",
  whatsappMessage:
    "OlÃ¡! Vim pela pÃ¡gina do Box de 2 livros sobre renda extra e gostaria de tirar uma dÃºvida.",
  youtubeVideoId: "",
  localVideoSrc: "/videos/vsl-placeholder.mp4",
  videoPoster: "/images/vsl-poster.png",
  instagramUrl: "https://instagram.com/SEU_INSTAGRAM_AQUI",
  facebookUrl: "https://facebook.com/SUA_PAGINA_AQUI",
  supportEmail: "suporte@SEU_DOMINIO_AQUI.com",
  guaranteeTime: "Prazo informado na pÃ¡gina de pagamento",
  metaPixelId: "META_PIXEL_ID_AQUI",
  googleAnalyticsId: "GOOGLE_ANALYTICS_ID_AQUI",
  seo: {
    title: "Box Renda Extra com EstratÃ©gia | 2 Livros Digitais",
    description:
      "ConheÃ§a o Box com dois livros digitais sobre organizaÃ§Ã£o, renda extra, prestaÃ§Ã£o de serviÃ§os e busca pelos primeiros clientes.",
    siteUrl: "https://SEU_DOMINIO_AQUI",
    canonicalUrl: "https://SEU_DOMINIO_AQUI",
    ogImage: "/images/og-image.png"
  },
  sections: {
    bonuses: true,
    testimonials: true,
    customerGallery: true,
    guarantee: true,
    author: true,
    faq: true,
    mobilePurchaseBar: true
  } satisfies SectionToggles
};

export const navLinks = [
  { href: "#beneficios", label: "BenefÃ­cios" },
  { href: "#livros", label: "Livros" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "DÃºvidas" },
  { href: "#oferta", label: "Oferta" }
];

export const heroHighlights = [
  "Acesso digital apÃ³s a confirmaÃ§Ã£o do pagamento",
  "Leitura pelo celular, tablet ou computador",
  "ConteÃºdo prÃ¡tico para iniciantes, sem promessas exageradas"
];

export const trustItems = [
  {
    title: "Acesso digital",
    description: "Receba os materiais em formato digital para estudar onde preferir."
  },
  {
    title: "Compra segura",
    description: "VocÃª serÃ¡ direcionado para um ambiente seguro de pagamento."
  },
  {
    title: "VÃ¡rios dispositivos",
    description: "Leia pelo celular, tablet, notebook ou desktop."
  },
  {
    title: "Suporte pelo WhatsApp",
    description: "Canal preparado para tirar dÃºvidas sobre acesso e compra."
  },
  {
    title: "Material organizado",
    description: "ConteÃºdo direto, educativo e pensado para primeiros passos."
  }
] satisfies SimpleCard[];

export const books = [
  {
    title: "Renda Extra para Quem Tem Pouco Tempo",
    description:
      "Material voltado para pessoas que trabalham, estudam, cuidam da famÃ­lia ou possuem pouco tempo disponÃ­vel, apresentando formas de planejar e iniciar atividades de renda extra de maneira mais organizada.",
    image: "/images/book-1.png",
    imageAlt: "Capa do livro Renda Extra para Quem Tem Pouco Tempo",
    lessons: [
      "Como avaliar sua rotina antes de escolher uma atividade",
      "Formas de separar pequenos blocos de tempo para estudo e aÃ§Ã£o",
      "CritÃ©rios simples para priorizar ideias realistas",
      "Cuidados para evitar promessas fÃ¡ceis e decisÃµes impulsivas"
    ]
  },
  {
    title: "A FÃ³rmula do Primeiro Cliente",
    description:
      "ConteÃºdo direcionado para quem deseja entender como apresentar seus serviÃ§os, encontrar possÃ­veis clientes e estruturar seus primeiros passos de venda.",
    image: "/images/book-2.png",
    imageAlt: "Capa do livro A FÃ³rmula do Primeiro Cliente",
    lessons: [
      "Como transformar uma habilidade em uma oferta inicial",
      "Onde encontrar possÃ­veis clientes de forma responsÃ¡vel",
      "Como apresentar sua soluÃ§Ã£o com clareza",
      "Como organizar atendimento, preÃ§o inicial e prÃ³ximos passos"
    ]
  }
] satisfies Book[];

export const learningTopics = [
  {
    title: "OrganizaÃ§Ã£o de tempo",
    description: "Planeje pequenos perÃ­odos de estudo e execuÃ§Ã£o sem depender de uma rotina perfeita.",
    iconName: "Clock"
  },
  {
    title: "Escolha de atividade",
    description: "Compare ideias considerando habilidades, disponibilidade, demanda e simplicidade.",
    iconName: "Compass"
  },
  {
    title: "Primeiros passos",
    description: "Monte uma sequÃªncia clara para sair da ideia e chegar a uma aÃ§Ã£o concreta.",
    iconName: "ListChecks"
  },
  {
    title: "CriaÃ§Ã£o de oferta",
    description: "Estruture o que vocÃª vende, para quem vende e como comunica o valor.",
    iconName: "PackageCheck"
  },
  {
    title: "DivulgaÃ§Ã£o de serviÃ§os",
    description: "Use canais simples, redes sociais e contatos com postura profissional.",
    iconName: "Megaphone"
  },
  {
    title: "Atendimento",
    description: "Organize respostas, prazos e combinados para atender com mais confianÃ§a.",
    iconName: "MessagesSquare"
  },
  {
    title: "PrecificaÃ§Ã£o inicial",
    description: "Entenda fatores que ajudam a definir valores de entrada de forma consciente.",
    iconName: "BadgeDollarSign"
  },
  {
    title: "Redes sociais",
    description: "Aproveite perfis e mensagens para apresentar sua soluÃ§Ã£o sem exageros.",
    iconName: "Share2"
  },
  {
    title: "OrganizaÃ§Ã£o financeira",
    description: "Separe entradas, custos e metas para acompanhar melhor o progresso.",
    iconName: "WalletCards"
  },
  {
    title: "Primeiros clientes",
    description: "ConheÃ§a caminhos prÃ¡ticos para iniciar conversas e buscar oportunidades reais.",
    iconName: "Handshake"
  }
] satisfies IconCard[];

export const targetAudience = [
  "Pessoas com pouco tempo",
  "Trabalhadores",
  "Estudantes",
  "Pais e mÃ£es",
  "Pessoas que desejam oferecer serviÃ§os",
  "Iniciantes no mercado digital",
  "Pequenos empreendedores",
  "Pessoas buscando novas habilidades"
];

export const benefits = [
  {
    title: "ConteÃºdo organizado",
    description: "Os materiais conduzem a leitura por etapas, facilitando a tomada de decisÃ£o."
  },
  {
    title: "Linguagem simples",
    description: "ExplicaÃ§Ãµes diretas para quem estÃ¡ comeÃ§ando e quer entender o caminho."
  },
  {
    title: "Leitura prÃ¡tica",
    description: "Textos objetivos, listas e orientaÃ§Ãµes que ajudam a transformar ideias em plano."
  },
  {
    title: "Acesso pelo celular",
    description: "Estude nos intervalos, no transporte ou no momento em que fizer sentido."
  },
  {
    title: "Dois materiais juntos",
    description: "Um livro ajuda na organizaÃ§Ã£o da renda extra e o outro foca nos primeiros clientes."
  },
  {
    title: "Estudo no seu ritmo",
    description: "VocÃª pode avanÃ§ar aos poucos, revisar e adaptar as ideias Ã  sua realidade."
  },
  {
    title: "OrientaÃ§Ã£o para iniciantes",
    description: "O conteÃºdo parte do bÃ¡sico e evita pressupor experiÃªncia anterior."
  },
  {
    title: "Exemplos e ideias prÃ¡ticas",
    description: "SugestÃµes para clarear possibilidades, limites e prÃ³ximos passos."
  }
] satisfies SimpleCard[];

export const bonuses = [
  {
    title: "Checklist para organizar uma ideia de renda extra",
    description: "Um roteiro simples para analisar disponibilidade, habilidades e prÃ³ximos passos."
  },
  {
    title: "Modelo simples de planejamento semanal",
    description: "Uma estrutura leve para organizar estudo, divulgaÃ§Ã£o e execuÃ§Ã£o."
  },
  {
    title: "Lista de ideias de serviÃ§os",
    description: "SugestÃµes de caminhos possÃ­veis para pesquisar e adaptar Ã  sua realidade."
  },
  {
    title: "Roteiro de apresentaÃ§Ã£o para possÃ­veis clientes",
    description: "Um guia de conversa para explicar sua oferta com clareza e respeito."
  }
] satisfies SimpleCard[];

export const customerGallery = [
  {
    src: "/images/testimonials/feedback-1.jpg",
    alt: "Placeholder de captura de feedback autorizado",
    caption: "EspaÃ§o para print de feedback autorizado"
  },
  {
    src: "/images/testimonials/feedback-2.jpg",
    alt: "Placeholder de mensagem de cliente autorizado",
    caption: "EspaÃ§o para mensagem de cliente"
  },
  {
    src: "/images/customers/customer-3.jpg",
    alt: "Placeholder para foto autorizada de cliente",
    caption: "EspaÃ§o para foto autorizada"
  },
  {
    src: "/images/testimonials/feedback-3.jpg",
    alt: "Placeholder de print do Instagram ou WhatsApp",
    caption: "EspaÃ§o para print do Instagram ou WhatsApp"
  }
] satisfies GalleryImage[];

export const faqs = [
  {
    question: "Como receberei os livros?",
    answer:
      "ApÃ³s a confirmaÃ§Ã£o do pagamento, as instruÃ§Ãµes de acesso serÃ£o enviadas pelos canais informados durante a compra, conforme o funcionamento do checkout configurado."
  },
  {
    question: "Os livros sÃ£o fÃ­sicos ou digitais?",
    answer:
      "Os dois livros sÃ£o digitais. VocÃª poderÃ¡ acessar o conteÃºdo por celular, tablet, notebook ou computador."
  },
  {
    question: "Posso ler pelo celular?",
    answer:
      "Sim. Os materiais foram pensados para leitura digital e podem ser acessados em dispositivos mÃ³veis."
  },
  {
    question: "Preciso ter experiÃªncia?",
    answer:
      "NÃ£o. O conteÃºdo foi organizado para iniciantes que desejam entender possibilidades, planejar melhor e comeÃ§ar com mais clareza."
  },
  {
    question: "O conteÃºdo garante resultados financeiros?",
    answer:
      "O material possui finalidade educativa. Os resultados dependem da dedicaÃ§Ã£o, das decisÃµes, das habilidades, do mercado e de outros fatores individuais. NÃ£o existe garantia de ganhos financeiros."
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Ao clicar no botÃ£o de compra, vocÃª serÃ¡ direcionado para o ambiente seguro de pagamento configurado no projeto."
  },
  {
    question: "Quando receberei o acesso?",
    answer:
      "O acesso Ã© enviado apÃ³s a confirmaÃ§Ã£o do pagamento, de acordo com as regras da plataforma de checkout utilizada."
  },
  {
    question: "Existe suporte?",
    answer:
      "Sim. O canal de suporte pode ser configurado pelo WhatsApp e pelo e-mail informados no arquivo central do projeto."
  },
  {
    question: "Posso imprimir os livros?",
    answer:
      "VocÃª pode ler e consultar os arquivos para uso pessoal. Regras de impressÃ£o, compartilhamento e direitos autorais devem seguir os termos de uso."
  },
  {
    question: "Como solicitar ajuda?",
    answer:
      "Use o botÃ£o de WhatsApp ou o e-mail de suporte exibido no rodapÃ© para pedir orientaÃ§Ã£o sobre acesso, compra ou dÃºvidas gerais."
  },
  {
    question: "O acesso possui prazo?",
    answer:
      "O prazo de acesso deve ser definido conforme a plataforma de venda utilizada. Edite esta informaÃ§Ã£o no arquivo de configuraÃ§Ã£o antes da publicaÃ§Ã£o."
  },
  {
    question: "Quais sÃ£o as formas de pagamento?",
    answer:
      "As formas de pagamento sÃ£o configurÃ¡veis e dependem do checkout escolhido. O projeto jÃ¡ deixa espaÃ§o para Pix, cartÃ£o e boleto quando disponÃ­vel."
  }
] satisfies FAQ[];

