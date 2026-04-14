"use client"

import { ExternalLink, Figma } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FinalCTA() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <ScrollReveal className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(236,246,248,0.95))] px-6 py-14 text-center shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:px-10 lg:px-16 lg:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Explore the Project</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
          Dive into the full design narrative.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Dive deeper into the design process, wireframes, and complete UI kit. Check out the full case study and design files.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-12 gap-3 rounded-full px-8 text-sm font-semibold shadow-[0_16px_40px_rgba(77,182,172,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(77,182,172,0.35)]" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Figma className="h-4 w-4" />
              Explore on Figma
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 gap-3 rounded-full border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white hover:text-slate-950" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Read Case Study on Behance
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  )
}
