/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Apple, 
  Sparkles, 
  Clock, 
  Citrus, 
  HeartPulse, 
  CheckCircle 
} from 'lucide-react';
import { BENEFITS } from '../data';

const iconMap: { [key: string]: React.ReactNode } = {
  'Apple': <Apple className="w-8 h-8 text-primary" />,
  'Sparkles': <Sparkles className="w-8 h-8 text-accent-orange" />,
  'Clock': <Clock className="w-8 h-8 text-accent-orange" />,
  'Citrus': <Citrus className="w-8 h-8 text-accent-yellow" />,
  'HeartPulse': <HeartPulse className="w-8 h-8 text-rose-500 dark:text-rose-400" />,
  'CheckCircle': <CheckCircle className="w-8 h-8 text-primary" />
};

export default function Benefits() {
  return (
    <section 
      id="beneficios" 
      className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            NUESTROS BENEFICIOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-4 mb-6">
            ¿Por qué elegir Jugnatural?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-xl mx-auto">
            Hacemos jugos honestos de verdad. Conoce los pilares de frescura y salud que diferencian nuestra propuesta artesanal.
          </p>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              id={`benefit-card-${benefit.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px -15px rgba(46, 125, 50, 0.15)"
              }}
              className="bg-white dark:bg-slate-900 p-8 rounded-[24px] border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col relative overflow-hidden group"
            >
              {/* Top Accent Gradient Circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon container with bounce effect on hover */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm border border-primary/10">
                {iconMap[benefit.icon] || <Apple className="w-8 h-8" />}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {benefit.description}
              </p>

              {/* Bottom stylized border highlight */}
              <div className="w-12 h-1 bg-primary rounded-full mt-6 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Nutritional Quality Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary to-[#1B5E20] dark:from-primary dark:to-[#1B5E20]/90 rounded-[24px] p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Decorative background ring */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 border-8 border-white/5 rounded-full pointer-events-none" />
          
          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-4">
              ¿Listo para un cambio de energía?
            </h3>
            <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
              Descubre cómo nutrir tu cuerpo de forma consciente. Todos nuestros jugos son ricos en enzimas vivas y vitaminas biodisponibles que tu cuerpo absorbe de inmediato.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10">
            <a
              href="#productos"
              className="px-8 py-4 bg-white hover:bg-slate-50 text-primary font-bold rounded-full text-xs tracking-wider uppercase text-center transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg shadow-primary/20"
            >
              Explorar Catálogo
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-full text-xs tracking-wider uppercase text-center border-2 border-white/40 hover:border-white transition-all duration-300 hover:scale-[1.03] active:scale-95"
            >
              Hacer Consulta
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
