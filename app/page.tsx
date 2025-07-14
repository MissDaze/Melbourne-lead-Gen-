"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  TrendingUp,
  Shield,
  MapPin,
  Building2,
  Users,
  Star,
  CheckCircle,
  Clock,
  Award,
  Target,
  BarChart3,
} from "lucide-react"
import { ROICalculator } from "@/components/roi-calculator"
import { RentalYieldCalculator } from "@/components/rental-yield-calculator"
import { RepaymentCalculator } from "@/components/repayment-calculator"
import { CashFlowCalculator } from "@/components/cash-flow-calculator"
import { LeadCaptureForm } from "@/components/lead-capture-form"

const dotsPattern =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"

export default function MelbournePropertyInvestment() {
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [activeCalculator, setActiveCalculator] = useState("roi")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Building2 className="h-10 w-10 text-blue-600" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Melbourne Property Pro
                </span>
                <p className="text-sm text-gray-600 font-medium">Commercial Investment Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: dotsPattern }}></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Unlock Melbourne's
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Best Commercial Properties
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Get exclusive access to high-yield commercial properties before they hit the market. Join thousands of
              successful investors who trust our Melbourne expertise.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Award className="h-6 w-6 text-orange-400" />
                <span className="font-semibold">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <BarChart3 className="h-6 w-6 text-orange-400" />
                <span className="font-semibold">$2.5B+ Transacted</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Target className="h-6 w-6 text-orange-400" />
                <span className="font-semibold">Melbourne Specialists</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
              onClick={() => setShowLeadForm(true)}
            >
              Get Exclusive Property Access Now
            </Button>
            <p className="text-sm mt-6 opacity-75">Join 2,500+ investors • No spam • Unsubscribe anytime</p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted & Secure</h3>
              <p className="text-gray-600">Your data is protected with bank-level security</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2,500+ Investors</h3>
              <p className="text-gray-600">Growing community of successful investors</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">18.5% Avg ROI</h3>
              <p className="text-gray-600">Outstanding portfolio performance</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Melbourne Focused</h3>
              <p className="text-gray-600">Deep local market expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Calculators */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-semibold">
              Professional Tools
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Investment Calculators</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Make informed decisions with our suite of professional commercial property investment tools
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
              <Button
                variant={activeCalculator === "roi" ? "default" : "ghost"}
                onClick={() => setActiveCalculator("roi")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCalculator === "roi"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "hover:bg-gray-50"
                }`}
              >
                ROI Calculator
              </Button>
              <Button
                variant={activeCalculator === "yield" ? "default" : "ghost"}
                onClick={() => setActiveCalculator("yield")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCalculator === "yield"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "hover:bg-gray-50"
                }`}
              >
                Rental Yield
              </Button>
              <Button
                variant={activeCalculator === "repayment" ? "default" : "ghost"}
                onClick={() => setActiveCalculator("repayment")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCalculator === "repayment"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "hover:bg-gray-50"
                }`}
              >
                Loan Repayment
              </Button>
              <Button
                variant={activeCalculator === "cashflow" ? "default" : "ghost"}
                onClick={() => setActiveCalculator("cashflow")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCalculator === "cashflow"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "hover:bg-gray-50"
                }`}
              >
                Cash Flow
              </Button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            {activeCalculator === "roi" && <ROICalculator />}
            {activeCalculator === "yield" && <RentalYieldCalculator />}
            {activeCalculator === "repayment" && <RepaymentCalculator />}
            {activeCalculator === "cashflow" && <CashFlowCalculator />}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-sm font-semibold">
              Expert Knowledge
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Market Intelligence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Master commercial property investment with our comprehensive guides and expert strategies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30 group">
              <CardHeader className="pb-4">
                <Badge className="w-fit mb-4 bg-gradient-to-r from-red-500 to-pink-500 text-white">
                  Essential Guide
                </Badge>
                <CardTitle className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                  10 Red Flags Every Commercial Property Investor Must Know
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>12 min read</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 font-medium leading-relaxed">
                  Avoid costly mistakes with these critical warning signs that separate successful investors from those
                  who lose money.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border-l-4 border-red-400">
                    <h4 className="font-bold text-gray-900 mb-2">1. Declining Tenant Quality and High Turnover</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      When quality tenants consistently leave or you notice a pattern of short-term leases, it's often a
                      sign of underlying property issues. Look for properties where tenants have been in place for 3+
                      years and have strong credit ratings.
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-l-4 border-orange-400">
                    <h4 className="font-bold text-gray-900 mb-2">2. Deferred Maintenance and Capital Expenditure</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Properties requiring immediate major repairs are cash traps. Always conduct thorough building
                      inspections and request maintenance records for the past 5 years. Budget 1-2% of property value
                      annually for maintenance.
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-yellow-400">
                    <h4 className="font-bold text-gray-900 mb-2">3. Unfavorable Lease Terms</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Excessive tenant incentives, below-market rents, or unusual lease clauses can indicate
                      desperation. Be wary of properties offering 6+ months free rent or excessive fit-out
                      contributions.
                    </p>
                  </div>

                  <h4 className="font-semibold text-gray-900">4. Poor Location Fundamentals</h4>
                  <p className="text-sm text-gray-700">
                    Location drives everything in commercial property. Avoid areas with declining population, limited
                    transport access, or single-industry dependence. Look for locations with diverse employment, good
                    transport links, and planned infrastructure improvements.
                  </p>

                  <h4 className="font-semibold text-gray-900">5. Oversupply in the Local Market</h4>
                  <p className="text-sm text-gray-700">
                    Research local vacancy rates and upcoming developments. Markets with 15%+ vacancy or significant new
                    supply coming online can pressure rents and values. Use REIV data and council development
                    applications to assess supply pipelines.
                  </p>

                  <h4 className="font-semibold text-gray-900">6. Unrealistic Vendor Expectations</h4>
                  <p className="text-sm text-gray-700">
                    Vendors who refuse reasonable offers or have unrealistic price expectations often indicate problem
                    properties. If a property has been on the market for 6+ months without genuine interest, investigate
                    why. Sometimes the best deal is walking away.
                  </p>

                  <h4 className="font-semibold text-gray-900">7. Complex Ownership Structures</h4>
                  <p className="text-sm text-gray-700">
                    Strata titles, community titles, or shared facilities can create ongoing disputes and unexpected
                    costs. Understand body corporate fees, special levies, and decision-making processes. Simple
                    freehold titles are generally preferable for commercial investments.
                  </p>

                  <h4 className="font-semibold text-gray-900">8. Environmental and Compliance Issues</h4>
                  <p className="text-sm text-gray-700">
                    Environmental contamination, asbestos, or non-compliant building modifications can create massive
                    liabilities. Always conduct environmental assessments and building compliance audits. These issues
                    can make properties unsaleable or require expensive remediation.
                  </p>

                  <h4 className="font-semibold text-gray-900">9. Inadequate Parking and Access</h4>
                  <p className="text-sm text-gray-700">
                    Insufficient parking ratios or poor vehicle access can limit tenant appeal and future value.
                    Melbourne's planning requirements vary by location, but generally expect 1 space per 40-50sqm of
                    office space. Industrial properties need adequate truck access and turning circles.
                  </p>

                  <h4 className="font-semibold text-gray-900">10. Vendor Finance or Unusual Settlement Terms</h4>
                  <p className="text-sm text-gray-700">
                    While vendor finance can be legitimate, it often indicates properties that banks won't finance due
                    to underlying issues. Unusual settlement terms, extended settlements, or pressure to exchange
                    quickly should trigger additional due diligence.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Key Takeaway
                  </h4>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Due diligence is your best protection. The cost of proper investigation is always less than the cost
                    of a bad investment.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-green-50/30 group">
              <CardHeader className="pb-4">
                <Badge className="w-fit mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  Complete Checklist
                </Badge>
                <CardTitle className="text-2xl font-bold group-hover:text-green-600 transition-colors">
                  The Only Commercial Property Due Diligence Checklist You'll Ever Need
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>15 min read</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 font-medium leading-relaxed">
                  This comprehensive 47-point checklist has been refined over 15 years of commercial property
                  transactions to ensure nothing is missed.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-400">
                    <h4 className="font-bold text-gray-900 mb-3">Financial Analysis (Points 1-12)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Verify actual rental income vs. advertised income
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Review 3 years of financial statements and rent rolls
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Calculate net yield after all expenses
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Analyze tenant payment history and arrears
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Review outgoings recovery rates
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Assess capital expenditure requirements
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Compare market rents for similar properties
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Evaluate rental growth potential
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Calculate cash-on-cash returns
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Assess financing options and serviceability
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Review insurance costs and coverage
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Analyze tax implications and depreciation benefits
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border-l-4 border-purple-400">
                    <h4 className="font-bold text-gray-900 mb-3">Legal and Compliance (Points 13-24)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Verify clear title and ownership
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Review all lease agreements and terms
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Check zoning compliance and permitted uses
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Assess planning permit requirements
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Review building permits and approvals
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Check for any encumbrances or easements
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Verify council rates and land tax obligations
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Review body corporate documents (if applicable)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Check for any legal disputes or claims
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Assess compliance with disability access requirements
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Review fire safety and emergency procedures
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Verify occupational health and safety compliance
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-400">
                    <h4 className="font-bold text-gray-900 mb-3">Physical Inspection (Points 25-36)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Conduct comprehensive building inspection
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Assess structural integrity and foundation
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Evaluate roof condition and waterproofing
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Check electrical systems and safety switches
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Assess plumbing and water systems
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Review HVAC systems and efficiency
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Check for asbestos and hazardous materials
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Assess parking adequacy and condition
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Evaluate security systems and access control
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Check lift maintenance and compliance
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Assess energy efficiency and ratings
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Review maintenance schedules and costs
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-yellow-400">
                    <h4 className="font-bold text-gray-900 mb-3">Market and Location Analysis (Points 37-47)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Analyze local market vacancy rates
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Research comparable sales and leasing
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Assess transport links and accessibility
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Evaluate local amenities and services
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Research planned infrastructure developments
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Assess demographic trends and employment
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Review competition and market positioning
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Evaluate future development potential
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Assess environmental factors and risks
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Review local council development plans
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Analyze long-term area growth prospects
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Professional Tip
                  </h4>
                  <p className="text-sm text-green-800 leading-relaxed">
                    Don't try to complete this checklist alone. The cost of professional advice is minimal compared to
                    the risks of missing critical issues.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-orange-50/30 group">
              <CardHeader className="pb-4">
                <Badge className="w-fit mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  Investment Strategy
                </Badge>
                <CardTitle className="text-2xl font-bold group-hover:text-orange-600 transition-colors">
                  What Makes a Viable Commercial Property Investment: The 8 Essential Criteria
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>11 min read</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 font-medium leading-relaxed">
                  Not all commercial properties are created equal. These 8 criteria separate profitable investments from
                  costly mistakes.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">1. Strong and Sustainable Cash Flow</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Viable commercial properties generate positive cash flow from day one. Look for properties with
                      net yields of 6-8% minimum, depending on location and property type. Cash flow should cover all
                      expenses including loan repayments, rates, insurance, maintenance, and management fees, while
                      still providing a buffer for unexpected costs.
                    </p>
                    <p className="text-sm text-gray-700">
                      Calculate your cash-on-cash return (annual cash flow divided by initial investment) and aim for
                      12-15% minimum. Properties requiring ongoing capital contributions are generally not viable unless
                      you have a clear value-add strategy with defined exit timelines.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">2. Quality Tenants with Strong Covenants</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Your tenants are your business partners. Viable investments feature tenants with strong credit
                      ratings, established business operations, and long-term lease commitments. Government tenants,
                      ASX-listed companies, and established franchises typically offer the best security.
                    </p>
                    <p className="text-sm text-gray-700">
                      Assess tenant financial statements, business longevity, and industry stability. A property leased
                      to a struggling retailer at above-market rent is less viable than one leased to a stable tenant at
                      market rates. Diversification across multiple tenants can reduce risk but requires higher
                      management input.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">3. Prime or Improving Location</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Location fundamentals drive long-term viability. Look for areas with growing populations, diverse
                      employment bases, excellent transport links, and planned infrastructure improvements. Melbourne's
                      growth corridors often offer better value than established premium locations.
                    </p>
                    <p className="text-sm text-gray-700">
                      Consider proximity to major transport hubs, arterial roads, and complementary businesses.
                      Industrial properties need good freight access, while office buildings require public transport
                      connectivity. Retail properties depend on foot traffic and visibility.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">4. Appropriate Property Type for Market Conditions</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Different property types perform better in different market cycles. Industrial properties
                      currently benefit from e-commerce growth and supply chain reshoring. Office properties in premium
                      locations with modern amenities outperform secondary stock. Retail requires careful tenant
                      selection and format consideration.
                    </p>
                    <p className="text-sm text-gray-700">
                      Understand the drivers of demand for your chosen property type. Industrial properties benefit from
                      population growth and online shopping. Office demand depends on employment growth and
                      return-to-office trends. Retail success requires understanding changing consumer behaviors.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">5. Favorable Lease Structure and Terms</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Viable investments feature lease terms that protect and enhance returns. Look for leases with
                      regular rent reviews (annually or every 2-3 years), outgoings recovery, and reasonable tenant
                      responsibilities for maintenance and repairs.
                    </p>
                    <p className="text-sm text-gray-700">
                      Avoid leases with excessive tenant incentives, below-market rents, or unusual clauses that favor
                      tenants. Net leases where tenants pay all outgoings are preferable to gross leases where you bear
                      these costs. Ensure lease terms align with your investment strategy and holding period.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">6. Sound Physical Condition and Functionality</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      The building must be fit for purpose with minimal immediate capital expenditure requirements.
                      Modern buildings with good energy ratings, adequate parking, and flexible layouts typically
                      attract better tenants and achieve higher rents.
                    </p>
                    <p className="text-sm text-gray-700">
                      Consider the building's remaining economic life and obsolescence risk. Properties requiring major
                      upgrades within 5 years may not be viable unless purchase prices reflect these costs. Factor in
                      ongoing maintenance requirements and potential for value-adding improvements.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">7. Appropriate Purchase Price and Value</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Viable investments are purchased at or below fair market value with room for capital growth. Use
                      multiple valuation methods including income capitalization, comparable sales, and replacement cost
                      approaches to assess value.
                    </p>
                    <p className="text-sm text-gray-700">
                      Don't overpay for potential. Base your purchase price on current income and market conditions, not
                      optimistic projections. Leave room for unexpected costs and market fluctuations. The best returns
                      often come from buying well rather than managing well.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">8. Clear Investment Strategy and Exit Plan</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Every viable investment needs a clear strategy: buy-and-hold for income, value-add through
                      improvements, or development potential. Your strategy should align with your risk tolerance,
                      available capital, and investment timeline.
                    </p>
                    <p className="text-sm text-gray-700">
                      Consider your exit options from day one. Properties with broad appeal to multiple investor types
                      typically offer better liquidity. Specialized properties may offer higher returns but limited exit
                      options. Ensure your investment strategy is realistic and achievable.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-orange-900 mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Investment Reality Check
                  </h4>
                  <p className="text-sm text-orange-800 leading-relaxed">
                    If a property doesn't meet at least 6 of these 8 criteria, seriously reconsider the investment. It's
                    better to wait for the right opportunity.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-red-50/30 group">
              <CardHeader className="pb-4">
                <Badge className="w-fit mb-4 bg-gradient-to-r from-red-500 to-pink-500 text-white">
                  Avoid These Mistakes
                </Badge>
                <CardTitle className="text-2xl font-bold group-hover:text-red-600 transition-colors">
                  Don't Make These 15 Common Commercial Property Investment Mistakes
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>13 min read</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 font-medium leading-relaxed">
                  Learn from others' expensive mistakes. These 15 errors have cost investors millions and can be easily
                  avoided with proper knowledge.
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">1. Inadequate Due Diligence</h4>
                    <p className="text-sm text-gray-700">
                      Rushing into purchases without thorough investigation is the most expensive mistake. Always
                      conduct comprehensive building inspections, financial analysis, and legal reviews. Budget 2-3% of
                      purchase price for due diligence costs. The money spent on professional advice is insurance
                      against much larger losses.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">2. Emotional Decision Making</h4>
                    <p className="text-sm text-gray-700">
                      Commercial property is a business decision, not an emotional one. Don't fall in love with
                      buildings or get caught up in bidding wars. Stick to your predetermined investment criteria and
                      walk away if numbers don't stack up. The best deal is often the one you don't do.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">3. Ignoring Location Fundamentals</h4>
                    <p className="text-sm text-gray-700">
                      Buying in declining areas or locations with poor fundamentals rarely works out. Research
                      population trends, employment statistics, transport links, and planned developments. A great
                      building in a poor location will underperform a average building in a great location every time.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">4. Overestimating Rental Growth</h4>
                    <p className="text-sm text-gray-700">
                      Basing investment decisions on optimistic rental projections is dangerous. Use conservative growth
                      assumptions based on historical data and market conditions. It's better to be pleasantly surprised
                      by higher-than-expected returns than disappointed by unrealistic projections.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">5. Insufficient Cash Reserves</h4>
                    <p className="text-sm text-gray-700">
                      Commercial properties require ongoing capital for maintenance, improvements, and vacancy periods.
                      Maintain cash reserves of 6-12 months of expenses plus a capital expenditure buffer. Running out
                      of cash during ownership forces poor decisions and potential distressed sales.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">6. Poor Tenant Selection and Management</h4>
                    <p className="text-sm text-gray-700">
                      Accepting any tenant to fill vacancy is short-sighted. Thoroughly assess tenant creditworthiness,
                      business viability, and lease terms. A good tenant at slightly below-market rent is better than a
                      risky tenant at premium rates. Invest in professional property management if you lack experience.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">7. Neglecting Building Maintenance</h4>
                    <p className="text-sm text-gray-700">
                      Deferring maintenance to save money is false economy. Well-maintained buildings attract better
                      tenants, achieve higher rents, and maintain value. Budget 1-2% of property value annually for
                      maintenance and stick to it. Preventive maintenance is always cheaper than emergency repairs.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">8. Overleveraging and Poor Finance Structure</h4>
                    <p className="text-sm text-gray-700">
                      Borrowing too much or using inappropriate finance structures increases risk unnecessarily.
                      Maintain loan-to-value ratios below 70% and ensure loan terms match your investment strategy.
                      Interest-only loans can be useful but ensure you have repayment plans. Diversify funding sources
                      where possible.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">9. Ignoring Market Cycles</h4>
                    <p className="text-sm text-gray-700">
                      Property markets are cyclical. Buying at market peaks or selling at troughs destroys returns.
                      Understand where your local market sits in the cycle and adjust strategies accordingly. The best
                      opportunities often arise during market downturns when others are selling.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">10. Lack of Diversification</h4>
                    <p className="text-sm text-gray-700">
                      Concentrating all investments in one property type, location, or tenant creates unnecessary risk.
                      Diversify across property types, locations, and tenant industries where possible. This reduces
                      portfolio volatility and provides more stable returns over time.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">11. Poor Tax Planning and Structure</h4>
                    <p className="text-sm text-gray-700">
                      Failing to optimize tax structures costs money unnecessarily. Understand depreciation benefits,
                      capital gains implications, and appropriate ownership structures. Consult tax professionals before
                      purchasing and review structures regularly as circumstances change.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">12. Inadequate Insurance Coverage</h4>
                    <p className="text-sm text-gray-700">
                      Underinsuring properties or having inappropriate coverage can be catastrophic. Ensure adequate
                      building insurance, public liability, and loss of rent coverage. Review policies annually and
                      understand exclusions. Consider additional coverage for specific risks like cyber liability or
                      environmental damage.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">13. Ignoring Environmental and Compliance Issues</h4>
                    <p className="text-sm text-gray-700">
                      Environmental contamination, building compliance issues, or safety violations can create massive
                      liabilities. Always conduct environmental assessments and building compliance audits. Stay current
                      with changing regulations and ensure ongoing compliance. Prevention is always cheaper than
                      remediation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">14. Poor Exit Planning</h4>
                    <p className="text-sm text-gray-700">
                      Not having clear exit strategies limits options and can force suboptimal decisions. Consider exit
                      options from purchase and review regularly. Market conditions, personal circumstances, and
                      investment performance all affect optimal exit timing. Plan for multiple scenarios.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">15. Trying to Do Everything Yourself</h4>
                    <p className="text-sm text-gray-700">
                      Commercial property requires specialized knowledge across multiple disciplines. Trying to save
                      money by avoiding professional advice often costs more in the long run. Build a team of qualified
                      professionals including lawyers, accountants, property managers, and building consultants. Their
                      expertise is invaluable.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
                  <h4 className="font-bold text-red-900 mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Final Warning
                  </h4>
                  <p className="text-sm text-red-800 leading-relaxed">
                    Commercial property investment is unforgiving of mistakes. The cost of making these errors far
                    exceeds the cost of avoiding them.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 text-sm font-semibold">
              Success Stories
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Investors Say</h2>
            <p className="text-xl text-gray-600">Real results from real investors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  "Melbourne Property Pro helped me acquire a $2.8M industrial property in Dandenong. The ROI has
                  exceeded expectations at 22% in the first year."
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">JC</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">James Chen</p>
                    <p className="text-gray-600">Property Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  "Their market insights are invaluable. I've built a $15M commercial portfolio with their guidance over
                  the past 3 years."
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">SM</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Sarah Mitchell</p>
                    <p className="text-gray-600">Investment Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  "Professional, knowledgeable, and results-driven. They found me an off-market office building that's
                  now my best performing asset."
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">RP</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Robert Patel</p>
                    <p className="text-gray-600">Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: dotsPattern }}></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to Access Melbourne's Best Commercial Properties?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Join our exclusive network and get first access to high-yield commercial properties before they're
              advertised to the public.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
              onClick={() => setShowLeadForm(true)}
            >
              Get Exclusive Property Access Now
            </Button>
            <p className="text-sm mt-6 opacity-75">No spam • Unsubscribe anytime • Your information is secure</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Building2 className="h-8 w-8 text-blue-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Melbourne Property Pro
                  </span>
                  <p className="text-sm text-gray-400">Commercial Investment Intelligence</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Connecting serious commercial property investors with Melbourne's best opportunities through expert
                market intelligence and exclusive access.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Property Focus Areas</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Office Buildings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Industrial Properties</span>
                  </div>
                </div>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Retail Spaces</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Mixed-Use Developments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-12 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Melbourne Property Pro. All rights reserved.</p>
            <p className="text-sm mt-2 opacity-75">
              Professional lead generation service connecting investors with opportunities
            </p>
          </div>
        </div>
      </footer>

      {/* Lead Capture Form Modal */}
      <LeadCaptureForm isOpen={showLeadForm} onClose={() => setShowLeadForm(false)} />
    </div>
  )
}
