import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="py-10 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-5xl font-avallon">Flick</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Building great web experiences, one pixel at a time.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-medium mb-2">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/projects" className="hover:underline">Projects</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-medium mb-2">Social</h3>
          <ul className="flex space-x-4">
            <li><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white">GitHub</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-white">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <Separator className="my-6 bg-neutral-700" />

      <div className="max-w-7xl mx-auto text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
