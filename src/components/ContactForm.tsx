/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Map,
  Compass,
  ArrowRight
} from 'lucide-react';

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  correo?: string;
  telefono?: string;
  mensaje?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<'condesa' | 'polanco' | 'roma'>('condesa');

  const branches = {
    condesa: {
      name: 'Jugnatural Condesa (Matriz)',
      address: 'Av. Ámsterdam 143, Col. Condesa, CDMX, 06100',
      hours: 'Lunes a Viernes: 7:00 AM - 8:00 PM | Sábados y Domingos: 8:00 AM - 6:00 PM',
      phone: '+52 (55) 1234-5678',
      coordinates: 'lat: 19.4124, lng: -99.1691'
    },
    polanco: {
      name: 'Jugnatural Polanco',
      address: 'Julio Verne 84, Col. Polanco, CDMX, 11560',
      hours: 'Lunes a Viernes: 7:00 AM - 9:00 PM | Sábados y Domingos: 8:00 AM - 7:00 PM',
      phone: '+52 (55) 8765-4321',
      coordinates: 'lat: 19.4298, lng: -99.2014'
    },
    roma: {
      name: 'Jugnatural Roma Norte',
      address: 'Colima 124, Col. Roma Norte, CDMX, 06700',
      hours: 'Lunes a Viernes: 7:00 AM - 8:00 PM | Sábados y Domingos: 8:00 AM - 6:00 PM',
      phone: '+52 (55) 4567-8901',
      coordinates: 'lat: 19.4172, lng: -99.1584'
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.nombre.trim()) {
      tempErrors.nombre = 'El nombre es obligatorio.';
    } else if (formData.nombre.trim().length < 3) {
      tempErrors.nombre = 'El nombre debe tener al menos 3 caracteres.';
    }

    if (!formData.correo.trim()) {
      tempErrors.correo = 'El correo electrónico es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      tempErrors.correo = 'Ingresa un correo electrónico válido.';
    }

    if (!formData.telefono.trim()) {
      tempErrors.telefono = 'El teléfono es obligatorio.';
    } else if (!/^\+?\d{10,15}$/.test(formData.telefono.replace(/\s+/g, ''))) {
      tempErrors.telefono = 'Ingresa un número telefónico válido (10-12 dígitos).';
    }

    if (!formData.mensaje.trim()) {
      tempErrors.mensaje = 'El mensaje es obligatorio.';
    } else if (formData.mensaje.trim().length < 10) {
      tempErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: ''
      });
      // Clear feedback message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section 
      id="contacto" 
      className="py-20 lg:py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            CONTACTO DIRECTO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-4 mb-4">
            Hablemos de Bienestar
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium max-w-lg mx-auto">
            ¿Tienes dudas, sugerencias o deseas cotizar un plan mensual corporativo? Déjanos un mensaje.
          </p>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        {/* Form & Map Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Form with Validation */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-900/40 p-8 sm:p-10 rounded-[24px] border border-slate-100 dark:border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.02)] relative">
            
            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
              Envíanos un mensaje
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mb-8">
              Te responderemos en menos de 2 horas hábiles. Todos los campos son requeridos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div className="flex flex-col">
                <label htmlFor="nombre" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej. Juan Pérez"
                  className={`w-full px-4 py-3 bg-white dark:bg-slate-800 text-sm font-semibold rounded-xl border focus:outline-none transition-all ${
                    errors.nombre 
                      ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' 
                      : 'border-slate-100 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary'
                  } text-slate-800 dark:text-white`}
                />
                {errors.nombre && (
                  <span className="text-xs text-rose-500 font-bold mt-1.5 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    {errors.nombre}
                  </span>
                )}
              </div>

              {/* Grid: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="correo" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="juan@example.com"
                    className={`w-full px-4 py-3 bg-white dark:bg-slate-800 text-sm font-semibold rounded-xl border focus:outline-none transition-all ${
                      errors.correo 
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' 
                        : 'border-slate-100 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary'
                    } text-slate-800 dark:text-white`}
                  />
                  {errors.correo && (
                    <span className="text-xs text-rose-500 font-bold mt-1.5 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.correo}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label htmlFor="telefono" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Teléfono Celular
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Ej. 5512345678"
                    className={`w-full px-4 py-3 bg-white dark:bg-slate-800 text-sm font-semibold rounded-xl border focus:outline-none transition-all ${
                      errors.telefono 
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' 
                        : 'border-slate-100 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary'
                    } text-slate-800 dark:text-white`}
                  />
                  {errors.telefono && (
                    <span className="text-xs text-rose-500 font-bold mt-1.5 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.telefono}
                    </span>
                  )}
                </div>

              </div>

              {/* Message Input */}
              <div className="flex flex-col">
                <label htmlFor="mensaje" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Tu Mensaje o Consulta
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos en qué te podemos ayudar..."
                  className={`w-full px-4 py-3 bg-white dark:bg-slate-800 text-sm font-semibold rounded-xl border focus:outline-none transition-all ${
                    errors.mensaje 
                      ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20' 
                      : 'border-slate-100 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary'
                  } text-slate-800 dark:text-white resize-none`}
                />
                {errors.mensaje && (
                  <span className="text-xs text-rose-500 font-bold mt-1.5 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    {errors.mensaje}
                  </span>
                )}
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center py-4 bg-primary hover:bg-primary/95 text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-primary/25 transition-all focus:outline-none disabled:opacity-50"
              >
                {submitting ? (
                  <span className="flex items-center space-x-2 animate-pulse">
                    <span>Enviando...</span>
                  </span>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>

              {/* Success Alert Banner */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-primary/10 border border-primary/25 rounded-xl text-primary text-xs sm:text-sm flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-bold">¡Mensaje recibido con éxito!</p>
                      <p className="mt-0.5 opacity-90 font-medium">Gracias por escribirnos. Uno de nuestros asesores de salud se pondrá en contacto contigo a la brevedad.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>

          </div>

          {/* Right Side: Visual Mock Interactive Maps & Branch Selector */}
          <div className="lg:col-span-6 flex flex-col space-y-8 h-full">
            
            {/* Quick Contacts Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-start space-x-3">
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">Teléfono Directo</h4>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">+52 (55) 1234-5678</p>
                </div>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-start space-x-3">
                <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">Correo Electrónico</h4>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">hola@jugnatural.com</p>
                </div>
              </div>
            </div>

            {/* Branch Selector Cards */}
            <div className="p-6 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-[24px]">
              
              <div className="flex items-center space-x-2 mb-6">
                <Compass className="w-5 h-5 text-primary" />
                <h4 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight">Nuestras Sucursales</h4>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {(Object.keys(branches) as Array<keyof typeof branches>).map((branchId) => (
                  <button
                    key={branchId}
                    onClick={() => setSelectedBranch(branchId)}
                    className={`py-2 px-3 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all focus:outline-none ${
                      selectedBranch === branchId
                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700'
                    }`}
                  >
                    {branchId.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Active Branch Information */}
              <div className="space-y-4">
                <div>
                  <h5 className="text-base font-bold text-slate-900 dark:text-white">{branches[selectedBranch].name}</h5>
                  <p className="text-xs text-slate-500 mt-1 font-medium flex items-start">
                    <MapPin className="w-4 h-4 text-primary mr-1.5 flex-shrink-0" />
                    <span>{branches[selectedBranch].address}</span>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Horario</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1 leading-snug flex items-center">
                      <Clock className="w-3.5 h-3.5 text-primary mr-1 flex-shrink-0" />
                      <span>Sabor fresco todo el día</span>
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">{branches[selectedBranch].hours}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Línea Directa</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-bold mt-1 leading-snug flex items-center">
                      <Phone className="w-3.5 h-3.5 text-primary mr-1 flex-shrink-0" />
                      <span>{branches[selectedBranch].phone}</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Maps Visual Mock Widget */}
            <div className="flex-grow aspect-[16/10] bg-slate-100 dark:bg-slate-950 rounded-[24px] overflow-hidden border border-slate-200 dark:border-slate-800 relative shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] group">
              
              {/* Map Layout drawing lines using CSS/SVG */}
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
              <svg className="w-full h-full opacity-65 dark:opacity-25" viewBox="0 0 400 250">
                {/* Streets Grid */}
                <line x1="0" y1="50" x2="400" y2="50" stroke="#CBD5E1" strokeWidth="4" />
                <line x1="0" y1="180" x2="400" y2="180" stroke="#CBD5E1" strokeWidth="6" />
                <line x1="120" y1="0" x2="120" y2="250" stroke="#CBD5E1" strokeWidth="5" />
                <line x1="280" y1="0" x2="280" y2="250" stroke="#CBD5E1" strokeWidth="4" />
                
                {/* Diagonal Avenue */}
                <line x1="0" y1="200" x2="400" y2="100" stroke="#94A3B8" strokeWidth="12" />
                
                {/* Central Park block */}
                <rect x="140" y="70" width="120" height="90" rx="12" fill="#E2F1E8" stroke="#A7F3D0" strokeWidth="2" />
                <text x="175" y="120" fill="#2E7D32" fontSize="11" fontWeight="bold">Parque México</text>
              </svg>

              {/* Dynamic Animated Map Pin */}
              <motion.div
                key={selectedBranch}
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="absolute"
                style={{
                  top: selectedBranch === 'condesa' ? '45%' : selectedBranch === 'polanco' ? '25%' : '75%',
                  left: selectedBranch === 'condesa' ? '48%' : selectedBranch === 'polanco' ? '70%' : '20%'
                }}
              >
                <div className="relative flex flex-col items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-xl shadow-primary/25 border-2 border-white animate-bounce">
                    <MapPin className="w-5 h-5 fill-white/10" />
                  </div>
                  <div className="px-2.5 py-1 rounded bg-slate-900/90 text-white font-bold text-[9px] uppercase mt-1 whitespace-nowrap tracking-wide border border-slate-700 shadow-md">
                    Jugnatural
                  </div>
                </div>
              </motion.div>

              {/* Floating Maps UI Indicators */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-white/20 dark:border-slate-800/60 shadow-lg flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Map className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">MAPA INTERACTIVO</span>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(branches[selectedBranch].address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-primary hover:text-primary-light dark:text-primary-light dark:hover:text-primary inline-flex items-center group/link focus:outline-none"
                >
                  <span>Ver en Google Maps</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
