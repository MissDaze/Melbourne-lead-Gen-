import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const formData = await req.json()

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      console.error("Telegram environment variables not set")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Format the Telegram message
    const telegramMessage = `🏢 NEW COMMERCIAL PROPERTY LEAD - MELBOURNE

👤 Contact Details:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

🎯 Investment Requirements:
Preferred Area: ${formData.melbourneArea || "Not specified"}
Property Type: ${formData.propertyType || "Not specified"}
Budget: ${formData.investmentBudget || "Not specified"}
Timeframe: ${formData.timeframe || "Not specified"}
Finance Status: ${formData.financeApproved || "Not specified"}
Experience Level: ${formData.experience || "Not specified"}

📝 Additional Information:
${formData.additionalInfo || "None provided"}

📧 Newsletter Subscription: ${formData.newsletter ? "Yes" : "No"}

⏰ Lead Generated: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" })}`

    // Send to Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    })

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text()
      console.error("Telegram API error:", errorText)
      return NextResponse.json({ error: "Failed to send notification" }, { status: 502 })
    }

    return NextResponse.json({ success: true, message: "Lead submitted successfully" })
  } catch (error) {
    console.error("Lead submission error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
