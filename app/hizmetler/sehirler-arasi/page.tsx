import { MapPin, Shield, Clock, CheckCircle, Phone, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SehirlerArasiPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Şehir İçi ve Şehirler Arası Nakliye Hizmeti</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
              İstanbul içi ve Türkiye geneli taşımacılıkta güvenli, sigortalı ve zamanında teslimat.
              Her ölçekten yükünüz için profesyonel nakliye çözümleri sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://wa.me/905375460274?text=Merhaba,%20şehirler%20arası%20nakliye%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Teklif Al
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="md:hidden bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="tel:+905375460274">
                  <Phone className="mr-2 h-5 w-5" />
                  Hemen Ara
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
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">81 İle Ulaşım</h3>
              <p className="text-muted-foreground text-sm">Türkiye'nin her şehrine taşıma</p>
            </Card>
            <Card className="p-6">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Hızlı Teslimat</h3>
              <p className="text-muted-foreground text-sm">Zamanında ve güvenli teslimat</p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Sigortalı Taşıma</h3>
              <p className="text-muted-foreground text-sm">Tam kapsamlı sigorta güvencesi</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Şehir İçi ve Şehirler Arası Taşıma Avantajları</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Kapıdan Kapıya Hizmet</h3>
                  <p className="text-muted-foreground">
                    Eşyalarınızı eski adresinizden alıp yeni adresinize teslim ediyoruz. Ara aktarma yok.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Modern Kamyon Filosu</h3>
                  <p className="text-muted-foreground">
                    Yeni model, bakımlı kamyon ve kamyonetlerimizle güvenli taşıma sağlıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Deneyimli Sürücüler</h3>
                  <p className="text-muted-foreground">
                    Türkiye yollarını çok iyi bilen, deneyimli ve güvenilir sürücülerimiz.
                  </p>
                </div>
              </div>



              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Esnek Teslimat Tarihleri</h3>
                  <p className="text-muted-foreground">
                    Size uygun tarih ve saatte teslimat yapıyoruz. Hafta sonu teslimat imkanı.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Popüler Güzergahlar</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>İstanbul - İstanbul</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>İstanbul - Bursa</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>İstanbul - Balıkesir</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>İstanbul - İzmir</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>İstanbul - Bursa</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>İzmir - Trakya</span>
                </div>

              </div>
              <p className="text-muted-foreground mb-6">
                Bu güzergahlar dışında Türkiye'nin her şehrine taşıma hizmeti veriyoruz. Fiyat teklifi için bizimle
                iletişime geçin.
              </p>
              <Button size="lg" asChild>
                <a
                  href="https://wa.me/905375460274?text=Merhaba,%20şehirler%20arası%20nakliye%20için%20fiyat%20teklifi%20almak%20istiyorum."
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
