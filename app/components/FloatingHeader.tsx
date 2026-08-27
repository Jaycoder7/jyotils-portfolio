'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const links = [['Work', '#projects'], ['Experience', '#experience'], ['Research', '#research'], ['Contact', '#contact']];

export function FloatingHeader() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#top" className="brand" aria-label="Jyotil Agrawal, home"><span>J</span> Jyotil Agrawal</a>
      <nav className={`header-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}><span className="theme-icon" aria-hidden="true">{theme === 'light' ? '◐' : '☀'}</span></button>
        <a href="mailto:jyotil.yatin2006@gmail.com" className="header-cta">Let’s talk <span>↗</span></a>
        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation"><span /><span /></button>
      </div>
    </header>
  );
}
