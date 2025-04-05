"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useAuth } from "@/context/auth-context"

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, signOut } = useAuth()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="flex justify-between items-center p-4 md:px-8">
      <div className="flex items-center z-20">
        <Link href="/" className="text-white font-bold text-xl flex items-center">
          <Image src="/images/logo.png" alt="Teamify" width={120} height={30} className="h-6 sm:h-8 w-auto" />
        </Link>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden z-20 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-10 flex flex-col items-center justify-center">
          <div className="flex flex-col space-y-6 text-center">
            <Link
              href="/"
              className={`text-lg ${isActive("/") ? "text-white font-medium" : "text-gray-300"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`text-lg ${isActive("/features") ? "text-white font-medium" : "text-gray-300"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/about-us"
              className={`text-lg ${isActive("/about-us") ? "text-white font-medium" : "text-gray-300"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className={`text-lg ${isActive("/contact-us") ? "text-white font-medium" : "text-gray-300"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {user && (
              <Link
                href="/dashboard"
                className={`text-lg ${isActive("/dashboard") ? "text-white font-medium" : "text-gray-300"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}

            {user ? (
              <button
                onClick={() => {
                  signOut()
                  setMobileMenuOpen(false)
                }}
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded transition-colors mt-4"
              >
                Sign Out
              </button>
            ) : (
              <Link
                href="/login"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded transition-colors mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-8">
        <Link
          href="/"
          className={`${isActive("/") ? "text-white border-b-2 border-white" : "text-gray-300 hover:text-white"} transition-colors`}
        >
          Home
        </Link>
        <Link
          href="/features"
          className={`${isActive("/features") ? "text-white border-b-2 border-white" : "text-gray-300 hover:text-white"} transition-colors`}
        >
          Features
        </Link>
        <Link
          href="/about-us"
          className={`${isActive("/about-us") ? "text-white border-b-2 border-white" : "text-gray-300 hover:text-white"} transition-colors`}
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className={`${isActive("/contact-us") ? "text-white border-b-2 border-white" : "text-gray-300 hover:text-white"} transition-colors`}
        >
          Contact Us
        </Link>

        {user && (
          <Link
            href="/dashboard"
            className={`${isActive("/dashboard") ? "text-white border-b-2 border-white" : "text-gray-300 hover:text-white"} transition-colors`}
          >
            Dashboard
          </Link>
        )}
      </div>

      {user ? (
        <button
          onClick={signOut}
          className="hidden md:block bg-amber-500 hover:bg-amber-600 text-white font-medium py-1 px-4 rounded transition-colors"
        >
          Sign Out
        </button>
      ) : (
        <Link href="/login" className="hidden md:block btn-sign-in">
          Sign In
        </Link>
      )}
    </nav>
  )
}

