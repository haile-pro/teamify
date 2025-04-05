"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { CreditCard, Lock, CheckCircle } from "lucide-react"
import { useAuth } from "@/context/auth-context"

export default function PaymentForm() {
  const router = useRouter()
  const { completePayment } = useAuth()
  const [step, setStep] = useState<"payment" | "processing" | "success">("payment")
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    zipCode: "",
    country: "US",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    // Format card number with spaces
    if (name === "cardNumber") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
      setFormData((prev) => ({ ...prev, [name]: formatted }))
    }
    // Format expiry date with slash
    else if (name === "expiryDate") {
      const cleaned = value.replace(/\D/g, "")
      let formatted = cleaned
      if (cleaned.length > 2) {
        formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`
      }
      setFormData((prev) => ({ ...prev, [name]: formatted }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.cardName.trim()) newErrors.cardName = "Name is required"
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required"
    } else if (formData.cardNumber.replace(/\s/g, "").length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits"
    }

    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required"
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Invalid format (MM/YY)"
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = "CVV is required"
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits"
    }

    if (!formData.billingAddress.trim()) newErrors.billingAddress = "Billing address is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setStep("processing")

      // Simulate processing delay
      setTimeout(() => {
        setStep("success")
        completePayment() // Update user state to indicate payment is complete
      }, 2000)
    }
  }

  if (step === "processing") {
    return (
      <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg shadow-xl w-full max-w-md mx-4 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          <h2 className="text-xl font-semibold">Processing Your Payment</h2>
          <p className="text-gray-400">Please wait while we process your payment...</p>
        </div>
      </div>
    )
  }

  if (step === "success") {
    return (
      <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg shadow-xl w-full max-w-md mx-4 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
          <h2 className="text-xl font-semibold">Payment Successful!</h2>
          <p className="text-gray-400 mb-4">Your payment has been processed successfully.</p>
          <div className="bg-gray-800 p-4 rounded-lg w-full mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Plan:</span>
              <span className="font-medium">Premium</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Amount:</span>
              <span className="font-medium">$1800.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Transaction ID:</span>
              <span className="font-medium">TXN-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
            </div>
          </div>
          <Link
            href="/dashboard"
            className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded transition-colors w-full"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-700/70 backdrop-blur-md p-8 rounded-lg  w-full max-w-2xl mx-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Payment Details</h2>
        <div className="flex items-center text-gray-400">
          <Lock className="w-4 h-4 mr-1" />
          <span className="text-sm">Secure Payment</span>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-400">Plan:</span>
          <span className="font-medium">Premium</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-400">Billing:</span>
          <span className="font-medium">Monthly</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Total:</span>
          <span className="font-medium text-xl">$1800.00</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Card Information</h3>
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-gray-700 rounded"></div>
              <div className="w-8 h-5 bg-gray-700 rounded"></div>
              <div className="w-8 h-5 bg-gray-700 rounded"></div>
            </div>
          </div>

          <div>
            <label htmlFor="cardName">Name on Card</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              placeholder="John Doe"
              value={formData.cardName}
              onChange={handleChange}
              className={`${errors.cardName ? "border-red-500" : ""} text-black bg-white`}
            />
            {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
          </div>

          <div>
            <label htmlFor="cardNumber">Card Number</label>
            <div className="relative">
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
                maxLength={19}
                className={`${errors.cardNumber ? "border-red-500" : ""} pl-10 text-black bg-white`}
              />
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
            {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
                maxLength={5}
                className={`${errors.expiryDate ? "border-red-500" : ""} text-black bg-white`}
              />
              {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                maxLength={4}
                className={`${errors.cvv ? "border-red-500" : ""} text-black bg-white`}
              />
              {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mt-6 mb-4">Billing Address</h3>
            <div>
              <label htmlFor="billingAddress">Address</label>
              <input
                type="text"
                id="billingAddress"
                name="billingAddress"
                placeholder="123 Main St"
                value={formData.billingAddress}
                onChange={handleChange}
                className={`${errors.billingAddress ? "border-red-500" : ""} text-black bg-white`}
              />
              {errors.billingAddress && <p className="text-red-500 text-xs mt-1">{errors.billingAddress}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={handleChange}
                  className={`${errors.city ? "border-red-500" : ""} text-black bg-white`}
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>
              <div>
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="10001"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={`${errors.zipCode ? "border-red-500" : ""} text-black bg-white`}
                />
                {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="appearance-none text-black bg-white"
            >
              <option value="US" className="text-black">United States</option>
              <option value="CA" className="text-black">Canada</option>
              <option value="UK" className="text-black">United Kingdom</option>
              <option value="AU" className="text-black">Australia</option>
              <option value="DE" className="text-black">Germany</option>
              <option value="FR" className="text-black">France</option>
              <option value="ET" className="text-black">Ethiopia</option>
            </select>
          </div>

          <div className="mt-6 flex justify-between">
            <Link
              href="/order"
              className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Back
            </Link>
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded transition-colors"
            >
              Pay Now
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

