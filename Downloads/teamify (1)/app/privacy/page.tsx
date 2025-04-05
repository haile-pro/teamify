import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPage() {
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
            <h2 className="text-3xl font-semibold text-center mb-8">Privacy Policy</h2>

            <div className="space-y-6">
              <p className="text-gray-300">
                This Privacy Policy explains how Teamify collects, uses, and protects your personal information.
              </p>

              <h3 className="text-xl font-medium">1. Information We Collect</h3>
              <p className="text-gray-300">
                We collect information you provide when you register for an account, such as your name, email address,
                and company information. We also collect information about your use of Teamify.
              </p>

              <h3 className="text-xl font-medium">2. How We Use Your Information</h3>
              <p className="text-gray-300">
                We use your information to provide and improve Teamify services, communicate with you, and personalize
                your experience. We may also use your information for research and analytics purposes.
              </p>

              <h3 className="text-xl font-medium">3. Information Sharing</h3>
              <p className="text-gray-300">
                We do not sell your personal information. We may share your information with third-party service
                providers who help us operate Teamify, but only as necessary to provide our services.
              </p>

              <h3 className="text-xl font-medium">4. Data Security</h3>
              <p className="text-gray-300">
                We implement appropriate security measures to protect your personal information from unauthorized
                access, alteration, or disclosure.
              </p>

              <h3 className="text-xl font-medium">5. Your Rights</h3>
              <p className="text-gray-300">
                You have the right to access, correct, or delete your personal information. You can manage your
                information through your account settings or by contacting us.
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

