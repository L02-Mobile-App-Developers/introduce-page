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
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">The Problem</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Group money still feels like admin work.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Splitting costs should take seconds, but most groups still wrestle with awkward asks, error-prone calculations,
            and records no one fully trusts.
          </p>

          <ul className="mt-8 space-y-4">
            {problems.map((problem, index) => (
              <li key={problem.title} className="flex items-start gap-3.5">
                <span className="mt-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                  <problem.icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-base font-medium text-slate-800 sm:text-lg">{problem.title}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={120} className="relative mx-auto w-full max-w-2xl">
          <div className="relative min-h-[430px] rounded-[2rem] border border-slate-200/80 bg-gradient-to-b from-slate-50 to-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.18),transparent_38%),radial-gradient(circle_at_80%_85%,rgba(139,92,246,0.16),transparent_40%)]" />

            <div className="relative h-full w-full [perspective:1200px]">
              <div className="group absolute left-6 top-8 w-[62%] rotate-[-8deg] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_22px_48px_rgba(15,23,42,0.16)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-[-6deg]">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Receipt</p>
                  <Calculator className="h-4 w-4 text-slate-400" />
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-2.5 w-full rounded bg-slate-200" />
                  <div className="h-2.5 w-11/12 rounded bg-slate-200" />
                  <div className="h-2.5 w-8/12 rounded bg-slate-200" />
                </div>
                <div className="mt-4 space-y-1.5 text-xs text-slate-500">
                  <p>Dinner total: $126.40</p>
                  <p>Tip: 15%</p>
                  <p className="font-medium text-slate-800">Per person: ?</p>
                </div>
              </div>

              <div className="absolute right-7 top-20 z-20 w-[56%] rotate-[6deg] rounded-2xl border border-rose-200/70 bg-gradient-to-br from-rose-500 to-red-500 p-4 text-white shadow-[0_22px_50px_rgba(239,68,68,0.35)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-[4deg]">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em]">Payment Error</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-rose-50">
                  Amount mismatch detected. Two members received different totals.
                </p>
              </div>

              <div className="absolute right-4 top-52 w-[62%] rotate-[2deg] rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_26px_60px_rgba(15,23,42,0.14)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-[1deg]">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Expense Sheet</p>
                  <MessagesSquare className="h-4 w-4 text-slate-400" />
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 20 }).map((_, cellIndex) => (
                    <div
                      key={cellIndex}
                      className={
                        cellIndex % 5 === 0
                          ? "h-5 rounded bg-amber-100"
                          : cellIndex % 7 === 0
                            ? "h-5 rounded bg-rose-100"
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
