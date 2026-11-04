import type { ReactNode } from 'react';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  links: ProjectLink[];
  col: string;
  icon: ReactNode;
}

const backendIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const shieldIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const mobileIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

export const PROJECTS: Project[] = [
  {
    title: 'Processamento de Dados Assíncrono',
    desc: 'Sistema backend em C#/.NET com arquitetura DDD em 5 camadas, Dapper para persistência rápida e RabbitMQ para comunicação entre serviços.',
    tags: ['C# .NET', 'DDD', 'RabbitMQ', 'Dapper'],
    links: [
      { label: 'Backend', url: 'https://github.com/MiguelStael/Backend-DesafioTecnicoBackend-Gerenciamento-de-Assinaturas.' },
      { label: 'Frontend', url: 'https://github.com/MiguelStael/-Frontend-DesafioTecnicoFrontend-Gerencimento-de-Assinaturas.' },
    ],
    col: 'col-8',
    icon: backendIcon,
  },
  {
    title: 'Biomob - Segurança Digital',
    desc: 'API Java/Spring Boot para prevenção de vulnerabilidades e validação de acessos, integrada a apps Web e Mobile.',
    tags: ['Java', 'Spring Boot', 'API RESTful'],
    links: [],
    col: 'col-4',
    icon: shieldIcon,
  },
  {
    title: 'App com React Native',
    desc: 'Aplicativo mobile em React Native e TypeScript, com integração de dados e boa experiência de uso.',
    tags: ['React Native', 'TypeScript'],
    links: [{ label: 'GitHub', url: 'https://github.com/MiguelStael/TrabalhoIndividual-ReactNative' }],
    col: 'col-4',
    icon: mobileIcon,
  },
];