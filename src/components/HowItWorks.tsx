import { useState } from "react";
import { Info, HelpCircle, Activity, Droplet, Zap, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Hotspot {
  id: number;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  badge: string;
  description: string;
  science: string;
  icon: any;
}

export default function HowItWorks() {
  const [selectedHotspot, setSelectedHotspot] = useState<number>(2);

  const hotspots: Hotspot[] = [
    {
      id: 1,
      x: 12,
      y: 50,
      title: "Untreated Mineral Inflow",
      badge: "Stage 01: Water Intake",
      description: "Hard raw water enters the pipeline carrying dissolved calcium carbonate (calcite) and magnesium. These minerals are highly reactive physical salts waiting to deposit on hot surfaces.",
      science: "Inflow contains dissolved Ca²⁺ and HCO₃⁻ ions in high concentration prior to electronic restructuring.",
      icon: Droplet
    },
    {
      id: 2,
      x: 35,
      y: 35,
      title: "Electromagnetic Signal Core",
      badge: "Stage 02: Wave Modulation",
      description: "The V2 computer-controlled generator injects custom-modulated oscillating electrical signals through dual copper wrap bands, forming a localized electromagnetic flux field inside the pipe.",
      science: "Frequencies vary continuously between 3 KHz and 32 KHz to block mineral structures from binding together.",
      icon: Zap
    },
    {
      id: 3,
      x: 52,
      y: 55,
      title: "Aragonite Phase Transition",
      badge: "Stage 03: Mineral Alteration",
      description: "Under the physical impact of the continuous EMF field, sharp sticky calcite crystals are shattered and restructured into rounded, smooth, needle-like Aragonite micro-structures.",
      science: "Aragonite is a natural, stable mineral form of calcium carbonate that possesses zero binding properties.",
      icon: RefreshCw
    },
    {
      id: 4,
      x: 70,
      y: 35,
      title: "Descaled Soap Lathering",
      badge: "Stage 04: Suspension Flow",
      description: "Treated mineral micro-powders remain completely in liquid suspension. They flow smoothly out of tap faucets instead of binding to your pipelines, boiler heaters, or shower heads.",
      science: "Because minerals do not bind, surface tension is lowered, yielding a 35% improvement in hand soap lathering.",
      icon: Activity
    },
    {
      id: 5,
      x: 90,
      y: 50,
      title: "Pristine Pan-Home Output",
      badge: "Stage 05: Active Discharge",
      description: "Clean, mineral-intact conditioned water discharges into your home distribution. This safe, chemical-free processing treats 100% of the stream, and works for up to 35,000 ppm water hardness.",
      science: "The water retains essential trace calcium and magnesium minerals necessary for drinking, while saving appliances.",
      icon: Info
    }
  ];

  const currentHotspot = hotspots.find((h) => h.id === selectedHotspot) || hotspots[0];

  return (
    <section id="how-it-works" className="relative py-24 bg-brand-navy-dark px-6">
      {/* Decorative ambient rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-cyan text-xs font-bold tracking-[0.25em] uppercase">The Science of V2 Conditioners</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
            How Electromagnetic <br />
            <span className="text-gradient">Dispersal Science Works</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-light">
            No chemicals, no salt, and zero water waste. V2 operates using sophisticated physical molecular chemistry to save your home’s pipelines and appliances.
          </p>
        </div>

        {/* Responsive Interactive Schematic */}
        <div className="bg-white/[0.01] border border-white/5 rounded-[40px] p-6 lg:p-10 relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue opacity-50"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Panel: Big SVG visualizer showing the cross section of pipe treatment with hotspots */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase mb-4 block text-center lg:text-left">
                Interactive Cross Section (Tap Hotspots)
              </span>

              {/* Interactive Hotspot SVG Shell */}
              <div className="relative w-full aspect-[16/8] bg-black/40 rounded-3xl border border-white/5 flex items-center justify-center p-4 overflow-hidden">
                {/* Simulated Grid backdrop */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none"></div>

                {/* Flow pipe graphic container */}
                <div className="w-full h-full relative flex items-center">
                  
                  {/* SVG Base Pipeline */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Metal outer pipe walls */}
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#1e293b" strokeWidth="24" opacity="0.3" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#334155" strokeWidth="18" opacity="0.3" />
                    <line x1="0" y1="41" x2="100" y2="41" stroke="#475569" strokeWidth="0.8" />
                    <line x1="0" y1="59" x2="100" y2="59" stroke="#475569" strokeWidth="0.8" />

                    {/* Flow directions indications */}
                    <path d="M 5 50 Q 15 50 25 50 T 45 50 T 65 50 T 85 50 T 95 50" fill="none" stroke="url(#flow-grad)" strokeWidth="12" />
                    <defs>
                      <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.4" />
                        <stop offset="40%" stopColor="#0284c7" stopOpacity="0.7" />
                        <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
                      </linearGradient>
                    </defs>

                    {/* The copper wrap antennas graphic inside SVG coordinates */}
                    <rect x="25" y="38" width="8" height="24" rx="1.5" fill="#ca8a04" opacity="0.8" />
                    <rect x="65" y="38" width="8" height="24" rx="1.5" fill="#ca8a04" opacity="0.8" />
                  </svg>

                  {/* Dynamic treated physical waves traveling from copper coiling */}
                  <div className="absolute left-[25%] right-[27%] top-[41%] bottom-[41%] pointer-events-none overflow-hidden">
                    <div className="w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(0,229,255,0.45)_50%,transparent_100%)] bg-[size:40px_100%] animate-water-flow" style={{ animationDuration: "1s" }}></div>
                  </div>

                  {/* Interactive Dot Triggers overlaid by absolute positions */}
                  {hotspots.map((h) => {
                    const isSelected = selectedHotspot === h.id;
                    return (
                      <button
                        key={h.id}
                        onClick={() => setSelectedHotspot(h.id)}
                        style={{ left: `${h.x}%`, top: `${h.y}%` }}
                        className="absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 z-20 group focus:outline-none"
                      >
                        {/* Outer pulsating wave loops */}
                        <span className={`absolute inset-0 rounded-full bg-brand-cyan/30 ${isSelected ? "animate-ping scale-150" : "group-hover:animate-ping opacity-60"}`}></span>
                        
                        {/* Hotspot Core button body */}
                        <span className={`absolute inset-1 rounded-full flex items-center justify-center font-mono font-bold text-xs ring-1 transition-all ${
                          isSelected
                            ? "bg-brand-cyan text-brand-navy border-brand-cyan ring-brand-cyan/50 ring-4"
                            : "bg-brand-navy-dark text-gray-300 border-white/20 group-hover:bg-brand-blue group-hover:text-white"
                        }`}>
                          {h.id}
                        </span>
                      </button>
                    );
                  })}

                  {/* Flow label */}
                  <div className="absolute left-4 bottom-4 flex items-center gap-1.5 opacity-60">
                    <span className="text-[9px] font-mono tracking-widest text-brand-light-blue">HARD WATER IN</span>
                    <span className="w-1.5 h-1.5 bg-brand-light-blue rounded-full animate-ping"></span>
                  </div>

                  <div className="absolute right-4 bottom-4 flex items-center gap-1.5 opacity-80">
                    <span className="text-[9px] font-mono tracking-widest text-brand-cyan">TREATED WATER OUT</span>
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-ping"></span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Panel: Content card displaying active selected hotspot data */}
            <div className="lg:col-span-5 h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHotspot}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-5 p-5 sm:p-6 rounded-3xl bg-white/[0.02] border border-white/5 relative shadow-lg min-h-[300px]"
                >
                  {/* Glowing vertical header line */}
                  <div className="absolute top-6 left-0 bottom-6 w-[2px] bg-gradient-to-b from-brand-cyan to-brand-blue"></div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-blue/20 rounded-xl text-brand-cyan border border-brand-cyan/2s">
                      {(() => {
                        const IconComponent = currentHotspot.icon;
                        return <IconComponent className="w-5 h-5 text-brand-cyan" />;
                      })()}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest block">
                        {currentHotspot.badge}
                      </span>
                      <h4 className="text-white font-extrabold text-xl tracking-tight mt-0.5">
                        {currentHotspot.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                    {currentHotspot.description}
                  </p>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.04]">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                      Scientific Explanation
                    </span>
                    <p className="text-xs text-brand-light-blue font-mono leading-relaxed">
                      {currentHotspot.science}
                    </p>
                  </div>

                  {/* Slider controls indicators inside information panel */}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] font-mono text-gray-500">HOTSPOT {currentHotspot.id} OF 5</span>
                    <div className="flex gap-1.5">
                      {hotspots.map((h) => (
                        <button
                          key={h.id}
                          onClick={() => setSelectedHotspot(h.id)}
                          className={`w-5 h-1 rounded-full transition-all duration-300 ${
                            selectedHotspot === h.id ? "bg-brand-cyan w-8" : "bg-white/10 hover:bg-white/30"
                          }`}
                          aria-label={`Go to hotspot ${h.id}`}
                        />
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
