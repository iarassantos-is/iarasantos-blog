// ============================================================
// check-scheduled.mjs
//
// Lê os posts em src/content/posts-en e posts-pt e decide se
// existe algum post que "entrou no ar" nas últimas horas.
//
// Só se existir, o workflow chama o Deploy Hook do Cloudflare.
// Isso evita gastar a cota de 500 builds/mês do plano gratuito.
//
// Não instala nada. Roda com o Node que já vem na máquina do
// GitHub Actions.
// ============================================================

import fs from 'node:fs';
import path from 'node:path';

// Janela de tolerância. O cron do GitHub Actions às vezes atrasa,
// então olhamos algumas horas para trás em vez de exatamente 1.
// Um post pode gerar até 3 builds duplicados — inofensivo, e ainda
// fica MUITO abaixo do limite mensal.
const JANELA_HORAS = 3;

const PASTAS = ['src/content/posts-en', 'src/content/posts-pt'];

const agora = Date.now();
const inicioJanela = agora - JANELA_HORAS * 60 * 60 * 1000;

const paraPublicar = [];

for (const pasta of PASTAS) {
  if (!fs.existsSync(pasta)) {
    console.log(`(pasta não encontrada, pulando: ${pasta})`);
    continue;
  }

  for (const arquivo of fs.readdirSync(pasta)) {
    if (!/\.mdx?$/.test(arquivo)) continue;

    const bruto = fs.readFileSync(path.join(pasta, arquivo), 'utf8');
    const frontmatter = bruto.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!frontmatter) continue;

    const bloco = frontmatter[1];

    // Rascunho nunca dispara build
    const draft = bloco.match(/^draft:\s*(true|false)/m);
    if (draft && draft[1] === 'true') continue;

    const data = bloco.match(/^publishDate:\s*['"]?([^'"\n]+?)['"]?\s*$/m);
    if (!data) continue;

    const instante = new Date(data[1].trim()).valueOf();
    if (Number.isNaN(instante)) {
      console.log(`⚠️  data inválida em ${arquivo}: ${data[1].trim()}`);
      continue;
    }

    if (instante > inicioJanela && instante <= agora) {
      paraPublicar.push(`${pasta}/${arquivo}  →  ${data[1].trim()}`);
    }
  }
}

const saida = process.env.GITHUB_OUTPUT;

if (paraPublicar.length > 0) {
  console.log('Post(s) entrando no ar agora:');
  for (const p of paraPublicar) console.log('   • ' + p);
  if (saida) fs.appendFileSync(saida, 'deploy=true\n');
} else {
  console.log('Nenhum post agendado para esta janela. Nada a fazer.');
  if (saida) fs.appendFileSync(saida, 'deploy=false\n');
}
