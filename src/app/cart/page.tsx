"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const INITIAL_CART = [
  { id: 1, name: 'Masala Dosa',       category: 'South Indian', price: 65,  qty: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfkB8v0XfHgDdbm3LM-RcrIVE-2yIcFii-il4CFcmNcLBG1p0UUoVQZXvu2-KMIRNPSHYBZUTUr5VeAtC9XAnLnQ81Cmp7r46wpA9io2OP0-mIno-SwossHSyRrthNtiH2OVGx8jFN6CyyJZW8HD_ui2WaEIt7zdSktbMaSbr2eilO3kyEgOCI9hWCzd8NYV6MhbOoBnM8QWNL3KOd2KQ7z-UcWHBF2JC_w7UzEsIo9AzZ-sqD53A5JPhRrFY_nMmi_MS_6Nb7VfwD' },
  { id: 2, name: 'University Burger', category: "Chef's Special", price: 120, qty: 2, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPJfqW-3CdiR3qy4pbHDyn99z1R4827FkSpQEVWGKhpwL4GYvXPoJfpQ7pbjNSKDZg_g0sKKl0Tj1gumFqqgyRmdVoYrLnGqVG8kCVwcOyCQOzWrM2mmbW5yNQJms7WZ3MDfpwH7hlnoJwaTpLBVuWtUdj_rBgtaVknmLzI_VEvsN_ZVqrpsK7TmEhNplNW5s5Q0teemDp3WwD-laAZyHBGbeittBDt-Z7EEQUUZYVrWBEcLEgSo1IsnqGgf45qj3clnvFaQqQrwdQ' },
];

export default function CartPage() {
  const [items, setItems] = useState(INITIAL_CART);
  const [notes, setNotes] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) => prev.map((item) =>
      item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
    ).filter((item) => item.qty > 0));
  };

  const removeItem = (id: number, name: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setToast(`${name} removed`);
    setTimeout(() => setToast(null), 2000);
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = Math.round(subtotal * 0.05 * 100) / 100;
  const discount = 15;
  const total = subtotal + tax - discount;
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-on-surface text-surface text-sm font-semibold px-5 py-3 rounded-full shadow-2xl flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm sticky top-0 z-50 flex justify-between items-center px-4 h-16 w-full">
        <div className="flex items-center gap-3">
          <Link href="/menu" className="active:scale-95 p-2 rounded-full hover:bg-zinc-100 transition-colors" aria-label="Back to menu">
            <span className="material-symbols-outlined text-zinc-600">arrow_back</span>
          </Link>
          <h1 className="text-xl font-extrabold text-primary tracking-tight font-display">Your Cart</h1>
        </div>
        <span className="text-sm font-semibold text-zinc-500">{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
      </header>

      <main className="max-w-md mx-auto px-5 pt-5 pb-44">
        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <span className="material-symbols-outlined text-6xl text-zinc-300 mb-4 block">shopping_cart</span>
            <h3 className="font-bold text-lg text-zinc-600 font-display">Your cart is empty</h3>
            <p className="text-sm text-zinc-400 mt-1 mb-6">Add items from the menu to get started</p>
            <Link href="/menu" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#9a0010] transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant_menu</span>
              Browse Menu
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Preparation Time */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-amber-50 text-amber-900 rounded-xl p-4 mb-5 flex items-center gap-4 border border-amber-200/50"
            >
              <div className="bg-amber-100 p-2 rounded-lg">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Estimated Preparation</p>
                <p className="font-bold text-lg text-primary font-display">15 – 20 Mins</p>
              </div>
            </motion.div>

            {/* Cart Items */}
            <section className="space-y-3 mb-6" aria-label="Cart items">
              <h2 className="font-bold text-lg font-display">Review Order</h2>
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100, height: 0, marginBottom: 0, padding: 0 }}
                    transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
                    className="bg-white rounded-2xl p-4 shadow-premium flex gap-4 relative overflow-hidden border border-zinc-50"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img className="w-full h-full object-cover" src={item.img} alt={item.name} />
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-base leading-tight font-display">{item.name}</h3>
                          <p className="text-xs text-zinc-500">{item.category}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.name)}
                          className="text-zinc-400 hover:text-red-500 p-1 -mr-1 -mt-1 transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-primary">₹{item.price * item.qty}</span>
                        <div className="flex items-center gap-2 bg-zinc-100 rounded-full px-1.5 py-1">
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={() => updateQty(item.id, -1)}
                            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-primary shadow-sm"
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            <span className="material-symbols-outlined text-[16px]">remove</span>
                          </motion.button>
                          <span className="font-bold w-5 text-center text-sm">{item.qty}</span>
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={() => updateQty(item.id, 1)}
                            className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white shadow-sm"
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            <span className="material-symbols-outlined text-[16px]">add</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </section>

            {/* Bill Summary */}
            <section className="bg-white rounded-2xl p-5 border border-zinc-100 mb-6" aria-label="Bill summary">
              <h3 className="font-bold text-xs text-zinc-500 mb-4 uppercase tracking-widest">Bill Summary</h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Item Total</span>
                  <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">Taxes & Charges (5%)</span>
                  <span className="font-semibold">₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span className="flex items-center gap-1">
                    University Discount
                    <span className="material-symbols-outlined text-[14px]">info</span>
                  </span>
                  <span className="font-semibold">- ₹{discount.toFixed(2)}</span>
                </div>
                <hr className="border-zinc-100 my-1" />
                <div className="flex justify-between items-center pt-1">
                  <span className="font-bold text-lg font-display">Total Pay</span>
                  <span className="font-bold text-lg text-primary font-display">₹{total.toFixed(2)}</span>
                </div>
              </div>
            </section>

            {/* Cooking Notes */}
            <section className="mb-6" aria-label="Cooking instructions">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-zinc-500">notes</span>
                <h3 className="font-semibold text-sm">Cooking Instructions</h3>
              </div>
              <textarea
                className="w-full bg-white border border-zinc-200 rounded-xl p-4 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-zinc-400 resize-none"
                placeholder="e.g. Please make it extra spicy, less oil..."
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                aria-label="Add cooking instructions"
              />
            </section>
          </>
        )}
      </main>

      {/* Bottom Checkout Bar */}
      {items.length > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-zinc-100 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50"
        >
          <div className="max-w-md mx-auto p-4 flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">University Wallet</span>
              <span className="font-semibold text-sm text-on-surface flex items-center gap-1">
                Bal: ₹1,240
                <span className="material-symbols-outlined text-[14px] text-primary">chevron_right</span>
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-white px-7 py-4 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg hover:bg-[#9a0010] transition-colors"
              onClick={() => {
                setToast("Order placed! 🎉 Redirecting...");
                setTimeout(() => setToast(null), 3000);
              }}
            >
              Place Order · ₹{total.toFixed(0)}
              <span className="material-symbols-outlined">arrow_forward</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
