import data from '@/data.json'

// Types that match the existing clinic-api interface
export type Service = {
  slug: string
  title: string
  description: string
  details: {
    hero: string
    sections: { heading: string; body: string[] }[]
    image?: string
  }
}

export type Doctor = {
  id: string
  name: string
  specialty: string
  photoUrl?: string
  bio: string
  socials?: { twitter?: string; linkedin?: string; instagram?: string }
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string[]
  coverImage?: string
  author: string
  date: string
}

export type Job = {
  id: string
  title: string
  location: string
  type: string
  summary: string
  responsibilities: string[]
  requirements: string[]
  applyEmail: string
}

export type GenericInfoPage = {
  slug: "privacy" | "terms" | "code-of-conduct" | "cookies"
  title: string
  content: string[]
}

export type ClinicData = {
  hero: {
    subtitle: string
    features: { title: string; description: string }[]
  }
  about: {
    description: string
  }
  stats: { label: string; value: string }[]
  services: Service[]
  doctors: Doctor[]
  testimonials: { id: string; name: string; role: string; rating: number; message: string; avatar?: string }[]
  contact: { phone: string; email: string; address: string }
  posts: BlogPost[]
  jobs: Job[]
  pages: GenericInfoPage[]
}

// Transform data.json structure to match clinic-api interface
function transformData(): ClinicData {
  // Transform services to match expected structure
  const services: Service[] = data.services.items.map(service => ({
    slug: service.slug,
    title: service.title,
    description: service.description,
    details: {
      hero: service.description,
      image: service.image,
      sections: [
        {
          heading: "Features",
          body: service.features
        }
      ]
    }
  }))

  // Transform doctors to match expected structure
  const doctors: Doctor[] = data.doctors.items.map(doctor => ({
    id: doctor.id,
    name: doctor.name,
    specialty: doctor.specialty,
    photoUrl: doctor.photoUrl,
    bio: doctor.bio,
    socials: doctor.socials
  }))

  // Transform blog posts to match expected structure
  const posts: BlogPost[] = data.blog.posts.map(post => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: [post.content], // Convert string to array
    coverImage: post.coverImage,
    author: post.author,
    date: post.date
  }))

  // Transform testimonials to match expected structure
  const testimonials = data.testimonials.items.map(testimonial => ({
    id: testimonial.id,
    name: testimonial.name,
    role: testimonial.role,
    rating: testimonial.rating,
    message: testimonial.message,
    avatar: testimonial.avatar
  }))

  // Transform stats to match expected structure
  const stats = data.about.stats.map(stat => ({
    label: stat.label,
    value: stat.value
  }))

  // Create generic pages (these would need to be added to data.json or hardcoded)
  const pages: GenericInfoPage[] = [
    {
      slug: "privacy",
      title: "Privacy Policy",
      content: [
        "We respect your privacy and protect your personal health information.",
        "We collect only the data necessary to provide quality care and services.",
        "Contact us to request access, corrections, or deletion where applicable."
      ]
    },
    {
      slug: "terms",
      title: "Terms of Service",
      content: [
        "Use of our website constitutes acceptance of these terms.",
        "Content is for informational purposes and not a substitute for professional advice."
      ]
    },
    {
      slug: "code-of-conduct",
      title: "Code of Conduct",
      content: [
        "We foster a safe, respectful environment for patients and staff.",
        "Harassment or discrimination is not tolerated in any form."
      ]
    },
    {
      slug: "cookies",
      title: "Cookie Policy",
      content: [
        "We use cookies to improve site performance and analyze traffic.",
        "You can control cookie preferences in your browser settings."
      ]
    }
  ]

  // Create jobs array (empty since it's not in data.json)
  const jobs: Job[] = []

  return {
    hero: {
      subtitle: data.hero.subtitle,
      features: data.hero.features.map(feature => ({
        title: feature.title,
        description: feature.description
      }))
    },
    about: {
      description: data.about.description
    },
    stats,
    services,
    doctors,
    testimonials,
    contact: {
      phone: data.appointment.contact.phone,
      email: data.appointment.contact.email,
      address: data.appointment.contact.address
    },
    posts,
    jobs,
    pages
  }
}

// Cache the transformed data
let cachedData: ClinicData | null = null

export async function getClinicData(): Promise<ClinicData> {
  if (!cachedData) {
    cachedData = transformData()
  }
  // Add small delay to mimic async behavior
  await new Promise((r) => setTimeout(r, 10))
  return cachedData
}

export async function getAllServices(): Promise<Service[]> {
  const d = await getClinicData()
  return d.services
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const d = await getClinicData()
  return d.services.find((s) => s.slug === slug)
}

export async function getAllBlogPosts() {
  const d = await getClinicData()
  return [...d.posts].sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await getAllBlogPosts()
  return posts.find((p) => p.slug === slug)
}

export async function getAllJobs(): Promise<Job[]> {
  const d = await getClinicData()
  return d.jobs
}

export async function getGenericPage(slug: GenericInfoPage["slug"]): Promise<GenericInfoPage> {
  const d = await getClinicData()
  const page = d.pages.find((p) => p.slug === slug)
  if (!page) throw new Error("Page not found")
  return page
}
