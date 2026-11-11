export type CertificateCategory =
  | 'Tecnologia & IA'
  | 'Dados & BI'
  | 'Liderança & Negócios'
  | 'Soft Skills';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: CertificateCategory;
  pdfUrl: string;
  workload?: string;
  description: string;
  highlight?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: 'domine-ia-gemini',
    title: 'Domine a IA com Gemini',
    issuer: 'Google / Santander Open Academy',
    category: 'Tecnologia & IA',
    pdfUrl: '/portifolio/certificates/domine-a-ia-com-gemini.pdf',
    description: 'Introdução ao uso prático de Gemini para automação de fluxos de desenvolvimento e produtividade.',
    highlight: 'Google / Santander',
  },
  {
    id: 'power-bi',
    title: 'Power BI & Análise de Dados',
    issuer: 'Santander Open Academy',
    category: 'Dados & BI',
    pdfUrl: '/portifolio/certificates/power-bi.pdf',
    description: 'Fundamentos de análise de dados, visualização e relatórios executivos com Power BI.',
  },
  {
    id: 'ciencia-dados',
    title: 'Introdução à Ciência de Dados',
    issuer: 'IE University / Santander',
    category: 'Dados & BI',
    pdfUrl: '/portifolio/certificates/introducao-ciencia-dados.pdf',
    description: 'Noções introdutórias de ciência de dados, estatística e aprendizado de máquina.',
  },
  {
    id: 'lideranca',
    title: 'Liderança',
    issuer: 'Santander Open Academy',
    category: 'Liderança & Negócios',
    pdfUrl: '/portifolio/certificates/lideranca.pdf',
    description: 'Competências de liderança, gestão de equipes e tomada de decisão.',
  },
  {
    id: 'negociacao',
    title: 'Negociação',
    issuer: 'Santander Open Academy',
    category: 'Liderança & Negócios',
    pdfUrl: '/portifolio/certificates/negociacao.pdf',
    description: 'Técnicas de negociação, comunicação eficaz e mediação de conflitos.',
  },
  {
    id: 'resolucao-problemas',
    title: 'Pensamento Crítico & Resolução de Problemas',
    issuer: 'Santander Open Academy',
    category: 'Soft Skills',
    pdfUrl: '/portifolio/certificates/pensamento-critico-resolucao-problemas.pdf',
    description: 'Raciocínio crítico, análise de problemas e tomada de decisão fundamentada.',
  },
  {
    id: 'comunicacao-efetiva',
    title: 'Comunicação Eficaz',
    issuer: 'Santander Open Academy',
    category: 'Soft Skills',
    pdfUrl: '/portifolio/certificates/comunicacao-efetiva.pdf',
    description: 'Habilidades de comunicação clara, persuasiva e adaptada a diferentes públicos.',
  },
  {
    id: 'escrita-eficaz',
    title: 'Escrita Eficaz e Persuasiva',
    issuer: 'Santander Open Academy',
    category: 'Soft Skills',
    pdfUrl: '/portifolio/certificates/escrita-eficaz-e-persuasiva.pdf',
    description: 'Técnicas de escrita clara, concisa e persuasiva para contextos profissionais.',
  },
  {
    id: 'excel',
    title: 'Excel',
    issuer: 'Santander Open Academy',
    category: 'Dados & BI',
    pdfUrl: '/portifolio/certificates/excel.pdf',
    description: 'Ferramentas de Excel para análise de dados, planilhas e relatórios.',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce e Gestão Comercial',
    issuer: 'Santander Open Academy',
    category: 'Liderança & Negócios',
    pdfUrl: '/portifolio/certificates/ecommerce-e-gestao-comercial.pdf',
    description: 'Fundamentos de comércio eletrônico, gestão comercial e vendas online.',
  },
  {
    id: 'mindfulness',
    title: 'Mindfulness e Equilíbrio',
    issuer: 'Santander Open Academy',
    category: 'Soft Skills',
    pdfUrl: '/portifolio/certificates/mindfulness-e-equilibrio.pdf',
    description: 'Práticas de mindfulness, produtividade e equilíbrio entre vida pessoal e profissional.',
  },
  {
    id: 'santander-open',
    title: 'Santander Open Academy',
    issuer: 'Santander Open Academy',
    category: 'Liderança & Negócios',
    pdfUrl: '/portifolio/certificates/santander-open-academy.pdf',
    description: 'Certificado geral de conclusão pela Santander Open Academy.',
  },
];