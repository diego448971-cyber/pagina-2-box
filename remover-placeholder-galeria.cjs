const fs = require("fs");
const path = require("path");

const pastaSrc = path.join(process.cwd(), "src");

function listarArquivos(pasta) {
  const arquivos = [];

  for (const item of fs.readdirSync(pasta, { withFileTypes: true })) {
    const caminho = path.join(pasta, item.name);

    if (item.isDirectory()) {
      arquivos.push(...listarArquivos(caminho));
    } else if (/\.(ts|tsx|js|jsx)$/.test(item.name)) {
      arquivos.push(caminho);
    }
  }

  return arquivos;
}

let removidos = 0;
let alterados = 0;

for (const arquivo of listarArquivos(pastaSrc)) {
  let texto = fs.readFileSync(arquivo, "utf8");
  const original = texto;

  // Remove o objeto do cartão sem foto.
  const padroes = [
    /\{\s*[^{}]*?["'`]Espaço para foto autorizada["'`][^{}]*?\}\s*,?/gi,
    /\{\s*[^{}]*?["'`]Placeholder autorizado["'`][^{}]*?\}\s*,?/gi,
    /\{\s*[^{}]*?["'`]FA["'`][^{}]*?["'`]Espaço para foto autorizada["'`][^{}]*?\}\s*,?/gi
  ];

  for (const padrao of padroes) {
    texto = texto.replace(padrao, () => {
      removidos++;
      return "";
    });
  }

  // Organiza a seção para exibir 3 cartões na mesma linha.
  texto = texto.replace(
    /\blg:grid-cols-4\b/g,
    "lg:grid-cols-3"
  );

  texto = texto.replace(
    /\bxl:grid-cols-4\b/g,
    "xl:grid-cols-3"
  );

  if (texto !== original) {
    fs.writeFileSync(arquivo, texto, "utf8");
    console.log("Atualizado:", path.relative(process.cwd(), arquivo));
    alterados++;
  }
}

console.log("");
console.log("Cartões removidos:", removidos);
console.log("Arquivos atualizados:", alterados);

if (removidos === 0) {
  console.log("Aviso: o cartão não foi localizado automaticamente.");
}
