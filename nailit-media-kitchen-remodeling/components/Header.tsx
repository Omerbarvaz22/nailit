
import React from 'react';
import { Hammer } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Hammer className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              NailIt<span className="text-orange-600">Media</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#advantage" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Advantages</a>
            <a href="#process" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">The Process</a>
            <button 
              onClick={scrollToForm}
              className="bg-deep-slate text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800 transition-all shadow-lg"
            >
              Get My Estimate
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
