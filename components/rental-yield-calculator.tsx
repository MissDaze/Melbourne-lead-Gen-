"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"

export function RentalYieldCalculator() {
  const [purchasePrice, setPurchasePrice] = useState("")
  const [weeklyRent, setWeeklyRent] = useState("")
  const [result, setResult] = useState<{ gross: number; net: number } | null>(null)

  const calculateYield = () => {
    const price = Number.parseFloat(purchasePrice)
    const rent = Number.parseFloat(weeklyRent)

    if (price && rent) {
      const annualRent = rent * 52
      const grossYield = (annualRent / price) * 100
      const netYield = grossYield * 0.85 // Assuming 15% expenses
      setResult({ gross: grossYield, net: netYield })
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5" />
          <span>Rental Yield Calculator</span>
        </CardTitle>
        <CardDescription>Calculate gross and net rental yields for your investment</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="purchase-price-yield">Purchase Price ($)</Label>
            <Input
              id="purchase-price-yield"
              type="number"
              placeholder="1,500,000"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weekly-rent">Weekly Rent ($)</Label>
            <Input
              id="weekly-rent"
              type="number"
              placeholder="2,500"
              value={weeklyRent}
              onChange={(e) => setWeeklyRent(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={calculateYield} className="w-full">
          Calculate Yield
        </Button>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Gross Yield</h3>
                <div className="text-2xl font-bold text-green-600">{result.gross.toFixed(2)}%</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Net Yield</h3>
                <div className="text-2xl font-bold text-blue-600">{result.net.toFixed(2)}%</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Melbourne commercial property yields typically range from 5-8%. Net yield accounts for estimated expenses
              (rates, insurance, maintenance).
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
