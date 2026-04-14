"use client"

import { CheckCircle2, ReceiptText, ShieldCheck } from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"

const benefits = [
  {
    icon: ReceiptText,
    title: "Seamless logging",
    description: "Enter expenses quickly with a structured flow that keeps every split consistent from the start.",
  },
  {
    icon: CheckCircle2,
    title: "Accurate settlement",
    description: "Shared costs are tracked automatically so everyone can see what is owed and what is settled.",
  },
  {
    icon: ShieldCheck,
    title: "Relationship-friendly",
    description: "The app removes the awkward chase and keeps the focus on the trip, event, or household moment.",
  },
]

export function SolutionSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Solution</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Less friction. More clarity. Better splits.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            EasySplit provides a seamless, friction-free way to log expenses, ensuring shared costs are tracked accurately and settled fairly without ruining relationships.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ScrollReveal className="rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,248,249,0.95))] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">How it helps</p>
                <p className="mt-1 text-xl font-semibold text-slate-950">A simple flow that keeps everyone aligned.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Log the expense once and let EasySplit calculate the split.",
                "See a synced group history as the single source of truth.",
                "Settle balances with confidence and zero spreadsheet cleanup.",
              ].map((item, index) => (
                <div key={item} className="flex gap-4 rounded-[1.25rem] bg-white px-4 py-4 shadow-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sm font-semibold text-primary">
                    0{index + 1}
                  </div>
                  <p className="pt-0.5 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid gap-5">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={110 * index} className="group rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-primary transition-transform duration-300 group-hover:scale-110">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{benefit.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{benefit.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
