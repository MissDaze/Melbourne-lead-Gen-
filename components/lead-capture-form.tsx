"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Shield, Lock } from 'lucide-react'

interface LeadCaptureFormProps {
  isOpen: boolean
  onClose: () => void
}

export function LeadCaptureForm({ isOpen, onClose }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    melbourneArea: "",
    propertyType: "",
    investmentBudget: "",
    timeframe: "",
    financeApproved: "",
    experience: "",
    additionalInfo: "",
    newsletter: false,
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send lead data to the server API (keeps secrets on the server)
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        throw new Error("Server returned an error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your information. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your information has been received. Our team will contact you within 24 hours with exclusive property
              opportunities.
            </p>
            <Button onClick={onClose} className="w-full">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Get Exclusive Access to Melbourne's Best Commercial Properties
          </DialogTitle>
          <DialogDescription className="text-center">
            Join 2,500+ investors who get first access to high-yield properties before they're advertised
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="melbourneArea">Preferred Melbourne Area/Suburb *</Label>
            <Select value={formData.melbourneArea} onValueChange={(value) => handleInputChange("melbourneArea", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select preferred area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cbd">Melbourne CBD</SelectItem>
                <SelectItem value="south-yarra">South Yarra / Toorak</SelectItem>
                <SelectItem value="richmond">Richmond / Cremorne</SelectItem>
                <SelectItem value="collingwood">Collingwood / Fitzroy</SelectItem>
                <SelectItem value="port-melbourne">Port Melbourne / South Melbourne</SelectItem>
                <SelectItem value="docklands">Docklands</SelectItem>
                <SelectItem value="north-melbourne">North Melbourne / West Melbourne</SelectItem>
                <SelectItem value="eastern-suburbs">Eastern Suburbs (Box Hill, Camberwell, etc.)</SelectItem>
                <SelectItem value="western-suburbs">Western Suburbs (Footscray, Sunshine, etc.)</SelectItem>
                <SelectItem value="northern-suburbs">Northern Suburbs (Preston, Coburg, etc.)</SelectItem>
                <SelectItem value="southeastern">South Eastern (Dandenong, Clayton, etc.)</SelectItem>
                <SelectItem value="bayside">Bayside (Brighton, Sandringham, etc.)</SelectItem>
                <SelectItem value="outer-east">Outer East (Ringwood, Croydon, etc.)</SelectItem>
                <SelectItem value="outer-west">Outer West (Werribee, Melton, etc.)</SelectItem>
                <SelectItem value="outer-north">Outer North (Whittlesea, Craigieburn, etc.)</SelectItem>
                <SelectItem value="flexible">Flexible - Open to suggestions</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="propertyType">Preferred Property Type *</Label>
              <Select value={formData.propertyType} onValueChange={(value) => handleInputChange("propertyType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office">Office Buildings</SelectItem>
                  <SelectItem value="industrial">Industrial/Warehouse</SelectItem>
                  <SelectItem value="retail">Retail Properties</SelectItem>
                  <SelectItem value="mixed">Mixed-Use Development</SelectItem>
                  <SelectItem value="medical">Medical/Healthcare</SelectItem>
                  <SelectItem value="hospitality">Hospitality/Hotels</SelectItem>
                  <SelectItem value="all">All Types - Show me everything</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="investmentBudget">Investment Budget *</Label>
              <Select
                value={formData.investmentBudget}
                onValueChange={(value) => handleInputChange("investmentBudget", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-500k">Under $500K</SelectItem>
                  <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                  <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                  <SelectItem value="2m-3m">$2M - $3M</SelectItem>
                  <SelectItem value="3m-5m">$3M - $5M</SelectItem>
                  <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                  <SelectItem value="10m-20m">$10M - $20M</SelectItem>
                  <SelectItem value="20m+">$20M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="timeframe">Purchase Timeframe *</Label>
              <Select value={formData.timeframe} onValueChange={(value) => handleInputChange("timeframe", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Ready to purchase immediately</SelectItem>
                  <SelectItem value="1-3months">Within 1-3 months</SelectItem>
                  <SelectItem value="3-6months">Within 3-6 months</SelectItem>
                  <SelectItem value="6-12months">Within 6-12 months</SelectItem>
                  <SelectItem value="12months+">12+ months (planning ahead)</SelectItem>
                  <SelectItem value="research">Just researching options</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="financeApproved">Finance Status *</Label>
              <Select
                value={formData.financeApproved}
                onValueChange={(value) => handleInputChange("financeApproved", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select finance status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pre-approved">Pre-approved with bank</SelectItem>
                  <SelectItem value="conditional">Conditional approval</SelectItem>
                  <SelectItem value="applying">Currently applying</SelectItem>
                  <SelectItem value="need-help">Need help with finance</SelectItem>
                  <SelectItem value="cash">Cash purchase</SelectItem>
                  <SelectItem value="not-started">Haven't started finance process</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Investment Experience *</Label>
            <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first-time">First-time commercial investor</SelectItem>
                <SelectItem value="residential-only">Residential property experience only</SelectItem>
                <SelectItem value="some-commercial">Some commercial experience (1-2 properties)</SelectItem>
                <SelectItem value="experienced">Experienced commercial investor (3+ properties)</SelectItem>
                <SelectItem value="professional">Professional investor/Developer</SelectItem>
                <SelectItem value="fund-manager">Fund manager/Institutional</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Tell us about your specific requirements, investment goals, or any questions you have..."
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              rows={4}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
              />
              <Label htmlFor="newsletter" className="text-sm">
                Yes, I want to receive market insights and investment opportunities via email
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="privacy"
                required
                checked={formData.privacy}
                onCheckedChange={(checked) => handleInputChange("privacy", checked as boolean)}
              />
              <Label htmlFor="privacy" className="text-sm">
                I agree to the privacy policy and terms of service *
              </Label>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Lock className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">Your Information is Secure</span>
            </div>
            <p className="text-xs text-gray-600">
              We use bank-level encryption to protect your data. Your information will never be shared with third
              parties and you can unsubscribe at any time.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
            disabled={isSubmitting || !formData.privacy}
          >
            {isSubmitting ? "Submitting..." : "Get Exclusive Property Access"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
