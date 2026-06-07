import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("1");

  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "What is hard water and what problems does it cause?",
      answer: "Hard water is water that contains high concentrations of dissolved minerals, primarily calcium and magnesium carbonates. It enters homes and slowly attaches to internal pipe surfaces, building thick, concrete-like calcium scales. Over time, this clogs plumbing, reduces thermal transfer speed inside geysers (increasing electric bills), prevents hand soap from lathering, triggers severe hair loss/dry scalp, and causes commercial boilers/heaters to fail prematurely."
    },
    {
      id: "2",
      question: "Does the V2 Conditioner soften the water physically like chemical softeners?",
      answer: "No. Traditional water softeners chemically replace calcium minerals with sodium (salt), which changes drinking water taste and wastes massive amounts of water during daily rinse cycles. V2 is an electronic water conditioner. It uses physical electromagnetic induction sweeps to shatter the bonding structure of calcium carbonate. Minerals remain inside the water (keeping it healthy for drinking) but are physically disabled from sticking to pipes, coils, shower glasses, or bathroom tiles."
    },
    {
      id: "3",
      question: "Is V2 100% chemical-free and safe for children and gardens?",
      answer: "Yes, absolutely! V2 is 100% eco-friendly and food-safe. Because it doesn't add any chemical salts, resins, or toxic compounds to the water supply, the treated water retains its natural balance. It is completely safe and healthy for children to bathe in, dogs to drink, and garden plants to absorb without salinizing surrounding soil beds."
    },
    {
      id: "4",
      question: "Does it work effectively for Borewell, municipal, and mix water supplies?",
      answer: "Yes, V2 is engineered inside India specifically to handle high-hardness variables found in Borewell, municipal pipelines, tankers, and mix water feeder tanks. It operates effectively on water hardness indexes up to 35,000 PPM, neutralizing minerals across CPVC, UPVC, copper, galvanized iron, and steel lines."
    },
    {
      id: "5",
      question: "How much electricity does the V2 control computer consume?",
      answer: "V2 uses solid-state processors and is designed for ultra-low power consumption. It operates on a safe 12V low-voltage DC grid configuration, drawing only 1.8 Watts of power. That means running V2 continuously 24 hours a day for a full calendar year consumes less than 16 units of electricity, costing roughly ₹120-150 annually on house utility metrics."
    },
    {
      id: "6",
      question: "How long does professional installation take and does it require pipe cutting?",
      answer: "Standard home installation takes under 60 minutes. The integration process is completely non-intrusive and requires zero pipe-cutting, zero plumbing line changes, or structural damage. The technology works by wrapping multi-strand insulated copper wiring tightly around the outside of your main inlet pipe. Plumbing continues running, and you can self-install easily using our guided remote support package if you live in distant areas."
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 bg-brand-navy px-6">
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-sky-950/20 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-light-blue text-xs font-bold tracking-[0.25em] uppercase">Water Engineering FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-light">
            Everything you need to know about water descaling, plumbing safety, and energy savings.
          </p>
        </div>

        {/* Accordions Core Thread Container */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? "bg-white/[0.02] border-brand-cyan/30 shadow-lg shadow-brand-blue/5" 
                    : "bg-white/[0.01] border-white/5 hover:border-white/10"
                }`}
              >
                {/* Trigger Row Button */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3.5 pr-2">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? "text-brand-cyan" : "text-gray-500"}`} />
                    <span className="text-white font-bold text-base sm:text-lg tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`p-2 rounded-xl transition-all ${
                    isOpen ? "bg-brand-cyan text-brand-navy" : "bg-white/5 text-gray-400"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 -mt-1 border-t border-white/[0.03] pt-4">
                        <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
