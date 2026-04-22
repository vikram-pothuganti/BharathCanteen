import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* TopAppBar Section */}
      <header className="bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50 flex justify-between items-center px-4 h-16 w-full">
        <div className="flex items-center gap-3">
          <button className="p-2 text-primary dark:text-primary-dark hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-95 duration-200 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-xl font-extrabold text-primary dark:text-primary-dark tracking-tight font-display">Bharath Canteen</h1>
        </div>
        <div className="h-8 w-8 rounded-full bg-zinc-200 overflow-hidden border border-zinc-300">
          <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDScEGfqjOfXel_fnmwsVH3zy1Kx9teattVDW4avFSw15_KsG2tBL771mOZHlM1XPipBrwehFEdkU1qqOMzTt9tACJG7vQD_LO_5jt1WS1hBPyX6g3fbgzCGO7se50LWF-VaOetod6Xp2V7Jd5IJrjmhHeoa_HiB3vf95BPyT1mRlKdoDcQaHUtWOP5_uhMJS-ZC399A-YKlCMtOmG51zJi-WMH2njuCsahPwCKliqzQXHP07eQyQ0puMnE7kgP1RfJWe_nmcNRGAtL" />
        </div>
      </header>

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative h-[480px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8ZTi_WhVo__blsmrRF70kFG7WQPencM5TqhkXRy-krOP-aIZ4uKt-325PsAlJPLRm1TiSwY-5FRxb53dbd-3qtKRMzbiRe0-YuaJ6tZq5GLrhZWXyu6EfUXCZugPz7ofn81G43y_L4RPGjoCWMDaYDJtMwf3pVv8wdmxTy48RZb-YjGnWAcb5L8f-eBPM86Cdw8_gnQAz2O8HXb-QeoCAARZObEcENFTzhiF2tnlep8H5mZ3aFtyLJ9EMR3WN1GhmCIe8GmXKm4ye" alt="Gourmet fusion dish" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-3">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold w-fit uppercase tracking-wider">Now Serving</span>
            <h2 className="text-5xl text-white font-bold leading-tight font-display">Fresh Bites for Every Mind</h2>
            <p className="text-lg text-zinc-200">Premium campus dining delivered to your desk or dorm.</p>
            <div className="flex flex-col gap-2 mt-6">
              <Link href="/login" className="bg-primary text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
                <span className="material-symbols-outlined">school</span>
                Student Login
              </Link>
              <Link href="/admin" className="bg-white/10 backdrop-blur-md text-white border border-white/30 font-semibold py-4 rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <span className="material-symbols-outlined">admin_panel_settings</span>
                Staff & Admin
              </Link>
            </div>
          </div>
        </section>

        {/* Category Quick Filters */}
        <div className="px-5 pt-10 pb-3">
          <h3 className="font-bold text-2xl mb-3 font-display">Explore Categories</h3>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar">
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>breakfast_dining</span>
              </div>
              <span className="text-xs font-semibold">Breakfast</span>
            </div>
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="h-16 w-16 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-600">
                <span className="material-symbols-outlined">lunch_dining</span>
              </div>
              <span className="text-xs font-semibold text-zinc-600">North Indian</span>
            </div>
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="h-16 w-16 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-600">
                <span className="material-symbols-outlined">local_bar</span>
              </div>
              <span className="text-xs font-semibold text-zinc-600">Juices</span>
            </div>
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="h-16 w-16 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-600">
                <span className="material-symbols-outlined">bakery_dining</span>
              </div>
              <span className="text-xs font-semibold text-zinc-600">Bakery</span>
            </div>
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="h-16 w-16 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-600">
                <span className="material-symbols-outlined">icecream</span>
              </div>
              <span className="text-xs font-semibold text-zinc-600">Desserts</span>
            </div>
          </div>
        </div>

        {/* Today's Specials */}
        <section className="px-5 py-6">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h3 className="font-bold text-2xl font-display">Today's Specials</h3>
              <p className="text-xs text-zinc-500">Hand-picked delicacies for you</p>
            </div>
            <button className="text-primary font-semibold flex items-center">View all <span className="material-symbols-outlined text-sm">chevron_right</span></button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative h-48 rounded-3xl overflow-hidden shadow-premium">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0uQ62xoexQN2Ja2nZ5d_GDCuSoz5MoZZhEgAZowNer5lur85p7ALKkcSXXcfehF00DdGd-nOxT2DIrXpPJcvcuoTvsi5eZxXpnSCZUqQ-8eO4joKbr6-DmnRj0AailgAk5VxZdpFZB8nJYHx9YOPYrUHybZz1DOHs6Od1weE4TTiJo_vWyYdboHRb3EFfeRfizExpUaMznzESyRQhlZ8-U-X1HyAlOS-QlKRoUvZMtVbwrZDg7iKhm2YPJoQU6bRFoYIKJL5IAUS2" alt="Harvest Buddha Bowl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <h4 className="text-white font-bold text-xl font-display">Harvest Buddha Bowl</h4>
                  <p className="text-white/80 text-xs">Healthy & Energizing</p>
                </div>
                <div className="bg-white rounded-full p-2 text-primary shadow-lg flex items-center justify-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-premium flex flex-col">
              <div className="h-32 relative">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEMo2t07mOQ5olSh7N0rrOrOH2e-j99C1WZfpWa2JOTMZvmWhwrwS0HuXiRQzc1XFoqCx79zBecuhgZ7zUu4QAxgjTaAA1Xo068-w_GacNP12RqkYnAAPaN-_LvAA9wQpyk1UvDSRpzvGQy_WG8MOJV7rQdnHijln7lfZD6FWMOyqfph0meXC7i3DV6uaUXZo8AL72Bo-C3Ou8jJmoKBdGJfeChRCrYh-YRPYtVlW9Jm3yitr_Vf33yO_U3mne4Y3u3dBxKDRhnkfn" alt="Spicy Paneer Burger" />
                <div className="absolute top-2 right-2 bg-secondary text-white px-2 py-0.5 rounded-full text-[10px] font-bold">POPULAR</div>
              </div>
              <div className="p-3">
                <h4 className="font-bold text-sm truncate font-display">Spicy Paneer Burger</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-primary font-bold">₹120</span>
                  <button className="bg-primary/10 p-1 rounded-lg text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-premium flex flex-col">
              <div className="h-32 relative">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASRuhVGSzbst_pQ-B817HUg-6fThB4Jd8UXuzfs1zPHKGSLNc9ujLbv_POi1NTPjbNxxb8xsY8TVIyvoKoZEbo0dAuGcE-T7tKOTM5Ye80-bn8tsUp9IkwXggxLI6OQYPnrO3hdRJG_xq-JKecNVI06a-OMegpFPM8Ux-4MBxuKKO2EH5ValP6WanQLm8cVU_N4Qnk4OX7Sz_emCYx7KmgEsO5nj3YeGe5jphGhIYSBzNBE4HFIM_EwKpVKv5iWd2tChnkHbVUmypk" alt="Margherita Slice" />
              </div>
              <div className="p-3">
                <h4 className="font-bold text-sm truncate font-display">Margherita Slice</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-primary font-bold">₹85</span>
                  <button className="bg-primary/10 p-1 rounded-lg text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="px-5 py-6 bg-surface-container-low mt-2">
          <h3 className="font-bold text-2xl mb-6 text-center font-display">Canteen Services</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-6 rounded-2xl flex flex-col items-center gap-3 text-center border border-zinc-100">
              <span className="material-symbols-outlined text-primary text-3xl">electric_bolt</span>
              <span className="font-semibold text-sm">Quick Pickup</span>
            </div>
            <div className="bg-white p-6 rounded-2xl flex flex-col items-center gap-3 text-center border border-zinc-100">
              <span className="material-symbols-outlined text-primary text-3xl">event_seat</span>
              <span className="font-semibold text-sm">Table Booking</span>
            </div>
            <div className="bg-white p-6 rounded-2xl flex flex-col items-center gap-3 text-center border border-zinc-100">
              <span className="material-symbols-outlined text-primary text-3xl">history</span>
              <span className="font-semibold text-sm">Reorder</span>
            </div>
            <div className="bg-white p-6 rounded-2xl flex flex-col items-center gap-3 text-center border border-zinc-100">
              <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
              <span className="font-semibold text-sm">Support</span>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar Section */}
      <nav className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-100 dark:border-zinc-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] fixed bottom-0 z-50 rounded-t-2xl w-full flex justify-around items-center h-20 pb-safe px-2">
        <Link href="/" className="flex flex-col items-center justify-center text-primary dark:text-primary-dark bg-primary/10 dark:bg-primary-dark/30 rounded-xl px-4 py-1 active:scale-90 transition-all text-[10px] font-medium">
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
      </nav>

      {/* Contextual FAB */}
      <Link href="/cart" className="fixed bottom-24 right-4 h-14 w-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform z-40">
        <span className="material-symbols-outlined">shopping_bag</span>
        <div className="absolute -top-1 -right-1 bg-secondary-dark text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center font-bold border-2 border-surface">2</div>
      </Link>
    </>
  );
}
