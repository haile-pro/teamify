import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsPage() {
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
          <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-xl w-full max-w-4xl mx-4 my-12">
            <h2 className="text-3xl font-semibold text-center mb-8">Terms & Conditions</h2>

            <div className="space-y-6">
              <p className="text-gray-300">
                These Terms & Conditions govern your use of the Teamify platform and services.
              </p>

              <h3 className="text-xl font-medium">1. Account Registration</h3>
              <p className="text-gray-300">
                To use Teamify, you must register for an account. You agree to provide accurate and complete information
                during registration and to keep your account information updated.
              </p>

              <h3 className="text-xl font-medium">2. Subscription and Payments</h3>
              <p className="text-gray-300">
                Teamify offers various subscription plans. You agree to pay the fees associated with your selected plan.
                Payments are non-refundable unless otherwise specified.
              </p>

              <h3 className="text-xl font-medium">3. User Conduct</h3>
              <p className="text-gray-300">
                You agree to use Teamify in compliance with all applicable laws and regulations. You will not use
                Teamify for any illegal or unauthorized purpose.
              </p>

              <h3 className="text-xl font-medium">4. Intellectual Property</h3>
              <p className="text-gray-300">
                Teamify and its content are protected by copyright, trademark, and other laws. You may not copy, modify,
                distribute, or create derivative works based on Teamify without our permission.
              </p>

              <h3 className="text-xl font-medium">5. Termination</h3>
              <p className="text-gray-300">
                We reserve the right to terminate or suspend your account at any time for any reason, including
                violation of these Terms & Conditions.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/"
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

