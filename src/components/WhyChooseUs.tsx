import { useEffect, useState, useRef } from "react";
import { Award, ShieldCheck, HeartHandshake, Truck } from "lucide-react";
import { motion, useInView } from "motion/react";

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  desc: string;
  icon: any;
}

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const statsList: StatItem[] = [
    {
      id: "homes",
      target: 5000,
      suffix: "+",
      label: "Homes Protected",
      desc: "Trusted by apartments, independent villas, housing cooperative societies, and hospitality builders throughout India.",
      icon: ShieldCheck
    },
    {
      id: "chem",
      target: 100,
      suffix: "%",
      label: "Chemical Free",
      desc: "Utilizes advanced electronic wave physics rather than dangerous chemicals, toxic salts, or resins that damage garden soil.",
      icon: Award
    },
    {
      id: "support",
      target: 24,
      suffix: "/7 Dual",
      label: "Customer Support",
      desc: "Access our localized service helpline, expert water analysis advice, and on-call hardware diagnostics anytime you need.",
      icon: HeartHandshake
    },
    {
      id: "delivery",
      target: 100,
      suffix: "%",
      label: "All India Delivery",
      desc: "Fast, reliable express shipping with secure packaging and professional local technician connections in major metro hubs.",
      icon: Truck
    }
  ];

  return (
    <section className="relative py-24 bg-brand-navy px-6">
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-light-blue text-xs font-bold tracking-[0.25em] uppercase">Company Performance Metrics</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
            The Industry Standard For <br />
            <span className="text-gradient">Indian Water Conditioning</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-light animate-pulse">
            Tested, certified, and engineered in India. We build robust systems that are proven to deliver tangible water protection results.
          </p>
        </div>

        {/* Counter GRID panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-6 sm:p-8 rounded-[32px] glass-premium border border-white/5 bg-white/[0.01] hover:border-brand-cyan/20 hover:shadow-glow duration-300 flex flex-col justify-between"
              >
                
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-brand-blue/10 rounded-2xl text-brand-cyan border border-brand-cyan/20 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Stat Verified</span>
                </div>

                {/* Animated counter numerals */}
                <div className="my-2">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-white block">
                    <Counter value={stat.target} active={isInView} />
                    <span className="text-brand-cyan font-extrabold">{stat.suffix}</span>
                  </span>
                  
                  <span className="text-white font-bold text-base sm:text-lg block mt-3 tracking-tight">
                    {stat.label}
                  </span>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm mt-2.5 font-light leading-relaxed">
                  {stat.desc}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Simple internal helper component for scrolling counters
function Counter({ value, active }: { value: number; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const end = value;
    const duration = 1200; // ms
    const increment = Math.ceil(end / (duration / 16)); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, active]);

  return <>{count.toLocaleString()}</>;
}
