import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full px-6 py-4 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/new-images/logo.svg" 
            alt="Global Team Builders Logo" 
            width={78} 
            height={78}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#why" className="text-muted-foreground hover:text-foreground transition-colors">
            Why Us
          </a>
          <Link href="/activation" className="text-muted-foreground hover:text-foreground transition-colors">
            Activation
          </Link>
          <a href="#earnings" className="text-muted-foreground hover:text-foreground transition-colors">
            Earnings
          </a>
          <a href="#join" className="text-muted-foreground hover:text-foreground transition-colors">
            Join
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/signup">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
