import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Droplet } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle Mouse movement for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const x = (clientX / width - 0.5) * 35; // move range
      const y = (clientY / height - 0.5) * 35;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Background Canvas for flowing flowing particles (micro water currents)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    // Particle class simulating flowing pure water droplets with light refraction
    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      alpha: number = 0;
      color: string = "";

      constructor() {
        this.reset();
        this.y = Math.random() * height; // initial spread
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 10;
        this.size = Math.random() * 3.5 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = -(Math.random() * 1.5 + 0.5); // float up like air bubbles or pure currents
        this.alpha = Math.random() * 0.5 + 0.1;
        const blueHue = Math.random() > 0.5 ? 200 : 180;
        this.color = `hsla(${blueHue}, 100%, 75%, ${this.alpha})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Ripple/wave lateral swing
        this.speedX += Math.sin(this.y * 0.01) * 0.05;

        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset();
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.shadowColor = "#00E5FF";
        context.shadowBlur = this.size > 2.5 ? 8 : 0;
        context.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: 60 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Soft deep navy backdrop gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        width
      );
      bgGrad.addColorStop(0, "#081225");
      bgGrad.addColorStop(1, "#020710");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw light rays from the left bottom (flowing descaled freshness)
      ctx.beginPath();
      const rayGrad = ctx.createRadialGradient(
        width * 0.7,
        height * 0.6,
        50,
        width * 0.7,
        height * 0.6,
        600
      );
      rayGrad.addColorStop(0, "rgba(0, 87, 216, 0.07)");
      rayGrad.addColorStop(0.5, "rgba(0, 174, 239, 0.02)");
      rayGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = rayGrad;
      ctx.arc(width * 0.7, height * 0.6, 600, 0, Math.PI * 2);
      ctx.fill();

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-6">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-1 opacity-60"></div>

      {/* Glowing blurred blobs */}
      <div className="absolute top-1/4 left-1/4 w-[280px] h-[280px] rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none z-1"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-cyan/8 blur-[120px] pointer-events-none z-1 animate-pulse"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Copywriting Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-center lg:text-left">
          
          {/* Tech Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-premium text-brand-cyan text-xs font-semibold tracking-wider uppercase mx-auto lg:mx-0 shadow-sm border border-brand-cyan/25"
          >
            <Zap className="w-3.5 h-3.5 animate-pulse text-brand-cyan" />
            <span>Next-Gen Electromagnetic Protection</span>
          </motion.div>

          {/* Premium Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-white"
          >
            Stop Hard Water <br className="hidden sm:inline" />
            <span className="text-gradient">Damage Before It Starts</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
          >
            Protect pipelines, water heaters, showers, and modern home appliances with the leading chemical-free V2 Electronic Water Conditioner. Designed and manufactured in India.
          </motion.p>

          {/* Live Protection Stats Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="grid grid-cols-3 gap-3 md:gap-4 w-full max-w-lg mt-2 mx-auto lg:mx-0"
          >
            <div className="glass-premium p-3 rounded-2xl flex flex-col items-center lg:items-start border border-white/5">
              <ShieldCheck className="w-5 h-5 text-brand-light-blue mb-1" />
              <span className="text-white font-bold text-sm tracking-tight">Scale-Free</span>
              <span className="text-gray-400 text-[10px] uppercase tracking-wider">Pipelines</span>
            </div>
            <div className="glass-premium p-3 rounded-2xl flex flex-col items-center lg:items-start border border-white/5">
              <Droplet className="w-5 h-5 text-brand-cyan mb-1" />
              <span className="text-white font-bold text-sm tracking-tight">Zero Salts</span>
              <span className="text-gray-400 text-[10px] uppercase tracking-wider">No Maintenance</span>
            </div>
            <div className="glass-premium p-3 rounded-2xl flex flex-col items-center lg:items-start border border-white/5">
              <Zap className="w-5 h-5 text-yellow-400 mb-1" />
              <span className="text-white font-bold text-sm tracking-tight">Saves Power</span>
              <span className="text-gray-400 text-[10px] uppercase tracking-wider">Eco-Friendly</span>
            </div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 justify-center lg:justify-start"
          >
            {/* Consultation Button */}
            <a
              href="#consultation"
              onClick={handleConsultationClick}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-light-blue hover:from-brand-blue hover:to-brand-cyan text-white font-semibold text-sm tracking-wide shadow-lg shadow-brand-blue/30 hover:shadow-brand-cyan/20 duration-300 flex items-center justify-center gap-2 group border border-white/10"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919172338293?text=Hi%20V2%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20get%20a%20free%20consultation%20regarding%20the%20V2%20Electronic%20Water%20Conditioner."
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full glass-premium hover:bg-white/10 text-white font-semibold text-sm tracking-wide duration-300 flex items-center justify-center gap-2 border border-white/10 group shadow-md"
            >
              <MessageSquare className="w-4.5 h-4.5 text-green-400 fill-green-400" />
              <span>WhatsApp Inquiry</span>
            </a>
          </motion.div>

        </div>

        {/* Right Side: Luxury Rotatable interactive V2 Conditioner Unit representation */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-10 lg:mt-0">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
            className="w-full max-w-[380px] aspect-[4/5] relative transition-transform duration-200 ease-out flex flex-col items-center justify-center"
          >
            
            {/* Interactive Glow Base behind the product */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-cyan/5 rounded-[40px] blur-3xl -z-10 pointer-events-none"></div>

            {/* Glowing Pipeline segment going through the core */}
            <div className="absolute w-[18px] h-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-blue-900/60 via-brand-cyan/50 to-blue-900/60 rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
              {/* Animated water molecules inside pipeline */}
              <div className="absolute w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,229,255,0.7)_50%,transparent_100%)] bg-[size:100%_120px] animate-water-flow opacity-80" style={{ animationDuration: "2s" }}></div>
            </div>

            {/* The V2 Control unit Box element (Apple/Nothing inspired minimalist cyber look) */}
            <div className="w-[280px] h-[340px] rounded-[36px] glass-premium relative border border-white/15 flex flex-col justify-between p-6 shadow-2xl overflow-hidden backdrop-blur-2xl">
              
              {/* Internal diagonal stripes representing premium tech */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(0,174,239,0.06)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>

              {/* V2 Branding Overlay */}
              <div className="flex items-center justify-between w-full relative z-10">
                <div className="flex flex-col">
                  <span className="text-white font-extrabold text-2xl tracking-tighter">V2</span>
                  <span className="text-brand-light-blue text-[8px] tracking-[0.2em] font-bold">DIGITAL INDUCTION</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-brand-cyan/20 flex items-center justify-center bg-brand-navy-dark/80 relative overflow-hidden">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-ping absolute"></span>
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
                </div>
              </div>

              {/* Central Dynamic LED Display (Nothing aesthetic) */}
              <div className="flex flex-col items-center justify-center relative my-4 flex-1">
                {/* Glowing neon water frequency line */}
                <svg className="w-full h-20 overflow-visible" viewBox="0 0 200 80">
                  <path
                    d="M 10 40 Q 30 10 50 40 T 90 40 T 130 40 T 170 40 T 190 40"
                    fill="none"
                    stroke="url(#neon-grad)"
                    strokeWidth="3.5"
                    className="stroke-brand-cyan"
                    strokeDasharray="6"
                    style={{ animation: "dash 1.5s linear infinite" }}
                  />
                  <defs>
                    <linearGradient id="neon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0057D8" />
                      <stop offset="50%" stopColor="#00E5FF" />
                      <stop offset="100%" stopColor="#00AEEF" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="glass-premium px-4 py-1.5 rounded-full border border-brand-cyan/20 bg-black/40 mt-3">
                  <span className="text-[11px] font-mono tracking-widest text-brand-cyan animate-pulse">ACTIVE: 18.4 KHz</span>
                </div>
              </div>

              {/* Digital specification metadata text */}
              <div className="flex justify-between items-end w-full relative z-10 pt-2 border-t border-white/5 font-mono text-[9px] text-gray-400">
                <div className="flex flex-col gap-0.5">
                  <span>MODEL: V2-D40</span>
                  <span>POWER: 12V DC ULTRA-LOW</span>
                </div>
                <div className="text-right flex flex-col gap-0.5">
                  <span>RANGE: PAN-HOME</span>
                  <span className="text-brand-cyan">MADE IN INDIA</span>
                </div>
              </div>

              {/* Side highlight reflection line */}
              <div className="absolute top-0 right-0 w-[150%] h-[120%] bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 pointer-events-none"></div>
            </div>

            {/* Glowing coils wrapped around the pipeline segment (The Antenna lines) */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-28 h-6 flex flex-col gap-0.5 pointer-events-none">
              <div className="h-[2px] bg-yellow-500 shadow-[0_0_6px_#f59e0b] w-full origin-center animate-pulse"></div>
              <div className="h-[2.5px] bg-yellow-500 shadow-[0_0_8px_#f59e0b] w-[90%] mx-auto animate-pulse"></div>
              <div className="h-[2px] bg-yellow-500 shadow-[0_0_6px_#f59e0b] w-[80%] mx-auto animate-pulse"></div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-28 h-6 flex flex-col gap-0.5 pointer-events-none">
              <div className="h-[2px] bg-yellow-500 shadow-[0_0_6px_#f59e0b] w-full origin-center animate-pulse"></div>
              <div className="h-[2.5px] bg-yellow-500 shadow-[0_0_8px_#f59e0b] w-[90%] mx-auto animate-pulse"></div>
              <div className="h-[2px] bg-yellow-500 shadow-[0_0_6px_#f59e0b] w-[80%] mx-auto animate-pulse"></div>
            </div>

            {/* Drag/Rotate Visual Guide badge */}
            <div className="absolute -bottom-10 glass-premium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 border border-white/5 shadow-md">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-cyan animate-ping"></span>
              <span className="text-[10px] font-medium tracking-wider text-gray-300 uppercase">Hover/Move Mouse to Rotate</span>
            </div>

          </motion.div>

        </div>

      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
      `}</style>
    </section>
  );
}
