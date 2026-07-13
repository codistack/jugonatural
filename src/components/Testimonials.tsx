/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section 
      id="testimonios" 
      className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            NUESTROS CLIENTES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-4 mb-4">
            Lo que dicen de Nosotros
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium max-w-lg mx-auto">
            Descubre las opiniones reales de personas reales que han integrado Jugnatural a sus vidas.
          </p>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        {/* Testimonials Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-[24px] border border-slate-100 dark:border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col justify-between relative group transition-all duration-300"
            >
              
              {/* Top quotes visual element */}
              <div className="absolute top-6 right-8 text-slate-100 dark:text-slate-800/40 group-hover:text-primary/10 dark:group-hover:text-primary-light/5 transition-colors duration-300">
                <Quote className="w-10 h-10 transform rotate-180 fill-current" />
              </div>

              {/* Top Rating stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < t.rating 
                        ? 'text-amber-400 fill-amber-400' 
                        : 'text-slate-200 dark:text-slate-700'
                    }`} 
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic mb-8 relative z-10">
                "{t.review}"
              </p>

              {/* Customer Avatar & Bio details */}
              <div className="flex items-center space-x-3.5 pt-6 border-t border-slate-50 dark:border-slate-800/60">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-100 flex-shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-bold mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Small verified badge footer */}
        <div className="flex items-center justify-center space-x-1.5 mt-12 text-xs font-bold text-slate-400">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>Todas las opiniones son auténticas y recopiladas vía encuestas y WhatsApp.</span>
        </div>

      </div>
    </section>
  );
}
