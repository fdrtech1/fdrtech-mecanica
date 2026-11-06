# 🛠️ Fdrtech Mecânica Industrial — Web App (PWA)

App de **pedido de orçamento** para serviços de mecânica industrial: projetos,
torno, solda, corte plasma, estruturas metálicas, caldeiraria, tubulações,
implementos, reforma de braços e máquinas pesadas, retífica de motores,
montagem industrial, içamento de cargas e locação de guindastes 30 t / 70 t
e caminhão munck. Feito em HTML, CSS e JavaScript puro, publicado no GitHub Pages.

## Como funciona para o cliente
1. Escolhe os serviços (desliza cada categoria para o lado ou toca em **Ver todos**).
2. Define a quantidade em horas, diárias ou serviços (alguns têm mínimo, ex.: guindaste 30 t = 10 h).
3. Escolhe **na oficina** (com horário para levar) ou **no local** (localização da obra, endereço e data).
4. Informa nome e telefone e como prefere pagar.
5. Envia tudo pronto pelo **WhatsApp**. Serviços "Sob orçamento" vão sem valor para você calcular.

## Editar serviços e preços — `products.js`
```js
{ id: "guindaste-30", categoria: "locacao", nome: "Guindaste 30 t",
  descricao: "Com operador...", preco: 400, unidade: "hora", minimo: 10,
  icone: "guindaste", selo: "30 t", itens: [] },
```
- `preco: 0` mostra **Sob orçamento**.
- `unidade`: `"hora"`, `"diaria"`, `"servico"`, `"projeto"` ou `"un"`.
- `minimo`: quantidade mínima (opcional). `aPartir: true` mostra "a partir de".
- Ícones: `projeto`, `torno`, `solda`, `plasma`, `estrutura`, `caldeiraria`, `tubulacao`,
  `implemento`, `braco`, `motor`, `montagem`, `icamento`, `guindaste`, `munck`, `maquina`.

Preços iniciais são referências de nov/2026 (licitação pública de 2026, SICRO, GOINFRA e ORSE)
e estimativas de mercado — **ajuste para a sua realidade**.

## Configurações — topo do `app.js`
WhatsApp, chave Pix, link de cartão, endereço da oficina, horários, dias de funcionamento,
`TAXA_ENTREGA` (deslocamento; 0 = a combinar) e `MODO_ORCAMENTO` (true = não gera Pix na hora).

## Publicar alterações
Edite pelo GitHub (lápis ✏️) e troque a versão em `service-worker.js`
(`fdrtech-mec-v1` → `fdrtech-mec-v2`…) para os celulares baixarem a versão nova.
