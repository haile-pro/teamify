import Image from "next/image"
import Navbar from "@/components/navbar"
import LoginForm from "@/components/login-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen h-screen flex flex-col bg-black relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%201-z9ALzexVQtHM9zVJaYKTcqmQPmrCcR.png"
          alt="Office background"
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <LoginForm />
        </div>
        <Footer />
      </div>
    </main>
  )
}

