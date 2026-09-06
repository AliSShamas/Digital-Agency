import {Link} from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Our Agency
        </Link>

        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm hover:underline">
              Home
            </Link>

            <Link href="/about" className="text-sm hover:underline">
              About
            </Link>

            <Link href="/services" className="text-sm hover:underline">
              Services
            </Link>

            <Link href="/blog" className="text-sm hover:underline">
              Blog
            </Link>

            <Link href="/contact" className="text-sm hover:underline">
              Contact
            </Link>
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}