import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { renderIcon } from "@/lib/icon-utils"
import type { SiteData } from "@/lib/data-service"

interface DoctorsSectionProps {
  doctors: SiteData['doctors']
}

export function DoctorsSection({ doctors }: DoctorsSectionProps) {
  return (
    <section id="doctors" className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{doctors.title}</h2>
          <p className="mt-2 text-muted-foreground">{doctors.subtitle}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.items.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden">
              <CardContent className="flex flex-col items-center p-6">
                <Image
                  src={doctor.photoUrl || "/placeholder.svg?height=120&width=120&query=doctor%20portrait%20headshot"}
                  alt={doctor.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
                <div className="mt-4 text-center">
                  <div className="font-semibold">{doctor.name}</div>
                  <div className="text-sm text-muted-foreground">{doctor.specialty}</div>
                </div>
                <p className="mt-3 text-center text-sm text-muted-foreground">{doctor.bio}</p>
                <div className="mt-4 flex items-center gap-3">
                  {doctor.socials?.linkedin && (
                    <a href={doctor.socials.linkedin} aria-label="LinkedIn" className="text-blue-600 hover:opacity-80">
                      {renderIcon("Linkedin", { className: "h-5 w-5" })}
                    </a>
                  )}
                  {doctor.socials?.twitter && (
                    <a href={doctor.socials.twitter} aria-label="Twitter" className="text-blue-600 hover:opacity-80">
                      {renderIcon("Twitter", { className: "h-5 w-5" })}
                    </a>
                  )}
                  {doctor.socials?.instagram && (
                    <a href={doctor.socials.instagram} aria-label="Instagram" className="text-blue-600 hover:opacity-80">
                      {renderIcon("Instagram", { className: "h-5 w-5" })}
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
