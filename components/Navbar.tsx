import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icons';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: Page }[] = [
    { name: 'Studio', id: 'home' },
    { name: 'Nossos Jogos', id: 'games' }, // Prioridade alta
    { name: 'Serviços', id: 'expertise' },
    { name: 'Equipe', id: 'studio' },
  ];

  const handleNav = (id: Page) => {
    setPage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled || isMobileMenuOpen 
          ? 'bg-black/95 border-white/10 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-gradient-to-b from-black/90 to-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo - Fortified */}
          <div 
            className="flex-shrink-0 flex items-center gap-4 cursor-pointer group select-none"
            onClick={() => handleNav('home')}
          >
             <div className="relative w-10 h-10 flex items-center justify-center bg-white group-hover:bg-brand-accent transition-colors duration-300 clip-path-polygon shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <span className="font-display font-black text-xl text-black">S</span>
                
                {/* Decorative corner accent */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-brand-accent group-hover:border-white transition-colors"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-brand-accent group-hover:border-white transition-colors"></div>
             </div>
             <div className="flex flex-col justify-center">
               <span className="font-display font-black text-3xl tracking-tighter text-white leading-none group-hover:text-brand-accent transition-colors drop-shadow-md">STYH</span>
             </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`relative px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 border border-transparent rounded-sm ${
                    currentPage === link.id 
                      ? 'text-white border-b-brand-accent bg-white/5' 
                      : 'text-gray-300 hover:text-white hover:border-white/20 hover:bg-black/40'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              
              <button 
                onClick={() => handleNav('contact')}
                className="ml-8 px-6 py-2.5 bg-brand-accent text-white font-bold font-display text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all cyber-button shadow-[0_0_10px_rgba(255,0,60,0.5)]"
              >
                Orçamento
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none drop-shadow-md"
            >
              {isMobileMenuOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-[60px] left-0 w-full bg-black border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-8 space-y-4 flex flex-col h-screen bg-black">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`block w-full text-left px-4 py-6 text-3xl font-black uppercase tracking-tighter border-l-4 transition-all ${
                currentPage === link.id ? 'border-brand-accent text-white bg-white/5' : 'border-transparent text-gray-500 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="mt-8 pt-8 border-t border-white/10">
            <button 
               onClick={() => handleNav('contact')}
               className="w-full py-6 bg-white text-black font-black uppercase tracking-widest text-xl cyber-button"
            >
              Iniciar Projeto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;