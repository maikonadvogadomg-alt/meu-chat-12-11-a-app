/* Meu Chat — 33-contextos.js: 📌 CONTEXTOS — "cartões" de assunto que você LIGA e DESLIGA.
   Diferente da 🧠 memória (que vale para sempre e vai em tudo): um contexto é o resumo de um
   assunto ou de uma conversa (por exemplo, o que você vinha fazendo com o Claude), para a IA
   não começar do zero. Ligado = vai junto em toda conversa. Desligado = fica guardado, sem gastar.
   Ficam só neste aparelho (e vão no ⤓ Backup). Chaves e senhas escritas aqui vão escondidas. */
(function (MC) {
  'use strict';
  const E = MC.esc;
  // o primeiro cartão: o resumo das conversas com o Claude (11/11/2026)
  const CLAUDE = { id: 'claude-1111', nome: '🧭 Continuação com o Claude (11/11/2026)', ligado: true, versao: 1, texto: `# Continuação — o que eu (Maikon) vinha fazendo com o Claude

Sou o Maikon, advogado em Minas Gerais. Falo só português. Uso quase só o celular e muito a voz (problema na mão). Tenho TDAH: prefiro linguagem simples, analogias e UM passo de cada vez.

## Como me ajudar
- Código: sempre o ARQUIVO INTEIRO, nunca "troque este pedaço".
- Projetos grandes: modulares (vários arquivos pequenos), não um HTML gigante.
- Nunca me peça para mandar chaves ou senhas. Elas ficam só no aparelho.
- Nunca mande apagar arquivo meu: renomear ou mover para uma pasta _apagar.
- Repositório no GitHub: sempre PRIVADO.
- Vozes: só as naturais; as robóticas me irritam.

## Meus projetos (como estavam em 11/11/2026)
- **Mini SK**: meu editor de código modular (celular, APK e .exe no PC). Tem 🤖 IA com modo Agente (escreve "RODAR: comando", o terminal roda e ela lê o resultado), terminal (Termux no celular, terminal próprio no PC), 📒 Diário do projeto (.sk/diario.md) e 📸 checkpoints.
- **Laboratório**: compara versões (A × B), faz o plano do projeto, tem 📒 Memória por projeto, 🧰 ferramentas, 💻 terminal e este Meu Chat dentro. Tem versão .exe para PC.
- **Meu Chat**: este app. Chat livre com as minhas chaves, 🦙 Ollama, voz, internet, fotos e memória.
- **Caça-Bug**: junta ferramentas HTML pequenas num app só (o montar.py transforma cada HTML numa peça) e elas conversam entre si pela "tomada".
- **Jurídico (SK Jurídico)**: React + servidor Node. É o mais importante.

## Jurídico: onde paramos
- A versão que o Claude consertou guarda os dados num banco DENTRO do programa (pasta "dados"), lê PDF sem "letrinhas", tem Ollama, Gemini com chave nova (AQ.) e limite de 300 MB.
- A v1.7.0 do Replit tem as melhores Configurações (Servidor, Banco Neon, Equipe JWT com admin/advogado/estagiário/secretária, Senha), mas está quebrada:
  - o "Conectado" verde é falso: quem responde é a página, não o servidor (por isso aparece NaN e "undefined");
  - várias rotas /api que a tela pede não existem no servidor (o "erro de fetch");
  - o APK dela é só a tela e precisa de um servidor ligado em outro lugar; sem ele cai no "modo localStorage" e perde os dados;
  - tela azul e importador lento.
- Existe uma versão "boa" no Replit que importa rápido e não tem a tela azul. Ela serve de peça de reposição.
- O plano:
  1. Consertar a v1.7.0 trazendo as rotas da versão boa.
  2. O teste de conexão só fica verde com resposta de verdade.
  3. O importador normal passa a usar o leitor do filtrador.
  4. Um campo "🔧 chave personalizada" (endereço + modelo + chave), para quando as IAs mudarem.
  5. O login é conferido pelo SERVIDOR, não só pela tela.
  6. O servidor fica dentro do .exe ou na internet junto com o Neon.
- Explicação que funcionou comigo: a tela é o garçom, o servidor é a cozinha, cada rota /api é um prato do cardápio.

## O que eu ia mandar ao Claude
- final.zip (a v1.7.0) e boa.zip (a versão boa), sem .env e sem local.config.json.
- O link do Netlify da versão que conecta no Neon.
- Os códigos pequenos do Claude 4.6, para virarem ferramentas ligadas umas nas outras.` };

  // o segundo cartão: COMO o Claude trabalha com ele (para qualquer IA chegar perto desse jeito) + o dicionário da voz dele
  const JEITO = { id: 'claude-jeito', nome: '🤝 Como o Claude trabalha comigo (e o dicionário da minha voz)', ligado: true, versao: 1, texto: `# Como o Claude trabalha comigo — faça igual

Eu (Maikon) confio no jeito que o Claude me ajuda. Não precisa ser idêntico, mas chegue perto:

1. **Leia a minha mensagem inteira**, mesmo quando é enorme e confusa. Eu falo por voz e tenho TDAH: misturo assuntos e o ditado troca palavras (veja o dicionário). Descubra o que eu QUERO, separe os assuntos e responda cada um.
2. **Não diga "é impossível" sem conferir.** Já ouvi muito isso de outras IAs, e depois funcionou. Diga o que é preciso para dar certo, ou qual é o limite de verdade e por quê.
3. **Explique com comparação do dia a dia.** Exemplo que funcionou: a tela é o garçom, o servidor é a cozinha, cada rota /api é um prato do cardápio, e o "erro de fetch" é o garçom pedir e a cozinha não responder.
4. **Faça, não mande eu fazer.** Entregue o arquivo inteiro e pronto. Nunca "troque o pedaço X pelo Y".
5. **Seja honesto sobre o que testou.** Diga "testei assim e funcionou" ou "isto ainda não testei". Se errou, admita e conserte, sem drama.
6. **Termine com UM próximo passo** claro: o que eu faço agora, e só isso.
7. **Proteja as minhas coisas:** nunca peça chave ou senha; mande apagar nada (renomear ou mover); avise quando um arquivo tem chave dentro antes de eu mandar para alguém.
8. **Calor humano sem bajulação.** Pode brincar quando eu brincar (kkk). Quando eu estiver cansado ou frustrado, reconheça e vá com calma. Não me encha de elogio nem de aviso.
9. **Em pesquisa jurídica:** sempre com as fontes, e nunca invente jurisprudência. Se não achou, diga que não achou.

## Dicionário da minha voz (o ditado do celular troca as palavras)
- réplica / réptil / rept / reta / rep = **Replit**
- Netflix (quando falo de site) = **Netlify**
- bichinho / lama / olma = **Ollama**
- germina / Hermínio / Gemini = **Gemini**
- cloud / cloude / Claudio / clouds = **Claude**
- Haku = **Haiku** (modelo do Claude)
- perplex / perplix = **Perplexity**
- GBT = **GPT** (ChatGPT)
- erro de Fiat / erro de feito = **erro de fetch**
- apq / a pecar / APK = **APK** (app de celular)
- pdwar / pwa = **PWA**
- executado / executável = **.exe** (programa do Windows)
- menino ficar / esse menino / mini esqui = **Mini SK** (meu editor)
- Codislene / codisley = o meu **mini VS Code (CodeLens)**
- supa base = **Supabase** · neon / leão = **Neon** (banco de dados)
- api / epi / apei = **API** (as rotas /api)
- Mônica = o app **Monica** (chat de várias IAs que eu usava)` };
  const SEMENTES = [CLAUDE, JEITO];

  const lista = () => { const l = MC.pref.get('contextos', null); return Array.isArray(l) ? l : []; };
  const gravar = (l) => { MC.pref.set('contextos', l); MC.emit('contextos'); pintarChip(); };
  // primeira vez: entra o cartão do Claude (uma vez só — se você apagar, não volta sozinho)
  // os cartões do Claude: entram uma vez; quando vier uma versão nova no app, ATUALIZAM sozinhos
  // (só se você não editou). Se você apagou, não voltam.
  (function semear() {
    const l = lista(), apagados = MC.pref.get('contextos:apagados', []); let mudou = false;
    if (MC.pref.get('contextos:semente', false) && !l.some((c) => c.id === CLAUDE.id) && !apagados.includes(CLAUDE.id)) apagados.push(CLAUDE.id); // apagado antes desta versão
    SEMENTES.forEach((sm, k) => {
      const c = l.find((x) => x.id === sm.id);
      if (!c) { if (!apagados.includes(sm.id)) { l.splice(k, 0, Object.assign({ quando: Date.now() }, sm)); mudou = true; } return; }
      if ((c.versao || 0) < sm.versao && !c.editado) { Object.assign(c, { nome: sm.nome, texto: sm.texto, versao: sm.versao, quando: Date.now() }); mudou = true; }
    });
    if (mudou || !MC.pref.get('contextos:semente', false)) { MC.pref.set('contextos', l); MC.pref.set('contextos:apagados', apagados); MC.pref.set('contextos:semente', true); }
  })();
  const esconder = (t) => (window.GuiaMaikon ? GuiaMaikon.esconder(t) : t);
  const tokens = (t) => Math.round(String(t || '').length / 4);
  function ligados() { return lista().filter((c) => c.ligado && String(c.texto || '').trim()); }
  // o que vai junto para a IA
  function texto() {
    const l = ligados(); if (!l.length) return '';
    return '--- CONTEXTOS QUE O USUÁRIO LIGOU (assuntos em andamento; use para continuar de onde parou, sem repetir tudo) ---\n\n' +
      l.map((c) => '### ' + c.nome + '\n' + esconder(c.texto)).join('\n\n');
  }
  function pintarChip() {
    const b = MC.$('#bt-contextos'); if (!b) return;
    const n = ligados().length; b.textContent = n ? '📌' + n : '📌'; b.title = n ? n + ' contexto(s) ligado(s)' : 'Contextos';
  }

  let editando = null;
  function pintar() {
    const el = MC.$('#contextos-corpo'); if (!el) return;
    if (editando) {
      const c = lista().find((x) => x.id === editando) || { id: editando, nome: '', texto: '' };
      el.innerHTML = '<input class="campo" id="ctx-nome" placeholder="Nome (ex.: Jurídico — onde parei)" value="' + E(c.nome) + '">' +
        '<textarea class="campo" id="ctx-texto" rows="16" placeholder="Escreva ou cole o resumo do assunto. Não coloque chaves nem senhas.">' + E(c.texto) + '</textarea>' +
        '<div class="linha"><button class="bt primario" data-x="salvar">💾 Salvar</button><button class="bt" data-x="cancelar">Voltar</button><span class="mudo pequeno" id="ctx-tam"></span></div>';
      const ta = MC.$('#ctx-texto'), tam = () => { MC.$('#ctx-tam').textContent = '≈ ' + tokens(ta.value) + ' tokens'; }; ta.oninput = tam; tam();
      return;
    }
    const l = lista(), soma = ligados().reduce((s, c) => s + tokens(c.texto), 0);
    el.innerHTML =
      '<p class="mudo pequeno">Um contexto é o <b>resumo de um assunto</b> (por exemplo, o que você vinha fazendo com o Claude). <b>Ligado</b> = vai junto em toda conversa, e a IA continua de onde parou. <b>Desligado</b> = fica guardado e não gasta nada. É diferente da 🧠 Memória, que vale para sempre.</p>' +
      (l.length ? l.map((c) => '<div class="cartao ctx" data-id="' + E(c.id) + '"><label class="linha" style="margin:0"><input type="checkbox" data-x="ligar"' + (c.ligado ? ' checked' : '') + '> <b style="flex:1">' + E(c.nome || 'Sem nome') + '</b></label>' +
        '<div class="mudo pequeno">≈ ' + tokens(c.texto) + ' tokens' + (c.quando ? ' · ' + new Date(c.quando).toLocaleDateString('pt-BR') : '') + '</div>' +
        '<div class="linha"><button class="bt peq" data-x="editar">✏️ Ver / editar</button><button class="bt peq" data-x="baixar">⤓ .md</button><button class="bt peq" data-x="copiar">📋</button><button class="ic" data-x="apagar" title="Apagar">🗑</button></div></div>').join('')
        : '<p class="pequeno">Nenhum contexto ainda.</p>') +
      '<p class="pequeno">Ligados agora: <b>' + ligados().length + '</b> · ≈ ' + soma + ' tokens a mais por pergunta' + (soma > 3000 ? ' — <span style="color:var(--er)">o 🦙 Ollama pequeno se perde com muito texto: desligue os que não precisa</span>' : '') + '.</p>' +
      '<div class="linha"><button class="bt primario" data-x="resumir">📝 Resumir esta conversa</button><button class="bt" data-x="novo">＋ Novo</button><button class="bt" data-x="abrir">⤒ Abrir .md / .txt</button></div>' +
      '<p class="mudo pequeno">📝 Resumir: a IA escreve o resumo desta conversa. Depois toque em <b>📌</b> embaixo da resposta dela para guardar como contexto. Assim você começa uma conversa nova (ou com outra IA) sem partir do zero.</p>' +
      '<input type="file" id="ctx-arq" accept=".md,.txt,text/*" hidden>';
  }
  function novo(nome, t) {
    const l = lista(); const c = { id: MC.uid(), nome: nome || 'Contexto ' + (l.length + 1), texto: t || '', ligado: true, quando: Date.now() };
    l.push(c); gravar(l); return c;
  }
  async function clique(e) {
    const b = e.target.closest('[data-x]'); if (!b) return;
    const x = b.dataset.x, card = b.closest('[data-id]'), l = lista(), c = card && l.find((k) => k.id === card.dataset.id);
    if (x === 'ligar' && c) { c.ligado = b.checked; gravar(l); pintar(); MC.aviso(c.ligado ? '📌 Ligado: vai junto nas próximas perguntas' : '📌 Desligado (continua guardado)', 'ok'); return; }
    if (x === 'editar' && c) { editando = c.id; pintar(); }
    if (x === 'novo') { editando = MC.uid(); pintar(); }
    if (x === 'cancelar') { editando = null; pintar(); }
    if (x === 'salvar') {
      const nome = MC.$('#ctx-nome').value.trim() || 'Contexto', t = MC.$('#ctx-texto').value;
      const k = l.find((z) => z.id === editando);
      if (k) Object.assign(k, { nome, texto: t, quando: Date.now(), editado: k.editado || k.texto !== t }); else l.push({ id: editando, nome, texto: t, ligado: true, quando: Date.now() });
      gravar(l); editando = null; pintar(); MC.aviso('💾 Contexto salvo', 'ok');
    }
    if (x === 'apagar' && c && confirm('Apagar o contexto "' + c.nome + '"?\n\n(Dica: se só não quer usar agora, é melhor DESLIGAR.)')) { const ap = MC.pref.get('contextos:apagados', []); if (!ap.includes(c.id)) { ap.push(c.id); MC.pref.set('contextos:apagados', ap); } gravar(l.filter((k) => k !== c)); pintar(); }
    if (x === 'baixar' && c) MC.baixar((c.nome || 'contexto').replace(/[^\wÀ-ÿ.-]+/g, '-').replace(/^-+|-+$/g, '') + '.md', esconder(c.texto), 'text/markdown;charset=utf-8');
    if (x === 'copiar' && c) MC.copiar(esconder(c.texto));
    if (x === 'abrir') MC.$('#ctx-arq').click();
    if (x === 'resumir') {
      const conv = MC.chat.conversa;
      if (!conv || !conv.msgs.length) return MC.aviso('Esta conversa está vazia. Abra a conversa que quer resumir (☰).', 'erro');
      MC.fecharPaineis();
      MC.chat.mandar('📝 Faça um RESUMO DE CONTINUAÇÃO desta conversa, para eu guardar e usar numa conversa nova (ou com outra IA) sem começar do zero. Use estes títulos: ## Assunto · ## O que já foi feito / decidido · ## Onde paramos · ## Próximo passo · ## Combinados (como eu quero que me ajudem). No máximo 400 palavras, português simples. NÃO coloque chaves, senhas nem endereços de banco. Não use [[lembrar]] nesta resposta.');
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const corpo = MC.$('#contextos-corpo'); if (!corpo) return;
    corpo.addEventListener('click', clique);
    corpo.addEventListener('change', async (e) => {
      if (e.target.id !== 'ctx-arq') return; const f = e.target.files[0]; e.target.value = ''; if (!f) return;
      const c = novo(f.name.replace(/\.(md|txt)$/i, ''), await f.text()); MC.aviso('📌 "' + c.nome + '" entrou ligado', 'ok'); pintar();
    });
    MC.$('#bt-contextos').onclick = () => { editando = null; pintar(); MC.abrirPainel('painel-contextos'); };
    pintarChip();
  });
  MC.contextos = { texto, lista, novo, pintar, ligados };
})(window.MC);
