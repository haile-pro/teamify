import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutUsPage() {
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
          <div className="bg-gray-700/70 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-4xl mx-4">
            <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>

            <div className="space-y-6">
              <p className="text-gray-300">
                Teamify was founded with a simple mission: to make team collaboration easier and more efficient. We
                believe that when teams work better together, they can achieve amazing results.
              </p>

              <p className="text-gray-300">
                Our platform is designed to streamline communication, project management, and file sharing, allowing
                your team to focus on what matters most - creating great work.
              </p>

              <p className="text-gray-300">
                With users across the globe, Teamify is trusted by businesses of all sizes, from startups to enterprise
                organizations. We're committed to continuous improvement and innovation, always listening to our users'
                feedback to make Teamify better.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/contact-us"
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

