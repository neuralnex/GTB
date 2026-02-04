import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { MarketplaceSection } from "@/components/marketplace-section"
import { ProjectsSection } from "@/components/projects-section"
import { IntelligenceSection } from "@/components/intelligence-section"
import { PaymentsSection } from "@/components/payments-section"
import { RavellaSection } from "@/components/ravella-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MarketplaceSection />
      <ProjectsSection />
      <IntelligenceSection />
      <PaymentsSection />
      <RavellaSection />
      <CTASection />
      <Footer />
    </div>
  )
}
