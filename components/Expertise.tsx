import React from 'react';
import { GamepadIcon, NetworkIcon, BrushIcon, CodeIcon } from './Icons';
import { Page } from '../App';

interface ExpertiseProps {
  setPage?: (page: Page) => void;
}

const Expertise: React.FC<ExpertiseProps> = ({ setPage }) => {
  const capabilities = [
    {
      title: "Co-Development & Porting",
      desc: "Usamos nossa engine interna para ajudar seu estúdio. Portamos jogos para Mobile e PC com otimização extrema.",
      icon: <GamepadIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
    },
    {
      title: "Engenharia de Backend",
      desc: "Daniel Pinhal Filho traz a arquitetura robusta dos nossos jogos para o seu sistema corporativo ou multiplayer.",
      icon: <CodeIcon className="w-8 h-8 md:w-10 md:h-10 text-brand-secondary" />
    },
    {
      title: "Identidade Visual & UI",
      desc: "A estética do Vital Rush e Keya aplicada à sua marca. Douglas cria mundos, logotipos e interfaces imersivas.",
      icon: <BrushIcon className="w-8 h-8 md:w-10 md:h-10 text-brand-accent" />
    },
    {
      title: "Consultoria Unity/Unreal",
      desc: "Travou no código? O jogo não roda a 60fps? Nossa equipe técnica resolve gargalos de performance.",
      icon: <NetworkIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-black relative overflow-x-hidden">
      {/* Expanded Container */}
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="max-w-full">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase mb-2 break-words leading-tight">
              Tecnologia & Serviços
            </h2>
            <span className="font-mono text-brand-accent text-xs sm:text-sm uppercase tracking-widest block">
              Como aplicamos nosso know-how no seu projeto
            </span>
          </div>
          <button 
             onClick={() => setPage && setPage('contact')}
             className="px-6 py-3 border border-white/30 hover:bg-white hover:text-black transition-colors text-xs font-bold uppercase tracking-widest whitespace-nowrap w-full md:w-auto text-center"
          >
             Solicitar Proposta
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
          {capabilities.map((cap, index) => (
            <div 
              key={index} 
              className="group relative p-6 md:p-10 border border-white/10 bg-surface hover:border-white/30 transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-8">
                <div className="flex-shrink-0 p-3 md:p-4 bg-black border border-white/10 rounded-sm">
                   {cap.icon}
                </div>
                <div className="w-full">
                   <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-brand-secondary transition-colors break-words">
                     {cap.title}
                   </h3>
                   <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed text-pretty">
                     {cap.desc}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 md:p-8 bg-white/5 border-l-4 border-brand-accent">
           <p className="text-gray-300 italic font-serif text-base md:text-lg leading-relaxed">
             "Não somos apenas teóricos. Usamos diariamente as ferramentas que oferecemos aos nossos clientes para criar nossos próprios jogos de sucesso."
           </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;