import Header from "@/components/header"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function SSS() {
  const faqCategories = [
    {
      category: "Genel Sorular",
      questions: [
        {
          q: "Ekinci Nakliyat hangi şehirlere hizmet veriyor?",
          a: "Türkiye'nin 81 iline şehirler arası nakliye hizmeti veriyoruz. Modern filomuz ve geniş şube ağımızla her noktaya ulaşabiliyoruz.",
        },
        {
          q: "Nakliye fiyatları nasıl belirleniyor?",
          a: "Fiyatlarımız taşınacak eşya miktarı, mesafe, kat sayısı ve özel hizmet gereksinimlerine göre belirlenir. Ücretsiz keşif hizmeti ile size özel fiyat teklifi sunuyoruz.",
        },
        {
          q: "Randevu almak için ne yapmalıyım?",
          a: "WhatsApp hattımızdan (+90 534 307 82 93) veya iletişim formumuzu doldurarak bize ulaşabilirsiniz. Ekibimiz en kısa sürede size dönüş yapacaktır.",
        },
      ],
    },
    {
      category: "Taşıma Süreci",
      questions: [
        {
          q: "Eşyalarım ne kadar sürede teslim edilir?",
          a: "Teslimat süresi mesafeye göre değişir. Şehir içi taşımalarda aynı gün, şehirler arası taşımalarda 1-3 gün içinde teslimat yapılır.",
        },
        {
          q: "Eşyalarımı paketlemem gerekiyor mu?",
          a: "Hayır, eşyalarınızı paketlemenize gerek yok. Sadece nakliye hizmeti veriyoruz, eşyalarınızı hazır halde bekliyoruz.",
        },
        {
          q: "Taşıma sırasında eşyalarım zarar görürse ne olur?",
          a: "Tüm taşımalarımız sigorta kapsamındadır. Herhangi bir hasar durumunda sigorta şirketimiz gerekli işlemleri başlatır.",
        },
        {
          q: "Hangi araçlarla taşıma yapıyorsunuz?",
          a: "Filomuzda farklı boyutlarda kamyon ve kamyonetler bulunmaktadır. Eşya miktarınıza göre en uygun aracı tahsis ediyoruz.",
        },
      ],
    },
    {
      category: "Ödeme ve Fiyatlandırma",
      questions: [
        {
          q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
          a: "Nakit, kredi kartı, banka havalesi ve EFT ile ödeme yapabilirsiniz. Kurumsal müşterilerimiz için fatura ve çek seçenekleri de mevcuttur.",
        },
        {
          q: "Ön ödeme yapılması gerekiyor mu?",
          a: "Rezervasyon için genellikle %30 kapora alınır, kalan tutar taşıma tamamlandıktan sonra ödenir. Kurumsal anlaşmalarda farklı ödeme planları uygulanabilir.",
        },
        {
          q: "İptal durumunda ücret iadesi yapılıyor mu?",
          a: "Taşıma tarihinden 48 saat öncesine kadar yapılan iptallerde kapora iadesi yapılır. Daha geç iptallerde kapora iadesi yapılmaz.",
        },
      ],
    },
    {
      category: "Özel Durumlar",
      questions: [
        {
          q: "Değerli eşyalarımı nasıl taşımalıyım?",
          a: "Değerli eşyalarınızı (mücevher, para, önemli belgeler) kendiniz taşımanızı öneririz. Diğer değerli eşyalar için ekstra sigorta yaptırabilirsiniz.",
        },
        {
          q: "Kurumsal taşıma hizmeti veriyor musunuz?",
          a: "Evet, ofis ve işyeri taşımaları için özel kurumsal çözümlerimiz bulunmaktadır. Toplu taşımalar için özel indirimler sunuyoruz.",
        },
        {
          q: "Parça eşya taşıma nedir?",
          a: "Tam bir ev taşıması yerine sadece birkaç eşyanızı taşımak istiyorsanız parça eşya taşıma hizmetimizden yararlanabilirsiniz. Daha ekonomik bir seçenektir.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-accent py-16 lg:py-24 pt-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <HelpCircle className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Sıkça Sorulan Sorular</h1>
              <p className="text-lg lg:text-xl opacity-90 text-pretty">
                Nakliye hizmetlerimiz hakkında merak ettiğiniz her şey burada
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-primary">{category.category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, qIdx) => (
                      <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`} className="border rounded-lg px-6">
                        <AccordionTrigger className="text-left font-semibold hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="max-w-4xl mx-auto mt-16 p-8 bg-primary/5 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Sorunuzun cevabını bulamadınız mı?</h3>
              <p className="text-muted-foreground mb-6">
                Ekibimiz size yardımcı olmak için hazır. Bize ulaşın, tüm sorularınızı yanıtlayalım.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/905343078293?text=Merhaba, nakliye hizmeti hakkında bilgi almak istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  WhatsApp ile İletişim
                </a>
                <a
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  İletişim Formu
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
