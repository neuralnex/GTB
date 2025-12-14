import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PaymentsSection() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#0F172A] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              WHAT IS ALLIMAX
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Allimax Stem Cell Stimulator
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Allimax Stem Cell Stimulator is manufactured by Straight Business Limited (S.B.I), an international healthcare company producing world-class wellness products, including the revolutionary Stem Cell Stimulator that is transforming lives around the world.
            </p>
            <p className="text-muted-foreground mb-6 text-lg">
              These premium products support your health, energy, and mental clarity as you begin your journey.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Does a Stem Cell Stimulator Do?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              A Stem Cell Activator helps your body repair itself naturally by supporting the production and activation of your own stem cells.
            </p>
            <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Key Benefits of Stem Cell Activation
            </h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <span className="text-muted-foreground text-lg">Rejuvenates damaged tissues</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <span className="text-muted-foreground text-lg">Boosts energy and vitality</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <span className="text-muted-foreground text-lg">Strengthens the immune system</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <span className="text-muted-foreground text-lg">Enhances natural healing</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <span className="text-muted-foreground text-lg">Slows aging and promotes youthful health</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <span className="text-muted-foreground text-lg">Improves organ function and cellular repair</span>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <span className="text-muted-foreground text-lg">Supports overall wellness and longevity</span>
              </div>
            </div>
            <p className="text-muted-foreground text-lg font-medium">
              Stem cell technology is ranked among today's top breakthroughs in global healthcare.
            </p>

            <Link href="/signup">
              <Button className="bg-[#14532D] hover:bg-[#047857] text-white px-8 py-3 rounded-full text-lg">
                Join Now
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/correct%20images/what%20is%20allemax.jpeg"
                alt="What is Allimax"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
