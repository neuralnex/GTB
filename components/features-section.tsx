import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function FeaturesSection() {
  return (
    <section id="why" className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="inline-block bg-[#0F172A] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              WHY GLOBAL TEAM BUILDERS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Unlike ordinary network opportunities where you struggle alone
            </h2>
            <div className="space-y-5 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <Image src="/icons/all-in-one.svg" alt="Team support icon" width={20} height={20} style={{ width: "auto", height: "auto" }} />
                </div>
                <p className="text-muted-foreground text-lg">With Global Team Builders, you're not alone.</p>
            </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <Image src="/icons/built-in.svg" alt="No stress icon" width={20} height={20} style={{ width: "auto", height: "auto" }} />
                </div>
                <p className="text-muted-foreground text-lg">No need to stress about building a team.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <Image src="/icons/rich-responsive.svg" alt="Support icon" width={20} height={20} style={{ width: "auto", height: "auto" }} />
                </div>
                <p className="text-muted-foreground text-lg">No previous experience required.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <Image src="/icons/built-for-creators.svg" alt="Global reach icon" width={20} height={20} style={{ width: "auto", height: "auto" }} />
                </div>
                <p className="text-muted-foreground text-lg">Your Starter package registration in Straight Business Integrated (SBI) is done for you at no cost.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <Image src="/icons/built-for-creators.svg" alt="Global reach icon" width={20} height={20} style={{ width: "auto", height: "auto" }} />
                </div>
                <p className="text-muted-foreground text-lg">We build your team globally while you earn and win awards.</p>
              </div>
            </div>
            <Link href="/signup">
              <Button className="bg-[#14532D] hover:bg-[#047857] text-white px-8 py-3 rounded-full">
                Join Now
            </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/new%20images/Success%20Is%20A%20Subjective%20Term.jfif"
                alt="Global collaboration"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
