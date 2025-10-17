// app/categories/[slug]/page.tsx
import { getCategory, getPostsByCategory, getCategories } from '@/lib/cosmic'
import { Category, Post } from '@/types'
import { notFound } from 'next/navigation'
import PostGrid from '@/components/PostGrid'

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category: Category) => ({
    slug: category.slug,
  }))
}

export const revalidate = 60

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategory(slug) as Category | null

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id) as Post[]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
          {category.metadata?.name || category.title}
        </h1>
        {category.metadata?.description && (
          <p className="text-xl text-gray-600 max-w-3xl">
            {category.metadata.description}
          </p>
        )}
      </div>

      {posts.length > 0 ? (
        <PostGrid posts={posts} />
      ) : (
        <p className="text-center text-gray-600 py-12">
          No posts found in this category yet.
        </p>
      )}
    </div>
  )
}