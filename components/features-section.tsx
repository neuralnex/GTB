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
              WHY GLOBAL TEAM BUILDERS ?
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

export default function FeaturesSection2() {
  return (
    <section className="w-full py-20 px-6">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <a
            href="#"
            className="inline-flex justify-between items-center py-3 px-5 mb-7  text-sm text-gray-300 bg-gray-900 rounded-full dark:bg-gray-200 dark:text-black hover:bg-gray-800 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-sm font-medium">
              WHY GLOBAL TEAM BUILDERS
            </span>
            <svg
              className="ml-2 w-5 h-5 bg-white rounded-full text-primary-800"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd" />
            </svg>
          </a>

          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Unlike ordinary network opportunities where you struggle alone</h2>
          <p className="text-gray-500 text-lg dark:text-gray-400">We build your team globally while you earn and win awards.</p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              {/* <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> */}
              <Image src="/icons/all-in-one.svg" alt="Team support icon" width={20} height={20} style={{ width: "auto", height: "auto" }} />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Market</h3>
            <p className="text-gray-500 text-lg dark:text-gray-400">With Global Team Builders, you're not alone.</p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              {/* <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg> */}
              <Image src="/icons/built-in.svg" alt="No stress icon" width={20} height={20} style={{ width: "auto", height: "auto" }} />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Support</h3>
            <p className="text-gray-500 text-lg dark:text-gray-400">No need to stress about building a team.</p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              {/* <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg> */}
              <Image src="/icons/rich-responsive.svg" alt="Support icon" width={20} height={20} style={{ width: "auto", height: "auto" }} />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Experience</h3>
            <p className="text-gray-500 text-lg dark:text-gray-400">No previous experience required.</p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image src="/icons/built-for-creators.svg" alt="Global reach icon" width={20} height={20} style={{ width: "auto", height: "auto" }} />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">SBI</h3>
            <p className="text-gray-500 text-lg dark:text-gray-400">Your Starter package registration in Straight Business Integrated (SBI) is done for you at no cost.</p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image src="/icons/built-for-creators.svg" alt="Global reach icon" width={20} height={20} style={{ width: "auto", height: "auto" }} />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Global</h3>
            <p className="text-gray-500 text-lg dark:text-gray-400">We build your team globally while you earn and win awards.</p>
          </div>
          <div>
            
            <h3 className="mb-2 text-xl font-bold dark:text-white">Join Now</h3>
            <p className="text-gray-500 text-lg dark:text-gray-400">Click to join and start your journey to success.</p>
            <Link href="/signup">
              <Button className="bg-[#14532D] hover:bg-[#047857] text-white px-8 py-3 rounded-full w-full mt-4">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
};
