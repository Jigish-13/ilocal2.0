import { LocalNotice } from '@/components/ui/LocalNotice';
export const metadata = { title: 'Terms | iLocal', robots: { index: false, follow: false } };
// TODO(launch): replace this development notice with approved website terms.
export default function TermsPage() {
  return (
    <LocalNotice title="Website terms">
      <p>
        This website is a local development preview. Company-approved website terms have not yet
        been supplied.
      </p>
      <p>
        Illustrative interfaces and configurations demonstrate concepts. Availability and
        implementation details need to be confirmed with iLocal.
      </p>
    </LocalNotice>
  );
}
