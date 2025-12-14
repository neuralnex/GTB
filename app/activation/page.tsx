"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ActivationPage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "2347015074213"
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
                <div className="text-center space-y-6">
                  <p className="text-xl md:text-2xl font-semibold text-foreground">
                    To activate your account.
                  </p>
                  
                  <div className="bg-[#0F172A] rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-muted-foreground">Buy Two Team members:</span>
                      <span className="text-xl font-bold text-foreground">₦52,000</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-muted-foreground">Processing fee:</span>
                      <span className="text-xl font-bold text-foreground">₦5,000</span>
                    </div>
                    
                    <div className="border-t border-border pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-foreground">Total:</span>
                        <span className="text-2xl font-bold text-[#14532D]">₦57,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1C1C1E] rounded-lg p-6 space-y-4 border border-border">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-4">Bank Transfer Details</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Account Name:</span>
                      <span className="text-foreground font-semibold">Onward Samba Integrated Concept Limited</span>
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

                <div className="bg-[#14532D]/10 rounded-lg p-6 border border-[#14532D]/20">
                  <p className="text-center text-foreground font-semibold mb-2">
                    Send proof of payment to:
                  </p>
                  <p className="text-center text-[#14532D] font-bold text-lg">
                    WhatsApp: +2347015074213
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="flex-1 w-full bg-[#14532D] hover:bg-[#047857] text-white text-lg px-8 py-6 rounded-full font-semibold shadow-lg"
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
