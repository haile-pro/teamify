import Link from "next/link"

export default function Footer() {
  return (
    <footer className="p-4 flex justify-between text-xs text-gray-400">
      <Link href="/terms" className="hover:text-white transition-colors">
        Terms & Conditions
      </Link>
      <Link href="/privacy" className="hover:text-white transition-colors">
        Privacy Policy
      </Link>
    </footer>
  )
}

