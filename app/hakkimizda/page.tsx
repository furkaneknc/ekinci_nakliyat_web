import { Award, Target, CheckCircle, Truck, Users, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Hakkımızda</h1>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Ekinci Nakliyat olarak, Türkiye genelinde güvenilir ve profesyonel taşımacılık hizmeti sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Hikayemiz</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Ekinci Nakliyat, 2006 yılında Ömer Ekinci tarafından kurulmuş olup, taşımacılık sektörüne tek bir kamyonetle adım atmıştır.
                  Kuruluşundan itibaren müşteri memnuniyetini ön planda tutan anlayışıyla kısa sürede büyüyen firmamız, zaman içerisinde araç filosunu genişletmiş; kamyonetlerin yanı sıra yüksek kapasiteli kamyonları da bünyesine katarak hizmet ağını güçlendirmiştir.


                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">

                  Kurulduğumuz günden bu yana temel amacımız, güvenilir, hızlı ve ekonomik çözümler sunarak müşterilerimizin taşımacılık ihtiyaçlarını en doğru şekilde karşılamaktır.
                  Deneyimli ekibimiz, modern araç filomuz ve profesyonel operasyon anlayışımızla her taşımanın sorunsuz ve zamanında tamamlanması için özenle çalışıyoruz.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/modern-trucks-on-highway-turkey-transportation.jpg"
                  alt="Ekinci Nakliyat Kamyonları"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Değerlerimiz</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Müşteri Odaklılık</h3>
                  <p className="text-muted-foreground text-sm">
                    Müşterilerimizin ihtiyaçlarını anlamak ve en iyi çözümü sunmak önceliğimizdir.
                  </p>
                </Card>
                <Card className="p-6">
                  <CheckCircle className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Güvenilirlik</h3>
                  <p className="text-muted-foreground text-sm">
                    Sözümüzü tutarız. Belirlenen tarih ve saatte eksiksiz teslimat garantisi veriyoruz.
                  </p>
                </Card>
                <Card className="p-6">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Kalite</h3>
                  <p className="text-muted-foreground text-sm">
                    Her işimizde en yüksek kalite standartlarını uyguluyoruz. Sürekli gelişim ilkemizdir.
                  </p>
                </Card>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Rakamlarla Ekinci Nakliyat</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground">Yıllık Tecrübe</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Çalışan</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Araç Filosu</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-muted-foreground">Mutlu Müşteri</div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Neden Ekinci Nakliyat?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <Truck className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Modern Araç Filosu</h3>
                    <p className="text-muted-foreground">
                      Yeni model kamyon ve kamyonetlerimizle eşyalarınızı güvenle taşıyoruz. Tüm araçlarımız düzenli
                      bakımlı ve sigortalıdır.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Deneyimli Ekip</h3>
                    <p className="text-muted-foreground">
                      Alanında uzman, eğitimli ve güler yüzlü ekibimiz her zaman hizmetinizde. Müşteri memnuniyeti
                      odaklı çalışıyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Tam Sigorta Güvencesi</h3>
                    <p className="text-muted-foreground">
                      Tüm taşıma işlemlerimiz sigorta kapsamındadır. Eşyalarınız tam güvence altında.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Şeffaf Fiyatlandırma</h3>
                    <p className="text-muted-foreground">
                      Gizli ücret yok. Size verdiğimiz fiyat, ödeyeceğiniz fiyattır. Net ve şeffaf çalışıyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Türkiye genelinde en güvenilir ve kaliteli nakliye hizmetini sunmak. Müşterilerimizin taşıma sürecinde
                  hiçbir endişe duymadan bize güvenmelerini sağlamak. Modern teknoloji ve deneyimli ekibimizle sektörde
                  fark yaratmak.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Türkiye'nin en çok tercih edilen nakliye şirketi olmak. Sürekli gelişim ve yenilikçi yaklaşımlarla
                  sektöre yön vermek. Çalışanlarımıza ve müşterilerimize değer katan, sürdürülebilir bir işletme olmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
