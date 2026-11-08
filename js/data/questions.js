/**
 * Banco de Questões do Simulado de Qualidade de Software
 * Tópicos:
 * 1. Introdução à Medição e Análise (Questões 1 a 10)
 * 2. GQM - Goal Question Metric (Questões 11 a 20)
 * 3. PSM - Practical Software Measurement (Questões 21 a 30)
 */

export const questionsData = [
  // =========================================================================
  // TÓPICO 1: INTRODUÇÃO À MEDIÇÃO E ANÁLISE (Questões 1 a 10)
  // =========================================================================
  {
    id: 1,
    topic: "Introdução à Medição e Análise",
    subtopic: "Conceitos Fundamentais: Medida, Métrica e Indicador",
    difficulty: "Fácil",
    question: "Na Engenharia e Gestão da Qualidade de Software, os termos 'Medida', 'Métrica' e 'Indicador' possuem definições conceituais distintas e complementares segundo a literatura e normas (como IEEE e ISO/IEC 15939). Assinale a alternativa que descreve corretamente a relação entre eles:",
    options: [
      "Uma Medida é uma comparação quantitativa arbitrária; Métrica é um algoritmo de machine learning; e Indicador é o valor bruto obtido no código-fonte.",
      "Uma Medida é a atribuição numérica direta de um atributo (ex: linhas de código); uma Métrica relaciona duas ou mais medidas (ex: defeitos por KLOC); e um Indicador fornece insights para tomada de decisão em relação a metas organizacionais ou de projeto.",
      "Indicador é a coleta física de dados; Medida é a representação visual gráfica; e Métrica é o objetivo estratégico da alta administração.",
      "Métrica e Medida são sinônimos perfeitos na ISO/IEC 15939, enquanto Indicador refere-se unicamente ao tempo de execução dos testes de software.",
      "O Indicador é gerado antes do planejamento da medição, servindo como base empírica para extrair as medidas sem necessidade de contexto ou metas."
    ],
    correctAnswer: 1,
    explanation: "Uma MEDIDA fornece uma indicação quantitativa direta de extensão, quantidade ou dimensão de algum atributo (ex: 500 linhas de código, 5 horas). Uma MÉTRICA é uma medida quantitativa do grau em que um sistema, componente ou processo possui determinado atributo, frequentemente relacionando duas ou mais medidas (ex: densidade de defeitos = defeitos/KLOC). Um INDICADOR é uma métrica ou combinação de métricas associada a critérios de decisão e limiares (thresholds), fornecendo suporte concreto à tomada de decisão gerencial.",
    reference: "ISO/IEC 15939 & Pressman (Engenharia de Software) / CMMI-DEV MA"
  },
  {
    id: 2,
    topic: "Introdução à Medição e Análise",
    subtopic: "Escalas de Medição",
    difficulty: "Médio",
    question: "De acordo com a Teoria da Medição aplicada ao software (Fenton & Pfleeger), as escalas determinam quais operações matemáticas e estatísticas são válidas para os dados coletados. Se uma equipe classifica os tipos de defeitos em ['Interface', 'Lógica', 'Desempenho', 'Segurança'], e a severidade dos defeitos em ['Baixa', 'Média', 'Alta', 'Crítica'], quais são, respectivamente, as escalas de medição utilizadas?",
    options: [
      "Escala de Razão e Escala Intervalar.",
      "Escala Ordinal e Escala Nominal.",
      "Escala Nominal e Escala Ordinal.",
      "Escala Absoluta e Escala de Razão.",
      "Escala Intervalar e Escala Nominal."
    ],
    correctAnswer: 2,
    explanation: "A classificação dos tipos de defeito ('Interface', 'Lógica', etc.) usa a Escala NOMINAL, pois os valores são categorias discretas sem ordem ou hierarquia inerente (apenas operações de igualdade/diferença e cálculo de moda). A classificação de severidade ('Baixa', 'Média', 'Alta', 'Crítica') usa a Escala ORDINAL, pois existe uma ordenação hierárquica clara entre os elementos (Baixa < Média < Alta < Crítica), permitindo ordenação e cálculo de mediana, mas sem intervalos matemáticos constantes e mensuráveis entre os níveis.",
    reference: "Fenton & Pfleeger (Software Metrics: A Rigorous and Practical Approach)"
  },
  {
    id: 3,
    topic: "Introdução à Medição e Análise",
    subtopic: "Medidas de Base vs. Medidas Derivadas (ISO/IEC 15939)",
    difficulty: "Médio",
    question: "O Modelo de Informação da Medição da norma ISO/IEC 15939 categoriza os dados em Medidas de Base e Medidas Derivadas. Considere as seguintes grandezas coletadas em um projeto:\n\nI. Número de horas reais trabalhadas pela equipe no Sprint.\nII. Quantidade de casos de teste executados com sucesso.\nIII. Taxa de produtividade (Horas reais / Pontos de Função entregues).\nIV. Densidade de Falhas (Defeitos encontrados / KLOC).\n\nSão classificadas como MEDIDAS DERIVADAS:",
    options: [
      "Apenas I e II.",
      "Apenas III e IV.",
      "Apenas I, II e III.",
      "Apenas II e IV.",
      "I, II, III e IV."
    ],
    correctAnswer: 1,
    explanation: "Medidas de Base (I e II) são definidas em função de um único atributo e método de medição direto (contagem direta de horas ou casos de teste). Medidas Derivadas (III e IV) são definidas matematicamente a partir de duas ou mais medidas de base ou outras medidas derivadas através de uma fórmula (Horas / PF e Defeitos / KLOC).",
    reference: "ISO/IEC 15939 (Systems and software engineering — Measurement process)"
  },
  {
    id: 4,
    topic: "Introdução à Medição e Análise",
    subtopic: "Processo de Medição e Análise (CMMI-DEV MA)",
    difficulty: "Médio",
    question: "Na área de processo 'Medição e Análise' (Measurement and Analysis - MA) do CMMI, há duas Metas Específicas fundamentais: SG1 (Alinhar Atividades de Medição e Análise) e SG2 (Fornecer Resultados de Medição). Qual das seguintes práticas específicas pertence à meta de 'Alinhar' (SG1)?",
    options: [
      "Analisar dados de medição obtidos em comparação a limiares de tolerância.",
      "Armazenar dados de medição e especificações em um repositório central.",
      "Estabelecer objetivos de medição derivados das necessidades de informação do negócio e dos projetos.",
      "Comunicar os resultados da medição a todos os stakeholders envolvidos.",
      "Executar ações corretivas imediatas a partir dos indicadores de desvio."
    ],
    correctAnswer: 2,
    explanation: "A Meta Específica SG1 (Alinhar Atividades de Medição e Análise) do CMMI-DEV engloba estabelecer objetivos de medição (SP 1.1), especificar medidas (SP 1.2), especificar procedimentos de coleta e armazenamento (SP 1.3) e especificar procedimentos de análise (SP 1.4). As práticas de coletar, analisar, armazenar e comunicar resultados fazem parte da SG2 (Fornecer Resultados de Medição).",
    reference: "CMMI-DEV v1.3 - Process Area: Measurement and Analysis (MA)"
  },
  {
    id: 5,
    topic: "Introdução à Medição e Análise",
    subtopic: "Modelo de Informação da Medição (ISO/IEC 15939)",
    difficulty: "Difícil",
    question: "O Modelo de Informação da Medição (Measurement Information Model) da norma ISO/IEC 15939 e IEEE 15939 estrutura como os dados do mundo real se transformam em subsídios para tomada de decisão. Qual é a sequência correta das etapas nesse fluxo de abstração?",
    options: [
      "Indicador → Medida Derivada → Medida de Base → Atributo → Necessidade de Informação.",
      "Necessidade de Informação → Objeto/Atributo → Medida de Base → Medida Derivada → Indicador → Produto de Informação.",
      "Medida Derivada → Modelo de Decisão → Necessidade de Informação → Coleta de Dados → Auditoria.",
      "Meta Estratégica → Algoritmo de Teste → Métrica de Código → Dashboard → Feedback.",
      "Medida de Base → Atributo → Indicador → Critério de Decisão → Necessidade de Informação."
    ],
    correctAnswer: 1,
    explanation: "Na ISO/IEC 15939, o processo inicia na Necessidade de Informação (originada de objetivos de negócio/projeto), identifica a Entidade e o Atributo a ser medido, aplica métodos de medição direta gerando Medidas de Base, combina-as através de funções matemáticas em Medidas Derivadas, associa critérios de decisão e modelos de análise para produzir Indicadores, que finalmente compõem os Produtos de Informação entregues aos tomadores de decisão.",
    reference: "ISO/IEC 15939:2017 & Florac & Carleton (Measuring the Software Process)"
  },
  {
    id: 6,
    topic: "Introdução à Medição e Análise",
    subtopic: "Métricas de Produto, Processo e Projeto",
    difficulty: "Fácil",
    question: "Na gestão da qualidade, as métricas de software são habitualmente categorizadas em métricas de Produto, de Processo e de Projeto. Assinale a opção que contém exclusivamente métricas de PRODUTO:",
    options: [
      "Complexidade Ciclomática de McCabe, Tamanho em Pontos de Função e Cobertura de Código por Testes.",
      "Esforço real gasto no sprint, Taxa de rotatividade da equipe (turnover) e Atraso no cronograma.",
      "Tempo médio de correção de defeitos (MTTR), Eficiência de remoção de defeitos (DRE) e Custo de qualidade.",
      "Produtividade da equipe em story points, Taxa de retrabalho e Índice de Desempenho de Custo (CPI).",
      "Lead time de entrega de features, Burn-up chart e Satisfação do colaborador."
    ],
    correctAnswer: 0,
    explanation: "Métricas de Produto medem características do próprio software e seus artefatos (código, documentação, especificações), tais como tamanho (LOC, Pontos de Função), complexidade (McCabe, Halstead), acoplamento, coesão e cobertura de código. Métricas de Processo medem a eficácia e maturidade dos processos de desenvolvimento (DRE, tempo de ciclo, lead time). Métricas de Projeto medem recursos, custos, esforço, cronograma e riscos.",
    reference: "Pressman & Maxim (Software Engineering: A Practitioner's Approach)"
  },
  {
    id: 7,
    topic: "Introdução à Medição e Análise",
    subtopic: "Armadilhas e Leis da Medição (Goodhart e Hawthorne)",
    difficulty: "Médio",
    question: "Um gerente de desenvolvimento anunciou que a bonificação de final de ano dos desenvolvedores seria estritamente proporcional ao número de linhas de código (LOC) escritas e ao número de bugs fechados no Jira. Em poucos meses, os sistemas tornaram-se excessivamente verbosos e os desenvolvedores passaram a abrir bugs triviais para fechá-los rapidamente. Esse fenômeno prático ilustra perfeitamente:",
    options: [
      "O Princípio da Incerteza de Heisenberg na compilação estática.",
      "A Lei de Goodhart ('Quando uma medida se torna uma meta, ela deixa de ser uma boa medida') e os perigos do alinhamento disfuncional de incentivos.",
      "O Paradigma de Melhoria da Qualidade (QIP) aplicado à produtividade individual.",
      "A conformidade estrita com o nível 5 do CMMI em gestão quantitativa de pessoas.",
      "A regra de Pareto na distribuição de esforço de codificação."
    ],
    correctAnswer: 1,
    explanation: "A Lei de Goodhart (e correlata Lei de Campbell) estabelece que quando uma medida se torna o alvo ou meta para avaliação de desempenho/recompensa, as pessoas encontram maneiras de maximizar o número sem melhorar o valor real, corrompendo a utilidade da métrica. Isso reforça a boa prática de que métricas nunca devem ser usadas para punição ou metas individuais isoladas, e sim para avaliar processos e produtos em conjunto com métricas de contrapeso.",
    reference: "Marilyn Strathern / Charles Goodhart & Austin (Measuring and Managing Performance in Organizations)"
  },
  {
    id: 8,
    topic: "Introdução à Medição e Análise",
    subtopic: "Eficácia de Remoção de Defeitos (DRE)",
    difficulty: "Difícil",
    question: "A Eficácia de Remoção de Defeitos (Defect Removal Efficiency - DRE) é uma das métricas mais importantes para avaliar a qualidade dos processos de inspeção e teste. Ela é calculada como DRE = E / (E + D), onde E é o número de erros encontrados antes da entrega e D é o número de defeitos encontrados após a entrega pelo usuário. Se um time detectou 180 defeitos durante as fases de desenvolvimento e testes, e os clientes reportaram 20 defeitos no primeiro mês de produção, qual é a DRE do time?",
    options: [
      "80%",
      "90%",
      "11,1%",
      "88,8%",
      "95%"
    ],
    correctAnswer: 1,
    explanation: "DRE = E / (E + D) = 180 / (180 + 20) = 180 / 200 = 0,90, ou seja, 90%. Isso significa que as atividades de garantia da qualidade e testes antes do lançamento foram capazes de interceptar e filtrar 90% de todos os problemas potenciais existentes no produto.",
    reference: "Pressman (Engenharia de Software) & Jones (Applied Software Measurement)"
  },
  {
    id: 9,
    topic: "Introdução à Medição e Análise",
    subtopic: "Critérios de Validade de Métricas",
    difficulty: "Médio",
    question: "Para que um programa de medição tenha credibilidade e robustez científica, as métricas devem satisfazer critérios de validade. Quando verificamos se o instrumento de medição realmente mede o atributo abstrato que alega medir (por exemplo, se 'Complexidade Ciclomática' reflete de fato a 'Dificuldade de Manutenção'), estamos avaliando a:",
    options: [
      "Validade de Construto (Construct Validity).",
      "Validade Externa (External Validity).",
      "Escalabilidade Algorítmica.",
      "Confiabilidade de Cronbach estrita.",
      "Normatividade ISO 9001."
    ],
    correctAnswer: 0,
    explanation: "A Validade de Construto (Construct Validity) diz respeito ao grau em que a medida operacional realmente representa o conceito teórico que se pretende medir. Em engenharia de software, conceitos como 'qualidade', 'manutenibilidade' e 'complexidade' são construtos abstratos; garantir que a métrica quantitativa reflita verdadeiramente o construto é essencial.",
    reference: "Wohlin et al. (Experimentation in Software Engineering)"
  },
  {
    id: 10,
    topic: "Introdução à Medição e Análise",
    subtopic: "Princípios de um Programa de Medição de Sucesso",
    difficulty: "Fácil",
    question: "Qual das seguintes estratégias é amplamente reconhecida como uma MELHOR PRÁTICA na implantação de um programa de medição de software corporativo?",
    options: [
      "Coletar o maior número possível de dados disponíveis antes de definir qualquer objetivo, para não desperdiçar nenhuma informação gerada pelas ferramentas.",
      "Vincular as metas de remuneração variável dos desenvolvedores aos números de defeitos encontrados em seus módulos.",
      "Definir a medição orientada por metas (Goal-driven), garantindo que todo dado coletado responda a uma pergunta clara e apoie uma decisão de negócio ou de projeto.",
      "Manter os dados de medição em sigilo absoluto, restritos à diretoria executiva, para evitar discussões nas equipes técnicas.",
      "Eliminar qualquer coleta automatizada para garantir que o preenchimento manual force o desenvolvedor a refletir sobre o código."
    ],
    correctAnswer: 2,
    explanation: "Programas de medição bem-sucedidos são obrigatoriamente 'Goal-Driven' (orientados por objetivos). Medir sem propósito prévio gera sobrecarga, resistência da equipe e excesso de dados irrelevantes (síndrome do 'cemitério de dados'). A medição deve servir para responder perguntas claras e embasar decisões, com forte automação e transparência.",
    reference: "Park, Goethert & Florac (Goal-Driven Software Measurement - SEI)"
  },

  // =========================================================================
  // TÓPICO 2: GQM - GOAL QUESTION METRIC (Questões 11 a 20)
  // =========================================================================
  {
    id: 11,
    topic: "GQM",
    subtopic: "Fundamentos e Origem do GQM",
    difficulty: "Fácil",
    question: "A abordagem GQM (Goal Question Metric) foi proposta originalmente por Victor Basili e David Weiss na década de 1980 no Software Engineering Laboratory (NASA/SEL). O princípio central que fundamenta o GQM é que:",
    options: [
      "A medição de software deve focar exclusivamente em ferramentas de contagem de linhas de código (SLOC) padronizadas pela ANSI.",
      "A medição deve ser orientada a objetivos, o que significa que métricas só têm significado e utilidade quando vinculadas a metas claras e questões operacionais específicas.",
      "Os objetivos devem ser descobertos após a análise estatística dos dados existentes em repositórios legados.",
      "As questões operacionais devem ser definidas pelos desenvolvedores e as metas financeiras estabelecidas pelo cliente final sem correlação.",
      "Apenas processos ágeis (Scrum/Kanban) podem utilizar a estrutura hierárquica do GQM."
    ],
    correctAnswer: 1,
    explanation: "O fundamento do GQM é que a medição em engenharia de software não pode ser realizada no vazio; ela deve ser orientada por metas e objetivos (Goal-oriented). Uma organização precisa primeiro definir o que quer alcançar ou entender, formular perguntas que indiquem se a meta está sendo atingida e, só então, identificar quais métricas quantitativas respondem a essas perguntas.",
    reference: "Basili, Caldiera & Rombach (The Goal Question Metric Approach, 1994)"
  },
  {
    id: 12,
    topic: "GQM",
    subtopic: "Estrutura Hierárquica dos Três Níveis",
    difficulty: "Fácil",
    question: "A metodologia GQM organiza a medição em três níveis hierárquicos bem delineados. Quais são esses três níveis e suas respectivas naturezas?",
    options: [
      "Nível Estratégico (Financeiro), Nível Tático (Processual) e Nível Operacional (Executivo).",
      "Nível Conceitual (Meta/Objetivo), Nível Operacional (Questão/Pergunta) e Nível Quantitativo (Métrica/Medida).",
      "Nível de Entrada (Requisitos), Nível de Processamento (Testes) e Nível de Saída (Deploy).",
      "Nível Abstrato (Arquitetura), Nível Concreto (Código) e Nível Virtual (Ambiente de Nuvem).",
      "Nível de Negócio (ROI), Nível de Usuário (UX) e Nível de Infraestrutura (SLA)."
    ],
    correctAnswer: 1,
    explanation: "A estrutura clássica do GQM é composta por: 1) Nível Conceitual (Goal/Meta) - define o objetivo para um objeto com respeito a foco, propósito, ponto de vista e contexto; 2) Nível Operacional (Question/Questão) - conjunto de questões que caracterizam a avaliação ou meta; 3) Nível Quantitativo (Metric/Métrica) - conjunto de dados associados a cada questão para respondê-la de forma objetiva ou subjetiva.",
    reference: "Basili, Caldiera & Rombach (1994) / Solingen & Berghout (The GQM Method)"
  },
  {
    id: 13,
    topic: "GQM",
    subtopic: "Direcionalidade do GQM: Top-Down vs. Bottom-Up",
    difficulty: "Médio",
    question: "Sobre a dinâmica de aplicação do GQM na definição e na interpretação da medição, assinale a assertiva correta:",
    options: [
      "A definição das métricas ocorre de forma Bottom-Up (das métricas para as metas) e a interpretação dos resultados ocorre de forma Top-Down (das metas para as métricas).",
      "Tanto a definição do plano de medição quanto a interpretação dos resultados são processos exclusivamente Top-Down.",
      "A formulação do plano de medição é Top-Down (inicia-se nas metas conceituais, desdobra-se em questões e chega-se às métricas), enquanto a análise e interpretação dos dados coletados é Bottom-Up (os dados alimentam as respostas às questões que, por sua vez, avaliam o atingimento da meta).",
      "O GQM dispensa a interpretação de baixo para cima, pois o atingimento da meta é determinado por intuição gerencial independente das métricas.",
      "As métricas determinam autonomamente as questões através de algoritmos de correlação reversa."
    ],
    correctAnswer: 2,
    explanation: "O GQM é célebre por sua via de mão dupla complementar: TOP-DOWN para especificação/definição (Meta -> Questões -> Métricas) e BOTTOM-UP para interpretação/análise (Métricas coletadas respondem às Questões operacionais, que por sua vez permitem interpretar e avaliar se a Meta conceitual foi atingida).",
    reference: "Van Solingen & Berghout (The Goal/Question/Metric Method: A Practical Guide for Quality Improvement)"
  },
  {
    id: 14,
    topic: "GQM",
    subtopic: "Template de Definição de Metas (Template GQM)",
    difficulty: "Médio",
    question: "Basili propôs um template estruturado e padronizado para a formalização do Nível Conceitual (Goal) no GQM. Quais são os 5 elementos essenciais que compõem esse template?",
    options: [
      "Requisito, Código, Caso de Teste, Defeito e Release.",
      "Objeto, Propósito, Foco de Qualidade, Ponto de Vista e Contexto (Ambiente).",
      "Escopo, Custo, Prazo, Qualidade e Risco.",
      "Entrada, Processamento, Saída, Armazenamento e Auditoria.",
      "Visão, Missão, Valores, Estratégia e Tática."
    ],
    correctAnswer: 1,
    explanation: "O template formal de metas do GQM exige 5 parâmetros fundamentais:\n1. Objeto de estudo (processo, produto, recurso);\n2. Propósito (caracterizar, avaliar, prever, melhorar, controlar);\n3. Foco de Qualidade (confiabilidade, manutenibilidade, pontualidade, etc.);\n4. Ponto de Vista / Stakeholder (desenvolvedor, gerente de projeto, cliente, usuário);\n5. Contexto / Ambiente (projeto Alpha, organização, equipe legada, etc.).",
    reference: "Basili & Rombach (Goal/Question/Metric Paradigm)"
  },
  {
    id: 15,
    topic: "GQM",
    subtopic: "Aplicação Prática do Template GQM",
    difficulty: "Médio",
    question: "Considere a seguinte meta formulada em uma fábrica de software: 'Analisar o processo de teste de regressão com o propósito de avaliar a sua eficácia em relação ao tempo de ciclo sob o ponto de vista da equipe de QA no contexto dos projetos mobile da empresa'. Nessa formulação, o 'Foco de Qualidade' e o 'Ponto de Vista' são, respectivamente:",
    options: [
      "Processo de teste de regressão E Projetos mobile da empresa.",
      "Avaliar E Tempo de ciclo.",
      "Tempo de ciclo (eficácia) E Equipe de QA.",
      "Projetos mobile da empresa E Avaliar.",
      "Equipe de QA E Processo de teste de regressão."
    ],
    correctAnswer: 2,
    explanation: "Desmembrando o template GQM no exemplo:\n- Objeto: processo de teste de regressão;\n- Propósito: avaliar;\n- Foco de Qualidade: eficácia em relação ao tempo de ciclo;\n- Ponto de Vista: equipe de QA;\n- Contexto: projetos mobile da empresa.\nPortanto, o Foco de Qualidade é o tempo de ciclo/eficácia e o Ponto de Vista é a equipe de QA.",
    reference: "Basili et al. (1994) / Solingen & Berghout"
  },
  {
    id: 16,
    topic: "GQM",
    subtopic: "Formulação do Nível Operacional (Questões)",
    difficulty: "Difícil",
    question: "Ao elaborar as Questões (Nível Operacional) para desdobrar uma meta de melhoria no GQM, Van Solingen e Berghout sugerem categorizar as questões para cobrir adequadamente o objeto de estudo. Quais são as categorias típicas de questões utilizadas para caracterizar a meta e avaliar os fatores intervenientes?",
    options: [
      "Questões financeiras, questões jurídicas e questões fiscais.",
      "Questões de definição/caracterização do objeto e do foco de qualidade, questões relacionadas aos fatores de variação (hipóteses explicativas) e questões de avaliação do desempenho.",
      "Apenas questões que possam ser respondidas estritamente com 'Sim' ou 'Não'.",
      "Perguntas de múltipla escolha destinadas unicamente a pesquisas de clima organizacional.",
      "Questões sintáticas de compilação e questões de alocação de memória RAM."
    ],
    correctAnswer: 1,
    explanation: "No método GQM, as questões operacionais estruturam-se geralmente em: 1) Questões de caracterização/definição do objeto e atributos de qualidade (Qual é o estado atual? Como o objeto é definido?); 2) Questões de fatores de variação e hipóteses causais (Quais fatores afetam o foco de qualidade? Como a experiência da equipe impacta o resultado?); 3) Questões de avaliação (O resultado alcançado satisfaz a expectativa/meta de baseline?).",
    reference: "Van Solingen & Berghout (The GQM Method, Capítulo 4)"
  },
  {
    id: 17,
    topic: "GQM",
    subtopic: "Métricas Objetivas vs. Subjetivas no GQM",
    difficulty: "Médio",
    question: "No Nível Quantitativo do GQM, as métricas podem ser classificadas como objetivas ou subjetivas. Assinale o exemplo que apresenta, respectivamente, uma métrica OBJETIVA e uma métrica SUBJETIVA associadas à avaliação da usabilidade de uma interface web:",
    options: [
      "Grau de satisfação do usuário em escala Likert de 1 a 5 E Facilidade percebida de navegação pelo usuário.",
      "Tempo médio em segundos para conclusão de uma tarefa de checkout E Nota de satisfação atribuída pelo usuário em uma escala de 1 a 5.",
      "Linhas de código do componente React E Número de cliques até o pagamento.",
      "Opinião do Product Owner sobre o design E Percepção de cores da interface.",
      "Taxa de erros por requisição HTTP E Memória consumida pelo navegador."
    ],
    correctAnswer: 1,
    explanation: "Métricas Objetivas dependem unicamente do objeto que está sendo medido e não da pessoa que mede (ex: tempo cronometrado em segundos, número de cliques, contagem de defeitos). Métricas Subjetivas dependem do julgamento, percepção ou opinião humana (ex: nota de satisfação de 1 a 5, facilidade percebida, nível de estresse relatado). O GQM aceita e integra ambos os tipos.",
    reference: "Basili, Caldiera & Rombach (1994)"
  },
  {
    id: 18,
    topic: "GQM",
    subtopic: "Folhas de Abstração (GQM Abstraction Sheets)",
    difficulty: "Difícil",
    question: "As Folhas de Abstração (Abstraction Sheets) são um instrumento metodológico fundamental no processo de definição do GQM, frequentemente preenchidas em workshops com stakeholders. A folha é dividida em 4 quadrantes. Quais são esses 4 quadrantes?",
    options: [
      "Pontos Fortes, Pontos Fracos, Oportunidades e Ameaças (Matriz SWOT).",
      "Foco de Qualidade (Fatores de Qualidade), Fatores de Variação (Baseline/Contexto), Hipóteses de Linha de Base (Baseline Hypotheses) e Hipóteses de Impacto dos Fatores de Variação.",
      "Backlog do Produto, Sprint Backlog, Gráfico de Burn-down e Histórias de Usuário.",
      "Custos Fixos, Custos Variáveis, Receita Bruta e Margem de Contribuição.",
      "Identificação do Risco, Probabilidade, Impacto e Plano de Mitigação."
    ],
    correctAnswer: 1,
    explanation: "A Folha de Abstração do GQM organiza o raciocínio em quatro quadrantes:\n1. Foco de Qualidade (o que define qualidade para o objeto, ex: defeitos, tempo);\n2. Fatores de Variação (fatores que influenciam esse foco, ex: experiência, tamanho do projeto, tecnologia);\n3. Hipóteses de Linha de Base / Baseline (expectativa atual da equipe sobre o foco de qualidade, ex: 'esperamos 3 defeitos/KLOC');\n4. Hipóteses de Impacto (como os fatores de variação afetam o foco, ex: 'times sem treinamento terão 50% mais defeitos').",
    reference: "Van Solingen & Berghout (1999) & GQM+Strategies (Basili et al., 2010)"
  },
  {
    id: 19,
    topic: "GQM",
    subtopic: "GQM+Strategies e Alinhamento Estratégico",
    difficulty: "Médio",
    question: "Para sanar a limitação do GQM tradicional em conectar metas de medição de nível de projeto aos objetivos estratégicos de alto escalão da corporação, Basili et al. desenvolveram a extensão 'GQM+Strategies'. O diferencial dessa abordagem é:",
    options: [
      "Substituir completamente métricas de software por índices da bolsa de valores (ações da empresa).",
      "Interligar objetivos de negócios corporativos, estratégias de execução e metas de medição de software em uma grade transparente de múltiplos níveis (Grid).",
      "Automatizar o desenvolvimento do software através de Inteligência Artificial sem necessidade de metas.",
      "Permitir que os desenvolvedores definam o preço de venda do software diretamente no código-fonte.",
      "Restringir a medição estritamente a auditorias financeiras externas."
    ],
    correctAnswer: 1,
    explanation: "O GQM+Strategies estende o GQM conectando os objetivos estratégicos de negócio da empresa (ex: 'Aumentar participação no mercado em 15%') às estratégias organizacionais e, daí, às metas operacionais de engenharia de software (via GQM), alinhando e garantindo rastreabilidade vertical por toda a empresa.",
    reference: "Basili et al. (Aligning Organizations Through Measurement: The GQM+Strategies Approach, Springer, 2010)"
  },
  {
    id: 20,
    topic: "GQM",
    subtopic: "Integração do GQM com o QIP (Quality Improvement Paradigm)",
    difficulty: "Difícil",
    question: "O GQM foi concebido para atuar em sinergia com o Paradigma de Melhoria da Qualidade (Quality Improvement Paradigm - QIP) e a Fábrica de Experiência (Experience Factory). No ciclo de 6 passos do QIP (1. Caracterizar, 2. Estabelecer Metas, 3. Escolher Processo, 4. Executar, 5. Analisar, 6. Empacotar), em quais passos o GQM atua mais diretamente?",
    options: [
      "Apenas na etapa 4 (Executar), controlando os horários de entrada da equipe.",
      "Principalmente nas etapas 2 (Estabelecer Metas - definindo metas e métricas via GQM) e 5 (Analisar - interpretando os dados das métricas para avaliar as metas).",
      "Exclusivamente na etapa 6 (Empacotar), redigindo manuais de usuário finais.",
      "O GQM é antagônico ao QIP e nunca deve ser usado em conjunto com ele.",
      "Apenas na etapa 1 (Caracterizar), sendo descartado nas demais fases do ciclo."
    ],
    correctAnswer: 1,
    explanation: "No QIP, o GQM é a técnica por excelência utilizada no Passo 2 ('Set Goals' - transformar necessidades de melhoria em metas formais, questões e métricas) e no Passo 5 ('Analyze Data' - interpretar os dados coletados de baixo para cima contra as metas estabelecidas), subsidiando o Passo 6 (Empacotar o conhecimento acumulado na Experience Factory).",
    reference: "Basili, Caldiera & Cantone (A Reference Architecture for the Component Factory, ACM) & QIP Literature"
  },

  // =========================================================================
  // TÓPICO 3: PSM - PRACTICAL SOFTWARE MEASUREMENT (Questões 21 a 30)
  // =========================================================================
  {
    id: 21,
    topic: "PSM",
    subtopic: "Origem e Propósito do PSM",
    difficulty: "Fácil",
    question: "O framework PSM (Practical Software Measurement), desenvolvido com liderança de John McGarry e apoio do Departamento de Defesa dos EUA (DoD) e do Exército Americano, teve como principal motivador histórico:",
    options: [
      "Substituir todas as linguagens de programação procedurais por orientação a objetos orientada a testes.",
      "Oferecer um guia prático e baseado em evidências para fornecer aos gerentes de projeto dados objetivos para identificar riscos e tomar decisões sobre custo, prazo e qualidade em sistemas complexos.",
      "Impor um modelo matemático infalível que dispense o julgamento de gerentes e líderes técnicos de software.",
      "Padronizar a interface gráfica dos sistemas operacionais de defesa militar.",
      "Eliminar a necessidade de documentação e testes em contratações públicas de software."
    ],
    correctAnswer: 1,
    explanation: "O PSM foi concebido como um guia pragmático patrocinado pelo DoD/Exército americano para resolver o problema crônico de atrasos, estouros de orçamento e problemas de qualidade em projetos de software de grande porte. Seu foco primordial é fornecer informações objetivas para suporte à decisão gerencial e gestão contínua de riscos do projeto.",
    reference: "McGarry et al. (Practical Software Measurement: Objective Information for Decision Makers, Addison-Wesley)"
  },
  {
    id: 22,
    topic: "PSM",
    subtopic: "Princípios Fundamentais do PSM",
    difficulty: "Médio",
    question: "O PSM estabelece nove princípios práticos que devem reger qualquer esforço de medição. Dentre eles, destaca-se o princípio que afirma que a medição deve ser:",
    options: [
      "Centrada estritamente na apuração contábil e auditoria financeira para penalização contratual.",
      "Orientada a problemas e a objetivos (Issue and Goal-driven), adaptada às necessidades específicas de cada projeto e integrada ao longo de todo o ciclo de vida.",
      "Padronizada de forma rígida e idêntica para todos os projetos da organização, sem permitir adaptações contextuais.",
      "Focada unicamente nas linhas de código geradas pelos desenvolvedores seniores.",
      "Executada apenas após a conclusão e entrega do software ao usuário final."
    ],
    correctAnswer: 1,
    explanation: "Os princípios do PSM enfatizam que a medição é: 1) Orientada a objetivos e problemas do projeto (Issue- and objective-driven); 2) Projetada para apoiar decisões do projeto; 3) Integrada ao longo do ciclo de vida; 4) Focada em produtos e processos; e 5) Adaptável (tailored) às características de cada projeto específico.",
    reference: "PSM Guide (Version 4.0b) / McGarry et al., Capítulo 1"
  },
  {
    id: 23,
    topic: "PSM",
    subtopic: "As 4 Atividades do Processo de Medição do PSM",
    difficulty: "Fácil",
    question: "O processo cíclico de medição preconizado pelo PSM é estruturado em quatro atividades principais de alto nível. Quais são elas?",
    options: [
      "Codificar, Compilar, Testar e Implantar.",
      "Planejar a Medição (Plan Measurement), Executar a Medição (Perform Measurement), Avaliar a Medição (Evaluate Measurement) e Estabelecer e Sustentar o Compromisso (Establish and Sustain Commitment).",
      "Definir Requisitos, Modelar Dados, Criar Interface e Validar com Cliente.",
      "Auditar Código, Penalizar Desvios, Emitir Advertências e Cancelar Contratos.",
      "Coletar Dados, Publicar Dashboard, Arquivar Logs e Reiniciar Servidor."
    ],
    correctAnswer: 1,
    explanation: "O processo do PSM (que serviu de base direta para a norma ISO/IEC 15939) organiza-se em 4 atividades nucleares:\n1. Estabelecer e Sustentar o Compromisso (Establish and Sustain Commitment);\n2. Planejar a Medição (Plan Measurement);\n3. Executar a Medição (Perform Measurement);\n4. Avaliar a Medição (Evaluate Measurement).",
    reference: "McGarry et al. (Practical Software Measurement, Capítulo 2)"
  },
  {
    id: 24,
    topic: "PSM",
    subtopic: "Categorias Comuns de Medição do PSM",
    difficulty: "Médio",
    question: "O PSM define um conjunto padronizado de 'Categorias Comuns de Medição' (Common Measurement Categories) que agrupam as questões e riscos mais recorrentes em projetos de software. Qual das alternativas abaixo contém EXCLUSIVAMENTE categorias comuns do PSM?",
    options: [
      "Tamanho e Complexidade, Cronograma e Progresso, Esforço e Custo, Qualidade do Produto.",
      "Design Patterns, Linguagem de Programação, Sistema Operacional, Marca do Computador.",
      "Satisfação do RH, Benefícios Trabalhistas, Vale Refeição, Clima do Escritório.",
      "Número de Reuniões Diárias, Café Consumido, Horas Extras Não Pagas, Linhas de Comentários.",
      "Patentes Registradas, Licenciamento GPL, Tributação Fiscal, Processos Judiciais."
    ],
    correctAnswer: 0,
    explanation: "As Categorias Comuns de Medição do PSM englobam:\n1. Cronograma e Progresso (Schedule and Progress);\n2. Esforço e Custo (Effort and Cost);\n3. Tamanho e Estabilidade/Complexidade (Size and Stability);\n4. Qualidade do Produto (Product Quality);\n5. Desempenho do Processo (Process Performance);\n6. Eficácia e Adequação dos Recursos (Resource Effectiveness).",
    reference: "McGarry et al. (Practical Software Measurement, Capítulo 3)"
  },
  {
    id: 25,
    topic: "PSM",
    subtopic: "Estrutura do Indicador e Critérios de Decisão no PSM",
    difficulty: "Difícil",
    question: "No PSM, um 'Indicador' não é meramente um gráfico com números, mas sim uma representação analítica completa. De acordo com o PSM, um indicador efetivo deve conter obrigatoriamente:",
    options: [
      "Uma foto da equipe responsável e a assinatura do diretor de tecnologia.",
      "A combinação de uma medida mensurável, uma linha de base/plano de comparação e Critérios de Decisão (limiares/thresholds) que orientem uma ação gerencial.",
      "Uma previsão astrológica sobre o comportamento do servidor de produção.",
      "Apenas o valor bruto coletado, deixando a critério de cada leitor deduzir se o resultado é bom ou ruim sem nenhum parâmetro de comparação.",
      "Aprovação formal registrada em cartório de notas."
    ],
    correctAnswer: 1,
    explanation: "No PSM, o poder do Indicador reside na capacidade de guiar decisões. Ele é composto pela medição real comparada com uma expectativa planejada (baseline/target) e por 'Critérios de Decisão' (Decision Criteria / Thresholds) bem definidos, indicando em quais faixas o projeto está sob controle e em quais níveis de desvio ações corretivas devem ser disparadas.",
    reference: "McGarry et al. (Practical Software Measurement, Capítulos 2 e 5)"
  },
  {
    id: 26,
    topic: "PSM",
    subtopic: "Especificação de Medidas no PSM (Fichas Técnicas)",
    difficulty: "Médio",
    question: "Durante a atividade 'Planejar a Medição' no PSM, os engenheiros de medição elaboram especificações operacionais detalhadas para cada medida. Por que a especificação formal do 'Algoritmo de Cálculo' e da 'Fonte dos Dados' é crucial no PSM?",
    options: [
      "Para patentear a fórmula matemática junto ao comitê internacional de marcas.",
      "Para assegurar a repetibilidade, rastreabilidade e consistência dos dados, evitando que diferentes profissionais coletem dados com critérios divergentes.",
      "Para que o cliente final seja obrigado a auditar manualmente o código diariamente.",
      "Para converter automaticamente qualquer linguagem de código em COBOL.",
      "Para dispensar reuniões de planejamento de sprint e revisões de código."
    ],
    correctAnswer: 1,
    explanation: "Uma das principais fontes de falha na medição é a ambiguidade na coleta (ex: o que conta como 'linha de código'? Conta linhas em branco? Comentários?). A especificação detalhada (definição operacional, fonte, responsável, periodicidade e fórmula exata de cálculo) garante consistência, comparabilidade temporal e repetibilidade científica.",
    reference: "PSM Guide & ISO/IEC 15939"
  },
  {
    id: 27,
    topic: "PSM",
    subtopic: "Relação entre PSM e a Norma ISO/IEC 15939",
    difficulty: "Médio",
    question: "Qual é a relação histórica e conceitual entre o framework PSM (Practical Software Measurement) e a norma internacional ISO/IEC 15939 (Processo de Medição de Software e Sistemas)?",
    options: [
      "São modelos concorrentes e mutuamente incompatíveis, disputando mercados opostos.",
      "A norma ISO/IEC 15939 foi substancialmente baseada e derivada dos conceitos, do modelo de informação e do ciclo de processos desenvolvidos no PSM.",
      "O PSM é uma versão antiga do Scrum, enquanto a ISO 15939 trata apenas de hardware de redes.",
      "A ISO/IEC 15939 proibiu oficialmente o uso do PSM após o ano 2000 por motivos regulatórios.",
      "O PSM foi criado exclusivamente para a área da saúde pública e nada tem a ver com normas de software."
    ],
    correctAnswer: 1,
    explanation: "O PSM e seus autores tiveram papel primordial na elaboração da norma ISO/IEC 15939. O modelo de processo (Plan, Perform, Evaluate, Establish Commitment) e o Modelo de Informação da Medição (Information Model) da ISO/IEC 15939 são uma evolução direta e padronizada internacionalmente das fundações consolidadas pelo PSM.",
    reference: "ISO/IEC 15939 Foreword / McGarry et al. (2002)"
  },
  {
    id: 28,
    topic: "PSM",
    subtopic: "Sinergia e Comparação: GQM vs. PSM",
    difficulty: "Difícil",
    question: "Embora tanto o GQM quanto o PSM compartilhem o paradigma de 'medição orientada a objetivos', eles possuem ênfases e características complementares. Assinale a afirmativa que expressa com precisão uma diferença fundamental entre eles:",
    options: [
      "O GQM não permite o uso de métricas numéricas, operando apenas com relatórios em prosa descritiva, ao contrário do PSM.",
      "O GQM oferece um modelo formal para derivar métricas específicas a partir de metas customizadas via questões (foco heurístico/metodológico), enquanto o PSM fornece um processo operacional estruturado acompanhado de um rico catálogo pré-definido de categorias e indicadores comprovados de projeto.",
      "O PSM aplica-se apenas a projetos acadêmicos sem fins lucrativos, enquanto o GQM é de uso exclusivo de agências de defesa e governamentais.",
      "O GQM exige medição a cada hora de trabalho, enquanto o PSM só mede o software após cinco anos de operação contínua.",
      "Não há nenhuma diferença, sendo 'PSM' apenas a tradução alemã para a sigla americana GQM."
    ],
    correctAnswer: 1,
    explanation: "O GQM é primordialmente uma metodologia 'top-down' de derivação lógica (meta -> pergunta -> métrica), adaptável a qualquer contexto e meta organizacional. O PSM, por sua vez, é um processo e framework de engenharia de software voltado ao gerenciamento de projetos, que já vem com um catálogo pragmático de 'Categorias Comuns' e indicadores testados para questões típicas de projeto (custo, cronograma, qualidade, tamanho). Ambas as abordagens se complementam harmonicamente.",
    reference: "McGarry et al. & Basili et al. / Card (Comparing Software Measurement Approaches)"
  },
  {
    id: 29,
    topic: "PSM",
    subtopic: "Avaliação da Medição (Evaluate Measurement) no PSM",
    difficulty: "Médio",
    question: "Na atividade 'Avaliar a Medição' (Evaluate Measurement) do ciclo PSM, o foco principal NÃO é avaliar o código-fonte em si, mas sim:",
    options: [
      "Avaliar o próprio processo de medição, a qualidade dos dados gerados, a utilidade dos indicadores e o retorno do investimento no programa de medição para promover melhorias.",
      "Executar auditoria contábil externa com perícia forense em servidores inativos.",
      "Desligar imediatamente membros da equipe cujos módulos apresentem desvios de prazo.",
      "Deletar dados históricos para economizar espaço de armazenamento em disco rígido.",
      "Alterar os resultados das métricas para agradar investidores externos."
    ],
    correctAnswer: 0,
    explanation: "A atividade 'Avaliar a Medição' (Evaluate Measurement) do PSM corresponde à meta-avaliação do próprio programa de medição: os dados coletados são confiáveis? Os indicadores estão apoiando decisões reais? As métricas continuam úteis ou tornaram-se obsoletas? O custo de coletar compensa o valor gerado? Trata-se de aplicar a melhoria contínua (PDCA) sobre a própria medição.",
    reference: "McGarry et al. (Practical Software Measurement, Capítulo 7)"
  },
  {
    id: 30,
    topic: "PSM",
    subtopic: "Fatores Críticos de Sucesso para Implementação do PSM",
    difficulty: "Fácil",
    question: "Dentre os fatores críticos apontados pelo PSM para garantir a sustentação de um programa de medição em uma organização de desenvolvimento de software, assinale a opção INCORRETA:",
    options: [
      "Obter e manter o patrocínio e compromisso ativo da alta liderança e da gerência de projetos.",
      "Integrar a coleta de dados e a geração de indicadores no fluxo de trabalho rotineiro do projeto, preferencialmente com automação de ferramentas.",
      "Usar os indicadores de medição como ferramenta punitiva e de coerção contra engenheiros individuais com menor rendimento aparente.",
      "Fornecer treinamento adequado às equipes sobre como coletar, interpretar e utilizar os indicadores para tomada de decisão.",
      "Revisar periodicamente o conjunto de medidas para descartar métricas que já não agreguem valor às decisões correntes."
    ],
    correctAnswer: 2,
    explanation: "A utilização de métricas como instrumento de coerção ou punição individual é universalmente apontada como a causa número 1 de fracasso de programas de medição. Isso destrói a confiança da equipe, induz à falsificação ou manipulação de dados (efeito Goodhart/Campbell) e subverte o objetivo do PSM, que é identificar riscos para auxiliar a gerência de projetos na tomada de decisões colaborativas.",
    reference: "McGarry et al. (Practical Software Measurement, Capítulo 8: Establishing and Sustaining Commitment)"
  }
];

export const topicsSummary = {
  "Introdução à Medição e Análise": {
    count: 10,
    color: "#3b82f6",
    badgeClass: "badge-intro",
    description: "Conceitos fundamentais de Medida, Métrica e Indicador, Escalas de Medição, Modelo de Informação ISO/IEC 15939, CMMI-DEV MA, DRE e boas práticas organizacionais."
  },
  "GQM": {
    count: 10,
    color: "#10b981",
    badgeClass: "badge-gqm",
    description: "Goal Question Metric (Victor Basili): Estrutura hierárquica (Conceitual, Operacional, Quantitativo), fluxo Top-Down/Bottom-Up, Template de Metas, Folhas de Abstração, GQM+Strategies e integração com QIP/Experience Factory."
  },
  "PSM": {
    count: 10,
    color: "#8b5cf6",
    badgeClass: "badge-psm",
    description: "Practical Software Measurement (John McGarry / DoD): Princípios fundamentais, 4 Atividades do Processo, Categorias Comuns de Medição, Especificação de Indicadores e Limiares de Decisão, e alinhamento com ISO/IEC 15939."
  }
};

