import { Package, Shield, Clock, CheckCircle, Phone, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ParcaEsyaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Parça Eşya Taşıma Hizmeti</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
              Küçük eşyalarınız için ekonomik çözüm. Tam kamyon tutmaya gerek yok, sadece taşıyacağınız eşya kadar ödeme
              yapın.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://wa.me/905375460274?text=Merhaba,%20parça%20eşya%20taşıma%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum."
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
              <Package className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Esnek Hacim</h3>
              <p className="text-muted-foreground text-sm">İstediğiniz kadar eşya taşıyın</p>
            </Card>
            <Card className="p-6">
              <Scale className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Ekonomik Fiyat</h3>
              <p className="text-muted-foreground text-sm">Sadece taşıdığınız kadar ödeyin</p>
            </Card>
            <Card className="p-6">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Hızlı Teslimat</h3>
              <p className="text-muted-foreground text-sm">Aynı gün veya ertesi gün teslimat</p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Güvenli Taşıma</h3>
              <p className="text-muted-foreground text-sm">Sigortalı ve güvenli paketleme</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Parça Eşya Taşıma Nedir?</h2>

            <p className="text-lg text-muted-foreground mb-8">
            Parça eşya taşıma hizmetimiz; tam ev taşımaya ihtiyaç duymayan bireyler ve kısmi yük gönderimi yapmak isteyen firmalar için özel olarak sunulmaktadır.
            Ev eşyalarından, lojistik firmalarının araç kapasitesinin bir bölümünü kaplayan yüklerine kadar, her türlü taşıma ihtiyacına güvenli ve ekonomik çözümler sağlıyoruz.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tek Eşya Taşıma</h3>
                  <p className="text-muted-foreground">
                    Paletli ürünler, ofis malzemeleri, ev eşyaları veya araç kasasının bir bölümünü kaplayan yüklerinizi güvenle taşıyoruz.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Online Alışveriş Teslimatı</h3>
                  <p className="text-muted-foreground">
                    İkinci el alım-satım sitelerinden aldığınız büyük eşyaları güvenle taşıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Şehir İçi ve Şehirler Arası</h3>
                  <p className="text-muted-foreground">
                    Hem şehir içinde hem de şehirler arası parça eşya taşıma hizmeti veriyoruz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Esnek Ödeme</h3>
                  <p className="text-muted-foreground">Nakit veya havale ile ödeme yapabilirsiniz.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Fiyatlandırma Nasıl Yapılır?</h3>
              <p className="text-muted-foreground mb-6">
                Parça eşya taşıma fiyatları, taşınacak eşyanın hacmi, ağırlığı ve mesafeye göre belirlenir.
                Eşyalarınızın fotoğrafını WhatsApp üzerinden göndererek hızlı fiyat teklifi alabilirsiniz. Gizli ücret
                yok, şeffaf fiyatlandırma.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="md:hidden" asChild>
                  <a href="tel:+905375460274">Fiyat Teklifi Al</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://wa.me/905375460274?text=Merhaba,%20parça%20eşya%20taşıma%20için%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp ile İletişim
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
