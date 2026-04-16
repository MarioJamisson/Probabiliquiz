# 📊 ProbabiliQuiz v2.0

Uma plataforma profissional de simulados para o estudo de **Estatística**, projetada com foco em UX moderna, aprendizado didático e acompanhamento de desempenho.

## 🚀 Novidades da Versão 2.0

O sistema foi completamente refatorado para deixar de ser um simulado fixo e se tornar uma **plataforma modular**.

### 🛠️ Arquitetura Profissional
- **Fonte de Dados Externa**: Agora as questões residem em um arquivo `questions.json`, permitindo fácil atualização sem mexer no código.
- **Motor de Simulado Inteligente**: Lógica separada da interface, tratando embaralhamento, filtros por assunto e cálculo de métricas em tempo real.
- **Interface Premium**: Design baseado em Glassmorphism, com suporte a **Modo Escuro/Claro** e animações fluidas.

### ✨ Funcionalidades Adicionais
- **Seleção por Assunto**: Escolha entre simulado completo ou tópicos específicos (Introdução, Fases do Método, Séries).
- **Feedback Didático**: Cada resposta acompanha uma explicação detalhada do conceito abordado.
- **Modo Revisão**: Ao finalizar, você pode optar por revisar apenas as questões que errou.
- **Cronômetro**: Acompanhe o tempo gasto em cada sessão para treinar sua velocidade.
- **Histórico Local**: Seus últimos 10 resultados ficam salvos no navegador.
- **Progresso Visual**: Barra de progresso dinâmica e gráfico circular de desempenho final.

## 📱 Tecnologias
- **HTML5 & CSS3**: Custom properties, Flexbox/Grid e Glassmorphism.
- **JavaScript Moderno (ES6+)**: Fetch API, LocalStorage e manipuladores de estado.
- **Mobile First**: Totalmente responsivo para tablets e smartphones.
- **PWA Ready**: Manifest e Service Worker para funcionamento offline (necessário protocolo HTTPS).

## 📂 Estrutura do Projeto
- `index.html`: Camada visual e estrutura.
- `style.css`: Design system e animações.
- `app.js`: Motor do simulado e lógica de negócio.
- `questions.json`: Banco de dados de questões.
- `sw.js`: Service worker para cache offline.

---
*Desenvolvido para transformar o estudo de estatística em uma experiência envolvente e profissional.*
