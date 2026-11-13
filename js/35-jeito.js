/* Meu Chat — 35-jeito.js: 🎭 O JEITO DE CADA IA.
   Para não ter "mudança drástica" quando troca de IA: um jeito de conversar que vale para TODAS
   (parceiro, calmo, honesto) e, se quiser, um jeito só de uma (ex.: o Perplexity como pesquisador
   jurídico que sempre traz as fontes). Tudo editável em ⚙️ → 🎭 Jeito de cada IA. */
(function (MC) {
  'use strict';
  const E = MC.esc;
  const GERAL = `JEITO DE CONVERSAR: seja um parceiro de verdade, como um colega de confiança: caloroso, paciente e direto. Converse, não faça palestra.
- Responda curto primeiro; aprofunde se ele pedir. Um passo de cada vez, dizendo o nome do botão e onde ele fica.
- Use exemplos e comparações do dia a dia (ele entende melhor assim).
- Seja honesto: se não souber, diga; se algo não vai dar certo, diga com jeito e mostre o caminho que funciona; se errar, admita e conserte. Não invente.
- Nada de frieza, de jeito robótico ou de um monte de avisos.
- Quando ele desabafar: primeiro acolha e escute, sem sermão e sem pressa de resolver. Se ele falar em se machucar ou estiver em crise, com carinho indique o CVV (ligar 188 ou cvv.org.br).`;
  const PADRAO = {
    perplexity: `VOCÊ É A PESQUISADORA DELE (ele é advogado, faz muito previdenciário/INSS, em Minas Gerais).
- SEMPRE traga as fontes numeradas no texto: [1], [2]…
- Prefira fontes oficiais e confiáveis: planalto.gov.br, gov.br/inss, STF, STJ, TNU, TRFs, CNJ, tribunais estaduais, doutrina conhecida.
- Diga o número e a data da lei, do decreto, da súmula ou do tema repetitivo.
- Separe o que é LEI, o que é JURISPRUDÊNCIA e o que é OPINIÃO.
- Se a regra pode ter mudado (reforma, tema novo), avise e diga de quando é a fonte.
- Se não achar fonte boa, diga que não achou. Não invente.`,
  };
  const geral = () => { const v = MC.pref.get('jeito:geral', null); return v == null ? GERAL : v; };
  const deUma = (p) => { const v = MC.pref.get('jeito:' + p, null); return v == null ? (PADRAO[p] || '') : v; };
  // vai para a IA (prov = a IA que vai responder)
  function texto(prov) { return [geral(), prov ? deUma(prov) : ''].filter((t) => String(t).trim()).join('\n\n'); }

  async function pintar() {
    const el = MC.$('#cartao-jeito'); if (!el) return;
    const P = MC.ia.P, lista = await MC.ia.chaves();
    const usados = [...new Set(lista.map((c) => c.provedor).concat(Object.keys(PADRAO)))].filter((p) => P[p]);
    const sel = MC.pref.get('jeito:aba', usados[0] || '');
    el.innerHTML = '<h3>🎭 Jeito de cada IA</h3><p class="mudo pequeno">Para a IA não mudar de "personalidade" quando você troca de chave. O primeiro vale para <b>todas</b>; o segundo, só para a IA escolhida.</p>' +
      '<b class="pequeno">Todas as IAs</b><textarea class="campo" id="jt-geral" rows="7">' + E(geral()) + '</textarea>' +
      '<div class="linha"><b class="pequeno">Só para</b><select class="campo" id="jt-qual" style="flex:1">' + usados.map((p) => '<option value="' + p + '"' + (p === sel ? ' selected' : '') + '>' + E(P[p].nome) + '</option>').join('') + '</select></div>' +
      '<textarea class="campo" id="jt-uma" rows="6" placeholder="(nada a mais para esta IA)">' + E(sel ? deUma(sel) : '') + '</textarea>' +
      '<div class="linha"><button class="bt peq" id="jt-padrao">↺ Voltar ao padrão</button><span class="mudo pequeno" id="jt-st"></span></div>';
  }
  document.addEventListener('DOMContentLoaded', () => {
    const corpo = MC.$('#config-corpo'); if (!corpo) return;
    const ok = () => { const s = MC.$('#jt-st'); if (s) s.textContent = '💾 salvo'; };
    corpo.addEventListener('input', (e) => {
      if (e.target.id === 'jt-geral') { MC.pref.set('jeito:geral', e.target.value); ok(); }
      if (e.target.id === 'jt-uma') { MC.pref.set('jeito:' + MC.$('#jt-qual').value, e.target.value); ok(); }
    });
    corpo.addEventListener('change', (e) => { if (e.target.id === 'jt-qual') { MC.pref.set('jeito:aba', e.target.value); pintar(); } });
    corpo.addEventListener('click', (e) => {
      if (e.target.id !== 'jt-padrao') return;
      if (!confirm('Voltar o jeito de TODAS e o desta IA para o texto padrão?')) return;
      try { localStorage.removeItem('meuchat:jeito:geral'); localStorage.removeItem('meuchat:jeito:' + MC.$('#jt-qual').value); } catch {}
      pintar();
    });
  });
  MC.jeito = { texto, pintar };
})(window.MC);
