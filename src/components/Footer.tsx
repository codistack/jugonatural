/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-8 relative z-30 transition-colors">
      
      {/* Scroll to Top Arrow Button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={handleScrollToTop}
          className="p-3.5 rounded-full bg-primary hover:bg-primary/95 text-white shadow-xl hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all focus:outline-none"
          title="Volver Arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <a 
              href="#inicio" 
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/10">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-sans tracking-tight text-white leading-none">
                  Jug<span className="text-primary">natural</span>
                </span>
                <span className="text-[10px] text-primary-light font-medium tracking-widest leading-none mt-0.5">
                  NATURALMENTE DELICIOSO
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Especialistas en jugos 100% naturales, exprimidos y prensados en frío al momento de tu pedido. Sin azúcares, conservadores ni aditivos químicos. Nutrición pura directa a tu vaso.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-primary hover:text-white text-slate-400 transition-colors focus:outline-none"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-primary hover:text-white text-slate-400 transition-colors focus:outline-none"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-800 hover:bg-primary hover:text-white text-slate-400 transition-colors focus:outline-none"
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Column 2: Sitemap Links */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-black">
              Mapa del Sitio
            </h4>
            <nav className="flex flex-col space-y-2 text-sm font-semibold">
              <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="hover:text-primary transition-colors">Inicio</a>
              <a href="#nosotros" onClick={(e) => handleNavClick(e, '#nosotros')} className="hover:text-primary transition-colors">Nosotros</a>
              <a href="#beneficios" onClick={(e) => handleNavClick(e, '#beneficios')} className="hover:text-primary transition-colors">Beneficios</a>
              <a href="#productos" onClick={(e) => handleNavClick(e, '#productos')} className="hover:text-primary transition-colors">Productos</a>
              <a href="#promociones" onClick={(e) => handleNavClick(e, '#promociones')} className="hover:text-primary transition-colors">Promociones</a>
            </nav>
          </div>

          {/* Column 3: Extra Navigation */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-black">
              Descubrir
            </h4>
            <nav className="flex flex-col space-y-2 text-sm font-semibold">
              <a href="#galeria" onClick={(e) => handleNavClick(e, '#galeria')} className="hover:text-primary transition-colors">Galería de Fotos</a>
              <a href="#testimonios" onClick={(e) => handleNavClick(e, '#testimonios')} className="hover:text-primary transition-colors">Opiniones</a>
              <a href="#preguntas" onClick={(e) => handleNavClick(e, '#preguntas')} className="hover:text-primary transition-colors">Preguntas</a>
              <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="hover:text-primary transition-colors">Blog & Recetas</a>
              <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="hover:text-primary transition-colors">Contacto</a>
            </nav>
          </div>

          {/* Column 4: Location details */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-black">
              ¿Dónde estamos?
            </h4>
            <ul className="space-y-3.5 text-sm font-medium">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-primary mr-2.5 flex-shrink-0 mt-0.5" />
                <span>Av. Ámsterdam 143, Col. Condesa, CDMX, 06100</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2.5 flex-shrink-0" />
                <span>+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-primary mr-2.5 flex-shrink-0" />
                <span>hola@jugnatural.com</span>
              </li>
            </ul>
            
            {/* Hours Block */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                HORARIOS DE ATENCIÓN
              </span>
              <p className="text-xs text-slate-400 font-medium">
                Lunes a Viernes: 7:00 AM - 8:00 PM<br />
                Sábados y Domingos: 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright details row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pt-8 gap-4 text-xs font-semibold">
          
          <div>
            <p>&copy; {new Date().getFullYear()} Jugnatural. Todos los derechos reservados. <span className="text-primary">Naturalmente delicioso.</span></p>
          </div>

          {/* Policies link */}
          <div className="flex flex-wrap items-center gap-6 text-slate-500">
            <a href="#politicas" className="hover:text-slate-300 transition-colors flex items-center">
              <span>Aviso de Privacidad</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
            </a>
            <a href="#sitemap-ins" className="hover:text-slate-300 transition-colors flex items-center">
              <span>Sitemap</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
            </a>
            <a href="#cookies" className="hover:text-slate-300 transition-colors flex items-center">
              <span>Términos y Condiciones</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
