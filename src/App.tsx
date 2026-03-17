import { useEffect, useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    return () => revealElements.forEach(el => revealOnScroll.unobserve(el));
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo">Portfólio<span className="accent">.</span></div>
        <nav className={isMenuOpen ? 'mobile-nav-open' : ''}>
            <ul className="nav-links">
                <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Início</a></li>
                <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
                <li><a href="#projetos" onClick={() => setIsMenuOpen(false)}>Projetos</a></li>
                <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
            </ul>
        </nav>
        <button 
          className="mobile-menu" 
          aria-label="Menu" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
      </header>

      <main>
          {/* Home / Hero Section */}
          <section id="home" className="hero">
              <div className="hero-content fade-in">
                  <p className="greeting">Olá, meu nome é</p>
                  <h1 className="title">Seu Nome Aqui</h1>
                  <h2 className="subtitle">Eu construo coisas para a web.</h2>
                  <p className="description">
                      Sou um desenvolvedor focado em criar experiências digitais excepcionais, acessíveis e bonitas. Atualmente, estou focado em desenvolver soluções impactantes.
                  </p>
                  <div className="hero-actions">
                      <a href="#projetos" className="btn btn-primary">Ver meus projetos</a>
                      <a href="#contato" className="btn btn-secondary">Entrar em contato</a>
                  </div>
              </div>
              <div className="hero-visual fade-in">
                  <div className="glow-shape"></div>
              </div>
          </section>

          {/* About Section */}
          <section id="sobre" className="section">
              <h2 className="section-title reveal">Sobre Mim</h2>
              <div className="about-content reveal">
                  <div className="about-text">
                      <p>Olá! Meu interesse por desenvolvimento web começou em [Seu Ano] quando decidi tentar editar temas de sites personalizados. Isso me ensinou muito sobre HTML & CSS!</p>
                      <p>Hoje, meu foco principal é construir produtos acessíveis e inclusivos. Aqui estão algumas tecnologias que tenho trabalhado recentemente:</p>
                      <ul className="skills-list">
                          <li>TypeScript (ES6+)</li>
                          <li>React & Node.js</li>
                          <li>Vite & Tailwind CSS</li>
                          <li>Design Responsivo</li>
                      </ul>
                  </div>
                  <div className="about-image">
                      <div className="img-placeholder">Sua Foto</div>
                  </div>
              </div>
          </section>

          {/* Projects Section */}
          <section id="projetos" className="section">
              <h2 className="section-title reveal">Algumas coisas que criei</h2>
              <div className="projects-grid">
                  <div className="project-card reveal glassmorphism">
                      <div className="project-content">
                          <h3>Projeto Destacado 1</h3>
                          <p>Uma descrição breve sobre o seu primeiro projeto incrível. Foque no problema que você resolveu e nas ferramentas que usou.</p>
                          <div className="project-tech">
                              <span>React</span> <span>TypeScript</span> <span>CSS</span>
                          </div>
                      </div>
                  </div>
                  <div className="project-card reveal glassmorphism">
                      <div className="project-content">
                          <h3>Projeto Destacado 2</h3>
                          <p>Uma aplicação web incrível para ajudar usuários a se manterem focados. Design moderno e responsivo com temas escuros.</p>
                          <div className="project-tech">
                              <span>React</span> <span>Node</span>
                          </div>
                      </div>
                  </div>
                  <div className="project-card reveal glassmorphism">
                      <div className="project-content">
                          <h3>Projeto Destacado 3</h3>
                          <p>Um e-commerce completo com carrinho de compras, integração de pagamentos e painel de administração.</p>
                          <div className="project-tech">
                              <span>Vite</span> <span>Firebase</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Contact Section */}
          <section id="contato" className="section contact">
              <h2 className="section-title reveal">Qual o próximo passo?</h2>
              <h3 className="contact-title reveal">Entre em Contato</h3>
              <p className="contact-text reveal">
                  Minha caixa de entrada está sempre aberta. Se você tem uma pergunta ou apenas quer dizer oi, farei o meu melhor para retornar!
              </p>
              <a href="mailto:seu.email@exemplo.com" className="btn btn-primary reveal">Diga Olá</a>
          </section>
      </main>

      <footer>
          <p>Desenvolvido e Desenhado por <span className="accent">Seu Nome</span> &copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default App
