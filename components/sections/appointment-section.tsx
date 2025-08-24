import { Card, CardContent } from "@/components/ui/card"
import { renderIcon } from "@/lib/icon-utils"
import { QueryForm } from "@/components/forms"
import type { SiteData } from "@/lib/data-service"

interface AppointmentSectionProps {
  appointment: SiteData['appointment']
}

export function AppointmentSection({ appointment }: AppointmentSectionProps) {
  const mapsQuery = encodeURIComponent(appointment.contact.address)
  const mapsHref = `https://www.google.com/maps?q=${mapsQuery}`

  return (
    <section id="appointment" className="w-full bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 px-4 py-12 lg:grid-cols-3">
        {/* Query form */}
        <div className="lg:col-span-2">
          <Card className="h-full min-h-[560px] border-0 shadow-sm">
            <CardContent className="flex h-full flex-col p-6">
              <h3 className="mb-1 text-2xl font-bold">{appointment.title}</h3>
              <p className="text-sm text-muted-foreground">{appointment.subtitle}</p>
              <div className="mt-4 flex min-h-0 flex-1">
                <QueryForm formConfig={appointment.form} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Merged Map + Quick Contact card */}
        <Card className="h-full min-h-[560px] overflow-hidden border-0 shadow-sm">
          <CardContent className="flex h-full flex-col p-0">
            <div className="relative">
              <iframe
                title="Dental Clinic Location"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                className="h-56 w-full pointer-events-none sm:h-64 lg:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay link so clicking map opens Google Maps */}
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Google Maps"
                className="absolute inset-0 z-10 cursor-pointer"
              />
            </div>
            <div className="p-6">
              <h4 className="mb-3 text-lg font-semibold">{appointment.contact.title}</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  {renderIcon("MapPin", { className: "mt-0.5 h-5 w-5 text-blue-600" })}
                  <div>
                    <div className="font-medium">{appointment.contact.address}</div>
                    <div className="text-sm text-muted-foreground">{appointment.contact.mapNote}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  {renderIcon("Phone", { className: "mt-0.5 h-5 w-5 text-blue-600" })}
                  <div>
                    <div className="font-medium">{appointment.contact.phone}</div>
                    <div className="text-sm text-muted-foreground">{appointment.contact.hours}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  {renderIcon("Mail", { className: "mt-0.5 h-5 w-5 text-blue-600" })}
                  <div>
                    <div className="font-medium">{appointment.contact.email}</div>
                    <div className="text-sm text-muted-foreground">{appointment.contact.responseTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
