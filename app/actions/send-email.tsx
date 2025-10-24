"use server"

export async function sendContactEmail(formData: {
  name: string
  email: string
  phone: string
  message: string
}) {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Ekinci Nakliyat <onboarding@resend.dev>",
        to: ["ekincinakliyat61@gmail.com"],
        subject: `Yeni İletişim Formu Mesajı - ${formData.name}`,
        html: `
          <h2>Yeni İletişim Formu Mesajı</h2>
          <p><strong>Ad Soyad:</strong> ${formData.name}</p>
          <p><strong>E-posta:</strong> ${formData.email}</p>
          <p><strong>Telefon:</strong> ${formData.phone}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${formData.message}</p>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error("Email gönderilemedi")
    }

    return { success: true }
  } catch (error) {
    console.error("Email gönderme hatası:", error)
    return { success: false, error: "Email gönderilemedi" }
  }
}
