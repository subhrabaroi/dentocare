// Common interfaces used across the application

export interface Socials {
  linkedin?: string
  twitter?: string
  instagram?: string
}

export interface Doctor {
  id: string
  name: string
  specialty: string
  bio: string
  photoUrl?: string
  socials?: Socials
}

export interface Testimonial {
  id: string
  name: string
  role: string
  message: string
  rating: number
  avatar?: string
}

export interface Stat {
  value: string
  label: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
}

export interface HeroData {
  subtitle: string
}

export interface AboutData {
  description: string
  stats: Stat[]
}

// Form status types
export type FormStatus = "idle" | "loading" | "success" | "error"

// Re-export types from clinic-data for convenience
export type { ClinicData, Service, BlogPost } from "@/lib/clinic-data"
