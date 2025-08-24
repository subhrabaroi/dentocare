import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  AppointmentSection,
  DoctorsSection,
  BlogSection,
  TestimonialsSection,
} from "@/components/sections"
import { dataService } from "@/lib/data-service"

// Force static generation
export const dynamic = "force-static"

export default async function Page() {
  const data = dataService.getAllData()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <HeroSection hero={data.hero} />
      
      <AboutSection about={data.about} />

      <ServicesSection services={data.services} />

      <AppointmentSection appointment={data.appointment} />

      <DoctorsSection doctors={data.doctors} />

      <BlogSection blog={data.blog} />

      <TestimonialsSection testimonials={data.testimonials} />

      <Footer />
    </main>
  )
}
