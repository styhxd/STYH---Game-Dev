import React from 'react';

const About: React.FC = () => {
  const team = [
    {
      name: "Paulo Gabriel L.S.",
      role: "Head de Desenvolvimento",
      desc: "Liderança técnica e visão de projeto. Responsável por garantir que a mecânica do jogo seja sólida e o código escalável.",
      color: "border-brand-secondary"
    },
    {
      name: "Daniel Pinhal Filho",
      role: "Sistemas & Soluções",
      desc: "O especialista em problemas complexos. Se o sistema quebra ou a lógica é impossível, é ele quem resolve. Programação de alto nível.",
      color: "border-brand-accent"
    },
    {
      name: "Douglas Ambrósio",
      role: "Direção de Arte & Design",
      desc: "Identidade visual e conceitos artísticos. Traduz ideias abstratas em assets visuais marcantes.",
      color: "border-white"
    }
  ];

  return (
    <section className="min-h-screen py-16 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="font-display text-5xl font-black text-white uppercase mb-6">
            O Núcleo <span className="text-gray-600">Operacional</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
            A STYH não é uma agência inchada. Somos uma unidade tática de desenvolvimento. Cada membro lidera um pilar fundamental da produção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className={`bg-black p-8 border-t-4 ${member.color} relative group hover:bg-white/5 transition-colors duration-300`}>
              <div className="absolute top-4 right-4 text-4xl font-display font-bold text-white/5 group-hover:text-white/10 select-none">
                0{idx + 1}
              </div>
              
              <h3 className="font-display text-2xl font-bold text-white uppercase mb-1">
                {member.name}
              </h3>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-6 block border-b border-white/10 pb-4">
                {member.role}
              </span>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                {member.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 border border-white/10 bg-black/50 text-center">
            <h4 className="font-display font-bold text-white text-xl uppercase mb-4">Filosofia STYH</h4>
            <p className="text-gray-400 max-w-3xl mx-auto italic font-serif text-lg">
              "Jogos são sistemas. Arte é comunicação. Nós unimos os dois sem intermediários desnecessários."
            </p>
        </div>

      </div>
    </section>
  );
};

export default About;