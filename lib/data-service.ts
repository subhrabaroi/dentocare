import data from '@/data.json'

// Type definitions for the data structure
export interface SiteData {
  site: {
    name: string
    description: string
    logo: string
    favicon: string
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    ctaPrimary: {
      text: string
      link: string
    }
    ctaSecondary: {
      text: string
      icon: string
      link: string
    }
    image: {
      src: string
      alt: string
      width: number
      height: number
    }
    features: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  about: {
    badge: string
    title: string
    description: string
    image: {
      src: string
      alt: string
      width: number
      height: number
    }
    stats: Array<{
      value: string
      label: string
    }>
    benefits: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  services: {
    title: string
    subtitle: string
    description: string
    items: Array<{
      id: string
      title: string
      description: string
      icon: string
      image: string
      slug: string
      features: string[]
    }>
  }
  appointment: {
    title: string
    subtitle: string
    form: {
      fields: Array<{
        name: string
        label: string
        type: string
        required: boolean
        placeholder: string
        min?: number
        max?: number
      }>
      submitText: string
      loadingText: string
      successText: string
      errorText: string
    }
    contact: {
      title: string
      address: string
      phone: string
      email: string
      hours: string
      responseTime: string
      mapNote: string
    }
  }
  doctors: {
    title: string
    subtitle: string
    items: Array<{
      id: string
      name: string
      specialty: string
      bio: string
      photoUrl: string
      education: string
      experience: string
      socials?: {
        linkedin?: string
        twitter?: string
        instagram?: string
      }
    }>
  }
  blog: {
    title: string
    subtitle: string
    viewAllText: string
    viewAllLink: string
    posts: Array<{
      id: string
      title: string
      excerpt: string
      content: string
      date: string
      author: string
      category: string
      tags: string[]
      coverImage: string
      slug: string
      readTime: string
    }>
  }
  testimonials: {
    title: string
    subtitle: string
    viewAllText: string
    viewAllLink: string
    items: Array<{
      id: string
      name: string
      role: string
      message: string
      rating: number
      avatar: string
      date: string
      service: string
    }>
  }
  footer: {
    description: string
    quickLinks: Array<{
      title: string
      links: Array<{
        text: string
        url: string
      }>
    }>
    contact: {
      address: string
      phone: string
      email: string
      hours: string
    }
    social: Array<{
      platform: string
      url: string
      icon: string
    }>
    legal: Array<{
      text: string
      url: string
    }>
    copyright: string
  }
  navigation: {
    main: Array<{
      text: string
      url: string
    }>
    cta: {
      text: string
      url: string
    }
  }
  seo: {
    title: string
    description: string
    keywords: string
    ogImage: string
    canonical: string
  }
}

// Data service class
export class DataService {
  private static instance: DataService
  private data: SiteData

  private constructor() {
    this.data = data as SiteData
  }

  public static getInstance(): DataService {
    if (!DataService.instance) {
      DataService.instance = new DataService()
    }
    return DataService.instance
  }

  // Get all data
  public getAllData(): SiteData {
    return this.data
  }

  // Get specific sections
  public getHero() {
    return this.data.hero
  }

  public getAbout() {
    return this.data.about
  }

  public getServices() {
    return this.data.services
  }

  public getAppointment() {
    return this.data.appointment
  }

  public getDoctors() {
    return this.data.doctors
  }

  public getBlog() {
    return this.data.blog
  }

  public getTestimonials() {
    return this.data.testimonials
  }

  public getFooter() {
    return this.data.footer
  }

  public getNavigation() {
    return this.data.navigation
  }

  public getSEO() {
    return this.data.seo
  }

  public getSite() {
    return this.data.site
  }

  // Get specific items
  public getServiceBySlug(slug: string) {
    return this.data.services.items.find(service => service.slug === slug)
  }

  public getDoctorById(id: string) {
    return this.data.doctors.items.find(doctor => doctor.id === id)
  }

  public getBlogPostBySlug(slug: string) {
    return this.data.blog.posts.find(post => post.slug === slug)
  }

  public getTestimonialById(id: string) {
    return this.data.testimonials.items.find(testimonial => testimonial.id === id)
  }

  // Get limited items
  public getRecentBlogPosts(limit: number = 3) {
    return this.data.blog.posts.slice(0, limit)
  }

  public getFeaturedTestimonials(limit: number = 3) {
    return this.data.testimonials.items.slice(0, limit)
  }

  // Search functionality
  public searchServices(query: string) {
    const lowercaseQuery = query.toLowerCase()
    return this.data.services.items.filter(service =>
      service.title.toLowerCase().includes(lowercaseQuery) ||
      service.description.toLowerCase().includes(lowercaseQuery)
    )
  }

  public searchBlogPosts(query: string) {
    const lowercaseQuery = query.toLowerCase()
    return this.data.blog.posts.filter(post =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  }

  // Filter functionality
  public getServicesByCategory(category: string) {
    // This could be extended if you add categories to services
    return this.data.services.items
  }

  public getBlogPostsByCategory(category: string) {
    return this.data.blog.posts.filter(post => post.category === category)
  }

  public getBlogPostsByTag(tag: string) {
    return this.data.blog.posts.filter(post => 
      post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
    )
  }
}

// Export singleton instance
export const dataService = DataService.getInstance()

// Convenience functions for backward compatibility
export const getClinicData = () => dataService.getAllData()
export const getAllServices = () => dataService.getServices().items
export const getAllBlogPosts = () => dataService.getBlog().posts
export const getAllDoctors = () => dataService.getDoctors().items
export const getAllTestimonials = () => dataService.getTestimonials().items

// Export types for use in components

