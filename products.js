/* =========================================================
   SERVIÇOS — Fdrtech Mecânica Industrial

   Valores de referência (nov/2026), para você ajustar:
   - Hora de torno/usinagem/solda: licitação pública de 2026 (Iomerê/SC)
     registrou R$ 198,28 por hora-homem com consumíveis.
   - Corte plasma CNC: custo produtivo SICRO (abr/2026) de R$ 165,67/h.
   - Guindaste 30 t: referência GOINFRA de R$ 400/h, mínimo 10 h/dia.
   - Guindaste 70 t: referência ORSE de R$ 4.000/dia.
   - Caminhão munck e hora de projeto: estimativa de mercado.

   1) CATEGORIAS: seções do cardápio, na ordem em que aparecem.
      - cor: "ouro" (amarelo), "verde" (azul) ou "vermelho" (laranja).
      - destaque: true = cards grandes.

   2) SERVIÇOS: cada um é um bloco { ... }.
      - id:        identificador único, sem espaços nem acentos.
      - categoria: id de uma das categorias.
      - nome / descricao: textos do card.
      - preco:     valor por unidade (ponto decimal). Use 0 para "Sob orçamento".
      - unidade:   "hora", "diaria", "servico", "projeto" ou "un".
      - minimo:    quantidade mínima (ex.: 10 para "mínimo 10 horas"). Opcional.
      - aPartir:   true mostra "a partir de" antes do preço. Opcional.
      - icone:     "projeto", "torno", "solda", "plasma", "estrutura",
                   "caldeiraria", "tubulacao", "implemento", "braco",
                   "motor", "montagem", "icamento", "guindaste",
                   "munck", "maquina"
      - selo:      etiqueta no canto do card ("" para nenhuma).
      - itens:     deixe [] (usado só em combos).
   ========================================================= */

const CATEGORIAS = [
  { id: "locacao", nome: "Locação", texto: "Guindastes e munck com operador.", cor: "ouro", destaque: true },
  { id: "projetos", nome: "Projetos", texto: "Engenharia mecânica, 3D e detalhamento.", cor: "verde", destaque: false },
  { id: "fabricacao", nome: "Fabricação", texto: "Torno, solda, plasma, estruturas e caldeiraria.", cor: "vermelho", destaque: false },
  { id: "manutencao", nome: "Reforma", texto: "Braços hidráulicos, máquinas pesadas e motores.", cor: "ouro", destaque: false },
  { id: "montagem", nome: "Montagem & Içamento", texto: "Montagem industrial e içamento de cargas.", cor: "verde", destaque: false },
];

const PRODUTOS = [
  // ---------- LOCAÇÃO ----------
  { id: "guindaste-30", categoria: "locacao", nome: "Guindaste 30 t", descricao: "Com operador. Ideal para montagem de estruturas, máquinas e cargas médias.", preco: 400, unidade: "hora", minimo: 10, icone: "guindaste", selo: "30 t", itens: [] },
  { id: "guindaste-70", categoria: "locacao", nome: "Guindaste 70 t", descricao: "Com operador. Para içamentos pesados, torres e equipamentos industriais.", preco: 4000, unidade: "diaria", icone: "guindaste", selo: "70 t", itens: [] },
  { id: "caminhao-munck", categoria: "locacao", nome: "Caminhão Munck", descricao: "Com operador. Carga, descarga e remoção de máquinas e peças.", preco: 350, unidade: "hora", minimo: 4, icone: "munck", selo: "Munck", itens: [] },

  // ---------- PROJETOS ----------
  { id: "projeto-3d", categoria: "projetos", nome: "Projeto Mecânico 3D", descricao: "Modelagem e montagem em CAD (SolidWorks), com análise de interferência.", preco: 180, unidade: "hora", icone: "projeto", selo: "", itens: [] },
  { id: "detalhamento", categoria: "projetos", nome: "Detalhamento Técnico", descricao: "Desenhos de fabricação, lista de materiais e DXF para plasma.", preco: 140, unidade: "hora", icone: "projeto", selo: "", itens: [] },
  { id: "engenharia-reversa", categoria: "projetos", nome: "Engenharia Reversa", descricao: "Levantamento da peça e redesenho para fabricação.", preco: 180, unidade: "hora", icone: "projeto", selo: "", itens: [] },
  { id: "projeto-implemento", categoria: "projetos", nome: "Projeto de Implemento", descricao: "Implementos e dispositivos sob medida, do conceito ao detalhamento.", preco: 0, unidade: "projeto", icone: "implemento", selo: "", itens: [] },

  // ---------- FABRICAÇÃO ----------
  { id: "torno", categoria: "fabricacao", nome: "Torno / Usinagem", descricao: "Eixos, buchas, flanges e peças sob desenho.", preco: 180, unidade: "hora", icone: "torno", selo: "", itens: [] },
  { id: "solda-mig", categoria: "fabricacao", nome: "Solda MIG/MAG", descricao: "Aço carbono, em oficina.", preco: 150, unidade: "hora", icone: "solda", selo: "", itens: [] },
  { id: "solda-tig", categoria: "fabricacao", nome: "Solda TIG", descricao: "Inox e alumínio, acabamento fino.", preco: 190, unidade: "hora", icone: "solda", selo: "", itens: [] },
  { id: "solda-campo", categoria: "fabricacao", nome: "Solda em Campo", descricao: "Eletrodo revestido no local da obra.", preco: 160, unidade: "hora", icone: "solda", selo: "", itens: [] },
  { id: "plasma-cnc", categoria: "fabricacao", nome: "Corte Plasma CNC", descricao: "Corte de chapas a partir do seu DXF.", preco: 250, unidade: "hora", icone: "plasma", selo: "", itens: [] },
  { id: "estrutura-metalica", categoria: "fabricacao", nome: "Estruturas Metálicas", descricao: "Galpões, mezaninos, passarelas e suportes.", preco: 0, unidade: "servico", icone: "estrutura", selo: "", itens: [] },
  { id: "caldeiraria", categoria: "fabricacao", nome: "Caldeiraria Pesada", descricao: "Tanques, silos, chutes e peças de chapa grossa.", preco: 0, unidade: "servico", icone: "caldeiraria", selo: "", itens: [] },
  { id: "tubulacao", categoria: "fabricacao", nome: "Tubulações Industriais", descricao: "Fabricação e montagem de linhas e suportes.", preco: 0, unidade: "servico", icone: "tubulacao", selo: "", itens: [] },
  { id: "implementos", categoria: "fabricacao", nome: "Fabricação de Implementos", descricao: "Implementos industriais e agrícolas sob medida.", preco: 0, unidade: "servico", icone: "implemento", selo: "", itens: [] },

  // ---------- REFORMA ----------
  { id: "reforma-braco", categoria: "manutencao", nome: "Reforma de Braços", descricao: "Braços hidráulicos e de munck: buchas, pinos, solda e cilindros.", preco: 0, unidade: "servico", icone: "braco", selo: "", itens: [] },
  { id: "reforma-maquina", categoria: "manutencao", nome: "Reforma de Máquinas Pesadas", descricao: "Recuperação estrutural e mecânica de máquinas de linha amarela.", preco: 0, unidade: "servico", icone: "maquina", selo: "", itens: [] },
  { id: "retifica", categoria: "manutencao", nome: "Retífica de Motores", descricao: "Diesel e gasolina: bloco, cabeçote e virabrequim.", preco: 0, unidade: "servico", icone: "motor", selo: "", itens: [] },

  // ---------- MONTAGEM & IÇAMENTO ----------
  { id: "montagem-industrial", categoria: "montagem", nome: "Montagem Industrial", descricao: "Torres, estruturas e equipamentos, com equipe e plano de montagem.", preco: 0, unidade: "servico", icone: "montagem", selo: "", itens: [] },
  { id: "icamento-complexo", categoria: "montagem", nome: "Içamento de Cargas Complexas", descricao: "Plano de rigging, estudo de carga e execução segura.", preco: 0, unidade: "servico", icone: "icamento", selo: "", itens: [] },
];
