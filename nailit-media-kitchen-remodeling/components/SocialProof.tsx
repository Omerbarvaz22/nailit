
import React from 'react';
import { Shield, Star, MapPin } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <div className="bg-slate-50 py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center text-slate-400 font-semibold uppercase tracking-widest text-sm">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-slate-500" />
            <span>Licensed & Bonded</span>
          </div>
          <div className="flex items-center space-x-3 border-y md:border-y-0 md:border-x border-slate-200 py-6 md:py-0 px-0 md:px-12 w-full justify-center">
            <Star className="w-6 h-6 text-slate-500" />
            <span>Top-Rated PNW Pros</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-6 h-6 text-slate-500" />
            <span>Local Seattle Experts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
