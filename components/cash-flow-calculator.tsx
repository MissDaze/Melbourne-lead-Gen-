"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"

export function CashFlowCalculator() {
  const [annualRent, setAnnualRent] = useState("")
  const [loanRepayment, setLoanRepayment] = useState("")
  const [rates, setRates] = useState("")
  const [insurance, setInsurance] = useState("")
  const [maintenance, setMaintenance] = useState("")
  const [management, setManagement] = useState("")
  const [result, setResult] = useState<{ monthly: number; annual: number } | null>(null)

  const calculateCashFlow = () => {
    const rent = Number.parseFloat(annualRent) || 0
    const repayment = Number.parseFloat(loanRepayment) || 0
    const ratesExp = Number.parseFloat(rates) || 0
    const insuranceExp = Number.parseFloat(insurance) || 0
    const maintenanceExp = Number.parseFloat(maintenance) || 0
    const managementExp = Number.parseFloat(management) || 0

    const totalExpenses = repayment * 12 + ratesExp + insuranceExp + maintenanceExp + managementExp
    const annualCashFlow = rent - totalExpenses
    const monthlyCashFlow = annualCashFlow / 12

    setResult({ monthly: monthlyCashFlow, annual: annualCashFlow })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Building2 className="h-5 w-5" />
          <span>Cash Flow Calculator</span>
        </CardTitle>
        <CardDescription>Calculate net cash flow after all expenses</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="annual-rent-cf">Annual Rental Income ($)</Label>
            <Input
              id="annual-rent-cf"
              type="number"
              placeholder="180,000"
              value={annualRent}
              onChange={(e) => setAnnualRent(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="loan-repayment-cf">Monthly Loan Repayment ($)</Label>
              <Input
                id="loan-repayment-cf"
                type="number"
                placeholder="12,000"
                value={loanRepayment}
                onChange={(e) => setLoanRepayment(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rates">Annual Rates ($)</Label>
              <Input
                id="rates"
                type="number"
                placeholder="8,000"
                value={rates}
                onChange={(e) => setRates(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="insurance-cf">Annual Insurance ($)</Label>
              <Input
                id="insurance-cf"
                type="number"
                placeholder="3,500"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maintenance-cf">Annual Maintenance ($)</Label>
              <Input
                id="maintenance-cf"
                type="number"
                placeholder="5,000"
                value={maintenance}
                onChange={(e) => setMaintenance(e.target.value)}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="management-cf">Annual Management Fees ($)</Label>
              <Input
                id="management-cf"
                type="number"
                placeholder="7,200"
                value={management}
                onChange={(e) => setManagement(e.target.value)}
              />
            </div>
          </div>
        </div>

        <Button onClick={calculateCashFlow} className="w-full">
          Calculate Cash Flow
        </Button>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${result.monthly >= 0 ? "bg-green-50" : "bg-red-50"}`}>
                <h3 className={`text-lg font-semibold mb-2 ${result.monthly >= 0 ? "text-green-900" : "text-red-900"}`}>
                  Monthly Cash Flow
                </h3>
                <div className={`text-2xl font-bold ${result.monthly >= 0 ? "text-green-600" : "text-red-600"}`}>
                  ${result.monthly.toLocaleString("en-AU", { maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className={`p-4 rounded-lg ${result.annual >= 0 ? "bg-green-50" : "bg-red-50"}`}>
                <h3 className={`text-lg font-semibold mb-2 ${result.annual >= 0 ? "text-green-900" : "text-red-900"}`}>
                  Annual Cash Flow
                </h3>
                <div className={`text-2xl font-bold ${result.annual >= 0 ? "text-green-600" : "text-red-600"}`}>
                  ${result.annual.toLocaleString("en-AU", { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {result.annual >= 0
                ? "Positive cash flow - property generates income after expenses"
                : "Negative cash flow - you'll need to contribute additional funds monthly"}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
