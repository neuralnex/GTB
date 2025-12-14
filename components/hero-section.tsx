import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative w-full py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: "url(/correct%20images/welcome%20to%20global%20team.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-wide">
          GLOBAL TEAM BUILDERS
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Your Fastest Route to Wealth, Health & Global Success
        </h2>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          A results-driven community that makes global team building simple, fast, and achievable. We combine digital strategies, AI-powered systems, and proven methods to build your team across borders with no technical skills required.
        </p>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          This is a done-with-you and done-for-you system designed for sustainable growth, real leverage, and long-term income potential.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-[#14532D] hover:bg-[#047857] text-white text-lg px-12 py-4 rounded-full font-semibold shadow-lg"
            >
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
