import { solutions } from '@/content/solutions';
export interface DemoRequest {
  name: string;
  email: string;
  organization: string;
  interest: string;
}
export type DemoErrors = Partial<Record<keyof DemoRequest, string>>;
export const interestOptions = [
  'The iLocal Platform',
  ...solutions.map((s) => s.name),
  'Hardware',
  'Other',
];
export function validateDemoRequest(value: unknown): { data?: DemoRequest; errors: DemoErrors } {
  const input = value && typeof value === 'object' ? (value as Record<string, unknown>) : {};
  const read = (key: string) =>
    typeof input[key] === 'string' ? (input[key] as string).trim() : '';
  const data = {
    name: read('name'),
    email: read('email'),
    organization: read('organization'),
    interest: read('interest'),
  };
  const errors: DemoErrors = {};
  if (data.name.length < 2 || data.name.length > 100)
    errors.name = 'Enter your name (2–100 characters).';
  if (data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Enter a valid work email address.';
  if (data.organization.length < 2 || data.organization.length > 150)
    errors.organization = 'Enter your organization (2–150 characters).';
  if (data.interest && !interestOptions.includes(data.interest))
    errors.interest = 'Choose an area of interest from the list.';
  return Object.keys(errors).length ? { errors } : { data, errors };
}
