/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Sparkles 
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  cartCount: number;
  favoritesCount: number;
  onOpenCart: () => void;
  onOpenFavorites: () => void;
  activeSection: string;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  cartCount,
  favoritesCount,
  onOpenCart,
  onOpenFavorites,
  activeSection
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Productos', href: '#productos' },
    { label: 'Promociones', href: '#promociones' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Preguntas', href: '#preguntas' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav shadow-md py-2.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            id="nav-logo"
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-sans tracking-tight text-slate-950 dark:text-white leading-none">
                Jug<span className="text-primary">natural</span>
              </span>
              <span className="text-[10px] text-primary font-bold tracking-widest leading-none mt-0.5">
                NATURALMENTE DELICIOSO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  id={`nav-item-${item.href.substring(1)}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 uppercase ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary hover:bg-slate-100/50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Utility Buttons */}
          <div id="nav-utilities" className="flex items-center space-x-2">
            
            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors focus:outline-none"
              title={darkMode ? 'Modo claro' : 'Modo oscuro'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Favorites Icon */}
            <button
              id="favorites-drawer-btn"
              onClick={onOpenFavorites}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors relative focus:outline-none"
              title="Favoritos"
            >
              <Heart className="w-5 h-5 hover:fill-rose-500 hover:text-rose-500 transition-colors" />
              {favoritesCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white bg-rose-500 rounded-full">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Icon */}
            <button
              id="cart-drawer-btn"
              onClick={onOpenCart}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors relative focus:outline-none"
              title="Carrito de compras"
            >
              <ShoppingBag className="w-5 h-5 hover:text-primary transition-colors" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white bg-primary rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Buy CTA Button */}
            <a
              id="buy-cta-nav"
              href="#productos"
              onClick={(e) => handleNavClick(e, '#productos')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 transition-all duration-300 hover:scale-[1.03] active:scale-95 focus:outline-none"
            >
              Comprar Ahora
            </a>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    id={`mobile-nav-item-${item.href.substring(1)}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all uppercase ${
                      isActive
                        ? 'text-primary bg-primary/10 border-l-4 border-primary'
                        : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 px-4 flex flex-col space-y-2">
                <a
                  id="mobile-buy-cta"
                  href="#productos"
                  onClick={(e) => handleNavClick(e, '#productos')}
                  className="w-full text-center py-3 rounded-xl text-sm font-bold tracking-wider uppercase text-white bg-primary shadow-md shadow-primary/25 transition-colors focus:outline-none"
                >
                  Comprar Ahora
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
