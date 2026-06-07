import { useState } from "react";
import { MapPin, Plane, Truck, Check, HelpCircle, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CityHub {
  id: string;
  name: string;
  x: number; // percentage coordinate on vector map
  y: number;
  coverage: string;
  installation: string;
  delivery: string;
  phone: string;
}

export default function ServiceMap() {
  const [activeHub, setActiveHub] = useState<string>("pune");

  const cities: CityHub[] = [
    {
      id: "pune",
      name: "Pune Headquarters",
      x: 35,
      y: 65,
      coverage: "Vadgaon Sheri, Kharadi, Kalyani Nagar, Viman Nagar, Hadapsar, Kothrud, Baner, Wakad, Hinjewadi, and PCMC regions.",
      installation: "Same-Day Professional Integration (< 4 Hours)",
      delivery: "Immediate Local Technician Courier Dispatch",
      phone: "+91 91723 38293"
    },
    {
      id: "mumbai",
      name: "Mumbai Metro Hub",
      x: 22,
      y: 54,
      coverage: "South Mumbai, Bandra, Andheri, Borivali, Thane, Navi Mumbai complexes, Kalyan, and surrounding western suburbs.",
      installation: "Next-Day Guaranteed Technical Fitting Support",
      delivery: "24-Hour Express Logistics Dispatch",
      phone: "+91 91723 38293"
    },
    {
      id: "nashik",
      name: "Nashik Regional Office",
      x: 28,
      y: 42,
      coverage: "Nashik City, Indira Nagar, College Road, Pathardi Phata, CIDCO, Deolali, and industrial clusters.",
      installation: "Scheduled Technician Visits (Within 36 Hours)",
      delivery: "Express Courier Shipping with full tracking",
      phone: "+91 91723 38293"
    },
    {
      id: "nagpur",
      name: "Nagpur hub",
      x: 75,
      y: 38,
      coverage: "Nagpur city, Dharampeth, Sadar, Wardha Road, Manish Nagar, and surrounding housing societies.",
      installation: "On-call technician support + Guided self-installation bundle",
      delivery: "Secure priority express rail/road logistics",
      phone: "+91 91723 38293"
    }
  ];

  const currentHub = cities.find((c) => c.id === activeHub) || cities[0];

  return (
    <section className="relative py-24 bg-brand-navy px-6">
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-light-blue/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-cyan text-xs font-bold tracking-[0.25em] uppercase">Localized Logistics</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
            Our Key Active Service Hubs
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-light">
            We are headquartered in Pune with regional service deployment offices. Click on any city hub to inspect dedicated local setup capabilities.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Premium custom Map Graphic */}
          <div className="lg:col-span-7 rounded-[36px] bg-[#020610] border border-white/5 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[440px]">
            {/* Embedded grid mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            <div className="flex items-center justify-between relative z-10 border-b border-white/[0.04] pb-4">
              <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest">State Water Grid Map</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase">Interactive Radar</span>
            </div>

            {/* Geographical schematic vector canvas simulator */}
            <div className="flex-1 flex items-center justify-center relative my-8 min-h-[220px] z-10">
              
              {/* Detailed custom abstract SVG outline map of Maharashtra state & India coordinates */}
              <div className="w-full max-w-[420px] aspect-square relative flex items-center justify-center">
                <svg className="w-full h-full opacity-65 overflow-visible" viewBox="0 0 100 100">
                  {/* Outer abstract geographic state contour block */}
                  <path
                    d="M 15 45 Q 20 30 35 25 T 55 20 T 75 15 T 85 30 T 90 55 T 75 65 T 50 75 T 32 60 T 15 45 Z"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 15 45 Q 22 35 32 30 T 52 25 T 72 20 T 82 35 T 87 60 T 72 70 T 48 80 T 30 65 T 15 45 Z"
                    fill="#081120"
                    fillOpacity="0.4"
                    stroke="url(#mapGrad)"
                    strokeWidth="1"
                  />

                  {/* Connecting courier line vectors between city routers */}
                  <line x1="35" y1="65" x2="22" y2="54" stroke="rgba(0,229,255,0.2)" strokeWidth="1" strokeDasharray="3" />
                  <line x1="35" y1="65" x2="28" y2="42" stroke="rgba(0,229,255,0.2)" strokeWidth="1" strokeDasharray="3" />
                  <line x1="35" y1="65" x2="75" y2="38" stroke="rgba(0,174,239,0.15)" strokeWidth="1" strokeDasharray="3" />

                  <defs>
                    <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0057D8" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* City Pins elements */}
                {cities.map((city) => {
                  const isActive = activeHub === city.id;
                  return (
                    <button
                      key={city.id}
                      onClick={() => setActiveHub(city.id)}
                      style={{ left: `${city.x}%`, top: `${city.y}%` }}
                      className="absolute group z-20 focus:outline-none -translate-x-1/2 -translate-y-1/2"
                    >
                      <span className={`absolute inset-0 rounded-full bg-brand-cyan/20 ${isActive ? "animate-ripple scale-150" : "group-hover:animate-ripple"}`}></span>
                      <div className={`p-1.5 rounded-full border transition-all ${
                        isActive 
                          ? "bg-brand-cyan border-brand-cyan text-brand-navy shadow-glow scale-110" 
                          : "bg-brand-navy text-gray-300 border-white/20 group-hover:bg-brand-blue group-hover:text-white"
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      
                      {/* Name tag label */}
                      <span className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-wider bg-black/80 px-2 py-0.5 rounded border border-white/5 whitespace-nowrap transition-colors ${
                        isActive ? "text-brand-cyan border-brand-cyan/20" : "text-gray-400"
                      }`}>
                        {city.name.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}

              </div>

            </div>

            {/* Bottom guide legend inside map showcase */}
            <div className="flex justify-between items-center relative z-10 border-t border-white/[0.04] pt-4 text-[10px] font-mono text-gray-500">
              <span>* METRO HUBS CONNECTED VIA RAIL/ROAD EXPRESS</span>
              <span className="text-brand-cyan">CLICK ANCHOR PIN TO VIEW</span>
            </div>

          </div>

          {/* Right Block: Dynamic glassmorphic card showcasing active selected city info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHub}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
                className="flex-1 rounded-[32px] glass-premium border border-white/5 p-6 sm:p-8 bg-white/[0.015] flex flex-col justify-between shadow-xl"
              >
                
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-blue/15 rounded-xl text-brand-cyan border border-brand-cyan/20">
                      <MapPin className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest block">
                        Active Hub Profile
                      </span>
                      <h3 className="text-white font-black text-xl sm:text-2xl tracking-tight mt-0.5">
                        {currentHub.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mt-2">
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase block">Local Service Sectors Covered</span>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-1 font-light">
                        {currentHub.coverage}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-1">
                      <div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase block">Technical Setup</span>
                        <p className="text-brand-cyan text-xs font-semibold leading-relaxed mt-1">
                          {currentHub.installation}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase block">Express Delivery</span>
                        <p className="text-brand-light-blue text-xs font-semibold leading-relaxed mt-1">
                          {currentHub.delivery}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-5 flex items-center justify-between mt-6">
                  <div className="text-left">
                    <span className="text-gray-400 text-[10px] uppercase font-mono block">Call Local Engineer Desk</span>
                    <a href={`tel:${currentHub.phone}`} className="text-white font-extrabold text-base tracking-tight hover:text-brand-cyan duration-300 block mt-0.5">
                      {currentHub.phone}
                    </a>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-full border border-[#10b981]/20">
                    ONLINE NOW
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* GRAND ALL INDIA DELIVERY HERO BANNER PANEL */}
            <div className="p-6 rounded-[32px] bg-gradient-to-tr from-brand-blue to-teal-950/20 border border-brand-cyan/25 shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[140px]">
              {/* Airplane flight lines vector graphic bg */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-sky-950/20 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-start justify-between relative z-10">
                <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div className="px-3.5 py-1 rounded-full bg-black/40 border border-white/5 text-[9px] font-mono text-brand-cyan uppercase tracking-widest">
                  PAN India Cargo
                </div>
              </div>

              <div className="relative z-10 pt-4">
                <span className="text-white font-bold text-lg block tracking-tight">All India Express Shipping</span>
                <p className="text-gray-300 text-xs mt-1.5 leading-snug font-light">
                  Doorstep courier delivery with detailed installation video instructions and round-the-clock telephone call support is available in 100% of cities across India.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
