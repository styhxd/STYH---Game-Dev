import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Games from './components/Games';
import About from './components/About';
import Contact from './components/Contact';
import HoldingPortal from './components/HoldingPortal';

// Define available pages
export type Page = 'home' | 'games' | 'expertise' | 'studio' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero setPage={setCurrentPage} />;
      case 'games':
        return <Games />;
      case 'expertise':
        return <Expertise setPage={setCurrentPage} />;
      case 'studio':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setPage={setCurrentPage} />;
    }
  };

  return (
    // REMOVED 'pt-20' from main to fix black line issue. Content now starts at absolute top.
    <div className="w-full max-w-[100vw] min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col overflow-x-hidden">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      {/* Main Content Area - z-index managed by components */}
      <main className="flex-grow relative z-10 w-full">
        {renderPage()}
      </main>

      <footer className="py-8 bg-black border-t border-white/10 text-center relative z-10 mt-auto w-full">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <h2 className="font-display font-black text-2xl text-white mb-2 uppercase tracking-tighter">STYH</h2>
          <p className="text-gray-600 text-[10px] font-mono mb-2 uppercase tracking-widest">
            © {new Date().getFullYear()} STYH GAMES • Ferraz de Vasconcelos - SP
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[10px] text-gray-700 font-mono uppercase px-4">
            <span>Paulo Gabriel L.S.</span> • <span>Daniel Pinhal Filho</span> • <span>Douglas Ambrósio</span>
          </div>
        </div>
      </footer>

      <HoldingPortal />
    </div>
  );
};

export default App;