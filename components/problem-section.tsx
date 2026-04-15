"use client"

import { AlertTriangle, Calculator, MessagesSquare } from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"

const problems = [
  {
    icon: MessagesSquare,
    title: "Social awkwardness",
    description: "Asking friends for money turns a simple split into a tense conversation nobody wants to have.",
  },
  {
    icon: Calculator,
    title: "Manual math errors",
    description: "Recalculating percentages, tips, and reimbursements by hand creates mistakes and delays.",
  },
  {
    icon: AlertTriangle,
    title: "Spreadsheet chaos",
    description: "Messy spreadsheets and scattered notes make group expenses hard to trust or revisit later.",
  },
]

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="relative max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">The Problem</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.02em] text-[#0f1720] sm:text-5xl lg:text-6xl">
            Group money still feels like admin work.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Splitting costs should take seconds, but most groups still wrestle with awkward asks, error-prone calculations,
            and records no one fully trusts.
          </p>

          <ul className="mt-8 space-y-4">
            {problems.map((problem, index) => (
              <li key={problem.title} className="flex items-start gap-3.5">
                <span className="mt-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-[0_6px_14px_rgba(16,185,129,0.2)]">
                  <problem.icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-base font-medium text-slate-800 sm:text-lg">{problem.title}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={120} className="relative mx-auto w-full max-w-2xl">
          <div className="relative min-h-[460px] rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(249,251,252,0.95))] p-6 shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
            <div className="pointer-events-none absolute inset-[1px] rounded-[1.95rem] border border-white/80" />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_10%_10%,rgba(16,185,129,0.08),transparent_36%),radial-gradient(circle_at_90%_88%,rgba(148,163,184,0.14),transparent_42%)]" />

            <div className="relative h-full w-full [perspective:1200px]">
              <div className="group absolute left-8 top-8 z-10 w-[58%] rotate-[-7deg] rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-[0_20px_40px_rgba(15,23,42,0.12),0_40px_70px_rgba(15,23,42,0.08)] backdrop-blur-[1px] transition-transform duration-500 hover:-translate-y-1 hover:rotate-[-5deg]">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Paper Receipt</p>
                  <Calculator className="h-4 w-4 text-slate-400" />
                </div>
                <div className="mt-3 space-y-2 blur-[1.6px]">
                  <div className="h-2.5 w-full rounded bg-slate-200/95" />
                  <div className="h-2.5 w-11/12 rounded bg-slate-200/95" />
                  <div className="h-2.5 w-8/12 rounded bg-slate-200/95" />
                </div>
                <div className="mt-4 space-y-1.5 text-xs text-slate-500 blur-[1.2px]">
                  <p>Dinner total: $126.40</p>
                  <p>Tip: 15%</p>
                  <p className="font-medium text-slate-800">Per person: ?</p>
                </div>
              </div>

              <div className="absolute right-9 top-20 z-30 w-[52%] rotate-[5deg] rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-400 via-rose-400 to-red-400 p-4 text-white shadow-[0_18px_34px_rgba(251,113,133,0.3),0_34px_70px_rgba(251,113,133,0.22)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-[3deg]">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em]">Payment Error</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-rose-50">
                  Amount mismatch detected. Two members received different totals.
                </p>
              </div>

              <div className="absolute right-4 top-52 w-[62%] rotate-[1.5deg] rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_22px_44px_rgba(15,23,42,0.12),0_40px_75px_rgba(15,23,42,0.07)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-[1deg]">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Messy Spreadsheet</p>
                  <MessagesSquare className="h-4 w-4 text-slate-400" />
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 20 }).map((_, cellIndex) => (
                    <div
                      key={cellIndex}
                      className={
                        cellIndex % 5 === 0
                          ? "h-5 rounded bg-rose-200"
                          : cellIndex % 7 === 0
                            ? "h-5 rounded bg-red-300"
                            : "h-5 rounded bg-slate-100"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
