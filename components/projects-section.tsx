import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProjectsSection() {
  return (
    <section id="earnings" className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#0F172A] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              WHAT YOU WILL EARN & ENJOY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              As your team grows through the Global Team Builders system, you stand to receive:
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Weekly Cash Bonuses</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Cash Awards</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Electronics Rewards (phones, laptops, gadgets, etc)</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">International Travel Awards</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Car Awards</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Jeep Awards</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Bungalow House Awards</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Duplex House Awards</p>
              </div>
            </div>

            <p className="text-foreground font-semibold text-lg mb-8">
              People are already winning these awards. Now it's your turn.
            </p>

            <Link href="/signup">
              <Button className="bg-[#14532D] hover:bg-[#047857] text-white px-8 py-3 rounded-full">
                Join Now
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#14532D] to-[#047857] rounded-2xl p-8 overflow-hidden">
              <img
                src="/new%20images/%F0%9F%8C%9F%20Achieving%20success%20online%20isn%27t%20just%20about%20luck%E2%80%A6.jfif"
                alt="Rewards preview"
                className="w-full h-auto transform rotate-12 translate-x-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
