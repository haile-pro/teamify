"use client"

import { useState } from "react"
import Link from "next/link"

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="w-full max-w-5xl px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Flexible <span className="text-amber-500">Plans</span>
        </h1>
        <p className="text-3xl text-gray-300">Choose a plan that work best for you & your team</p>

        <div className="inline-flex bg-[rgb(29,55,82)] rounded-full p-1 mt-6">
          <button
            className={`px-6 py-2 rounded-full transition-colors ${
              billingCycle === "monthly" ? "bg-amber-500 text-white" : "text-gray-300"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-colors ${
              billingCycle === "yearly" ? "bg-amber-500 text-white" : "text-gray-300"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly<span className="text-xs ml-1">(Save 50%)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Standard Plan */}
        <div className="bg-gray-700/70 backdrop-blur-sm  rounded-lg overflow-hidden p-6">
          <h3 className="text-xl font-semibold mb-2">Standard</h3>
          <p className="text-sm text-gray-400 mb-4 h-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <div className="mb-6">
            <span className="text-4xl font-bold">${billingCycle === "monthly" ? "99" : "990"}</span>
            <span className="text-gray-400 text-sm">/Per Month</span>
          </div>

          <div className="space-y-2 mb-6">
            {Array(7)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center">
                  <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                  <span className="text-sm">Lorem ipsum</span>
                </div>
              ))}
          </div>

          <Link
            href="/order"
            className="w-full block text-center bg-[rgb(29,55,82)] hover:bg-[rgb(23,44,65)] text-white font-medium py-2 px-4 rounded-full transition-colors"
          >
            Choose Plan
          </Link>
        </div>

        {/* Premium Plan */}
        <div className="bg-gray-700/70 backdrop-blur-sm rounded-lg overflow-hidden relative p-6 -mt-6 pb-6 border-t-4 border-amber-500 shadow-lg">
          <div className="absolute top-4 right-4 bg-white text-xs text-gray-800 px-2 py-0.5 rounded font-medium">
            Recommended
          </div>
          <h3 className="text-xl font-semibold mb-2">Premium</h3>
          <p className="text-sm text-gray-400 mb-4 h-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <div className="mb-6">
            <span className="text-4xl font-bold">${billingCycle === "monthly" ? "299" : "2990"}</span>
            <span className="text-gray-400 text-sm">/Per Month</span>
          </div>

          <div className="space-y-2 mb-6">
            {Array(7)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center">
                  <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                  <span className="text-sm">Lorem ipsum</span>
                </div>
              ))}
          </div>

          <Link
            href="/order"
            className="w-full block text-center bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-full transition-colors"
          >
            Choose Plan
          </Link>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-gray-700/70 backdrop-blur-sm rounded-lg overflow-hidden p-6">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <p className="text-sm text-gray-400 mb-4 h-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-semibold">Custom Plan</h4>
          </div>

          <div className="space-y-2 mb-6">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center">
                  <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                  <span className="text-sm">Lorem ipsum</span>
                </div>
              ))}
          </div>

          <Link
            href="/contact-us"
            className="w-full block text-center bg-[rgb(29,55,82)] hover:bg-[rgb(23,44,65)] text-white font-medium py-2 px-4 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

