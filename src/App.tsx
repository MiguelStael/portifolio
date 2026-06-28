import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import AccessibilityMenu from './components/AccessibilityMenu';
import certificadoImg from './assets/CertificadoSerratec.png';
import perfilImg from './assets/Eu.jpeg';

const PROJECTS = [
  {
    title: "Sistema de Processamento Assíncrono",
    desc: "Desenvolvimento de sistema backend utilizando arquitetura DDD em 5 camadas, persistência otimizada com Dapper e comunicação assíncrona com RabbitMQ.",
    tags: ["C# .NET", "DDD", "RabbitMQ", "Dapper"],
    links: [
      { label: "Backend", url: "https://github.com/MiguelStael/Backend-DesafioTecnicoBackend-Gerenciamento-de-Assinaturas." },
      { label: "Frontend", url: "https://github.com/MiguelStael/-Frontend-DesafioTecnicoFrontend-Gerencimento-de-Assinaturas." }
    ],
    col: "col-8",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
  },
  {
    title: "Biomob - Segurança Digital",
    desc: "Desenvolvimento de API Java/Spring Boot integrada a aplicações Web e Mobile para prevenção de vulnerabilidades e validação de acessos.",
    tags: ["Java", "Spring Boot", "API RESTful"],
    links: [],
    col: "col-4",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
  },
  {
    title: "React Native App",
    desc: "Aplicativo mobile focado em experiência do usuário e integração fluida de dados.",
    tags: ["React Native", "TypeScript"],
    links: [{ label: "GitHub", url: "https://github.com/MiguelStael/TrabalhoIndividual-ReactNative" }],
    col: "col-4",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
  }
];

function Section({ id, label, title, children, className = "" }: { id: string, label: string, title: string, children: ReactNode, className?: string }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <div className="aurora-bg">
        <div className="aurora-blob blob-1" />
        <div className="aurora-blob blob-2" />
        <div className="aurora-blob blob-3" />
      </div>

      <nav className={`nav-fixed ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo" onClick={() => scrollTo('home')}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
              <path d="M6 18V8L12 15L18 8V18" stroke="url(#g1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26 18L32 8L38 18 M28 15H36" stroke="url(#g1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 36H14C17 36 17 32 14 32H10C7 32 7 28 10 28H16" stroke="url(#g2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26 28L32 36L38 28" stroke="url(#g2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="g1" x1="6" y1="8" x2="38" y2="18" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--accent-primary)"/><stop offset="1" stopColor="var(--accent-secondary)"/>
                </linearGradient>
                <linearGradient id="g2" x1="8" y1="28" x2="38" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--accent-secondary)"/><stop offset="1" stopColor="var(--accent-tertiary)"/>
                </linearGradient>
              </defs>
            </svg>
            <span>MiguelStael.dev</span>
          </div>
          <div className="nav-links">
            {['projetos', 'sobre', 'certificados', 'contato'].map(item => (
              <span key={item} onClick={() => scrollTo(item)} className="nav-link">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            ))}
            <a href="./curriculo.pdf" download className="btn-aura btn-outline" style={{ padding: '6px 16px', fontSize: '0.75rem', marginLeft: '1rem' }}>
              Baixar CV
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="container hero-content reveal">
            <div>
              <span className="hero-badge">Aberto a novas oportunidades</span>
              <h1 className="hero-title">Desenvolvedor <span style={{ color: 'var(--accent-primary)' }}>Júnior</span> Full Stack</h1>
              <p className="hero-subtitle">
                Olá, eu sou o Miguel! Gosto de resolver problemas, aprender novas tecnologias e construir aplicações práticas do backend ao frontend.
              </p>
              <div className="hero-actions">
                <button onClick={() => scrollTo('contato')} className="btn-aura btn-primary">
                  Entrar em contato
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
                <button onClick={() => scrollTo('projetos')} className="btn-aura btn-outline">Ver projetos</button>
              </div>
            </div>
            <div className="profile-wrapper">
              <div className="profile-glow" />
              <img src={perfilImg} alt="Miguel Stael" className="profile-img" />
            </div>
          </div>
        </section>

        <Section id="projetos" label="Portfólio" title="Projetos em Destaque">
          <div className="bento-grid">
            {PROJECTS.map((project, i) => (
              <article key={i} className={`glass-card ${project.col} reveal`}>
                <div className="project-icon">{project.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{project.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto' }}>
                  <div className="tag-container">
                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {project.links.map(link => (
                      <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="nav-link" style={{ fontSize: '0.8rem' }}>
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
            
            <article className="glass-card col-8 reveal" style={{ justifyContent: 'center', background: 'linear-gradient(135deg, hsla(260, 80%, 65%, 0.05), transparent)' }}>
               <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Interessado no meu perfil?</h3>
               <p style={{ color: 'var(--text-muted)' }}>Estou pronto para contribuir com novos desafios técnicos.</p>
               <div style={{ marginTop: '2rem' }}>
                  <button onClick={() => scrollTo('contato')} className="btn-aura btn-primary">Ver Disponibilidade</button>
               </div>
            </article>
          </div>
        </Section>

        <Section id="sobre" label="Trajetória" title="Sobre Mim">
          <div className="bento-grid">
            <div className="col-6 reveal">
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Miguel Agostinho Stael Vianna, desenvolvedor Full Stack apaixonado por arquitetura e qualidade de software.
              </p>
              <p style={{ color: 'var(--text-dim)' }}>
                Cursando ADS na Unicesumar, construo soluções sólidas utilizando Java, .NET e o ecossistema React. 
                Meu foco é entregar código sustentável e valor técnico real.
              </p>
            </div>
            <div className="col-6 reveal glass-card">
              <h3 style={{ marginBottom: '1.5rem' }}>Especialidades</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', marginBottom: '1rem', textTransform: 'uppercase' }}>Backend</h4>
                  <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'grid', gap: '0.5rem' }}>
                    <li>Java / Spring Boot</li>
                    <li>C# / .NET Core</li>
                    <li>Node.js / SQL</li>
                    <li>Docker / RabbitMQ</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', marginBottom: '1rem', textTransform: 'uppercase' }}>Frontend</h4>
                  <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'grid', gap: '0.5rem' }}>
                    <li>React / Next.js</li>
                    <li>React Native</li>
                    <li>TypeScript</li>
                    <li>CSS / Tailwind</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="certificados" label="Educação" title="Formação Acadêmica" className="reveal">
          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '2.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <img src={certificadoImg} alt="Certificado" style={{ width: '100%', maxWidth: '380px', borderRadius: '16px' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Unicesumar | 3º período (2025 - 2027)</p>
                <span className="tag">Cursando</span>
              </div>
              <div>
                <h3 style={{ marginBottom: '0.5rem' }}>Formação Full Stack (Residência Serratec)</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Serratec / Senai | 400 horas (2025)</p>
                <span className="tag">Concluído</span>
              </div>
            </div>
          </div>
        </Section>

        <section id="contato" className="section-padding reveal" style={{ textAlign: 'center' }}>
          <div className="container">
            <span className="section-label">Conectar</span>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>Vamos conversar sobre o seu time?</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://wa.me/5522981362226" target="_blank" rel="noreferrer" className="btn-aura btn-primary">WhatsApp</a>
              <a href="mailto:miguel.stael@gmail.com" className="btn-aura btn-outline">E-mail</a>
              <a href="https://linkedin.com/in/miguel-stael" target="_blank" rel="noreferrer" className="btn-aura btn-outline">LinkedIn</a>
              <a href="https://github.com/MiguelStael" target="_blank" rel="noreferrer" className="btn-aura btn-outline">GitHub</a>
            </div>
            <div style={{ marginTop: '5rem' }}>
               <a href="./curriculo.pdf" download className="btn-aura btn-primary" style={{ background: 'var(--accent-secondary)', boxShadow: '0 0 20px hsla(170, 50%, 45%, 0.1)', padding: '16px 40px' }}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '8px' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                 Download Currículo Completo (PDF)
               </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container" style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--border-glass)' }}>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>© {new Date().getFullYear()} — Miguel Stael — Developer Portfolio</p>
      </footer>

      <AccessibilityMenu />
    </div>
  );
}

export default App;
