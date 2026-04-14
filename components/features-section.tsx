"use client"

import { Calculator, FolderOpen, RefreshCw } from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"

const features = [
  {
    icon: Calculator,
    title: "Simplify Debt Management",
    description:
      "Instant balance calculations with no manual math. See who owes whom at a glance and settle debts with confidence.",
  },
  {
    icon: RefreshCw,
    title: "Enhance Group Transparency",
    description:
      "Real-time, synchronized expense history serves as a single source of truth for all group members.",
  },
  {
    icon: FolderOpen,
    title: "Activity-Centric Organization",
    description:
      "Group expenses by events like trips, meals, or household bills. Keep everything organized and easy to find.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Key MVP Features</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Core features designed to remove friction.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Built with the core features you need to manage group expenses effectively.
          </p>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              delay={140 * index}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)]"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-300 group-hover:scale-150" />
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-7 w-7" />
                </div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">0{index + 1}</p>
                <h3 className="mb-3 text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
