
import React from 'react';
import { ShieldCheck, Lock, Verified } from 'lucide-react';

const Protection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-600 opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="md:w-2/3 mb-10 md:mb-0 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The NailIt-Media Guarantee</h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
              We stand behind our pros because we've vetted them ourselves. If you aren't satisfied with the professionalism of your matched contractors, our dispute team is here to protect you. Plus, our signature $250 Amazon gift card bonus is the cherry on top for choosing Seattle's smartest network.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-white/80">
                <Lock className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold uppercase tracking-wider">Verified Identity</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Verified className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold uppercase tracking-wider">Bonded Protection</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <ShieldCheck className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold uppercase tracking-wider">Satisfaction Support</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center relative z-10">
            <div className="w-48 h-48 md:w-64 md:h-64 border-4 border-white/10 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 border-2 border-orange-600/30 rounded-full flex items-center justify-center">
                 <ShieldCheck className="w-20 h-20 md:w-32 md:h-32 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protection;
