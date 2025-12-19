"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ActivationPage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "2348166052985"
    const message = encodeURIComponent("I have made payment for account activation. Here is my proof of payment.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="w-full py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 shadow-lg bg-card text-card-foreground">
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide">
                  CONGRATULATIONS!!!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm md:text-base text-center">
                    ⚠️ Be sure you have joined and registered before making payment,{" "}
                    <Link href="/signup" className="underline font-bold hover:text-yellow-700 dark:hover:text-yellow-300">
                      click HERE to join
                    </Link>
                  </p>
                </div>
                
                <div className="text-center space-y-6">
                  <p className="text-xl md:text-2xl font-semibold text-foreground">
                    To activate your account.
                  </p>
                  
                  <div className="bg-[#0F172A] rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-muted-foreground">Buy Two Downlines:</span>
                      <span className="text-xl font-bold text-foreground">₦60,000</span>
                    </div>
                    
                    <div className="border-t border-border pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-foreground">Total:</span>
                        <span className="text-2xl font-bold text-[#14532D]">₦60,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#14532D]/10 rounded-lg p-6 border border-[#14532D]/20">
                    <p className="text-center text-foreground font-semibold mb-2">
                      Activation Bonus:
                    </p>
                    <p className="text-center text-[#14532D] font-bold text-lg">
                      You receive two bottles of Allimax stem cell stimulator or Dinor worth ₦60,000 as activation bonus
                    </p>
                  </div>
                </div>

                <div className="bg-[#1C1C1E] rounded-lg p-6 space-y-4 border border-border">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-4">Bank Transfer Details</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Account Name:</span>
                      <span className="text-foreground font-semibold text-sm md:text-base break-words text-right">Onward Samba Integrated Concept Limited</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Bank:</span>
                      <span className="text-foreground font-semibold">F.C.M.B</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Account Number:</span>
                      <span className="text-foreground font-semibold text-lg">1033840178</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1C1C1E] rounded-lg p-6 space-y-4 border border-border">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-4">Pay with USDT TRC 20 Wallet</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Total:</span>
                      <span className="text-foreground font-semibold text-lg">$42</span>
                    </div>
                    
                    <div className="py-2">
                      <span className="text-muted-foreground block mb-2">Wallet Address:</span>
                      <div className="bg-muted/50 rounded p-3 break-all">
                        <span className="text-foreground font-mono text-xs md:text-sm">TSQKJSeNKM519nbTAJFEWg7HbvNAZY7cGq</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#14532D]/10 rounded-lg p-6 border border-[#14532D]/20">
                  <p className="text-center text-foreground font-semibold mb-2">
                    Send proof of payment to:
                  </p>
                  <p className="text-center text-[#14532D] font-bold text-lg">
                    WhatsApp: 08166052985
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="flex-1 w-full bg-[#14532D] hover:bg-[#047857] text-white text-sm md:text-lg px-4 md:px-8 py-4 md:py-6 rounded-full font-semibold shadow-lg whitespace-normal break-words"
                  >
                    Send Payment Proof via WhatsApp
                  </Button>
                  <Link href="/" className="flex-1">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-[#14532D] text-[#14532D] hover:bg-[#14532D] hover:text-white text-lg px-8 py-6 rounded-full font-semibold"
                    >
                      LATER
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
