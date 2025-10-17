// app/authors/[slug]/page.tsx
import { getAuthor, getPostsByAuthor, getAuthors } from '@/lib/cosmic'
import { Author, Post } from '@/types'
import { notFound } from 'next/navigation'
import PostGrid from '@/components/PostGrid'

export async function generateStaticParams() {
  const authors = await getAuthors()
  return authors.map((author: Author) => ({
    slug: author.slug,
  }))
}

export const revalidate = 60

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthor(slug) as Author | null

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id) as Post[]
  const profilePhoto = author.metadata?.profile_photo

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
        {profilePhoto && (
          <div className="flex-shrink-0">
            <img
              src={`${profilePhoto.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
              alt={author.metadata?.name || author.title}
              width="200"
              height="200"
              className="rounded-full shadow-lg"
            />
          </div>
        )}
        <div className="flex-grow">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
            {author.metadata?.name || author.title}
          </h1>
          {author.metadata?.bio && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {author.metadata.bio}
            </p>
          )}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-secondary mb-6">
          Articles by {author.metadata?.name || author.title}
        </h2>
      </div>

      {posts.length > 0 ? (
        <PostGrid posts={posts} />
      ) : (
        <p className="text-center text-gray-600 py-12">
          No posts from this author yet.
        </p>
      )}
    </div>
  )
}