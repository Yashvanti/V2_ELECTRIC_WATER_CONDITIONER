import React from "react";
import { PhoneCall, MapPinCheck, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface TimelineStep {
  step: string;
  title: string;
  desc: string;
  icon: any;
  duration: string;
  sublist: string[];
}

export default function Timeline() {
  const steps: TimelineStep[] = [
    {
      step: "01",
      title: "Contact & Consultation",
      desc: "Reach out via our floating Lead Inquiry form, phone line, or simply click our quick WhatsApp builder below. Connect securely with an experienced home hardware consultant.",
      icon: PhoneCall,
      duration: "Within 5 Minutes",
      sublist: ["Send custom building/flat profile details", "Send pipeline snap photos for compatibility check", "Get zero-obligation transparent cost quotes"]
    },
    {
      step: "02",
      title: "Site & Technical Assessment",
      desc: "Our support engineers assess water sources (Borewell, Municipal, or Mix water feeders) and analyze your daily hardness parameters (PPM values) to confirm the proper placement.",
      icon: MapPinCheck,
      duration: "Within 24 Hours",
      sublist: ["Identify the primary main water tank inlet", "Audit surrounding outdoor electrical power plugs", "Confirm system layout fitting clearance"]
    },
    {
      step: "03",
      title: "1-Hour Simple Installation",
      desc: "An authorized technician wraps our heavy copper signal antennas snugly around the selected inlet zone. The V2 control computer is wall-mounted and powered on safely.",
      icon: Wrench,
      duration: "Takes Under 60 Min",
      sublist: ["Zero pipe cutting, zero structural damage", "Tidy non-intrusive copper coil wrap fittings", "Plumbing continues running during installation"]
    },
    {
      step: "04",
      title: "Active Lifelong Protection",
      desc: "The system powers on, activating the continuous modulating electromagnetic sweep. Protection spreads across all pipelines, geysers, showers, and heaters.",
      icon: ShieldCheck,
      duration: "Instant Activation",
      sublist: ["Scale build formation is arrested immediately", "Existing scale dissolves and clears gradually", "Softer bathing feel, cleaner tiles, low bills"]
    }
  ];

  const handleConsultLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#consultation");
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="timeline" className="relative py-24 bg-brand-navy-dark px-6">
      {/* Decorative background pipeline layout */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-blue/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-cyan text-xs font-bold tracking-[0.25em] uppercase">Simple Integration Journey</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
            How Simple Is It To Get <br />
            <span className="text-gradient">Continuous Scaleshield?</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-light">
            We provide a completely turn-key water diagnostic, site survey, and expert installation service across domestic housing complexes, standalone bungalows, and societies.
          </p>
        </div>

        {/* Process Steps Connection Pipeline layout (Horizontal, Hybrid, and Vertical Viewports) */}
        
        {/* 1. DESKTOP VIEWPORT: Horizontal Timeline Roadmap */}
        <div className="hidden lg:block relative max-w-6xl mx-auto mt-6">
          {/* Horizontal connection pipeline */}
          <div className="absolute top-[32px] left-[10%] right-[10%] h-[3px] bg-sky-950/40 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-cyan/30 rounded animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step Bubble marker */}
                  <div className="w-16 h-16 rounded-full bg-slate-950 border-[3px] border-brand-cyan shadow-glow flex items-center justify-center font-extrabold text-white text-base font-mono relative mb-6">
                    <span className="absolute -inset-1.5 rounded-full border border-brand-cyan/2 w-1.5 h-1.5 animate-ripple"></span>
                    {item.step}
                  </div>

                  {/* Step Card details */}
                  <div className="glass-premium p-5 rounded-[24px] border border-white/5 bg-white/[0.015] hover:border-brand-cyan/20 transition-all duration-300 flex-1 flex flex-col justify-between w-full">
                    <div>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="p-2 bg-brand-blue/15 rounded-lg text-brand-cyan border border-brand-cyan/20">
                          <IconComp className="w-4 h-4 text-brand-cyan" />
                        </div>
                        <span className="text-brand-light-blue text-[10px] font-mono tracking-widest uppercase">
                          {item.duration}
                        </span>
                      </div>
                      <h3 className="text-white font-extrabold text-base tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-2.5 leading-relaxed font-light text-center">
                        {item.desc}
                      </p>
                    </div>

                    <ul className="flex flex-col gap-1.5 mt-4 text-[10.5px] font-mono text-cyan-400/90 text-left list-none mx-auto">
                      {item.sublist.map((sub, sidx) => (
                        <li key={sidx} className="flex items-start gap-1.5">
                          <span className="inline-block w-1 h-1 rounded-full bg-brand-cyan animate-pulse mt-1.5"></span>
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. TABLET VIEWPORT: Dynamic Hybrid 2x2 Grid Timeline */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 relative max-w-3xl mx-auto mt-6">
          <div className="absolute top-[40px] bottom-[40px] left-[25%] right-[25%] border-2 border-dashed border-brand-cyan/10 rounded-2xl pointer-events-none -z-10"></div>
          
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-premium p-6 rounded-[28px] border border-white/5 bg-white/[0.015] hover:border-brand-cyan/20 transition-all duration-300 relative"
              >
                <div className="absolute -top-3.5 -left-3.5 w-10 h-10 rounded-full bg-slate-950 border-2 border-brand-cyan shadow-glow flex items-center justify-center font-extrabold text-white text-xs font-mono">
                  {item.step}
                </div>

                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 bg-brand-blue/15 rounded-xl text-brand-cyan border border-brand-cyan/20">
                    <IconComp className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <span className="text-brand-light-blue text-xs font-mono tracking-widest uppercase">
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-white font-extrabold text-base sm:text-lg tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                  {item.desc}
                </p>

                <ul className="flex flex-col gap-1 mt-4 text-[11px] font-mono text-cyan-400/90 list-none">
                  {item.sublist.map((sub, sidx) => (
                    <li key={sidx} className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* 3. MOBILE VIEWPORT: Classic Clean Vertical Timeline */}
        <div className="block md:hidden relative max-w-sm mx-auto flex flex-col gap-8 mt-6">
          {/* Vertical connecting line */}
          <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-brand-blue/20 -z-10"></div>
          
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex gap-4 pl-1"
              >
                {/* Mobile step bubble */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-950 border-2 border-brand-cyan shadow-glow flex items-center justify-center font-extrabold text-white text-xs font-mono relative z-10">
                  {item.step}
                </div>

                {/* Mobile step card */}
                <div className="glass-premium p-4 rounded-[20px] border border-white/5 bg-white/[0.01] hover:border-brand-cyan/20 transition-all duration-300 flex-1">
                  <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/[0.03]">
                    <IconComp className="w-4 h-4 text-brand-cyan" />
                    <span className="text-brand-light-blue text-[10px] font-mono tracking-wider uppercase font-bold">
                      {item.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-extrabold text-sm tracking-tight mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick CTA inquiry trigger */}
        <div className="mt-20 text-center">
          <a
            href="#consultation"
            onClick={handleConsultLink}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-cyan-500 hover:to-brand-cyan text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md inline-flex items-center gap-2 group"
          >
            <span>Book Installation Service Slot</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
