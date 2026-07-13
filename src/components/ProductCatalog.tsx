/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  MessageCircle, 
  Sparkles, 
  Star, 
  Check, 
  Filter, 
  Info, 
  X,
  XCircle
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  favorites: Product[];
  onOpenCart: () => void;
}

export default function ProductCatalog({
  onAddToCart,
  onToggleFavorite,
  favorites,
  onOpenCart
}: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDetailProduct, setActiveDetailProduct] = useState<Product | null>(null);

  // Filter products based on search and selected category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const isFavorite = (productId: string) => {
    return favorites.some((fav) => fav.id === productId);
  };

  // Generate WhatsApp order message for a single product
  const getWhatsAppProductLink = (product: Product) => {
    const text = encodeURIComponent(
      `¡Hola Jugnatural! Me gustaría comprar un jugo natural: *${product.name}* ($${product.price.toFixed(2)} USD). ¿Me podrían confirmar la disponibilidad y tiempo de entrega? ¡Gracias!`
    );
    return `https://wa.me/5215512345678?text=${text}`; // Mock Mexican WhatsApp number, compliant with global format
  };

  return (
    <section 
      id="productos" 
      className="py-20 lg:py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            NUESTRO MENÚ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-4 mb-6">
            Elige tu dosis diaria de bienestar
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-xl mx-auto">
            Todos nuestros jugos se elaboran con fruta fresca premium cortada al momento. Elige tu categoría preferida.
          </p>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-6" />
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          
          {/* Categories Tab Selector */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 md:pb-0 scrollbar-none scroll-smooth -mx-4 px-4 md:mx-0 md:px-0 max-w-full">
            <button
              onClick={() => setSelectedCategory('todos')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all focus:outline-none ${
                selectedCategory === 'todos'
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
              }`}
            >
              Todos
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all focus:outline-none ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:max-w-xs self-stretch md:self-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por jugo o ingrediente..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 text-sm font-semibold rounded-2xl border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                <XCircle className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Grid Status: Empty state */}
        <AnimatePresence mode="wait">
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-20 bg-slate-50 dark:bg-slate-950 rounded-[32px] p-8 border border-slate-100 dark:border-slate-800"
            >
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No encontramos resultados</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto font-medium">
                Prueba buscando con otros términos o seleccionando otra categoría de jugos en el menú.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('todos');
                  setSearchQuery('');
                }}
                className="mt-6 px-6 py-2.5 bg-primary hover:bg-primary/95 text-white rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-primary/25"
              >
                Limpiar Filtros
              </button>
            </motion.div>
          ) : (
            /* Products Cards Grid */
            <motion.div 
              id="products-grid"
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product) => {
                const fav = isFavorite(product.id);
                return (
                  <motion.div
                    key={product.id}
                    layoutId={`product-${product.id}`}
                    id={`product-card-${product.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -6 }}
                    className="bg-white dark:bg-slate-900 rounded-[24px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative flex flex-col group transition-all duration-300"
                  >
                    
                    {/* Image Area */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-950">
                      
                      {/* Popular / Promo Badge */}
                      {product.isPopular && (
                        <span className="absolute top-4 left-4 z-10 inline-flex items-center space-x-1 px-3 py-1 bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm">
                          <Star className="w-3 h-3 fill-slate-900" />
                          <span>MÁS POPULAR</span>
                        </span>
                      )}

                      {/* Favorites Button */}
                      <button
                        onClick={() => onToggleFavorite(product)}
                        className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-600 dark:text-slate-300 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 border border-white/20 shadow-md transition-all focus:outline-none"
                        title={fav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                      >
                        <Heart className={`w-4 h-4 transition-colors ${fav ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </button>

                      {/* Main Image */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />

                      {/* Category Label Overlay */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
                          {CATEGORIES.find(c => c.id === product.category)?.name || product.category}
                        </span>
                      </div>

                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-grow">
                      
                      {/* Rating & Price row */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{product.rating}</span>
                        </div>
                        <span className="text-lg font-black text-primary dark:text-primary-light">
                          ${product.price.toFixed(2)} <span className="text-[10px] font-bold text-slate-400">USD</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-2 leading-tight">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Ingredients list tags */}
                      <div className="mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1.5">
                          Ingredientes
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {product.ingredients.slice(0, 4).map((ing, i) => (
                            <span 
                              key={i} 
                              className="text-[10px] font-bold bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded"
                            >
                              {ing}
                            </span>
                          ))}
                          {product.ingredients.length > 4 && (
                            <span className="text-[10px] font-bold text-primary dark:text-primary-light px-1.5 py-0.5">
                              +{product.ingredients.length - 4} más
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Benefits tags */}
                      <div className="mb-6 mt-auto">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1.5">
                          Beneficios Clave
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {product.benefits.slice(0, 2).map((ben, i) => (
                            <span 
                              key={i} 
                              className="text-[10px] font-bold bg-primary/10 text-primary dark:text-primary-light px-2 py-0.5 rounded"
                            >
                              {ben}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons footer */}
                      <div className="grid grid-cols-12 gap-2 pt-4 border-t border-slate-50 dark:border-slate-800">
                        
                        {/* More Info button */}
                        <button
                          onClick={() => setActiveDetailProduct(product)}
                          className="col-span-3 inline-flex items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors focus:outline-none"
                          title="Detalle del producto"
                        >
                          <Info className="w-4 h-4" />
                        </button>

                        {/* WhatsApp Buy */}
                        <a
                          href={getWhatsAppProductLink(product)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="col-span-3 inline-flex items-center justify-center p-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-700 dark:text-amber-400 transition-colors focus:outline-none"
                          title="Pedir por WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4 fill-amber-700/10" />
                        </a>

                        {/* Buy/Cart button */}
                        <button
                          onClick={() => onAddToCart(product)}
                          className="col-span-6 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/95 text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md shadow-primary/20 focus:outline-none"
                        >
                          <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                          Comprar
                        </button>

                      </div>

                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal: Full Product Detail View */}
        <AnimatePresence>
          {activeDetailProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
              onClick={() => setActiveDetailProduct(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-slate-900 rounded-[36px] overflow-hidden max-w-2xl w-full border border-slate-100 dark:border-slate-800 shadow-2xl relative flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveDetailProduct(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-100 dark:border-slate-800 shadow-md focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Left Side: Product Image */}
                <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-full relative bg-slate-100 dark:bg-slate-950">
                  <img
                    src={activeDetailProduct.image}
                    alt={activeDetailProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded shadow-sm">
                      {CATEGORIES.find(c => c.id === activeDetailProduct.category)?.name || activeDetailProduct.category}
                    </span>
                  </div>
                </div>

                {/* Right Side: Information Content */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Header: Rating & Price */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                          {activeDetailProduct.rating}
                        </span>
                      </div>
                      <span className="text-xl font-black text-primary dark:text-primary-light">
                        ${activeDetailProduct.price.toFixed(2)} USD
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
                      {activeDetailProduct.name}
                    </h3>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6">
                      {activeDetailProduct.description}
                    </p>

                    {/* Ingredients detail */}
                    <div className="mb-4">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        Fórmula & Ingredientes
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeDetailProduct.ingredients.map((ing, i) => (
                          <span 
                            key={i} 
                            className="text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-2.5 py-1 rounded-lg"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits detail */}
                    <div className="mb-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        Beneficios en tu organismo
                      </h4>
                      <ul className="space-y-1.5">
                        {activeDetailProduct.benefits.map((ben, i) => (
                          <li key={i} className="flex items-center text-xs text-slate-600 dark:text-slate-300 font-medium">
                            <Check className="w-3.5 h-3.5 text-primary mr-2 flex-shrink-0" />
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions bar */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => {
                        onAddToCart(activeDetailProduct);
                        setActiveDetailProduct(null);
                      }}
                      className="flex-grow inline-flex items-center justify-center py-3 px-4 bg-primary hover:bg-primary/95 text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-primary/25 transition-colors focus:outline-none"
                    >
                      <ShoppingBag className="w-4 h-4 mr-1.5" />
                      Agregar al Carrito
                    </button>
                    <a
                      href={getWhatsAppProductLink(activeDetailProduct)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl shadow-md transition-colors focus:outline-none"
                      title="Preguntar por WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5 fill-white/10" />
                    </a>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
