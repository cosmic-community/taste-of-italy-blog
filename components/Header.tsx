import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🇮🇹</span>
            <span className="text-2xl font-serif font-bold text-secondary">
              Taste of Italy
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/"
              className="text-gray-700 hover:text-accent transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/categories/pizza"
              className="text-gray-700 hover:text-accent transition-colors font-medium"
            >
              Pizza
            </Link>
            <Link 
              href="/categories/pasta"
              className="text-gray-700 hover:text-accent transition-colors font-medium"
            >
              Pasta
            </Link>
            <Link 
              href="/categories/wine-dining"
              className="text-gray-700 hover:text-accent transition-colors font-medium"
            >
              Wine & Dining
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}