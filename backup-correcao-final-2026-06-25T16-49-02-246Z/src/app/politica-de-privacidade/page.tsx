import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Política de Privacidade | Box Renda Extra com Estratégia",
  description: "Informações sobre privacidade, cookies e tratamento de dados."
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Política de Privacidade" updatedAt="24 de junho de 2026">
      <h2>Dados coletados</h2>
      <p>
        Esta página pode coletar informações básicas de navegação, como páginas acessadas, dispositivo utilizado e
        interações com botões, somente quando recursos de análise forem configurados e autorizados.
      </p>
      <h2>Cookies</h2>
      <p>
        Cookies essenciais podem ser usados para lembrar preferências, como a escolha no aviso de cookies. Scripts
        opcionais de análise só devem ser carregados após consentimento quando os respectivos IDs forem configurados.
      </p>
      <h2>Compra e pagamento</h2>
      <p>A compra é realizada em ambiente externo de checkout. Dados de pagamento não são armazenados neste site.</p>
      <h2>Contato</h2>
      <p>
        Para solicitar informações sobre privacidade, use o e-mail de suporte exibido no rodapé ou o canal de WhatsApp
        configurado nesta página.
      </p>
    </LegalPage>
  );
}
