import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { TargetUsersSection } from "@/components/target-users-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesSection } from "@/components/features-section"
import { ScreensShowcase } from "@/components/screens-showcase"
import { DesignHighlights } from "@/components/design-highlights"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <TargetUsersSection />
      <SolutionSection />
      <FeaturesSection />
      <ScreensShowcase />
      <DesignHighlights />  
      <FinalCTA />
      <Footer />
    </main>
  )
}
