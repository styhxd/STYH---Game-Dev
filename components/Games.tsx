import React from 'react';
import { GamepadIcon } from './Icons';

const Games: React.FC = () => {
  return (
    <div className="w-full bg-black">
      
      {/* --- VITAL RUSH SECTION --- */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden border-b border-white/10">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black opacity-60"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_rgba(255,0,60,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-red-500 font-mono text-[10px] uppercase tracking-widest font-bold">Já Disponível • Android</span>
              </div>
              
              {/* Fix: Extreme padding on the wrapper span to prevent clipping of the italic 'H' */}
              <h1 className="font-display font-black text-6xl md:text-8xl italic uppercase text-white mb-4 leading-none tracking-tighter drop-shadow-lg">
                VITAL 
                <span className="inline-block pr-16 py-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 -mr-16">
                  RUSH
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl font-light mb-8 max-w-lg leading-relaxed">
                Você é a última linha de defesa. No controle de <span className="text-white font-bold">Vital</span>, lute dentro do organismo humano contra invasões virais implacáveis.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 p-4 border border-white/10 bg-white/5 rounded-sm">
                   <div className="text-red-500 mt-1">
                      <GamepadIcon className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-white font-bold uppercase text-sm mb-1">Gameplay Frenético</h4>
                      <p className="text-gray-400 text-xs">Ação bullet-hell com mecânicas de upgrade e níveis de risco crescentes.</p>
                   </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a href="#" className="cyber-button px-8 py-4 bg-red-600 text-white font-display font-black uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all text-sm md:text-base shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                  Baixar Agora
                </a>
                <span className="flex items-center text-xs text-gray-500 font-mono uppercase tracking-wide px-4">
                  Google Play Store
                </span>
              </div>
            </div>

            {/* Visuals / Character Art */}
            <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[70vh] w-full flex items-center justify-center">
               
               {/* 
                  ORBIT SYSTEM
                  To make the virus orbit:
                  1. The container spins (animate-spin-slower).
                  2. The virus is offset from center.
                  3. The virus image spins in reverse (animate-spin-reverse-slower) to stay upright.
               */}
               
               {/* Orbit Track 1 (Larger, Clockwise) */}
               <div className="absolute w-[120%] h-[120%] animate-spin-slower pointer-events-none z-20">
                  {/* Position at top of the orbit */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48">
                    <img 
                      src="https://lh3.googleusercontent.com/d/187XZfpHZ1eTC50lflWK_wD6z20AFLUUt" 
                      alt="Inimigo Virus 1" 
                      className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,255,0,0.4)] animate-spin-reverse-slower"
                    />
                  </div>
               </div>

               {/* Orbit Track 2 (Smaller, Counter-Clockwise) */}
               <div className="absolute w-[80%] h-[80%] animate-spin-reverse-slow pointer-events-none z-0 opacity-80">
                  {/* Position at bottom of the orbit */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 lg:w-32 lg:h-32">
                    <img 
                      src="https://lh3.googleusercontent.com/d/187XZfpHZ1eTC50lflWK_wD6z20AFLUUt" 
                      alt="Inimigo Virus 2" 
                      className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,255,0,0.4)] animate-spin-slow"
                    />
                  </div>
               </div>

               {/* Vital (Protagonist) - Center */}
               <div className="relative w-full h-full z-10 animate-float flex justify-center items-center">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1_8HXUSoXuVXtjb33hb_uRZ1hvOn7VItc" 
                    alt="Vital Protagonista" 
                    className="h-full w-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  />
               </div>
               
               {/* HUD Elements decoration */}
               <div className="absolute bottom-10 left-0 bg-black/80 backdrop-blur border border-white/20 p-2 hidden md:block z-30">
                  <div className="font-mono text-[10px] text-red-500 uppercase">HP: 100%</div>
                  <div className="w-32 h-1 bg-gray-800 mt-1"><div className="w-full h-full bg-red-500"></div></div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- KEYA SECTION --- */}
      <section className="relative min-h-[80vh] w-full flex items-center bg-deep border-b border-white/5 py-20">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="flex flex-col items-center text-center">
              
              <div className="mb-6">
                <span className="font-mono text-xs text-purple-400 uppercase tracking-[0.4em] border border-purple-500/30 px-3 py-1 rounded-sm">
                   Em Desenvolvimento
                </span>
              </div>

              <h2 className="font-display font-black text-7xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mb-6 tracking-tighter opacity-90">
                KEYA
              </h2>

              <p className="max-w-2xl text-gray-400 text-lg md:text-2xl font-serif italic mb-10 leading-relaxed">
                "Quando o ritmo da terra encontra a fúria dos espíritos."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                 <div className="p-6 border border-white/5 bg-white/[0.02]">
                    <h3 className="text-purple-400 font-display font-bold uppercase mb-2">Ritmo</h3>
                    <p className="text-gray-500 text-sm">Combate sincronizado com trilha sonora autoral.</p>
                 </div>
                 <div className="p-6 border border-white/5 bg-white/[0.02]">
                    <h3 className="text-brand-secondary font-display font-bold uppercase mb-2">Espíritos</h3>
                    <p className="text-gray-500 text-sm">Mitologia indígena reinterpretada em pixel art.</p>
                 </div>
                 <div className="p-6 border border-white/5 bg-white/[0.02]">
                    <h3 className="text-white font-display font-bold uppercase mb-2">Luta</h3>
                    <p className="text-gray-500 text-sm">Mecânicas precisas de beat 'em up.</p>
                 </div>
              </div>

              <div className="mt-16 p-8 border border-dashed border-white/10 w-full max-w-lg">
                 <p className="text-gray-600 font-mono text-xs uppercase">Project Status: Pre-Alpha • Concept Art Phase</p>
              </div>

            </div>
         </div>
      </section>

    </div>
  );
};

export default Games;