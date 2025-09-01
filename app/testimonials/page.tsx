import Image from "next/image"
import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import { getClinicData } from "@/lib/clinic-data"

export const dynamic = "force-static"

export default async function TestimonialsPage() {
  const data = await getClinicData()
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl font-bold">All Testimonials</h1>
          <p className="mt-2 text-muted-foreground">What our patients are saying.</p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.testimonials.map((t) => (
              <article key={t.id} className="rounded-xl border p-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar || "/placeholder.svg?height=48&width=48&query=patient%20avatar"}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{t.message}</p>
                <div className="mt-3 text-sm font-medium text-blue-600">
                  {"★".repeat(t.rating)} <span className="text-muted-foreground">({t.rating}.0)</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
