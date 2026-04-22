"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"student" | "management">("student");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.endsWith("@bharathuniv.ac.in")) {
      setToast("Email must end with @bharathuniv.ac.in");
      setTimeout(() => setToast(null), 3000);
      return;
    }
    if (password.length < 6) {
      setToast("Password must be at least 6 characters");
      setTimeout(() => setToast(null), 3000);
      return;
    }
    setToast("Login successful! Redirecting...");
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="bg-surface min-h-screen flex flex-col font-sans text-on-surface overflow-hidden">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-on-surface text-surface text-sm font-semibold px-5 py-3 rounded-full shadow-2xl flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
              {toast.includes("successful") ? "check_circle" : "error"}
            </span>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-zinc-200 flex justify-between items-center px-4 h-16 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" aria-label="Back to Home">
            <span className="material-symbols-outlined text-primary">restaurant_menu</span>
          </Link>
          <h1 className="text-xl font-extrabold text-primary tracking-tight font-display">Bharath Canteen</h1>
        </motion.div>
        <Link href="/" className="p-2 text-zinc-500 hover:text-primary hover:bg-zinc-100 rounded-full transition-all" aria-label="Close login">
          <span className="material-symbols-outlined">close</span>
        </Link>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-5 py-10 relative">
        <div className="w-full max-w-md relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-center"
          >
            <h2 className="font-bold text-3xl text-on-surface mb-2 font-display">Welcome Back</h2>
            <p className="text-base text-on-surface/70">Access your campus dining portal</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" as const, stiffness: 200, damping: 20, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-premium overflow-hidden border border-zinc-100"
          >
            {/* Tab Switcher */}
            <div className="flex p-2 bg-zinc-50 m-4 rounded-xl gap-1 relative" role="tablist">
              <motion.div
                className="absolute top-2 bottom-2 bg-primary rounded-lg shadow-md"
                animate={{
                  left: activeTab === "student" ? "8px" : "50%",
                  width: "calc(50% - 12px)",
                }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
              />
              <button
                role="tab"
                aria-selected={activeTab === "student"}
                onClick={() => setActiveTab("student")}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-colors duration-200 relative z-10 ${
                  activeTab === "student" ? "text-white" : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                Student Login
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "management"}
                onClick={() => setActiveTab("management")}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-colors duration-200 relative z-10 ${
                  activeTab === "management" ? "text-white" : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                Management
              </button>
            </div>

            <form className="p-6 space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label className="font-semibold text-sm text-on-surface" htmlFor="email">
                  {activeTab === "student" ? "University Email" : "Admin Email"}
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-[20px] group-focus-within:text-primary transition-colors">mail</span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-base outline-none"
                    id="email"
                    placeholder={activeTab === "student" ? "name@bharathuniv.ac.in" : "admin@bharathuniv.ac.in"}
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    aria-describedby="email-hint"
                  />
                </div>
                <p id="email-hint" className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">info</span>
                  Must end with @bharathuniv.ac.in
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-sm text-on-surface" htmlFor="password">Password</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-[20px] group-focus-within:text-primary transition-colors">lock</span>
                  <input
                    className="w-full pl-12 pr-12 py-4 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-base outline-none"
                    id="password"
                    placeholder="••••••••"
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    minLength={6}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-primary transition-colors p-1"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    className="w-5 h-5 rounded border-zinc-300 text-primary focus:ring-primary accent-primary"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span className="font-medium text-xs text-zinc-600">Remember me</span>
                </label>
                <Link className="font-semibold text-xs text-primary hover:underline" href="#">Forgot Password?</Link>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 bg-primary text-white font-bold text-lg rounded-full shadow-lg hover:bg-[#9a0010] transition-all duration-200 flex items-center justify-center gap-2"
                type="submit"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>login</span>
                Sign In
              </motion.button>
            </form>

            <div className="px-6 pb-6 pt-1">
              <div className="relative flex items-center py-3">
                <div className="flex-grow border-t border-zinc-200" />
                <span className="flex-shrink mx-4 text-zinc-400 text-[10px] font-bold tracking-widest uppercase">Secure SSO Login</span>
                <div className="flex-grow border-t border-zinc-200" />
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 px-4 border border-zinc-200 rounded-xl flex items-center justify-center gap-3 font-semibold text-sm text-on-surface hover:bg-zinc-50 hover:border-zinc-300 transition-all"
                type="button"
              >
                <img alt="Google Logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA40DPBWu5bp1y7r5BMe773gGuYwjry8WhQ28woMpR8nldT3-XFEHEc87pKwz5WgviA4XrFsRsLa47u2nmDoF54KrAJ_WHARvacvzZOmP5n8aDvw0UeS6Eo4jIXyasu4r-Dajq5-M8CG9sHHsugs4BVPpXHV8m1bU1lj8E2_scOXqK7bMsIkO6rgfz03ssBsu4vdXU-ANf2UV9Y68bzwbLp9-z90VBY8AJp5XjZNzayCPnWG2IByuvqxhukzgBFsYiM6noqxUvbOMtK" />
                Sign in with University Google Account
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-center space-y-4"
          >
            <p className="text-sm text-zinc-600">
              Don&apos;t have an account?{" "}
              <Link className="text-primary font-bold hover:underline" href="#">Contact Registrar</Link>
            </p>
            <div className="flex justify-center gap-3">
              <Link className="text-xs text-zinc-500 hover:text-primary transition-colors" href="#">Privacy Policy</Link>
              <span className="text-zinc-300">•</span>
              <Link className="text-xs text-zinc-500 hover:text-primary transition-colors" href="#">Terms of Service</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring" as const, stiffness: 100 }}
        className="p-5 relative z-0"
      >
        <Link href="/menu" className="block">
          <div className="relative rounded-2xl overflow-hidden h-44 w-full group shadow-lg cursor-pointer">
            <img alt="Delicious Canteen Meal" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQRbECVI5tkjRDFORTwCbnGnz2ruzKvHWdJ9KLl8HLBrWWOOLNkrD2qBZql6jJo1waTPicmtRZqRo1Exm_10b_3B2gcYrSuLksQDmFqg_LdLeegQNvR0WjPSx9JD9dMoxxiwp8EKrz0VjlCLVY1B8f2MA95G1NPoay5HFfTpkRzfyBzAeG0jeGlnMfHpw3f1RwcwEP7CMtmAVaOyiTosFwgem01Ohcy6rcLaGMeH9DZ4OzIY4y2oqdk4_4yVD8pI6_Gsm0BSopBHZ6" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="font-bold text-xl font-display">Fresh Meals Daily</p>
                <p className="text-sm opacity-90">Pre-order now to skip the campus lunch rush →</p>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      <footer className="mt-auto py-3 text-center border-t border-zinc-100">
        <p className="font-semibold text-xs text-zinc-400">© 2025 Bharath University Food Services</p>
      </footer>
    </div>
  );
}
