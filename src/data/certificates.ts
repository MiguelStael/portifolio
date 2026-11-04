export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: 'Tecnologia & IA' | 'Dados & BI' | 'Liderança & Negócios' | 'Soft Skills' | 'Educação Superior';
  workload?: string;
  period?: string;
  highlight?: string;
  description: string;
  pdfUrl: string;
  featured?: boolean;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: 'residencia-serratec',
    title: 'Residência em TIC/Software — Desenvolvedor Full Stack',
    issuer: 'Serratec / Firjan SENAI',
    category: 'Tecnologia & IA',
    workload: '790 horas',
    period: 'Ago/2025 - Dez/2025',
    highlight: 'Média técnica 95,5/100 • 100/100 em Inglês Técnico',
    description: 'Formação intensiva em desenvolvimento Full Stack: C# (.NET Core), Java (Spring Boot), React, TypeScript, bancos relacionais, arquitetura DDD e microsserviços.',
    pdfUrl: '/certificates/residencia-serratec-fullstack.pdf',
    featured: true,
  },
  {
    id: 'unicesumar-ads',
    title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    issuer: 'UniCesumar',
    category: 'Educação Superior',
    workload: 'Graduação Superior',
    period: '2025 - Previsão: Dez/2027',
    highlight: '3º período • Matrícula regular',
    description: 'Formação superior com foco em engenharia de software, modelagem de dados, algoritmos, governança de TI e arquitetura orientada a serviços.',
    pdfUrl: '/certificates/unicesumar-ads-carteirinha.pdf',
    featured: true,
  },
  {
    id: 'domine-ia-gemini',
    title: 'Domine a IA com Gemini',
    issuer: 'Google / Santander Open Academy',
    category: 'Tecnologia & IA',
    workload: 'Formação Prática',
    description: 'Engenharia de prompts avançada, integração com modelos generativos Gemini, automação e boas práticas de desenvolvimento assistido por IA.',
    pdfUrl: '/certificates/domine-ia-gemini.pdf',
    featured: true,
  },
  {
    id: 'power-bi',
    title: 'Power BI & Análise de Dados',
    issuer: 'Santander Open Academy',
    category: 'Dados & BI',
    workload: 'Certificação Técnica',
    description: 'Modelagem relacional para BI, expressões DAX, processos de ETL, governança de dados e criação de dashboards interativos executivos.',
    pdfUrl: '/certificates/power-bi.pdf',
    featured: true,
  },
  {
    id: 'introducao-ciencia-de-dados',
    title: 'Introdução à Ciência de Dados',
    issuer: 'IE University / Santander Open Academy',
    category: 'Dados & BI',
    workload: 'Certificação Internacional',
    description: 'Conceitos centrais de analytics, exploração estatística, visualização de dados e resolução analítica de problemas corporativos.',
    pdfUrl: '/certificates/introducao-ciencia-de-dados.pdf',
    featured: true,
  },
  {
    id: 'lideranca',
    title: 'Liderança de Equipes',
    issuer: 'ESADE Business School / Santander',
    category: 'Liderança & Negócios',
    workload: 'Certificação Executiva',
    description: 'Competências de liderança situacional, feedback construtivo, gestão colaborativa e motivação de times de tecnologia.',
    pdfUrl: '/certificates/lideranca.pdf',
    featured: true,
  },
  {
    id: 'negociacao',
    title: 'Negociação e Gestão de Conflitos',
    issuer: 'ESADE Business School / Santander',
    category: 'Liderança & Negócios',
    workload: 'Certificação Executiva',
    description: 'Técnicas de negociação ganha-ganha, comunicação persuasiva e resolução estruturada de impasses interpessoais e de projetos.',
    pdfUrl: '/certificates/negociacao.pdf',
    featured: true,
  },
  {
    id: 'pensamento-critico',
    title: 'Pensamento Crítico & Resolução de Problemas',
    issuer: 'ESADE Business School / Santander',
    category: 'Liderança & Negócios',
    workload: 'Certificação Executiva',
    description: 'Abordagem metódica para diagnóstico de causas-raiz, tomada de decisão fundamentada e estruturação de soluções sob cenários complexos.',
    pdfUrl: '/certificates/pensamento-critico-resolucao-problemas.pdf',
    featured: true,
  },
  {
    id: 'comunicacao-efetiva',
    title: 'Comunicação Efetiva no Trabalho',
    issuer: 'Santander Open Academy',
    category: 'Soft Skills',
    description: 'Clareza comunicativa, escuta ativa e assertividade na transmissão de requisitos técnicos entre equipes multidisciplinares.',
    pdfUrl: '/certificates/comunicacao-efetiva.pdf',
    featured: false,
  },
  {
    id: 'escrita-eficaz',
    title: 'Escrita Eficaz e Persuasiva',
    issuer: 'Santander Open Academy',
    category: 'Soft Skills',
    description: 'Estruturação de raciocínio, escrita clara, objetiva e persuasiva aplicada a documentações de arquitetura e relatórios técnicos.',
    pdfUrl: '/certificates/escrita-eficaz-persuasiva.pdf',
    featured: false,
  },
  {
    id: 'ecommerce-gestao',
    title: 'E-commerce e Gestão Comercial',
    issuer: 'Santander Open Academy',
    category: 'Liderança & Negócios',
    description: 'Fundamentos de plataformas de comércio eletrônico, funil de vendas, métricas operacionais e experiência do consumidor.',
    pdfUrl: '/certificates/ecommerce-gestao-comercial.pdf',
    featured: false,
  },
  {
    id: 'excel-avancado',
    title: 'Excel Avançado & Produtividade',
    issuer: 'Santander Open Academy',
    category: 'Dados & BI',
    description: 'Manipulação avançada de planilhas, automação de cálculos analíticos, tabelas dinâmicas e consolidação de bases de dados.',
    pdfUrl: '/certificates/excel-avancado.pdf',
    featured: false,
  },
  {
    id: 'mindfulness-equilibrio',
    title: 'Mindfulness e Equilíbrio Pessoal & Profissional',
    issuer: 'Santander Open Academy',
    category: 'Soft Skills',
    description: 'Técnicas de foco sustentável, prevenção de esgotamento e manutenção de alta produtividade com equilíbrio de saúde mental.',
    pdfUrl: '/certificates/mindfulness-equilibrio.pdf',
    featured: false,
  },
  {
    id: 'santander-open-academy',
    title: 'Santander Open Academy — Desenvolvimento Profissional',
    issuer: 'Santander Open Academy',
    category: 'Liderança & Negócios',
    description: 'Certificação consolidada de competências transversais em gestão, tecnologia e inovação profissional.',
    pdfUrl: '/certificates/santander-open-academy.pdf',
    featured: false,
  },
];

