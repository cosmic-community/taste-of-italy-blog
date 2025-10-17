// app/posts/[slug]/page.tsx
import { getPost, getPosts } from '@/lib/cosmic'
import { Post } from '@/types'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import AuthorCard from '@/components/AuthorCard'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export const revalidate = 60

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug) as Post | null

  if (!post) {
    notFound()
  }

  const author = post.metadata?.author
  const category = post.metadata?.category
  const featuredImage = post.metadata?.featured_image

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Badge */}
      {category && (
        <Link 
          href={`/categories/${category.slug}`}
          className="inline-block mb-4 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          {category.metadata?.name || category.title}
        </Link>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
        {post.metadata?.title || post.title}
      </h1>

      {/* Author and Date */}
      <div className="flex items-center gap-4 mb-8 text-gray-600">
        {author && (
          <>
            <Link 
              href={`/authors/${author.slug}`}
              className="hover:text-accent transition-colors"
            >
              By {author.metadata?.name || author.title}
            </Link>
            <span>•</span>
          </>
        )}
        <time dateTime={post.created_at}>
          {new Date(post.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>

      {/* Featured Image */}
      {featuredImage && (
        <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
          <img
            src={`${featuredImage.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={post.metadata?.title || post.title}
            width="1200"
            height="600"
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose-custom">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.metadata?.content || ''}
        </ReactMarkdown>
      </div>

      {/* Author Card */}
      {author && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <AuthorCard author={author} />
        </div>
      )}
    </article>
  )
}