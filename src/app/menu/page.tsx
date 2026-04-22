"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, Suspense } from 'react';
import { MENU_ITEMS, CATEGORIES } from '@/data/menu';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: Math.min(i * 0.04, 0.5), type: "spring" as const, stiffness: 300, damping: 24 },
  }),
};

function MenuContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [toast, setToast] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 20;

  const addToCart = (item: { id: number; name: string }) => {
    setCart((prev) => ({ ...prev, [item.id]: (prev[item.id] ?? 0) + 1 }));
    setToast(`${item.name} added!`);
    setTimeout(() => setToast(null), 1500);
  };
  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) next[id]--; else delete next[id];
      return next;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = MENU_ITEMS.reduce((sum, item) => sum + item.price * (cart[item.id] ?? 0), 0);

  const filtered = useMemo(() => {
    setPage(1);
    return MENU_ITEMS.filter((item) => {
      const matchesCat = activeCategory === "All" || item.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q || item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visible = filtered.slice(0, page * PER_PAGE);
  const hasMore = visible.length < filtered.length;

  return (
    <div className="bg-surface font-sans text-on-surface overflow-x-hidden min-h-screen">
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-on-surface text-surface text-sm font-semibold px-5 py-3 rounded-full shadow-2xl flex items-center gap-2">
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>{toast}
          </motion.div>
        )}
      </AnimatePresence>

      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-zinc-200 sticky top-0 z-50 flex justify-between items-center px-4 h-16 w-full">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-full active:scale-95 transition-all" aria-label="Back"><span className="material-symbols-outlined">arrow_back</span></Link>
          <h1 className="text-xl font-extrabold text-primary tracking-tight font-display">Full Menu</h1>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/cart" className="relative p-2 text-zinc-500 hover:text-primary hover:bg-zinc-100 rounded-full transition-all" aria-label="Cart">
            <span className="material-symbols-outlined">shopping_cart</span>
            {totalItems > 0 && <motion.span key={totalItems} initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 bg-primary text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center font-bold">{totalItems}</motion.span>}
          </Link>
        </div>
      </header>

      <main className="px-4 pb-32 pt-4 max-w-md mx-auto">
        {/* Search */}
        <div className="relative flex items-center group mb-4">
          <span className="material-symbols-outlined absolute left-4 text-zinc-400 group-focus-within:text-primary transition-colors">search</span>
          <input className="w-full bg-white border border-zinc-200 rounded-xl py-3.5 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-base placeholder:text-zinc-400 shadow-sm transition-all"
            placeholder={`Search ${filtered.length} dishes...`} type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} aria-label="Search menu" />
          {searchQuery && <button className="absolute right-3 p-2 text-zinc-400 hover:text-zinc-600 rounded-full" onClick={() => setSearchQuery("")} aria-label="Clear"><span className="material-symbols-outlined text-[18px]">close</span></button>}
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-3 mb-3">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-semibold text-sm transition-all active:scale-95 ${activeCategory === cat ? "bg-primary text-white shadow-md" : "bg-white text-zinc-600 border border-zinc-200 hover:border-primary/40"}`}
              aria-pressed={activeCategory === cat}>{cat}</button>
          ))}
        </div>

        <p className="text-xs text-zinc-500 mb-3 font-medium">{filtered.length} item{filtered.length !== 1 ? "s" : ""} {activeCategory !== "All" ? `in ${activeCategory}` : ""}{searchQuery ? ` matching "${searchQuery}"` : ""}</p>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.section key={`${activeCategory}-${searchQuery}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-2 gap-3">
            {visible.length === 0 ? (
              <div className="col-span-2 text-center py-16">
                <span className="material-symbols-outlined text-5xl text-zinc-300 mb-3 block">search_off</span>
                <p className="text-zinc-500 font-semibold">No dishes found</p>
                <p className="text-xs text-zinc-400 mt-1">Try a different category or search term</p>
              </div>
            ) : visible.map((food, i) => {
              const qty = cart[food.id] ?? 0;
              return (
                <motion.div key={food.id} custom={i} initial="hidden" animate="show" variants={fadeUp} whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-premium flex flex-col group cursor-pointer border border-transparent hover:border-primary/10 transition-colors">
                  <div className="relative h-28 overflow-hidden">
                    <img alt={food.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={food.img} loading="lazy" />
                    {food.veg && <span className="absolute top-2 left-2 bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">VEG</span>}
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-1.5 py-0.5 flex items-center gap-0.5 shadow-sm">
                      <span className="material-symbols-outlined text-[12px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-[10px] font-bold">{food.rating}</span>
                    </div>
                  </div>
                  <div className="p-2.5 flex flex-col flex-grow">
                    <h3 className="font-semibold text-[13px] leading-tight mb-0.5 font-display group-hover:text-primary transition-colors truncate">{food.name}</h3>
                    <p className="text-[10px] text-zinc-500 line-clamp-1">{food.desc}</p>
                    <div className="flex items-center gap-2 mt-1 text-[9px] text-zinc-400">
                      <span>{food.kcal}</span>
                      {food.prepTime && <><span>·</span><span>{food.prepTime}</span></>}
                      {food.spiceLevel && food.spiceLevel !== 'None' && <><span>·</span><span>🌶 {food.spiceLevel}</span></>}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-primary text-sm">₹{food.price}</span>
                      {qty > 0 ? (
                        <div className="flex items-center gap-1 bg-primary/10 rounded-full px-0.5">
                          <motion.button whileTap={{ scale: 0.85 }} onClick={() => removeFromCart(food.id)} className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center shadow-sm" aria-label="Remove one"><span className="material-symbols-outlined text-[14px]">remove</span></motion.button>
                          <span className="text-xs font-bold text-primary w-4 text-center">{qty}</span>
                          <motion.button whileTap={{ scale: 0.85 }} onClick={() => addToCart(food)} className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm" aria-label="Add one"><span className="material-symbols-outlined text-[14px]">add</span></motion.button>
                        </div>
                      ) : (
                        <motion.button whileTap={{ scale: 0.85 }} onClick={() => addToCart(food)} className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center shadow-md" aria-label={`Add ${food.name}`}><span className="material-symbols-outlined text-[16px]">add</span></motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.section>
        </AnimatePresence>

        {hasMore && (
          <motion.button whileTap={{ scale: 0.97 }} onClick={() => setPage((p) => p + 1)}
            className="w-full mt-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm font-semibold text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
            Load More ({filtered.length - visible.length} remaining)
            <span className="material-symbols-outlined text-base">expand_more</span>
          </motion.button>
        )}
      </main>

      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ type: "spring" as const, stiffness: 260, damping: 20 }} className="fixed bottom-24 left-4 right-4 z-40">
            <Link href="/cart"><div className="w-full bg-primary text-white rounded-2xl px-5 py-4 flex items-center justify-between shadow-2xl hover:bg-[#9a0010] transition-colors">
              <div className="flex items-center gap-3"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_basket</span><div><p className="text-sm font-bold">{totalItems} Item{totalItems > 1 ? "s" : ""}</p><p className="text-[11px] opacity-80">Bharath Canteen</p></div></div>
              <div className="flex items-center gap-1"><span className="font-bold">₹{totalPrice}</span><span className="material-symbols-outlined">chevron_right</span></div>
            </div></Link>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="bg-white/95 backdrop-blur-lg border-t border-zinc-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] fixed bottom-0 z-50 rounded-t-2xl w-full flex justify-around items-center h-20 px-2" aria-label="Navigation">
        {[{href:"/",icon:"home",label:"Home",active:false},{href:"/menu",icon:"restaurant",label:"Menu",active:true},{href:"/cart",icon:"shopping_cart",label:"Cart",active:false},{href:"/orders",icon:"history",label:"Orders",active:false},{href:"/login",icon:"person",label:"Profile",active:false}].map((n) => (
          <Link key={n.href} href={n.href} className={`flex flex-col items-center justify-center rounded-xl px-3 py-1 text-[10px] font-medium transition-all active:scale-90 ${n.active?"text-primary bg-primary/10":"text-zinc-400 hover:text-primary"}`} aria-current={n.active?"page":undefined}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: n.active?"'FILL' 1":"'FILL' 0" }}>{n.icon}</span>{n.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default function MenuPage() {
  return <Suspense fallback={<div className="min-h-screen bg-surface flex items-center justify-center"><span className="material-symbols-outlined text-4xl text-primary animate-spin">progress_activity</span></div>}><MenuContent /></Suspense>;
}
