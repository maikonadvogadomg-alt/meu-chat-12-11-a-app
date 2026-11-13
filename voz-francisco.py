#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🗣 Voz Francisco — servidorzinho de voz GRÁTIS (a mesma voz do jurídico antigo).

Usa o leitor de voz do Microsoft Edge (pacote edge-tts), que é grátis e não pede chave.
Os seus apps (Assistente Jurídico, Meu Chat…) mandam o texto para cá e recebem o áudio.

COMO LIGAR
  No celular (Termux), uma vez só:
      pkg install python
      pip install edge-tts
  Depois, sempre que quiser a voz:
      python voz-francisco.py

  No computador (Windows), uma vez só: instale o Python (python.org, marque "Add to PATH") e rode
      pip install edge-tts
  Depois:
      python voz-francisco.py

  Deixe a janela aberta. No app: ⚙️ Config → Voz → "Francisco (grátis)" → 🧪 Testar.

Precisa de internet (a voz é feita no servidor da Microsoft). Só aceita pedidos deste aparelho.
"""
import asyncio, json, sys, threading
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

PORTA = 7790
VOZ_PADRAO = "pt-BR-FranciscoNeural"
RESERVAS = ["pt-BR-AntonioNeural", "pt-BR-FranciscaNeural", "pt-BR-ThalitaNeural"]

try:
    import edge_tts
except ImportError:
    print("\n⚠ Falta o pacote da voz. Rode antes:\n    pip install edge-tts\n")
    sys.exit(1)

_vozes = None


async def _listar():
    global _vozes
    if _vozes is None:
        todas = await edge_tts.list_voices()
        _vozes = [v["ShortName"] for v in todas if v.get("Locale", "").startswith("pt-")]
    return _vozes


async def _falar(texto, voz, velocidade, tom):
    tentativas = [voz] + [v for v in RESERVAS if v != voz]
    ultimo = None
    for v in tentativas:
        try:
            com = edge_tts.Communicate(texto, v, rate=velocidade, pitch=tom)
            partes = []
            async for pedaco in com.stream():
                if pedaco["type"] == "audio":
                    partes.append(pedaco["data"])
            if partes:
                return b"".join(partes), v
        except Exception as e:  # voz que não existe, internet caiu…
            ultimo = e
    raise RuntimeError("não consegui gerar a voz: %s" % ultimo)


class Voz(BaseHTTPRequestHandler):
    def _cabecalhos(self, codigo, tipo):
        self.send_response(codigo)
        self.send_header("Content-Type", tipo)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Private-Network", "true")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()

    def do_OPTIONS(self):
        self._cabecalhos(204, "text/plain")

    def _json(self, codigo, obj):
        self._cabecalhos(codigo, "application/json; charset=utf-8")
        self.wfile.write(json.dumps(obj, ensure_ascii=False).encode("utf-8"))

    def _pedido(self):
        u = urlparse(self.path)
        q = {k: v[0] for k, v in parse_qs(u.query).items()}
        if self.command == "POST":
            n = int(self.headers.get("Content-Length") or 0)
            if n:
                try:
                    q.update(json.loads(self.rfile.read(n).decode("utf-8")))
                except Exception:
                    pass
        return u.path, q

    def do_GET(self):
        self._tratar()

    def do_POST(self):
        self._tratar()

    def _tratar(self):
        caminho, q = self._pedido()
        try:
            if caminho in ("/", "/ping"):
                return self._json(200, {"ok": True, "app": "voz-francisco", "versao": 1, "voz": VOZ_PADRAO})
            if caminho == "/vozes":
                return self._json(200, {"vozes": asyncio.run(_listar())})
            if caminho == "/falar":
                texto = (q.get("texto") or "").strip()[:3000]
                if not texto:
                    return self._json(400, {"erro": "sem texto"})
                audio, usada = asyncio.run(_falar(texto, q.get("voz") or VOZ_PADRAO, q.get("velocidade") or "+15%", q.get("tom") or "-5Hz"))
                self._cabecalhos(200, "audio/mpeg")
                self.wfile.write(audio)
                return
            self._json(404, {"erro": "não existe"})
        except Exception as e:
            self._json(500, {"erro": str(e)})

    def log_message(self, *a):
        pass  # sem poluir a tela


if __name__ == "__main__":
    srv = ThreadingHTTPServer(("127.0.0.1", PORTA), Voz)
    print("🗣 Voz Francisco ligada em http://127.0.0.1:%d" % PORTA)
    print("   Deixe esta janela aberta. Para desligar: Ctrl+C.")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nDesligada.")
