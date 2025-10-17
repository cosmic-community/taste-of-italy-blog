import { Author } from '@/types'
import Link from 'next/link'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const profilePhoto = author.metadata?.profile_photo

  return (
    <div className="flex items-start gap-6 p-6 bg-warm-gray rounded-lg">
      {profilePhoto && (
        <Link href={`/authors/${author.slug}`}>
          <img
            src={`${profilePhoto.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={author.metadata?.name || author.title}
            width="100"
            height="100"
            className="rounded-full shadow-md hover:opacity-90 transition-opacity"
          />
        </Link>
      )}
      <div className="flex-grow">
        <Link href={`/authors/${author.slug}`}>
          <h3 className="text-xl font-serif font-bold text-secondary mb-2 hover:text-accent transition-colors">
            {author.metadata?.name || author.title}
          </h3>
        </Link>
        {author.metadata?.bio && (
          <p className="text-gray-700 leading-relaxed">
            {author.metadata.bio}
          </p>
        )}
        <Link 
          href={`/authors/${author.slug}`}
          className="inline-block mt-3 text-accent hover:text-primary transition-colors font-medium"
        >
          View all posts by {author.metadata?.name || author.title} →
        </Link>
      </div>
    </div>
  )
}