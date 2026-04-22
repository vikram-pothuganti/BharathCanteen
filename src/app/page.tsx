"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const CATEGORIES = [
  { id: "all",       icon: "restaurant",      label: "All" },
  { id: "breakfast", icon: "breakfast_dining", label: "Breakfast" },
  { id: "north",     icon: "lunch_dining",     label: "North Indian" },
  { id: "juices",    icon: "local_bar",        label: "Juices" },
  { id: "bakery",    icon: "bakery_dining",    label: "Bakery" },
  { id: "desserts",  icon: "icecream",         label: "Desserts" },
];

const SPECIALS = [
  {
    id: 1,
    name: "Harvest Buddha Bowl",
    tag: "Healthy & Energizing",
    price: 180,
    kcal: "420 kcal",
    rating: 4.9,
    badge: "Chef's Pick",
    wide: true,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0uQ62xoexQN2Ja2nZ5d_GDCuSoz5MoZZhEgAZowNer5lur85p7ALKkcSXXcfehF00DdGd-nOxT2DIrXpPJcvcuoTvsi5eZxXpnSCZUqQ-8eO4joKbr6-DmnRj0AailgAk5VxZdpFZB8nJYHx9YOPYrUHybZz1DOHs6Od1weE4TTiJo_vWyYdboHRb3EFfeRfizExpUaMznzESyRQhlZ8-U-X1HyAlOS-QlKRoUvZMtVbwrZDg7iKhm2YPJoQU6bRFoYIKJL5IAUS2",
  },
  {
    id: 2,
    name: "Spicy Paneer Burger",
    tag: "North Indian Fusion",
    price: 120,
    kcal: "560 kcal",
    rating: 4.7,
    badge: "Popular",
    wide: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEMo2t07mOQ5olSh7N0rrOrOH2e-j99C1WZfpWa2JOTMZvmWhwrwS0HuXiRQzc1XFoqCx79zBecuhgZ7zUu4QAxgjTaAA1Xo068-w_GacNP12RqkYnAAPaN-_LvAA9wQpyk1UvDSRpzvGQy_WG8MOJV7rQdnHijln7lfZD6FWMOyqfph0meXC7i3DV6uaUXZo8AL72Bo-C3Ou8jJmoKBdGJfeChRCrYh-YRPYtVlW9Jm3yitr_Vf33yO_U3mne4Y3u3dBxKDRhnkfn",
  },
  {
    id: 3,
    name: "Margherita Slice",
    tag: "Italian Classic",
    price: 85,
    kcal: "310 kcal",
    rating: 4.6,
    badge: "New",
    wide: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASRuhVGSzbst_pQ-B817HUg-6fThB4Jd8UXuzfs1zPHKGSLNc9ujLbv_POi1NTPjbNxxb8xsY8TVIyvoKoZEbo0dAuGcE-T7tKOTM5Ye80-bn8tsUp9IkwXggxLI6OQYPnrO3hdRJG_xq-JKecNVI06a-OMegpFPM8Ux-4MBxuKKO2EH5ValP6WanQLm8cVU_N4Qnk4OX7Sz_emCYx7KmgEsO5nj3YeGe5jphGhIYSBzNBE4HFIM_EwKpVKv5iWd2tChnkHbVUmypk",
  },
];

const SERVICES = [
  { icon: "electric_bolt", label: "Quick Pickup",  desc: "Ready in 10 min",      href: "/menu",   color: "text-amber-500" },
  { icon: "event_seat",    label: "Table Booking", desc: "Reserve your spot",    href: "/booking", color: "text-sky-500" },
  { icon: "history",       label: "Reorder",       desc: "Your last favourites", href: "/orders",  color: "text-green-500" },
  { icon: "support_agent", label: "Support",        desc: "24/7 help centre",     href: "/support", color: "text-purple-500" },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [toast, setToast] = useState<string | null>(null);

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart((prev) => ({ ...prev, [item.id]: (prev[item.id] ?? 0) + 1 }));
    setToast(`${item.name} added to cart!`);
    setTimeout(() => setToast(null), 2000);
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = SPECIALS.reduce(
    (sum, s) => sum + s.price * (cart[s.id] ?? 0),
    0
  );

  return (
    <>
      {/* ── Header ── */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-zinc-200 sticky top-0 z-50 flex justify-between items-center px-4 h-16 w-full">
        <div className="flex items-center gap-3">
          <button className="p-2 text-primary hover:bg-zinc-100 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-xl font-extrabold text-primary tracking-tight font-display">
            Bharath Canteen
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/cart" className="relative p-2 text-zinc-500 hover:text-primary hover:bg-zinc-100 rounded-full transition-all">
            <span className="material-symbols-outlined">shopping_cart</span>
            {totalItems > 0 && (
              <motion.span
                key={totalItems}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-primary text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center font-bold"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>
          <div className="h-8 w-8 rounded-full bg-zinc-200 overflow-hidden border border-zinc-300">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDScEGfqjOfXel_fnmwsVH3zy1Kx9teattVDW4avFSw15_KsG2tBL771mOZHlM1XPipBrwehFEdkU1qqOMzTt9tACJG7vQD_LO_5jt1WS1hBPyX6g3fbgzCGO7se50LWF-VaOetod6Xp2V7Jd5IJrjmhHeoa_HiB3vf95BPyT1mRlKdoDcQaHUtWOP5_uhMJS-ZC399A-YKlCMtOmG51zJi-WMH2njuCsahPwCKliqzQXHP07eQyQ0puMnE7kgP1RfJWe_nmcNRGAtL"
            />
          </div>
        </div>
      </header>

      {/* ── Toast ── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-on-surface text-surface text-sm font-semibold px-5 py-3 rounded-full shadow-2xl flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pb-32">
        {/* ── Hero ── */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[480px] w-full overflow-hidden"
        >
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" as const }}
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8ZTi_WhVo__blsmrRF70kFG7WQPencM5TqhkXRy-krOP-aIZ4uKt-325PsAlJPLRm1TiSwY-5FRxb53dbd-3qtKRMzbiRe0-YuaJ6tZq5GLrhZWXyu6EfUXCZugPz7ofn81G43y_L4RPGjoCWMDaYDJtMwf3pVv8wdmxTy48RZb-YjGnWAcb5L8f-eBPM86Cdw8_gnQAz2O8HXb-QeoCAARZObEcENFTzhiF2tnlep8H5mZ3aFtyLJ9EMR3WN1GhmCIe8GmXKm4ye"
            alt="Gourmet food"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold w-fit uppercase tracking-widest"
            >
              Now Serving
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl text-white font-extrabold leading-tight font-display"
            >
              Fresh Bites for<br />Every Mind
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base text-zinc-300"
            >
              Premium campus dining · Order in 60 seconds
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-2 mt-4"
            >
              <Link
                href="/menu"
                className="bg-primary text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 shadow-xl active:scale-95 hover:bg-[#9a0010] transition-all"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant_menu</span>
                Browse Full Menu
              </Link>
              <Link
                href="/login"
                className="bg-white/15 backdrop-blur-md text-white border border-white/40 font-semibold py-4 rounded-full flex items-center justify-center gap-2 active:scale-95 hover:bg-white/25 transition-all"
              >
                <span className="material-symbols-outlined">login</span>
                Sign In / Sign Up
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Category Chips ── */}
        <section className="px-5 pt-8 pb-3">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl font-display">Browse Categories</h3>
            <Link href="/menu" className="text-primary text-sm font-semibold flex items-center hover:underline">
              See all<span className="material-symbols-outlined text-base">chevron_right</span>
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {CATEGORIES.map((cat, i) => {
              const active = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer group`}
                >
                  <motion.div
                    animate={{
                      backgroundColor: active ? "#b31217" : "#ffffff",
                      color: active ? "#ffffff" : "#71717a",
                      boxShadow: active
                        ? "0 4px 14px rgba(179,18,23,0.35)"
                        : "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                    transition={{ duration: 0.25 }}
                    className="h-16 w-16 rounded-2xl flex items-center justify-center border border-zinc-100"
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {cat.icon}
                    </span>
                  </motion.div>
                  <span className={`text-[11px] font-semibold transition-colors ${active ? "text-primary" : "text-zinc-500 group-hover:text-zinc-800"}`}>
                    {cat.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* ── Today's Specials ── */}
        <section className="px-5 py-5">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h3 className="font-bold text-xl font-display">Today's Specials</h3>
              <p className="text-xs text-zinc-500">Hand-picked · Fresh daily</p>
            </div>
            <Link href="/menu" className="text-primary font-semibold text-sm flex items-center group hover:underline">
              View all
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {SPECIALS.map((item, i) => {
              const qty = cart[item.id] ?? 0;
              return (
                <motion.div
                  key={item.id}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className={`${item.wide ? "col-span-2 relative h-52" : "bg-white rounded-3xl overflow-hidden shadow-premium flex flex-col group border border-transparent hover:border-primary/10"} cursor-pointer`}
                >
                  {item.wide ? (
                    // Wide hero card
                    <div className="relative h-52 rounded-3xl overflow-hidden shadow-premium group">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        src={item.img}
                        alt={item.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div>
                          <h4 className="text-white font-bold text-xl font-display">{item.name}</h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-white/80 text-xs">{item.tag}</span>
                            <span className="text-white/60 text-xs">·</span>
                            <span className="text-white/70 text-xs">{item.kcal}</span>
                            <span className="text-white/60 text-xs">·</span>
                            <span className="text-yellow-400 text-xs font-bold flex items-center gap-0.5">
                              <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              {item.rating}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold text-lg">₹{item.price}</span>
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={() => addToCart(item)}
                            className="bg-white rounded-full h-10 w-10 flex items-center justify-center text-primary shadow-lg hover:bg-primary hover:text-white transition-colors"
                          >
                            {qty > 0 ? (
                              <span className="text-sm font-bold">{qty}</span>
                            ) : (
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
                            )}
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Compact card
                    <>
                      <div className="h-36 relative overflow-hidden">
                        <img
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          src={item.img}
                          alt={item.name}
                        />
                        <span className="absolute top-2 right-2 bg-secondary text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase">
                          {item.badge}
                        </span>
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <h4 className="font-bold text-sm font-display group-hover:text-primary transition-colors leading-tight">{item.name}</h4>
                        <p className="text-[11px] text-zinc-500 mt-0.5">{item.tag}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="material-symbols-outlined text-[12px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="text-[11px] font-semibold text-zinc-600">{item.rating}</span>
                          <span className="text-[11px] text-zinc-400 ml-1">{item.kcal}</span>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-primary font-bold">₹{item.price}</span>
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={() => addToCart(item)}
                            className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold hover:bg-[#9a0010] transition-colors shadow-md"
                          >
                            {qty > 0 ? qty : <span className="material-symbols-outlined text-[18px]">add</span>}
                          </motion.button>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Canteen Services ── */}
        <section className="px-5 py-5 mt-2 bg-zinc-50/80">
          <h3 className="font-bold text-xl mb-1 font-display text-center">Canteen Services</h3>
          <p className="text-xs text-zinc-500 text-center mb-5">Everything you need, right here</p>
          <div className="grid grid-cols-2 gap-3">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href={s.href}
                  className="bg-white p-5 rounded-2xl flex flex-col gap-2 border border-zinc-100 shadow-sm hover:border-primary/20 hover:shadow-md transition-all group block"
                >
                  <span className={`material-symbols-outlined text-3xl ${s.color} group-hover:scale-110 transition-transform`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {s.icon}
                  </span>
                  <div>
                    <p className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">{s.label}</p>
                    <p className="text-[11px] text-zinc-500">{s.desc}</p>
                  </div>
                  <span className="material-symbols-outlined text-base text-zinc-300 group-hover:text-primary group-hover:translate-x-1 transition-all self-end">
                    arrow_forward
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Floating Cart Banner (only visible when items in cart) ── */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring" as const, stiffness: 260, damping: 20 }}
            className="fixed bottom-24 left-4 right-4 z-40"
          >
            <Link href="/cart">
              <div className="w-full bg-primary text-white rounded-2xl px-5 py-4 flex items-center justify-between shadow-2xl hover:bg-[#9a0010] transition-colors">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
                  <div>
                    <p className="text-sm font-bold">{totalItems} Item{totalItems > 1 ? "s" : ""} in Cart</p>
                    <p className="text-[11px] opacity-80">Tap to review your order</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold">₹{totalPrice}</span>
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom Nav ── */}
      <nav className="bg-white/95 backdrop-blur-lg border-t border-zinc-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] fixed bottom-0 z-50 rounded-t-2xl w-full flex justify-around items-center h-20 px-2">
        {[
          { href: "/",       icon: "home",          label: "Home",    active: true },
          { href: "/menu",   icon: "restaurant",    label: "Menu",    active: false },
          { href: "/cart",   icon: "shopping_cart", label: "Cart",    active: false },
          { href: "/orders", icon: "history",       label: "Orders",  active: false },
          { href: "/login",  icon: "person",        label: "Profile", active: false },
        ].map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            className={`flex flex-col items-center justify-center rounded-xl px-3 py-1 text-[10px] font-medium transition-all active:scale-90 ${
              nav.active
                ? "text-primary bg-primary/10"
                : "text-zinc-400 hover:text-primary"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: nav.active ? "'FILL' 1" : "'FILL' 0" }}
            >
              {nav.icon}
            </span>
            {nav.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
