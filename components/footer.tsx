import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <Link href="/" className="flex items-center">
              <Image 
                src="/new%20images/logo.svg" 
                alt="Global Team Builders Logo" 
                width={78} 
                height={78}
                className="object-contain"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Link>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
            Global Team Builders is your fastest route to wealth, health & global success. Join the global team partnered with S.B.I and tap into the revolutionary Stem Cell Activator movement.
              </p>
            </div>

            <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
            <a href="#why" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Why Us
            </a>
            <a href="#activation" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Activation
            </a>
            <a href="#earnings" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Earnings
            </a>
            <a href="#join" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Join
            </a>
            </div>
            </div>

            <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
            <a href="mailto:globalteambuilderscommunity@gmail.com" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Email: globalteambuilderscommunity@gmail.com
            </a>
            <a href="https://wa.me/2348166052985" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            WhatsApp: 08166052985
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Document
            </a>
            </div>
            </div>

            <div>
            <h3 className="font-semibold text-foreground mb-4">Socials Link</h3>
            <div className="space-y-3">
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Github
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Discord
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Linkedin
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
            Instagram
            </a>
            </div>
            </div>
            </div>

            <div className="border-t border-border pt-8">
            <div className="text-center mb-6">
            <p className="text-muted-foreground text-sm">Copyright@GlobalTeamBuilders2025, All right reserved</p>
            </div>


            </div>
            </div>
            </footer>
  )
}
