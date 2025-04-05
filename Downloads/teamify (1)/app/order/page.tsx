import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import OrderSummary from "@/components/order-summary"

export default function OrderPage() {
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
        <div className="flex-grow flex flex-col items-center justify-center py-8">
          <h1 className="text-4xl font-bold mb-8">
            Your Order <span className="text-amber-500">Summary</span>
          </h1>
          <OrderSummary />
        </div>
        <Footer />
      </div>
    </main>
  )
}

