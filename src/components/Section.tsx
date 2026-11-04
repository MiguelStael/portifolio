import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  num?: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}

function Section({ id, num, label, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`section-block ${className}`}>
      <div className="container">
        <div className="section-header reveal">
          {num && <span className="section-num">{num}</span>}
          <div>
            <span
              className="section-label"
              style={{
                display: 'block',
                fontSize: '0.8rem',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.35rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {label}
            </span>
            <h2 className="section-title">{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export default Section;
