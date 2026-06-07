import { useState } from "react";
import { AlertTriangle, HelpCircle, HardDrive, Filter, Activity, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProblemStep {
  id: number;
  label: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

export default function ProblemSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps: ProblemStep[] = [
    {
      id: 1,
      label: "Phase 01: Pure Flow",
      title: "The Clean Pipeline",
      description: "When plumbing is newly installed, water flows freely. There is zero resistance, utility pressure is high, and water heating elements operate at peak energy efficiency with instant heat transfer.",
      icon: CheckCircle,
      color: "text-brand-cyan"
    },
    {
      id: 2,
      label: "Phase 02: Crystallization",
      title: "Hard Water Mineral Buildup",
      description: "Calcium carbonate (CaCO₃) and magnesium minerals crystallize upon contact with heat and pressure changes, solidifying along internal pipe walls and on metallic appliance heating coils.",
      icon: HelpCircle,
      color: "text-amber-400"
    },
    {
      id: 3,
      label: "Phase 03: Scale & Damage",
      title: "Clogged Pipelines & High Bills",
      description: "Pipelines lose up to 75% capacity. Geyser coils undergo structural overheating and fail prematurely. Soap fails to lather, leading to high hair fall, dry skin, and up to 40% excessive power bills.",
      icon: AlertTriangle,
      color: "text-red-500"
    },
    {
      id: 4,
      label: "Phase 04: V2 Induction",
      title: "V2 Electronic Activation",
      description: "V2 wraps around the main inlet pipe and emits intense high-frequency electromagnetic waves across the stream, converting coarse scale structures into non-binding micro-crystals.",
      icon: Activity,
      color: "text-brand-blue"
    },
    {
      id: 5,
      label: "Phase 05: Total Restoration",
      title: "Continuous Descaling Protection",
      description: "Existing calcium scale is gradually dissolved, restoring full flow pressure. Heating elements are kept pristine, extending geyser & appliance lifespan by up to 10 years without salt or water waste.",
      icon: Filter,
      color: "text-emerald-400"
    }
  ];

  const currentStep = steps[activeStep - 1];

  return (
    <section id="problem" className="relative py-24 bg-brand-navy px-6 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-950/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-light-blue text-xs font-bold tracking-[0.25em] uppercase">Interactive Pipeline Simulator</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
            The Invisible Enemy Inside <br />
            <span className="text-gradient">Your Home's Pipelines</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-light">
            Incredible heat and friction trigger hard water minerals to bind, forming structural scale that chokes plumbing systems. Select the stages below to witness the destruction and the V2 remedy.
          </p>
        </div>

        {/* Outer Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          
          {/* Left Panel: Step selection list */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              {steps.map((step) => {
                const StepIcon = step.icon;
                const isActive = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-center gap-4 ${
                      isActive
                        ? "bg-gradient-to-r from-brand-blue/15 to-white/5 border-brand-cyan/40 shadow-lg shadow-brand-blue/10"
                        : "bg-white/[0.02] hover:bg-white/[0.05] border-white/5"
                    }`}
                  >
                    {/* Active Background highlight line */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-cyan to-brand-blue"></div>
                    )}

                    <div className={`p-2.5 rounded-xl ${isActive ? "bg-brand-blue/30 scale-110" : "bg-white/5"} transition-all duration-300`}>
                      <StepIcon className={`w-5 h-5 ${isActive ? step.color : "text-gray-400"}`} />
                    </div>

                    <div className="flex-1">
                      <span className={`text-[11px] font-mono tracking-widest uppercase block ${isActive ? "text-brand-cyan" : "text-gray-500"}`}>
                        {step.label}
                      </span>
                      <span className={`text-sm sm:text-base font-bold tracking-tight block mt-0.5 ${isActive ? "text-white" : "text-gray-300"}`}>
                        {step.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Warning callout block */}
            <div className="p-5 rounded-2xl glass-premium border border-red-900/20 bg-red-950/5 flex items-start gap-4">
              <div className="p-2 bg-red-950/50 rounded-xl border border-red-500/20">
                <AlertTriangle className="w-5 h-5 text-red-400 animate-bounce" />
              </div>
              <div className="flex-1">
                <span className="text-red-400 font-bold text-xs uppercase tracking-wider block">The Cost of Ignorance</span>
                <p className="text-xs text-gray-400 leading-relaxed mt-1">
                  Just 3mm of calcium scale buildup inside your geyser reduces thermal transfer efficiency by over 21%, dramatically inflating heating bills.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel: Large SVG Visualizer */}
          <div className="lg:col-span-7 rounded-[32px] glass-premium border border-white/5 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[400px]">
            {/* Embedded grid mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

            <div className="flex items-center justify-between mb-4 relative z-10">
              <span className="text-xs font-mono text-gray-500 uppercase">Live Diagram Visualization</span>
              <span className={`text-xs font-mono px-3 py-1 rounded-full border bg-black/40 ${currentStep.color} border-current/25`}>
                {activeStep === 5 ? "STABLE PROTECTION" : "MONITOR ACTIVE"}
              </span>
            </div>

            {/* Dynamic Stage SVG Drawing with Framer Motion triggers */}
            <div className="flex-1 flex items-center justify-center my-6 min-h-[220px] relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex items-center justify-center"
                >
                  <svg className="w-full max-w-[500px] h-44 overflow-visible" viewBox="0 0 400 120">
                    <defs>
                      <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0057D8" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#00AEEF" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="scalyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#dbd7cd" />
                        <stop offset="50%" stopColor="#a39a8c" />
                        <stop offset="100%" stopColor="#73695b" />
                      </linearGradient>
                    </defs>

                    {/* Pipe Body Outline */}
                    <rect x="10" y="25" width="380" height="70" rx="3" fill="#1e293b" fillOpacity="0.3" stroke="#475569" strokeWidth="2" />
                    
                    {/* Metal flange ends */}
                    <rect x="2" y="20" width="8" height="80" rx="2" fill="#64748b" />
                    <rect x="390" y="20" width="8" height="80" rx="2" fill="#64748b" />

                    {/* Flowing Water Element inside pipeline */}
                    {activeStep === 1 && (
                      <path d="M 10 32 L 390 32 L 390 88 L 10 88 Z" fill="url(#waterGrad)">
                        <animate attributeName="opacity" values="0.85;0.95;0.85" dur="3s" repeatCount="indefinite" />
                      </path>
                    )}

                    {activeStep === 2 && (
                      <>
                        {/* Partially choked water stream */}
                        <path d="M 10 40 L 390 40 L 390 80 L 10 80 Z" fill="url(#waterGrad)" />
                        {/* Scale buildup forming along walls */}
                        <path d="M 10 26 Q 100 38 200 32 Q 300 42 390 26 L 390 34 L 10 34 Z" fill="url(#scalyGrad)" />
                        <path d="M 10 94 Q 100 82 200 88 Q 300 78 390 94 L 390 86 L 10 86 Z" fill="url(#scalyGrad)" />
                      </>
                    )}

                    {activeStep === 3 && (
                      <>
                        {/* Severely blocked stream - thin listless stream */}
                        <path d="M 10 52 L 390 52 L 390 68 L 10 68 Z" fill="url(#waterGrad)" />
                        {/* Massive mineral deposits clogging core */}
                        <path d="M 10 26 Q 80 50 200 48 Q 320 54 390 26 L 390 50 L 10 54 Z" fill="url(#scalyGrad)" />
                        <path d="M 10 94 Q 80 70 200 72 Q 320 68 390 94 L 390 70 L 10 66 Z" fill="url(#scalyGrad)" />
                        {/* Red danger indicators */}
                        <circle cx="200" cy="38" r="4" fill="#ef4444" className="animate-ping" />
                        <circle cx="150" cy="80" r="4" fill="#ef4444" className="animate-ping" />
                      </>
                    )}

                    {activeStep === 4 && (
                      <>
                        {/* Water flowing under EMF induction waves */}
                        <path d="M 10 32 L 390 32 L 390 88 L 10 88 Z" fill="url(#waterGrad)" />
                        {/* Active frequency induction waves (sine waves) */}
                        <path d="M 10 60 Q 30 20 50 60 T 90 60 T 130 60 T 170 60 T 210 60 T 250 60 T 290 60 T 330 60 T 370 60" fill="none" stroke="#00E5FF" strokeWidth="2.5" className="animate-pulse" />
                        <path d="M 10 60 Q 30 100 50 60 T 90 60 T 130 60 T 170 60 T 210 60 T 250 60 T 290 60 T 330 60 T 370 60" fill="none" stroke="#0057D8" strokeWidth="1.5" className="animate-pulse" />
                        
                        {/* The wrapped coil antennas of V2 wrapped around pipeline */}
                        <rect x="180" y="21" width="40" height="78" rx="6" fill="#030812" fillOpacity="0.8" stroke="#00E5FF" strokeWidth="1" />
                        <line x1="185" y1="23" x2="185" y2="97" stroke="#fbbf24" strokeWidth="3" />
                        <line x1="195" y1="23" x2="195" y2="97" stroke="#fbbf24" strokeWidth="3" />
                        <line x1="205" y1="23" x2="205" y2="97" stroke="#fbbf24" strokeWidth="3" />
                        <line x1="215" y1="23" x2="215" y2="97" stroke="#fbbf24" strokeWidth="3" />
                      </>
                    )}

                    {activeStep === 5 && (
                      <>
                        {/* Restored sparkling clear high pressure flow */}
                        <path d="M 10 32 L 390 32 L 390 88 L 10 88 Z" fill="url(#waterGrad)" />
                        
                        {/* Scattered shiny bubbles */}
                        <circle cx="50" cy="45" r="2.5" fill="#FFF" opacity="0.6" />
                        <circle cx="120" cy="75" r="1.5" fill="#FFF" opacity="0.8" />
                        <circle cx="190" cy="35" r="2" fill="#FFF" opacity="0.7" />
                        <circle cx="280" cy="70" r="3" fill="#FFF" opacity="0.5" />
                        <circle cx="340" cy="50" r="2.5" fill="#FFF" opacity="0.6" />

                        {/* Sparkle starburst symbols */}
                        <path d="M 150 40 L 153 43 L 150 46 L 147 43 Z" fill="#00E5FF" />
                        <path d="M 230 75 L 232 77 L 230 79 L 228 77 Z" fill="#00E5FF" />
                      </>
                    )}

                    {/* Left & Right custom Arrow Flow pointers */}
                    <path d="M 20 60 L 30 55 L 30 65 Z" fill="#FFF" opacity="0.4" />
                    <path d="M 370 60 L 380 55 L 380 65 Z" fill="#FFF" opacity="0.8" className="animate-pulse" />
                  </svg>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Info pane */}
            <div className="relative z-10 bg-white/[0.01] border-t border-white/5 pt-5">
              <span className={`text-[10px] font-mono tracking-widest uppercase block ${currentStep.color}`}>
                Current Status Details
              </span>
              <h3 className="text-white font-bold text-lg tracking-tight mt-1">
                {currentStep.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                {currentStep.description}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
