import React from "react";
import { 
  ShieldAlert, 
  Droplets, 
  Flame, 
  Leaf, 
  Hammer, 
  Cpu, 
  Zap, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";

interface BenefitCard {
  title: string;
  desc: string;
  icon: any;
  highlightColor: string;
  badge: string;
}

export default function Benefits() {
  const cards: BenefitCard[] = [
    {
      title: "Prevents Calcium Buildup",
      desc: "Neutralizes calcification by transforming coarse binders into neutral suspended micro-particles that simply wash away.",
      icon: ShieldAlert,
      highlightColor: "from-blue-500/20 to-cyan-500/10",
      badge: "Scale Block"
    },
    {
      title: "Protects Household Pipelines",
      desc: "Stops internal blockage across main copper, CPVC, and galvanized iron pipes, preserving full structural line pressure.",
      icon: Cpu,
      highlightColor: "from-indigo-500/20 to-brand-blue/15",
      badge: "Infrastructural Protection"
    },
    {
      title: "Increases Appliance Life",
      desc: "Protects expensive geysers, boilers, washing machines, and dishwashers from failure, cutting utility repair services completely.",
      icon: Flame,
      highlightColor: "from-amber-500/20 to-orange-500/10",
      badge: "Appliance Lifespan"
    },
    {
      title: "Chemical-Free Operation",
      desc: "Requires zero salt tablets, chemical resins, complex cartridge filters, or toxic softeners. 100% safe for consumption & garden soil.",
      icon: Leaf,
      highlightColor: "from-emerald-500/20 to-teal-500/10",
      badge: "Eco-Friendly Design"
    },
    {
      title: "Effortless Installation",
      desc: "Installs directly on existing pipelines in under 1 hour without plumbing alterations, pipe cutting, or structural reconstruction.",
      icon: Hammer,
      highlightColor: "from-sky-500/20 to-cyan-500/10",
      badge: "1-Hour Integration"
    },
    {
      title: "Virtually Low Maintenance",
      desc: "Designed with fully solid-state computing, requiring zero consumable replacements, back-flushing, or ongoing manual support.",
      icon: Sparkles,
      highlightColor: "from-pink-500/20 to-purple-500/10",
      badge: "Zero Consumables"
    },
    {
      title: "Massively Saves Energy",
      desc: "Guarantees scale-free water heating coils, maintaining 100% heat transmission speed to lower monthly electricity use by up to 21%.",
      icon: Zap,
      highlightColor: "from-yellow-500/20 to-amber-500/10",
      badge: "Efficiency Increase"
    },
    {
      title: "Better Faucet & Bathing Experience",
      desc: "Restores natural water lathering. Reduces scalp irritation, dryness, hair fall, and spots on glass partitions & chrome faucets.",
      icon: Droplets,
      highlightColor: "from-cyan-500/20 to-blue-500/10",
      badge: "Dermatological Improvement"
    }
  ];

  const handleCTAAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <section id="benefits" className="relative py-24 bg-brand-navy px-6">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-950/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-950/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-light-blue text-xs font-bold tracking-[0.25em] uppercase">Value Advantages</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
            Designed for Comfort, Engineered <br />
            <span className="text-gradient">To Last Generations</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-light">
            V2 delivers robust high-pressure pipe scale prevention with substantial economic savings. Experience total hardware protection and physical wellness benefits.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative rounded-[28px] glass-premium border border-white/5 p-6 hover:border-brand-cyan/25 hover:shadow-glow transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                
                {/* Gradient glowing backdrop */}
                <div className={`absolute -inset-1 bg-gradient-to-tr ${card.highlightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur`}></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/[0.03] rounded-2xl text-white group-hover:text-brand-cyan group-hover:scale-110 transition-all duration-300 border border-white/5 shadow-inner">
                      <CardIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg tracking-tight group-hover:text-brand-cyan transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-3 font-light">
                    {card.desc}
                  </p>
                </div>

                {/* Micro hover transition line */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Callout */}
        <div className="mt-16 text-center">
          <a
            href="#consultation"
            onClick={handleCTAAnchor}
            className="inline-flex items-center gap-2 text-brand-light-blue hover:text-brand-cyan text-sm font-semibold tracking-wide transition-colors duration-300 group"
          >
            <span>Learn how V2 can protect your household specifically</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
