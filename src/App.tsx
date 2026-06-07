import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Showcase from "./components/Showcase";
import Timeline from "./components/Timeline";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ServiceMap from "./components/ServiceMap";
import FAQ from "./components/FAQ";
import LeadCapture from "./components/LeadCapture";
import Footer from "./components/Footer";

export default function App() {
  // Inject SEO metadata schemas dynamically into the document head
  useEffect(() => {
    // 1. Set optimized document title & page description
    document.title = "V2 Electronic Water Conditioner | Hard Water Scale Prevention India";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Protect your geysers, pipelines & household appliances with V2 Electronic Water Conditioner - the premium, eco-friendly, chemical-free descaler built in India.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Protect your geysers, pipelines & household appliances with V2 Electronic Water Conditioner - the premium, eco-friendly, chemical-free descaler built in India.";
      document.head.appendChild(meta);
    }

    // 2. Local Business, Product, and FAQ JSON-LD Schema markup injections
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://v2waterconditioner.com/#localbusiness",
          "name": "V2 Electronic Water Conditioner",
          "image": "https://v2waterconditioner.com/assets/logo.png",
          "telephone": "+919172338293",
          "email": "keshavovhal9545@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Navnath Chowk, Vadgaon Sheri",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411014",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5552,
            "longitude": 73.9213
          },
          "url": "https://v2waterconditioner.com",
          "sameAs": [
            "https://www.instagram.com/v2_water_conditioner/"
          ]
        },
        {
          "@type": "Product",
          "@id": "https://v2waterconditioner.com/#product",
          "name": "V2 Electronic Water Conditioner",
          "description": "Premium industrial-grade electromagnetic water descaling conditioner preventing pipelines scale and calcium deposits in Indian houses and geysers without chemicals or salts.",
          "category": "Water Treatment Appliance",
          "brand": {
            "@type": "Brand",
            "name": "V2"
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://v2waterconditioner.com/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is hard water?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hard water is water containing high levels of dissolved calcium and magnesium carbonates, which solidify to form pipeline blockage and damage geysers."
              }
            },
            {
              "@type": "Question",
              "name": "Does V2 soften water?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. It is an electronic conditioner. It does not replace healthy drinking minerals with sodium chemical salts, but shatters bonding properties physically."
              }
            }
          ]
        }
      ]
    };

    const scriptId = "v2-ldjson-schemas";
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = scriptId;
      scriptEl.type = "application/ld+json";
      document.head.appendChild(scriptEl);
    }
    
    scriptEl.text = JSON.stringify(schemaMarkup);

    return () => {
      // Clean up dynamic script elements on unmount if necessary
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy-dark text-[#F8FBFF] relative font-sans leading-relaxed selection:bg-brand-cyan/30 selection:text-white">
      
      {/* 1. Header/Navbar */}
      <Navbar />

      {/* 2. Hero Presentation Stage */}
      <Hero />

      {/* 3. The Hard Water Problem Simulator */}
      <ProblemSection />

      {/* 4. How the Tech Science Works (Hotspots panel) */}
      <HowItWorks />

      {/* 5. Benefits Bento Sections */}
      <Benefits />

      {/* 6. Interactive Compare Slider */}
      <BeforeAfterSlider />

      {/* 7. Product Showcase Assembly Sandbox */}
      <Showcase />

      {/* 8. Process Timeline */}
      <Timeline />

      {/* 9. Why Choose Us (Counters Board) */}
      <WhyChooseUs />

      {/* 10. Social Reviews and Testimonials Carousel */}
      <Testimonials />

      {/* 11. Geographic Regional Service Hub Map */}
      <ServiceMap />

      {/* 12. FAQ List Accordion */}
      <FAQ />

      {/* 13. Interactive Form Lead Capture and CTAs */}
      <LeadCapture />

      {/* 14. Responsive Dark-Navy Footer */}
      <Footer />

    </div>
  );
}
