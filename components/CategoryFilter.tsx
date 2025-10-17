'use client'

import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface CategoryFilterProps {
  categories: Category[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const pathname = usePathname()
  
  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <div className="mb-8 flex flex-wrap gap-4 justify-center">
      <Link
        href="/"
        className={`px-6 py-3 rounded-full font-medium transition-colors ${
          pathname === '/'
            ? 'bg-accent text-white'
            : 'bg-white text-gray-700 hover:bg-warm-gray'
        }`}
      >
        All Posts
      </Link>
      {categories.map((category) => {
        const isActive = pathname === `/categories/${category.slug}`
        return (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className={`px-6 py-3 rounded-full font-medium transition-colors ${
              isActive
                ? 'bg-accent text-white'
                : 'bg-white text-gray-700 hover:bg-warm-gray'
            }`}
          >
            {category.metadata?.name || category.title}
          </Link>
        )
      })}
    </div>
  )
}