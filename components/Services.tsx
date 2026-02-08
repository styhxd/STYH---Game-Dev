import React from 'react';
import { GamepadIcon, NetworkIcon, BrushIcon, CodeIcon } from './Icons';

const Expertise: React.FC = () => {
  const capabilities = [
    {
      title: "Desenvolvimento Unity & Unreal",
      desc: "Programação de gameplay, física e ferramentas. Criamos games 2D e 3D otimizados para PC, Console e Mobile.",
      icon: <GamepadIcon className="w-10 h-10 text-white" />
    },
    {
      title: "Solução de Bugs & Backend",
      desc: "Seu game trava? O multiplayer não sincroniza? Daniel resolve. Arquitetura de servidores e correção de código legado.",
      icon: <CodeIcon className="w-10 h-10 text-brand-secondary" />
    },
    {
      title: "Direção de Arte & Assets",
      desc: "Concept art, UI/UX Design e Modelagem. Douglas garante que o game tenha uma identidade visual única e coesa.",
      icon: <BrushIcon className="w-10 h-10 text-brand-accent" />
    },
    {
      title: "Consultoria Técnica",
      desc: "Análise de viabilidade técnica para projetos de games. Ajudamos a definir o escopo real antes de gastar o budget.",
      icon: <NetworkIcon className="w-10 h-10 text-white" />
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-white/10 pb-6">
          <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase mb-2">
            Nossa Expertise
          </h2>
          <span className="font-mono text-brand-accent text-sm uppercase tracking-widest">
            O que entregamos
          </span>
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
      </div>
    </section>
  );
};

export default Expertise;