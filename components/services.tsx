import { Card, CardContent } from "@/components/ui/card"
import { Home, Building2, Truck, Package, Warehouse, Shield } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Ev Taşıma",
    description: "Eşyalarınızı özenle paketliyor, sigortalı olarak yeni evinize güvenle taşıyoruz.",
  },
  {
    icon: Building2,
    title: "Ofis Taşıma",
    description: "İş yerinizi minimum aksama ile profesyonel ekibimizle yeni adresinize taşıyoruz.",
  },
  {
    icon: Truck,
    title: "Şehirler Arası Nakliye",
    description: "Modern kamyon filomuz ile Türkiye'nin her şehrine güvenli taşımacılık.",
  },

  {
    icon: Shield,
    title: "Sigortalı Taşıma",
    description: "Tüm taşımalarımız sigortalıdır. Eşyalarınız tam güvence altında.",
  },
]

export function Services() {
  return (
    <section id="hizmetler" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Hizmetlerimiz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Kapsamlı lojistik çözümlerimiz ile işinizin her aşamasında yanınızdayız.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
