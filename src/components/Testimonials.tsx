import { useState, useEffect } from "react";
import { Star, MessageSquare, Quote, ArrowLeft, ArrowRight, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  type: "text" | "whatsapp";
  avatarColor: string;
}

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Rohan Kulkarni",
      role: "Apartment Owner (3 BHK)",
      location: "Vadgaon Sheri, Pune",
      text: "We were facing severe hair fall and scaling on our bathroom glass fittings since moving in. After installing the V2 Electronic Conditioner, we noticed a massive difference in hair softness within 3 weeks. Plus, the white scale on taps has completely stopped forming!",
      rating: 5,
      type: "whatsapp",
      avatarColor: "bg-blue-600"
    },
    {
      id: "2",
      name: "Anil Deshmukh",
      role: "Housing Society Secretary",
      location: "Kharadi, Pune",
      text: "With 80 flats, cleaning geyser heating elements and unblocking choked flush tanks had become a monthly headache. We installed the high-capacity V2 model on our main feeder pipe. Maintenance calls have dropped by nearly 90%! Outstanding product.",
      rating: 5,
      type: "text",
      avatarColor: "bg-emerald-600"
    },
    {
      id: "3",
      name: "Mrs. Sneha Patil",
      role: "Bungalow Owner",
      location: "Nashik",
      text: "Borewell water hardness in our residential colony is around 1800 PPM. Regular softeners consume massive amounts of salt and waste so much water. V2 was extremely simple to wrap around our pipes. Our steam showers and geysers are completely scale-free!",
      rating: 5,
      type: "whatsapp",
      avatarColor: "bg-amber-600"
    },
    {
      id: "4",
      name: "Sanjay Mehta",
      role: "Hotel Operations Manager",
      location: "Mumbai",
      text: "We run three steam boilers and centralized hot water systems. Building scaling causes boiler tubes to overheat and consume excessive power. Since V2 was integrated, heating speeds are stable, and our yearly pipe cleanings are a thing of the past.",
      rating: 5,
      type: "text",
      avatarColor: "bg-indigo-600"
    }
  ];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 7000); // 7 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[activeIdx];

  return (
    <section className="relative py-24 bg-brand-navy-dark px-6">
      
      {/* Background ambient elements */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header section markup */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-cyan text-xs font-bold tracking-[0.25em] uppercase">User Social Proof</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
            Loved By Thousands Of <br />
            <span className="text-gradient">Indian Home Owners</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 font-light">
            Read real-world feedback from families, society builders, and commercial building managers who saved millions in plumbing maintenance bills.
          </p>
        </div>

        {/* Testimonials Core Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Direct WhatsApp mockup review frame */}
          <div className="lg:col-span-5 flex justify-center">
            
            {/* Beautiful styled chat bubbles mimicking real WhatsApp UI */}
            <div className="w-full max-w-[340px] rounded-[32px] bg-[#0b141a] border border-[#222e35] shadow-2xl p-4 overflow-hidden relative font-sans">
              
              {/* WhatsApp Mockup Header */}
              <div className="flex items-center justify-between border-b border-[#222e35] pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8.5 h-8.5 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-xs text-center border border-[#222e35]">
                    V2
                  </div>
                  <div>
                    <span className="text-white font-bold text-xs.5 tracking-tight flex items-center gap-1">
                      <span>V2 Support Desk</span>
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#0b141a]"></span>
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono block">Active Support chat</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="flex flex-col gap-3 min-h-[170px] justify-end">
                
                {/* Outgoing question */}
                <div className="self-start max-w-[85%] bg-[#202c33] text-gray-200 text-xs py-2.5 px-3 rounded-tr-xl rounded-b-xl border border-white/5 shadow-md">
                  <p className="leading-relaxed">Namaste Mrs. Sneha Patil, how is the V2 water conditioner performing after 1 month at your Nashik villa?</p>
                  <span className="text-[9px] font-mono text-gray-400 text-right block mt-1">11:42 AM</span>
                </div>

                {/* Incoming client review */}
                <div className="self-end max-w-[85%] bg-[#005c4b] text-white text-xs py-2.5 px-3 rounded-tl-xl rounded-b-xl shadow-md">
                  <p className="leading-relaxed font-medium">Hello V2 Team! Hair fall dramatically stopped for my daughter, water feels way lighter during bath, and no white stains on taps now. Fully satisfied! Highly recommend to everyone faced with hard water problems. 😊👍</p>
                  <span className="text-[9px] font-mono text-emerald-300 text-right block mt-1 flex items-center justify-end gap-1 font-extrabold">
                    <span>11:45 AM</span>
                    <span className="text-sky-300">✓✓</span>
                  </span>
                </div>

              </div>
              
              {/* Green client tag */}
              <div className="mt-4 bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-2.5 flex items-center gap-2.5">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] text-emerald-300 font-mono uppercase tracking-wider font-extrabold leading-none">
                  Verified Customer WhatsApp Feedback
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Premium quote carousel interface */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
            
            <div className="min-h-[200px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  
                  {/* Quote decoration icon */}
                  <div className="text-brand-cyan/25">
                    <Quote className="w-12 h-12 stroke-[1.5]" />
                  </div>

                  {/* Stars indicators */}
                  <div className="flex gap-1">
                    {Array.from({ length: current.rating }).map((_, sidx) => (
                      <Star key={sidx} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                    ))}
                  </div>

                  {/* Body quote text */}
                  <p className="text-white text-lg sm:text-xl font-light font-sans leading-relaxed tracking-wide italic">
                    "{current.text}"
                  </p>

                  {/* Author detail block */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-white/[0.04]">
                    <div className={`w-11 h-11 rounded-full ${current.avatarColor} flex items-center justify-center text-white font-black text-sm uppercase shadow-md`}>
                      {current.name[0]}
                    </div>
                    <div>
                      <span className="text-white font-bold text-base block tracking-tight">
                        {current.name}
                      </span>
                      <span className="text-gray-400 text-xs mt-0.5 block">
                        {current.role} &bull; <span className="text-brand-light-blue">{current.location}</span>
                      </span>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation controls buttons */}
            <div className="flex items-center justify-between gap-5 mt-10 border-t border-white/[0.04] pt-5">
              
              <div className="flex gap-1">
                {testimonials.map((_, tidx) => (
                  <button
                    key={tidx}
                    onClick={() => setActiveIdx(tidx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIdx === tidx ? "bg-brand-cyan w-6" : "bg-white/10 hover:bg-white/20"
                    }`}
                    aria-label={`Go to slide ${tidx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] text-white hover:text-brand-cyan transition-colors"
                  aria-label="Previous Slide"
                >
                  <ArrowLeft className="w-4.5 h-4.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] text-white hover:text-brand-cyan transition-colors"
                  aria-label="Next Slide"
                >
                  <ArrowRight className="w-4.5 h-4.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
