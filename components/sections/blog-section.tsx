import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { SiteData } from "@/lib/data-service"

interface BlogSectionProps {
  blog: SiteData['blog']
}

export function BlogSection({ blog }: BlogSectionProps) {
  return (
    <section id="blog" className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div>
          <h2 className="text-3xl font-bold">{blog.title}</h2>
          <p className="mt-2 text-muted-foreground">{blog.subtitle}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blog.posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="flex h-full flex-col overflow-hidden transition group-hover:shadow-md">
                <Image
                  src={post.coverImage || "/placeholder.svg?height=180&width=320&query=dental%20blog%20cover"}
                  alt={post.title}
                  width={640}
                  height={360}
                  className="h-40 w-full object-cover"
                />
                <CardContent className="flex h-full flex-col p-5">
                  <div className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</div>
                  <div className="mt-1 line-clamp-2 font-semibold">{post.title}</div>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-auto inline-block pt-4 text-sm font-medium text-blue-600">Read more →</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href={blog.viewAllLink} className="cursor-pointer text-sm font-medium text-blue-600 hover:underline">
            {blog.viewAllText}
          </Link>
        </div>
      </div>
    </section>
  )
}
