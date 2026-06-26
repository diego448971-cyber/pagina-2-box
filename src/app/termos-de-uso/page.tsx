import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Termos de Uso | Box Renda Extra com Estratégia",
  description: "Condições gerais de uso dos materiais digitais."
};

export default function TermsPage() {
  return (
    <LegalPage title="Termos de Uso" updatedAt="24 de junho de 2026">
      <h2>Finalidade do conteúdo</h2>
      <p>
        O Box Renda Extra com Estratégia possui finalidade educacional e apresenta informações para estudo, organização
        de ideias e primeiros passos em prestação de serviços.
      </p>
      <h2>Sem garantia de resultados</h2>
      <p>
        O conteúdo não garante ganhos financeiros. Resultados dependem de dedicação, habilidades, decisões, contexto de
        mercado e outros fatores individuais.
      </p>
      <h2>Uso dos materiais</h2>
      <p>
        Os materiais são destinados ao uso pessoal do comprador. Não é permitido revender, distribuir, compartilhar ou
        publicar o conteúdo sem autorização.
      </p>
      <h2>Links externos</h2>
      <p>
        Botões de compra, redes sociais e WhatsApp podem direcionar para serviços externos, cada um com suas próprias
        regras e políticas.
      </p>
    </LegalPage>
  );
}
