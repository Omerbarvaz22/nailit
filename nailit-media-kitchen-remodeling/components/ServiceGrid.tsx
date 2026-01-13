
import React from 'react';
import { Utensils, Bath, Home, Building2, Car, Trees, HardHat, ChevronRight } from 'lucide-react';
import { ServiceType } from '../types';

const services: { title: ServiceType; desc: string; icon: React.ReactNode; img: string }[] = [
  {
    title: 'Kitchen Remodeling',
    desc: 'The luxury heart of the home, reimagined.',
    icon: <Utensils className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Bathroom Remodeling',
    desc: 'Bespoke spa-like retreats and master suites.',
    icon: <Bath className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Full Home Remodeling',
    desc: 'Complete legacy transformations from studs to finish.',
    icon: <Home className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'ADU (Accessory Dwelling Units)',
    desc: 'Maximize property value with custom backyard homes.',
    icon: <Building2 className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Garage Conversions',
    desc: 'Turning underused spaces into high-end living areas.',
    icon: <Car className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Backyard & Hardscaping',
    desc: 'Luxury outdoor living designed for the PNW climate.',
    icon: <Trees className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1558904541-efa8c196b27d?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'New Construction',
    desc: 'Ground-up masterpieces built for generations.',
    icon: <HardHat className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=600'
  }
];

const ServiceGrid: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Mastery Across Every Discipline</h2>
            <p className="text-lg text-slate-600">Our marketplace connects you with specialists who don't just "do construction"—they master their craft.</p>
          </div>
          <button onClick={scrollToForm} className="mt-8 md:mt-0 text-orange-600 font-bold flex items-center hover:translate-x-2 transition-transform">
            View All Services <ChevronRight className="ml-1 w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white bg-orange-600 p-3 rounded-xl">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">{service.desc}</p>
                <button onClick={scrollToForm} className="text-slate-900 font-bold flex items-center group-hover:text-orange-600 transition-colors">
                  Start Estimate <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          <div className="lg:col-span-1 p-8 rounded-3xl bg-deep-slate text-white flex flex-col justify-center items-center text-center">
            <div className="mb-6 w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center">
                <HardHat className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Custom Project?</h3>
            <p className="text-slate-400 mb-8">We handle unique architectural requests in Seattle and Bellevue.</p>
            <button onClick={scrollToForm} className="w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-orange-600 hover:text-white transition-all">
                Speak to a Specialist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
