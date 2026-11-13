/* 🔬 Ponte com o Laboratório: quando o Meu Chat está DENTRO do Laboratório (aba 🤖 IA),
   o Laboratório pode mandar texto para a caixa de escrever (o plano do projeto, a memória,
   a comparação A × B). Só aceita mensagens da própria página (mesmo endereço). */
(function () {
  'use strict';
  if (window.parent === window) return;
  window.addEventListener('message', (e) => {
    if (e.origin !== location.origin) return;
    const d = e.data && e.data.labMsg; if (!d) return;
    const ent = document.getElementById('entrada'); if (!ent) return;
    const novo = String(d.texto || '');
    ent.value = d.juntar && ent.value.trim() ? ent.value.trim() + '\n\n' + novo : novo;
    ent.dispatchEvent(new Event('input'));
    if (d.enviar) { const b = document.getElementById('bt-enviar'); if (b) b.click(); }
    else { try { ent.focus(); ent.setSelectionRange(0, 0); ent.scrollTop = 0; } catch {} }
  });
  // avisa o Laboratório que já pode mandar
  document.addEventListener('DOMContentLoaded', () => { try { window.parent.postMessage({ labChatPronto: true }, location.origin); } catch {} });
})();
