"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TABLES = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1, seats: [2, 4, 4, 6, 2, 4, 8, 4, 2, 6, 4, 8][i],
  available: [true, true, false, true, true, false, true, true, true, false, true, true][i],
  location: ['Window', 'Centre', 'Corner', 'Balcony', 'Window', 'Centre', 'Private', 'Garden', 'Window', 'Corner', 'Centre', 'Private'][i],
}));

const SLOTS = ['11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'];

export default function BookingPage() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [guests, setGuests] = useState(2);
  const [toast, setToast] = useState<string | null>(null);

  const book = () => {
    if (!selectedTable || !selectedSlot) { setToast("Please select a table and time slot"); setTimeout(() => setToast(null), 2500); return; }
    setToast(`Table ${selectedTable} booked for ${selectedSlot}! 🎉`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen">
      {toast && <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-on-surface text-surface text-sm font-semibold px-5 py-3 rounded-full shadow-2xl">{toast}</motion.div>}

      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-zinc-200 sticky top-0 z-50 flex items-center px-4 h-16 gap-3">
        <Link href="/" className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-full transition-all" aria-label="Back"><span className="material-symbols-outlined">arrow_back</span></Link>
        <h1 className="text-xl font-extrabold text-primary tracking-tight font-display">Table Booking</h1>
      </header>

      <main className="max-w-md mx-auto px-5 pt-5 pb-32">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-sky-50 border border-sky-200/50 rounded-xl p-4 mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-sky-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>event_seat</span>
          <div><p className="font-bold text-sm">Bharath University Canteen</p><p className="text-xs text-zinc-500">12 tables · Seating for 52 guests · Open 11 AM – 9 PM</p></div>
        </motion.div>

        <h2 className="font-bold text-lg font-display mb-1">Guests</h2>
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center active:scale-90 transition-all"><span className="material-symbols-outlined">remove</span></button>
          <span className="text-2xl font-bold font-display w-8 text-center">{guests}</span>
          <button onClick={() => setGuests(Math.min(10, guests + 1))} className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center active:scale-90 transition-all"><span className="material-symbols-outlined">add</span></button>
        </div>

        <h2 className="font-bold text-lg font-display mb-3">Select Time</h2>
        <div className="flex gap-2 flex-wrap mb-6">
          {SLOTS.map((s) => <button key={s} onClick={() => setSelectedSlot(s)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all active:scale-95 ${selectedSlot === s ? 'bg-primary text-white shadow-md' : 'bg-white border border-zinc-200 text-zinc-600 hover:border-primary/40'}`}>{s}</button>)}
        </div>

        <h2 className="font-bold text-lg font-display mb-3">Choose Table</h2>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {TABLES.map((t) => (
            <motion.button key={t.id} whileTap={{ scale: 0.93 }} disabled={!t.available} onClick={() => setSelectedTable(t.id)}
              className={`p-4 rounded-2xl border text-center transition-all ${!t.available ? 'bg-zinc-100 border-zinc-200 opacity-50 cursor-not-allowed' : selectedTable === t.id ? 'bg-primary text-white border-primary shadow-lg' : 'bg-white border-zinc-200 hover:border-primary/40'}`}>
              <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>table_restaurant</span>
              <p className="text-xs font-bold">T-{t.id}</p>
              <p className={`text-[10px] ${selectedTable === t.id ? 'text-white/80' : 'text-zinc-500'}`}>{t.seats} seats · {t.location}</p>
              {!t.available && <p className="text-[9px] text-red-400 font-bold mt-0.5">Occupied</p>}
            </motion.button>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-zinc-100 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50">
        <div className="max-w-md mx-auto p-4 flex items-center justify-between gap-4">
          <div className="text-sm"><p className="text-zinc-500 text-xs">Selected</p><p className="font-bold">{selectedTable ? `Table ${selectedTable} · ${selectedSlot || 'Pick time'}` : 'No table selected'}</p></div>
          <motion.button whileTap={{ scale: 0.97 }} onClick={book} className="bg-primary text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-lg hover:bg-[#9a0010] transition-colors flex items-center gap-2">
            Confirm Booking<span className="material-symbols-outlined">check</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
