import { Package, MapPin, Users, Award } from "lucide-react"

const stats = [
  {
    icon: Package,
    value: "10K+",
    label: "Yıllık Taşıma",
  },
  {
    icon: MapPin,
    value: "81",
    label: "İl",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Mutlu Müşteri",
  },
  {
    icon: Award,
    value: "20+",
    label: "Yıllık Deneyim",
  },
]

export function Stats() {
  return (
    <section className="py-8 lg:py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="h-8 w-8 lg:h-10 lg:w-10 opacity-90" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm lg:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
