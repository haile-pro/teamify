import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import NewSignupForm from "@/components/new-signup-form"

export default function SignUpPage() {
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
        <div className="flex-grow flex items-center justify-center">
          <NewSignupForm />
        </div>
        <Footer />
      </div>
    </main>
  )
}

