import { Building, Shield, CheckCircle, Phone, Users, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function KurumsalTasimaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Kurumsal Taşıma Çözümleri</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
              Şirketinizin taşıma ihtiyaçları için özel çözümler. Düzenli taşıma anlaşmaları, özel fiyatlandırma ve
              öncelikli hizmet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://wa.me/905375460274?text=Merhaba,%20kurumsal%20taşıma%20hizmeti%20için%20teklif%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kurumsal Teklif Al
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
              <Building className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Özel Çözümler</h3>
              <p className="text-muted-foreground text-sm">İşletmenize özel taşıma planları</p>
            </Card>
            <Card className="p-6">
              <FileText className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Sözleşmeli Hizmet</h3>
              <p className="text-muted-foreground text-sm">Yıllık anlaşma ve özel fiyatlar</p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Özel Ekip</h3>
              <p className="text-muted-foreground text-sm">Kurumsal projelere özel ekipler</p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Tam Güvence</h3>
              <p className="text-muted-foreground text-sm">Kapsamlı sigorta ve garanti</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Kurumsal Taşıma Hizmetlerimiz</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ofis Taşıma</h3>
                  <p className="text-muted-foreground">
                    Şubenizin veya merkezinizin taşınması için kapsamlı hizmet. IT ekipman, mobilya ve arşiv taşıma.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Depo ve Fabrika Taşıma</h3>
                  <p className="text-muted-foreground">
                    Endüstriyel ekipman, makine ve stok taşıma hizmetleri. Özel ekipman ve vinç desteği.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Düzenli Sevkiyat</h3>
                  <p className="text-muted-foreground">
                    Şubeleriniz arasında düzenli malzeme ve evrak taşıma hizmeti. Haftalık veya aylık programlar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proje Bazlı Taşıma</h3>
                  <p className="text-muted-foreground">
                    Fuar, etkinlik veya özel projeleriniz için taşıma ve lojistik desteği.
                  </p>
                </div>
              </div>


            </div>

            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Kurumsal Avantajlar</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Özel indirimli fiyatlandırma</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Faturalı ve sözleşmeli çalışma</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Öncelikli rezervasyon hakkı</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Özel müşteri temsilcisi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Esnek ödeme seçenekleri (30-60-90 gün vade)</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <a
                  href="https://wa.me/905375460274?text=Merhaba,%20kurumsal%20anlaşma%20yapmak%20istiyoruz.%20Lütfen%20bizimle%20iletişime%20geçin."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kurumsal Anlaşma Talebi
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
