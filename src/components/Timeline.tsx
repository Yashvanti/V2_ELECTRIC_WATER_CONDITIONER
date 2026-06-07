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

        {/* Process Steps Connection Pipeline layout (Vertical track) */}
        <div className="relative max-w-4xl mx-auto flex flex-col gap-12 sm:gap-16">
          
          {/* Connecting Pipe Line track with running color gradient gradient block */}
          <div className="absolute left-[26px] sm:left-1/2 top-4 bottom-4 w-[4px] bg-sky-950/40 -translate-x-1/2 z-0 hidden sm:block">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-cyan/20 rounded animate-pulse"></div>
          </div>

          {steps.map((item, idx) => {
            const IconComp = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: idx * 0.1 }}
                className={`relative z-10 flex flex-col sm:flex-row items-stretch ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                
                {/* Visual Step bubble divider central column alignment */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-0 z-20 flex flex-col items-center">
                  <div className="w-[52px] h-[52px] rounded-full bg-slate-950 border-[3.5px] border-brand-cyan shadow-glow flex items-center justify-center font-extrabold text-[#FFF] text-sm font-mono relative">
                    <span className="absolute -inset-1.5 rounded-full border border-brand-cyan/2 w-1.5 h-1.5 animate-ripple"></span>
                    {item.step}
                  </div>
                  <div className="w-[2px] h-[100%] bg-brand-cyan/20 absolute top-[52px] -z-10 block sm:hidden"></div>
                </div>

                {/* Left/Right content split flex container */}
                <div className={`w-full sm:w-[48%] pl-16 sm:pl-0 ${isEven ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"}`}>
                  <div className="glass-premium p-6 sm:p-7 rounded-[28px] border border-white/5 bg-white/[0.015] hover:border-brand-cyan/20 transition-all duration-300">
                    
                    <div className={`flex items-center gap-3 mb-2.5 ${isEven ? "sm:flex-row-reverse" : ""}`}>
                      <div className="p-2.5 bg-brand-blue/15 rounded-xl text-brand-cyan border border-brand-cyan/20">
                        <IconComp className="w-5 h-5 text-brand-cyan" />
                      </div>
                      <span className="text-brand-light-blue text-xs font-mono tracking-widest uppercase">
                        {item.duration}
                      </span>
                    </div>

                    <h3 className="text-white font-extrabold text-xl sm:text-2xl tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed font-light font-sans">
                      {item.desc}
                    </p>

                    {/* Specifications inside timeline step card */}
                    <ul className={`flex flex-col gap-2 mt-5 text-[11.5px] font-mono text-cyan-400/90 list-none ${
                        isEven ? "sm:items-end" : "sm:items-start"
                      }`}
                    >
                      {item.sublist.map((sub, sidx) => (
                        <li key={sidx} className={`flex items-center gap-2 ${isEven ? "sm:flex-row-reverse" : ""}`}>
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

                {/* Invisible balanced block spacer for wide desktop grids */}
                <div className="hidden sm:block w-[48%] h-2"></div>

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
