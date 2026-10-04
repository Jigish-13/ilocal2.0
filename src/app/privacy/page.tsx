import { LocalNotice } from '@/components/ui/LocalNotice';
export const metadata = { title: 'Privacy | iLocal', robots: { index: false, follow: false } };
// TODO(launch): replace with company-approved privacy notice before collecting live inquiries.
export default function PrivacyPage() {
  return (
    <LocalNotice title="Privacy information">
      <p>
        This local preview does not connect the demo form to a CRM or save its submissions. Please
        use test contact details only.
      </p>
      <p>
        The company-approved privacy notice will be added before public launch and live inquiry
        collection.
      </p>
    </LocalNotice>
  );
}
