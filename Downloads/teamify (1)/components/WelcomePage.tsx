"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function WelcomePage() {
  const router = useRouter()

  const handleDemo = () => {
    router.push("/dashboard")
  }

  const handleSetup = () => {
    router.push("/setup-form")
  }

  return (
    <main className="min-h-screen bg-black relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%201-z9ALzexVQtHM9zVJaYKTcqmQPmrCcR.png"
          alt="Office background"
          fill
          priority
          className="opacity-60"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center min-h-screen px-4">
        <div className="text-center text-white max-w-2xl flex flex-col min-h-screen justify-around py-10">
          <h1 className="text-4xl md:text-5xl font-bold whitespace-nowrap">Welcome To Your <span className="text-amber-500">Virtual Office</span></h1>
          
          <div className="flex flex-col sm:flex-row justify-center sm:space-x-10 space-y-4 sm:space-y-0">
            <button 
              onClick={handleDemo}
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-1 px-8 transition-colors"
              style={{ borderRadius: '0.375rem' }}
            >
              Instant Demo
            </button>
            <button 
              onClick={handleSetup}
              className="bg-transparent border border-amber-500 text-white hover:bg-white hover:text-black font-medium py-1 px-6 transition-colors"
              style={{ borderRadius: '0.375rem' }}
            >
              Setup Your Company
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer links positioned at the bottom */}
      <div className="absolute bottom-5 left-0 right-0 z-10">
        <div className="flex justify-between px-8 md:px-16 text-sm">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Term & Conditions</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </main>
  )
} 