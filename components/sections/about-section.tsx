import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Benefit } from "@/components/features";
import { renderIcon } from "@/lib/icon-utils";
import type { SiteData } from "@/lib/data-service";

interface AboutSectionProps {
  about: SiteData["about"];
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* About copy + benefits */}
          <Card className="overflow-hidden border-0 shadow-none">
            <CardContent className="p-6">
              <h3 className="mb-2 text-sm font-semibold text-blue-600 uppercase tracking-wide">
                {about.badge}
              </h3>
              <h2 className="text-3xl font-bold">{about.title}</h2>
              <p className="mt-3 text-muted-foreground">{about.description}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {about.benefits.map((benefit, index) => (
                  <Benefit
                    key={index}
                    icon={renderIcon(benefit.icon, {
                      className: "h-5 w-5 text-blue-600",
                    })}
                    title={benefit.title}
                    desc={benefit.description}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stats card with top image spanning card width (smaller and rounded) */}
          <Card className="overflow-visible border-0 shadow-none">
            <CardContent className="p-0">
              <div className="relative flex justify-center">
                <Image
                  src={about.image.src}
                  alt={about.image.alt}
                  width={about.image.width}
                  height={about.image.height}
                  className="h-48 w-full rounded-3xl object-cover sm:h-56"
                  priority
                  style={{ width: about.image.width }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 p-6">
                {about.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border p-5 text-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(59,130,246,0.03), rgba(16,185,129,0.03))",
                    }}
                  >
                    <div className="text-2xl font-extrabold text-blue-600">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
