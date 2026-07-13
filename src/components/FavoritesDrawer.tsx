/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Heart, 
  ShoppingBag, 
  Trash2,
  Sparkles
} from 'lucide-react';
import { Product } from '../types';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Product[];
  onToggleFavorite: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function FavoritesDrawer({
  isOpen,
  onClose,
  favorites,
  onToggleFavorite,
  onAddToCart
}: FavoritesDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Gray Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-sm"
          />

          {/* Favorites Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white dark:bg-slate-900 border-l border-slate-100 dark:border-slate-800 shadow-2xl flex flex-col h-full"
          >
            
            {/* Header Area */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/40">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-rose-500/10 text-rose-500 rounded-xl">
                  <Heart className="w-5 h-5 fill-rose-500/10" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                    Tus Favoritos
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {favorites.length === 1 ? '1 jugo guardado' : `${favorites.length} jugos guardados`}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors focus:outline-none"
                title="Cerrar Favoritos"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable list content */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {favorites.length === 0 ? (
                /* Empty state */
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">No tienes favoritos aún</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs font-medium">
                    Pulsa el icono de corazón en las tarjetas del catálogo para guardar tus combinaciones preferidas aquí.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2.5 bg-primary hover:bg-primary/95 text-white rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-primary/20 focus:outline-none"
                  >
                    Ver Catálogo
                  </button>
                </div>
              ) : (
                /* Favorites Items list */
                favorites.map((product) => (
                  <div
                    key={product.id}
                    id={`fav-item-${product.id}`}
                    className="flex items-center space-x-4 p-3 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/50 rounded-2xl relative"
                  >
                    {/* Image thumb */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Content text info */}
                    <div className="flex-grow">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                        {product.name}
                      </h4>
                      <p className="text-xs text-primary dark:text-primary-light font-bold mt-1">
                        ${product.price.toFixed(2)} USD
                      </p>

                      {/* Add directly to cart */}
                      <button
                        onClick={() => {
                          onAddToCart(product);
                          // Option: keep open or close
                        }}
                        className="mt-2 text-[10px] font-black uppercase tracking-wider text-primary dark:text-primary-light inline-flex items-center hover:underline focus:outline-none"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 mr-1" />
                        Comprar ahora
                      </button>
                    </div>

                    {/* Remove from favorites bin */}
                    <button
                      onClick={() => onToggleFavorite(product)}
                      className="p-2 text-slate-400 hover:text-rose-500 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all focus:outline-none self-start"
                      title="Quitar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
