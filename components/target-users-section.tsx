"use client"

import { Backpack, Home, PlaneTakeoff } from "lucide-react"
import { useState } from "react"

import { ScrollReveal } from "@/components/scroll-reveal"

const tabs = [
  {
    id: "students",
    icon: Backpack,
    title: "College Students",
    description: "Quick splits for dorm dinners, weekend plans, and everyday shared costs without awkward follow-ups.",
  },
  {
    id: "roommates",
    icon: Home,
    title: "Roommates",
    description: "Keep rent, groceries, utilities, and household bills organized in one calm recurring workflow.",
  },
  {
    id: "travel",
    icon: PlaneTakeoff,
    title: "Small Teams & Travel Groups",
    description: "Handle trips, multi-currency costs, and shared receipts with a clearer group summary.",
  },
] as const

type TabId = (typeof tabs)[number]["id"]

const studentAvatars = [
  { initials: "AL", tone: "bg-emerald-100 text-emerald-700" },
  { initials: "JM", tone: "bg-cyan-100 text-cyan-700" },
  { initials: "SK", tone: "bg-violet-100 text-violet-700" },
  { initials: "PR", tone: "bg-slate-200 text-slate-700" },
]

const roommateItems = [
  { label: "Rent split", value: "$920.00", status: "Due today" },
  { label: "Electricity", value: "$42.18", status: "Recurring" },
  { label: "Internet", value: "$28.00", status: "Auto-settled" },
]

const travelRates = [
  { currency: "USD", value: "$184.50" },
  { currency: "EUR", value: "€171.20" },
  { currency: "VND", value: "₫4,623,000" },
]

function PhoneFrame({ activeTab }: { activeTab: TabId }) {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[24rem]">
      <div className="absolute inset-0 translate-x-4 translate-y-5 rounded-[3rem] bg-emerald-200/30 blur-3xl" />
      <div className="relative rounded-[2.75rem] border-[10px] border-slate-900 bg-slate-900 shadow-[0_28px_80px_rgba(15,23,42,0.24)]">
        <div className="absolute left-1/2 top-2 z-20 h-6 w-32 -translate-x-1/2 rounded-full bg-slate-900" />
        <div className="relative overflow-hidden rounded-[2.15rem] bg-gradient-to-b from-emerald-50 via-white to-slate-50 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between text-[11px] font-medium text-slate-500">
            <span>9:41</span>
            <span>EasySplit</span>
            <span>100%</span>
          </div>
          <div className="space-y-4 pb-2 pt-2">
            <div className="rounded-[1.6rem] bg-white/90 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">Selected group</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-950">EasySplit preview</h3>
                </div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Live sync
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 flex-1 rounded-full bg-emerald-200" />
                <div className="h-2 w-14 rounded-full bg-slate-200" />
              </div>
            </div>

            <div className="relative min-h-[26rem]">
              <div
                className={`absolute inset-0 rounded-[1.6rem] bg-white/95 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 transition-all duration-500 ease-out ${
                  activeTab === "students" ? "opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 translate-y-3 scale-[0.985]"
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600">Dorm Dinner</p>
                    <h4 className="mt-1 text-base font-semibold text-slate-950">Split bill for 4 students</h4>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 px-3 py-2 text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">Your share</p>
                    <p className="text-sm font-semibold text-slate-950">$21.15</p>
                  </div>
                </div>
                <div className="rounded-[1.4rem] border border-slate-200 bg-gradient-to-b from-white to-emerald-50/60 p-3">
                  <div className="mb-3 flex items-center justify-between text-sm text-slate-600">
                    <span>Pizza, drinks, dessert</span>
                    <span className="font-semibold text-slate-950">$84.60</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {studentAvatars.map((avatar) => (
                        <div
                          key={avatar.initials}
                          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-semibold shadow-sm ${avatar.tone}`}
                        >
                          {avatar.initials}
                        </div>
                      ))}
                    </div>
                    <div className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
                      Paid by Anna
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 rounded-[1.15rem] bg-white p-3 shadow-inner ring-1 ring-slate-200/70">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Pending</span>
                      <span className="font-semibold text-slate-950">2 settled</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[68%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`absolute inset-0 rounded-[1.6rem] bg-white/95 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 transition-all duration-500 ease-out ${
                  activeTab === "roommates" ? "opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 translate-y-3 scale-[0.985]"
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600">Monthly bills</p>
                    <h4 className="mt-1 text-base font-semibold text-slate-950">Electricity & rent</h4>
                  </div>
                  <div className="rounded-2xl bg-slate-100 px-3 py-2 text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Auto split</p>
                    <p className="text-sm font-semibold text-slate-950">4 roommates</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {roommateItems.map((item, itemIndex) => (
                    <div key={item.label} className="flex items-center justify-between rounded-[1.15rem] border border-slate-200 bg-slate-50 p-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                        <p className="text-xs text-slate-500">{item.status}</p>
                      </div>
                      <p className={`text-sm font-semibold ${itemIndex === 0 ? "text-slate-950" : "text-emerald-700"}`}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-[1.15rem] bg-emerald-50 p-3 ring-1 ring-emerald-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">Next reminder</span>
                    <span className="font-semibold text-emerald-700">Tomorrow, 9:00 AM</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-emerald-100">
                    <div className="h-2 w-[54%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                  </div>
                </div>
              </div>

              <div
                className={`absolute inset-0 rounded-[1.6rem] bg-white/95 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 transition-all duration-500 ease-out ${
                  activeTab === "travel" ? "opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 translate-y-3 scale-[0.985]"
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600">Beach Trip</p>
                    <h4 className="mt-1 text-base font-semibold text-slate-950">Trip summary + receipts</h4>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 px-3 py-2 text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">Currency</p>
                    <p className="text-sm font-semibold text-slate-950">USD / EUR / VND</p>
                  </div>
                </div>
                <div className="rounded-[1.15rem] bg-gradient-to-br from-slate-950 to-slate-800 p-4 text-white shadow-[0_20px_45px_rgba(15,23,42,0.2)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300">Group total</p>
                      <p className="mt-1 text-2xl font-semibold">$184.50</p>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
                      6 people
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {travelRates.map((rate) => (
                      <div key={rate.currency} className="rounded-2xl bg-white/10 p-3 text-center">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">{rate.currency}</p>
                        <p className="mt-1 text-sm font-semibold">{rate.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-16 rounded-[1rem] bg-[linear-gradient(135deg,rgba(16,185,129,0.25),rgba(255,255,255,0.9))] p-2 shadow-sm">
                    <div className="h-full rounded-[0.8rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_55%),linear-gradient(135deg,#84cc16,#14b8a6)]" />
                  </div>
                  <div className="h-16 rounded-[1rem] bg-[linear-gradient(135deg,rgba(59,130,246,0.2),rgba(255,255,255,0.9))] p-2 shadow-sm">
                    <div className="h-full rounded-[0.8rem] bg-[linear-gradient(135deg,#0f172a,#2563eb)]" />
                  </div>
                  <div className="h-16 rounded-[1rem] bg-[linear-gradient(135deg,rgba(168,85,247,0.2),rgba(255,255,255,0.9))] p-2 shadow-sm">
                    <div className="h-full rounded-[0.8rem] bg-[linear-gradient(135deg,#7c3aed,#0ea5e9)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TargetUsersSection() {
  const [activeTab, setActiveTab] = useState<TabId>("students")

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(167,243,208,0.45),transparent_28%),radial-gradient(circle_at_top_right,rgba(199,210,254,0.3),transparent_25%),linear-gradient(180deg,#ffffff_0%,#f7fffb_100%)]" />

      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Target Users</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Made for groups that need speed, clarity, and less friction.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            EasySplit adapts to how different groups actually split expenses, from student dinners to roommate bills to travel receipts.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <ScrollReveal className="space-y-4">
            <div className="grid gap-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                const Icon = tab.icon

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`group flex w-full items-start gap-4 rounded-[1.6rem] border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-emerald-200 bg-emerald-50 shadow-[0_16px_40px_rgba(16,185,129,0.12)]"
                        : "border-slate-200 bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-emerald-50/50"
                    }`}
                    aria-pressed={isActive}
                  >
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "border-emerald-200 bg-white text-emerald-600"
                        : "border-slate-200 bg-slate-50 text-slate-600 group-hover:border-emerald-100 group-hover:text-emerald-600"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className={`text-lg font-semibold ${isActive ? "text-slate-950" : "text-slate-900"}`}>
                          {tab.title}
                        </h3>
                        <span
                          className={`mt-0.5 h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                            isActive ? "bg-emerald-500" : "bg-slate-300"
                          }`}
                        />
                      </div>
                      <p className="mt-1 max-w-[28rem] text-sm leading-6 text-slate-600">{tab.description}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} className="flex justify-center lg:justify-end">
            <PhoneFrame activeTab={activeTab} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
