import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white">
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/clients">Clients</Link></li>
        <li><Link href="/work">Work</Link></li>
        <li><Link href="/statistics">Statistics</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
