import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import { getAllBlogPosts } from "@/lib/clinic-data"
import { Button } from "@/components/ui/button"

export const dynamic = "force-static"

export default async function BlogIndex() {
  const posts = await getAllBlogPosts()
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        <section className="border-b bg-slate-50">
          <div className="mx-auto flex max-w-6xl items-end justify-between px-4 py-10">
            <div>
              <h1 className="text-3xl font-bold">Dental Blog</h1>
              <p className="mt-2 text-muted-foreground">Guides, tips, news, and patient stories.</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/">← Back home</Link>
            </Button>
          </div>
        </section>
        <section>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-3">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <article className="flex h-full flex-col overflow-hidden rounded-xl border transition hover:shadow-md">
                  <Image
                    src={p.coverImage || "/placeholder.svg?height=200&width=360&query=dental%20blog%20cover"}
                    alt={p.title}
                    width={640}
                    height={360}
                    className="h-44 w-full object-cover"
                  />
                  <div className="flex h-full flex-col p-5">
                    <div className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString()}</div>
                    <h2 className="mt-1 line-clamp-2 font-semibold">{p.title}</h2>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
                    <span className="mt-auto inline-block pt-4 text-sm font-medium text-blue-600">Read more →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
