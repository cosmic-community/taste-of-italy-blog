import { getPosts, getCategories } from '@/lib/cosmic'
import { Post, Category } from '@/types'
import PostGrid from '@/components/PostGrid'
import Hero from '@/components/Hero'
import CategoryFilter from '@/components/CategoryFilter'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const [posts, categories] = await Promise.all([
    getPosts(),
    getCategories()
  ])

  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryFilter categories={categories as Category[]} />
        <PostGrid posts={posts as Post[]} />
      </div>
    </div>
  )
}