import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header 
      className="w-full px-6 py-4 bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        padding: "clamp(0.75rem, 2vw, 1rem) clamp(1rem, 4vw, 1.5rem)",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        backdropFilter: "blur(8px)",
      }}
    >
      <div 
        className="max-w-7xl mx-auto flex items-center justify-between"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "80rem",
          margin: "0 auto",
          gap: "1rem",
        }}
      >
        <Link 
          href="/" 
          className="flex items-center"
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            outline: "none",
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          <Image 
            src="/new%20images/logo.svg" 
            alt="Global Team Builders Logo" 
            width={78} 
            height={78}
            className="object-contain"
            priority
            style={{
              width: "clamp(60px, 8vw, 78px)",
              height: "auto",
              aspectRatio: "1 / 1",
              objectFit: "contain",
              objectPosition: "center",
              filter: "brightness(0) invert(1)",
            }}
          />
        </Link>

        <nav 
          className="hidden md:flex items-center space-x-8"
          style={{
            display: "none",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <a 
            href="#why" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            style={{
              transition: "color 0.2s ease-in-out",
              cursor: "pointer",
              outline: "none",
              outlineOffset: "2px",
            }}
          >
            Why Us
          </a>
          <Link 
            href="/activation" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            style={{
              transition: "color 0.2s ease-in-out",
              cursor: "pointer",
              outline: "none",
              outlineOffset: "2px",
            }}
          >
            Activation
          </Link>
          <a 
            href="#earnings" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            style={{
              transition: "color 0.2s ease-in-out",
              cursor: "pointer",
              outline: "none",
              outlineOffset: "2px",
            }}
          >
            Earnings
          </a>
          <a 
            href="#join" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            style={{
              transition: "color 0.2s ease-in-out",
              cursor: "pointer",
              outline: "none",
              outlineOffset: "2px",
            }}
          >
            Join
          </a>
        </nav>

        <div 
          className="flex items-center space-x-4"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Link href="/signup">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              style={{
                cursor: "pointer",
                outline: "none",
                outlineOffset: "2px",
                userSelect: "none",
                touchAction: "manipulation",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform, background-color",
                borderWidth: "0",
                borderRadius: "9999px",
                padding: "0.5rem 1.5rem",
              }}
            >
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
