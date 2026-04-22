"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQS = [
  { q: "How do I pay for my order?", a: "You can pay using your University Wallet, UPI, or at the counter. Wallet balance is auto-topped up from your university account." },
  { q: "Can I cancel an order?", a: "Orders can be cancelled within 2 minutes of placing. After that, preparation begins and cancellation is not possible." },
  { q: "What are the canteen timings?", a: "Breakfast: 7:30 AM – 10 AM. Lunch: 11:30 AM – 3 PM. Snacks: 4 PM – 6 PM. Dinner: 6:30 PM – 9 PM." },
  { q: "How long does preparation take?", a: "Most items are ready in 10–20 minutes. You'll receive a notification when your order is ready for pickup." },
  { q: "Is the food vegetarian?", a: "Our entire menu is 100% vegetarian. All items are clearly labelled with VEG badges." },
  { q: "How do I report a food quality issue?", a: "Use the 'Report Issue' option below or tap Rate Food on any completed order. Our team responds within 30 minutes." },
];

const CONTACT = [
  { icon: "call", label: "Call Canteen", detail: "+91 44 2257 8100", action: "tel:+914422578100" },
  { icon: "mail", label: "Email Support", detail: "canteen@bharathuniv.ac.in", action: "mailto:canteen@bharathuniv.ac.in" },
  { icon: "chat", label: "WhatsApp", detail: "Chat with us instantly", action: "https://wa.me/914422578100" },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [issue, setIssue] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen pb-20">
      {toast && <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-on-surface text-surface text-sm font-semibold px-5 py-3 rounded-full shadow-2xl">{toast}</motion.div>}

      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-zinc-200 sticky top-0 z-50 flex items-center px-4 h-16 gap-3">
        <Link href="/" className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-full transition-all" aria-label="Back"><span className="material-symbols-outlined">arrow_back</span></Link>
        <h1 className="text-xl font-extrabold text-primary tracking-tight font-display">Help & Support</h1>
      </header>

      <main className="max-w-md mx-auto px-5 pt-5">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-purple-50 border border-purple-200/50 rounded-xl p-4 mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-purple-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
          <div><p className="font-bold text-sm">We're here to help</p><p className="text-xs text-zinc-500">Available 24/7 · Average response time: 5 min</p></div>
        </motion.div>

        {/* Contact */}
        <h2 className="font-bold text-lg font-display mb-3">Contact Us</h2>
        <div className="space-y-2 mb-8">
          {CONTACT.map((c) => (
            <a key={c.label} href={c.action} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-zinc-100 hover:border-primary/20 shadow-sm transition-all group">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>{c.icon}</span>
              <div className="flex-grow"><p className="font-semibold text-sm">{c.label}</p><p className="text-xs text-zinc-500">{c.detail}</p></div>
              <span className="material-symbols-outlined text-zinc-300 group-hover:text-primary transition-colors">chevron_right</span>
            </a>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="font-bold text-lg font-display mb-3">Frequently Asked Questions</h2>
        <div className="space-y-2 mb-8">
          {FAQS.map((f, i) => (
            <motion.div key={i} className="bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left p-4 flex justify-between items-center gap-2">
                <span className="font-semibold text-sm">{f.q}</span>
                <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} className="material-symbols-outlined text-zinc-400 flex-shrink-0">expand_more</motion.span>
              </button>
              {openFaq === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-4 pb-4">
                  <p className="text-sm text-zinc-600 leading-relaxed">{f.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Report Issue */}
        <h2 className="font-bold text-lg font-display mb-3">Report an Issue</h2>
        <textarea className="w-full bg-white border border-zinc-200 rounded-xl p-4 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-zinc-400 resize-none mb-3"
          placeholder="Describe your issue — food quality, missing items, billing errors..." rows={4} value={issue} onChange={(e) => setIssue(e.target.value)} />
        <motion.button whileTap={{ scale: 0.97 }} onClick={() => { if (!issue.trim()) return; setToast("Issue submitted! We'll respond within 30 min."); setIssue(""); setTimeout(() => setToast(null), 3000); }}
          className="w-full py-3.5 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-[#9a0010] transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">send</span>Submit Report
        </motion.button>
      </main>
    </div>
  );
}
