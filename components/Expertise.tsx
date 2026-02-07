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
      icon: <GamepadIcon className="w-10 h-10 text-white" />
    },
    {
      title: "Engenharia de Backend",
      desc: "Daniel Pinhal Filho traz a arquitetura robusta dos nossos jogos para o seu sistema corporativo ou multiplayer.",
      icon: <CodeIcon className="w-10 h-10 text-brand-secondary" />
    },
    {
      title: "Identidade Visual & UI",
      desc: "A estética do Vital Rush e Keya aplicada à sua marca. Douglas cria mundos, logotipos e interfaces imersivas.",
      icon: <BrushIcon className="w-10 h-10 text-brand-accent" />
    },
    {
      title: "Consultoria Unity/Unreal",
      desc: "Travou no código? O jogo não roda a 60fps? Nossa equipe técnica resolve gargalos de performance.",
      icon: <NetworkIcon className="w-10 h-10 text-white" />
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase mb-2">
              Tecnologia & Serviços
            </h2>
            <span className="font-mono text-brand-accent text-sm uppercase tracking-widest">
              Como aplicamos nosso know-how no seu projeto
            </span>
          </div>
          <button 
             onClick={() => setPage && setPage('contact')}
             className="px-6 py-2 border border-white/30 hover:bg-white hover:text-black transition-colors text-xs font-bold uppercase tracking-widest"
          >
             Solicitar Proposta
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, index) => (
            <div 
              key={index} 
              className="group relative p-8 border border-white/10 bg-surface hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 bg-black border border-white/10 rounded-sm">
                   {cap.icon}
                </div>
                <div>
                   <h3 className="font-display text-xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-brand-secondary transition-colors">
                     {cap.title}
                   </h3>
                   <p className="font-sans text-gray-400 text-sm leading-relaxed">
                     {cap.desc}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white/5 border-l-4 border-brand-accent">
           <p className="text-gray-300 italic font-serif text-lg">
             "Não somos apenas teóricos. Usamos diariamente as ferramentas que oferecemos aos nossos clientes para criar nossos próprios jogos de sucesso."
           </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;