"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';

const CATEGORIES = ["All", "Snacks", "Meals", "Drinks", "Desserts"];

const MENU_ITEMS = [
  { id: 1, name: 'Masala Samosa',     desc: 'Crispy pastry with spiced potato, peas & cumin filling', price: 25,  rating: 4.8, kcal: '180 kcal', category: 'Snacks',   veg: true,  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuGHY-foRPUSNyVUQ0KlXG0HK1GJjYGnI7Ps9c4vtBu1uR4WxMU0moy3KqAUJa-mCnuXnQSCe5xJrVOqUz6W_xsfIkl5onJTRSxBHs9jLUjsyQLXePxovdaf3yynu1emNhdwnyPwsAUhEW0jFJA677xktFn0_Gd0GarAPkY9QfeXwvsUQ2brba8_dT7Oy6cbg80aXCgR_BhWtO1OkRUCQtg2hSg4B0lv9p9EIONQHN5u29rkGyyH8VlOfPjQ1XZbBW_Hxb-At_tPtC' },
  { id: 2, name: 'Paneer Dosa',       desc: 'Crispy rice crepe stuffed with cottage cheese masala', price: 85,  rating: 4.9, kcal: '340 kcal', category: 'Meals',    veg: true,  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD31ZHhUSC5b4X7mpsr5N5vnW3g6CqwEkAHSZ-nRt_k_PHjlmlGEfMmX5DIKK5bQq0gNS84xicC5EDqGjH9DP1ky5-UAflLQMR1J6-yLWEKF3m02iLeu_s5FrY56jWzUUQb-yAljTtFNaf1RjAjMDjNFOMBsJL1WHLcmukVqdueLZPGthjmjTLMLHOEKxIBgHeWfZuteLI2j4mZNpB6dvLQqHybh2vhHVq8wOnxnuvhX0ukn_HrpjDYPySfqtb3G-8pFXwns2TPzupR' },
  { id: 3, name: 'Health Bowl',       desc: 'Fresh seasonal greens, chickpeas, quinoa & tahini dressing', price: 120, rating: 4.5, kcal: '290 kcal', category: 'Meals',    veg: true,  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkI65f8KHPAOz_ylDLWECl_VWA3pvlCg7yT-tUE4h7WmJjxIonu-AgMMJHvLQ_SfbmVk6ZW1xOIYl1vmsN_DZnxNAdTwSEe6NljAn7j_j7u1i9Nw_hBNcFahGciGQGC00MXB8kWipgz1cqkuDDJF8ziyBjXoyz3_G6x6sq05G2Ip05vqwrrV589UcDdskpYE0XXbCgImk7A__nkW9kjPz2ubchb6mx18P96RvA-pBa63Uf5UJ-FgU5qjb7_Zy4kV7GDBcTCeoSfzgl' },
  { id: 4, name: 'Filter Coffee',     desc: 'Freshly brewed South Indian filter coffee with chicory', price: 35,  rating: 4.7, kcal: '90 kcal',  category: 'Drinks',   veg: true,  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPM6WYLLSDyrRmr44YgOBDOZ5XjpyF6m1Bwd_RnOIxIINWFtELikPBEla44dYgQFuOROqWy8voJiKkm7WMm3-9T0oEpuqlJXLIHCzi7BW8N5BkLzRyOsNKvGoLW6afgljvUoXSYtA5dxUk6r1P_Twq3xrMCJLl68qbyBGBWNwYt3kh8MGdA4KwxToBmaG2OJWJfjmfJGFYWf41bYW3iVL7fc3Y8rfiYSIt7-b8wbzvDkQrN_4cMv9QoDQFF45BCqF2LJe4KPArS2iU' },
  { id: 5, name: 'Gulab Jamun',       desc: 'Soft milk dumplings soaked in cardamom-rose syrup', price: 40,  rating: 4.6, kcal: '210 kcal', category: 'Desserts', veg: true,  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0uQ62xoexQN2Ja2nZ5d_GDCuSoz5MoZZhEgAZowNer5lur85p7ALKkcSXXcfehF00DdGd-nOxT2DIrXpPJcvcuoTvsi5eZxXpnSCZUqQ-8eO4joKbr6-DmnRj0AailgAk5VxZdpFZB8nJYHx9YOPYrUHybZz1DOHs6Od1weE4TTiJo_vWyYdboHRb3EFfeRfizExpUaMznzESyRQhlZ8-U-X1HyAlOS-QlKRoUvZMtVbwrZDg7iKhm2YPJoQU6bRFoYIKJL5IAUS2' },
  { id: 6, name: 'Vada Pav',          desc: 'Mumbai-style spicy potato fritter in a soft bun', price: 30,  rating: 4.4, kcal: '260 kcal', category: 'Snacks',   veg: true,  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEMo2t07mOQ5olSh7N0rrOrOH2e-j99C1WZfpWa2JOTMZvmWhwrwS0HuXiRQzc1XFoqCx79zBecuhgZ7zUu4QAxgjTaAA1Xo068-w_GacNP12RqkYnAAPaN-_LvAA9wQpyk1UvDSRpzvGQy_WG8MOJV7rQdnHijln7lfZD6FWMOyqfph0meXC7i3DV6uaUXZo8AL72Bo-C3Ou8jJmoKBdGJfeChRCrYh-YRPYtVlW9Jm3yitr_Vf33yO_U3mne4Y3u3dBxKDRhnkfn' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, type: "spring" as const, stiffness: 300, damping: 24 },
  }),
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [toast, setToast] = useState<string | null>(null);

  const addToCart = (item: { id: number; name: string }) => {
    setCart((prev) => ({ ...prev, [item.id]: (prev[item.id] ?? 0) + 1 }));
    setToast(`${item.name} added!`);
    setTimeout(() => setToast(null), 1500);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) next[id]--;
      else delete next[id];
      return next;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = MENU_ITEMS.reduce((sum, item) => sum + item.price * (cart[item.id] ?? 0), 0);

  const filtered = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCat = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-surface font-sans text-on-surface overflow-x-hidden min-h-screen">
      {/* Toast */}
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

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-zinc-200 sticky top-0 z-50 flex justify-between items-center px-4 h-16 w-full">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-full active:scale-95 transition-all" aria-label="Back to Home">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-xl font-extrabold text-primary tracking-tight font-display">Full Menu</h1>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/cart" className="relative p-2 text-zinc-500 hover:text-primary hover:bg-zinc-100 rounded-full transition-all" aria-label="View Cart">
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
          <div className="w-8 h-8 rounded-full bg-zinc-200 overflow-hidden border border-zinc-200">
            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD460_Dr3uOb3jnbYCjlBVMpdbAZbBM7qLMVQMwFnN9tC9nUGjeuK07pT2zeUSfN-oXR5DkpufB9g495qO2jv7xlSAZoyfc0QQ8ynw_MNVkQJrbgzAjPJ9_p_Obzb5BwB-y-DZ1OKj8dRSULxHyOeXw6rwW8OuAsH0HzjjC9TjFLdvRfER1a7Hw_r-KL5Qqkb1ymKDrutftoxnEnPHg3sHUCFc2STveqOUGc4R3EfGIUk33B14iQjDpK9W7o9rY8mWs5fJNcvI_AeC" />
          </div>
        </div>
      </header>

      <main className="px-4 pb-32 pt-4 max-w-md mx-auto">
        {/* Welcome */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-5"
        >
          <h2 className="font-bold text-2xl text-on-surface mb-0.5 font-display">Hello, Arjun!</h2>
          <p className="text-sm text-on-surface/70">What are you craving today?</p>
        </motion.section>

        {/* Search */}
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-5"
        >
          <div className="relative flex items-center group">
            <span className="material-symbols-outlined absolute left-4 text-zinc-400 group-focus-within:text-primary transition-colors">search</span>
            <input
              className="w-full bg-white border border-zinc-200 rounded-xl py-3.5 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-base placeholder:text-zinc-400 shadow-sm transition-all"
              placeholder="Search for dishes..."
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search menu"
            />
            {searchQuery && (
              <button
                className="absolute right-3 p-2 text-zinc-400 hover:text-zinc-600 rounded-full transition-colors"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>
        </motion.section>

        {/* Category Chips */}
        <section className="mb-6">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-2">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  whileTap={{ scale: 0.93 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                    active
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-zinc-600 border border-zinc-200 hover:text-primary hover:border-primary/40"
                  }`}
                  aria-pressed={active}
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Results count */}
        <p className="text-xs text-zinc-500 mb-3 font-medium">
          {filtered.length} item{filtered.length !== 1 ? "s" : ""} found
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          {searchQuery ? ` matching "${searchQuery}"` : ""}
        </p>

        {/* Food Grid */}
        <AnimatePresence mode="wait">
          <motion.section
            key={`${activeCategory}-${searchQuery}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 gap-3"
          >
            {filtered.length === 0 ? (
              <div className="col-span-2 text-center py-16">
                <span className="material-symbols-outlined text-5xl text-zinc-300 mb-3 block">search_off</span>
                <p className="text-zinc-500 font-semibold">No dishes found</p>
                <p className="text-xs text-zinc-400 mt-1">Try a different category or search term</p>
              </div>
            ) : (
              filtered.map((food, i) => {
                const qty = cart[food.id] ?? 0;
                return (
                  <motion.div
                    key={food.id}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-premium flex flex-col group cursor-pointer border border-transparent hover:border-primary/10 transition-colors"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img alt={food.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={food.img} />
                      {food.veg && (
                        <span className="absolute top-2 left-2 bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">VEG</span>
                      )}
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-0.5 flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-[13px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-[11px] font-bold text-on-surface">{food.rating}</span>
                      </div>
                    </div>
                    <div className="p-3 flex flex-col flex-grow">
                      <h3 className="font-semibold text-sm text-on-surface leading-tight mb-0.5 font-display group-hover:text-primary transition-colors">{food.name}</h3>
                      <p className="text-[11px] text-zinc-500 mb-1 flex-grow line-clamp-2">{food.desc}</p>
                      <p className="text-[10px] text-zinc-400 mb-2">{food.kcal}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="font-bold text-primary text-sm">₹{food.price}</span>
                        {qty > 0 ? (
                          <div className="flex items-center gap-1.5 bg-primary/10 rounded-full px-1">
                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              onClick={() => removeFromCart(food.id)}
                              className="w-7 h-7 rounded-full bg-white text-primary flex items-center justify-center shadow-sm"
                              aria-label={`Remove one ${food.name}`}
                            >
                              <span className="material-symbols-outlined text-[16px]">remove</span>
                            </motion.button>
                            <span className="text-sm font-bold text-primary w-4 text-center">{qty}</span>
                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              onClick={() => addToCart(food)}
                              className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shadow-sm"
                              aria-label={`Add one more ${food.name}`}
                            >
                              <span className="material-symbols-outlined text-[16px]">add</span>
                            </motion.button>
                          </div>
                        ) : (
                          <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={() => addToCart(food)}
                            className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#9a0010] transition-colors"
                            aria-label={`Add ${food.name} to cart`}
                          >
                            <span className="material-symbols-outlined text-[18px]">add</span>
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </motion.section>
        </AnimatePresence>
      </main>

      {/* Floating Cart */}
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
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_basket</span>
                  <div>
                    <p className="text-sm font-bold">{totalItems} Item{totalItems > 1 ? "s" : ""} in Cart</p>
                    <p className="text-[11px] opacity-80">Bharath University Canteen</p>
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

      {/* Bottom Nav */}
      <nav className="bg-white/95 backdrop-blur-lg border-t border-zinc-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] fixed bottom-0 z-50 rounded-t-2xl w-full flex justify-around items-center h-20 px-2" aria-label="Main Navigation">
        {[
          { href: "/",       icon: "home",          label: "Home",    active: false },
          { href: "/menu",   icon: "restaurant",    label: "Menu",    active: true },
          { href: "/cart",   icon: "shopping_cart",  label: "Cart",    active: false },
          { href: "/orders", icon: "history",        label: "Orders",  active: false },
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
    </div>
  );
}
