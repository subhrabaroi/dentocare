import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { SiteData } from "@/lib/data-service"

interface TestimonialsSectionProps {
  testimonials: SiteData['testimonials']
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="reviews" className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{testimonials.title}</h2>
          <p className="mt-2 text-muted-foreground">{testimonials.subtitle}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.slice(0, 3).map((testimonial) => (
            <Card key={testimonial.id} className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg?height=48&width=48&query=patient%20avatar"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{testimonial.message}</p>
                <div className="mt-3 text-sm font-medium text-blue-600">
                  {"★".repeat(testimonial.rating)} <span className="text-muted-foreground">({testimonial.rating}.0)</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href={testimonials.viewAllLink} className="cursor-pointer text-sm font-medium text-blue-600 hover:underline">
            {testimonials.viewAllText}
          </Link>
        </div>
      </div>
    </section>
  )
}
