"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { sendContactEmail } from "@/app/actions/send-email"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="iletisim" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Bizimle İletişime Geçin</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sorularınız için bize ulaşın, size en uygun çözümü sunalım
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="border-border mb-8">
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="E-posta Adresiniz"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Telefon Numaranız"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Mesajınız"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400">
                      Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400">
                      Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya telefon ile iletişime geçin.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                  <p className="text-muted-foreground">+90 537 546 0274</p>
                  <p className="text-muted-foreground">+90 535 207 0406</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
                  <p className="text-muted-foreground">ekincinakliyat61@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                  <p className="text-muted-foreground">
                    Atatürk Mahallesi, Adnan Kahveci Bulvarı
                    <br />
                    Esenyurt / İstanbul, Türkiye
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
                <p className="text-sm opacity-90">Pazartesi - Cuma: 08:00 - 19:00</p>
                <p className="text-sm opacity-90">Cumartesi: 09:00 - 17:00</p>
                <p className="text-sm opacity-90 mt-2">Acil durumlar için 7/24 hizmetinizdeyiz.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
