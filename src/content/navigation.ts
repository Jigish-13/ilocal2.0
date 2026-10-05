import { solutions } from './solutions';
import { audiences } from './audiences';
export interface NavItem {
  label: string;
  href: string;
  intro?: { label: string; headline: string; cta: string };
  children?: { label: string; href: string; description?: string }[];
}
export const navigation: NavItem[] = [
  {
    label: 'Platform',
    href: '/platform',
    intro: {
      label: 'The iLocal platform',
      headline: 'One platform behind every pharmacy-to-patient handoff.',
      cta: 'Explore Platform',
    },
    children: [
      {
        label: 'iLocal Cloud',
        href: '/platform#cloud',
        description: 'Fulfillment visibility, hardware signals and configured workflows.',
      },
      {
        label: 'Pharmacy Integrations',
        href: '/platform#workflow',
        description: 'Work alongside the pharmacy systems you already run.',
      },
      {
        label: 'Patient Experience',
        href: '/platform#patient-journey',
        description: 'Notifications, identity, payment, signature and consultation.',
      },
      {
        label: 'Staff Tools',
        href: '/platform#workflow',
        description: 'Assign, verify, hand off and reconcile.',
      },
      {
        label: 'Hardware',
        href: '/technology#hardware',
        description: 'Modular pickup hardware and refrigerated storage where supported.',
      },
      {
        label: 'Enterprise Readiness',
        href: '/technology#trust',
        description: 'Control, visibility and accountability.',
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    intro: {
      label: 'Five fulfillment experiences',
      headline: 'Every path from pharmacy to patient.',
      cta: 'Explore each path',
    },
    children: solutions.map((s) => ({
      label: s.name,
      href: `/solutions/${s.id}`,
      description: s.headline,
    })),
  },
  {
    label: 'Who We Serve',
    href: '/who-we-serve',
    children: audiences.map((a) => ({
      label: a.name,
      href: `/who-we-serve#${a.id}`,
      description: a.paths.join(' · '),
    })),
  },
  { label: 'Technology', href: '/technology' },
  { label: 'Resources', href: '/resources' },
];
export const loginHref = process.env.NEXT_PUBLIC_CUSTOMER_LOGIN_URL || '/customer-login';
