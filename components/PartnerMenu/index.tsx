import React, { useState, useEffect, useRef } from 'react';
import { holdingData, partnersData } from './data';
import { PartnerConfig } from './types';

// Ícone Close incorporado para máxima portabilidade (sem dependências)
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Ícone Link Externo incorporado
const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const PartnerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const renderItem = (item: PartnerConfig) => (
    <a
      key={item.id}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 p-4 transition-all duration-300 relative border-l-2
        ${item.isMain ? 'hover:bg-white/5 border-transparent' : 'border-transparent hover:border-white hover:bg-white/5'}
      `}
    >
      <div className={`shrink-0 flex items-center justify-center rounded-lg border border-white/10 transition-colors duration-300
        ${item.isMain ? 'w-12 h-12 bg-black group-hover:border-white/50' : 'w-10 h-10 bg-[#0a0a0a] group-hover:border-white/30 p-1'}
      `}>
        <img 
          src={item.logoPath} 
          alt={item.name} 
          className={`object-contain transition-opacity duration-300
            ${item.isMain ? 'w-10 h-10 opacity-100' : 'w-full h-full opacity-60 group-hover:opacity-100'}
          `} 
        />
      </div>
      
      <div className="flex flex-col flex-1">
        <h3 className={`font-bold transition-colors flex items-center gap-2
          ${item.isMain ? 'text-white text-base group-hover:text-gray-300' : 'text-sm text-gray-300 group-hover:text-white'}
        `}>
          {item.name}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-5px] group-hover:translate-x-0 transform duration-300">
            <ExternalIcon />
          </span>
        </h3>
        <p className={`font-mono mt-0.5 max-w-[200px] truncate sm:max-w-none sm:whitespace-normal
          ${item.isMain ? 'text-xs text-gray-400' : 'text-[10px] text-gray-500 group-hover:text-gray-400'}
        `}>
          {item.description}
        </p>
      </div>
    </a>
  );

  return (
    <div className="fixed bottom-8 right-8 z-[9999] font-sans flex flex-col items-end" ref={menuRef}>
      
      {/* Menu / Popup */}
      <div 
        className={`bg-[var(--colors-surface,#050505)] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right rounded-xl
          ${isOpen ? 'w-[320px] max-w-[calc(100vw-2rem)] opacity-100 mb-6 scale-100 pointer-events-auto' : 'w-0 opacity-0 mb-0 scale-95 pointer-events-none'}
        `}
      >
        <div className="w-[320px] flex flex-col max-w-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#000000]">
            <h3 className="font-display font-bold text-[10px] tracking-widest text-white uppercase">
              Ecossistema CRIA
            </h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/40 hover:text-white transition-colors p-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-white/50"
              aria-label="Fechar"
            >
              <CloseIcon />
            </button>
          </div>
          
          {/* Main Holding Component */}
          {renderItem(holdingData)}
          
          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* Partners List */}
          <div className="flex flex-col py-2 divide-y divide-white/5 bg-[var(--colors-deep,#030303)]">
            {partnersData.map(renderItem)}
          </div>
        </div>
      </div>

      {/* Floating Buttons Container */}
      <div className="flex flex-col items-center gap-4 relative z-50">
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/5511944677759?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20STYH%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20de%20games."
          target="_blank"
          rel="noopener noreferrer"
          className={`relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full transition-all duration-500 hover:scale-110 shadow-[0_0_20px_rgba(37,211,102,0.4)] focus:outline-none ${isOpen ? 'translate-y-4 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}
          aria-label="Fale conosco no WhatsApp"
        >
          {/* Pulsing effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 [animation-duration:3s]"></div>
          
          <svg className="w-7 h-7 relative z-10" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
          </svg>
        </a>

        {/* FAB Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative flex items-center justify-center w-14 h-14 bg-black border-2 transition-all duration-500 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black bg-opacity-90 backdrop-blur-sm
            ${isOpen ? 'border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.2)]' : 'border-white/20 hover:border-white shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]'}
          `}
          aria-label="Abrir Ecossistema"
        >
          <img 
            src={holdingData.logoPath} 
            alt="CRIA PRODUTORA" 
            className={`w-8 h-8 object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isOpen ? 'rotate-180 opacity-50 scale-75' : 'rotate-0 opacity-100 scale-100 group-hover:scale-110'}
            `} 
          />
        </button>
      </div>
      
    </div>
  );
};

export default PartnerMenu;
