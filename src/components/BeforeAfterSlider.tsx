import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight, Ban, Check, Flame, Pocket, Zap } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Manage Drag Events
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="relative py-24 bg-brand-navy-dark px-6">
      
      {/* Background soft lighting */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-red-950/10 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute top-2/3 right-1/4 w-[350px] h-[350px] bg-emerald-950/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-cyan text-xs font-bold tracking-[0.25em] uppercase">Visual Comparison</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
            Before vs After V2
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-light">
            Slide the controller left and right to see the physical contrast in water scale buildup and appliance longevity.
          </p>
        </div>

        {/* Master Comparison Core */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left panel of specs: Without V2 bad points */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-red-400 font-extrabold text-xl sm:text-2xl tracking-tight uppercase border-b border-red-500/10 pb-3 flex items-center gap-2">
              <Ban className="w-5 h-5 text-red-500" />
              <span>Without V2</span>
            </h3>
            
            <div className="flex flex-col gap-3">
              {[
                { title: "Hostile Scale Buildup", desc: "Pipelines clog heavily, constricting pressure over time." },
                { title: "Geyser Corrosion", desc: "Electric heating coils burn out, causing geyser failure." },
                { title: "Extreme Energy Waste", desc: "Thick calcium layers lead to up to 21% scale thermal loss." },
                { title: "Aggressive Maintenance", desc: "Requires acid washes, chemicals, and costly repairs." }
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-2xl bg-red-950/[0.05] border border-red-500/10">
                  <span className="text-white text-sm sm:text-base font-bold tracking-tight block">{item.title}</span>
                  <span className="text-gray-400 text-xs sm:text-sm mt-1 block font-light leading-snug">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column: The Interactive Slider Box */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-[#01050a] select-none cursor-pointer"
              onMouseDown={(e) => { e.preventDefault(); setIsDragging(true); }}
              onTouchStart={() => setIsDragging(true)}
            >
              
              {/* LEFT VIEW: "Without V2" (Rusty scale style frame) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-orange-950/20 to-red-950/10 flex flex-col justify-between p-6">
                
                {/* Visual Representation of scaled-up pipeline block */}
                <div className="flex-1 flex flex-col items-center justify-center relative">
                  {/* Heavy mineral build background block */}
                  <div className="w-[180px] h-[55px] rounded-lg bg-yellow-950/40 border border-yellow-800/30 flex items-center justify-center text-center p-3 relative shadow-2xl">
                    <div className="absolute inset-1.5 bg-yellow-900/50 rounded flex flex-col items-center justify-center p-1 border border-yellow-700/20">
                      <span className="text-[10px] uppercase font-mono font-bold text-yellow-500">75% CHOKED FLOW</span>
                    </div>
                  </div>
                  {/* Sputtering high drag water stream dots */}
                  <div className="h-6 w-1 border-r border-dotted border-red-500 animate-pulse mt-4"></div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-red-400 font-mono text-xs uppercase tracking-widest font-black bg-red-950/45 px-3 py-1 rounded-full border border-red-500/10">
                    SABOTAGED UTILITIES
                  </span>
                </div>
              </div>

              {/* RIGHT VIEW: "With V2" (Stunning celestial navy clean stream clip frame relative to position) */}
              <div
                style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
                className="absolute inset-0 w-full h-full bg-gradient-to-tr from-brand-blue/35 via-brand-navy-dark to-brand-cyan/20 flex flex-col justify-between p-6 transition-transform duration-75 select-none"
              >
                
                {/* Visual Representation of V2 restyled active pipes */}
                <div className="flex-1 flex flex-col items-center justify-center relative">
                  {/* Pure pristine pipeline graphic with light halo */}
                  <div className="w-[180px] h-[55px] rounded-lg bg-brand-cyan/20 border border-brand-cyan/50 flex items-center justify-center text-center p-2 relative shadow-glow">
                    {/* Glowing electronic treatment lines */}
                    <div className="absolute inset-0 rounded bg-gradient-to-r from-brand-blue/10 to-brand-cyan/20 animate-pulse"></div>
                    <span className="text-[10px] uppercase font-mono font-bold text-white relative z-10">100% OPTIMAL RUNNING</span>
                  </div>
                  {/* Swift clean high speed blue gradient solid column */}
                  <div className="h-10 w-2.5 bg-gradient-to-b from-brand-cyan to-brand-blue rounded-full animate-pulse mt-3 shadow-glow"></div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="ml-auto text-brand-cyan font-mono text-xs uppercase tracking-widest font-black bg-brand-blue/45 px-3 py-1 rounded-full border border-brand-cyan/20">
                    RESTORED PURITY
                  </span>
                </div>
              </div>

              {/* SLIDER HAND GRIP LINE */}
              <div
                style={{ left: `${sliderPosition}%` }}
                className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-cyan via-white to-brand-blue -translate-x-1/2 z-30 pointer-events-none"
              >
                {/* Center handle knob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-navy border-[2.5px] border-white shadow-xl flex items-center justify-center">
                  <ArrowLeftRight className="w-4 h-4 text-brand-cyan" />
                </div>
              </div>

            </div>

            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-4">
              Touch and Slide Divider Bar Left or Right
            </span>
          </div>

          {/* Right panel of specs: With V2 good points */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-brand-cyan font-extrabold text-xl sm:text-2xl tracking-tight uppercase border-b border-brand-cyan/20 pb-3 flex items-center gap-2">
              <Check className="w-5 h-5 text-brand-cyan" />
              <span>With V2</span>
            </h3>
            
            <div className="flex flex-col gap-3">
              {[
                { title: "Pristine Pure Pipelines", desc: "Existing scale scale dissolves gradually, restoring full water flow." },
                { title: "Appliance Armor", desc: "Locks calcium out of coils, boosting heater longevity by 10 years." },
                { title: "Saves Carbon & Cash", desc: "Restored heating speeds lower electricity bills by up to 21%." },
                { title: "Zero Hassle, Self-Run", desc: "No salts to buy, no wastewater drain lines, or servicing." }
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-2xl bg-brand-blue/[0.04] border border-brand-cyan/15 hover:border-brand-cyan/30 transition-colors">
                  <span className="text-brand-cyan text-sm sm:text-base font-bold tracking-tight block">{item.title}</span>
                  <span className="text-gray-300 text-xs sm:text-sm mt-1 block font-light leading-snug">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
