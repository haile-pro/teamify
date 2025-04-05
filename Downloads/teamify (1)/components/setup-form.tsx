"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function SetupForm() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formType, setFormType] = useState<"setup" | "signup">("setup")
  const [logoImage, setLogoImage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    companySize: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const handleLogoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setLogoImage(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
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

    if (formType === "setup") {
      if (!formData.companyName.trim()) newErrors.companyName = "Company name is required"
      if (!formData.companyWebsite.trim()) newErrors.companyWebsite = "Company website is required"
      if (!formData.companySize) newErrors.companySize = "Company size is required"
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
      if (formType === "setup") {
        setFormType("signup")
      } else {
        // Submit the form data
        console.log("Form submitted:", formData)
        router.push("/plans")
      }
    }
  }

  const handleSetup = () => {
    router.push("/setup-form")
  }

  return (
    <div className="w-full max-w-md rounded-md bg-blue-50/50 p-6 mx-4">
      <h2 className="text-xl font-semibold text-center mb-6 text-black">
        {formType === "setup" ? "Set Up Your Office" : "Complete Your Signup"}
      </h2>

      {formType === "setup" && (
        <div className="flex justify-center mb-6">
          <div
            className="w-24 h-24 rounded-full bg-blue-900 flex items-center justify-center text-center overflow-hidden cursor-pointer relative"
            onClick={handleLogoClick}
          >
            {logoImage ? (
              <Image src={logoImage || "/placeholder.svg"} alt="Company Logo" fill className="object-cover" />
            ) : (
              <div>
                <div className="text-sm text-white">Logo here</div>
                <div className="mt-1 w-3 h-3 bg-amber-500 rounded-full mx-auto"></div>
              </div>
            )}
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleLogoChange} />
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="text-white">Enter Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="First & Last Name"
              value={formData.name}
              onChange={handleChange}
              className={`${errors.name ? "border-red-500" : ""} text-black bg-white`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-white">Enter Your Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Here"
              value={formData.email}
              onChange={handleChange}
              className={`${errors.email ? "border-red-500" : ""} text-black bg-white`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {formType === "setup" && (
            <>
              <div>
                <label htmlFor="companyName" className="text-white">Your Company Name *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Name Here"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`${errors.companyName ? "border-red-500" : ""} text-black bg-white`}
                />
                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label htmlFor="companyWebsite" className="text-white">Your Company Website *</label>
                <input
                  type="text"
                  id="companyWebsite"
                  name="companyWebsite"
                  placeholder="Website Here"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  className={`${errors.companyWebsite ? "border-red-500" : ""} text-black bg-white`}
                />
                {errors.companyWebsite && <p className="text-red-500 text-xs mt-1">{errors.companyWebsite}</p>}
              </div>

              <div>
                <label htmlFor="companySize">Company Size *</label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className={`${errors.companySize ? "border-red-500" : ""} appearance-none text-black bg-white`}
                >
                  <option value="" disabled className="text-black">
                    Choose Your Company Size
                  </option>
                  <option value="1-10" className="text-black">1-10 employees</option>
                  <option value="11-50" className="text-black">11-50 employees</option>
                  <option value="51-200" className="text-black">51-200 employees</option>
                  <option value="201-500" className="text-black">201-500 employees</option>
                  <option value="501+" className="text-black">501+ employees</option>
                </select>
                {errors.companySize && <p className="text-red-500 text-xs mt-1">{errors.companySize}</p>}
              </div>
            </>
          )}

          <div>
            <label htmlFor="password" className="text-white">Create Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Type Password"
              value={formData.password}
              onChange={handleChange}
              className={`${errors.password ? "border-red-500" : ""} text-black bg-white`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="text-white">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`${errors.confirmPassword ? "border-red-500" : ""} text-black bg-white`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[rgb(29,55,82)] hover:bg-blue-800 text-white font-medium py-2 px-4 rounded transition-colors mt-2"
          >
            Continue
          </button>

        

          {formType === "signup" && (
            <p className="text-xs text-center text-black mt-2">
              By proceeding you are agreeing to the{" "}
              <Link href="/terms" className="text-blue-600 underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-600 underline">
                Privacy Policy
              </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

