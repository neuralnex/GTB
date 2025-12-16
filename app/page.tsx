import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { MarketplaceSection } from "@/components/marketplace-section"
import { ProjectsSection } from "@/components/projects-section"
import { IntelligenceSection } from "@/components/intelligence-section"
import { PaymentsSection } from "@/components/payments-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import FeaturesSection2 from "@/components/features-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      {/* <FeaturesSection /> */}
      <FeaturesSection2 />
      <MarketplaceSection />
      <ProjectsSection />
      <IntelligenceSection />
      <PaymentsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
