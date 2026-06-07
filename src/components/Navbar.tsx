import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Problem", href: "#problem" },
    { name: "How V2 Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "360° View", href: "#showcase" },
    { name: "Timeline", href: "#timeline" },
    { name: "FAQ", href: "#faq" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-navy-dark/85 backdrop-blur-md border-b border-white/5 py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand */}
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, "#")} 
          className="flex items-center gap-2.5 group"
        >
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center overflow-hidden shadow-md shadow-brand-blue/25">
            <span className="font-bold text-white text-lg tracking-tighter group-hover:scale-110 transition-transform duration-300">V2</span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/40 animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-tight leading-none">V2 ELECTRONIC</span>
            <span className="text-brand-light-blue text-[10px] tracking-[0.18em] font-medium leading-none mt-1">WATER CONDITIONER</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-gray-300 hover:text-brand-cyan text-sm font-medium tracking-wide transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-cyan after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919172338293"
            className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-brand-light-blue" />
            <span>+91 91723 38293</span>
          </a>
          <a
            href="#consultation"
            onClick={(e) => handleLinkClick(e, "#consultation")}
            className="flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-light-blue hover:from-brand-blue hover:to-brand-cyan text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg shadow-brand-blue/20 hover:shadow-brand-cyan/20 transition-all duration-300 group"
          >
            <span>Get Quote</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-navy-dark/95 backdrop-blur-lg border-b border-white/5 absolute top-full left-0 right-0 py-6 px-6 shadow-2xl flex flex-col gap-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-300 hover:text-brand-cyan text-base font-medium py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="https://wa.me/919172338293?text=Hi%20V2%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20get%20a%20free%20consultation%20regarding%20the%20V2%20Electronic%20Water%20Conditioner."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-medium py-3 rounded-full transition-colors"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>WhatsApp Now</span>
            </a>
            <a
              href="#consultation"
              onClick={(e) => handleLinkClick(e, "#consultation")}
              className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-medium py-3 rounded-full transition-all"
            >
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
