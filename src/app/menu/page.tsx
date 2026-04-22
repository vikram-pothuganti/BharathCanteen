"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export default function MenuPage() {
  return (
    <div className="bg-surface font-sans text-on-surface overflow-x-hidden min-h-screen pb-safe">
      {/* Top App Bar */}
      <header className="bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50 flex justify-between items-center px-4 h-16 w-full">
        <div className="flex items-center gap-3">
          <button className="p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors rounded-full active:scale-95 duration-200">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-xl font-extrabold text-primary dark:text-primary-dark tracking-tight font-display">Bharath Canteen</h1>
        </div>
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} className="w-8 h-8 rounded-full bg-zinc-200 overflow-hidden border border-zinc-200 cursor-pointer">
            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD460_Dr3uOb3jnbYCjlBVMpdbAZbBM7qLMVQMwFnN9tC9nUGjeuK07pT2zeUSfN-oXR5DkpufB9g495qO2jv7xlSAZoyfc0QQ8ynw_MNVkQJrbgzAjPJ9_p_Obzb5BwB-y-DZ1OKj8dRSULxHyOeXw6rwW8OuAsH0HzjjC9TjFLdvRfER1a7Hw_r-KL5Qqkb1ymKDrutftoxnEnPHg3sHUCFc2STveqOUGc4R3EfGIUk33B14iQjDpK9W7o9rY8mWs5fJNcvI_AeC" />
          </motion.div>
        </div>
      </header>

      <main className="px-4 pb-32 pt-4 max-w-md mx-auto">
        {/* Welcome Section */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="font-bold text-3xl text-on-surface mb-1 font-display">Hello, Arjun!</h2>
          <p className="text-base text-on-surface/80">What are you craving today?</p>
        </motion.section>

        {/* Search Bar */}
        <motion.section 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative flex items-center group">
            <span className="material-symbols-outlined absolute left-4 text-zinc-400 group-focus-within:text-primary transition-colors">search</span>
            <input className="w-full bg-white border border-zinc-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-base placeholder:text-zinc-400 shadow-sm transition-all" placeholder="Search for dishes..." type="text" />
            <button className="absolute right-3 p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </motion.section>

        {/* Category Chips */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-2">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary text-white whitespace-nowrap px-6 py-2 rounded-full font-semibold text-sm shadow-md transition-colors">All</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-zinc-600 hover:text-primary hover:border-primary/50 whitespace-nowrap px-6 py-2 rounded-full font-semibold text-sm transition-colors border border-zinc-200">Snacks</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-zinc-600 hover:text-primary hover:border-primary/50 whitespace-nowrap px-6 py-2 rounded-full font-semibold text-sm transition-colors border border-zinc-200">Meals</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-zinc-600 hover:text-primary hover:border-primary/50 whitespace-nowrap px-6 py-2 rounded-full font-semibold text-sm transition-colors border border-zinc-200">Drinks</motion.button>
          </div>
        </motion.section>

        {/* Food Menu Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4"
        >
          {[
            { name: 'Masala Samosa', desc: 'Classic spiced potato filling', price: '₹25.00', rating: '4.8', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuGHY-foRPUSNyVUQ0KlXG0HK1GJjYGnI7Ps9c4vtBu1uR4WxMU0moy3KqAUJa-mCnuXnQSCe5xJrVOqUz6W_xsfIkl5onJTRSxBHs9jLUjsyQLXePxovdaf3yynu1emNhdwnyPwsAUhEW0jFJA677xktFn0_Gd0GarAPkY9QfeXwvsUQ2brba8_dT7Oy6cbg80aXCgR_BhWtO1OkRUCQtg2hSg4B0lv9p9EIONQHN5u29rkGyyH8VlOfPjQ1XZbBW_Hxb-At_tPtC' },
            { name: 'Paneer Dosa', desc: 'Crispy rice crepe with paneer', price: '₹85.00', rating: '4.9', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD31ZHhUSC5b4X7mpsr5N5vnW3g6CqwEkAHSZ-nRt_k_PHjlmlGEfMmX5DIKK5bQq0gNS84xicC5EDqGjH9DP1ky5-UAflLQMR1J6-yLWEKF3m02iLeu_s5FrY56jWzUUQb-yAljTtFNaf1RjAjMDjNFOMBsJL1WHLcmukVqdueLZPGthjmjTLMLHOEKxIBgHeWfZuteLI2j4mZNpB6dvLQqHybh2vhHVq8wOnxnuvhX0ukn_HrpjDYPySfqtb3G-8pFXwns2TPzupR' },
            { name: 'Health Bowl', desc: 'Fresh seasonal greens', price: '₹120.00', rating: '4.5', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkI65f8KHPAOz_ylDLWECl_VWA3pvlCg7yT-tUE4h7WmJjxIonu-AgMMJHvLQ_SfbmVk6ZW1xOIYl1vmsN_DZnxNAdTwSEe6NljAn7j_j7u1i9Nw_hBNcFahGciGQGC00MXB8kWipgz1cqkuDDJF8ziyBjXoyz3_G6x6sq05G2Ip05vqwrrV589UcDdskpYE0XXbCgImk7A__nkW9kjPz2ubchb6mx18P96RvA-pBa63Uf5UJ-FgU5qjb7_Zy4kV7GDBcTCeoSfzgl' },
            { name: 'Filter Coffee', desc: 'Freshly brewed South Indian', price: '₹35.00', rating: '4.7', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPM6WYLLSDyrRmr44YgOBDOZ5XjpyF6m1Bwd_RnOIxIINWFtELikPBEla44dYgQFuOROqWy8voJiKkm7WMm3-9T0oEpuqlJXLIHCzi7BW8N5BkLzRyOsNKvGoLW6afgljvUoXSYtA5dxUk6r1P_Twq3xrMCJLl68qbyBGBWNwYt3kh8MGdA4KwxToBmaG2OJWJfjmfJGFYWf41bYW3iVL7fc3Y8rfiYSIt7-b8wbzvDkQrN_4cMv9QoDQFF45BCqF2LJe4KPArS2iU' }
          ].map((food, i) => (
            <motion.div key={i} variants={itemVariants} whileHover={{ y: -5 }} className="bg-white rounded-2xl overflow-hidden shadow-premium flex flex-col group cursor-pointer border border-transparent hover:border-primary/10 transition-colors">
              <div className="relative h-32 overflow-hidden">
                <img alt={food.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={food.img} />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-secondary-dark" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-[12px] font-bold text-on-surface">{food.rating}</span>
                </div>
              </div>
              <div className="p-3 flex flex-col flex-grow">
                <h3 className="font-semibold text-base text-on-surface leading-tight mb-1 font-display group-hover:text-primary transition-colors">{food.name}</h3>
                <p className="text-[12px] text-zinc-500 mb-3 flex-grow">{food.desc}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-primary">{food.price}</span>
                  <motion.button 
                    whileHover={{ scale: 1.1, backgroundColor: "#8a000a" }} 
                    whileTap={{ scale: 0.9 }} 
                    className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-md transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </main>

      {/* Floating Cart Indicator */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
        className="fixed bottom-24 left-4 right-4 z-40"
      >
        <Link href="/cart" className="block w-full">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-white rounded-2xl px-6 py-4 flex items-center justify-between shadow-xl transition-colors hover:bg-primary-dark"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="material-symbols-outlined">shopping_basket</span>
                <span className="absolute -top-1 -right-1 bg-secondary text-primary-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
              </div>
              <div className="text-left">
                <p className="text-[14px] font-bold">2 Items in Cart</p>
                <p className="text-[11px] opacity-80">Bharath University Canteen</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">₹110.00</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Bottom Navigation Bar */}
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-100 dark:border-zinc-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] fixed bottom-0 z-50 rounded-t-2xl w-full flex justify-around items-center h-20 pb-safe px-2"
      >
        <Link href="/menu" className="flex flex-col items-center justify-center text-primary dark:text-primary-dark bg-primary/10 dark:bg-primary-dark/30 rounded-xl px-4 py-1 active:scale-90 transition-all text-[10px] font-medium">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
          <span>Menu</span>
        </Link>
        <Link href="/cart" className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-primary dark:hover:text-primary-dark active:scale-90 transition-all text-[10px] font-medium">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>Cart</span>
        </Link>
        <Link href="/orders" className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-primary dark:hover:text-primary-dark active:scale-90 transition-all text-[10px] font-medium">
          <span className="material-symbols-outlined">history</span>
          <span>Orders</span>
        </Link>
        <Link href="/login" className="flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-primary dark:hover:text-primary-dark active:scale-90 transition-all text-[10px] font-medium">
          <span className="material-symbols-outlined">person</span>
          <span>Profile</span>
        </Link>
      </motion.nav>
    </div>
  );
}
