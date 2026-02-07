import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen py-16 bg-deep relative flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border border-white/10 bg-black p-8 md:p-12">
          
          {/* Info Column */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display text-5xl font-black text-white uppercase mb-6 leading-none">
                Fale com<br/>a STYH.
              </h2>
              <p className="text-gray-400 text-lg mb-8 font-light">
                Sem intermediários comerciais. Você fala direto com quem vai programar e desenhar o seu projeto.
              </p>
              
              <div className="space-y-8 mt-12">
                <div className="pl-4 border-l-2 border-brand-accent">
                  <span className="block text-gray-500 uppercase tracking-widest text-[10px] mb-1">Base Física</span>
                  <span className="text-white font-bold text-lg">R. Buíque, 122<br/>Ferraz de Vasconcelos - SP</span>
                </div>
                
                <div className="pl-4 border-l-2 border-brand-secondary">
                  <span className="block text-gray-500 uppercase tracking-widest text-[10px] mb-1">Contato Urgente</span>
                  <a href="tel:+5511946307532" className="text-white hover:text-brand-accent transition-colors text-2xl font-display font-bold">
                    11 94630-7532
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-xs text-gray-600 font-mono uppercase">
              Resposta estimada: Até 24 horas úteis.
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-surface p-8 border border-white/5">
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Formulário de Projeto</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] uppercase text-gray-500 mb-1">Nome / Empresa</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-all font-sans"
                />
              </div>
              
              <div>
                <label className="block text-[10px] uppercase text-gray-500 mb-1">Email de Contato</label>
                <input 
                  type="email" 
                  className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-all font-sans"
                />
              </div>
              
              <div>
                <label className="block text-[10px] uppercase text-gray-500 mb-1">O que você precisa?</label>
                <select className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-all font-sans">
                  <option>Desenvolvimento de Jogo Completo</option>
                  <option>Consultoria Técnica (Daniel)</option>
                  <option>Design e Arte (Douglas)</option>
                  <option>Outros Serviços</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase text-gray-500 mb-1">Detalhes do Projeto</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-all font-sans resize-none"
                ></textarea>
              </div>
              
              <button className="w-full py-4 bg-white text-black font-bold font-display uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;