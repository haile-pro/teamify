"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NewSignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

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

    if (!formData.name.trim()) newErrors.name = "Name is required"
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Submit the form data
      console.log("Form submitted:", formData)
      router.push("/plans")
    }
  }

  return (
    <div className="w-full max-w-md rounded-md bg-blue-50/50 p-6">
      <h1 className="mb-6 text-center text-xl font-semibold text-black">Complete Your Signup</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-black">
            Enter Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First & Last Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-md border text-black ${
              errors.name ? "border-red-500" : "border-gray-300"
            } bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
            required
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Enter Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Here"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-md border text-black ${
              errors.email ? "border-red-500" : "border-gray-300"
            } bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
            required
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-black">
            Create Password *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Type Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full rounded-md border text-black ${
              errors.password ? "border-red-500" : "border-gray-300"
            } bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
            required
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">
            Confirm Password *
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full rounded-md border text-black ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
            required
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-[rgb(29,55,82)] hover:bg-blue-900 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Continue
        </button>

        <p className="text-center text-xs text-black">
          By proceeding you are agreeing to the{" "}
          <Link href="/terms" className="text-blue-600 underline">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  )
} 