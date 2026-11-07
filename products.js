/* =========================================================
   SERVIÇOS — FDR Projetos Mecânicos

   Equipe FDR: Fernando (projetista e operador de corte CNC),
   Weber (soldador pesado e serralheria) e Thiago (engenheiro, RT/ART).
   Parceria: Aranãs Ferriás e terceiros (seção "Parcerias").

   Tudo é orçado por projeto/peça. Só a solda tem valor mínimo.
   Quando houver uma base de orçamentos, dá para criar a calculadora.

   1) CATEGORIAS: seções do cardápio, na ordem em que aparecem.
      - cor: "ouro" (amarelo), "verde" (azul) ou "vermelho" (laranja).
      - destaque: true = cards grandes.

   2) SERVIÇOS: cada um é um bloco { ... }.
      - preco:   0 = "Sob orçamento". Com valor, use aPartir: true para
                 mostrar "a partir de".
      - unidade: "un" (peças/portões), "projeto", "servico", "hora" ou "diaria".
      - icone:   "portao", "chale", "estrutura", "projeto", "art", "plasma",
                 "solda", "torno", "caldeiraria", "tubulacao", "implemento",
                 "braco", "motor", "montagem", "icamento", "guindaste",
                 "munck", "maquina"
      - selo:    etiqueta no canto do card ("" para nenhuma).
   ========================================================= */

const CATEGORIAS = [
  { id: "serralheria", nome: "Serralheria", texto: "Portões, estruturas metálicas e chalés — com o Weber.", cor: "ouro", destaque: true },
  { id: "projetos", nome: "Projetos & Engenharia", texto: "Projeto, detalhamento e responsabilidade técnica.", cor: "verde", destaque: false },
  { id: "corte-solda", nome: "Corte & Solda", texto: "Plasma CNC por peça ou projeto e solda pesada.", cor: "vermelho", destaque: false },
  { id: "parcerias", nome: "Parcerias", texto: "Executados pela Aranãs Ferriás e parceiros.", cor: "verde", destaque: false },
];

const PRODUTOS = [
  // ---------- SERRALHERIA (Weber) ----------
  { id: "portao-deslizante", categoria: "serralheria", nome: "Portão Deslizante", descricao: "Sob medida, com trilho, roldanas e preparação para motor.", preco: 0, unidade: "un", icone: "portao", selo: "Mais pedido", itens: [] },
  { id: "portao-basculante", categoria: "serralheria", nome: "Portão Basculante", descricao: "Garagem com contrapeso ou motor, chapa ou lambri.", preco: 0, unidade: "un", icone: "portao", selo: "", itens: [] },
  { id: "portao-pivotante", categoria: "serralheria", nome: "Portão Pivotante / Social", descricao: "Portões de abrir e sociais com design exclusivo.", preco: 0, unidade: "un", icone: "portao", selo: "Design", itens: [] },
  { id: "estrutura-metalica", categoria: "serralheria", nome: "Estruturas Metálicas", descricao: "Coberturas, mezaninos, galpões e passarelas.", preco: 0, unidade: "projeto", icone: "estrutura", selo: "", itens: [] },
  { id: "chale", categoria: "serralheria", nome: "Chalés em Estrutura Metálica", descricao: "Estrutura de chalés e cabanas, do projeto à montagem.", preco: 0, unidade: "projeto", icone: "chale", selo: "Novo", itens: [] },
  { id: "grade-guarda-corpo", categoria: "serralheria", nome: "Grades, Guarda-corpos e Escadas", descricao: "Grades de proteção, corrimãos e escadas metálicas.", preco: 0, unidade: "projeto", icone: "estrutura", selo: "", itens: [] },

  // ---------- PROJETOS & ENGENHARIA (Fernando + Thiago) ----------
  { id: "projeto-3d", categoria: "projetos", nome: "Projeto Mecânico 3D", descricao: "Modelagem e montagem em CAD, com conferência de interferência.", preco: 0, unidade: "projeto", icone: "projeto", selo: "Fernando", itens: [] },
  { id: "projeto-serralheria", categoria: "projetos", nome: "Projeto de Portões e Estruturas", descricao: "Desenho para fabricação de portões, coberturas e chalés.", preco: 0, unidade: "projeto", icone: "projeto", selo: "", itens: [] },
  { id: "detalhamento", categoria: "projetos", nome: "Detalhamento e DXF", descricao: "Desenhos de fabricação, lista de materiais e arquivos para plasma.", preco: 0, unidade: "projeto", icone: "projeto", selo: "", itens: [] },
  { id: "engenharia-reversa", categoria: "projetos", nome: "Engenharia Reversa", descricao: "Levantamento da peça e redesenho para fabricar de novo.", preco: 0, unidade: "projeto", icone: "projeto", selo: "", itens: [] },
  { id: "art-rt", categoria: "projetos", nome: "ART e Responsabilidade Técnica", descricao: "Engenheiro responsável (Thiago) para projetos e laudos.", preco: 0, unidade: "projeto", icone: "art", selo: "Thiago", itens: [] },

  // ---------- CORTE & SOLDA (FDR) ----------
  { id: "plasma-cnc", categoria: "corte-solda", nome: "Corte Plasma CNC", descricao: "Por peça ou por projeto, a partir do seu desenho ou do nosso.", preco: 0, unidade: "un", icone: "plasma", selo: "Fernando", itens: [] },
  { id: "solda-pesada", categoria: "corte-solda", nome: "Solda Pesada", descricao: "MIG/MAG e eletrodo em aço carbono. O valor final depende do projeto.", preco: 150, aPartir: true, unidade: "servico", icone: "solda", selo: "Weber", itens: [] },
  { id: "solda-tig", categoria: "corte-solda", nome: "Solda TIG (inox e alumínio)", descricao: "Acabamento fino. O valor final depende do projeto.", preco: 150, aPartir: true, unidade: "servico", icone: "solda", selo: "", itens: [] },

  // ---------- PARCERIAS (Aranãs Ferriás e terceiros) ----------
  { id: "solda-equipe", categoria: "parcerias", nome: "Soldas Pesadas com Equipe", descricao: "Equipe para obras grandes e prazos curtos.", preco: 0, unidade: "projeto", icone: "solda", selo: "Aranãs", itens: [] },
  { id: "montagem-industrial", categoria: "parcerias", nome: "Montagens Complexas", descricao: "Torres, estruturas e equipamentos industriais.", preco: 0, unidade: "projeto", icone: "montagem", selo: "Aranãs", itens: [] },
  { id: "icamento-complexo", categoria: "parcerias", nome: "Içamento de Cargas", descricao: "Plano de rigging e execução segura.", preco: 0, unidade: "servico", icone: "icamento", selo: "Aranãs", itens: [] },
  { id: "caldeiraria", categoria: "parcerias", nome: "Caldeiraria Pesada e Tubulações", descricao: "Tanques, silos, chutes, linhas e suportes.", preco: 0, unidade: "projeto", icone: "caldeiraria", selo: "Aranãs", itens: [] },
  { id: "reforma-braco", categoria: "parcerias", nome: "Reforma de Braços e Máquinas Pesadas", descricao: "Braços hidráulicos, munck e máquinas de linha amarela.", preco: 0, unidade: "servico", icone: "braco", selo: "Aranãs", itens: [] },
  { id: "torno", categoria: "parcerias", nome: "Torno e Usinagem", descricao: "Eixos, buchas, flanges e peças sob desenho.", preco: 0, unidade: "un", icone: "torno", selo: "Aranãs", itens: [] },
  { id: "implementos", categoria: "parcerias", nome: "Fabricação de Implementos", descricao: "Implementos industriais e agrícolas sob medida.", preco: 0, unidade: "projeto", icone: "implemento", selo: "Aranãs", itens: [] },
  { id: "guindaste-30", categoria: "parcerias", nome: "Locação de Guindaste 30 t", descricao: "Com operador.", preco: 0, unidade: "diaria", icone: "guindaste", selo: "Aranãs", itens: [] },
  { id: "guindaste-70", categoria: "parcerias", nome: "Locação de Guindaste 70 t", descricao: "Com operador.", preco: 0, unidade: "diaria", icone: "guindaste", selo: "Aranãs", itens: [] },
  { id: "caminhao-munck", categoria: "parcerias", nome: "Locação de Caminhão Munck", descricao: "Com operador.", preco: 0, unidade: "diaria", icone: "munck", selo: "Aranãs", itens: [] },
  { id: "retifica", categoria: "parcerias", nome: "Retífica de Motores", descricao: "Serviço de terceiro parceiro.", preco: 0, unidade: "servico", icone: "motor", selo: "Terceiro", itens: [] },
];
