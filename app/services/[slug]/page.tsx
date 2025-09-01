import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import { getAllServices, getServiceBySlug } from "@/lib/clinic-data"
import { Button } from "@/components/ui/button"

export const dynamic = "force-static"

export async function generateStaticParams() {
  const services = await getAllServices()
  return services.map((s) => ({ slug: s.slug }))
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const service = await getServiceBySlug(resolvedParams.slug);
  if (!service) return null

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-1">
        {/* Sophisticated hero with breadcrumb + media card */}
        <section className="border-b bg-gradient-to-br from-blue-50 to-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
            <div>
              <div className="text-xs">
                <Link href="/" className="text-muted-foreground hover:underline">
                  Home
                </Link>{" "}
                <span className="text-muted-foreground">{">"}</span>{" "}
                <Link href="/#services" className="text-muted-foreground hover:underline">
                  Services
                </Link>{" "}
                <span className="text-muted-foreground">{">"}</span>{" "}
                <span className="font-medium text-blue-700">{service.title}</span>
              </div>
              <h1 className="mt-3 text-3xl font-bold md:text-4xl">{service.title}</h1>
              <p className="mt-3 max-w-prose text-slate-600">{service.description}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild variant="outline">
                  <Link href="/#services">← Back to services</Link>
                </Button>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/#appointment">Book an appointment</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-white p-2 shadow-xl ring-1 ring-blue-100">
                <Image
                  src={service.details.image || "/placeholder.svg?height=360&width=540&query=dental%20service"}
                  alt={service.title}
                  width={960}
                  height={600}
                  className="h-auto w-full rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content + sticky sidebar */}
        <section>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 lg:grid-cols-3">
            <article className="prose prose-slate max-w-none lg:col-span-2">
              <h2>{service.details.hero}</h2>
              {service.details.sections.map((sec) => (
                <section key={sec.heading} className="not-prose">
                  <h3 className="mt-8 text-2xl font-semibold">{sec.heading}</h3>
                  {sec.body.map((p, i) => (
                    <p key={i} className="mt-3 text-slate-600">
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </article>

            <aside className="lg:sticky lg:top-24">
              <div className="rounded-2xl border p-6">
                <h4 className="text-sm font-semibold">Highlights</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {service.details.sections.map((sec) => (
                    <li key={sec.heading} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span>{sec.heading}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl bg-blue-50 p-4">
                  <div className="text-sm font-medium text-blue-700">Need guidance?</div>
                  <p className="mt-1 text-xs text-blue-700/80">Our team will help you choose the right treatment.</p>
                  <Button asChild size="sm" className="mt-3 bg-blue-600 hover:bg-blue-700">
                    <Link href="/#appointment">Talk to us</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
