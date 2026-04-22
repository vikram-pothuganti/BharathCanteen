"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

type OrderStatus = "all" | "active" | "completed" | "cancelled";

const ORDERS = [
  {
    id: "#8842", date: "Today, 12:30 PM", status: "preparing" as const,
    statusLabel: "Preparing", statusIcon: "restaurant",
    statusColor: "bg-amber-100 text-amber-800",
    items: [{ name: "Paneer Butter Masala + 2 Naan", cat: "North Indian Special", price: 240 }],
    total: 240,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFWIhCYJN-Iipr9aAMNKo_nBk4Je9COL7MoayfkacLa-vJxyOOeYsi3BB8toU9cs0P8WhNA1ODYDg4Va_ymGbCZyc63aEDPrD0sL9PEDEG_zefLUGffEtyT0FbztIcY1DJoJL7puqtFN9X5JWN4FgX3mHzoCtnnzEoY0FOJ4J0YhDjldr9nR5jFdXDVSDJGdMxXASAC4vPub_xGRbpLhpfZdvkg8r93psXRIAzbpdbesZ7ckcRCtw-BDyn-883v-hDKGIVKVj2GNdH",
    badge: "NEW",
  },
  {
    id: "#8839", date: "Today, 11:15 AM", status: "ready" as const,
    statusLabel: "Ready for Pickup", statusIcon: "check_circle",
    statusColor: "bg-emerald-100 text-emerald-700",
    items: [
      { name: "Cold Coffee with Ice Cream", cat: "", price: 85 },
      { name: "Veg Grilled Sandwich ×2", cat: "", price: 120 },
    ],
    total: 205, counter: 4,
  },
  {
    id: "#8812", date: "Yesterday, 07:45 PM", status: "completed" as const,
    statusLabel: "Picked Up", statusIcon: "task_alt",
    statusColor: "bg-zinc-100 text-zinc-500",
    items: [{ name: "Masala Dosa, Filter Coffee", cat: "2 Items", price: 115 }],
    total: 115,
  },
  {
    id: "#8795", date: "Oct 24, 01:20 PM", status: "completed" as const,
    statusLabel: "Completed", statusIcon: "done_all",
    statusColor: "bg-zinc-100 text-zinc-500",
    items: [{ name: "Classic Veg Burger Combo", cat: "", price: 160 }],
    total: 160,
  },
];

const FILTERS: { label: string; value: OrderStatus }[] = [
  { label: "All Orders", value: "all" },
  { label: "Active",     value: "active" },
  { label: "Completed",  value: "completed" },
  { label: "Cancelled",  value: "cancelled" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function OrdersPage() {
  const [filter, setFilter] = useState<OrderStatus>("all");
  const [toast, setToast] = useState<string | null>(null);

  const filtered = ORDERS.filter((o) => {
    if (filter === "all") return true;
    if (filter === "active") return o.status === "preparing" || o.status === "ready";
    if (filter === "completed") return o.status === "completed";
    return false; // cancelled — none in sample data
  });

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen">
      {/* Toast */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-on-surface text-surface text-sm font-semibold px-5 py-3 rounded-full shadow-2xl flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          {toast}
        </motion.div>
      )}

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-zinc-200 sticky top-0 z-50 flex justify-between items-center px-4 h-16 w-full">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-full active:scale-95 transition-all" aria-label="Back">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-xl font-extrabold text-primary tracking-tight font-display">Order History</h1>
        </div>
        <div className="bg-zinc-100 p-2 rounded-xl">
          <span className="material-symbols-outlined text-primary">history</span>
        </div>
      </header>

      <main className="max-w-md mx-auto px-5 pt-4 pb-32">
        {/* Subtitle */}
        <p className="text-sm text-zinc-500 mb-4">Track your recent campus meals</p>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 -mx-5 px-5">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-semibold text-sm transition-all active:scale-95 ${
                filter === f.value
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:border-primary/40"
              }`}
              aria-pressed={filter === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Orders */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-5xl text-zinc-300 mb-3 block">receipt_long</span>
              <p className="text-zinc-500 font-semibold">No orders found</p>
              <p className="text-xs text-zinc-400 mt-1">Try a different filter</p>
            </div>
          ) : (
            filtered.map((order, i) => (
              <motion.div
                key={order.id}
                custom={i}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className={`bg-white rounded-2xl shadow-premium overflow-hidden border border-zinc-50 ${
                  order.status === "completed" ? "opacity-85" : ""
                }`}
              >
                {/* Order Header */}
                <div className="p-4 border-b border-zinc-100 flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-base font-display">Order {order.id}</span>
                      {order.badge && (
                        <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-[10px] font-bold">{order.badge}</span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-500 italic">{order.date}</p>
                  </div>
                  <span className={`${order.statusColor} px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1`}>
                    <span className="material-symbols-outlined text-[14px]">{order.statusIcon}</span>
                    {order.statusLabel}
                  </span>
                </div>

                {/* Order Body */}
                <div className="p-4">
                  {order.img ? (
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <img alt={order.items[0].name} className="w-full h-full object-cover" src={order.img} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm font-display">{order.items[0].name}</h4>
                        <p className="text-xs text-zinc-500">{order.items[0].cat}</p>
                        <p className="text-primary font-bold text-sm mt-1">₹{order.total.toFixed(2)}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 mb-4">
                      {order.items.map((item, j) => (
                        <div key={j} className="flex justify-between items-center text-sm">
                          <span className="text-zinc-700">{item.name}</span>
                          <span className="font-semibold">₹{item.price.toFixed(2)}</span>
                        </div>
                      ))}
                      {order.items.length > 1 && (
                        <div className="flex justify-between items-center pt-2 border-t border-dashed border-zinc-200">
                          <span className="font-semibold text-sm text-zinc-600">Total Paid</span>
                          <span className="font-bold text-primary">₹{order.total.toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Ready info */}
                  {order.status === "ready" && order.counter && (
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 flex items-start gap-3 mb-4">
                      <span className="material-symbols-outlined text-emerald-600 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                      <div>
                        <p className="text-xs font-bold text-emerald-800">Ready at Counter {order.counter}</p>
                        <p className="text-[10px] text-emerald-600">Please show your QR code at the counter.</p>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    {order.status === "preparing" && (
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        className="flex-grow bg-primary text-white py-2.5 rounded-xl font-semibold text-sm active:scale-95 transition-all flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        Track Order
                      </motion.button>
                    )}
                    {order.status === "completed" && (
                      <>
                        <motion.button
                          whileTap={{ scale: 0.96 }}
                          onClick={() => { setToast("Items added to cart!"); setTimeout(() => setToast(null), 2000); }}
                          className="flex-1 border border-primary text-primary py-2.5 rounded-xl font-semibold text-sm active:scale-95 transition-all flex items-center justify-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[16px]">replay</span>
                          Reorder
                        </motion.button>
                        <motion.button
                          whileTap={{ scale: 0.96 }}
                          className="flex-1 bg-zinc-100 text-zinc-700 py-2.5 rounded-xl font-semibold text-sm active:scale-95 transition-all flex items-center justify-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[16px]">star</span>
                          Rate Food
                        </motion.button>
                      </>
                    )}
                    {order.status === "ready" && (
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        className="flex-grow bg-emerald-600 text-white py-2.5 rounded-xl font-semibold text-sm active:scale-95 transition-all flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[16px]">qr_code_2</span>
                        Show QR Code
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="bg-white/95 backdrop-blur-lg border-t border-zinc-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] fixed bottom-0 z-50 rounded-t-2xl w-full flex justify-around items-center h-20 px-2" aria-label="Main Navigation">
        {[
          { href: "/",       icon: "home",          label: "Home",    active: false },
          { href: "/menu",   icon: "restaurant",    label: "Menu",    active: false },
          { href: "/cart",   icon: "shopping_cart",  label: "Cart",    active: false },
          { href: "/orders", icon: "history",        label: "Orders",  active: true },
          { href: "/login",  icon: "person",         label: "Profile", active: false },
        ].map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className={`flex flex-col items-center justify-center rounded-xl px-3 py-1 text-[10px] font-medium transition-all active:scale-90 ${
              nav.active ? "text-primary bg-primary/10" : "text-zinc-400 hover:text-primary"
            }`}
            aria-current={nav.active ? "page" : undefined}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: nav.active ? "'FILL' 1" : "'FILL' 0" }}>
              {nav.icon}
            </span>
            {nav.label}
          </Link>
        ))}
      </nav>

      {/* FAB */}
      <Link href="#" className="fixed bottom-24 right-4 bg-amber-600 text-white p-4 rounded-full shadow-lg active:scale-90 transition-transform z-40" aria-label="Contact support">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
      </Link>
    </div>
  );
}
