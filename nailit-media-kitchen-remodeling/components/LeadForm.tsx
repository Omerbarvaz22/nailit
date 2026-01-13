
import React, { useState } from 'react';
import { ServiceType, ProjectTimeline, LeadFormData } from '../types';
import { CheckCircle2, Loader2, ArrowRight, ArrowLeft, Utensils, Bath, Home, Building2, Car, Trees, HardHat } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<LeadFormData>({
    service: '',
    zipCode: '',
    timeline: '',
    fullName: '',
    phone: '',
    email: '',
    isHomeowner: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services: { name: ServiceType; icon: React.ReactNode }[] = [
    { name: 'Kitchen Remodeling', icon: <Utensils className="w-5 h-5" /> },
    { name: 'Bathroom Remodeling', icon: <Bath className="w-5 h-5" /> },
    { name: 'Full Home Remodeling', icon: <Home className="w-5 h-5" /> },
    { name: 'ADU (Accessory Dwelling Units)', icon: <Building2 className="w-5 h-5" /> },
    { name: 'Garage Conversions', icon: <Car className="w-5 h-5" /> },
    { name: 'Backyard & Hardscaping', icon: <Trees className="w-5 h-5" /> },
    { name: 'New Construction', icon: <HardHat className="w-5 h-5" /> },
  ];

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const updateField = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSuccess) {
    return (
      <section id="lead-form" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center bg-slate-900 text-white p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 opacity-20 translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Project Submission Active</h2>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            Your project blueprint is being reviewed by our PNW vetting team. Expect a call within 2 business hours to confirm your matches and $250 bonus eligibility.
          </p>
          <div className="inline-block bg-white/10 px-6 py-3 rounded-full border border-white/20 text-orange-500 font-bold uppercase tracking-widest text-xs">
            Ref ID: NM-{Math.floor(Math.random() * 90000) + 10000}
          </div>
        </div>
      </section>
    );
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">What can we help you build today?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => { updateField('service', s.name); handleNext(); }}
                  className={`flex items-center space-x-4 p-5 rounded-2xl border-2 transition-all text-left ${formData.service === s.name ? 'border-orange-600 bg-orange-50 shadow-md' : 'border-slate-100 hover:border-slate-300 bg-white'}`}
                >
                  <div className={`p-3 rounded-xl ${formData.service === s.name ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {s.icon}
                  </div>
                  <span className={`font-bold ${formData.service === s.name ? 'text-orange-900' : 'text-slate-700'}`}>{s.name}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Project Location</h3>
              <p className="text-slate-500 mb-8">Tell us where the property is located in the Greater Seattle area.</p>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Zip Code</label>
              <input
                required
                autoFocus
                type="text"
                placeholder="98101"
                value={formData.zipCode}
                onChange={(e) => updateField('zipCode', e.target.value)}
                className="w-full px-6 py-5 rounded-2xl border-2 border-slate-100 focus:border-orange-600 outline-none text-2xl font-bold transition-all"
              />
            </div>
            <div className="flex space-x-4 pt-4">
              <button onClick={handlePrev} type="button" className="flex-1 py-5 rounded-2xl border-2 border-slate-100 font-bold text-slate-500 hover:bg-slate-50 transition-all flex items-center justify-center">
                <ArrowLeft className="mr-2 w-5 h-5" /> Back
              </button>
              <button 
                onClick={handleNext} 
                disabled={!formData.zipCode}
                className="flex-[2] py-5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center"
              >
                Continue <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Estimated Timeline</h3>
              <p className="text-slate-500 mb-8">How quickly are you looking to break ground?</p>
              <div className="grid gap-4">
                {(['Immediate', '3-6 Months', 'Planning'] as ProjectTimeline[]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => { updateField('timeline', t); handleNext(); }}
                    className={`p-6 rounded-2xl border-2 transition-all text-left font-bold text-lg ${formData.timeline === t ? 'border-orange-600 bg-orange-50 text-orange-900' : 'border-slate-100 bg-white text-slate-600 hover:border-slate-200'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={handlePrev} type="button" className="w-full py-5 rounded-2xl border-2 border-slate-100 font-bold text-slate-500 hover:bg-slate-50 transition-all flex items-center justify-center">
              <ArrowLeft className="mr-2 w-5 h-5" /> Back
            </button>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Final Step: Contact Details</h3>
            <div className="grid gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                <input required type="text" placeholder="John Doe" value={formData.fullName} onChange={(e) => updateField('fullName', e.target.value)} className="w-full px-6 py-4 rounded-xl border-2 border-slate-100 outline-none focus:border-orange-600 transition-all" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Phone</label>
                  <input required type="tel" placeholder="(206) 555-0123" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className="w-full px-6 py-4 rounded-xl border-2 border-slate-100 outline-none focus:border-orange-600 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email</label>
                  <input required type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="w-full px-6 py-4 rounded-xl border-2 border-slate-100 outline-none focus:border-orange-600 transition-all" />
                </div>
              </div>
            </div>
            <div className="flex space-x-4 pt-6">
              <button onClick={handlePrev} type="button" className="flex-1 py-5 rounded-2xl border-2 border-slate-100 font-bold text-slate-500 hover:bg-slate-50 transition-all flex items-center justify-center">
                <ArrowLeft className="mr-2 w-5 h-5" /> Back
              </button>
              <button 
                disabled={isSubmitting || !formData.fullName || !formData.phone || !formData.email}
                className="flex-[2] py-5 rounded-2xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center"
              >
                {isSubmitting ? <Loader2 className="animate-spin w-6 h-6 mr-2" /> : null}
                {isSubmitting ? 'Submitting...' : 'Claim My Estimate'}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="lead-form" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Let's Map Your <span className="text-orange-600">Vision.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-500 font-bold shrink-0">1</div>
                <div>
                  <p className="text-white font-bold text-lg">Define the Project</p>
                  <p className="text-slate-400">Select from our 7 core specializations.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-500 font-bold shrink-0">2</div>
                <div>
                  <p className="text-white font-bold text-lg">Market Matching</p>
                  <p className="text-slate-400">We analyze the top 5% of pros in your specific zip code.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-500 font-bold shrink-0">3</div>
                <div>
                  <p className="text-white font-bold text-lg">Claim Bonus</p>
                  <p className="text-slate-400">Unlock your $250 Amazon gift card upon signing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[500px]">
              <div className="absolute top-0 left-0 h-1.5 bg-slate-100 w-full">
                <div 
                  className="h-full bg-orange-600 transition-all duration-500 ease-out" 
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
              <form onSubmit={handleSubmit}>
                {renderStep()}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
