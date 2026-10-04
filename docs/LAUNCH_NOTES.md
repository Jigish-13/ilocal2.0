# Local scope and future launch configuration

The owner confirmed on 5 October 2026 that the public domain is undecided and the current focus is local development. None of the following prevents local review.

## Before a public launch

1. Set `NEXT_PUBLIC_SITE_URL` to the approved origin and rebuild. This controls canonical/OG URLs, JSON-LD, sitemap and robots. Localhost is deliberately noindex/disallowed.
2. Set `NEXT_PUBLIC_CUSTOMER_LOGIN_URL` to the business-approved portal. The fallback is a clear local-preview notice, not a guessed production login.
3. Supply approved Privacy and Terms, replace the local notices, and include their URLs in the public sitemap when ready. Confirm the Organization schema’s legal/business identity.
4. Implement a `DemoSubmissionAdapter` for the selected CRM/email destination. Keep credentials server-side. Add durable abuse controls/rate limits, delivery monitoring, retention/consent policy and idempotency suited to that destination. Leave `DEMO_FORM_MODE` unset in production. The current default fails closed.
5. Confirm hardware availability and site-specific workflow scope with the product team. The configurator is illustrative and does not validate engineering compatibility.
6. Reconcile the initial redirect matrix with the full legacy-site URL inventory. Preserve `/resources` and map historic subpages individually; do not redirect unknown stories to fabricated replacements.
7. Re-run browser, accessibility and performance checks on the actual deployed HTTPS origin. Confirm the real analytics/consent policy before adding tracking. No analytics scripts or third-party cookies are installed.

## Initial legacy redirects

| Legacy prefix           | Destination                    | Status |
| ----------------------- | ------------------------------ | ------ |
| `/industries/pharmacy/` | `/who-we-serve#retail`         | 301    |
| `/industries/hospital/` | `/who-we-serve#health-systems` | 301    |
| `/industries/employer/` | `/who-we-serve#employers`      | 301    |
| `/products/`            | `/technology#hardware`         | 301    |
| `/about/`               | `/company`                     | 301    |

`skipTrailingSlashRedirect` avoids an unnecessary automatic 308 before these 301s. Canonical metadata normalizes duplicate slash representations.

## Extending the implementation

Content changes belong in `src/content`. Add solution pages through the typed solution collection; the route generates static paths from it. Update the shared demo schema when adding an interest option. Keep any actual patient-facing product application separate from this marketing website.
