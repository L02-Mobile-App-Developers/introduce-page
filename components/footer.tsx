export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <a href="#" className="group flex items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="2" x2="12" y2="22" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-slate-950">EasySplit</span>
          </a>

          <p className="text-base text-slate-700">
            Designed by <span className="font-semibold text-slate-950">Mobile App Developers</span> - 2026
          </p>

          <p className="text-sm text-slate-500">
            &copy; 2026 EasySplit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
