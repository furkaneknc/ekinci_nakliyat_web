import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export function Hero() {
  const whatsappNumber = "905375460274"
  const whatsappMessage = encodeURIComponent("Merhaba, nakliye hizmeti hakkında teklif almak istiyorum.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="relative pt-32 pb-20 lg:pt-28 lg:pb-30 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-trucks-on-highway-turkey-transportation.jpg"
          alt="Nakliye kamyonları"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            <span>Türkiye Geneli Güvenilir Hizmet</span>
          </div>

          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Türkiye'nin Her Yerine Güvenli Nakliye
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed text-pretty">
            Ekinci Nakliyat olarak, modern kamyon ve kamyonet filomuzla başta İstanbul olmak üzere çevre illerde faaliyet gösteriyor; Türkiye’nin önde gelen lojistik firmalarına taşımacılık hizmeti sunuyoruz. Kurumsal çözüm ortaklarımıza ait yükleri, kendi araç filomuz ve deneyimli ekibimizle güvenle taşıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Hemen Teklif Al
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
              <a href="#hizmetler">Hizmetlerimiz</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
