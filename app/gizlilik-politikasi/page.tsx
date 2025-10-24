import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield } from "lucide-react"

export default function GizlilikPolitikasi() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-accent py-16 lg:py-24 pt-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <Shield className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Gizlilik Politikası</h1>
              <p className="text-lg lg:text-xl opacity-90 text-pretty">
                Kişisel verilerinizin güvenliği bizim için önceliklidir
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">1. Giriş</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ekinci Nakliyat olarak, müşterilerimizin kişisel verilerinin gizliliğine ve güvenliğine büyük önem
                    veriyoruz. Bu gizlilik politikası, topladığımız kişisel verilerin nasıl kullanıldığını, saklandığını
                    ve korunduğunu açıklamaktadır.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">2. Toplanan Bilgiler</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Hizmetlerimizi sunabilmek için aşağıdaki bilgileri topluyoruz:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Ad, soyad ve iletişim bilgileri (telefon, e-posta, adres)</li>
                    <li>Taşınma adresi ve teslimat adresi bilgileri</li>
                    <li>Taşınacak eşya bilgileri</li>
                    <li>Ödeme bilgileri (güvenli ödeme sistemleri üzerinden)</li>
                    <li>Web sitesi kullanım bilgileri (çerezler aracılığıyla)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">3. Bilgilerin Kullanımı</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Topladığımız bilgileri şu amaçlarla kullanırız:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Nakliye hizmetlerini planlamak ve gerçekleştirmek</li>
                    <li>Müşteri hizmetleri ve destek sağlamak</li>
                    <li>Fatura ve ödeme işlemlerini yönetmek</li>
                    <li>Hizmet kalitemizi geliştirmek</li>
                    <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">4. Bilgi Güvenliği</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Kişisel verilerinizi yetkisiz erişim, kayıp, kötüye kullanım veya değişikliğe karşı korumak için
                    endüstri standardı güvenlik önlemleri kullanıyoruz. Verileriniz şifreli bağlantılar üzerinden
                    iletilir ve güvenli sunucularda saklanır.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">5. Bilgi Paylaşımı</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Kişisel bilgilerinizi üçüncü taraflarla paylaşmıyoruz. Ancak aşağıdaki durumlarda bilgi paylaşımı
                    gerekebilir:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Yasal zorunluluklar ve mahkeme kararları</li>
                    <li>Hizmet sağlayıcılar (ödeme işlemcileri, sigorta şirketleri)</li>
                    <li>Açık rızanızın bulunduğu durumlar</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">6. Çerezler</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Web sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için çerezler
                    kullanır. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz, ancak bu durumda bazı site
                    özellikleri düzgün çalışmayabilir.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">7. Haklarınız</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında aşağıdaki haklara sahipsiniz:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                    <li>Kişisel verilerinizin düzeltilmesini isteme</li>
                    <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                    <li>
                      İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi sonucu aleyhinize bir sonuç
                      doğması halinde itiraz etme
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">8. Değişiklikler</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda sizi
                    bilgilendireceğiz. Politikayı düzenli olarak gözden geçirmenizi öneririz.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">9. İletişim</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Gizlilik politikamız hakkında sorularınız varsa veya haklarınızı kullanmak istiyorsanız, bizimle
                    iletişime geçebilirsiniz:
                  </p>
                  <div className="mt-4 p-6 bg-primary/5 rounded-lg">
                    <p className="font-semibold mb-2">Ekinci Nakliyat</p>
                    <p className="text-muted-foreground">E-posta: ekincinakliyat61@gmail.com</p>
                    <p className="text-muted-foreground">Telefon: +90 537 546 0274</p>
                    <p className="text-muted-foreground">Adres: Esenyurt, Adnan Kahveci Bulvarı, İstanbul</p>
                  </div>
                </div>

                <div className="pt-8 border-t">
                  <p className="text-sm text-muted-foreground">Son güncelleme: Ekim 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
