const quizQuestions = [
    // --- Unidade 1: Introdução Geral ---
    {
        question: "A Estatística é a ciência que utiliza as leis do acaso e o estudo da frequência de eventos para realizar inferências. Qual o objetivo principal da Estatística Descritiva?",
        options: [
            "Realizar previsões sobre o futuro da economia.",
            "Descrever e resumir dados para facilitar a compreensão.",
            "Testar hipóteses complexas sobre populações infinitas.",
            "Estabelecer relações de causa e efeito sem dados."
        ],
        answer: 1,
        justification: "A Estatística Descritiva foca em organizar, resumir e descrever os dados através de tabelas, gráficos e medidas (como média), sem tirar conclusões sobre grupos maiores."
    },
    {
        question: "O conjunto de todos os elementos que possuem pelo menos uma característica em comum, objeto do estudo estatístico, é chamado de:",
        options: ["Amostra", "Variável", "População", "Censo"],
        answer: 2,
        justification: "População é o conjunto total de itens ou pessoas que compartilham uma característica. Amostra é apenas uma parte desse total."
    },
    {
        question: "Quando pesquisamos TODOS os elementos de uma população, estamos realizando um:",
        options: ["Amostragem", "Censo", "Estimativa", "Parâmetro"],
        answer: 1,
        justification: "O Censo é o exame completo de todos os elementos da população (ex: Censo do IBGE)."
    },
    {
        question: "Uma variável que pode assumir qualquer valor numérico em um intervalo contínuo (como peso ou altura) é classificada como:",
        options: [
            "Qualitativa Ordinal",
            "Quantitativa Discreta",
            "Qualitativa Nominal",
            "Quantitativa Contínua"
        ],
        answer: 3,
        justification: "Variáveis Quantitativas Contínuas são aquelas que podem assumir infinitos valores reais em um intervalo (ex: 70,5kg; 1,75m)."
    },
    {
        question: "A variável 'Grau de Instrução' (Fundamental, Médio, Superior) é um exemplo de variável:",
        options: [
            "Qualitativa Nominal",
            "Qualitativa Ordinal",
            "Quantitativa Discreta",
            "Quantitativa Contínua"
        ],
        answer: 1,
        justification: "É Qualitativa por representar um atributo, e Ordinal porque existe uma ordem lógica ou hierarquia entre as categorias."
    },
    {
        question: "O que caracteriza uma variável Quantitativa Discreta?",
        options: [
            "Valores que expressam qualidades ou atributos.",
            "Valores resultantes de contagens (números inteiros).",
            "Valores que só podem ser medidos com instrumentos de precisão.",
            "Valores que não possuem ordem definida."
        ],
        answer: 1,
        justification: "As variáveis discretas são frutos de contagem, assumindo valores inteiros (ex: número de filhos, número de carros)."
    },
    {
        question: "A estatística que permite tirar conclusões sobre a população com base em resultados de uma amostra é a:",
        options: ["Estatística Descritiva", "Estatística Indutiva (ou Inferencial)", "Estatística Básica", "Estatística de Laboratório"],
        answer: 1,
        justification: "A Estatística Indutiva ou Inferencial usa a probabilidade para estender conclusões da amostra para a população."
    },
    {
        question: "Um valor numérico que descreve uma característica da POPULAÇÃO é chamado de:",
        options: ["Estatística", "Estimativa", "Parâmetro", "Variável"],
        answer: 2,
        justification: "Parâmetros referem-se à população; Estimativas ou Estatísticas referem-se à amostra."
    },
    {
        question: "Qual das alternativas abaixo representa uma variável QUALITATIVA NOMINAL?",
        options: ["Estado Civil", "Classificação em um concurso", "Distância percorrida", "Temperatura"],
        answer: 0,
        justification: "Estado civil representa uma categoria sem ordem intrínseca (Solteiro, Casado, etc.), por isso é Nominal."
    },
    {
        question: "O erro que ocorre devido ao fato de estarmos estudando apenas uma parte da população é chamado de:",
        options: ["Erro Humano", "Erro de Coleta", "Erro Amostral", "Erro de Apuração"],
        answer: 2,
        justification: "O erro amostral é a diferença inevitável entre o resultado da amostra e o valor real da população."
    },
    {
        question: "A Estatística é fundamental para a tomada de decisão sob condições de:",
        options: ["Certeza absoluta", "Incerteza", "Conhecimento total", "Ignorância completa"],
        answer: 1,
        justification: "A estatística fornece ferramentas para quantificar o risco e tomar decisões racionais em cenários de incerteza."
    },
    {
        question: "Se uma pesquisa investiga o número de acidentes de trânsito em uma rodovia, a variável é:",
        options: ["Qualitativa", "Quantitativa Contínua", "Quantitativa Discreta", "Estratificada"],
        answer: 2,
        justification: "Número de acidentes é uma contagem (0, 1, 2...), logo é Quantitativa Discreta."
    },
    {
        question: "Na Estatística, o conceito de 'Amostra Representativa' significa que:",
        options: [
            "A amostra deve ser enorme, independente da população.",
            "A amostra deve conter apenas os elementos mais fáceis de encontrar.",
            "A amostra deve refletir as características da população da qual foi extraída.",
            "A amostra deve ser escolhida pelo pesquisador de forma subjetiva."
        ],
        answer: 2,
        justification: "Para que as inferências sejam válidas, a amostra deve guardar as proporções e características da população."
    },
    {
        question: "A coleta de dados que é feita continuamente, como o registro de nascimentos e óbitos, é chamada de:",
        options: ["Coleta Ocasional", "Coleta Periódica", "Coleta Contínua", "Coleta Indireta"],
        answer: 2,
        justification: "Coleta contínua ocorre ininterruptamente à medida que os fatos acontecem (registros civis)."
    },
    {
        question: "Qual técnica de amostragem garante que cada elemento da população tenha a mesma chance de ser escolhido?",
        options: ["Amostragem Intencional", "Amostragem Aleatória Simples", "Amostragem por Conveniência", "Amostragem por Cota"],
        answer: 1,
        justification: "A Amostragem Aleatória Simples (AAS) é o método probabilístico básico onde todos têm a mesma probabilidade de seleção."
    },

    // --- Unidade 2: Fases do Método Estatístico ---
    {
        question: "Qual é a PRIMEIRA fase do método estatístico?",
        options: ["Coleta de dados", "Planejamento", "Apuração", "Definição do Problema"],
        answer: 3,
        justification: "Antes de qualquer ação, é preciso saber exatamente o que se pretende pesquisar: esta é a definição do problema."
    },
    {
        question: "A fase onde se decide como os dados serão coletados, cronogramas e custos é o:",
        options: ["Planejamento", "Crítica", "Exposição", "Análise"],
        answer: 0,
        justification: "O planejamento define a estratégia da pesquisa (instrumentos, prazos, custos e métodos)."
    },
    {
        question: "A coleta de dados feita diretamente pelo pesquisador por meio de questionários ou entrevistas é denominada:",
        options: ["Coleta Indireta", "Coleta Direta", "Coleta por Censitária", "Coleta de Terceiros"],
        answer: 1,
        justification: "Coleta Direta é aquela obtida da própria fonte original pelo pesquisador."
    },
    {
        question: "A fase de 'Crítica dos Dados' serve para:",
        options: [
            "Criticar os resultados ruins da pesquisa.",
            "Eliminar erros, omissões e inconsistências nos dados coletados.",
            "Divulgar os dados na imprensa.",
            "Calcular a média e o desvio padrão."
        ],
        answer: 1,
        justification: "A crítica visa garantir a qualidade dos dados, corrigindo falhas antes da organização final."
    },
    {
        question: "O que é a fase de 'Apuração' (ou Tabulação) dos dados?",
        options: [
            "A contagem e agrupamento dos dados para facilitar a análise.",
            "A escolha das pessoas que serão entrevistadas.",
            "A redação das conclusões finais.",
            "A aplicação do questionário."
        ],
        answer: 0,
        justification: "A apuração é o processamento dos dados, transformando dados brutos em informações organizadas."
    },
    {
        question: "A 'Exposição' dos dados estatísticos foca principalmente em:",
        options: [
            "Coletar mais dados.",
            "Apresentar os dados em tabelas e gráficos.",
            "Ocultar resultados desfavoráveis.",
            "Fazer cálculos estatísticos complexos."
        ],
        answer: 1,
        justification: "A fase de exposição busca comunicar os resultados de forma visual e clara através de recursos gráficos."
    },
    {
        question: "A última e mais importante fase do método estatístico, que interpreta os resultados e propõe soluções, é a:",
        options: ["Coleta", "Análise e Interpretação", "Crítica", "Apuração"],
        answer: 1,
        justification: "É nesta fase que a estatística cumpre seu papel de transformar números em conclusões e suporte para decisões."
    },
    {
        question: "A coleta de dados que é realizada de tempos em tempos (ex: Censo a cada 10 anos) é classificada como:",
        options: ["Contínua", "Periódica", "Ocasional", "Estratificada"],
        answer: 1,
        justification: "Coletas periódicas ocorrem em intervalos de tempo pré-definidos."
    },
    {
        question: "Se um pesquisador utiliza dados de uma revista ou site oficial para sua análise, ele está realizando uma:",
        options: ["Coleta Direta", "Coleta Indireta", "Coleta Primária", "Coleta Sensível"],
        answer: 1,
        justification: "Coleta Indireta ocorre quando se utiliza dados já coletados e processados por outros."
    },
    {
        question: "No planejamento, o pesquisador define o 'instrumento de coleta'. Qual o mais comum?",
        options: ["Gráfico de barras", "Questionário", "Cálculo de média", "Tabela de frequências"],
        answer: 1,
        justification: "O questionário é a ferramenta padrão para coletar dados primários de uma amostra."
    },
    {
        question: "A crítica externa dos dados foca em:",
        options: [
            "Erros de cálculo dentro da planilha.",
            "Validade e correção da fonte dos dados.",
            "Problemas de digitação.",
            "Gosto pessoal do pesquisador."
        ],
        answer: 1,
        justification: "A crítica externa avalia se a fonte é confiável e se o preenchimento foi feito honestamente."
    },
    {
        question: "A crítica interna dos dados foca em:",
        options: [
            "Conferir se os dados são consistentes entre si.",
            "Analisar a cor do papel do questionário.",
            "Criticar os colegas de trabalho.",
            "Contratar novos pesquisadores."
        ],
        answer: 0,
        justification: "A crítica interna busca incoerências (ex: idade de 200 anos ou homem em pesquisa de gestantes)."
    },
    {
        question: "A definição do cronograma de trabalho faz parte de qual fase?",
        options: ["Exposição", "Planejamento", "Análise", "Coleta"],
        answer: 1,
        justification: "O cronograma é um elemento vital do planejamento para garantir o cumprimento de prazos."
    },
    {
        question: "A 'delimitação da pesquisa' (onde e quem) ocorre em qual fase?",
        options: ["Planejamento", "Apuração", "Definição do Problema", "Coleta"],
        answer: 2,
        justification: "Na definição do problema, já se deve delimitar o seu alcance para não tornar a pesquisa inviável."
    },
    {
        question: "Qual fase vem imediatamente APÓS a Apuração?",
        options: ["Coleta", "Exposição", "Crítica", "Planejamento"],
        answer: 1,
        justification: "Depois de apurados (contados/organizados), os dados devem ser Expostos (Tabelas/Gráficos)."
    },

    // --- Unidade 3: Séries Estatísticas ---
    {
        question: "O que define uma Série Estatística?",
        options: [
            "Um conjunto de números aleatórios.",
            "Dados organizados variando segundo tempo, local ou espécie.",
            "Apenas dados sobre o IBGE.",
            "Uma lista de nomes sem valores numéricos."
        ],
        answer: 1,
        justification: "Séries são tabelas que mostram como um fenômeno varia em relação a fatores específicos."
    },
    {
        question: "Uma série em que os dados variam de acordo com o TEMPO é chamada de:",
        options: ["Geográfica", "Específica", "Cronológica", "Mista"],
        answer: 2,
        justification: "Variando o tempo (anos, meses, dias), a série é Cronológica (Histórica ou Temporal)."
    },
    {
        question: "Uma tabela que mostra a produção de soja por ESTADOS brasileiros em 2023 é uma série:",
        options: ["Cronológica", "Geográfica", "Específica", "Conjugada"],
        answer: 1,
        justification: "Como variam os locais (estados) e o tempo é fixo (2023), a série é Geográfica (Territorial)."
    },
    {
        question: "Uma série que agrupa dados por CATEGORIAS (ex: número de alunos por religião) é chamada de:",
        options: ["Série Temporal", "Série Espacial", "Série Específica", "Série Cronológica"],
        answer: 2,
        justification: "Séries Específicas (ou Qualitativas) variam segundo a espécie ou categoria do fenômeno."
    },
    {
        question: "O que é uma 'Série Conjugada' (ou Mista)?",
        options: [
            "Uma série que só tem um dado.",
            "Uma série que combina duas ou mais variações (ex: Tempo e Local).",
            "Uma série com erros de preenchimento.",
            "Uma série escrita em duas línguas."
        ],
        answer: 1,
        justification: "Séries Conjugadas mostram a variação simultânea de dois ou mais fatores (ex: Vendas por Mês e por Região)."
    },
    {
        question: "Em uma tabela estatística, o 'período, local e fato' devem constar obrigatoriamente no:",
        options: ["Rodapé", "Título", "Corpo", "Cabeçalho"],
        answer: 1,
        justification: "O Título deve responder resumidamente: O quê? (Fato), Onde? (Local) e Quando? (Época)."
    },
    {
        question: "A parte da tabela que contém a indicação da origem dos dados é a:",
        options: ["Fonte", "Cabeçalho", "Corpo", "Coluna Indicadora"],
        answer: 0,
        justification: "A Fonte é fundamental para dar credibilidade e permitir a conferência dos dados."
    },
    {
        question: "O 'Cabeçalho' de uma tabela serve para:",
        options: [
            "Explicar as abreviaturas.",
            "Designar o conteúdo de cada coluna.",
            "Indicar quem coletou os dados.",
            "Mostrar o nome da empresa."
        ],
        answer: 1,
        justification: "O cabeçalho identifica o que está sendo apresentado em cada coluna da tabela."
    },
    {
        question: "A série 'Vendas de TVs na loja X de 2010 a 2020' é do tipo:",
        options: ["Geográfica", "Cronológica", "Específica", "Estratificada"],
        answer: 1,
        justification: "A variação ocorre no tempo (2010 a 2020), mantendo fixo o local (loja X)."
    },
    {
        question: "Uma série 'População por bairro em São Paulo no ano de 2024' é:",
        options: ["Cronológica", "Geográfica", "Específica", "Nula"],
        answer: 1,
        justification: "Embora mencione o ano, o que MUDA na listagem são os bairros (locais)."
    },
    {
        question: "A série 'Número de funcionários por cargo na empresa Y em Jan/2024' é:",
        options: ["Específica", "Geográfica", "Cronológica", "Mista"],
        answer: 0,
        justification: "O que muda são os cargos (espécies/categorias), logo é Específica."
    },
    {
        question: "Qual o nome da série que varia tanto no Tempo quanto no Local?",
        options: ["Série Específica", "Série Geográfica", "Série Cronológico-Geográfica", "Série Simples"],
        answer: 2,
        justification: "É uma série mista que cruza dados de localidade com dados temporais."
    },
    {
        question: "As 'Notas de rodapé' em uma tabela servem para:",
        options: [
            "Colocar o título principal.",
            "Esclarecer pontos do corpo da tabela ou notas genéricas.",
            "Apenas colocar o nome do autor.",
            "Decorar a tabela."
        ],
        answer: 1,
        justification: "Notas de rodapé fornecem informações adicionais necessárias para interpretar corretamente os dados."
    },
    {
        question: "Qual elemento da tabela é formado por linhas e colunas com os dados numéricos propriamente ditos?",
        options: ["Título", "Corpo", "Fonte", "Cabeçalho"],
        answer: 1,
        justification: "O CORPO é o conjunto de células que contém os valores observados."
    },
    {
        question: "A 'Coluna Indicadora' de uma tabela foca em:",
        options: [
            "Descrever o conteúdo das colunas.",
            "Descrever o conteúdo das linhas.",
            "Colocar a data da pesquisa.",
            "Indicar o erro amostral."
        ],
        answer: 1,
        justification: "A coluna indicadora fica à esquerda e diz o que cada linha representa."
    },
    {
        question: "Se uma tabela apresenta 'Casos de Dengue por Mês e por Gênero', ela é uma série:",
        options: ["Geográfica", "Conjugada (Cronológico-Específica)", "Cronológica Pura", "Específica Pura"],
        answer: 1,
        justification: "Cruza Tempo (Mês) com Espécie/Categoria (Gênero), sendo portanto mista."
    },
    {
        question: "As normas brasileiras de apresentação tabular de dados são feitas principalmente pelo:",
        options: ["MEC", "IBGE", "Receita Federal", "CONTRAN"],
        answer: 1,
        justification: "O IBGE é o órgão responsável pelas normas de apresentação de tabelas e gráficos estatísticos no Brasil."
    },
    {
        question: "Um quadro estatístico difere de uma tabela principalmente porque:",
        options: [
            "Quadros são fechados lateralmente, tabelas são abertas.",
            "Tabelas têm apenas dados qualitativos.",
            "Quadros não possuem título.",
            "Não há diferença."
        ],
        answer: 0,
        justification: "Segundo as normas, tabelas não devem ter linhas verticais fechando as laterais (para enfatizar que os dados continuam), enquanto quadros são fechados."
    },
    {
        question: "O que deve ser colocado no título se a fonte não for informada no rodapé?",
        options: [
            "Nada, a fonte é opcional.",
            "O nome do pesquisador no título.",
            "O título deve obrigatoriamente referenciar a origem em casos de dados secundários.",
            "Mudar a cor da tabela."
        ],
        answer: 2,
        justification: "Transparência é regra: se os dados não são primários, a fonte deve estar clara no título ou rodapé."
    },
    {
        question: "Séries Históricas são sinônimos de:",
        options: ["Séries Geográficas", "Séries Temporais", "Séries Específicas", "Séries de Futuro"],
        answer: 1,
        justification: "Históricas, Cronológicas, Evolutivas ou Temporais são nomes para a mesma categoria de variação no tempo."
    }
];
