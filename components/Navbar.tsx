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
    { name: 'Nossos Games', id: 'games' }, 
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        scrolled || isMobileMenuOpen 
          ? 'bg-black/95 border-b border-white/5 backdrop-blur-xl py-2 shadow-2xl' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mx-auto">
        <div className="flex items-center justify-between min-h-[4rem]">
          
          {/* Logo Container - New Hierarchy: BIG Symbol, Small Text */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group select-none relative z-50"
            onClick={() => handleNav('home')}
          >
             {/* 
                1. SYMBOL (SVG) - CROPADO
                Usamos viewBox="100 380 240 270" para focar apenas na geometria do ícone.
             */}
             <div className="relative h-14 w-auto sm:h-20 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
                <svg viewBox="100 380 240 270" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* MAIN SYMBOL SHAPE */}
                  <path className="fill-white group-hover:fill-brand-accent transition-colors duration-300 ease-out" d="M216.909 380.083C225.191 379.208 230.69 383.707 237.582 387.68L261.471 401.491C283.623 414.186 305.872 426.73 328.027 439.424C334.24 442.984 336.331 448.789 336.672 455.584C337.024 462.568 336.896 469.664 336.914 476.66L336.95 517.705L336.919 550.596C336.899 562.923 338.85 576.832 326.637 584.548C313.803 592.657 300.389 599.929 287.352 607.705L249.752 630.153C244.464 633.318 229.926 642.821 224.606 643.968C220.683 644.145 214.691 644.726 211.397 642.874C204.95 639.248 198.424 635.258 192.079 631.463L154.729 609.033L125.387 591.396C105.276 579.299 102.92 579.755 103.051 554.768C103.129 539.9 102.987 523.633 102.976 508.712L102.964 475.419C102.967 440.761 101.041 446.458 130.437 429.306L160.89 411.369C175.362 402.854 189.774 394.211 204.233 385.677C208.294 383.28 212.29 381.155 216.909 380.083Z"/>
                  
                  {/* INNER CUTOUT 1 (Transparent/Black) */}
                  <path className="fill-black/0" d="M248.471 455.743L251.022 455.731C254.041 456.997 280.325 506.244 284.909 512.799C278.191 521.747 270.913 536.405 264.647 546.395C261.271 551.776 254.242 562.574 251.85 567.511C233.072 567.704 213.923 567.489 195.116 567.471L187.893 567.462C184.734 560.597 179.428 551.312 175.734 544.545C169.688 533.222 163.41 522.024 156.906 510.957C167.224 494.154 178.431 473.452 187.958 456.076C207.819 455.627 228.445 456.015 248.471 455.743Z"/>
                  
                  {/* SYMBOL DETAIL (Bottom Shape) */}
                  <path className="fill-white group-hover:fill-brand-accent transition-colors duration-300 ease-out" d="M193.819 485.453L246.5 485.393L246.288 537.962C228.718 537.858 211.147 537.904 193.577 538.102C193.573 521.413 193.194 501.993 193.819 485.453Z"/>
                  
                  {/* CUTOUTS (Transparent/Black) */}
                  <path className="fill-black" d="M203.751 495.739C214.53 495.753 225.309 495.835 236.087 495.986C236.216 506.421 236.063 517.224 236.035 527.685C225.454 527.892 214.604 527.854 204 527.922L203.751 495.739Z"/>
                  <path className="fill-black" d="M133.552 577.235C149.629 576.978 166.381 577.336 182.555 577.342C189.474 589.07 195.186 602.475 201.836 614.441C204.488 619.212 207.527 625.151 209.579 630.178L202.569 625.912C184.132 615.362 165.864 603.227 147.268 592.704C138.72 587.866 130.713 582.215 121.818 577.548L133.552 577.235Z"/>
                  <path className="fill-black" d="M257.914 577.497C276.607 577.412 298.915 576.981 317.463 577.73C300.869 588.046 284.143 598.149 267.289 608.036C254.915 615.698 242.13 622.505 229.817 630.229C238.762 613.761 249.906 594.292 257.914 577.497Z"/>
                  <path className="fill-black" d="M209.496 394.53L209.943 395.047C200.32 411.774 191.023 428.686 182.059 445.775L123.411 445.572L122.91 445.457L122.874 444.971C151.491 429.494 181.193 411.104 209.496 394.53Z"/>
                  <path className="fill-black" d="M230.395 395.032C235.523 398.335 243.195 402.519 248.599 405.708C263.233 414.301 277.936 422.777 292.706 431.134C298.86 434.571 314.192 442.148 318.925 445.803C312.477 446.107 303.754 445.846 297.122 445.832L258.22 445.865C251.209 431.849 242.877 418.556 235.327 404.831C233.558 401.616 231.821 398.418 230.395 395.032Z"/>
                  <path className="fill-black" d="M112.661 463.405C114.943 465.597 121.189 475.522 123.259 478.694C130.141 489.244 137.224 499.765 143.754 510.524C137.535 521.035 131.156 531.452 124.621 541.769C120.706 548.091 116.82 554.501 112.62 560.63C112.454 538.691 113.144 516.472 112.955 494.499C112.867 484.311 113.253 473.544 112.661 463.405Z"/>
                  <path className="fill-black" d="M326.323 463.861C326.82 466.29 326.583 490.721 326.581 495.486L326.968 562.864C324.016 557.108 319.237 549.525 315.861 543.802L297.098 511.803C307.287 497.232 316.031 478.642 326.323 463.861Z"/>
                  <path className="fill-black" d="M149.974 520.344C152.584 522.196 173.201 561.235 176.534 567.435L147.25 567.534L120.168 567.542C121.261 565.396 122.735 563.118 124.064 561.091C132.861 547.67 140.943 533.594 149.974 520.344Z"/>
                  <path className="fill-black" d="M196.167 577.237C213.161 577.169 230.156 577.268 247.148 577.535C242.642 583.754 231.954 605.049 227.952 612.577C225.35 617.95 222.535 623.003 219.665 628.231C216.848 621.922 194.99 580.128 194.821 577.592L196.167 577.237Z"/>
                  <path className="fill-black" d="M219.375 397.806C221.647 399.579 243.758 439.978 247.229 445.744L221.75 445.878L192.965 445.962C201.551 432.408 211.722 412.417 219.375 397.806Z"/>
                  <path className="fill-black" d="M120.049 455.692C138.456 456.227 157.597 455.883 176.101 455.934C173.008 462.924 163.583 478.594 159.447 485.952L150.398 501.987C142.647 490.727 135.207 478.594 127.735 467.118C126.141 464.67 120.761 457.431 120.049 455.692Z"/>
                  <path className="fill-black" d="M263.705 456.004C282.317 455.9 300.931 455.952 319.543 456.16C314.012 465.466 307.193 475.729 301.389 485.156C297.816 490.781 294.283 497.095 290.91 502.899C285.141 492.041 278.617 481.744 272.646 471.003C269.807 465.897 266.819 460.945 263.705 456.004Z"/>
                  <path className="fill-black" d="M290.642 521.788C294.166 525.494 315.114 561.785 318.287 567.908L291.39 567.663L263.695 567.54C272.794 552.359 281.777 537.107 290.642 521.788Z"/>
                </svg>
             </div>
             
             {/* 
                2. TEXT (HTML) - Menor e Separado 
                Adicionei drop-shadow forte para garantir legibilidade
             */}
             <div className="flex flex-col justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
               <span className="font-display font-bold text-xl sm:text-2xl tracking-tighter text-white/90 group-hover:text-white transition-colors">STYH</span>
             </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2 xl:space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`relative px-4 xl:px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 border border-transparent rounded-sm ${
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
                className="ml-4 xl:ml-8 px-6 py-2.5 bg-brand-accent text-white font-bold font-display text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all cyber-button shadow-[0_0_10px_rgba(255,0,60,0.5)] whitespace-nowrap"
              >
                Orçamento
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none drop-shadow-md border border-white/10"
            >
              {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-[60px] left-0 w-full bg-black border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-8 space-y-4 flex flex-col h-[calc(100vh-60px)] bg-black">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`block w-full text-left px-4 py-6 text-2xl sm:text-3xl font-black uppercase tracking-tighter border-l-4 transition-all ${
                currentPage === link.id ? 'border-brand-accent text-white bg-white/5' : 'border-transparent text-gray-500 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="mt-8 pt-8 border-t border-white/10">
            <button 
               onClick={() => handleNav('contact')}
               className="w-full py-6 bg-white text-black font-black uppercase tracking-widest text-lg sm:text-xl cyber-button"
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