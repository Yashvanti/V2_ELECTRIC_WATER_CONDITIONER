import { useState } from "react";
import { ZoomIn, RotateCw, Layers, ShieldCheck, HeartPulse, Info, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ComponentPart {
  name: string;
  desc: string;
  spec: string;
}

export default function Showcase() {
  const [rotation, setRotation] = useState<number>(15); // angle in degrees
  const [zoom, setZoom] = useState<number>(1); // scale multiplier 1.0 - 1.4
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("pcb");

  const componentsList: Record<string, ComponentPart> = {
    pcb: {
      name: "Military-Grade Sweeping PCB",
      desc: "An intelligent digital microprocessor sweeps the signal frequency 24/7. It alters the cycle profile automatically, avoiding 'mineral immunity' and ensuring maximum treatment efficiency.",
      spec: "Frequency: 3 KHz - 32 KHz | Auto-Adaptive Cycle Sweep"
    },
    transformer: {
      name: "High-Frequency Flux Transformer",
      desc: "Converts household current to safe, intense electromagnetic pulses, feeding wrapped pipelines with zero heat generation or power spikes.",
      spec: "Input: 12V Low Voltage DC | Power Draw: 1.8W Ultra-Low"
    },
    casing: {
      name: "IP65 Weatherproof Shield",
      desc: "Encased in an impact-tough, fire-retardant ABS copolymer outer chassis designed to withstand moisture, dust, and India's dry, extreme ambient heat.",
      spec: "IP65 Protection Class | Heavy Duty Matte Texture"
    },
    antennas: {
      name: "Heavy-Gauge Copper Induction Bands",
      desc: "Pure thick multi-strand copper coils that conduct electromagnetic power directly to the pipe walls without cutting existing fittings.",
      spec: "Pure Copper Coil windings | Dual Wrap Zones"
    }
  };

  const currentTab = componentsList[activeTab];

  return (
    <section id="showcase" className="relative py-24 bg-brand-navy px-6">
      
      {/* Absolute blur elements */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-cyan text-xs font-bold tracking-[0.25em] uppercase">Tactile Product Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
            Advanced Industrial Hardware <br />
            <span className="text-gradient">Under A Beautiful Design</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-light">
            Engineered like modern electronics. Interact with our digital model to adjust the perspective angle, zoom factors, or float open internal circuits.
          </p>
        </div>

        {/* Tactile Workspace Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Interactive Virtual 3D Canvas Sandbox */}
          <div className="lg:col-span-7 rounded-[36px] bg-[#020610] border border-white/5 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[460px]">
            {/* Fine drafting blueprint overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none"></div>

            {/* Stage title */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.04] relative z-10">
              <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest">3D Hardware Sandbox v1.4</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase">Interactive Render Engine</span>
            </div>

            {/* Central Render Stage */}
            <div className="flex-1 flex items-center justify-center py-10 relative z-10 overflow-hidden">
              
              <div 
                style={{ 
                  transform: `scale(${zoom}) rotateY(${rotation}deg)`,
                  transformStyle: "preserve-3d",
                  perspective: 1000
                }}
                className="w-full max-w-[280px] aspect-[4/5] relative transition-all duration-300 ease-out flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                
                {/* Visual Pipeline going through assembly */}
                <div className="absolute w-[14px] h-[115%] left-1/2 -translate-x-1/2 bg-slate-800 rounded-full border border-white/10 opacity-60"></div>

                {/* Exploded / Compact visual assembly using standard styled layered blocks */}
                <div className="relative w-[180px] h-[230px] flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                  
                  {/* LAYER 1: Back mounting Plate (Framer Motion) */}
                  <motion.div 
                    animate={{ y: isExploded ? -55 : 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="absolute w-[160px] h-[200px] rounded-[24px] bg-slate-900/90 border border-white/5 opacity-50 flex items-center justify-center shadow-lg"
                    style={{ transform: "translateZ(-30px)" }}
                  >
                    <span className="text-[7px] font-mono text-gray-500 uppercase">Backing Plate</span>
                  </motion.div>

                  {/* LAYER 2: Circuitry board PCB (Glowing neon and lines design) */}
                  <motion.div 
                    animate={{ y: isExploded ? -15 : 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="absolute w-[150px] h-[190px] rounded-[22px] bg-slate-950/95 border border-[#10b981]/30 p-4 shadow-lg flex flex-col justify-between"
                    style={{ transform: "translateZ(0px)" }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping"></div>
                      <span className="text-[7px] font-mono text-[#10b981]">V2-SWEEP ACTIVE</span>
                    </div>

                    {/* Integrated copper circuit paths visual */}
                    <div className="flex-1 flex items-center justify-center my-3 relative">
                      <svg className="w-full h-16 opacity-75" viewBox="0 0 100 50">
                        <path d="M 10 25 L 30 25 L 40 10 L 60 10 L 70 40 L 90 40" fill="none" stroke="#10b981" strokeWidth="1" />
                        <circle cx="30" cy="25" r="2" fill="#10b981" />
                        <circle cx="60" cy="10" r="2" fill="#10b981" />
                        <circle cx="70" cy="40" r="2" fill="#10b981" />
                      </svg>
                    </div>

                    <span className="text-[6px] font-mono text-gray-500 text-center uppercase block">Custom Sweep Processor v4</span>
                  </motion.div>

                  {/* LAYER 3: Inductive Coils transformer block */}
                  <motion.div 
                    animate={{ y: isExploded ? 25 : 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="absolute w-[130px] h-[170px] rounded-[18px] bg-slate-950/95 border border-brand-light-blue/20 p-3 shadow-lg flex flex-col justify-between"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <span className="text-[7px] font-mono text-brand-light-blue uppercase">Transformer Core</span>
                    <div className="flex items-center justify-center py-2">
                      <div className="w-10 h-10 rounded-full bg-brand-light-blue/10 border border-brand-light-blue/20 flex items-center justify-center">
                        <HeartPulse className="w-5 h-5 text-brand-light-blue animate-pulse" />
                      </div>
                    </div>
                    <span className="text-[6px] font-mono text-gray-500 text-center uppercase block">Continuous Resonator</span>
                  </motion.div>

                  {/* LAYER 4: Heavy ABS protective front armor casing panel */}
                  <motion.div 
                    animate={{ y: isExploded ? 65 : 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="absolute w-[160px] h-[200px] rounded-[24px] bg-gradient-to-tr from-brand-blue/30 to-brand-navy-dark/95 border border-white/15 shadow-2xl p-4 flex flex-col justify-between backdrop-blur-sm"
                    style={{ transform: "translateZ(60px)" }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-extrabold text-white">V2</span>
                      <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div className="flex items-center justify-center py-8">
                      <span className="text-[9px] font-mono text-gray-400">IP65 SHIELDING</span>
                    </div>
                  </motion.div>

                </div>

              </div>

            </div>

            {/* Floating manual controllers panel alignment */}
            <div className="relative z-10 pt-4 border-t border-white/[0.04] grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              {/* Rotation input slider */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1.5">
                  <RotateCw className="w-3 h-3 text-brand-cyan" />
                  <span>Interactive Angle: {rotation}°</span>
                </span>
                <input 
                  type="range"
                  min="-90"
                  max="90"
                  value={rotation}
                  onChange={(e) => setRotation(parseFloat(e.target.value))}
                  className="w-full accent-brand-cyan bg-white/10 rounded-lg appearance-none h-1.5 cursor-pointer"
                />
              </div>

              {/* Zoom input slider */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1.5">
                  <ZoomIn className="w-3 h-3 text-brand-cyan" />
                  <span>Digital Zoom: {zoom.toFixed(2)}x</span>
                </span>
                <input 
                  type="range"
                  min="0.95"
                  max="1.35"
                  step="0.05"
                  value={zoom}
                  onChange={(e) => setZoom(parseFloat(e.target.value))}
                  className="w-full accent-brand-cyan bg-white/10 rounded-lg appearance-none h-1.5 cursor-pointer"
                />
              </div>

              {/* Exploded View toggle switcher trigger */}
              <div className="flex items-center justify-start sm:justify-end">
                <button
                  onClick={() => setIsExploded(!isExploded)}
                  className={`px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 border transition-all duration-300 ${
                    isExploded 
                      ? "bg-brand-cyan text-brand-navy border-brand-cyan shadow-md shadow-brand-cyan/20" 
                      : "bg-white/[0.02] hover:bg-white/[0.06] text-white border-white/10"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{isExploded ? "Assembly Compacted" : "Exploded Components View"}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Block: Tech specs specification detail documentation */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <div className="flex flex-col gap-5">
              <span className="text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase">Hardware Specifications</span>
              <h3 className="text-white font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight">
                Architected with Indian <br />Plumbing Expertise
              </h3>
              <p className="text-gray-400 text-sm sm:text-base font-light font-sans leading-relaxed">
                We design hardware explicitly tailored for local groundwater, river feeder systems, and highly concentrated industrial Borewell water setups across suburbs.
              </p>

              {/* Specification Interactive Tabs */}
              <div className="grid grid-cols-4 gap-1 bg-black/50 rounded-xl p-1 border border-white/5 mt-2">
                {[
                  { id: "pcb", label: "PCB" },
                  { id: "transformer", label: "FLUX Core" },
                  { id: "casing", label: "Casing" },
                  { id: "antennas", label: "Antennas" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-center py-2 px-1 rounded-lg text-[10px] font-extrabold tracking-wider uppercase transition-colors ${
                      activeTab === tab.id 
                        ? "bg-brand-blue text-white" 
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Active tab specs sheet container */}
              <div className="p-5 rounded-2xl glass-premium border border-white/5 bg-white/[0.01]">
                <span className="text-brand-cyan text-[10px] font-mono tracking-widest uppercase block mb-1">
                  Selected Component Spec Sheet
                </span>
                <h4 className="text-white font-bold text-lg tracking-tight">
                  {currentTab.name}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2.5 font-light">
                  {currentTab.desc}
                </p>
                <div className="bg-black/35 px-3 py-1.5 rounded-lg text-[10.5px] font-mono text-slate-400 border border-white/5 mt-4">
                  {currentTab.spec}
                </div>
              </div>
            </div>

            {/* Quick Consultation Trigger box with Keshav WhatsApp link pre-formatting */}
            <div className="p-5 rounded-[24px] bg-gradient-to-r from-brand-blue/10 to-brand-cyan/5 border border-brand-cyan/20 flex flex-col sm:flex-row items-center justify-between gap-5 mt-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-blue/20 rounded-xl">
                  <Info className="w-5 h-5 text-brand-cyan" />
                </div>
                <div className="text-left">
                  <span className="text-white font-bold text-sm block">Confused about size compatibility?</span>
                  <span className="text-gray-400 text-xs mt-0.5 block">Send pipeline photos to our custom technician.</span>
                </div>
              </div>
              <a
                href="https://wa.me/919172338293?text=Hi%20V2%20Team%2C%20I%20have%20attached%20photos%20of%20my%20homes%20main%20pipeline%20inlet.%20Please%20advise%20if%20the%20V2%20Electronic%20Water%20Conditioner%20is%20compatible."
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-full text-white text-xs font-bold tracking-wide transition-colors flex items-center gap-2 self-stretch sm:self-auto text-center justify-center whitespace-nowrap shadow-md shadow-emerald-900/10"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Verify Pipe Fit</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
