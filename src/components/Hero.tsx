/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Citrus, Sparkles, Heart } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const heroImage = '/src/assets/images/hero_fruits_1783973778657.jpg';

  // Smooth scroll handler
  const handleAction = (id: string) => {
    onScrollToSection(id);
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen pt-24 pb-16 lg:pt-32 flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
    >
      {/* Decorative Floating Fruits/Icons in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <motion.div
          className="absolute top-[20%] left-[8%] text-orange-400 opacity-20 dark:opacity-30 text-4xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🍊
        </motion.div>
        <motion.div
          className="absolute top-[60%] left-[5%] text-rose-400 opacity-20 dark:opacity-30 text-5xl"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🍓
        </motion.div>
        <motion.div
          className="absolute top-[15%] right-[10%] text-yellow-500 opacity-25 dark:opacity-35 text-5xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 20, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          🍍
        </motion.div>
        <motion.div
          className="absolute top-[75%] right-[12%] text-lime-400 opacity-20 dark:opacity-30 text-4xl"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 12, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          🥝
        </motion.div>
        <motion.div
          className="absolute top-[40%] right-[3%] text-yellow-400 opacity-15 dark:opacity-25 text-3xl"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          🍋
        </motion.div>
      </div>

      {/* Background dot pattern & decorative blobs */}
      <div className="absolute inset-0 dot-pattern pointer-events-none -z-10" />
      <div className="fruit-blob w-[500px] h-[500px] bg-primary top-[-100px] right-[-100px] -z-10" />
      <div className="fruit-blob w-[400px] h-[400px] bg-accent-yellow bottom-[-50px] left-[-50px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Tagline */}
            <motion.div
              id="hero-tag"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center lg:justify-start space-x-2 text-primary font-bold uppercase text-[11px] tracking-widest mb-6"
            >
              <div className="p-1.5 rounded-lg bg-primary/10">
                <Citrus className="w-4 h-4 text-primary" />
              </div>
              <span>SABOR 100% PURO & PRENSADO EN FRÍO</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-6"
            >
              Jugos Naturales<br />
              <span className="text-primary relative inline-block mt-1">
                preparados al momento
                <svg className="absolute left-0 w-full h-3 bottom-[-10px] text-accent-orange opacity-60 dark:opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              id="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Disfruta el verdadero sabor de la naturaleza. Sin conservadores, sin azúcares añadidos. Nutrición viva directa a tu vaso.
            </motion.p>

            {/* Buttons CTA */}
            <motion.div
              id="hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button
                onClick={() => handleAction('productos')}
                className="w-full sm:w-auto btn-primary inline-flex items-center justify-center text-xs tracking-wider uppercase group focus:outline-none"
              >
                Comprar Ahora
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleAction('productos')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-accent-orange hover:text-white bg-transparent border-2 border-accent-orange hover:bg-accent-orange transition-all duration-300 hover:scale-[1.03] active:scale-95 group focus:outline-none shadow-md shadow-accent-orange/5"
              >
                <Play className="w-3.5 h-3.5 mr-2 text-accent-orange fill-current group-hover:scale-110 transition-transform" />
                Ver Menú
              </button>
            </motion.div>

            {/* Micro Benefits Row */}
            <motion.div
              id="hero-micro-benefits"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex flex-col text-center lg:text-left">
                <span className="text-xl font-black text-primary leading-none">100%</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1 leading-tight">Orgánico</span>
              </div>
              <div className="flex flex-col text-center lg:text-left">
                <span className="text-xl font-black text-primary leading-none">0%</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1 leading-tight">Azúcar Añadida</span>
              </div>
              <div className="flex flex-col text-center lg:text-left">
                <span className="text-xl font-black text-primary leading-none">&lt;45m</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1 leading-tight">Entrega Express</span>
              </div>
            </motion.div>

          </div>

          {/* Right Image Layout */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Ring Backgrounds */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] border-2 border-primary/5 dark:border-primary/5 rounded-full animate-pulse" />
              <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] border-2 border-accent-orange/5 dark:border-accent-orange/5 rounded-full" />
            </div>

            {/* Main Picture Wrapper */}
            <motion.div
              id="hero-image-container"
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative w-full max-w-[450px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-primary/10 dark:shadow-black/40 border-8 border-white dark:border-slate-800/80 z-20"
            >
              <img
                src={heroImage}
                alt="Frescura natural Jugnatural"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Glassmorphism tag over image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/75 dark:bg-slate-900/75 backdrop-blur-md border border-white/20 dark:border-slate-800/40 shadow-lg flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Zumo del día</h4>
                  <p className="text-xs text-primary font-bold mt-0.5">Mango & Maracuyá</p>
                </div>
                <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  <span>Frescura Viva</span>
                </div>
              </div>
            </motion.div>

            {/* floating feedback badge */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 bg-accent-yellow text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl z-30 font-bold text-xs tracking-wide flex items-center space-x-1.5 border border-amber-300"
            >
              <Heart className="w-4 h-4 fill-rose-600 text-rose-600 animate-bounce" />
              <span>100% Orgánico</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
