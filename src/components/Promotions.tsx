/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Tag, 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { PROMOTIONS } from '../data';

export default function Promotions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Auto-slide effect every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PROMOTIONS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROMOTIONS.length - 1 : prev - 1));
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const currentPromo = PROMOTIONS[currentIndex];

  return (
    <section 
      id="promociones" 
      className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            PROMOCIONES ACTIVAS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-4 mb-4">
            Combos y Descuentos Exclusivos
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto" />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Navigation Controls Left */}
          <button
            onClick={handlePrev}
            className="absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary border border-slate-100 dark:border-slate-800 shadow-md focus:outline-none transition-all hover:scale-105 active:scale-95"
            title="Promoción Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Navigation Controls Right */}
          <button
            onClick={handleNext}
            className="absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary border border-slate-100 dark:border-slate-800 shadow-md focus:outline-none transition-all hover:scale-105 active:scale-95"
            title="Siguiente Promoción"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Banner Frame with Glassmorphism / Vibrant Layout */}
          <div className="overflow-hidden rounded-[36px] min-h-[300px] md:min-h-[260px] relative shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`w-full h-full p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 ${currentPromo.bannerColor} ${currentPromo.textColor}`}
              >
                {/* Decorative graphics */}
                <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-40 pointer-events-none" />

                {/* Left Side: Offer detail */}
                <div className="flex-grow text-center md:text-left relative z-10">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black tracking-widest uppercase mb-4">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{currentPromo.discount}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3">
                    {currentPromo.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base opacity-90 max-w-xl font-medium leading-relaxed">
                    {currentPromo.subtitle}
                  </p>
                </div>

                {/* Right Side: Promo Code Copier */}
                <div className="flex-shrink-0 w-full md:w-auto relative z-10 text-center md:text-right">
                  <span className="text-xs uppercase tracking-widest opacity-80 font-bold block mb-2">
                    CÓDIGO DE CUPÓN
                  </span>
                  
                  <div className="inline-flex items-center space-x-1 p-1 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-md">
                    <span className="font-mono font-bold tracking-widest text-sm sm:text-base px-4 py-2 text-white">
                      {currentPromo.code}
                    </span>
                    <button
                      onClick={() => handleCopyCode(currentPromo.code)}
                      className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold transition-all hover:scale-102 active:scale-95 flex items-center justify-center focus:outline-none"
                      title="Copiar Código"
                    >
                      {copiedCode === currentPromo.code ? (
                        <Check className="w-4 h-4 text-primary" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Copy Alert Feedback */}
                  <AnimatePresence>
                    {copiedCode === currentPromo.code && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="text-[10px] font-bold text-center md:text-right mt-2 text-white bg-black/20 px-2.5 py-1 rounded-lg inline-block"
                      >
                        ¡Cupón copiado al portapapeles!
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom dot indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {PROMOTIONS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-primary' : 'w-2 bg-slate-300 dark:bg-slate-700'
                }`}
                title={`Ir a diapositiva ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
