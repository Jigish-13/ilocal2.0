export const patientJourney = [
  {
    id: 'notification',
    title: 'Notification',
    description:
      'A timely message connects the patient to the pharmacy and the next steps for their order.',
    phoneTitle: 'Your pharmacy is ready.',
    phoneCopy: 'Your order is ready for the next step. See the details from your pharmacy.',
    action: 'View my next steps',
    symbol: '↗',
  },
  {
    id: 'identity',
    title: 'Identity',
    description: 'Configured identity checks help connect the right patient with the right order.',
    phoneTitle: 'Let’s make sure it’s you.',
    phoneCopy: 'Complete the identity check requested by your pharmacy.',
    action: 'Continue securely',
    symbol: '◎',
  },
  {
    id: 'payment',
    title: 'Payment',
    description:
      'When payment is required, patients can complete it as part of their configured experience.',
    phoneTitle: 'One less thing on arrival.',
    phoneCopy: 'Review your order and complete payment when required.',
    action: 'Review payment',
    symbol: '✓',
  },
  {
    id: 'signature',
    title: 'Signature',
    description:
      'Collect required acknowledgments and signatures as part of the patient’s journey.',
    phoneTitle: 'Acknowledge. Sign. Continue.',
    phoneCopy: 'Review the information your pharmacy needs you to acknowledge.',
    action: 'Review and sign',
    symbol: '✎',
  },
  {
    id: 'consultation',
    title: 'Pharmacist Consultation',
    description:
      'Connect with a pharmacist when consultation is required or available in the pharmacy’s workflow.',
    phoneTitle: 'A conversation that matters.',
    phoneCopy: 'Connect with your pharmacy for guidance about your medication.',
    action: 'Consultation steps',
    symbol: '◌',
  },
  {
    id: 'handoff',
    title: 'Arrival / Handoff',
    description:
      'A pickup code, arrival message or delivery handoff connects the digital preparation to the physical moment.',
    phoneTitle: 'Ready for the handoff.',
    phoneCopy: 'Follow the pickup or delivery instructions from your pharmacy.',
    action: 'View handoff details',
    symbol: '↗',
  },
  {
    id: 'confirmation',
    title: 'Confirmation',
    description: 'Close the loop with confirmation and receipts where configured.',
    phoneTitle: 'All connected. All set.',
    phoneCopy: 'Your handoff is complete. View the confirmation from your pharmacy.',
    action: 'View confirmation',
    symbol: '✓',
  },
] as const;
