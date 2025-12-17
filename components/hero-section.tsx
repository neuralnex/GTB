import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[600px] md:min-h-[700px] py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: "url(/correct%20images/welcome%20to%20global%20team.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <div 
        className="max-w-4xl mx-auto text-center relative z-10 space-y-6"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "inherit",
          padding: "clamp(1.5rem, 5vw, 3rem)",
        }}
      >
        <h1 
          className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-wide"
          style={{
            fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
            lineHeight: 1.2,
            letterSpacing: "0.05em",
            wordSpacing: "0.1em",
            textAlign: "center",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          GLOBAL TEAM BUILDERS
        </h1>
        <h2 
          className="text-2xl md:text-3xl font-semibold text-white mb-6"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            lineHeight: 1.3,
            fontWeight: 600,
            marginBottom: "1.5rem",
          }}
        >
          Your Fastest Route to Wealth, Health & Global Success
        </h2>
        <p 
          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            lineHeight: 1.75,
            maxWidth: "48rem",
            margin: "0 auto",
            textWrap: "pretty",
          }}
        >
          A results-driven community that makes global team building simple, fast, and achievable. We combine digital strategies, AI-powered systems, and proven methods to build your team across borders with no technical skills required.
        </p>
        <p 
          className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
          style={{
            fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
            lineHeight: 1.75,
            maxWidth: "42rem",
            margin: "0 auto",
            textWrap: "pretty",
          }}
        >
          This is a done-with-you and done-for-you system designed for sustainable growth, real leverage, and long-term income potential.
        </p>
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            paddingTop: "1rem",
          }}
        >
          <Link href="/signup" style={{ width: "100%", maxWidth: "300px" }}>
            <Button
              size="lg"
              className="bg-[#14532D] hover:bg-[#047857] text-white text-lg px-12 py-4 rounded-full font-semibold shadow-lg w-full transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              style={{
                cursor: "pointer",
                outline: "none",
                outlineOffset: "2px",
                userSelect: "none",
                touchAction: "manipulation",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform, background-color",
              }}
            >
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
