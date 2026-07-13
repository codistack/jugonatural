/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  Tag, 
  Check, 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0); // e.g. 0.15 = 15%
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Calculate prices
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = subtotal * appliedDiscount;
  const shipping = subtotal > 15 || subtotal === 0 ? 0 : 2.50; // free shipping over $15
  const total = subtotal - discountAmount + shipping;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    
    const code = couponCode.trim().toUpperCase();
    if (code === 'DETOX25') {
      setAppliedDiscount(0.25);
      setCouponSuccess('¡Cupón DETOX25 aplicado! 25% de descuento en tu compra.');
    } else if (code === 'ENERGY15') {
      setAppliedDiscount(0.15);
      setCouponSuccess('¡Cupón ENERGY15 aplicado! 15% de descuento en tu compra.');
    } else if (code === 'ENVIOFRESH') {
      setAppliedDiscount(0.05); // Give a token discount or simulate free shipping
      setCouponSuccess('¡Cupón ENVIOFRESH aplicado! 5% extra en tu orden.');
    } else {
      setCouponError('Cupón inválido. Intenta con DETOX25, ENERGY15 o ENVIOFRESH.');
    }
  };

  // Prepares a WhatsApp message summarizing the order
  const getWhatsAppCheckoutLink = () => {
    let orderDetails = `*¡Hola Jugnatural! Quisiera levantar el siguiente pedido:* \n\n`;
    cart.forEach((item) => {
      orderDetails += `• _${item.quantity}x_ *${item.product.name}* ($${item.product.price.toFixed(2)} USD c/u) \n`;
    });
    
    orderDetails += `\n`;
    orderDetails += `*Subtotal:* $${subtotal.toFixed(2)} USD \n`;
    if (discountAmount > 0) {
      orderDetails += `*Descuento:* -$${discountAmount.toFixed(2)} USD \n`;
    }
    orderDetails += `*Envío:* ${shipping === 0 ? '¡GRATIS!' : `$${shipping.toFixed(2)} USD`} \n`;
    orderDetails += `*Total Estimado:* $${total.toFixed(2)} USD \n\n`;
    orderDetails += `_¿Me podrían coordinar el envío e indicarme métodos de pago? ¡Muchas gracias!_`;

    return `https://wa.me/5215512345678?text=${encodeURIComponent(orderDetails)}`;
  };

  const handleSimulateCheckout = () => {
    setOrderSubmitted(true);
    setTimeout(() => {
      setOrderSubmitted(false);
      onClearCart();
      onClose();
      alert('¡Pedido procesado con éxito en nuestro simulador! Nos pondremos en contacto.');
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Gray Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-sm"
          />

          {/* Drawer Sidebar */}
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
                <div className="p-2 bg-primary/10 text-primary rounded-xl">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                    Tu Carrito
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {cart.length === 1 ? '1 jugo seleccionado' : `${cart.length} jugos seleccionados`}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors focus:outline-none"
                title="Cerrar Carrito"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable list content */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                /* Empty Cart State */
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Tu carrito está vacío</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs font-medium">
                    Explora nuestro catálogo y agrega tus bebidas Cold Press favoritas llenas de vitaminas.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2.5 bg-primary hover:bg-primary/95 text-white rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-primary/20 focus:outline-none"
                  >
                    Agregar Jugos
                  </button>
                </div>
              ) : (
                /* Cart Items List */
                cart.map((item) => (
                  <div
                    key={item.product.id}
                    id={`cart-item-${item.product.id}`}
                    className="flex items-center space-x-4 p-3 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/50 rounded-2xl relative"
                  >
                    {/* Product picture */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Content text details */}
                    <div className="flex-grow">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-primary dark:text-primary-light font-bold mt-1">
                        ${item.product.price.toFixed(2)} USD
                      </p>

                      {/* Quantity Modifier controls */}
                      <div className="flex items-center space-x-2.5 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 rounded bg-white hover:bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 focus:outline-none transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-black text-slate-800 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded bg-white hover:bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 focus:outline-none transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Delete Item Trash Bin */}
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-2 text-slate-400 hover:text-rose-500 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all focus:outline-none self-start"
                      title="Quitar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Actions & Price Summary section */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-4">
                
                {/* Promo Coupon Form */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="¿Tienes cupón? (DETOX25)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-grow px-3 py-2 bg-white dark:bg-slate-800 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 uppercase focus:outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white font-bold text-xs rounded-xl hover:bg-slate-800 focus:outline-none transition-all"
                  >
                    Aplicar
                  </button>
                </form>

                {/* Coupon Feedback Msg */}
                {couponError && (
                  <p className="text-[10px] text-rose-500 font-bold">{couponError}</p>
                )}
                {couponSuccess && (
                  <p className="text-[10px] text-primary dark:text-primary-light font-bold flex items-center">
                    <Check className="w-3 h-3 mr-1" />
                    {couponSuccess}
                  </p>
                )}

                {/* Subtotals detail tree */}
                <div className="space-y-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-slate-950 dark:text-white">${subtotal.toFixed(2)} USD</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-primary dark:text-primary-light">
                      <span>Descuento</span>
                      <span>-${discountAmount.toFixed(2)} USD</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Costo de Envío</span>
                    <span className="text-slate-950 dark:text-white">
                      {shipping === 0 ? (
                        <span className="text-primary uppercase font-black tracking-wider text-[10px]">¡Gratis!</span>
                      ) : (
                        `$${shipping.toFixed(2)} USD`
                      )}
                    </span>
                  </div>
                  
                  {subtotal <= 15 && (
                    <p className="text-[10px] text-amber-600 dark:text-amber-400 font-medium leading-none mt-1">
                      💡 Agrega ${ (15.01 - subtotal).toFixed(2) } USD más para obtener <strong>Envío Gratis</strong>.
                    </p>
                  )}

                  <div className="flex justify-between text-base font-black text-slate-900 dark:text-white pt-3 border-t border-slate-200 dark:border-slate-700">
                    <span>Total Estimado</span>
                    <span className="text-primary dark:text-primary-light">${total.toFixed(2)} USD</span>
                  </div>
                </div>

                {/* Primary Checkout Actions */}
                <div className="grid grid-cols-1 gap-2 pt-2">
                  
                  {/* Checkout on WhatsApp */}
                  <a
                    href={getWhatsAppCheckoutLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-3 bg-primary hover:bg-primary/95 text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-primary/20 transition-colors focus:outline-none"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Pedir por WhatsApp
                  </a>

                  {/* Simulate Checkout directly */}
                  <button
                    onClick={handleSimulateCheckout}
                    disabled={orderSubmitted}
                    className="w-full inline-flex items-center justify-center py-3 bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-colors focus:outline-none disabled:opacity-50"
                  >
                    {orderSubmitted ? (
                      <span className="animate-pulse">Procesando...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2 text-amber-400" />
                        Comprar Directo (Simulado)
                      </>
                    )}
                  </button>

                </div>

              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
