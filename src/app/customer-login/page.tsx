import { LocalNotice } from '@/components/ui/LocalNotice';
export const metadata = {
  title: 'Customer Login | iLocal',
  robots: { index: false, follow: false },
};
export default function LoginPage() {
  return (
    <LocalNotice title="Customer Login">
      <p>The customer-login destination has not been connected in this local preview.</p>
      <p>
        Existing customers should continue to use the portal address supplied by their organization.
      </p>
    </LocalNotice>
  );
}
