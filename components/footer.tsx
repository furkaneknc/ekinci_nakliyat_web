import { Package, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Package className="h-8 w-8" />
              <span className="text-xl font-bold">Ekinci Nakliyat</span>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              20 yıldır Türkiye genelinde güvenilir nakliye hizmetleri sunuyoruz. Modern filomuz ve profesyonel
              ekibimizle her zaman yanınızdayız.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/tahaeknci"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="/hizmetler/ev-tasima" className="hover:opacity-100 transition-opacity">
                  Ev & Ofis Taşıma
                </a>
              </li>
              <li>
                <a href="/hizmetler/sehirler-arasi" className="hover:opacity-100 transition-opacity">
                  Şehirler Arası Nakliye
                </a>
              </li>
              <li>
                <a href="/hizmetler/parca-esya" className="hover:opacity-100 transition-opacity">
                  Parça Eşya Taşıma
                </a>
              </li>
              <li>
                <a href="/hizmetler/kurumsal-tasima" className="hover:opacity-100 transition-opacity">
                  Kurumsal Taşıma
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kurumsal</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="/hakkimizda" className="hover:opacity-100 transition-opacity">
                  Hakkımızda
                </a>
              </li>
              
              
              <li>
                <a href="/iletisim" className="hover:opacity-100 transition-opacity">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Destek</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="/sss" className="hover:opacity-100 transition-opacity">
                  SSS
                </a>
              </li>


              <li>
                <a href="/gizlilik-politikasi" className="hover:opacity-100 transition-opacity">
                  Gizlilik Politikası
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-90">
          <p>&copy; 2025 Ekinci Nakliyat. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
