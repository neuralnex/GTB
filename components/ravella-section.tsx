import Image from "next/image"

export function RavellaSection() {
  const benefits = [
    "Brings damaged and Dead Cells back to Life.",
    "Builds Blood",
    "Boost Immune",
    "Energizes",
    "Cleanses",
    "Rejuvenate",
    "Restores",
    "Repairs",
    "Replicate",
    "Replaces"
  ]

  return (
    <section id="ravella" className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#0F172A] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              RAVELLA ULTRA SOLUTIONS ORGANIC
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/new%20images/rav1.jpeg"
                alt="Ravella Ultra Solutions"
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

