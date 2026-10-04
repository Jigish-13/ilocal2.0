import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { DemoForm } from '@/components/ui/DemoForm';
import { validateDemoRequest } from '@/lib/forms/schema';
afterEach(() => vi.unstubAllGlobals());
describe('business inquiry form', () => {
  it('rejects invalid input and unrecognized interests on the shared boundary', () => {
    expect(
      validateDemoRequest({ name: 'A', email: 'bad', organization: '', interest: 'unapproved' })
        .data,
    ).toBeUndefined();
    expect(Object.keys(validateDemoRequest({}).errors)).toEqual(['name', 'email', 'organization']);
  });
  it('trims valid fields and allows an optional interest', () => {
    expect(
      validateDemoRequest({
        name: ' Demo User ',
        email: ' demo@example.com ',
        organization: ' Example Pharmacy ',
      }).data,
    ).toEqual({
      name: 'Demo User',
      email: 'demo@example.com',
      organization: 'Example Pharmacy',
      interest: '',
    });
  });
  it('focuses the first invalid field and announces field errors', () => {
    render(<DemoForm />);
    fireEvent.click(screen.getByRole('button', { name: 'Book a Demo' }));
    expect(screen.getByLabelText(/Name/)).toHaveFocus();
    expect(screen.getByText('Enter a valid work email address.')).toBeVisible();
  });
  it('reports network failure without claiming a successful submission', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
    render(<DemoForm />);
    fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'Demo User' } });
    fireEvent.change(screen.getByLabelText(/Work Email/), {
      target: { value: 'demo@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Organization/), {
      target: { value: 'Example Pharmacy' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Book a Demo' }));
    await waitFor(() =>
      expect(screen.getByRole('alert')).toHaveTextContent('Your request has not been sent'),
    );
  });
});
