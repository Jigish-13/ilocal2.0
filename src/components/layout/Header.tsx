'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { navigation, loginHref } from '@/content/navigation';
export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const mobilePanel = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    const close = (e: PointerEvent) => {
      if (!header.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);
  function closeMobile() {
    mobilePanel.current?.close();
    setMobile(false);
    toggle.current?.focus();
  }
  function toggleMobile() {
    if (mobile) closeMobile();
    else {
      mobilePanel.current?.showModal();
      setMobile(true);
    }
  }
  useEffect(() => {
    if (!mobile) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobile]);
  return (
    <header
      className="site-header"
      data-scrolled={scrolled}
      ref={header}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          const button = header.current?.querySelector<HTMLButtonElement>(`[data-menu="${open}"]`);
          setOpen(null);
          button?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(null);
      }}
    >
      <div className="header-inner wrap">
        <Link href="/" aria-label="iLocal home" className="brand">
          <Image src="/brand/ilocal-logo.png" width={841} height={351} alt="iLocal" preload />
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          <ul>
            {navigation.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      data-menu={item.label}
                      aria-expanded={open === item.label}
                      aria-controls={`menu-${item.label.replaceAll(' ', '-')}`}
                      onClick={() => setOpen(open === item.label ? null : item.label)}
                    >
                      {item.label}
                      <svg
                        className="nav-chevron"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        aria-hidden="true"
                      >
                        <path
                          d="m3 6 5 5 5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      id={`menu-${item.label.replaceAll(' ', '-')}`}
                      className={`mega-menu ${item.label === 'Who We Serve' ? 'mega-audiences' : ''}`}
                      hidden={open !== item.label}
                    >
                      {item.intro && (
                        <div className="mega-intro">
                          <p className="eyebrow">{item.intro.label}</p>
                          <p>{item.intro.headline}</p>
                          <Link href={item.href} onClick={() => setOpen(null)}>
                            {item.intro.cta} <span className="menu-connection" aria-hidden="true" />
                          </Link>
                        </div>
                      )}
                      <ul>
                        {item.children.map((child, index) => (
                          <li key={child.href + child.label}>
                            <Link href={child.href} onClick={() => setOpen(null)}>
                              <span
                                className={`menu-symbol menu-symbol-${index}`}
                                aria-hidden="true"
                              />
                              <div>
                                <strong>{child.label}</strong>
                                {child.description && <span>{child.description}</span>}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <Link className="login-link" href={loginHref}>
            Customer Login
          </Link>
          <Link className="button button-small" href="/contact">
            Book a Demo
          </Link>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label="Open navigation"
            aria-expanded={mobile}
            aria-controls="mobile-navigation"
            onClick={toggleMobile}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <dialog
        id="mobile-navigation"
        className="mobile-navigation"
        ref={mobilePanel}
        onCancel={() => setMobile(false)}
        onClose={() => setMobile(false)}
        aria-label="Navigation"
      >
        <div className="mobile-top">
          <Image src="/brand/ilocal-logo.png" width={120} height={50} alt="iLocal" />
          <button onClick={closeMobile} aria-label="Close navigation">
            Close ×
          </button>
        </div>
        <nav aria-label="Mobile primary">
          {navigation.map((item, i) => (
            <div className="mobile-nav-row" key={item.label}>
              <Link href={item.href} onClick={closeMobile}>
                <small>0{i + 1}</small>
                {item.label}
                <span aria-hidden="true">↗</span>
              </Link>
              {item.children && (
                <div className="mobile-subnav">
                  {item.children.map((child) => (
                    <Link
                      key={child.href + child.label}
                      aria-label={child.label}
                      href={child.href}
                      onClick={closeMobile}
                    >
                      {child.label}
                      {child.description && <small>{child.description}</small>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="mobile-bottom">
          <Link href="/contact" className="button" onClick={closeMobile}>
            Book a Demo ↗
          </Link>
          <Link href={loginHref} onClick={closeMobile}>
            Customer Login ↗
          </Link>
        </div>
      </dialog>
    </header>
  );
}
