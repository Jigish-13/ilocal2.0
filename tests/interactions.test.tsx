import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CloudExperience } from '@/components/home/CloudExperience';
import { HardwareConfigurator } from '@/components/home/HardwareConfigurator';
import { AudienceAccordion } from '@/components/home/AudienceAccordion';
vi.mock('next/image', () => ({
  default: ({ alt }: { alt: string }) => <span role="img" aria-label={alt} />,
}));
describe('homepage interactions', () => {
  it('moves between Cloud tabs with arrows and Home', () => {
    render(<CloudExperience />);
    const first = screen.getByRole('tab', { name: 'Fulfillment tracking' });
    fireEvent.keyDown(first, { key: 'ArrowRight' });
    expect(screen.getByRole('tab', { name: 'Custody & verification' })).toHaveFocus();
    expect(screen.getByText('Pharmacy verification recorded')).toBeVisible();
    fireEvent.keyDown(screen.getByRole('tab', { name: 'Custody & verification' }), { key: 'Home' });
    expect(first).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(first, { key: 'End' });
    const last = screen.getByRole('tab', { name: 'Workflow configuration' });
    expect(last).toHaveFocus();
    expect(screen.getByText('Your workflow.')).toBeVisible();
    fireEvent.keyDown(last, { key: 'ArrowRight' });
    expect(first).toHaveFocus();
  });
  it('adds and removes authentic optional modules while retaining the main unit', () => {
    render(<HardwareConfigurator />);
    const expansion = screen.getByRole('button', { name: /Expansion/ });
    fireEvent.click(expansion);
    expect(expansion).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('img', { name: /expansion hardware/ })).toBeVisible();
    fireEvent.click(expansion);
    expect(screen.queryByRole('img', { name: /expansion hardware/ })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Main Unit/ }));
    expect(screen.getByRole('img', { name: /main unit hardware/ })).toBeVisible();
  });
  it('opens audience details and supports collapsing them', () => {
    render(<AudienceAccordion />);
    const retail = screen.getByRole('button', { name: /Retail Pharmacy/ });
    fireEvent.click(retail);
    expect(retail).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: /Health Systems/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(screen.getByRole('link', { name: /Explore Retail Pharmacy/ })).toBeVisible();
    fireEvent.click(retail);
    expect(retail).toHaveAttribute('aria-expanded', 'false');
  });
});
