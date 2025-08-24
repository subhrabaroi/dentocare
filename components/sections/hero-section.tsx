"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeaturePill } from "@/components/features/feature-pill"
import { renderIcon } from "@/lib/icon-utils"
import type { SiteData } from "@/lib/data-service"

interface HeroSectionProps {
  hero: SiteData['hero']
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16 lg:gap-16">
        <div>
          <div className="mb-3 text-sm font-semibold text-blue-600">{hero.badge}</div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {hero.title.split(hero.titleHighlight).map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && (
                  <span className="text-blue-600">{hero.titleHighlight}</span>
                )}
              </span>
            ))}
          </h1>
          <p className="mt-4 max-w-prose text-muted-foreground">{hero.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button size="lg" className="cursor-pointer bg-blue-600 hover:bg-blue-700" asChild>
              <Link href={hero.ctaPrimary.link}>{hero.ctaPrimary.text}</Link>
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer gap-2 bg-transparent" asChild>
              <Link href={hero.ctaSecondary.link}>
                {renderIcon(hero.ctaSecondary.icon, { className: "h-5 w-5 text-blue-600" })}
                {hero.ctaSecondary.text}
              </Link>
            </Button>
          </div>

          {/* Clean feature strip – TWO cards */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {hero.features.map((feature, index) => (
              <FeaturePill
                key={index}
                icon={renderIcon(feature.icon, { className: "h-5 w-5 text-blue-600" })}
                title={feature.title}
                desc={feature.description}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex max-w-md items-end justify-center">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-blue-50" />
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            className="rounded-3xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
