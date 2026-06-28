import { useState, useEffect } from 'react';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [highlightTitles, setHighlightTitles] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [readingGuide, setReadingGuide] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [guidePosition, setGuidePosition] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('accessibility_settings');
    const savedTheme = localStorage.getItem('theme');

    if (saved) {
      const settings = JSON.parse(saved);
      setFontSize(settings.fontSize || 1);
      setHighContrast(settings.highContrast || false);
      setGrayscale(settings.grayscale || false);
      setInvertColors(settings.invertColors || false);
      setHighlightLinks(settings.highlightLinks || false);
      setHighlightTitles(settings.highlightTitles || false);
      setDyslexiaFont(settings.dyslexiaFont || false);
    }

    if (savedTheme === 'light') {
      setLightMode(true);
    }
  }, []);

  useEffect(() => {
    const settings = {
      fontSize,
      highContrast,
      grayscale,
      invertColors,
      highlightLinks,
      highlightTitles,
      dyslexiaFont,
    };
    localStorage.setItem('accessibility_settings', JSON.stringify(settings));

    document.body.classList.toggle('high-contrast', highContrast);
    document.body.classList.toggle('grayscale-mode', grayscale);
    document.body.classList.toggle('invert-colors', invertColors);
    document.body.classList.toggle('highlight-links', highlightLinks);
    document.body.classList.toggle('highlight-titles', highlightTitles);
    document.body.classList.toggle('dyslexia-font', dyslexiaFont);
    document.body.classList.toggle('light-mode', lightMode);
    document.documentElement.style.fontSize = `${fontSize * 18}px`;

    localStorage.setItem('theme', lightMode ? 'light' : 'dark');
  }, [fontSize, highContrast, grayscale, invertColors, highlightLinks, highlightTitles, dyslexiaFont, lightMode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (readingGuide) {
        setGuidePosition(e.clientY);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [readingGuide]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const options = [
    {
      id: 'fontSize',
      label: 'Tamanho Fonte',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7V4h16v3M9 20h6M12 4v16" />
        </svg>
      ),
      action: () => setFontSize(prev => prev >= 1.4 ? 1 : prev + 0.1),
      active: fontSize > 1,
    },
    {
      id: 'highContrast',
      label: 'Alto Contraste',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2A10 10 0 0 0 12 22V2Z" fill="currentColor" />
        </svg>
      ),
      action: () => setHighContrast(!highContrast),
      active: highContrast,
    },
    {
      id: 'grayscale',
      label: 'Preto e Branco',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      action: () => setGrayscale(!grayscale),
      active: grayscale,
    },
    {
      id: 'invertColors',
      label: 'Inverter Cores',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 18.5c3.59 0 6.5-2.91 6.5-6.5s-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5z" fill="currentColor" />
        </svg>
      ),
      action: () => setInvertColors(!invertColors),
      active: invertColors,
    },
    {
      id: 'highlightLinks',
      label: 'Destacar Links',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      action: () => setHighlightLinks(!highlightLinks),
      active: highlightLinks,
    },
    {
      id: 'highlightTitles',
      label: 'Destacar Títulos',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12V4h16v8" />
          <path d="M4 16h16v4h-16z" />
          <line x1="12" y1="4" x2="12" y2="12" />
        </svg>
      ),
      action: () => setHighlightTitles(!highlightTitles),
      active: highlightTitles,
    },
    {
      id: 'dyslexiaFont',
      label: 'Fonte p/ Dislexia',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7V4h16v3M9 20h6M12 4v16" />
        </svg>
      ),
      action: () => setDyslexiaFont(!dyslexiaFont),
      active: dyslexiaFont,
    },
    {
      id: 'readingGuide',
      label: 'Guia de Leitura',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M3 12h5m8 0h5M12 3v5m0 8v5" />
        </svg>
      ),
      action: () => setReadingGuide(!readingGuide),
      active: readingGuide,
    },
    {
      id: 'theme',
      label: lightMode ? 'Modo Escuro' : 'Modo Claro',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {lightMode ? (
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          ) : (
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          )}
        </svg>
      ),
      action: () => setLightMode(!lightMode),
      active: false,
    },
  ];

  return (
    <>
      <div className={`accessibility-panel ${isOpen ? 'is-open' : ''}`}>
        <div className="panel-header">
          <h3>Acessibilidade</h3>
          <button className="close-panel" onClick={toggleOpen} aria-label="Fechar painel">✕</button>
        </div>
        <div className="panel-grid">
          {options.map((option) => (
            <button
              key={option.id}
              className={`acc-option ${option.active ? 'is-active' : ''}`}
              onClick={option.action}
            >
              <div className="option-icon">{option.icon}</div>
              <span className="option-label">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        className="fab-accessibility"
        onClick={toggleOpen}
        aria-label="Abrir menu de acessibilidade"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="5" />
          <path d="M12 13v9M7 16h10M5 21l3-5M19 21l-3-5" />
        </svg>
      </button>

      {readingGuide && (
        <div
          className="reading-guide-line"
          style={{ top: `${guidePosition}px` }}
        />
      )}
    </>
  );
};

export default AccessibilityMenu;
