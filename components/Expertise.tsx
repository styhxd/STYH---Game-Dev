import React from 'react';
import { GamepadIcon, NetworkIcon, BrushIcon, CodeIcon } from './Icons';
import { Page } from '../App';

interface ExpertiseProps {
  setPage?: (page: Page) => void;
}

const Expertise: React.FC<ExpertiseProps> = ({ setPage }) => {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-black flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center">
          <span className="font-mono text-[10px] sm:text-xs text-brand-accent uppercase tracking-[0.3em] mb-10 block font-bold">
            Status Atual
          </span>
          
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase leading-[1.1] tracking-tight mb-12">
            100% focados nas <br className="hidden sm:block" />
            <span className="text-gray-600">nossas próprias IPs.</span>
          </h2>
          
          <div className="space-y-8 font-sans text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
            <p>
              Neste momento, todo o nosso suor, código e direção de arte estão dedicados exclusivamente ao desenvolvimento do <strong className="text-white">Vital Rush</strong> e dos nossos projetos internos.
            </p>
            <p className="text-gray-500">
              Acreditamos em fazer poucas coisas, mas fazê-las de forma excepcional. Optamos por pausar serviços de agência e co-desenvolvimento para construir, com calma e precisão, os universos que nós mesmos queremos jogar.
            </p>
          </div>

          <div className="mt-24 pt-10 border-t border-white/5 max-w-xs mx-auto">
            <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest block mb-5">
              Serviços Externos / B2B
            </span>
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Pausado no momento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;