import React from 'react';
import { Page } from '../App';

interface HeroProps {
  setPage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center bg-black overflow-hidden">
      
      {/* Background Massive Watermark - The Brand Foundation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center z-0 pointer-events-none select-none">
         <span className="font-display font-black text-[40vw] leading-none text-white/[0.03] tracking-tighter blur-sm">
           STYH
         </span>
      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px]"></div>
      </div>

      {/* Main Content - Expanded Width for Desktop */}
      <div className="relative z-20 w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-20 flex flex-col justify-center h-full">
        
        <div className="mb-4 inline-flex items-center gap-3 border-l-2 border-brand-accent pl-4">
          <span className="font-mono text-xs md:text-sm text-brand-accent uppercase tracking-[0.3em] font-bold">
            Estúdio de Games
          </span>
        </div>

        {/* The Brand Name as the Hero Title - MASSIVE & FLUID */}
        {/* FAILSAFE: Changed fixed text sizes to fluid VW units to ensure it never overflows the viewport width */}
        <h1 className="font-display font-black text-[20vw] lg:text-[14rem] tracking-tighter text-white uppercase leading-[0.8] mb-4 mix-blend-screen drop-shadow-2xl">
          STYH
          <span className="text-brand-accent">.</span>
        </h1>
        
        {/* The Philosophy */}
        <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-5xl text-gray-500 uppercase tracking-widest mb-10 pl-2 flex flex-col md:block">
          <span className="text-white">CRIAMOS</span>
          <span className="hidden md:inline mx-4 text-brand-secondary">//</span>
          <span className="text-white">PUBLICAMOS</span>
          <span className="hidden md:inline mx-4 text-brand-secondary">//</span>
          <span className="text-white">EVOLUÍMOS</span>
        </h2>
        
        <p className="font-sans text-base md:text-lg text-gray-400 mb-12 max-w-xl leading-relaxed pl-2 border-l border-white/10 ml-2">
          Desenvolvedores da nossa própria história. <br/> 
          Criadores do <strong className="text-white">Vital Rush</strong> e especialistas em Unity & Unreal. <br/>
          Seu projeto pode ser o próximo.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pl-2">
          <button 
            onClick={() => setPage('games')}
            className="group relative px-10 py-5 bg-white text-black font-display font-bold text-sm uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all duration-300 clip-path-slant min-w-[220px]"
          >
             <span className="relative z-10">Jogar Agora</span>
             <div className="absolute inset-0 bg-brand-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out -z-0"></div>
          </button>
          
          <button 
            onClick={() => setPage('expertise')}
            className="px-10 py-5 border border-white/20 text-white font-display font-bold text-sm uppercase tracking-widest hover:border-brand-secondary hover:text-brand-secondary transition-all duration-300 min-w-[220px]"
          >
            Contratar Estúdio
          </button>
        </div>
      </div>

      {/* Decorative side element */}
      <div className="absolute right-8 bottom-8 hidden lg:flex flex-col items-end gap-2 z-20">
         <div className="w-1 h-24 bg-gradient-to-b from-brand-accent to-transparent"></div>
         <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest writing-mode-vertical">
            Sistema Online • Ver 2.1
         </span>
      </div>
    </div>
  );
};

export default Hero;