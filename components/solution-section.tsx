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
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Our Solution</p>
          <h2
            className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.03em] text-[#1a2027] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: '"Space Grotesk", "Suisse Intl", "Geist", sans-serif' }}
          >
            Less friction. More clarity.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A studio-clean, tech-forward workflow that turns shared expenses into clear actions, real-time balances, and smooth settlements.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <ScrollReveal className="relative rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_30px_90px_rgba(20,27,35,0.11)] backdrop-blur-xl lg:col-span-7 lg:p-8">
            <div className="pointer-events-none absolute inset-[1px] rounded-[1.95rem] border border-white/80" />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_15%_18%,rgba(86,217,188,0.2),transparent_45%),radial-gradient(circle_at_86%_20%,rgba(160,178,197,0.2),transparent_38%)]" />

            <div className="relative z-10 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">3D Mockup</p>
                <h3 className="mt-1 text-2xl font-semibold text-[#1a2027]">Isometric transaction flow</h3>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-50 bg-[rgba(86,217,188,0.15)] text-primary shadow-[0_8px_20px_rgba(86,217,188,0.25)]">
                <ReceiptText className="h-5 w-5" />
              </div>
            </div>

            <div className="relative z-10 mt-8 flex justify-center pb-2 pt-1">
              <div className="relative w-[250px] sm:w-[280px]">
                <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(86,217,188,0.28)_0%,rgba(86,217,188,0)_70%)] blur-2xl" />
                <div className="origin-bottom [transform:perspective(1300px)_rotateX(18deg)_rotateY(-25deg)]">
                  <div className="rounded-[2.2rem] border border-[#d7e0e8] bg-[linear-gradient(145deg,#ffffff_0%,#f5fbfa_70%,#eef6f8_100%)] p-3 shadow-[0_34px_80px_rgba(15,23,42,0.28)]">
                    <div className="rounded-[1.8rem] border border-[#e3ecf2] bg-[#fbfdff] p-4">
                      <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-[#d8e3ea]" />
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-400">Today</p>

                      <div className="mt-3 space-y-2.5">
                        {[
                          { title: "Dinner at Nori", amount: "-$42.00", tone: "text-[#15202a]" },
                          { title: "Taxi split", amount: "-$18.50", tone: "text-[#15202a]" },
                          { title: "An paid you", amount: "+$12.00", tone: "text-[#14977d]" },
                          { title: "Grocery run", amount: "-$24.30", tone: "text-[#15202a]" },
                        ].map((item) => (
                          <div key={item.title} className="flex items-center justify-between rounded-2xl border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(241,250,249,0.82))] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                            <div>
                              <p className="text-sm font-semibold text-[#182129]">{item.title}</p>
                              <p className="text-xs text-slate-500">Shared expense</p>
                            </div>
                            <p className={`text-sm font-semibold ${item.tone}`}>{item.amount}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 lg:col-span-5">
            {benefits.map((benefit, index) => (
              <ScrollReveal
                key={benefit.title}
                delay={140 + index * 80}
                className="group relative rounded-[1.7rem] border border-white/75 bg-white/72 p-6 shadow-[0_22px_60px_rgba(20,27,35,0.09)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute inset-[1px] rounded-[1.6rem] border border-white/85" />
                <div className="relative z-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(86,217,188,0.14)] text-primary shadow-[0_8px_18px_rgba(86,217,188,0.22)] transition-transform duration-300 group-hover:scale-105">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[#1a2027]">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
