"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DashboardOverview from "@/components/dashboard-overview"
import { useAuth } from "@/context/auth-context"

export default function DashboardContent() {
  const { user, isLoading } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show loading state while checking auth
  if (!mounted || isLoading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </main>
    )
  }

  // If no user, don't render dashboard
  if (mounted && !user) {
    return null
  }

  return (
    <main className="min-h-screen bg-black relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%201-z9ALzexVQtHM9zVJaYKTcqmQPmrCcR.png"
          alt="Office background"
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center py-8">
          <DashboardOverview />
        </div>
        <Footer />
      </div>
    </main>
  )
} 