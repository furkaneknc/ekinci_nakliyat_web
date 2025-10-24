import { Truck, Shield, Clock, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EvTasimaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ev ve Ofis Taşıma Hizmeti</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
              Evinizi ve Ofisinizi paketleme veya yükleme işlemlerine dahil olmadan, belirlenen adresler arasında güvenle taşıyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://wa.me/905375460274?text=Merhaba, ev taşıma hizmeti hakkında bilgi almak istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp ile İletişim
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Sigortalı Taşıma</h3>
              <p className="text-muted-foreground text-sm">Tüm eşyalarınız sigorta kapsamında güvende</p>
            </Card>
            <Card className="p-6">
              <Truck className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Modern Araçlar</h3>
              <p className="text-muted-foreground text-sm">Yeni model kamyon ve kamyonetler</p>
            </Card>
            <Card className="p-6">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Zamanında Teslimat</h3>
              <p className="text-muted-foreground text-sm">Belirlenen tarihte eksiksiz teslimat</p>
            </Card>
            <Card className="p-6">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Profesyonel Ekip</h3>
              <p className="text-muted-foreground text-sm">Deneyimli ve eğitimli personel</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Ev Taşıma Hizmetimiz</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Güvenli Taşıma</h3>
                  <p className="text-muted-foreground">
                    Eşyalarınızı modern kamyon ve kamyonetlerimizle güvenli şekilde taşıyoruz. Tüm eşyalar sigorta
                    kapsamındadır.
                  </p>
                </div>
              </div>



              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Zamanında Teslimat</h3>
                  <p className="text-muted-foreground">
                    Belirlenen tarih ve saatte eşyalarınızı teslim ediyoruz. Güvenilir ve hızlı hizmet garantisi.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sigorta Garantisi</h3>
                  <p className="text-muted-foreground">
                    Tüm taşıma işlemlerimiz sigorta kapsamındadır. Olası hasarlarda tam teminat sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ücretsiz Fiyat Teklifi</h3>
              <p className="text-muted-foreground mb-6">
                Ev taşıma hizmetimiz için ücretsiz fiyat teklifi alın. Gizli ücret yok, şeffaf fiyatlandırma.
              </p>
              <Button size="lg" asChild>
                <a
                  href="https://wa.me/905375460274?text=Merhaba, ev taşıma için fiyat teklifi almak istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fiyat Teklifi Al
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
