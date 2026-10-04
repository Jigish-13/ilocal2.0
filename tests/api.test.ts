import { afterEach, describe, expect, it, vi } from 'vitest';
vi.mock('server-only', () => ({}));
import { POST } from '@/app/api/demo/route';
import { getDemoAdapter, SubmissionNotConfiguredError } from '@/lib/forms/adapter';
const payload = {
  name: 'Demo User',
  email: 'demo@example.com',
  organization: 'Example Pharmacy',
  interest: 'Kiosk',
};
const req = (body: unknown, origin = 'http://127.0.0.1:3002') =>
  new Request('http://localhost:3002/api/demo', {
    method: 'POST',
    headers: { 'content-type': 'application/json', host: '127.0.0.1:3002', origin },
    body: JSON.stringify(body),
  });
afterEach(() => vi.unstubAllEnvs());
describe('demo submission boundary', () => {
  it('accepts the same-origin local mock without retaining contact details', async () => {
    vi.stubEnv('DEMO_FORM_MODE', 'mock');
    const response = await POST(req(payload));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      mode: 'mock',
      message: expect.stringContaining('no request was sent or saved'),
    });
  });
  it('rejects cross-origin and invalid submissions before the adapter', async () => {
    expect((await POST(req(payload, 'https://unrelated.example'))).status).toBe(403);
    expect((await POST(req({}))).status).toBe(400);
  });
  it('bounds payload size even without a content-length header', async () => {
    expect((await POST(req({ ...payload, name: 'a'.repeat(9000) }))).status).toBe(413);
  });
  it('fails closed for an unconfigured production adapter', () => {
    vi.stubEnv('NODE_ENV', 'production');
    vi.stubEnv('DEMO_FORM_MODE', '');
    expect(() => getDemoAdapter()).toThrow(SubmissionNotConfiguredError);
  });
});
