import BookCard from "@/components/BookCard";
import CTAButton from "@/components/CTAButton";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import { books } from "@/data/siteConfig";

export default function BooksPresentation() {
  return (
    <MotionSection className="bg-cloud" id="livros">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Os dois livros"
          title="Um box para organizar a ideia e transformar o primeiro contato em ação"
          description="O primeiro livro ajuda a escolher e planejar uma atividade. O segundo apoia a apresentação dos serviços e a busca por possíveis clientes."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {books.map((book) => (
            <BookCard book={book} key={book.title} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <CTAButton href="#oferta" eventName="ViewOffer" variant="dark">
            Conferir a oferta completa
          </CTAButton>
        </div>
      </div>
    </MotionSection>
  );
}
