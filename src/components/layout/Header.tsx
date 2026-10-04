'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { navigation, loginHref } from '@/content/navigation';
export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const mobilePanel = useRef<HTMLDialogElement>(null);
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
                      <span aria-hidden="true">⌄</span>
                    </button>
                    <div
                      id={`menu-${item.label.replaceAll(' ', '-')}`}
                      className="mega-menu"
                      hidden={open !== item.label}
                    >
                      <div className="mega-intro">
                        <p className="eyebrow">The iLocal platform</p>
                        <p>
                          Every path.
                          <br />
                          <em>Connected.</em>
                        </p>
                        <Link href={item.href} onClick={() => setOpen(null)}>
                          Explore {item.label} <span aria-hidden="true">↗</span>
                        </Link>
                      </div>
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.href + child.label}>
                            <Link href={child.href} onClick={() => setOpen(null)}>
                              <strong>{child.label}</strong>
                              {child.description && <span>{child.description}</span>}
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
            Customer Login <span aria-hidden="true">↗</span>
          </Link>
          <Link className="button button-small" href="/contact">
            Book a Demo <span aria-hidden="true">↗</span>
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
                    <Link key={child.href + child.label} href={child.href} onClick={closeMobile}>
                      {child.label}
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
