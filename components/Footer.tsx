export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🇮🇹</span>
              Taste of Italy
            </h3>
            <p className="text-gray-300">
              Exploring authentic Italian culinary experiences, one dish at a time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="/categories/pizza" className="text-gray-300 hover:text-primary transition-colors">
                  Pizza
                </a>
              </li>
              <li>
                <a href="/categories/pasta" className="text-gray-300 hover:text-primary transition-colors">
                  Pasta
                </a>
              </li>
              <li>
                <a href="/categories/wine-dining" className="text-gray-300 hover:text-primary transition-colors">
                  Wine & Dining
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <p className="text-gray-300 text-sm">
              Built with Next.js and powered by Cosmic CMS for seamless content management.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Taste of Italy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}