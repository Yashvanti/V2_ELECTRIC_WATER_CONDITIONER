import React, { useState } from "react";
import { MessageSquare, Calendar, ShieldCheck, Award, Zap, HelpCircle, HeartHandshake, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { LeadSubmission } from "../types";

export default function LeadCapture() {
  const [formData, setFormData] = useState<LeadSubmission>({
    name: "",
    phone: "",
    email: "",
    city: "pune",
    propertyType: "apartment",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API registration delay
    setTimeout(() => {
      // Store in client local storage
      const storedLeads = JSON.parse(localStorage.getItem("v2_leads") || "[]");
      storedLeads.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem("v2_leads", JSON.stringify(storedLeads));

      setIsSubmitting(false);
      setSubmissionComplete(true);
    }, 1200);
  };

  // Construct a beautiful deep pre-populated WhatsApp URL with user form details
  const getWhatsAppURL = () => {
    const textBase = `Hi V2 Team, I would like to get a free consultation and quote for my property.\n\n*My Details:*\n• *Name:* ${formData.name || "Customer"}\n• *Phone:* ${formData.phone || "Not specified"}\n• *Location/City:* ${formData.city.toUpperCase()}\n• *Property Type:* ${formData.propertyType.toUpperCase()}\n• *Notes:* ${formData.notes || "None"}\n\nPlease share availability for a site survey or quotation.`;
    return `https://wa.me/919172338293?text=${encodeURIComponent(textBase)}`;
  };

  return (
    <section id="consultation" className="relative py-24 bg-brand-navy-dark px-6 border-t border-white/5">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Layout core bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block copywriting and badges */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col gap-6">
            <span className="text-brand-cyan text-xs font-bold tracking-[0.25em] uppercase mx-auto lg:mx-0 block">
              Schedule Free Water Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-1 leading-tight">
              Protect Your Home Today <br />
              <span className="text-gradient">Before Scale Clogs Your Pipes</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Stop throwing thousands away on plumbing repairs, acid washes, and scale-damaged geysers. Fill out our simple form to arrange a zero-obligation diagnostic check of your pipelines today.
            </p>

            {/* Verification highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-start gap-3.5 mx-auto lg:mx-0 text-left">
                <div className="p-2 bg-brand-blue/15 rounded-xl border border-brand-cyan/20 text-brand-cyan mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-white font-bold text-sm block">12-Month Guarantee</span>
                  <span className="text-gray-400 text-xs mt-0.5 block leading-normal">Full replacement warranty covers performance.</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 mx-auto lg:mx-0 text-left">
                <div className="p-2 bg-brand-blue/15 rounded-xl border border-brand-cyan/20 text-brand-cyan mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-white font-bold text-sm block">100% Manufactured in India</span>
                  <span className="text-gray-400 text-xs mt-0.5 block leading-normal">Engineered specifically for Indian tap profiles.</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 mx-auto lg:mx-0 text-left">
                <div className="p-2 bg-brand-blue/15 rounded-xl border border-brand-cyan/20 text-brand-cyan mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-white font-bold text-sm block">1-Hour Non-Destructive Install</span>
                  <span className="text-gray-400 text-xs mt-0.5 block leading-normal">No physical pipe slicing or modifications required.</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 mx-auto lg:mx-0 text-left">
                <div className="p-2 bg-brand-blue/15 rounded-xl border border-brand-cyan/20 text-brand-cyan mt-0.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-white font-bold text-sm block">Zero Wastewater or Salt Waste</span>
                  <span className="text-gray-400 text-xs mt-0.5 block leading-normal">Keeps precious drinking minerals inside the stream.</span>
                </div>
              </div>
            </div>

            {/* Direct Instant WhatsApp badge block */}
            <div className="p-4 rounded-2xl bg-[#0b141a]/60 border border-[#222e35] text-left mt-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-600/10 rounded-xl text-green-400">
                  <MessageSquare className="w-5 h-5 fill-green-400" />
                </div>
                <div>
                  <span className="text-white font-bold text-xs">Prefer Direct Chat?</span>
                  <span className="text-gray-400 text-[10.5px] mt-0.5 block">Talk immediately to managing partner Keshav Ovhal.</span>
                </div>
              </div>
              <a
                href="https://wa.me/919172338293?text=Hi%20V2%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20get%20a%20free%20consultation%20regarding%20the%20V2%20Electronic%20Water%20Conditioner."
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-full text-white text-[11px] font-bold tracking-wide uppercase transition-colors"
              >
                Launch WhatsApp
              </a>
            </div>

          </div>

          {/* Right Block: Luxury Apple-Inspired input form panel */}
          <div className="lg:col-span-6">
            <div className="rounded-[36px] bg-[#020610] border border-white/15 p-6 sm:p-8 relative overflow-hidden shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue"></div>

              {!submissionComplete ? (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="text-white font-extrabold text-2xl tracking-tight">Interactive Quote Builder</h3>
                    <p className="text-gray-400 text-xs mt-1">Submit your property specifics for custom pricing estimates.</p>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Property Type</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                      >
                        <option value="apartment" className="bg-[#020610]">Apartment/Flat</option>
                        <option value="villa" className="bg-[#020610]">Bungalow/Villa</option>
                        <option value="society" className="bg-[#020610]">Housing Society</option>
                        <option value="commercial" className="bg-[#020610]">Commercial/Hotel</option>
                        <option value="other" className="bg-[#020610]">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Serving City</label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                      >
                        <option value="pune" className="bg-[#020610]">Pune</option>
                        <option value="mumbai" className="bg-[#020610]">Mumbai</option>
                        <option value="nashik" className="bg-[#020610]">Nashik</option>
                        <option value="nagpur" className="bg-[#020610]">Nagpur</option>
                        <option value="other" className="bg-[#020610]">Other City</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Rahul Deshmukh"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan placeholder:text-gray-600 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Primary Phone Number (Preferably WhatsApp)</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 91234 56789"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan placeholder:text-gray-600 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Brief Notes or Water Source details (Optional)</label>
                    <textarea
                      name="notes"
                      rows={2}
                      placeholder="e.g. Source is ground Borewell water, having scaling on bathroom taps."
                      value={formData.notes}
                      onChange={handleChange}
                      className="bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan placeholder:text-gray-600 resize-none transition-colors"
                    />
                  </div>

                  {/* Submission buttons list */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-4 rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-sm tracking-wide duration-300 flex items-center justify-center gap-2 border border-white/10 focus:outline-none disabled:opacity-50 text-center"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{isSubmitting ? "Book Slot..." : "Request Call Quote"}</span>
                    </button>

                    <a
                      href={getWhatsAppURL()}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide duration-300 flex items-center justify-center gap-2 group text-center"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[10px] text-gray-500 text-center uppercase tracking-wider">
                    * Zero-spam guaranteed. Data processed by secure local support staff.
                  </p>
                </form>
              ) : (
                <div className="py-2 flex flex-col items-center text-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/15 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan animate-pulse">
                    <CheckCircle className="w-8 h-8 text-brand-cyan" />
                  </div>
                  
                  <div>
                    <span className="text-[11px] font-mono text-brand-cyan tracking-widest uppercase">Lead Submitted Safely</span>
                    <h3 className="text-white font-extrabold text-2xl tracking-tight mt-1">Thank You, {formData.name}!</h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      We have queued your custom property specifications in our system. A technician will call or message you shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 w-full text-left">
                    <span className="text-[9px] font-mono text-gray-500 uppercase block">Submission Summary</span>
                    <div className="flex flex-col gap-1 text-xs text-gray-300 font-mono mt-2">
                      <div>PROPERTY: <span className="text-white font-bold">{formData.propertyType.toUpperCase()}</span></div>
                      <div>LOCATION: <span className="text-white font-bold">{formData.city.toUpperCase()}</span></div>
                      <div>PHONE: <span className="text-white font-bold">{formData.phone}</span></div>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppURL()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide duration-300 flex items-center justify-center gap-2 shadow-md text-center"
                  >
                    <MessageSquare className="w-5 h-5 fill-white" />
                    <span>Confirm Order on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmissionComplete(false)}
                    className="text-xs text-slate-500 hover:text-white underline font-mono tracking-wider focus:outline-none mt-2"
                  >
                    SUBMIT ANOTHER SLATE REQUEST
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
