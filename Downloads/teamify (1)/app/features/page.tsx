import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FeaturesPage() {
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
            <h2 className="text-3xl font-semibold text-center mb-8">Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-700/50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Team Collaboration</h3>
                <p className="text-gray-300">Work together seamlessly with your team members in real-time.</p>
              </div>

              <div className="p-4 bg-gray-700/50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Project Management</h3>
                <p className="text-gray-300">Track progress, assign tasks, and meet deadlines efficiently.</p>
              </div>

              <div className="p-4 bg-gray-700/50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">File Sharing</h3>
                <p className="text-gray-300">Share and organize documents, images, and other files securely.</p>
              </div>

              <div className="p-4 bg-gray-700/50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Communication Tools</h3>
                <p className="text-gray-300">Chat, video calls, and messaging to keep everyone connected.</p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/plans"
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

