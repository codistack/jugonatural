/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  X, 
  Send, 
  CheckCircle,
  Clock,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage.trim()) return;

    const encodedText = encodeURIComponent(quickMessage.trim());
    window.open(`https://wa.me/5215512345678?text=${encodedText}`, '_blank');
    setQuickMessage('');
    setIsOpen(false);
  };

  const handleOptionClick = (presetMessage: string) => {
    const encodedText = encodeURIComponent(presetMessage);
    window.open(`https://wa.me/5215512345678?text=${encodedText}`, '_blank');
    setIsOpen(false);
  };

  const options = [
    { label: '🍹 ¿Cómo puedo pedir un plan Detox?', text: '¡Hola! Estoy interesado en los planes Detox de Jugnatural. ¿Me podrían dar información de precios y entregas?' },
    { label: '📍 Consultar horarios de sucursales', text: '¡Hola! Me gustaría saber los horarios y ubicaciones detalladas de sus sucursales hoy.' },
    { label: '🚚 Cotizar envío corporativo', text: '¡Hola! Quisiera cotizar un pedido corporativo de jugos para un evento de oficina.' }
  ];

  return (
    <div id="whatsapp-floating-widget" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expandable Chat Balloon */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="w-80 sm:w-96 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[28px] overflow-hidden shadow-2xl mb-4"
          >
            {/* Header: Green WhatsApp Banner */}
            <div className="bg-emerald-600 p-5 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-lg font-black">
                    JN
                  </div>
                  {/* Active Green Dot */}
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-emerald-600 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight">Atención Jugnatural</h4>
                  <p className="text-[10px] text-emerald-100 flex items-center font-medium mt-0.5">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>Generalmente responde en minutos</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white focus:outline-none transition-colors"
                title="Cerrar Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body: Options & Greeting */}
            <div className="p-6 bg-slate-50 dark:bg-slate-950/40 space-y-4">
              
              {/* Automated Greeting bubble */}
              <div className="p-3.5 bg-white dark:bg-slate-800 rounded-[18px] rounded-tl-none shadow-sm max-w-[85%] border border-slate-100 dark:border-slate-700">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  ¡Hola! 🍊 Bienvenido a <strong>Jugnatural</strong>. ¿En qué te podemos consentir hoy? Elige una opción rápida o escribe tu mensaje:
                </p>
              </div>

              {/* Preset buttons */}
              <div className="space-y-2">
                {options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleOptionClick(opt.text)}
                    className="w-full flex items-center justify-between p-3 bg-white hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-emerald-950/20 rounded-xl text-left text-xs font-bold text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700 hover:border-emerald-500/10 transition-all shadow-sm focus:outline-none"
                  >
                    <span>{opt.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>

            </div>

            {/* Custom Input Sender */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                value={quickMessage}
                onChange={(e) => setQuickMessage(e.target.value)}
                className="flex-grow px-4 py-2 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm font-semibold rounded-xl border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                disabled={!quickMessage.trim()}
                className="p-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl shadow-md transition-colors focus:outline-none flex items-center justify-center"
                title="Enviar por WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button Bubble with bounce and pulse ripple */}
      <motion.button
        id="whatsapp-floating-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-emerald-600 dark:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-emerald-600/30 z-50 border-2 border-white dark:border-slate-800 relative focus:outline-none"
        title="Contactar por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full border-2 border-emerald-500/30 dark:border-emerald-400/30 animate-ping -z-10" />
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6 fill-white/15" />}
      </motion.button>

    </div>
  );
}
