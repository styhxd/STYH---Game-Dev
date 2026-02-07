import React from 'react';
import { GamepadIcon } from './Icons';

const Games: React.FC = () => {
  return (
    <div className="w-full bg-black">
      
      {/* --- VITAL RUSH SECTION --- */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Image & Overlay - FIXED: Seamless blending for wide screens */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1i4NAyU7cvCCdQP-P0PPFlYWiOxtzu2lG" 
            alt="Vital Rush Background" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Side Gradients to remove "Horizontal Limit" effect */}
          <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          {/* Main Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-10"></div>
        </div>

        {/* EXPANDED CONTAINER: max-w-[1800px] instead of 7xl */}
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <div className="inline-flex items-center self-start gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-red-500 font-mono text-[10px] uppercase tracking-widest font-bold">Já Disponível • Android</span>
              </div>
              
              {/* Gradient Text Restored */}
              <h1 className="font-display font-black text-6xl md:text-8xl italic uppercase text-white mb-6 leading-[0.85] tracking-tighter drop-shadow-2xl">
                VITAL <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 pr-4 drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">
                  RUSH
                </span>
              </h1>
              
              <p className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-lg leading-relaxed drop-shadow-md">
                Você é a última linha de defesa. No controle de <span className="text-white font-bold">Vital</span>, lute dentro do organismo humano contra invasões virais implacáveis.
              </p>

              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-start gap-4 p-5 border border-white/10 bg-black/40 backdrop-blur-md rounded-sm">
                   <div className="text-red-500 mt-1">
                      <GamepadIcon className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-white font-bold uppercase text-sm mb-1">Gameplay Frenético</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">Ação bullet-hell com mecânicas de upgrade e níveis de risco crescentes. Desafie seus reflexos.</p>
                   </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <a href="#" className="cyber-button px-8 py-4 bg-red-600 text-white font-display font-black uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all text-sm md:text-base shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)]">
                  Baixar Agora
                </a>
                <span className="flex items-center text-xs text-gray-400 font-mono uppercase tracking-wide border-l border-white/20 pl-6 h-8">
                  Google Play Store
                </span>
              </div>
            </div>

            {/* Visuals / Character Art */}
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end">
               
               {/* Orbit System Container */}
               <div className="relative w-full max-w-[600px] aspect-square">
                 {/* Orbit Track 1 (Larger, Clockwise) */}
                 <div className="absolute inset-0 w-full h-full animate-spin-slower pointer-events-none z-20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 lg:w-32 lg:h-32">
                      <img 
                        src="https://lh3.googleusercontent.com/d/187XZfpHZ1eTC50lflWK_wD6z20AFLUUt" 
                        alt="Inimigo Virus 1" 
                        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,255,0,0.4)] animate-spin-reverse-slower"
                      />
                    </div>
                 </div>

                 {/* Orbit Track 2 (Smaller, Counter-Clockwise) */}
                 <div className="absolute inset-[15%] w-[70%] h-[70%] animate-spin-reverse-slow pointer-events-none z-0 opacity-80">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 lg:w-24 lg:h-24">
                      <img 
                        src="https://lh3.googleusercontent.com/d/187XZfpHZ1eTC50lflWK_wD6z20AFLUUt" 
                        alt="Inimigo Virus 2" 
                        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,255,0,0.4)] animate-spin-slow"
                      />
                    </div>
                 </div>

                 {/* Vital (Protagonist) - Center */}
                 <div className="absolute inset-0 z-10 animate-float flex justify-center items-center">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1_8HXUSoXuVXtjb33hb_uRZ1hvOn7VItc" 
                      alt="Vital Protagonista" 
                      className="h-[80%] w-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                    />
                 </div>
                 
                 {/* HUD Elements decoration */}
                 <div className="absolute -bottom-8 -right-4 bg-black/80 backdrop-blur border border-red-500/30 p-3 hidden md:block z-30 shadow-lg">
                    <div className="flex justify-between items-center mb-1 gap-4">
                      <span className="font-mono text-[10px] text-white uppercase tracking-widest">Shield</span>
                      <span className="font-mono text-[10px] text-red-500 font-bold">CRIT</span>
                    </div>
                    <div className="w-40 h-1.5 bg-gray-900"><div className="w-[85%] h-full bg-red-600 relative overflow-hidden"><div className="absolute inset-0 bg-white/20 animate-pulse"></div></div></div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- KEYA SECTION --- */}
      <section className="relative min-h-[80vh] w-full flex items-center bg-deep border-b border-white/5 py-20 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-[0.03]"></div>

         {/* EXPANDED CONTAINER */}
         <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="flex flex-col items-center text-center">
              
              <div className="mb-8">
                <span className="font-mono text-xs text-purple-400 uppercase tracking-[0.4em] border border-purple-500/30 px-4 py-2 bg-purple-900/10 rounded-sm backdrop-blur-sm">
                   Em Desenvolvimento
                </span>
              </div>

              <h2 className="font-display font-black text-7xl md:text-[10rem] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-800 mb-8 tracking-tighter opacity-90 leading-none">
                KEYA
              </h2>

              <p className="max-w-2xl text-gray-400 text-lg md:text-2xl font-serif italic mb-12 leading-relaxed">
                "Quando o ritmo da terra encontra a fúria dos espíritos."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
                 <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                    <h3 className="text-purple-400 font-display font-bold uppercase mb-3 text-lg group-hover:text-purple-300">Ritmo</h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400">Combate sincronizado com trilha sonora autoral que reage às suas ações.</p>
                 </div>
                 <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                    <h3 className="text-brand-secondary font-display font-bold uppercase mb-3 text-lg group-hover:text-blue-300">Espíritos</h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400">Mitologia indígena reinterpretada em pixel art de alta fidelidade.</p>
                 </div>
                 <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                    <h3 className="text-white font-display font-bold uppercase mb-3 text-lg">Luta</h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400">Mecânicas precisas de beat 'em up com profundidade de combos.</p>
                 </div>
              </div>

              <div className="mt-20 flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
                 <div className="h-px w-12 bg-white/20"></div>
                 <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">Project Status: Pre-Alpha • Concept Art Phase</p>
                 <div className="h-px w-12 bg-white/20"></div>
              </div>

            </div>
         </div>
      </section>

    </div>
  );
};

export default Games;