"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phoneNumber: "",
    address: "",
    email: "",
    bankName: "",
    accountName: "",
    accountNumber: "",
    city: "",
    state: "",
    gender: "",
    age: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        localStorage.setItem("userData", JSON.stringify(formData))
        setSubmitStatus({
          type: "success",
          message: "Registration successful! Redirecting to activation page...",
        })
        setTimeout(() => {
          router.push("/activation")
        }, 1500)
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit form. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <Card className="border-2 shadow-lg">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
              Join Global Team Builders
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Fill in your details to get started on your journey to wealth and success
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-semibold">
                    Name <span className="text-[#7F1D1D]">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username" className="text-foreground font-semibold">
                    Username <span className="text-[#7F1D1D]">*</span>
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={(e) => handleChange("username", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-foreground font-semibold">
                    Phone Number <span className="text-[#7F1D1D]">*</span>
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange("phoneNumber", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">
                    Email Address <span className="text-[#7F1D1D]">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address" className="text-foreground font-semibold">
                    Address <span className="text-[#7F1D1D]">*</span>
                  </Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Enter your full address"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-foreground font-semibold">
                    City <span className="text-[#7F1D1D]">*</span>
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="text-foreground font-semibold">
                    State <span className="text-[#7F1D1D]">*</span>
                  </Label>
                  <Input
                    id="state"
                    type="text"
                    placeholder="Enter your state"
                    value={formData.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-foreground font-semibold">
                    Gender <span className="text-[#7F1D1D]">*</span>
                  </Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => handleChange("gender", value)}
                    required
                  >
                    <SelectTrigger id="gender" className="h-11 w-full">
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age" className="text-foreground font-semibold">
                    Age <span className="text-[#7F1D1D]">*</span>
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                    required
                    min="18"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bankName" className="text-foreground font-semibold">
                    Bank Name <span className="text-[#7F1D1D]">*</span>
                  </Label>
                  <Input
                    id="bankName"
                    type="text"
                    placeholder="Enter your bank name"
                    value={formData.bankName}
                    onChange={(e) => handleChange("bankName", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountName" className="text-foreground font-semibold">
                    Account Name <span className="text-[#7F1D1D]">*</span>
                  </Label>
                  <Input
                    id="accountName"
                    type="text"
                    placeholder="Enter account holder name"
                    value={formData.accountName}
                    onChange={(e) => handleChange("accountName", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="accountNumber" className="text-foreground font-semibold">
                    Account Number <span className="text-[#7F1D1D]">*</span>
                  </Label>
                  <Input
                    id="accountNumber"
                    type="text"
                    placeholder="Enter your account number"
                    value={formData.accountNumber}
                    onChange={(e) => handleChange("accountNumber", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#14532D] hover:bg-[#047857] disabled:opacity-50 disabled:cursor-not-allowed text-white text-lg py-6 rounded-full font-semibold shadow-lg"
                >
                  {isSubmitting ? "Submitting..." : "Join Now"}
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

