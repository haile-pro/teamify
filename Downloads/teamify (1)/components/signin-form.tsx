"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"

interface SignInFormProps {
  isSignUp?: boolean;
}

export default function SignInForm({ isSignUp = false }: SignInFormProps) {
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
        if (isSignUp) {
          // For sign up, we would normally call a signup function
          // For now, just redirect to the plans page
          window.location.href = "/plans";
        } else {
          await signIn(formData.email, formData.password)
        }
      } catch (error) {
        setLoginError(isSignUp ? "Error creating account. Please try again." : "Invalid email or password. Please try again.")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-xl w-full max-w-md mx-4">
      <h2 className="text-xl font-semibold text-center mb-6">{isSignUp ? "Sign Up to Teamify" : "Sign In to Teamify"}</h2>

      {loginError && (
        <div className="bg-red-500/20 border border-red-500 text-white p-3 rounded-md mb-4">{loginError}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Here"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "border-red-500" : ""}
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "border-red-500" : ""}
              disabled={isSubmitting}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded transition-colors mt-2 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? (isSignUp ? "Signing Up..." : "Signing In...") : (isSignUp ? "Sign Up" : "Sign In")}
          </button>

          <p className="text-center text-sm mt-4">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <Link href={isSignUp ? "/signin" : "/signup"} className="text-blue-400 hover:text-blue-300">
              {isSignUp ? "Sign In" : "Sign Up"}
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

