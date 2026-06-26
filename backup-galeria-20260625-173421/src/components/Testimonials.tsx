const testimonials = [
  {
    image: "/images/testimonials/feedback-1.jpg",
    name: "Leitor demonstrativo",
    label: "Feedback ilustrativo",
    text: "O material apresenta as informações de forma clara e organizada. A leitura é simples e ajuda a compreender melhor os primeiros passos."
  },
  {
    image: "/images/testimonials/feedback-2.jpg",
    name: "Leitor demonstrativo",
    label: "Feedback ilustrativo",
    text: "Gostei da organização dos assuntos e das orientações apresentadas. O conteúdo é objetivo e fácil de acompanhar."
  },
  {
    image: "/images/testimonials/feedback-3.jpg",
    name: "Leitora demonstrativa",
    label: "Feedback ilustrativo",
    text: "Os livros ajudam a organizar as ideias e a analisar possibilidades de renda extra com mais clareza e responsabilidade."
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-600">
            Avaliações ilustrativas
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Exemplos de avaliações sobre o material
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            As imagens e os comentários abaixo são demonstrações de layout e não
            representam avaliações de clientes reais.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt="Avatar utilizado apenas para demonstração"
                  className="h-16 w-16 rounded-full border-2 border-amber-400 object-cover"
                  loading="lazy"
                />

                <div>
                  <h3 className="font-bold text-slate-950">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {testimonial.label}
                  </p>
                </div>
              </div>

              <div
                className="mt-5 flex gap-1 text-xl text-amber-500"
                aria-label="Avaliação ilustrativa de 5 estrelas"
              >
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
              </div>

              <p className="mt-4 leading-7 text-slate-700">
                “{testimonial.text}”
              </p>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Exemplo de feedback
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}