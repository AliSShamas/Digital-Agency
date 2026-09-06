import {Link} from '@/i18n/navigation';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-lg font-bold">
            Our Agency
          </Link>

          <p className="mt-2 text-sm opacity-60">
            We build modern digital experiences.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          <Link href="/about" className="hover:underline">
            About
          </Link>

          <Link href="/services" className="hover:underline">
            Services
          </Link>

          <Link href="/blog" className="hover:underline">
            Blog
          </Link>

          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        <p className="text-sm opacity-60">
          © 2026 Our Agency
        </p>
      </div>
    </footer>
  );
}