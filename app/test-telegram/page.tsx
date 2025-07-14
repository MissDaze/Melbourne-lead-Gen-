"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Loader2, TestTube } from "lucide-react"

export default function TestTelegramPage() {
  const [testing, setTesting] = useState(false)
  const [result, setResult] = useState<any>(null)

  const runTest = async () => {
    setTesting(true)
    setResult(null)

    try {
      const response = await fetch("/api/test-telegram", {
        method: "GET",
      })

      const data = await response.json()
      setResult({ ...data, httpStatus: response.status })
    } catch (error) {
      setResult({
        error: "Failed to connect to test endpoint",
        details: error instanceof Error ? error.message : "Unknown error",
        status: "failed",
        httpStatus: 0,
      })
    } finally {
      setTesting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Telegram Integration Test</h1>
          <p className="text-gray-600">Test your Telegram bot connection before going live</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TestTube className="h-5 w-5" />
              <span>Bot Connection Test</span>
            </CardTitle>
            <CardDescription>This will send a test message to your configured Telegram chat</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={runTest} disabled={testing} className="w-full">
              {testing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Testing Connection...
                </>
              ) : (
                <>
                  <TestTube className="h-4 w-4 mr-2" />
                  Run Telegram Test
                </>
              )}
            </Button>

            {result && (
              <div className="mt-6">
                <div className="flex items-center space-x-2 mb-4">
                  {result.status === "success" ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <Badge variant={result.status === "success" ? "default" : "destructive"}>
                    {result.status === "success" ? "SUCCESS" : "FAILED"}
                  </Badge>
                  <Badge variant="outline">HTTP {result.httpStatus}</Badge>
                </div>

                {result.status === "success" ? (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">✅ Test Passed!</h3>
                    <p className="text-green-800 text-sm mb-3">{result.message}</p>

                    {result.config && (
                      <div className="text-xs text-green-700 space-y-1">
                        <p>• Bot Token: {result.config.bot_token_set ? "✅ Set" : "❌ Missing"}</p>
                        <p>
                          • Chat ID: {result.config.chat_id_set ? "✅ Set" : "❌ Missing"} ({result.config.chat_id})
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-900 mb-2">❌ Test Failed</h3>
                    <p className="text-red-800 text-sm mb-2">{result.error}</p>
                    {result.details && (
                      <details className="text-xs text-red-700">
                        <summary className="cursor-pointer font-medium">Show Details</summary>
                        <pre className="mt-2 whitespace-pre-wrap">{result.details}</pre>
                      </details>
                    )}
                  </div>
                )}

                {result.telegram_response && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-medium text-gray-700">
                      Show Telegram API Response
                    </summary>
                    <pre className="mt-2 text-xs bg-gray-100 p-3 rounded overflow-auto">
                      {JSON.stringify(result.telegram_response, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            )}

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">How to Use This Test:</h4>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Make sure your environment variables are set in Vercel</li>
                <li>Click "Run Telegram Test" above</li>
                <li>Check your Telegram chat for the test message</li>
                <li>If successful, your lead capture form will work</li>
              </ol>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Common Issues:</h4>
              <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
                <li>
                  <strong>Bot token missing:</strong> Set TELEGRAM_BOT_TOKEN in Vercel
                </li>
                <li>
                  <strong>Chat ID missing:</strong> Set TELEGRAM_CHAT_ID in Vercel
                </li>
                <li>
                  <strong>Unauthorized:</strong> Start a chat with your bot first
                </li>
                <li>
                  <strong>Chat not found:</strong> Check your chat ID is correct
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Button variant="outline" onClick={() => (window.location.href = "/")}>
            ← Back to Main Site
          </Button>
        </div>
      </div>
    </div>
  )
}
