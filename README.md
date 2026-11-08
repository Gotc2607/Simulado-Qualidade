# Simulado Web de Qualidade de Software

Aplicação web interativa para preparação, avaliação e estudo sobre **Medição e Análise de Software**, **GQM (Goal Question Metric)** e **PSM (Practical Software Measurement)**.

## 📋 Conteúdo Abordado (30 Questões Comentadas)

O simulado contém **30 questões** inéditas de múltipla escolha com gabarito comentado, classificadas por dificuldade (Fácil, Médio, Difícil) e com referências bibliográficas e normativas:

1. **Introdução à Medição e Análise (10 Questões):**
   - Distinção conceitual: Medida, Métrica e Indicador (IEEE e ISO/IEC 15939).
   - Escalas de Medição (Nominal, Ordinal, Intervalar e Razão).
   - Medidas de Base (diretas) vs. Medidas Derivadas (indiretas).
   - Modelo de Informação da Medição da ISO/IEC 15939.
   - Área de processo Medição e Análise do CMMI-DEV (SG1 Alinhar e SG2 Fornecer Resultados).
   - Métricas de Produto, Processo e Projeto.
   - Eficácia de Remoção de Defeitos (DRE - Defect Removal Efficiency).
   - Lei de Goodhart e armadilhas da medição (efeitos disfuncionais).
   - Critérios de validade de métricas (Validade de Construto).
   - Melhores práticas para programas de medição orientados a objetivos.

2. **GQM - Goal Question Metric (10 Questões):**
   - Origem e fundamentos da abordagem por Victor Basili (NASA/SEL).
   - A hierarquia em 3 níveis: Nível Conceitual (Metas), Nível Operacional (Questões) e Nível Quantitativo (Métricas).
   - Dinâmica Top-Down (definição do plano) e Bottom-Up (análise e interpretação).
   - O Template Formal de Metas do GQM: Objeto, Propósito, Foco de Qualidade, Ponto de Vista e Contexto.
   - Aplicação prática do template em cenários reais.
   - Formulação de questões de caracterização, fatores de variação e avaliação.
   - Métricas objetivas vs. métricas subjetivas no GQM.
   - Folhas de Abstração (Abstraction Sheets) e seus 4 quadrantes.
   - Extensão GQM+Strategies para alinhamento com a estratégia corporativa.
   - Integração do GQM com o Paradigma de Melhoria da Qualidade (QIP) e a Fábrica de Experiência (Experience Factory).

3. **PSM - Practical Software Measurement (10 Questões):**
   - Origem histórica e propósito gerencial do PSM (DoD / Exército Americano / John McGarry).
   - Princípios norteadores do PSM (orientado a problemas e decisões de projeto).
   - As 4 atividades do ciclo do processo de medição:
     1. Estabelecer e Sustentar o Compromisso (*Establish and Sustain Commitment*)
     2. Planejar a Medição (*Plan Measurement*)
     3. Executar a Medição (*Perform Measurement*)
     4. Avaliar a Medição (*Evaluate Measurement*)
   - Categorias Comuns de Medição do PSM (Tamanho/Complexidade, Cronograma/Progresso, Esforço/Custo, Qualidade do Produto, Desempenho do Processo, Eficácia dos Recursos).
   - Estrutura de Indicadores do PSM, Linhas de Base e Critérios de Decisão (limiares/*thresholds*).
   - Especificação técnica operacional de medidas (algoritmos, fontes e periodicidade).
   - Convergência com a norma internacional ISO/IEC 15939 / IEEE 15939.
   - Quadro comparativo e sinergias entre GQM e PSM.
   - Avaliação contínua da medição e fatores críticos de sucesso na implantação.

---

## 🚀 Funcionalidades da Aplicação

- **Modo Simulado Real:**
  - Simulado com ou sem tempo limite (30, 45 ou 60 minutos com cronômetro regressivo e alertas sonoros/visuais).
  - Opção de embaralhar as questões.
  - Grade lateral de navegação rápida (1 a 30) indicando questões respondidas, em branco, questão atual e marcadas para revisão.
  - Botão "Marcar para Revisar" para retornar a itens duvidosos antes de finalizar.
  - Tela de diagnóstico final com cálculo de nota, percentual, classificação qualitativa e tempo decorrido.
  - **Desempenho por Tópico:** Gráficos de barras individuais para Introdução, GQM e PSM, permitindo identificar onde concentrar os estudos.
  - **Treino de Questões Erradas:** Botão inteligente que cria uma sessão de treino apenas com as questões que você errou ou deixou em branco.

- **Modo Estudo / Treino:**
  - Resolução pedagógica com feedback imediato ao clicar na alternativa, exibindo explicação minuciosa e fundamentação teórica.

- **Guia Teórico Resumido ("Resumo de Bolso"):**
  - Aba com síntese conceitual dos 3 temas, fórmulas e tabela comparativa direta entre GQM e PSM.

- **Histórico Local:**
  - Armazena as últimas tentativas no `localStorage` do navegador para acompanhamento de evolução.

- **Design Responsivo & Dark Mode:**
  - Suporte completo a tema Claro e Escuro (com detecção do sistema).
  - Layout otimizado para celulares, tablets e computadores.
  - Impressão / Salvamento em PDF do gabarito e relatório.

---

## 🛠️ Como Executar o Projeto

A aplicação foi construída com tecnologias web modernas puras (HTML5 semântico, CSS3 com variáveis e Flexbox/Grid, e JavaScript ES6 Modules), sem necessidade de instalação de dependências pesadas ou processos de compilação.

### Opção 1: Abrir diretamente no navegador
Basta dar dois cliques no arquivo `index.html` ou abri-lo com seu navegador web preferido (Chrome, Firefox, Edge, etc.).

### Opção 2: Servidor local via Python
No terminal, dentro da pasta do projeto:
```bash
python3 -m http.server 8000
```
Depois acesse `http://localhost:8000` no navegador.

### Opção 3: Servidor local via Node.js
```bash
npx serve .
```

---

## 📁 Estrutura de Arquivos

```
Simulado-Qualidade/
├── index.html                 # Estrutura principal da aplicação (SPA com múltiplas views)
├── css/
│   └── style.css              # Sistema de design, paleta temática (Dark/Light), layout responsivo
├── js/
│   ├── app.js                 # Controlador da aplicação (estado, cronômetro, pontuação, eventos)
│   └── data/
│       └── questions.js       # Banco com as 30 questões comentadas e metadados
└── README.md                  # Documentação completa do projeto
```
