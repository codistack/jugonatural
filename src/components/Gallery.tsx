/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Camera
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items based on category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'todos') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const categories = ['todos', 'Ingredientes', 'Proceso', 'Calidad', 'Estilo'];

  const openLightbox = (item: GalleryItem) => {
    const originalIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev! + 1));
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
    }
  };

  return (
    <section 
      id="galeria" 
      className="py-20 lg:py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            GALERÍA DE LA CASA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-4 mb-4">
            Nuestra Esencia en Imágenes
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium max-w-lg mx-auto">
            Explora las texturas, los colores y el proceso detrás de cada una de nuestras recetas naturales.
          </p>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all focus:outline-none ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              {cat === 'todos' ? 'Todos' : cat}
            </button>
          ))}
        </div>

        {/* CSS Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] w-full">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                id={`gallery-item-${item.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative overflow-hidden rounded-[24px] group border border-slate-100 dark:border-slate-800 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                onClick={() => openLightbox(item)}
              >
                
                {/* Main image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover rounded-[24px] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Glassmorphic hover overlay */}
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  
                  {/* Eye Zoom Icon */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/10">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Category label */}
                  <span className="text-[10px] font-bold text-primary-light uppercase tracking-widest mb-1.5 flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {item.category}
                  </span>

                  {/* Caption */}
                  <h4 className="text-white font-bold text-sm tracking-tight leading-snug">
                    {item.caption}
                  </h4>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col items-center justify-center p-4"
              onClick={closeLightbox}
            >
              
              {/* Close Button Top */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white z-50 focus:outline-none transition-colors"
                title="Cerrar Galería"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Button Left */}
              <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-white z-50 focus:outline-none transition-all hover:scale-105"
                title="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Navigation Button Right */}
              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-white z-50 focus:outline-none transition-all hover:scale-105"
                title="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Main Container */}
              <div 
                className="relative max-w-4xl w-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full relative flex flex-col items-center"
                >
                  
                  {/* Active Image */}
                  <img
                    src={GALLERY_ITEMS[lightboxIndex].src}
                    alt={GALLERY_ITEMS[lightboxIndex].alt}
                    className="max-h-[75vh] w-auto max-w-full object-contain rounded-[20px] shadow-2xl border border-white/5"
                    referrerPolicy="no-referrer"
                  />

                  {/* Caption & Category text box */}
                  <div className="w-full max-w-xl text-center mt-6">
                    <span className="inline-flex items-center text-xs font-bold text-primary-light uppercase tracking-widest mb-1">
                      <Camera className="w-3.5 h-3.5 mr-1" />
                      {GALLERY_ITEMS[lightboxIndex].category}
                    </span>
                    <p className="text-white font-bold text-base sm:text-lg tracking-tight mt-1">
                      {GALLERY_ITEMS[lightboxIndex].caption}
                    </p>
                    
                    {/* Index count */}
                    <span className="text-xs text-slate-500 font-bold mt-2 block">
                      {lightboxIndex + 1} de {GALLERY_ITEMS.length}
                    </span>
                  </div>

                </motion.div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
