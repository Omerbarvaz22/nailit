
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Define Your Vision',
      desc: 'Tell us about your kitchen project, goals, and budget. Our experts analyze your needs in minutes.'
    },
    {
      number: '02',
      title: 'Meet Your Matches',
      desc: 'We match you with 3 elite local pros who specialize in your specific style and price point.'
    },
    {
      number: '03',
      title: 'Claim Your Bonus',
      desc: 'Choose your favorite contractor and claim your $250 Amazon gift card when work begins.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Seamless Way To Remodel</h2>
          <p className="text-slate-400 text-lg">We've removed the stress from the Seattle remodeling market.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-8xl font-bold text-white/5 absolute -top-12 -left-4 group-hover:text-orange-600/10 transition-colors">{step.number}</div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-600 text-white text-sm rounded-full flex items-center justify-center mr-3">{idx + 1}</span>
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
