# 🇮🇹 Taste of Italy Blog

![App Preview](https://imgix.cosmicjs.com/06a8fa20-ab0c-11f0-8dcc-651091f6a7c0-photo-1565299624946-b28f40a0ae38-1760672856595.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive food travel blog celebrating Italian culinary culture. Built with Next.js 15 and powered by Cosmic CMS, featuring dynamic content management, category filtering, and author profiles.

## ✨ Features

- 📝 **Dynamic Blog Posts** - Rich markdown content with featured images
- 👤 **Author Profiles** - Dedicated pages for each food journalist
- 🏷️ **Category Organization** - Filter content by Pizza, Pasta, Wine & Dining
- 📱 **Responsive Design** - Mobile-first with Tailwind CSS
- 🖼️ **Image Optimization** - Imgix-powered image delivery
- ⚡ **Server-Side Rendering** - Next.js 15 App Router for optimal performance
- 🎨 **Modern UI** - Clean, Italian-inspired aesthetic

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68f1bbf1ad9d85b2c1797e15&clone_repository=68f1bd82ad9d85b2c1797e30)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a Italy food travel blog with posts, authors, and categories"

### Code Generation Prompt

> "Based on the content model I created for 'Create a content model for a Italy food travel blog with posts, authors, and categories', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Imgix** - Image optimization and delivery
- **React Markdown** - Markdown rendering

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your bucket set up

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching All Posts

```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const posts = response.objects
```

### Fetching a Single Post

```typescript
const response = await cosmic.objects
  .findOne({ type: 'posts', slug: 'your-post-slug' })
  .depth(1)

const post = response.object
```

### Filtering by Category

```typescript
const response = await cosmic.objects
  .find({ 
    type: 'posts',
    'metadata.category': categoryId 
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const posts = response.objects
```

## 🔗 Cosmic CMS Integration

This application uses the Cosmic SDK to fetch content dynamically. The content model includes:

- **Posts** - Blog articles with title, content, featured image, author, and category
- **Authors** - Food journalists with name, bio, and profile photo
- **Categories** - Content organization (Pizza, Pasta, Wine & Dining)

All content is managed through your Cosmic dashboard and automatically appears in the application.

## 📝 Content Model Structure

### Posts Object Type
- Title (text)
- Content (markdown)
- Featured Image (file)
- Author (object - connects to Authors)
- Category (object - connects to Categories)

### Authors Object Type
- Name (text)
- Bio (textarea)
- Profile Photo (file)

### Categories Object Type
- Name (text)
- Description (textarea)

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the button above
2. Connect your repository
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Make sure to set these in your deployment platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

## 📱 Features in Detail

### Home Page
- Hero section with latest posts
- Category-based filtering
- Responsive grid layout
- Author attribution

### Post Detail Page
- Full markdown rendering
- Featured image display
- Author information
- Category badge
- Related content suggestions

### Category Pages
- Filtered post listings
- Category descriptions
- Optimized navigation

### Author Pages
- Author bio and profile photo
- All posts by author
- Social media integration ready

## 🎨 Customization

### Styling
All styles use Tailwind CSS. Customize the design in:
- `tailwind.config.js` - Theme configuration
- `app/globals.css` - Global styles
- Individual component files

### Content
Manage all content through your Cosmic dashboard:
1. Log in to [Cosmic](https://www.cosmicjs.com)
2. Navigate to your bucket
3. Edit Posts, Authors, or Categories
4. Changes appear immediately in the application

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🙏 Acknowledgments

Built with [Cosmic](https://www.cosmicjs.com) - The headless CMS for modern applications.

<!-- README_END -->