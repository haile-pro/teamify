"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"

export default function LoginForm() {
  const { signIn } = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loginError, setLoginError] = useState("")

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

    if (loginError) {
      setLoginError("")
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)
      try {
        await signIn(formData.email, formData.password)
      } catch (error) {
        setLoginError("Invalid email or password. Please try again.")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <div className="w-full max-w-md rounded-md bg-blue-50/50 p-6 mx-4">
      <h2 className="text-xl font-semibold text-center mb-6 text-black">Welcome Back</h2>

      {loginError && (
        <div className="bg-red-500/20 border border-red-500 text-black p-3 rounded-md mb-4">{loginError}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
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
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Enter Your Password *
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
              disabled={isSubmitting}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-black hover:text-gray-900">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[rgb(29,55,82)] hover:bg-blue-900 text-white font-medium py-2 px-4 rounded transition-colors mt-2 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Continue"}
          </button>

          <p className="text-center text-sm mt-4 text-black">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:text-blue-800 underline">
              Sign Up
            </Link>
          </p>

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
        </div>
      </form>
    </div>
  )
}

