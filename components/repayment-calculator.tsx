"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign } from "lucide-react"

export function RepaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [repaymentType, setRepaymentType] = useState("principal-interest")
  const [result, setResult] = useState<{ monthly: number; total: number } | null>(null)

  const calculateRepayment = () => {
    const principal = Number.parseFloat(loanAmount)
    const rate = Number.parseFloat(interestRate) / 100 / 12
    const term = Number.parseFloat(loanTerm) * 12

    if (principal && rate && term) {
      if (repaymentType === "interest-only") {
        const monthly = principal * (Number.parseFloat(interestRate) / 100 / 12)
        setResult({ monthly, total: monthly * term })
      } else {
        const monthly = (principal * (rate * Math.pow(1 + rate, term))) / (Math.pow(1 + rate, term) - 1)
        setResult({ monthly, total: monthly * term })
      }
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <DollarSign className="h-5 w-5" />
          <span>Loan Repayment Calculator</span>
        </CardTitle>
        <CardDescription>Calculate monthly repayments for commercial property loans</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="loan-amount">Loan Amount ($)</Label>
            <Input
              id="loan-amount"
              type="number"
              placeholder="2,000,000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest-rate">Interest Rate (%)</Label>
            <Input
              id="interest-rate"
              type="number"
              step="0.01"
              placeholder="7.25"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loan-term">Loan Term (Years)</Label>
            <Input
              id="loan-term"
              type="number"
              placeholder="25"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="repayment-type">Repayment Type</Label>
            <Select value={repaymentType} onValueChange={setRepaymentType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="principal-interest">Principal & Interest</SelectItem>
                <SelectItem value="interest-only">Interest Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={calculateRepayment} className="w-full">
          Calculate Repayments
        </Button>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Monthly Repayment</h3>
                <div className="text-2xl font-bold text-blue-600">
                  ${result.monthly.toLocaleString("en-AU", { maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Interest</h3>
                <div className="text-2xl font-bold text-gray-600">
                  $
                  {(result.total - Number.parseFloat(loanAmount)).toLocaleString("en-AU", { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {repaymentType === "interest-only"
                ? "Interest-only repayments. Principal must be repaid at loan maturity."
                : "Principal and interest repayments will fully repay the loan over the term."}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
