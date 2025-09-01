"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isOpen, setIsOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    
    if (isHomePage) {
      // If on homepage, smooth scroll to section
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    } else {
      // If on other page, navigate to homepage with hash
      window.location.href = `/#${targetId}`
    }
    // Close mobile menu if open
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="w-full md:mx-auto flex h-full items-center justify-between gap-6 px-4 md:max-w-6xl">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
            D
          </span>
          <span className="font-semibold">Dental</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <a 
            href="/#about" 
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="text-sm text-muted-foreground hover:text-foreground cursor-pointer"
          >
            About
          </a>
          <a 
            href="/#services" 
            onClick={(e) => handleSmoothScroll(e, 'services')}
            className="text-sm text-muted-foreground hover:text-foreground cursor-pointer"
          >
            Services
          </a>
          <a 
            href="/#doctors" 
            onClick={(e) => handleSmoothScroll(e, 'doctors')}
            className="text-sm text-muted-foreground hover:text-foreground cursor-pointer"
          >
            Doctors
          </a>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
            Blog
          </Link>
          <a 
            href="/#pricing" 
            onClick={(e) => handleSmoothScroll(e, 'pricing')}
            className="text-sm text-muted-foreground hover:text-foreground cursor-pointer"
          >
            Pricing
          </a>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="h-auto p-6 bg-white">
            <SheetTitle className="sr-only">
              Navigation Menu
            </SheetTitle>
            <nav className="flex flex-col gap-6 pt-2 items-center">
                  <a 
                    href="/#about" 
                    onClick={(e) => handleSmoothScroll(e, 'about')}
                    className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors duration-200"
                  >
                    About
                  </a>
                  <a 
                    href="/#services" 
                    onClick={(e) => handleSmoothScroll(e, 'services')}
                    className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors duration-200"
                  >
                    Services
                  </a>
                  <a 
                    href="/#doctors" 
                    onClick={(e) => handleSmoothScroll(e, 'doctors')}
                    className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors duration-200"
                  >
                    Doctors
                  </a>
                  <Link 
                    href="/blog" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <a 
                    href="/#pricing" 
                    onClick={(e) => handleSmoothScroll(e, 'pricing')}
                    className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors duration-200"
                  >
                    Pricing
                  </a>
                  <div className="pt-4">
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <a 
                        href="/#appointment" 
                        onClick={(e) => handleSmoothScroll(e, 'appointment')}
                        className="cursor-pointer"
                      >
                        Contact Us
                      </a>
                    </Button>
                  </div>
                </nav>
            </SheetContent>
          </Sheet>

        {/* Desktop Contact Button */}
        <div className="ml-auto hidden md:block">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a 
              href="/#appointment" 
              onClick={(e) => handleSmoothScroll(e, 'appointment')}
              className="cursor-pointer"
            >
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
