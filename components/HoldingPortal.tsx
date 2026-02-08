import React, { useState } from 'react';
import { NetworkIcon, MusicIcon, GamepadIcon, CodeIcon, BrushIcon, CloseIcon } from './Icons';

interface SisterCompany {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  desc: string;
  url: string; 
}

const companies: SisterCompany[] = [
  { id: '1', name: 'Estúdio CRIA', icon: <MusicIcon className="w-5 h-5" />, color: 'text-yellow-400', desc: 'Produção Musical & Áudio', url: '#' },
  { id: '2', name: 'STYH', icon: <GamepadIcon className="w-5 h-5" />, color: 'text-white', desc: 'Game Dev & Tech', url: '#' },
  { id: '3', name: 'CodeNexus', icon: <CodeIcon className="w-5 h-5" />, color: 'text-green-500', desc: 'Sistemas & Backend', url: '#' },
  { id: '4', name: 'Visual Core', icon: <BrushIcon className="w-5 h-5" />, color: 'text-purple-500', desc: 'Design & Identidade', url: '#' },
];

const HoldingPortal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      
      {/* Portal Modal / HUD */}
      <div 
        className={`
          bg-surface border border-white/10 transition-all duration-300 ease-out overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)]
          ${isOpen ? 'w-72 h-auto opacity-100 mb-6 translate-y-0' : 'w-0 h-0 opacity-0 translate-y-10'}
        `}
      >
        <div className="p-0">
          <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black">
            <h3 className="font-display font-bold text-xs tracking-widest text-white uppercase">
              Parceiros
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors">
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>
          
          <div className="divide-y divide-white/5">
            {companies.map((co) => (
              <a 
                key={co.id} 
                href={co.url}
                className={`group flex items-center gap-4 p-4 hover:bg-white/5 transition-all cursor-pointer relative ${co.id === '2' ? 'bg-white/[0.02]' : ''}`}
              >
                {co.id === '2' && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white"></div>}
                
                <div className={`text-gray-400 group-hover:text-white transition-colors`}>
                  {co.icon}
                </div>
                <div>
                  <div className={`font-bold text-sm text-gray-300 group-hover:text-white transition-colors flex items-center gap-2`}>
                    {co.name}
                  </div>
                  <div className="text-[10px] text-gray-600 font-mono tracking-tight group-hover:text-gray-500 transition-colors">{co.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Trigger Button - Stronger Shadow & Contrast */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-14 h-14 bg-white text-black font-bold shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] border-2 border-transparent hover:border-white/50 transition-all active:scale-95 cyber-button ring-1 ring-black/50"
      >
        <NetworkIcon className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
      </button>
    </div>
  );
};

export default HoldingPortal;