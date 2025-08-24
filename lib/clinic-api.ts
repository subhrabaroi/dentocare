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

// Mock data used by both SSG and the /api endpoint
const MOCK_DATA: ClinicData = {
  hero: {
    subtitle: "Dental or oral health is concerned with your teeth, gums and mouth; maintaining your overall health.",
    features: [
      { title: "Satisfaction Guarantee", description: "We stand behind our results." },
      { title: "Awesome Technology", description: "Modern, comfortable & efficient." },
      { title: "Professional Dentist", description: "Experienced and caring staff." },
    ],
  },
  about: {
    description:
      "We focus on prevention and personalized treatment plans. From checkups to cosmetic procedures, our team ensures gentle and effective care.",
  },
  stats: [
    { label: "Happy Patients", value: "100+" },
    { label: "Successful Cases", value: "500+" },
    { label: "5-Star Reviews", value: "100+" },
    { label: "Years Experience", value: "20+" },
  ],
  services: [
      {
        slug: "dental-checkup-cleaning",
      title: "Checkup & Cleaning",
      description: "Routine exams, digital X-rays and professional cleaning.",
      details: {
        hero: "Keep your smile healthy with regular preventive visits.",
        image: "/dental-checkup-cleaning.png",
        sections: [
          {
            heading: "What’s Included",
            body: [
              "Comprehensive exam, digital X‑rays (as needed), and a gentle professional cleaning.",
              "Personalized home care guidance and product recommendations.",
            ],
          },
          {
            heading: "Benefits",
            body: [
              "Prevent cavities and gum disease, catch issues early, and keep your smile bright.",
              "Quicker, more comfortable visits using modern tools.",
            ],
          },
        ],
      },
    },
    {
      slug: "teeth-whitening",
      title: "Teeth Whitening",
      description: "Safe, effective whitening for a brighter smile.",
      details: {
        hero: "Whiten your teeth safely with professional‑grade systems.",
        image: "/teeth-whitening.png",
        sections: [
          {
            heading: "In‑office & Take‑home",
            body: [
              "Choose between a fast in‑office session or custom take‑home trays.",
              "Both options are supervised to protect enamel and gums.",
            ],
          },
          {
            heading: "Results",
            body: [
              "Noticeably brighter teeth in as little as one visit.",
              "Maintenance tips to keep your smile glowing.",
            ],
          },
        ],
      },
    },
    {
      slug: "dental-implants",
      title: "Dental Implants",
      description: "Permanent solution to missing teeth.",
      details: {
        hero: "Restore function and confidence with lifelike implants.",
        image: "/dental-implants.png",
        sections: [
          {
            heading: "Procedure",
            body: [
              "Titanium post placement, healing phase, and custom crown restoration.",
              "3D imaging and guided surgery for precision.",
            ],
          },
          {
            heading: "Why Implants",
            body: [
              "Preserve bone, protect adjacent teeth, and enjoy natural‑feeling chewing.",
              "Long‑term solution with high success rates.",
            ],
          },
        ],
      },
    },
    {
      slug: "invisalign-clear-aligners",
      title: "Invisalign",
      description: "Clear aligners for discreet teeth straightening.",
      details: {
        hero: "Straighten your teeth with removable, nearly invisible aligners.",
        image: "/invisalign-clear-aligners.png",
        sections: [
          {
            heading: "How It Works",
            body: [
              "Digital scan, personalized plan, and series of aligners to shift teeth gradually.",
              "Fewer office visits, eat what you love.",
            ],
          },
          {
            heading: "Candidates",
            body: [
              "Great for mild to moderate crowding and spacing.",
              "We’ll assess your goals and create a custom plan.",
            ],
          },
        ],
      },
    },
    {
      slug: "dental-fillings",
      title: "Fillings & Restorations",
      description: "Durable, tooth-colored composites.",
      details: {
        hero: "Repair cavities with strong, natural‑looking restorations.",
        image: "/dental-fillings.png",
        sections: [
          {
            heading: "Materials",
            body: [
              "Tooth‑colored composite resins for aesthetics and strength.",
              "Minimal, precise preparations using modern techniques.",
            ],
          },
          {
            heading: "Longevity",
            body: ["Proper care can extend lifespan for many years.", "Regular checkups help monitor restorations."],
          },
        ],
      },
    },
    {
      slug: "root-canal-therapy",
      title: "Root Canal Therapy",
      description: "Relieve pain and save your natural tooth.",
      details: {
        hero: "Comfort‑focused endodontic care to stop pain and infection.",
        image: "/root-canal-therapy.png",
        sections: [
          {
            heading: "When You Need It",
            body: [
              "Deep decay, cracks, or trauma can inflame the nerve.",
              "Signs include lingering sensitivity, swelling, or spontaneous pain.",
            ],
          },
          {
            heading: "Aftercare",
            body: [
              "Soreness fades within days; a crown often protects the tooth long‑term.",
              "We’ll provide personalized instructions for quick recovery.",
            ],
          },
        ],
      },
    },
  ],
  doctors: [
    {
      id: "d1",
      name: "Dr. Rona Roy",
      specialty: "Orthodontist",
      bio: "Aligner expert focused on comfortable, precise tooth movement.",
      socials: {
        linkedin: "https://www.linkedin.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: "d2",
      name: "Dr. John Smith",
      specialty: "Implant Specialist",
      bio: "Restores smiles with advanced implant and surgical techniques.",
      socials: { linkedin: "https://www.linkedin.com", twitter: "https://twitter.com" },
    },
    {
      id: "d3",
      name: "Dr. Emma Clark",
      specialty: "Pediatric Dentist",
      bio: "Gentle care for kids with a fun, fear‑free experience.",
      socials: { instagram: "https://instagram.com" },
    },
    {
      id: "d4",
      name: "Dr. Olivia Brown",
      specialty: "Cosmetic Dentist",
      bio: "Transforms smiles using minimally invasive cosmetic options.",
      socials: { linkedin: "https://www.linkedin.com" },
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Andrew Smith",
      role: "Patient",
      rating: 5,
      message: "Wonderful experience—friendly staff and painless treatment!",
    },
    {
      id: "t2",
      name: "Jennifer Wilson",
      role: "Patient",
      rating: 5,
      message: "Clean clinic, modern equipment, and great results.",
    },
    {
      id: "t3",
      name: "Michael Lee",
      role: "Patient",
      rating: 4,
      message: "Quick appointment and professional care. Highly recommend!",
    },
    {
      id: "t4",
      name: "Priya Patel",
      role: "Patient",
      rating: 5,
      message: "The team explained everything clearly and made me comfortable.",
    },
    {
      id: "t5",
      name: "Carlos Mendez",
      role: "Patient",
      rating: 5,
      message: "Fantastic whitening results. Very happy with my smile!",
    },
    {
      id: "t6",
      name: "Sofia Rossi",
      role: "Patient",
      rating: 4,
      message: "Great with kids—my son loved his first visit.",
    },
    {
      id: "t7",
      name: "Hannah Kim",
      role: "Patient",
      rating: 5,
      message: "Modern clinic, caring dentists, and seamless scheduling.",
    },
  ],
  contact: {
    phone: "(555) 010-3939",
    email: "hello@dentalclinic.com",
    address: "123 Smile St, Suite 200, Denton",
  },
  posts: [
    {
      slug: "how-often-to-visit-dentist",
      title: "How Often Should You Visit the Dentist?",
      excerpt: "Regular checkups prevent small issues from becoming big problems. Here’s when to schedule your visits.",
      content: [
        "Most adults benefit from a dental checkup and cleaning every six months.",
        "Your schedule may vary based on gum health, dental history, and lifestyle.",
        "We’ll recommend a personalized recall frequency during your exam.",
      ],
      author: "Dental Team",
      date: "2024-05-10",
      coverImage: "/dental-checkup.png",
    },
    {
      slug: "teeth-whitening-myths",
      title: "Top Teeth Whitening Myths—Busted!",
      excerpt: "Whitening doesn’t have to damage enamel. Learn the facts about professional vs. DIY options.",
      content: [
        "Professional whitening is formulated to protect enamel when used as directed.",
        "DIY hacks can be abrasive and risky. Ask your dentist for safe options.",
        "Maintenance involves good hygiene and mindful dietary choices.",
      ],
      author: "Dental Team",
      date: "2024-06-15",
      coverImage: "/white-smile.png",
    },
    {
      slug: "kids-first-visit-guide",
      title: "Your Child’s First Dental Visit: A Friendly Guide",
      excerpt: "Set your child up for smile success with a fun, stress‑free first appointment.",
      content: [
        "Schedule by first tooth or age one to establish healthy habits early.",
        "We use kid‑friendly language and show‑tell‑do to build trust.",
        "Parents receive tips on home care and diet to prevent cavities.",
      ],
      author: "Dental Team",
      date: "2024-07-20",
      coverImage: "/placeholder-cpj4w.png",
    },
      {
        slug: "oral-hygiene-tips",
        title: "Essential Oral Hygiene Tips",
        excerpt: "Simple habits for a healthier mouth and brighter smile.",
        content: [
          "Brush twice daily with fluoride toothpaste and a soft-bristled brush.",
          "Floss every day to remove plaque between teeth.",
          "Limit sugary snacks and drinks to prevent cavities.",
          "Visit your dentist regularly for checkups and cleanings."
        ],
        author: "Dental Team",
        date: "2024-08-01",
        coverImage: "/dental-checkup-cleaning.png",
      },
      {
        slug: "choosing-toothpaste",
        title: "Choosing the Right Toothpaste",
        excerpt: "Find the best toothpaste for your needs—sensitivity, whitening, and more.",
        content: [
          "Look for toothpaste with the ADA Seal of Acceptance.",
          "For sensitive teeth, choose formulas with potassium nitrate or stannous fluoride.",
          "Whitening toothpastes help remove surface stains but won’t change natural tooth color.",
          "Ask your dentist for recommendations based on your oral health goals."
        ],
        author: "Dental Team",
        date: "2024-08-10",
        coverImage: "/placeholder-logo.png",
      },
      {
        slug: "dental-anxiety",
        title: "Managing Dental Anxiety",
        excerpt: "Tips to help you feel calm and confident at your dental visits.",
        content: [
          "Share your concerns with your dental team—they’re here to help.",
          "Practice deep breathing or listen to music during your appointment.",
          "Schedule visits at less busy times for a more relaxed experience.",
          "Consider sedation options for severe anxiety—ask your dentist about choices."
        ],
        author: "Dental Team",
        date: "2024-08-15",
        coverImage: "/confident-dentist-portrait.png",
      },
  ],
  jobs: [
    {
      id: "j1",
      title: "Dental Hygienist",
      location: "Denton, TX (On-site)",
      type: "Full-time",
      summary: "Provide preventive care, patient education, and support comfortable visits.",
      responsibilities: ["Prophylaxis and periodontal maintenance", "Digital X-rays", "Patient education"],
      requirements: ["Active hygiene license", "1+ years experience preferred", "Strong communication"],
      applyEmail: "careers@dentalclinic.com",
    },
    {
      id: "j2",
      title: "Front Desk Coordinator",
      location: "Denton, TX (On-site)",
      type: "Full-time",
      summary: "Welcome patients, manage schedules, and coordinate insurance/benefits.",
      responsibilities: ["Check-in/out", "Scheduling", "Insurance verification"],
      requirements: ["People-first mindset", "Organized and detail-oriented", "Experience with dental PMS a plus"],
      applyEmail: "careers@dentalclinic.com",
    },
    {
      id: "j3",
      title: "Associate Dentist",
      location: "Denton, TX (On-site)",
      type: "Full-time",
      summary: "Deliver high-quality restorative and cosmetic care in a modern practice.",
      responsibilities: ["Exams & treatment planning", "Restorative procedures", "Patient-centered communication"],
      requirements: ["DDS/DMD license", "2+ years clinical experience", "Commitment to compassionate care"],
      applyEmail: "careers@dentalclinic.com",
    },
  ],
  pages: [
    {
      slug: "privacy",
      title: "Privacy Policy",
      content: [
        "We respect your privacy and protect your personal health information.",
        "We collect only the data necessary to provide quality care and services.",
        "Contact us to request access, corrections, or deletion where applicable.",
      ],
    },
    {
      slug: "terms",
      title: "Terms of Service",
      content: [
        "Use of our website constitutes acceptance of these terms.",
        "Content is for informational purposes and not a substitute for professional advice.",
      ],
    },
    {
      slug: "code-of-conduct",
      title: "Code of Conduct",
      content: [
        "We foster a safe, respectful environment for patients and staff.",
        "Harassment or discrimination is not tolerated in any form.",
      ],
    },
    {
      slug: "cookies",
      title: "Cookie Policy",
      content: [
        "We use cookies to improve site performance and analyze traffic.",
        "You can control cookie preferences in your browser settings.",
      ],
    },
  ],
}

export async function getClinicData(): Promise<ClinicData> {
  await new Promise((r) => setTimeout(r, 50))
  return MOCK_DATA
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
