import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-32 px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Brand / About */}
        <div>
          <h2 className="text-4xl font-avallon text-[#a86b4c]">Flick</h2>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
            Building great web experiences, one pixel at a time.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-800 uppercase tracking-wide mb-3">
            Links
          </h3>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>
              <Link href="/" className="hover:text-neutral-900 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-neutral-900 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-neutral-900 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-neutral-900 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-800 uppercase tracking-wide mb-3">
            Social
          </h3>
          <ul className="flex space-x-6 text-neutral-600 text-sm">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900 transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900 transition"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900 transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="my-8 bg-neutral-200" />

      <div className="max-w-7xl mx-auto text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Flick. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
