import { Post } from '@/types'
import Link from 'next/link'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {featuredImage && (
        <Link href={`/posts/${post.slug}`}>
          <img
            src={`${featuredImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={post.metadata?.title || post.title}
            width="400"
            height="250"
            className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
          />
        </Link>
      )}
      <div className="p-6">
        {category && (
          <Link 
            href={`/categories/${category.slug}`}
            className="inline-block mb-3 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full hover:bg-primary-dark transition-colors"
          >
            {category.metadata?.name || category.title}
          </Link>
        )}
        <Link href={`/posts/${post.slug}`}>
          <h2 className="text-xl font-serif font-bold text-secondary mb-3 hover:text-accent transition-colors line-clamp-2">
            {post.metadata?.title || post.title}
          </h2>
        </Link>
        {author && (
          <Link 
            href={`/authors/${author.slug}`}
            className="text-sm text-gray-600 hover:text-accent transition-colors"
          >
            By {author.metadata?.name || author.title}
          </Link>
        )}
      </div>
    </article>
  )
}