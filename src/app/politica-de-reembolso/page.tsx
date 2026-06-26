import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Política de Reembolso | Box Renda Extra com Estratégia",
  description: "Condições gerais para cancelamento e solicitação de reembolso."
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Política de Reembolso" updatedAt="24 de junho de 2026">
      <h2>Prazo aplicável</h2>
      <p>
        O prazo e as condições de cancelamento devem seguir as informações exibidas no ambiente de pagamento utilizado
        para a venda.
      </p>
      <h2>Como solicitar</h2>
      <p>
        Para pedir ajuda com uma solicitação, entre em contato pelo e-mail de suporte ou pelo WhatsApp configurado no
        rodapé da página.
      </p>
      <h2>Produto digital</h2>
      <p>
        O Box é um produto digital. O acesso aos materiais ocorre após confirmação do pagamento, conforme as regras da
        plataforma de checkout.
      </p>
      <h2>Importante</h2>
      <p>
        Antes de publicar, revise esta política para adequá-la ao checkout, ao prazo verdadeiro e às condições
        comerciais aplicáveis.
      </p>
    </LegalPage>
  );
}
