import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">İletişim</h1>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Sorularınız için bize ulaşın. Size en kısa sürede dönüş yapacağız.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Contact Cards */}
              <Card className="p-6">
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Adres</h3>
                <p className="text-muted-foreground">
                  Atatürk Mahallesi, Adnan Kahveci Bulvarı
                  <br />
                  Esenyurt, İstanbul
                </p>
              </Card>

              <Card className="p-6">
                <Phone className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Telefon</h3>
                <p className="text-muted-foreground mb-2">
                  <a href="tel:+905375460274" className="hover:text-primary transition-colors">
                    +90 (537) 546 02 74
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <a href="tel:+905352070406" className="hover:text-primary transition-colors">
                    +90 (535) 207 04 06
                  </a>
                </p>
              </Card>

              <Card className="p-6">
                <Mail className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">E-posta</h3>
                <p className="text-muted-foreground mb-2">
                  <a href="mailto:ekincinakliyat61@gmail.com" className="hover:text-primary transition-colors">
                    ekincinakliyat61@gmail.com
                  </a>
                </p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Bize Ulaşın</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Ad Soyad *</Label>
                      <Input id="contact-name" placeholder="Adınız ve soyadınız" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Telefon *</Label>
                      <Input id="contact-phone" type="tel" placeholder="0555 123 45 67" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">E-posta *</Label>
                    <Input id="contact-email" type="email" placeholder="ornek@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Konu *</Label>
                    <Input id="contact-subject" placeholder="Mesajınızın konusu" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Mesajınız *</Label>
                    <Textarea id="contact-message" placeholder="Mesajınızı buraya yazın..." rows={6} required />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-5 w-5" />
                    Mesaj Gönder
                  </Button>
                </form>
              </div>

              {/* Additional Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Çalışma Saatleri</h2>
                <Card className="p-6 mb-6">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Pazartesi - Cuma</span>
                      <span className="text-muted-foreground">08:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Cumartesi</span>
                      <span className="text-muted-foreground">09:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Pazar</span>
                      <span className="text-muted-foreground">Kapalı</span>
                    </div>
                  </div>
                </Card>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">Acil Durum Hattı</h3>
                  <p className="text-muted-foreground mb-4">
                    7/24 acil taşıma ve destek hizmetleri için bizi arayabilirsiniz.
                  </p>
                  <Button size="lg" className="w-full" asChild>
                    <a href="tel:+905375460274">
                      <Phone className="mr-2 h-5 w-5" />
                      Hemen Ara
                    </a>
                  </Button>
                </div>

                <div className="mt-6 bg-muted/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">Şubelerimiz</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">İstanbul Merkez</p>
                      <p className="text-muted-foreground">Esenyurt, İstanbul</p>
                    </div>
                    <div>
                      <p className="font-medium">Balıkesir Şubesi</p>
                      <p className="text-muted-foreground">Avlu, Balıkesir</p>
                    </div>
                    <div>
                      <p className="font-medium">İzmir Şubesi</p>
                      <p className="text-muted-foreground">Buca, İzmir</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Bizi Haritada Bulun</h2>
            <div className="bg-muted rounded-lg overflow-hidden" style={{ height: "450px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5234567890123!2d28.6789012345678!3d41.0234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3f7b6f7b6f7%3A0x1234567890abcdef!2sAdnan%20Kahveci%20Bulvar%C4%B1%2C%20Esenyurt%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
