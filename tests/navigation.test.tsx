import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Header } from '@/components/layout/Header';
vi.mock('next/image', () => ({
  default: ({ alt }: { alt: string }) => <span role="img" aria-label={alt} />,
}));
describe('navigation', () => {
  it('opens a menu and returns focus to its trigger on Escape', () => {
    render(<Header />);
    const button = screen.getByRole('button', { name: 'Platform' });
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('link', { name: /Pharmacy Integrations Alongside/ })).toBeVisible();
    fireEvent.keyDown(button, { key: 'Escape' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveFocus();
  });
  it('closes the previous menu when another is opened', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'Platform' }));
    fireEvent.click(screen.getByRole('button', { name: 'Solutions' }));
    expect(screen.getByRole('button', { name: 'Platform' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(screen.getByRole('button', { name: 'Solutions' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });
});
