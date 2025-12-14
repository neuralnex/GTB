import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section
      id="join"
      className="w-full py-20 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url(/new%20images/How%20to%20Overcome%20Failure%20and%20Move%20on%20in%20Life_.jfif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide">
          Today Is Your Turning Point
        </h1>
        <div className="space-y-4 mb-8 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-white font-semibold">
            You don't build the team.
          </p>
          <p className="text-xl md:text-2xl text-white font-semibold">
            You don't struggle alone.
          </p>
          <p className="text-xl md:text-2xl text-white font-semibold">
            You don't grind endlessly.
          </p>
          <p className="text-xl md:text-2xl text-white font-semibold mt-6">
            You activate your account. We build the team. You earn.
          </p>
          <p className="text-xl md:text-2xl text-white font-bold mt-6">
            This is the power of Global Team Builders.
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-wide">
          Join Global Team Builders Now
        </h2>
        <div className="space-y-4 mb-8 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-200">
            Take the step that opens the door to health, wealth, global expansion, and a future full of rewards.
          </p>
          <p className="text-xl md:text-2xl text-white font-bold mt-6">
            Welcome to Global Team Builders, Where Your Success is Built for You.
          </p>
        </div>
        <Link href="/signup">
          <Button
            size="lg"
            className="bg-[#14532D] hover:bg-[#047857] text-white text-lg px-12 py-4 rounded-full font-semibold"
          >
            Join Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
