"use client"

import { ArrowUpRight, LayoutDashboard, PlusCircle, Receipt, Users } from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"

const screens = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description: "Overview of all your groups, balances, and recent activity at a glance.",
  },
  {
    icon: PlusCircle,
    title: "Add Expense",
    description: "Quick and intuitive expense entry with smart splitting options.",
  },
  {
    icon: Users,
    title: "Group Details",
    description: "Deep dive into group expenses, member balances, and transaction history.",
  },
  {
    icon: Receipt,
    title: "Settle Up",
    description: "Clear visualization of who pays whom with one-tap settlement.",
  },
]

export function ScreensShowcase() {
  return (
    <section className="bg-white/45 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">App Screens</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            A product gallery that feels like an unboxing.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A glimpse into the key screens that make EasySplit intuitive and powerful.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-4 lg:items-start">
          {screens.map((screen, index) => (
            <ScrollReveal
              key={screen.title}
              delay={120 * index}
              className="h-full"
            >
              <div className="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.11)]">
                <div className="rounded-[1.45rem] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,248,249,0.96))] p-4">
                  <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    <span>{screen.title}</span>
                    <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>

                  <div className="aspect-[9/16] rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 shadow-inner">
                    <div className="flex h-full flex-col rounded-[1.25rem] border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <div className="h-2.5 w-12 rounded-full bg-slate-200" />
                        <div className="h-2.5 w-8 rounded-full bg-primary/20" />
                      </div>

                      <div className="mt-4 flex items-center justify-between rounded-[1.25rem] bg-primary/10 px-4 py-4 text-slate-950">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{screen.title}</p>
                          <p className="mt-1 text-sm text-slate-600">{screen.description}</p>
                        </div>
                        <screen.icon className="h-7 w-7 text-primary" />
                      </div>

                      <div className="mt-4 space-y-3">
                        <div className="h-20 rounded-[1rem] bg-[linear-gradient(135deg,rgba(77,182,172,0.16),rgba(191,219,254,0.22))]" />
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-16 rounded-[1rem] bg-slate-100" />
                          <div className="h-16 rounded-[1rem] bg-slate-100" />
                        </div>
                        <div className="space-y-2 rounded-[1rem] bg-slate-50 p-3">
                          <div className="h-2 rounded-full bg-slate-200" />
                          <div className="h-2 w-4/5 rounded-full bg-slate-200" />
                          <div className="h-2 w-2/3 rounded-full bg-slate-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-3 pb-4 pt-5 text-center">
                  <h3 className="text-lg font-semibold text-slate-950">{screen.title}</h3>
                  <p className="mt-1 h-12 overflow-hidden text-sm leading-6 text-slate-600">{screen.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
