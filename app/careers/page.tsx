import Link from "next/link"
import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAllJobs } from "@/lib/clinic-api"

export const dynamic = "force-static"

export default async function CareersPage() {
  const jobs = await getAllJobs()
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold">Careers</h1>
            <p className="mt-2 text-muted-foreground">
              Join our friendly team and help patients smile with confidence.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/">← Back home</Link>
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <Card key={job.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {job.location} • {job.type}
                    </p>
                  </div>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <a href={`mailto:${job.applyEmail}?subject=Application: ${encodeURIComponent(job.title)}`}>Apply</a>
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{job.summary}</p>
                <div className="mt-4 grid gap-2 md:grid-cols-2">
                  <div>
                    <div className="text-sm font-semibold">Responsibilities</div>
                    <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                      {job.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Requirements</div>
                    <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                      {job.requirements.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
