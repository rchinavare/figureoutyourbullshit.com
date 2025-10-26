import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white">figureoutyourbullshit.com</h2>
            <p className="mt-2">Life's complicated. Your approach to it doesn't have to be.</p>
          </div>

          <nav className="flex flex-col md:flex-row gap-6 md:gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Shop
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Philosophy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Figure Out Your Bullshit. All rights reserved.</p>
          <p className="mt-2">This is a joke site, but the message is real.</p>
        </div>
      </div>
    </footer>
  )
}
