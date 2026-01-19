'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const LIGHT_COLORS = {
  primary: '#335e5aff',
  primaryHover: '#027260ff',
  background: '#f9f5ffff',
  backgroundAlt: '#8ea4a0ff',
  border: '#90c5bcff',
  text: '#2D2D2D',
  textMuted: '#250151ff',
  textDescription: '#690069ff'
};

const DARK_COLORS = {
  primary: '#90c5bcff',
  primaryHover: '#b8d4d0ff',
  background: '#1a1a1a',
  backgroundAlt: '#2a2a2a',
  border: '#335e5aff',
  text: '#e2e2e2',
  textMuted: '#b8b8b8',
  textDescription: '#d0d0d0'
};

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const colors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: colors.background,
        borderColor: colors.border,
        color: colors.text,
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
};

export const FloatingHeader: React.FC = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const colors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      key={theme} // Force re-render when theme changes 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'backdrop-blur-xl shadow-lg transform translate-y-0' 
          : 'backdrop-blur-sm'
      }`}
      style={{
        backgroundColor: isScrolled 
          ? `${colors.background}F0` 
          : `${colors.background}CC`,
        borderBottom: isScrolled ? `1px solid ${colors.border}` : 'none',
      } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          <div className="flex items-center">
            <a 
              href="/" 
              className={`font-bold hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}
              style={{ color: colors.text }}
            >
              Jyotil Agrawal
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-3">
            <a 
              href="#experience" 
              className="text-sm font-medium transition-all duration-300 border px-2 py-1 rounded-md hover:scale-105"
              style={{
                backgroundColor: colors.background,
                borderColor: colors.primary,
                color: colors.primary,
                transform: 'skew(-10deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.backgroundAlt;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.background;
              }}
            >
              <span style={{ transform: 'skew(10deg)', color: 'inherit', pointerEvents: 'none' }}>Experience</span>
            </a>
            <a 
              href="#projects" 
              className="text-sm font-medium transition-all duration-300 border px-2 py-1 rounded-md hover:scale-105"
              style={{
                backgroundColor: colors.background,
                borderColor: colors.primary,
                color: colors.primary,
                transform: 'skew(-10deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.backgroundAlt;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.background;
              }}
            >
              <span style={{ transform: 'skew(10deg)', color: 'inherit', pointerEvents: 'none' }}>Projects</span>
            </a>
            <a 
              href="#research" 
              className="text-sm font-medium transition-all duration-300 border px-2 py-1 rounded-md hover:scale-105"
              style={{
                backgroundColor: colors.background,
                borderColor: colors.primary,
                color: colors.primary,
                transform: 'skew(-10deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.backgroundAlt;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.background;
              }}
            >
              <span style={{ transform: 'skew(10deg)', color: 'inherit', pointerEvents: 'none' }}>Research</span>
            </a>
            <a 
              href="#volunteering" 
              className="text-sm font-medium transition-all duration-300 border px-2 py-1 rounded-md hover:scale-105"
              style={{
                backgroundColor: colors.background,
                borderColor: colors.primary,
                color: colors.primary,
                transform: 'skew(-10deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.backgroundAlt;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.background;
              }}
            >
              <span style={{ transform: 'skew(10deg)', color: 'inherit', pointerEvents: 'none' }}>Leadership</span>
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium transition-all duration-300 border px-2 py-1 rounded-md hover:scale-105"
              style={{
                backgroundColor: colors.background,
                borderColor: colors.primary,
                color: colors.primary,
                transform: 'skew(-10deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.backgroundAlt;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.background;
              }}
            >
              <span style={{ transform: 'skew(10deg)', color: 'inherit', pointerEvents: 'none' }}>Contact</span>
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggleButton />
            <a
              href="https://github.com/Jaycoder7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline hover:underline-offset-4 transition-colors hidden sm:block"
              style={{ color: colors.text }}
            >
              GitHub
            </a>
            <a
              href="/Resume_Print.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border transition-all duration-300 flex items-center justify-center font-medium text-sm h-8 px-3 text-white rounded-md group hover:scale-105"
              style={{
                backgroundColor: colors.primary,
                borderColor: colors.primary,
                transform: 'skew(-15deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.primaryHover;
                e.currentTarget.style.transform = 'skew(-15deg) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.primary;
                e.currentTarget.style.transform = 'skew(-15deg) scale(1)';
              }}
            >
              <span 
                style={{ 
                  transform: 'skew(15deg)', 
                  color: 'inherit',
                  pointerEvents: 'none'
                }}
              >
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};