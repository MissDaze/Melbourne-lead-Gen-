import { NextResponse } from "next/server"

export async function GET() {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    // Check if environment variables are set
    if (!token) {
      return NextResponse.json(
        {
          error: "TELEGRAM_BOT_TOKEN not set",
          status: "failed",
        },
        { status: 500 },
      )
    }

    if (!chatId) {
      return NextResponse.json(
        {
          error: "TELEGRAM_CHAT_ID not set",
          status: "failed",
        },
        { status: 500 },
      )
    }

    // Test message
    const testMessage = `🧪 TEST MESSAGE

This is a test from your Melbourne Property website.

✅ Bot Token: Set (${token.substring(0, 10)}...)
✅ Chat ID: ${chatId}
⏰ Time: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" })}

If you see this message, your Telegram integration is working correctly!`

    // Send test message to Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: testMessage,
        parse_mode: "HTML",
      }),
    })

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text()
      console.error("Telegram API error:", errorText)

      return NextResponse.json(
        {
          error: "Telegram API request failed",
          details: errorText,
          status: "failed",
        },
        { status: 502 },
      )
    }

    const telegramData = await telegramResponse.json()

    return NextResponse.json({
      message: "Test message sent successfully!",
      status: "success",
      telegram_response: telegramData,
      config: {
        bot_token_set: !!token,
        chat_id_set: !!chatId,
        chat_id: chatId,
      },
    })
  } catch (error) {
    console.error("Test endpoint error:", error)
    return NextResponse.json(
      {
        error: "Unexpected error occurred",
        details: error instanceof Error ? error.message : "Unknown error",
        status: "failed",
      },
      { status: 500 },
    )
  }
}

export async function POST() {
  // Allow POST requests too for easier testing
  return GET()
}
