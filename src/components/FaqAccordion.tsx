/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  key?: string;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-slate-100 dark:border-slate-800 last:border-none py-2">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-5 px-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors focus:outline-none group"
      >
        <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <div className={`p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 transition-all duration-300 ${isOpen ? 'rotate-180 bg-primary/10 text-primary' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 pt-1 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="preguntas" 
      className="py-20 lg:py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            DUDAS FRECUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-4 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium max-w-md mx-auto">
            ¿Tienes alguna consulta? Encuentra respuestas rápidas sobre nuestros métodos, ingredientes y entregas.
          </p>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        {/* Accordions Wrapper Board */}
        <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-[24px] p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">¿Tienes otra pregunta?</h4>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">No te preocupes, escríbenos directamente y te asesoramos.</p>
            </div>
          </div>
          <a
            href="#contacto"
            className="px-5 py-2.5 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl text-xs tracking-wider uppercase transition-all shadow-md shadow-primary/20"
          >
            Preguntar
          </a>
        </div>

      </div>
    </section>
  );
}
