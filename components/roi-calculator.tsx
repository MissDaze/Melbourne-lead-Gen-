"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"

export function ROICalculator() {
  const [purchasePrice, setPurchasePrice] = useState("")
  const [annualRent, setAnnualRent] = useState("")
  const [expenses, setExpenses] = useState("")
  const [initialInvestment, setInitialInvestment] = useState("")
  const [result, setResult] = useState<number | null>(null)

  const calculateROI = () => {
    const price = Number.parseFloat(purchasePrice)
    const rent = Number.parseFloat(annualRent)
    const exp = Number.parseFloat(expenses) || 0
    const investment = Number.parseFloat(initialInvestment)

    if (price && rent && investment) {
      const netIncome = rent - exp
      const roi = ((netIncome - price * 0.02) / investment) * 100 // Assuming 2% annual costs
      setResult(roi)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calculator className="h-5 w-5" />
          <span>ROI Calculator</span>
        </CardTitle>
        <CardDescription>Calculate your return on investment for commercial properties</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="purchase-price">Purchase Price ($)</Label>
            <Input
              id="purchase-price"
              type="number"
              placeholder="2,500,000"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="annual-rent">Annual Rental Income ($)</Label>
            <Input
              id="annual-rent"
              type="number"
              placeholder="200,000"
              value={annualRent}
              onChange={(e) => setAnnualRent(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expenses">Annual Expenses ($)</Label>
            <Input
              id="expenses"
              type="number"
              placeholder="25,000"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="initial-investment">Initial Investment ($)</Label>
            <Input
              id="initial-investment"
              type="number"
              placeholder="500,000"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={calculateROI} className="w-full">
          Calculate ROI
        </Button>

        {result !== null && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Results</h3>
            <div className="text-2xl font-bold text-blue-600">{result.toFixed(2)}% Annual ROI</div>
            <p className="text-sm text-blue-700 mt-2">
              {result > 15 ? "Excellent return!" : result > 10 ? "Good return" : "Consider other opportunities"}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
