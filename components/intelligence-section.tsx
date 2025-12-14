import { Button } from "@/components/ui/button"
import Link from "next/link"

export function IntelligenceSection() {
  return (
    <section id="who" className="w-full py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-[#14532D] to-[#047857] rounded-3xl p-8">
              <img
                src="/correct%20images/who%20we're%20looking%20for.jpeg"
                alt="Who we're looking for"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center px-6 py-3 bg-[#7F1D1D] text-white text-base font-bold rounded-full mb-6 shadow-lg">
              WHO ARE WE LOOKING FOR
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We're looking for:
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Ambitious individuals</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Those committed to success</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">People ready to achieve financial independence</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Action-oriented individuals ready to elevate their financial status</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Those seeking collaborative support</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Entrepreneurs who want a scalable business model</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#14532D] font-bold">•</span>
                </div>
                <p className="text-muted-foreground text-lg">Those interested in leveraging global team building</p>
              </div>
            </div>

            <p className="text-foreground font-semibold text-lg mb-8">
              If this describes you, welcome to your breakthrough.
            </p>

            <Link href="/signup">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
