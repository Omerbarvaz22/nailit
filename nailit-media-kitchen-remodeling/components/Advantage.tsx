
import React from 'react';
import { ShieldCheck, Scale, Gift } from 'lucide-react';

const Advantage: React.FC = () => {
  return (
    <section id="advantage" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-4">The NailIt Shield</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Built on Absolute Trust</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Construction shouldn't be a gamble. We've built the network that puts the homeowner back in control.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-10 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-slate-900 group-hover:bg-orange-600 rounded-2xl flex items-center justify-center mb-8 transition-colors">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Elite Vetted Pros</h3>
            <p className="text-slate-600 leading-relaxed">
              Every contractor in our network is rigorously audited for licensing, bonding, insurance, and historical job performance. We only work with the top 5% of PNW builders.
            </p>
          </div>
          <div className="p-10 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-slate-900 group-hover:bg-orange-600 rounded-2xl flex items-center justify-center mb-8 transition-colors">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Price Integrity</h3>
            <p className="text-slate-600 leading-relaxed">
              Our marketplace model creates healthy competition, ensuring you get transparent, fair quotes based on local Seattle/Bellevue market rates without artificial markups.
            </p>
          </div>
          <div className="p-10 rounded-[2rem] bg-orange-600 shadow-2xl shadow-orange-200 lg:scale-105">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8">
              <Gift className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">The Protection Plan</h3>
            <p className="text-orange-50 leading-relaxed mb-6">
              Homeowners who sign through our platform receive a $250 Amazon Gift Card upon contract upload, plus the added layer of NailIt-Media's service intervention support.
            </p>
            <div className="pt-4 border-t border-white/20">
              <p className="text-white text-sm font-bold">Standard on every project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
