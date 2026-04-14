"use client"

import { ArrowRight, BadgeCheck, ExternalLink, Figma, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-28 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-6rem] h-96 w-96 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="max-w-2xl">

          <ScrollReveal delay={80}>
            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              EasySplit
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={140} className="mt-5">
            <p className="max-w-xl text-2xl font-medium tracking-tight text-primary sm:text-3xl">
              Split the bill, keep the chill.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={220} className="mt-6">
            <p className="max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Eliminate the friction and social awkwardness of group finances with an automated, transparent platform.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-12 gap-2 rounded-full border border-primary/20 bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_rgba(77,182,172,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_22px_50px_rgba(77,182,172,0.36)] active:translate-y-0"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Figma className="h-4 w-4" />
                View Figma
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 gap-2 rounded-full border-slate-200 bg-white/85 px-6 text-sm font-semibold text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white hover:text-slate-950 active:translate-y-0"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View Behance
              </a>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={380} className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 shadow-sm backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-primary" />
              Automated balance tracking
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 shadow-sm backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-primary" />
              Real-time group transparency
            </span>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={180} className="relative">
          <div className="absolute left-[-1.5rem] top-16 hidden h-24 w-24 rounded-full bg-primary/15 blur-2xl lg:block" />
          <div className="absolute right-[-2rem] top-[-1.5rem] hidden h-28 w-28 rounded-full bg-sky-200/60 blur-2xl lg:block" />

          <div className="relative rounded-[2rem] border border-white/70 bg-white/90 p-4 shadow-[0_32px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:p-5">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,248,249,0.95))] p-4 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">Live preview</p>
                  <p className="mt-1 text-lg font-semibold text-slate-950">Group trip dashboard</p>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Sync active</div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">Balance</p>
                      <p className="mt-1 text-2xl font-semibold text-slate-950">$128.40 owed</p>
                    </div>
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="h-2.5 rounded-full bg-slate-100">
                      <div className="h-2.5 w-[72%] rounded-full bg-gradient-to-r from-primary to-sky-400" />
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div className="rounded-2xl bg-emerald-50 p-3">
                        <p className="text-xs text-emerald-700/80">Paid</p>
                        <p className="mt-1 font-semibold text-emerald-800">$84</p>
                      </div>
                      <div className="rounded-2xl bg-sky-50 p-3">
                        <p className="text-xs text-sky-700/80">Pending</p>
                        <p className="mt-1 font-semibold text-sky-800">$34</p>
                      </div>
                      <div className="rounded-2xl bg-slate-100 p-3">
                        <p className="text-xs text-slate-500">Settled</p>
                        <p className="mt-1 font-semibold text-slate-700">$210</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">Recent activity</p>
                    <div className="mt-4 space-y-3">
                      {[
                        ["Dinner at Harbor", "$58.20", "Ava added"],
                        ["Cab to airport", "$32.00", "Sam split evenly"],
                        ["Household groceries", "$76.50", "Settled yesterday"],
                      ].map(([label, amount, meta]) => (
                        <div key={label} className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-3">
                          <div>
                            <p className="font-medium text-slate-900">{label}</p>
                            <p className="text-sm text-slate-500">{meta}</p>
                          </div>
                          <p className="font-semibold text-slate-900">{amount}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.4rem] border border-slate-200 bg-[linear-gradient(160deg,rgba(77,182,172,0.12),rgba(186,230,253,0.18))] p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Settlement</p>
                        <p className="mt-1 font-semibold text-slate-950">One tap to settle up</p>
                      </div>
                      <div className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                        Fair split
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20" />
                      <div className="h-10 w-10 rounded-full bg-sky-200" />
                      <div className="h-10 w-10 rounded-full bg-emerald-200" />
                      <div className="ml-auto rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                        4 members synced
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
