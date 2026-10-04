import { solutions } from './solutions';
import { audiences } from './audiences';
export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}
export const navigation: NavItem[] = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      {
        label: 'iLocal Platform / Cloud',
        href: '/platform',
        description: 'One connecting layer for every handoff.',
      },
      {
        label: 'Pharmacy Integrations',
        href: '/platform#workflow',
        description: 'Alongside your existing systems.',
      },
      {
        label: 'Patient Experience',
        href: '/platform#patient-journey',
        description: 'A journey configured for your pharmacy.',
      },
      {
        label: 'Staff Tools',
        href: '/platform#workflow',
        description: 'Assign, verify, hand off and reconcile.',
      },
      { label: 'Hardware', href: '/technology#hardware', description: 'Modular by design.' },
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
    children: solutions.map((s) => ({
      label: s.name,
      href: `/solutions/${s.id}`,
      description: s.headline,
    })),
  },
  {
    label: 'Who We Serve',
    href: '/who-we-serve',
    children: audiences.map((a) => ({ label: a.name, href: `/who-we-serve#${a.id}` })),
  },
  { label: 'Technology', href: '/technology' },
  { label: 'Resources', href: '/resources' },
];
export const loginHref = process.env.NEXT_PUBLIC_CUSTOMER_LOGIN_URL || '/customer-login';
