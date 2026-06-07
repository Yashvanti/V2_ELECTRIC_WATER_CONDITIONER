import React, { useState, useEffect } from "react";
import { Star, Quote, ArrowLeft, ArrowRight, UserCheck, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
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
      avatarColor: "bg-blue-600"
    },
    {
      id: "2",
      name: "Anil Deshmukh",
      role: "Housing Society Secretary",
      location: "Kharadi, Pune",
      text: "With 80 flats, cleaning geyser heating elements and unblocking choked flush tanks had become a monthly headache. We installed the high-capacity V2 model on our main feeder pipe. Maintenance calls have dropped by nearly 90%! Outstanding product.",
      rating: 5,
      avatarColor: "bg-emerald-600"
    },
    {
      id: "3",
      name: "Mrs. Sneha Patil",
      role: "Bungalow Owner",
      location: "Nashik",
      text: "Borewell water hardness in our residential colony is around 1800 PPM. Regular softeners consume massive amounts of salt and waste so much water. V2 was extremely simple to wrap around our pipes. Our steam showers and geysers are completely scale-free!",
      rating: 5,
      avatarColor: "bg-amber-600"
    },
    {
      id: "4",
      name: "Sanjay Mehta",
      role: "Hotel Operations Manager",
      location: "Mumbai",
      text: "We run three steam boilers and centralized hot water systems. Building scaling causes boiler tubes to overheat and consume excessive power. Since V2 was integrated, heating speeds are stable, and our yearly pipe cleanings are a thing of the past.",
      rating: 5,
      avatarColor: "bg-indigo-600"
    }
  ];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  // Touch handlers for swipe support on Mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Helpers to fetch index wrapping nicely
  const getIndex = (offset: number) => {
    return (activeIdx + offset) % testimonials.length;
  };

  // Render testimonial card
  const renderCard = (offset: number, isSecondary = false) => {
    const item = testimonials[getIndex(offset)];
    return (
      <div 
        className={`p-6 sm:p-7 rounded-[28px] border border-white/5 bg-white/[0.01] hover:border-brand-cyan/20 transition-all duration-300 flex flex-col justify-between h-[280px] ${
          isSecondary ? "opacity-40 scale-95 select-none" : ""
        }`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <Quote className="w-8 h-8 text-brand-cyan/20 stroke-[1.5]" />
            <div className="flex gap-0.5">
              {Array.from({ length: item.rating }).map((_, sidx) => (
                <Star key={sidx} className="w-3.5 h-3.5 fill-brand-cyan text-brand-cyan" />
              ))}
            </div>
          </div>
          <p className="text-gray-200 text-xs sm:text-sm font-light mt-1 text-left leading-relaxed italic line-clamp-5">
            "{item.text}"
          </p>
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-white/[0.03]">
          <div className={`w-9 h-9 rounded-full ${item.avatarColor} flex items-center justify-center text-white font-extrabold text-xs uppercase`}>
            {item.name[0]}
          </div>
          <div className="text-left">
            <span className="text-white font-bold text-xs sm:text-sm block tracking-tight">
              {item.name}
            </span>
            <span className="text-gray-400 text-[10px] sm:text-xs block mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis max-w-[170px]">
              {item.role} &bull; <span className="text-brand-light-blue">{item.location}</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-24 bg-brand-navy-dark px-6">
      
      {/* Background ambient elements */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
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

        {/* Testimonials Adaptive Viewport Container */}
        <div className="max-w-6xl mx-auto relative px-1 sm:px-4">
          
          {/* A. DESKTOP VIEWPORT: 3 Visible Cards side-by-side */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {renderCard(0)}
            {renderCard(1)}
            {renderCard(2)}
          </div>

          {/* B. TABLET VIEWPORT: 2 Visible Cards side-by-side */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {renderCard(0)}
            {renderCard(1)}
          </div>

          {/* C. MOBILE VIEWPORT: 1 Card with touch swipe gesture triggers */}
          <div 
            className="block md:hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {renderCard(0)}
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-3">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-center">
                ← Swipe card left or right to browse →
              </span>
            </div>
          </div>

          {/* Interactive controls and slider navigation dots */}
          <div className="flex items-center justify-between gap-5 mt-10 border-t border-white/[0.04] pt-6 max-w-6xl mx-auto">
            
            <div className="flex gap-1.5">
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

        {/* Interactive Verification WhatsApp Badge Below Slider */}
        <div className="max-w-2xl mx-auto mt-16 p-4.5 rounded-3xl bg-[#0b141a]/60 border border-[#222e35] text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-green-600/15 rounded-2xl text-emerald-400">
              <MessageSquare className="w-5 h-5 fill-emerald-400 text-emerald-400" />
            </div>
            <div>
              <span className="text-white font-bold text-xs sm:text-sm block">Live WhatsApp Verification</span>
              <span className="text-gray-400 text-[11px] mt-0.5 block leading-normal">
                Want to see raw chat prints from actual customers? Ask us on WhatsApp.
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/919172338293?text=Hi%20V2%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20get%20a%20free%20consultation%20regarding%20the%20V2%20Electronic%20Water%20Conditioner."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-full text-white text-[11px] font-bold tracking-wide uppercase transition-colors text-center shrink-0"
          >
            Ask for Raw Prints
          </a>
        </div>

      </div>
    </section>
  );
}
