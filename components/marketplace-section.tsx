import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function MarketplaceSection() {
  return (
    <section id="activation" className="w-full py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-[#0F172A] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            To join the Global Team Builders movement
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="relative"
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1 / 1",
              overflow: "hidden",
            }}
          >
            <Image
              src="/correct%20images/how%20it%20works.jpeg"
              alt="How it works"
              width={600}
              height={600}
              className="w-full h-auto rounded-2xl"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "1rem",
                aspectRatio: "1 / 1",
                maxWidth: "100%",
              }}
            />
          </div>

          <div className="space-y-6">
            <Card 
              className="bg-[#14532D] border-0 rounded-2xl"
              style={{
                borderWidth: "0",
                borderRadius: "1rem",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                padding: "1.5rem",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                willChange: "transform",
              }}
            >
              <CardContent 
                className="p-6"
                style={{
                  padding: "1.5rem",
                }}
              >
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-white rounded"></div>
                </div>
                <h3 className="font-semibold text-white text-xl mb-4">Activation Steps</h3>
                <div className="text-white/90 text-sm mb-4 space-y-2">
                  <p className="block">Registration: Free</p>
                  <p className="block">Activate Your Account: Buy Two Downlines at ₦60,000</p>
                </div>
                <p className="text-white font-semibold mb-4">
                  This one-time activation unlocks your earnings, awards in S.B.I, and full access to the Global Team Builders automated system.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-white font-semibold mb-2">After activation, Global Team Builders takes it from there:</p>
                  <p className="text-white/90 text-sm">We take full responsibility to build your team</p>
                  <p className="text-white/90 text-sm">We integrate you into our global strategy</p>
                  <p className="text-white/90 text-sm">You start earning weekly commissions</p>
                  <p className="text-white/90 text-sm">You become eligible for awards</p>
                  <p className="text-white/90 text-sm">You receive two bottles of Allimax stem cell stimulator or Dinor worth ₦60,000 as activation bonus.</p>
                  <p className="text-white font-medium mt-4">All while you watch your team grow.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
