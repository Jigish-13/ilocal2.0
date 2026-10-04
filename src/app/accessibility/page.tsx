import { PageIntro } from '@/components/ui/PageIntro';
import { pageMetadata } from '@/lib/seo/metadata';
export const metadata = pageMetadata(
  'Website Accessibility',
  'Information about keyboard navigation, reduced motion and accessible interactions on the iLocal website.',
  '/accessibility',
);
export default function AccessibilityPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro
        label="Accessibility"
        title={
          <>
            A connection
            <br />
            <em>everyone can navigate.</em>
          </>
        }
        description="This website is designed toward WCAG 2.2 AA. This is a design and testing target, not a claim of certification."
        cta={false}
      />
      <div className="wrap prose-content">
        <h2>Using this website</h2>
        <ul>
          <li>Use the skip link to move directly to the main content.</li>
          <li>
            Navigate menus and forms with your keyboard. Escape closes an open navigation menu.
          </li>
          <li>Cloud tabs support Left/Right Arrow, Home and End keys.</li>
          <li>Route, journey, hardware and audience controls work without a mouse.</li>
          <li>Animations respect your device’s reduced-motion preference.</li>
          <li>Forms show field-specific errors and move focus to the first invalid field.</li>
        </ul>
        <p>
          Accessibility review is ongoing. The site does not require motion, audio or hover to
          access its content.
        </p>
      </div>
    </main>
  );
}
