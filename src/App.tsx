import { useState, useEffect } from 'react';
import AccessibilityMenu from './components/AccessibilityMenu';
import Section from './components/Section';
import { useScrollSpy } from './hooks/useScrollSpy';
import { PROJECTS } from './data/projects';
import { CERTIFICATES, type Certificate } from './data/certificates';
import perfilImg from './assets/Eu.jpeg';

type CategoryFilter = 'Todos' | Certificate['category'];

function App() {
  const scrolled = useScrollSpy(40);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Todos');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const categories: CategoryFilter[] = [
    'Todos',
    'Tecnologia & IA',
    'Dados & BI',
    'Liderança & Negócios',
    'Soft Skills',
  ];

  const filteredCertificates = activeCategory === 'Todos'
    ? CERTIFICATES
    : CERTIFICATES.filter((cert) => cert.category === activeCategory);

  return (
    <div className="app-wrapper">
      <header className={`header-nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container header-content">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="brand">
            <span className="brand-dot" />
            <span>Miguel Stael</span>
          </a>

          <nav className="nav-menu">
            <a href="#projetos" onClick={(e) => { e.preventDefault(); scrollTo('projetos'); }} className="nav-item">
              Projetos
            </a>
            <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollTo('sobre'); }} className="nav-item">
              Sobre
            </a>
            <a href="#certificados" onClick={(e) => { e.preventDefault(); scrollTo('certificados'); }} className="nav-item">
              Formação &amp; Certificados
            </a>
            <a href="#contato" onClick={(e) => { e.preventDefault(); scrollTo('contato'); }} className="nav-item">
              Contato
            </a>
            <a
              href="/Miguel_Stael_CV.pdf"
              download
              className="btn btn-outline"
              style={{ padding: '6px 14px', fontSize: '0.8rem' }}
            >
              Baixar CV
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="container hero-grid reveal">
            <div>
              <div className="status-tag">
                <span className="status-dot" />
                <span>Disponível para novos projetos</span>
              </div>
              <h1 className="hero-title">
                Desenvolvedor <span>Backend &amp; Full Stack</span>
              </h1>
              <p className="hero-text">
                Atuação em C# (.NET Core) e Java (Spring Boot), com experiência em microsserviços, mensageria com RabbitMQ, arquitetura DDD e persistência com Dapper em SQL Server, PostgreSQL e MySQL. No frontend e mobile, desenvolvo com React, TypeScript e React Native.
              </p>
              <div className="hero-meta">
                <span>📍 Cordeiro - RJ</span>
                <span>📞 (22) 98136-2226</span>
              </div>
              <div className="hero-ctas">
                <button onClick={() => scrollTo('contato')} className="btn btn-accent">
                  Entrar em contato
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <button onClick={() => scrollTo('projetos')} className="btn btn-outline">
                  Ver projetos
                </button>
                <button onClick={() => scrollTo('certificados')} className="btn btn-outline">
                  Ver certificados ({CERTIFICATES.length})
                </button>
              </div>
            </div>

            <div className="photo-frame">
              <div className="photo-backdrop" />
              <img src={perfilImg} alt="Miguel Stael" className="photo-img" />
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <Section id="projetos" num="01" label="Portfólio" title="Projetos em Destaque">
          <div className="projects-grid">
            {PROJECTS.map((project, index) => (
              <article key={index} className="project-card reveal">
                <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                  {project.icon}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}

            <article
              className="project-card reveal"
              style={{
                borderColor: 'var(--border-strong)',
                background: 'var(--accent-soft)',
                justifyContent: 'center',
              }}
            >
              <h3 className="project-title">Currículo Técnico Completo</h3>
              <p className="project-desc">
                Acesse o documento detalhado com histórico acadêmico, stack completa, métricas de formação e links de projetos.
              </p>
              <div>
                <a
                  href="/Miguel_Stael_CV.pdf"
                  download
                  className="btn btn-accent"
                  style={{ width: 'fit-content' }}
                >
                  Baixar Currículo (PDF)
                </a>
              </div>
            </article>
          </div>
        </Section>

        {/* ABOUT SECTION */}
        <Section id="sobre" num="02" label="Trajetória" title="Sobre Mim">
          <div className="about-grid">
            <div className="about-bio reveal">
              <p>
                Sou Miguel Agostinho Stael Vianna, desenvolvedor Backend &amp; Full Stack com base técnica sólida em C# (.NET Core) e Java (Spring Boot), além de aplicações client-side com React, TypeScript e React Native.
              </p>
              <p>
                Construo microsserviços e APIs RESTful aplicando princípios de Domain-Driven Design (DDD) e arquitetura em camadas. Tenho experiência com mensageria assíncrona orientada a eventos via RabbitMQ, além de persistência de alta performance com Dapper em bancos relacionais (SQL Server, PostgreSQL, MySQL).
              </p>
              <p>
                Formado pela <strong>Residência Serratec (790h)</strong>, com média técnica final de <strong>95,5/100</strong> e pontuação máxima de <strong>100/100 em Inglês Técnico</strong>. Cursando Análise e Desenvolvimento de Sistemas na UniCesumar (3º período).
              </p>
            </div>

            <div className="reveal">
              <div className="tech-matrix">
                <div className="tech-group">
                  <h4>Backend &amp; Arquitetura</h4>
                  <ul>
                    <li>C# / .NET Core</li>
                    <li>Java (17/21) / Spring Boot</li>
                    <li>APIs RESTful &amp; Microsserviços</li>
                    <li>Domain-Driven Design (DDD)</li>
                    <li>Clean Architecture &amp; SOLID</li>
                  </ul>
                </div>

                <div className="tech-group">
                  <h4>Persistência &amp; Mensageria</h4>
                  <ul>
                    <li>SQL Server, PostgreSQL, MySQL</li>
                    <li>Dapper (consultas otimizadas)</li>
                    <li>RabbitMQ (eventos assíncronos)</li>
                    <li>Modelagem Relacional</li>
                    <li>Migrations &amp; Indexação</li>
                  </ul>
                </div>

                <div className="tech-group">
                  <h4>Frontend &amp; Mobile</h4>
                  <ul>
                    <li>JavaScript (ES6+) &amp; TypeScript</li>
                    <li>React &amp; Next.js</li>
                    <li>React Native (Mobile)</li>
                    <li>Axios &amp; consumo de APIs</li>
                    <li>HTML5 semântico &amp; CSS3 moderno</li>
                  </ul>
                </div>

                <div className="tech-group">
                  <h4>DevOps, Qualidade &amp; IA</h4>
                  <ul>
                    <li>Git, GitHub, Conventional Commits</li>
                    <li>Docker &amp; Containers</li>
                    <li>Swagger / OpenAPI &amp; Postman</li>
                    <li>Clean Code &amp; Testes</li>
                    <li>Prompt Engineering (Gemini / Claude)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* EDUCATION & CERTIFICATIONS SECTION */}
        <Section id="certificados" num="03" label="Educação &amp; Credenciais" title="Formação e Certificações">
          {/* Highlight Cards */}
          <div className="reveal">
            <div className="edu-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 className="edu-title">Residência em TIC/Software — Desenvolvedor Full Stack</h3>
                  <p className="edu-subtitle">Serratec / Firjan SENAI — 790 horas (560h Formação Técnica + 230h Competências Complementares)</p>
                </div>
                <a
                  href="/certificates/residencia-serratec-fullstack.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ fontSize: '0.8rem', padding: '6px 14px' }}
                >
                  Visualizar Certificado Oficial (PDF) ↗
                </a>
              </div>
              <p className="edu-detail">
                Formação intensiva em engenharia de software abrangendo C# (.NET Core), Java (Spring Boot), React, TypeScript, modelagem relacional, microsserviços, RabbitMQ e metodologias ágeis (Scrum/Kanban).
              </p>
              <span className="edu-badge">
                ★ Desempenho de Destaque: média técnica 95,5/100 • pontuação máxima 100/100 em Inglês Técnico
              </span>
            </div>

            <div className="edu-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 className="edu-title">Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
                  <p className="edu-subtitle">UniCesumar — 3º período (2025 - Previsão de Conclusão: Dez/2027)</p>
                </div>
                <a
                  href="/certificates/unicesumar-ads-carteirinha.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ fontSize: '0.8rem', padding: '6px 14px' }}
                >
                  Visualizar Registro Acadêmico (PDF) ↗
                </a>
              </div>
              <p className="edu-detail">
                Graduação superior com ênfase em arquitetura de software, estruturas de dados, algoritmos, modelagem de banco de dados, governança de TI e sistemas distribuídos.
              </p>
              <span className="edu-badge">
                Cursando • Matrícula Ativa
              </span>
            </div>
          </div>

          {/* Languages Row */}
          <div className="reveal" style={{ marginBottom: '2.5rem' }}>
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1.25rem' }}>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                Proficiência em Idiomas
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: 600 }}>Português</span>
                    <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>Nativo</span>
                  </div>
                  <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px' }}>
                    <div style={{ width: '100%', height: '100%', background: 'var(--accent)', borderRadius: '2px' }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: 600 }}>Inglês</span>
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>Avançado / Fluente — 100/100</span>
                  </div>
                  <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px' }}>
                    <div style={{ width: '100%', height: '100%', background: 'var(--accent)', borderRadius: '2px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Filters */}
          <div className="reveal">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600 }}>
                Certificados ({filteredCertificates.length})
              </h3>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                Todos os PDFs disponíveis para consulta direta
              </span>
            </div>

            <div className="cert-filter-bar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cert-filter-chip ${activeCategory === cat ? 'is-active' : ''}`}
                >
                  {cat}
                  {cat !== 'Todos' && (
                    <span style={{ marginLeft: '6px', opacity: 0.7 }}>
                      ({CERTIFICATES.filter((c) => c.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Certificates Grid */}
            <div className="certs-grid">
              {filteredCertificates.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-item"
                  title={`Abrir certificado: ${cert.title}`}
                >
                  <div>
                    <div className="cert-badge-row">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-category-tag">{cert.category}</span>
                      {cert.workload && (
                        <span className="cert-category-tag" style={{ color: 'var(--accent)' }}>
                          {cert.workload}
                        </span>
                      )}
                    </div>
                    <h4 className="cert-name">{cert.title}</h4>
                    <p className="cert-desc">{cert.description}</p>
                    {cert.highlight && (
                      <p style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                        ★ {cert.highlight}
                      </p>
                    )}
                  </div>
                  <div className="cert-meta-row">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                      PDF Oficial
                    </span>
                    <span className="cert-action">
                      Visualizar PDF ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* CONTACT SECTION */}
        <section id="contato" className="contact-section reveal">
          <div className="container">
            <span
              className="section-label"
              style={{
                display: 'block',
                fontSize: '0.8rem',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Conectar
            </span>
            <h2 className="contact-title">Fale comigo</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 2.5rem', fontSize: '1rem' }}>
              Disponível para oportunidades como desenvolvedor Backend e Full Stack, novos projetos e colaborações técnicas.
            </p>

            <div className="contact-links">
              <a
                href="https://wa.me/5522981362226"
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent"
              >
                WhatsApp: (22) 98136-2226
              </a>
              <a
                href="mailto:miguel.stael@gmail.com"
                className="btn btn-outline"
              >
                miguel.stael@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/miguel-stael"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/MiguelStael"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
            </div>

            <div style={{ marginTop: '3.5rem' }}>
              <a
                href="/Miguel_Stael_CV.pdf"
                download
                className="btn btn-outline"
                style={{ padding: '14px 28px', fontSize: '0.9rem', borderColor: 'var(--accent)', color: 'var(--accent)' }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ marginRight: '6px' }}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Currículo Completo (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Miguel Stael — Desenvolvedor Backend &amp; Full Stack</p>
        </div>
      </footer>

      <AccessibilityMenu />
    </div>
  );
}

export default App;
