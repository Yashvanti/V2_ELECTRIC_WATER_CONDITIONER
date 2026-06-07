import { Phone, Mail, MapPin, Instagram, MessageSquare, ArrowUp, Globe, Shield } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#02050b] border-t border-white/5 pt-20 pb-8 px-6 overflow-hidden">
      
      {/* Background glow shadow */}
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Upper Brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Editorial Company Pitch */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div id="footer-logo-box" className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center font-bold text-white text-lg tracking-tighter shadow-md">
                V2
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight leading-none text-[15px]">V2 ELECTRONIC</span>
                <span className="text-brand-light-blue text-[9px] tracking-[0.2em] font-medium leading-none mt-1">WATER CONDITIONER</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed font-light">
              We design and manufacture high-efficiency electronic, electromagnetic hard water protection systems inside Pune, India. Protecting your homes, appliances, and pipelines safely without salt or chemical additives.
            </p>

            {/* Social handles */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/v2_water_conditioner/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 hover:border-brand-cyan hover:text-brand-cyan text-gray-300 flex items-center justify-center transition-all"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://wa.me/919172338293?text=Hi%20V2%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20get%20a%20free%20consultation%20regarding%20the%20V2%20Electronic%20Water%20Conditioner."
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 hover:border-brand-cyan hover:text-brand-cyan text-gray-300 flex items-center justify-center transition-all"
                aria-label="WhatsApp Link"
              >
                <MessageSquare className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Specific Service Contacts */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase font-mono border-l-2 border-brand-cyan pl-2.5">
              Contact & Support
            </h4>

            <div className="flex flex-col gap-4 text-xs sm:text-sm">
              <div className="flex gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] uppercase font-mono">Mobile Support Desk</span>
                  <a href="tel:+919172338293" className="hover:text-brand-cyan duration-300 block font-semibold mt-0.5">
                    +91 91723 38293
                  </a>
                </div>
              </div>

              <div className="flex gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] uppercase font-mono">Email Address</span>
                  <a href="mailto:keshavovhal9545@gmail.com" className="hover:text-brand-cyan duration-300 block mt-0.5">
                    keshavovhal9545@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] uppercase font-mono">Headquarters Location</span>
                  <span className="leading-snug mt-0.5">
                    Navnath Chowk, Vadgaon Sheri,<br />Pune 411014, MH, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Beautiful Interactive Google Map embed frame */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase font-mono border-l-2 border-brand-cyan pl-2.5">
              Location Map
            </h4>

            <div className="rounded-2xl border border-white/5 overflow-hidden w-full h-40 bg-black/40 relative">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m3!1m2!1s0x3bc2c1214c8d3567%3A0xc3f6a27ce33789b9!2sVadgaon%20Sheri%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1717750000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) opacity(85%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href="https://maps.google.com/?q=Navnath+Chowk,+Vadgaon+Sheri,+Pune+411014"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-brand-cyan hover:underline flex items-center gap-1 font-mono tracking-wider"
            >
              <span>Get driving directions on Google Maps</span>
              <span>&rarr;</span>
            </a>
          </div>

        </div>

        {/* Lower Regulatory/Keywords and Copyright segment */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-mono">
          
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span>© {currentYear} V2 Electronic Water Conditioner India. All Rights Reserved.</span>
            <span className="text-[10px] text-gray-600 block mt-1">
              Serving: Pune | Mumbai | Nashik | Nagpur | pan-India express home delivery lines.
            </span>
          </div>

          <div className="flex gap-4 items-center">
            <button
              onClick={handleScrollTop}
              className="p-3 bg-white/[0.03] border border-white/5 hover:border-brand-cyan rounded-full hover:text-brand-cyan duration-300 flex items-center justify-center"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
