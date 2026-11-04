import { useEffect, useState } from 'react';

/**
 * Tracks whether the page has scrolled past a threshold and exposes a
 * stable boolean for styling the navigation bar.
 */
export function useScrollSpy(threshold = 50): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}