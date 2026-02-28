import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Our Story', href: '#about' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);

      // Scroll progress bar
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      // Active section detection
      const sections = ['menu', 'highlights', 'about'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollY + 120 >= el.offsetTop) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container navbar-container">
        <a href="#" className="brand" onClick={closeMenu}>
          <span className="brand-text">Ismail Samosa</span>
          <span className="brand-legacy">Since 1989</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${activeSection === id ? 'nav-link--active' : ''}`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="https://wa.me/923226923192"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <Phone size={18} style={{ marginRight: '8px' }} />
            Order on WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link, i) => {
          const id = link.href.replace('#', '');
          return (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-link ${activeSection === id ? 'mobile-link--active' : ''}`}
              style={{ animationDelay: `${i * 0.07}s` }}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          );
        })}
        <a
          href="https://wa.me/923226923192"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp mobile-btn"
          onClick={closeMenu}
        >
          <Phone size={18} style={{ marginRight: '8px' }} />
          Order on WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
