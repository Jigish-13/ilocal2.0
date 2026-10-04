import Image from 'next/image';
import Link from 'next/link';
import { navigation, loginHref } from '@/content/navigation';
export function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <p className="footer-tagline">
              The Pharmacy-to-<em>Patient</em> Platform.
            </p>
            <Link href="/contact" className="text-link">
              Let’s make a connection <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <nav aria-label="Footer">
            <div>
              {navigation.map((n) => (
                <Link href={n.href} key={n.label}>
                  {n.label}
                </Link>
              ))}
              <Link href="/company">Company</Link>
            </div>
            <div>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/accessibility">Accessibility</Link>
              <Link href="/contact">Contact</Link>
              <Link href={loginHref}>Customer Login ↗</Link>
            </div>
          </nav>
        </div>
        <div className="footer-brand">
          <Image
            src="/brand/ilocal-logo.png"
            width={841}
            height={351}
            alt="iLocal"
            sizes="(max-width:700px) 80vw, 650px"
          />
          <span>
            Every path.
            <br />
            One connection.
          </span>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} iLocal. All rights reserved.</span>
          <span>Pharmacy → iLocal → Patient</span>
        </div>
      </div>
    </footer>
  );
}
