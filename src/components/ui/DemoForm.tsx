'use client';
import { useRef, useState, type FormEvent } from 'react';
import { interestOptions, validateDemoRequest, type DemoErrors } from '@/lib/forms/schema';
export function DemoForm() {
  const [errors, setErrors] = useState<DemoErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);
  const result = useRef<HTMLDivElement>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;
    const parsed = validateDemoRequest(Object.fromEntries(new FormData(event.currentTarget)));
    setErrors(parsed.errors);
    if (!parsed.data) {
      const first = Object.keys(parsed.errors)[0];
      form.current?.querySelector<HTMLInputElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus('submitting');
    setMessage('');
    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
        signal: AbortSignal.timeout(15000),
      });
      const body = await response.json();
      if (!response.ok) {
        setErrors(body.errors || {});
        setStatus('error');
        setMessage(body.message || 'We couldn’t submit the form. Please try again.');
      } else {
        setStatus('success');
        setMessage(body.message);
        form.current?.reset();
      }
      requestAnimationFrame(() => result.current?.focus());
    } catch {
      setStatus('error');
      setMessage('We couldn’t connect. Your request has not been sent. Please try again.');
      requestAnimationFrame(() => result.current?.focus());
    }
  }
  return (
    <form ref={form} onSubmit={submit} noValidate className="demo-form" aria-label="Book a Demo">
      <h3>Let’s make a connection.</h3>
      <p className="form-intro">Tell us a little about your organization.</p>
      {(['name', 'email', 'organization'] as const).map((field) => (
        <div className="form-field" key={field}>
          <label htmlFor={`demo-${field}`}>
            {field === 'name' ? 'Name' : field === 'email' ? 'Work Email' : 'Organization'}{' '}
            <span aria-hidden="true">*</span>
          </label>
          <input
            id={`demo-${field}`}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            autoComplete={field === 'name' ? 'name' : field === 'email' ? 'email' : 'organization'}
            required
            maxLength={field === 'email' ? 254 : field === 'name' ? 100 : 150}
            aria-invalid={!!errors[field]}
            aria-describedby={errors[field] ? `${field}-error` : undefined}
          />
          {errors[field] && (
            <p id={`${field}-error`} className="field-error">
              {errors[field]}
            </p>
          )}
        </div>
      ))}
      <div className="form-field">
        <label htmlFor="demo-interest">
          Area of Interest <span className="optional">(optional)</span>
        </label>
        <select
          id="demo-interest"
          name="interest"
          aria-invalid={!!errors.interest}
          aria-describedby={errors.interest ? 'interest-error' : undefined}
        >
          <option value="">Select an area</option>
          {interestOptions.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
        {errors.interest && (
          <p id="interest-error" className="field-error">
            {errors.interest}
          </p>
        )}
      </div>
      <p className="form-safety">
        For business inquiries only. Please do not submit patient or prescription information.
      </p>
      <button className="button form-submit" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting…' : 'Book a Demo'}
        <span aria-hidden="true">↗</span>
      </button>
      <div
        ref={result}
        role={status === 'error' ? 'alert' : 'status'}
        tabIndex={-1}
        className={`form-result ${status === 'error' ? 'form-error' : ''}`}
      >
        {message}
      </div>
    </form>
  );
}
