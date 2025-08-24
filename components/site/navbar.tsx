"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
            D
          </span>
          <span className="font-semibold">Dental</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground">
            Services
          </Link>
          <Link href="/#doctors" className="text-sm text-muted-foreground hover:text-foreground">
            Doctors
          </Link>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
            Blog
          </Link>
          <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground">
            Pricing
          </Link>
        </nav>
        <div className="ml-auto">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/#appointment">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
