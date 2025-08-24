import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              D
            </span>
            <span className="font-semibold">Dental</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Compassionate dental care with cutting-edge technology.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/#about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#appointment" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Resources</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/code-of-conduct" className="text-muted-foreground hover:text-foreground">
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="text-muted-foreground hover:text-foreground">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/support" className="text-muted-foreground hover:text-foreground">
                Support
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-muted-foreground hover:text-foreground">
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-50 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dental Clinic. All rights reserved.
      </div>
    </footer>
  )
}
