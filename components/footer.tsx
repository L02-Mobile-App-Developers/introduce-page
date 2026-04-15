import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <a href="#" className="group flex items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5">
            <Image
              src="/easysplit-logo.svg"
              alt="EasySplit logo"
              width={32}
              height={32}
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-105"
            />
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
