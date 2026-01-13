
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-orange-100/50 border border-orange-200 px-4 py-2 rounded-full mb-8">
              <ShieldCheck className="w-5 h-5 text-orange-600" />
              <span className="text-orange-800 font-bold text-xs uppercase tracking-[0.2em]">PNW Premium Construction Network</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-slate-900 leading-[1.05] mb-8">
              Build Your <span className="text-orange-600">Legacy.</span> <br/>Protect Your Investment.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From luxury kitchen remodels to custom New Construction, NailIt-Media connects you with the top 5% of vetted contractors in Seattle & Bellevue. Professionalism guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToForm}
                className="bg-deep-slate text-white px-10 py-6 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all shadow-2xl flex items-center justify-center group"
              >
                Start Your Project Estimate
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-600/10 rounded-[2rem] blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury PNW Home Construction" 
              className="relative rounded-[2rem] shadow-2xl w-full h-[600px] object-cover border-8 border-white"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-600 p-3 rounded-lg text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold">$250 Protection Plan</p>
                  <p className="text-slate-500 text-sm">Included with every project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
