const fs = require("fs");
const path = require("path");

const raiz = process.cwd();
const pastaSrc = path.join(raiz, "src");
const data = new Date().toISOString().replace(/[:.]/g, "-");
const backup = path.join(raiz, "backup-correcao-final-" + data);

fs.mkdirSync(backup, { recursive: true });
fs.cpSync(pastaSrc, path.join(backup, "src"), { recursive: true });

console.log("Backup criado em:");
console.log(backup);

const mapaCp1252 = new Map([
  [0x20ac, 0x80],
  [0x201a, 0x82],
  [0x0192, 0x83],
  [0x201e, 0x84],
  [0x2026, 0x85],
  [0x2020, 0x86],
  [0x2021, 0x87],
  [0x02c6, 0x88],
  [0x2030, 0x89],
  [0x0160, 0x8a],
  [0x2039, 0x8b],
  [0x0152, 0x8c],
  [0x017d, 0x8e],
  [0x2018, 0x91],
  [0x2019, 0x92],
  [0x201c, 0x93],
  [0x201d, 0x94],
  [0x2022, 0x95],
  [0x2013, 0x96],
  [0x2014, 0x97],
  [0x02dc, 0x98],
  [0x2122, 0x99],
  [0x0161, 0x9a],
  [0x203a, 0x9b],
  [0x0153, 0x9c],
  [0x017e, 0x9e],
  [0x0178, 0x9f]
]);

function codificarCp1252(texto) {
  const bytes = [];

  for (const caractere of texto) {
    const codigo = caractere.codePointAt(0);

    if (codigo <= 255) {
      bytes.push(codigo);
      continue;
    }

    if (mapaCp1252.has(codigo)) {
      bytes.push(mapaCp1252.get(codigo));
      continue;
    }

    return null;
  }

  return Buffer.from(bytes);
}

function pontuacaoRuim(texto) {
  const erros = texto.match(
    /[\u00c2\u00c3\u00e2\u00f0\u0192\u20ac\u2122\ufffd]/g
  );

  return erros ? erros.length : 0;
}

function corrigirLinha(linha) {
  let atual = linha;

  for (let tentativa = 0; tentativa < 3; tentativa++) {
    const antes = pontuacaoRuim(atual);

    if (antes === 0) {
      break;
    }

    const bytes = codificarCp1252(atual);

    if (!bytes) {
      break;
    }

    const corrigido = bytes.toString("utf8");
    const depois = pontuacaoRuim(corrigido);

    if (depois < antes) {
      atual = corrigido;
    } else {
      break;
    }
  }

  return atual;
}

const substituicoes = [
  ["\u00c3\u00a1", "\u00e1"],
  ["\u00c3\u00a2", "\u00e2"],
  ["\u00c3\u00a3", "\u00e3"],
  ["\u00c3\u00a9", "\u00e9"],
  ["\u00c3\u00aa", "\u00ea"],
  ["\u00c3\u00ad", "\u00ed"],
  ["\u00c3\u00b3", "\u00f3"],
  ["\u00c3\u00b4", "\u00f4"],
  ["\u00c3\u00b5", "\u00f5"],
  ["\u00c3\u00ba", "\u00fa"],
  ["\u00c3\u00a7", "\u00e7"],
  ["\u00c3\u0081", "\u00c1"],
  ["\u00c3\u0089", "\u00c9"],
  ["\u00c3\u0093", "\u00d3"],
  ["\u00c3\u0087", "\u00c7"],
  ["\u00c2\u00a0", " "],
  ["\u00e2\u20ac\u2122", "\u2019"],
  ["\u00e2\u20ac\u0153", "\u201c"],
  ["\u00e2\u20ac\u009d", "\u201d"],
  ["\u00e2\u20ac\u201c", "\u2013"],
  ["\u00e2\u20ac\u201d", "\u2014"]
];

function corrigirTexto(texto) {
  let resultado = texto;

  for (let rodada = 0; rodada < 3; rodada++) {
    resultado = resultado
      .split(/\r?\n/)
      .map(corrigirLinha)
      .join("\n");

    for (const [errado, certo] of substituicoes) {
      resultado = resultado.split(errado).join(certo);
    }
  }

  return resultado;
}

function listarArquivos(pasta) {
  const encontrados = [];

  for (const item of fs.readdirSync(pasta, { withFileTypes: true })) {
    const caminho = path.join(pasta, item.name);

    if (item.isDirectory()) {
      encontrados.push(...listarArquivos(caminho));
      continue;
    }

    if (/\.(ts|tsx|js|jsx|css)$/.test(item.name)) {
      encontrados.push(caminho);
    }
  }

  return encontrados;
}

for (const arquivo of listarArquivos(pastaSrc)) {
  const original = fs.readFileSync(arquivo, "utf8");
  const corrigido = corrigirTexto(original);

  fs.writeFileSync(arquivo, corrigido, "utf8");
}

const arquivoConfig = path.join(
  pastaSrc,
  "data",
  "siteConfig.ts"
);

let config = fs.readFileSync(arquivoConfig, "utf8");

function alterarPropriedade(nome, valor) {
  const expressao = new RegExp(
    "(^\\s*" + nome + "\\s*:\\s*)\"[^\"]*\"",
    "m"
  );

  if (!expressao.test(config)) {
    console.log("Propriedade não encontrada:", nome);
    return;
  }

  config = config.replace(
    expressao,
    (_, inicio) => inicio + JSON.stringify(valor)
  );
}

alterarPropriedade(
  "topBarText",
  "Oferta especial: Box com 2 livros digitais"
);

alterarPropriedade(
  "heroTitle",
  "Dois livros práticos para organizar suas ideias e começar com mais clareza"
);

alterarPropriedade(
  "heroSubtitle",
  "Conheça estratégias, possibilidades e orientações para buscar renda extra de forma organizada, mesmo com pouco tempo disponível."
);

alterarPropriedade(
  "description",
  "Um box digital com dois livros educativos sobre organização, planejamento e possibilidades de renda extra."
);

fs.writeFileSync(arquivoConfig, config, "utf8");

const arquivoCss = path.join(
  pastaSrc,
  "app",
  "globals.css"
);

let css = fs.readFileSync(arquivoCss, "utf8");

css = css.replace(
  /\/\* REVISAO TIPOGRAFICA \*\/[\s\S]*?\/\* FIM REVISAO TIPOGRAFICA \*\//g,
  ""
);

css = css.replace(
  /\/\* AJUSTE FINAL DO SITE \*\/[\s\S]*?\/\* FIM AJUSTE FINAL DO SITE \*\//g,
  ""
);

css += `

/* AJUSTE FINAL DO SITE */

html,
body,
button,
input,
textarea,
select {
  font-family: Arial, Helvetica, sans-serif !important;
  text-rendering: optimizeLegibility;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
a,
li,
button {
  font-family: Arial, Helvetica, sans-serif !important;
  font-style: normal !important;
}

h1 {
  font-size: clamp(2.5rem, 3.8vw, 3.8rem) !important;
  line-height: 1.05 !important;
  letter-spacing: -0.035em !important;
  word-break: normal !important;
  overflow-wrap: normal !important;
  hyphens: none !important;
}

h2 {
  line-height: 1.15 !important;
  letter-spacing: -0.02em !important;
}

p {
  line-height: 1.65 !important;
  letter-spacing: normal !important;
}

nav a {
  white-space: nowrap !important;
  font-size: 0.875rem !important;
  letter-spacing: normal !important;
}

button,
a {
  letter-spacing: normal !important;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.35rem !important;
    line-height: 1.08 !important;
  }

  nav a {
    white-space: normal !important;
  }
}

/* FIM AJUSTE FINAL DO SITE */
`;

fs.writeFileSync(arquivoCss, css, "utf8");

const cacheNext = path.join(raiz, ".next");

if (fs.existsSync(cacheNext)) {
  fs.rmSync(cacheNext, {
    recursive: true,
    force: true
  });
}

console.log("");
console.log("Correção concluída.");
console.log("Textos corrigidos.");
console.log("Fonte corrigida.");
console.log("Título reduzido.");
console.log("Cache do Next.js removido.");
