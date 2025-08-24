import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { renderIcon } from "@/lib/icon-utils"
import type { SiteData } from "@/lib/data-service"

interface ServicesSectionProps {
  services: SiteData['services']
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{services.title}</h2>
          <p className="mt-2 text-muted-foreground">{services.description}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => (
            <Card key={service.slug} className="flex h-full flex-col transition hover:shadow-md">
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-50 p-3">
                    {renderIcon(service.icon, { className: "h-6 w-6 text-blue-600" })}
                  </div>
                  <div>
                    <div className="font-semibold">{service.title}</div>
                    <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">{service.description}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-2 inline-block text-sm font-medium text-blue-600 hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
