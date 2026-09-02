import React, { useState, useEffect, useRef } from 'react';
import { GamepadIcon } from './Icons';

const Games: React.FC = () => {
  const [hp, setHp] = useState(100);
  const [isDead, setIsDead] = useState(false);
  const [points, setPoints] = useState(0);
  const [onda, setOnda] = useState(1);
  const charRef = useRef<HTMLImageElement>(null);
  const virusRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (isDead) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const checkCollision = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      if (charRef.current) {
        const charRect = charRef.current.getBoundingClientRect();
        const charCenterX = charRect.left + charRect.width / 2;
        const charCenterY = charRect.top + charRect.height / 2;

        let isColliding = false;

        virusRefs.current.forEach(virus => {
          if (virus) {
            const virusRect = virus.getBoundingClientRect();
            const virusCenterX = virusRect.left + virusRect.width / 2;
            const virusCenterY = virusRect.top + virusRect.height / 2;

            const dist = Math.hypot(charCenterX - virusCenterX, charCenterY - virusCenterY);
            // Relaxed collision threshold so it hits the edges
            if (dist < (charRect.width / 2 + virusRect.width / 2) * 0.7) {
              isColliding = true;
            }
          }
        });

        if (isColliding) {
          setHp(prev => {
            const next = prev - (1 * (deltaTime / 1000)); // Lose 1 HP per second of overlap
            if (next <= 0) {
              setIsDead(true);
              return 0;
            }
            return next;
          });
        }
        
        // Add points
        setPoints(prev => prev + (deltaTime / 1000) * (Math.random() * 2 + 2));
      }
      animationFrameId = requestAnimationFrame(checkCollision);
    };

    animationFrameId = requestAnimationFrame(checkCollision);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDead]);

  return (
    <div className="w-full bg-black">
      
      {/* --- VITAL RUSH SECTION --- */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1i4NAyU7cvCCdQP-P0PPFlYWiOxtzu2lG" 
            alt="Vital Rush Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-10"></div>
        </div>

        {/* EXPANDED CONTAINER */}
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <h1 className="font-display font-black text-6xl md:text-8xl italic uppercase text-white mb-12 leading-[0.85] tracking-tighter drop-shadow-2xl">
                VITAL <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 pr-4 drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]">
                  RUSH
                </span>
              </h1>
              
              <p className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-lg leading-relaxed drop-shadow-md relative z-10">
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

              <div className="flex flex-wrap items-center gap-6 relative z-50">
                <a href="https://vital-rush.vercel.app/" target="_blank" rel="noopener noreferrer" className="cyber-button px-8 py-4 bg-red-600 text-white font-display font-black uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all text-sm md:text-base shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] flex items-center gap-3 cursor-pointer">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  Testar Beta Online
                </a>
                <div className="flex flex-col border-l border-white/20 pl-6 justify-center py-1">
                  <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-0.5">Lançamento em breve</span>
                  <span className="text-xs text-gray-300 font-display font-bold uppercase tracking-wide flex items-center gap-2">
                    Google Play Store
                  </span>
                </div>
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
                        ref={(el) => virusRefs.current[0] = el}
                        src="https://lh3.googleusercontent.com/d/187XZfpHZ1eTC50lflWK_wD6z20AFLUUt" 
                        alt="Inimigo Virus 1" 
                        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,255,0,0.4)] animate-spin-reverse-slower pointer-events-auto cursor-crosshair hover:scale-110 transition-transform"
                      />
                    </div>
                 </div>

                 {/* Orbit Track 2 (Smaller, Counter-Clockwise) */}
                 <div className="absolute inset-[25%] w-[50%] h-[50%] animate-spin-reverse-slow pointer-events-none z-0 opacity-80">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 lg:w-24 lg:h-24">
                      <img 
                        ref={(el) => virusRefs.current[1] = el}
                        src="https://lh3.googleusercontent.com/d/187XZfpHZ1eTC50lflWK_wD6z20AFLUUt" 
                        alt="Inimigo Virus 2" 
                        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,255,0,0.4)] animate-spin-slow pointer-events-auto cursor-crosshair hover:scale-110 transition-transform"
                      />
                    </div>
                 </div>

                 {/* Vital (Protagonist) - Center */}
                 <div className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none">
                    <img 
                      ref={charRef}
                      src="https://lh3.googleusercontent.com/d/1_8HXUSoXuVXtjb33hb_uRZ1hvOn7VItc" 
                      alt="Vital Protagonista" 
                      className={`h-[80%] w-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] ${isDead ? 'opacity-30' : 'animate-float'}`}
                    />
                    
                    {/* DEATH SCREEN EASTER EGG OVERLAY */}
                    {isDead && (
                      <div className="absolute inset-0 z-50 flex items-center justify-center p-4 pointer-events-auto">
                        <div className="w-full max-w-[320px] bg-[#0a0a0a] border border-red-900/50 p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                          {/* Glitch/Static noise overlay */}
                          <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
                          <div className="absolute inset-0 bg-red-600/10 animate-pulse pointer-events-none"></div>
                          <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-bounce pointer-events-none opacity-50"></div>
                          
                          <h3 className="font-display font-black text-4xl text-center text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] leading-none mb-8 tracking-wider animate-pulse">
                            PACIENTE<br/>PERDIDO
                          </h3>
                          
                          <div className="flex justify-between w-full border-t border-red-900/50 pt-4 mb-8 relative z-10">
                            <div>
                              <span className="text-red-900/80 text-[10px] font-mono tracking-widest block mb-1">PONTOS</span>
                              <span className="text-white font-display font-bold text-2xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{Math.floor(points)}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-red-900/80 text-[10px] font-mono tracking-widest block mb-1">ONDA</span>
                              <span className="text-white font-display font-bold text-2xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{onda}</span>
                            </div>
                          </div>
                          
                          <span className="text-red-900/60 text-[10px] font-mono tracking-widest uppercase mb-4 relative z-10">
                            STATUS: TERMINADO
                          </span>
                          
                          <button 
                            onClick={() => { setHp(100); setIsDead(false); setOnda(prev => prev + 1); }}
                            className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-display font-bold uppercase tracking-widest text-xs transition-colors relative z-10 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] cursor-pointer"
                            style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
                          >
                            Próximo Paciente
                          </button>
                        </div>
                      </div>
                    )}
                 </div>
                 
                 {/* HUD Elements decoration (Easter Egg) */}
                 <div className="absolute -bottom-8 -right-4 bg-[#0a0a0a]/90 backdrop-blur border border-red-500/30 p-3 hidden md:flex flex-col gap-2 w-48 z-30 shadow-lg pointer-events-none">
                    <div>
                       <div className="flex justify-between items-end mb-1">
                         <span className="text-white text-[9px] font-mono font-bold tracking-widest uppercase">Integridade</span>
                         <span className="text-white/70 text-[9px] font-mono">{Math.ceil(hp)}/100</span>
                       </div>
                       <div className="w-full h-1.5 bg-black/60 border border-red-500/30 overflow-hidden">
                         <div className="h-full bg-red-500 transition-all duration-75" style={{ width: `${hp}%` }}></div>
                       </div>
                    </div>
                    <div>
                       <div className="flex justify-between items-end mb-1">
                         <span className="text-white/60 text-[8px] font-mono font-bold tracking-widest uppercase">Surto</span>
                         <span className="text-white/40 text-[8px] font-mono">0/100</span>
                       </div>
                       <div className="w-full h-1 bg-black/60 border border-white/10 overflow-hidden">
                         <div className="h-full bg-white/20" style={{ width: '0%' }}></div>
                       </div>
                    </div>
                    <div>
                       <div className="flex justify-between items-end mb-1">
                         <span className="text-white/60 text-[8px] font-mono font-bold tracking-widest uppercase">Dash</span>
                         <span className="text-white/40 text-[8px] font-mono">41/100</span>
                       </div>
                       <div className="w-full h-1 bg-black/60 border border-white/10 overflow-hidden">
                         <div className="h-full bg-white transition-all duration-75" style={{ width: '41%' }}></div>
                       </div>
                    </div>
                    <div className="flex gap-1 mt-1">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] border border-red-400"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] border border-red-400"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] border border-red-400"></div>
                    </div>
                 </div>

               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- KEYA SECTION --- */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-deep border-b border-white/5 py-20 overflow-hidden">
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
                 <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">Status do Projeto: Pré-Alpha • Fase de Arte Conceitual</p>
                 <div className="h-px w-12 bg-white/20"></div>
              </div>

            </div>
         </div>
      </section>

    </div>
  );
};

export default Games;