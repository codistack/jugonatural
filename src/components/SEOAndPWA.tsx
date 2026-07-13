/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileCode, 
  Search, 
  Share2, 
  Download, 
  Cpu, 
  X, 
  Check, 
  Globe, 
  Terminal, 
  Smartphone,
  ExternalLink,
  Info
} from 'lucide-react';

export default function SEOAndPWA() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'pwa' | 'schema' | 'robots' | 'sitemap' | 'manifest'>('pwa');
  const [copiedText, setCopiedText] = useState(false);
  const [pwaInstalled, setPwaInstalled] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "Jugnatural",
  "image": "https://jugnatural.com/assets/images/hero_fruits.jpg",
  "@id": "https://jugnatural.com/#establishment",
  "url": "https://jugnatural.com",
  "telephone": "+525512345678",
  "priceRange": "$$",
  "menu": "https://jugnatural.com/#productos",
  "servesCuisine": "Healthy, Organic, Cold Press Juices",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Ámsterdam 143, Col. Condesa",
    "addressLocality": "Ciudad de México",
    "postalCode": "06100",
    "addressCountry": "MX"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/jugnatural",
    "https://instagram.com/jugnatural"
  ]
}`;

  const robotsTxt = `# https://www.robotstxt.org/
User-agent: *
Allow: /

# Sitemaps list
Sitemap: https://jugnatural.com/sitemap.xml`;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jugnatural.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://jugnatural.com/#nosotros</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jugnatural.com/#productos</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

  const manifestJson = `{
  "short_name": "Jugnatural",
  "name": "Jugnatural - Naturalmente Delicioso",
  "description": "Jugos 100% naturales Cold Press elaborados al momento.",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "background_color": "#2E7D32",
  "theme_color": "#2E7D32",
  "display": "standalone",
  "orientation": "portrait"
}`;

  const renderCodeBlock = (code: string, lang: string) => (
    <div className="relative mt-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-200 font-mono text-xs">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-[10px] font-bold text-slate-400">
        <span>{lang.toUpperCase()}</span>
        <button
          onClick={() => handleCopy(code)}
          className="hover:text-white transition-colors flex items-center space-x-1 focus:outline-none"
        >
          {copiedText ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>COPIADO</span>
            </>
          ) : (
            <>
              <FileCode className="w-3.5 h-3.5" />
              <span>COPIAR</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto max-h-72 leading-relaxed whitespace-pre scrollbar-none">
        <code>{code}</code>
      </pre>
    </div>
  );

  return (
    <>
      {/* Floating Inspector Toggle Trigger */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-full flex items-center space-x-2 shadow-xl border border-slate-700 focus:outline-none text-xs font-black uppercase tracking-wider"
          title="Inspeccionar SEO & PWA"
        >
          <Cpu className="w-4 h-4 text-emerald-500 animate-pulse" />
          <span>SEO & PWA</span>
        </motion.button>
      </div>

      {/* Main Panel Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden max-w-3xl w-full border border-slate-100 dark:border-slate-800 shadow-2xl relative flex flex-col h-[80vh] max-h-[640px]"
            >
              {/* Close Panel Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800/80 focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title Header */}
              <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/20">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 bg-emerald-600/10 text-emerald-600 rounded-xl">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                      Módulo de Optimización de Motores de Búsqueda (SEO) & PWA
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                      Soporte nativo integrado de metadatos estructurados para posicionamiento de marca.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs bar */}
              <div className="flex border-b border-slate-100 dark:border-slate-800 px-6 overflow-x-auto bg-white dark:bg-slate-900 scrollbar-none">
                <div className="flex space-x-1 py-1.5 min-w-max">
                  {[
                    { id: 'pwa', label: '📱 PWA Instalable', icon: <Smartphone className="w-3.5 h-3.5" /> },
                    { id: 'schema', label: '🗂️ Schema JSON-LD', icon: <FileCode className="w-3.5 h-3.5" /> },
                    { id: 'robots', label: '🤖 Robots.txt', icon: <Terminal className="w-3.5 h-3.5" /> },
                    { id: 'sitemap', label: '🗺️ Sitemap.xml', icon: <Globe className="w-3.5 h-3.5" /> },
                    { id: 'manifest', label: '📄 Manifest.json', icon: <FileCode className="w-3.5 h-3.5" /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none ${
                        activeTab === tab.id
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable Tab Body Area */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-grow bg-white dark:bg-slate-900">
                
                {activeTab === 'pwa' && (
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3.5">
                      <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl flex-shrink-0">
                        <Smartphone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                          Simulación PWA (Progressive Web App)
                        </h4>
                        <p className="text-sm text-slate-500 mt-1 leading-relaxed font-medium">
                          La aplicación se comporta como un software móvil nativo en iOS y Android. Incluye soporte offline completo vía Service Worker y es instalable en pantallas de inicio.
                        </p>
                      </div>
                    </div>

                    {/* Interactive Mock Install Trigger UI */}
                    <div className="p-6 bg-slate-50 dark:bg-slate-800/40 rounded-[24px] border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="text-center sm:text-left">
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">Instalar Jugnatural en tu Dispositivo</h5>
                        <p className="text-xs text-slate-500 mt-0.5 font-medium">Acceso rápido directo con un toque, sin pasar por tiendas de aplicaciones.</p>
                      </div>
                      
                      {pwaInstalled ? (
                        <div className="px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-xl text-xs font-bold flex items-center space-x-1.5">
                          <Check className="w-4 h-4" />
                          <span>¡APPLICACIÓN INSTALADA!</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => setPwaInstalled(true)}
                          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold tracking-wider uppercase shadow-md focus:outline-none transition-transform hover:scale-[1.02] active:scale-95 flex items-center space-x-1.5"
                        >
                          <Download className="w-4 h-4" />
                          <span>Descargar PWA</span>
                        </button>
                      )}
                    </div>

                    {/* iOS Install Guide Mockup */}
                    <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-800 dark:text-amber-400 text-xs flex items-start space-x-3 leading-relaxed font-medium">
                      <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-600" />
                      <div>
                        <p className="font-bold">Instrucciones para iOS (Safari):</p>
                        <p className="mt-1 opacity-90">1. Pulsa el botón de <strong>Compartir</strong> en la barra inferior de Safari.</p>
                        <p className="opacity-90">2. Desplázate hacia abajo y selecciona la opción <strong>Añadir a pantalla de inicio</strong>.</p>
                        <p className="opacity-90">3. Confirma los nombres y ¡listo! Disfruta la experiencia premium de Jugnatural.</p>
                      </div>
                    </div>

                  </div>
                )}

                {activeTab === 'schema' && (
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      Estructuramos el sitio de acuerdo a los lineamientos oficiales de <strong>Schema.org</strong> utilizando microdatos estructurados <strong>JSON-LD</strong>. Esto permite que buscadores como Google reconozcan a Jugnatural como un comercio de comida saludable legítimo, mostrando tus horarios, sucursales y menú de manera destacada en la caja de búsquedas locales.
                    </p>
                    {renderCodeBlock(schemaJson, 'json')}
                  </div>
                )}

                {activeTab === 'robots' && (
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      El archivo <strong>robots.txt</strong> indica a los rastreadores web (como Googlebot, Bingbot, etc.) qué áreas de tu sitio web pueden explorar y cuáles no, además de enlazar de manera explícita el archivo sitemap para acelerar la indexación.
                    </p>
                    {renderCodeBlock(robotsTxt, 'text')}
                  </div>
                )}

                {activeTab === 'sitemap' && (
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      El archivo <strong>sitemap.xml</strong> recopila todos los enlaces clave y secciones de tu sitio web para que los motores de búsqueda los descubran de inmediato y entiendan tu jerarquía de contenido.
                    </p>
                    {renderCodeBlock(sitemapXml, 'xml')}
                  </div>
                )}

                {activeTab === 'manifest' && (
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      El archivo <strong>manifest.json</strong> especifica cómo se comporta tu aplicación cuando se instala como PWA en un dispositivo móvil. Define el color del tema, la orientación predeterminada, los iconos oficiales de marca y el splash de inicio.
                    </p>
                    {renderCodeBlock(manifestJson, 'json')}
                  </div>
                )}

              </div>

              {/* Footer Panel Note */}
              <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/20 text-center">
                <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">
                  Jugnatural Wellness Enterprise Software System
                </span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
