import { Shield, Clock, HeadphonesIcon, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Güvenli Taşıma",
    description: "Yükleriniz sigortalı ve güvenli şekilde taşınır. 7/24 takip sistemi ile her an kontrol altında.",
  },
  {
    icon: Clock,
    title: "Zamanında Teslimat",
    description: "Her taşımanın zamanında ve sorunsuz gerçekleşmesi için özenle çalışıyor, taahhütlerimizi daima yerine getirmeye gayret ediyoruz.",
  },
  {
    icon: HeadphonesIcon,
    title: "7/24 Destek",
    description: "Uzman müşteri hizmetleri ekibimiz her zaman yanınızda. Sorularınız için bize ulaşın.",
  },
  {
    icon: TrendingUp,
    title: "Rekabetçi Fiyatlar",
    description: "Kaliteli hizmeti uygun fiyatlarla sunuyoruz. Özel anlaşmalar için bizimle iletişime geçin.",
  },
]

export function Features() {
  return (
    <section id="hakkimizda" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Neden Ekinci Nakliyat?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              20 yılı aşkın deneyimimiz ve Türkiye genelindeki güçlü ağımız ile müşterilerimize en iyi hizmeti
              sunuyoruz. Modern kamyon ve kamyonet filomuz, profesyonel ekibimiz ve müşteri odaklı yaklaşımımızla
              sektörde fark yaratıyoruz.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-accent/10 h-fit">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img src="/professional-moving-trucks-and-workers-loading-fur.jpg" alt="Nakliye operasyonları" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
