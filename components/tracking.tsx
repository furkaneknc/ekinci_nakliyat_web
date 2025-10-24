"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

export function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("")

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    // Tracking logic would go here
    console.log("Tracking:", trackingNumber)
  }

  return (
    <section id="takip" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="max-w-3xl mx-auto border-border shadow-lg">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Kargonuzu Takip Edin</h2>
              <p className="text-muted-foreground text-pretty">
                Takip numaranızı girerek gönderinizin anlık konumunu öğrenin
              </p>
            </div>

            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="Takip numaranızı girin (örn: EKN123456789)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 h-12 text-base"
              />
              <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Search className="h-5 w-5 mr-2" />
                Takip Et
              </Button>
            </form>

            <div className="mt-6 text-sm text-muted-foreground text-center">
              Takip numaranızı bulamıyor musunuz?
              <a href="#iletisim" className="text-accent hover:underline ml-1">
                Bize ulaşın
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
