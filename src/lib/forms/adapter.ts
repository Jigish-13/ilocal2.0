import 'server-only';
import type { DemoRequest } from './schema';
export interface SubmissionReceipt {
  mode: 'mock' | 'live';
  message: string;
}
export interface DemoSubmissionAdapter {
  submit(data: DemoRequest): Promise<SubmissionReceipt>;
}
/** Does not log, persist or forward any submitted personal information. */
export const mockAdapter: DemoSubmissionAdapter = {
  async submit() {
    return {
      mode: 'mock',
      message:
        'Demo form tested successfully. This is a local preview; no request was sent or saved.',
    };
  },
};
export class SubmissionNotConfiguredError extends Error {}
export function getDemoAdapter(): DemoSubmissionAdapter {
  if (process.env.NODE_ENV === 'development' || process.env.DEMO_FORM_MODE === 'mock')
    return mockAdapter;
  // TODO(launch): implement the selected CRM/email adapter, with server-side credentials,
  // durable rate limiting, consent/retention review, and delivery/idempotency handling.
  throw new SubmissionNotConfiguredError('Demo submission destination is not configured.');
}
export async function submitDemoRequest(data: DemoRequest) {
  return getDemoAdapter().submit(data);
}
