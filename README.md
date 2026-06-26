# Box Renda Extra com Estratégia

Landing page profissional em Next.js para vender o box digital com os livros **Renda Extra para Quem Tem Pouco Tempo** e **A Fórmula do Primeiro Cliente**.

## Como instalar

```bash
npm install
```

## Como iniciar

```bash
npm run dev
```

Depois, abra `http://localhost:3000`.

## Como gerar a versão de produção

```bash
npm run build
npm run start
```

## Onde editar textos, preços e links

As informações principais ficam em:

```txt
src/data/siteConfig.ts
```

Edite ali:

- Nome do produto e autor
- Título, subtítulo e descrição
- Preço original e preço promocional
- Link do checkout em `checkoutUrl`
- Número do WhatsApp em `whatsappNumber`
- Mensagem automática do WhatsApp em `whatsappMessage`
- YouTube em `youtubeVideoId`
- Vídeo MP4 local em `localVideoSrc`
- Instagram, Facebook e e-mail de suporte
- Prazo de garantia
- Meta Pixel e Google Analytics
- Ativação ou desativação de seções

Os valores temporários estão marcados como `CHECKOUT_URL_AQUI`, `WHATSAPP_AQUI`, `YOUTUBE_VIDEO_ID_AQUI`, `META_PIXEL_ID_AQUI` e `GOOGLE_ANALYTICS_ID_AQUI`.

## Como trocar imagens

Substitua os arquivos dentro de:

```txt
public/images/
```

Arquivos principais:

- `book-1.png`: capa do livro 1
- `book-2.png`: capa do livro 2
- `box-books.png`: mockup dos dois livros
- `author.jpg`: foto do autor
- `og-image.png`: imagem de compartilhamento
- `vsl-poster.png`: capa do vídeo

Fotos e prints:

- `public/images/customers/`
- `public/images/testimonials/`

Use apenas fotos e feedbacks autorizados. Os arquivos atuais são placeholders demonstrativos.

## Como trocar o vídeo

Para YouTube, edite:

```ts
youtubeVideoId: "YOUTUBE_VIDEO_ID_AQUI"
```

Use apenas o ID do vídeo, por exemplo:

```txt
dQw4w9WgXcQ
```

Para MP4 local, coloque o arquivo em `public/videos/` e edite:

```ts
localVideoSrc: "/videos/seu-video.mp4"
```

## Como adicionar depoimentos

Edite:

```txt
src/data/testimonials.ts
```

Substitua os textos demonstrativos por feedbacks reais e autorizados. Não publique depoimentos fictícios como se fossem reais.

## Como configurar rastreamento

No arquivo `src/data/siteConfig.ts`, edite:

```ts
metaPixelId: "META_PIXEL_ID_AQUI",
googleAnalyticsId: "GOOGLE_ANALYTICS_ID_AQUI"
```

Os scripts só carregam quando os IDs são configurados e o visitante aceita cookies opcionais.

Eventos preparados:

- `ViewContent`
- `InitiateCheckout`
- `Contact`
- `PlayVideo`
- `ViewOffer`

## Como editar cores

A paleta está em:

```txt
tailwind.config.ts
```

As classes principais usam `ink`, `navy`, `gold`, `cloud`, `graphite` e `emeraldSoft`.

## Como publicar na Vercel

1. Envie o projeto para um repositório Git.
2. Importe o repositório na Vercel.
3. Use o comando de build padrão `npm run build`.
4. Configure o domínio final.
5. Atualize `seo.siteUrl` e `seo.canonicalUrl` em `src/data/siteConfig.ts`.

## Páginas criadas

- `/`
- `/obrigado`
- `/politica-de-privacidade`
- `/termos-de-uso`
- `/politica-de-reembolso`
- `/sitemap.xml`
- `/robots.txt`

## Observação legal

Este produto possui finalidade educacional e não oferece garantia de resultados financeiros. Os resultados variam de acordo com cada pessoa.
