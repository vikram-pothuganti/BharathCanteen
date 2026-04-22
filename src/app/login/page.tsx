import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="bg-surface min-h-screen flex flex-col font-sans text-on-surface">
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-zinc-200 flex justify-between items-center px-4 h-16 w-full">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">restaurant_menu</span>
          <h1 className="text-xl font-extrabold text-primary tracking-tight font-display">Bharath Canteen</h1>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-5 py-10">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h2 className="font-bold text-3xl text-on-surface mb-2 font-display">Welcome Back</h2>
            <p className="text-base text-on-surface/80">Access your campus dining portal</p>
          </div>

          <div className="bg-white rounded-xl shadow-premium overflow-hidden border border-zinc-100">
            <div className="flex p-2 bg-zinc-50 m-4 rounded-lg gap-1">
              <button className="flex-1 py-3 px-4 rounded-md font-semibold text-sm bg-primary text-white shadow-md transition-all duration-200">
                Student Login
              </button>
              <button className="flex-1 py-3 px-4 rounded-md font-semibold text-sm text-zinc-500 hover:bg-white/50 transition-all duration-200">
                Management
              </button>
            </div>

            <form className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="font-semibold text-sm text-on-surface" htmlFor="email">University Email</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">mail</span>
                  <input className="w-full pl-12 pr-4 py-4 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base outline-none" id="email" placeholder="name@bharathuniv.ac.in" required type="email" />
                </div>
                <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">info</span>
                  Must end with @bharathuniv.ac.in
                </p>
              </div>

              <div className="space-y-2">
                <label className="font-semibold text-sm text-on-surface" htmlFor="password">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">lock</span>
                  <input className="w-full pl-12 pr-12 py-4 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base outline-none" id="password" placeholder="••••••••" required type="password" />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" type="button">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="w-5 h-5 rounded border-zinc-300 text-primary focus:ring-primary" type="checkbox" />
                  <span className="font-medium text-xs text-zinc-600">Remember me</span>
                </label>
                <Link className="font-semibold text-xs text-primary hover:underline" href="#">Forgot Password?</Link>
              </div>

              <button className="w-full py-4 bg-primary text-white font-bold text-lg rounded-full shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200" type="submit">
                Sign In
              </button>
            </form>

            <div className="px-6 pb-6 pt-2">
              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-zinc-100"></div>
                <span className="flex-shrink mx-4 text-zinc-400 text-xs font-bold tracking-wider">SECURE SSO LOGIN</span>
                <div className="flex-grow border-t border-zinc-100"></div>
              </div>
              <button className="w-full py-3 px-4 border border-zinc-200 rounded-xl flex items-center justify-center gap-3 font-semibold text-sm text-on-surface hover:bg-zinc-50 transition-colors">
                <img alt="Google Logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA40DPBWu5bp1y7r5BMe773gGuYwjry8WhQ28woMpR8nldT3-XFEHEc87pKwz5WgviA4XrFsRsLa47u2nmDoF54KrAJ_WHARvacvzZOmP5n8aDvw0UeS6Eo4jIXyasu4r-Dajq5-M8CG9sHHsugs4BVPpXHV8m1bU1lj8E2_scOXqK7bMsIkO6rgfz03ssBsu4vdXU-ANf2UV9Y68bzwbLp9-z90VBY8AJp5XjZNzayCPnWG2IByuvqxhukzgBFsYiM6noqxUvbOMtK" />
                Sign in with University Google Account
              </button>
            </div>
          </div>

          <div className="mt-10 text-center space-y-6">
            <p className="text-base text-zinc-600">
              Don't have an account? <Link className="text-primary font-bold hover:underline" href="#">Contact Registrar</Link>
            </p>
            <div className="flex justify-center gap-3">
              <Link className="text-xs text-zinc-500 hover:text-primary transition-colors" href="#">Privacy Policy</Link>
              <span className="text-zinc-300">•</span>
              <Link className="text-xs text-zinc-500 hover:text-primary transition-colors" href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </main>

      <div className="p-5">
        <div className="relative rounded-2xl overflow-hidden h-48 w-full group shadow-lg">
          <img alt="Delicious Canteen Meal" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQRbECVI5tkjRDFORTwCbnGnz2ruzKvHWdJ9KLl8HLBrWWOOLNkrD2qBZql6jJo1waTPicmtRZqRo1Exm_10b_3B2gcYrSuLksQDmFqg_LdLeegQNvR0WjPSx9JD9dMoxxiwp8EKrz0VjlCLVY1B8f2MA95G1NPoay5HFfTpkRzfyBzAeG0jeGlnMfHpw3f1RwcwEP7CMtmAVaOyiTosFwgem01Ohcy6rcLaGMeH9DZ4OzIY4y2oqdk4_4yVD8pI6_Gsm0BSopBHZ6" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
            <div className="text-white">
              <p className="font-bold text-xl font-display">Fresh Meals Daily</p>
              <p className="text-base opacity-90">Pre-order now to skip the campus lunch rush.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-auto py-2 text-center border-t border-zinc-100">
        <p className="font-semibold text-xs text-zinc-400">© 2024 Bharath University Food Services</p>
      </footer>
    </div>
  );
}
