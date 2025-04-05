"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function OrderSummary() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<"standard" | "premium">("standard")
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const handleContinue = () => {
    router.push("/payment")
  }

  const getPriceByPlan = (plan: string) => {
    if (plan === "standard") {
      return billingCycle === "monthly" ? "$1000" : "$10000"
    } else {
      return billingCycle === "monthly" ? "$1800" : "$18000"
    }
  }

  const getPeriod = () => {
    return billingCycle === "monthly" ? "Per Month" : "Per Year"
  }

  return (
    <div className="bg-gray-700/70 backdrop-blur-md p-8 rounded-lg w-full max-w-4xl mx-auto min-h-[70vh] flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Select Plan</h2>
        
        <div className="inline-flex bg-[rgb(29,55,82)] rounded-full p-1">
          <button
            className={`px-4 py-1 rounded-full transition-colors text-sm ${
              billingCycle === "monthly" ? "bg-amber-500 text-white" : "text-gray-300"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-1 rounded-full transition-colors text-sm ${
              billingCycle === "yearly" ? "bg-amber-500 text-white" : "text-gray-300"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly<span className="text-xs ml-1">(Save 50%)</span>
          </button>
        </div>
      </div>

      <div className="space-y-5 flex-grow">
        {/* Standard Plan */}
        <div
          className={`flex items-center justify-between p-6 rounded-lg cursor-pointer bg-[rgb(29,55,82)] transition-all ${
            selectedPlan === "standard" ? "border-2 border-amber-500" : ""
          }`}
          onClick={() => setSelectedPlan("standard")}
        >
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${
                selectedPlan === "standard" ? "bg-amber-500" : "bg-gray-500"
              }`}
            >
              {selectedPlan === "standard" && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </div>
            <div>
              <h3 className="font-medium text-lg">Standard</h3>
              <p className="text-sm text-gray-400 max-w-lg mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          <div className="text-right ml-4">
            <div className="font-bold text-2xl">{getPriceByPlan("standard")}</div>
            <div className="text-sm text-gray-400">{getPeriod()}</div>
          </div>
        </div>

        {/* Premium Plan */}
        <div
          className={`flex items-center justify-between p-6 rounded-lg cursor-pointer bg-[rgb(29,55,82)] relative transition-all ${
            selectedPlan === "premium" ? "border-2 border-amber-500" : ""
          }`}
          onClick={() => setSelectedPlan("premium")}
        >
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${
                selectedPlan === "premium" ? "bg-amber-500" : "bg-gray-500"
              }`}
            >
              {selectedPlan === "premium" && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </div>
            <div className="relative">
              <h3 className="font-medium text-lg">Premium</h3>
              <p className="text-sm text-gray-400 max-w-lg mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="absolute -right-24 top-0 bg-white text-xs text-gray-800 px-2 py-0.5 rounded font-medium">
                Recommended
              </div>
            </div>
          </div>
          <div className="text-right ml-4">
            <div className="font-bold text-2xl">{getPriceByPlan("premium")}</div>
            <div className="text-sm text-gray-400">{getPeriod()}</div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <Link
          href="/plans"
          className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded transition-colors"
        >
          Back to plans
        </Link>
        <button
          className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded transition-colors"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

