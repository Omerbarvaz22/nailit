
import React from 'react';
import { Hammer, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Hammer className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-slate-900 tracking-tight">
                NailIt<span className="text-orange-600">Media</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
              Seattle's premier matching network for high-end kitchen remodeling. We connect discerning homeowners with the elite top 5% of local contractors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:border-orange-600 hover:text-orange-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:border-orange-600 hover:text-orange-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:border-orange-600 hover:text-orange-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#advantage" className="hover:text-orange-600 transition-colors">Advantages</a></li>
              <li><a href="#process" className="hover:text-orange-600 transition-colors">The Process</a></li>
              <li><a href="#lead-form" className="hover:text-orange-600 transition-colors">Get Estimate</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Become a Pro</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Gift Card Terms</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Seattle License Disclosure</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} NailIt-Media LLC. All rights reserved. Servicing Seattle, Bellevue, Kirkland, and the Greater PNW area.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
