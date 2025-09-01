import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/clinic-data"
import { Button } from "@/components/ui/button"

export const dynamic = "force-static"

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) return null

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-10">
          <Button asChild variant="outline" className="mb-6 bg-transparent">
            <Link href="/blog">← Back to blog</Link>
          </Button>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="mt-2 text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString()} • {post.author}
          </div>
          <Image
            src={post.coverImage || "/placeholder.svg?height=360&width=640&query=dental%20article%20cover"}
            alt={post.title}
            width={960}
            height={540}
            className="mt-6 rounded-xl object-cover"
          />
          <div className="prose prose-slate mt-6">
            {post.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
