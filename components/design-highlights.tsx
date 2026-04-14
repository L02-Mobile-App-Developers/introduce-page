"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"

const colors = [
  { name: "Primary", color: "bg-primary", hex: "Mint blue" },
  { name: "Background", color: "bg-background border border-slate-200", hex: "Soft white" },
  { name: "Foreground", color: "bg-slate-950", hex: "Ink slate" },
  { name: "Muted", color: "bg-slate-100", hex: "Cloud gray" },
  { name: "Accent", color: "bg-sky-100", hex: "Aqua wash" },
]

const typography = [
  { name: "Heading 1", className: "text-4xl font-semibold tracking-tight", sample: "EasySplit" },
  { name: "Heading 2", className: "text-2xl font-semibold tracking-tight", sample: "Section Title" },
  { name: "Body", className: "text-base leading-7", sample: "Regular paragraph text for content." },
  { name: "Caption", className: "text-sm text-slate-500", sample: "Small helper text" },
]

export function DesignHighlights() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Design System</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            A compact style showcase with consistent interactions.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A consistent visual language that ensures a cohesive user experience across the app.
          </p>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-3">
          <ScrollReveal className="rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h3 className="mb-6 text-xl font-semibold text-slate-950">Color Palette</h3>
            <div className="space-y-4">
              {colors.map((color, index) => (
                <div key={index} className="group flex items-center gap-4 rounded-2xl p-2 transition-all duration-300 hover:bg-slate-50">
                  <div className={`h-12 w-12 shrink-0 rounded-2xl ${color.color} shadow-sm transition-transform duration-300 group-hover:scale-105`} />
                  <div>
                    <p className="font-medium text-slate-950">{color.name}</p>
                    <p className="text-sm text-slate-500">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h3 className="mb-6 text-xl font-semibold text-slate-950">Typography</h3>
            <div className="space-y-6">
              {typography.map((type, index) => (
                <div key={index}>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                    {type.name}
                  </p>
                  <p className={`${type.className} text-slate-950`}>{type.sample}</p>
                </div>
              ))}
              <div className="border-t border-slate-200 pt-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                  Font Family
                </p>
                <p className="font-medium text-slate-950">Geist Sans</p>
                <p className="text-sm text-slate-500">Modern, clean, highly legible</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={180} className="rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h3 className="mb-6 text-xl font-semibold text-slate-950">Component Styles</h3>
            <div className="space-y-6">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                  Buttons
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="rounded-full">Primary</Button>
                  <Button variant="outline" className="rounded-full border-slate-200 bg-white text-slate-700">
                    Outline
                  </Button>
                  <Button variant="ghost" className="rounded-full text-slate-600">
                    Ghost
                  </Button>
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                  Input Field
                </p>
                <Input className="rounded-xl border-slate-200 bg-white/90" placeholder="Enter amount..." />
              </div>

              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                  Card Style
                </p>
                <div className="rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(240,248,249,0.9))] p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20" />
                    <div>
                      <p className="text-sm font-medium text-slate-950">Sample Card</p>
                      <p className="text-xs text-slate-500">With rounded corners and soft shadow</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                  Border Radius
                </p>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 transition-transform duration-300 hover:scale-105" />
                    <p className="mt-1 text-xs text-slate-500">lg</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-xl bg-primary/20 transition-transform duration-300 hover:scale-105" />
                    <p className="mt-1 text-xs text-slate-500">xl</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-2xl bg-primary/20 transition-transform duration-300 hover:scale-105" />
                    <p className="mt-1 text-xs text-slate-500">2xl</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
