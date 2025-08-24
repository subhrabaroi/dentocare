import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import GenericPage from "@/components/site/generic-page"
import { getGenericPage } from "@/lib/clinic-api"

export const dynamic = "force-static"

export default async function CoCPage() {
  const page = await getGenericPage("code-of-conduct")
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <GenericPage title={page.title} content={page.content} />
      <Footer />
    </main>
  )
}
