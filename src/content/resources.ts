export const resources = [
  {
    id: 'fulfillment',
    title: 'Choosing a fulfillment experience',
    intro: 'Start with the handoff your patients need and the way your pharmacy operates.',
    points: [
      'Kiosk supports self-service pickup with configured identity, payment, signature and consultation steps.',
      'Counter connects patient preparation with a staffed pharmacy handoff.',
      'Curbside brings arrival and vehicle details into a staff-delivered handoff.',
      'Bedside connects the pharmacy, runner and patient room before discharge.',
      'Courier extends fulfillment beyond an in-person pharmacy visit.',
    ],
    link: '/solutions',
    linkLabel: 'Explore all five experiences',
  },
  {
    id: 'patient-experience',
    title: 'Understanding the configurable patient journey',
    intro: 'Patient steps are building blocks, not a universal script.',
    points: [
      'A notification can connect the patient to the next steps for an order.',
      'Identity, payment, signature and pharmacist consultation depend on pharmacy configuration and order requirements.',
      'Arrival or delivery instructions connect digital preparation to the final handoff.',
      'The sequence and available options vary by pharmacy, location and fulfillment method.',
    ],
    link: '/platform#patient-journey',
    linkLabel: 'Explore the patient journey',
  },
  {
    id: 'planning',
    title: 'Planning a conversation with iLocal',
    intro: 'A few details help frame the right pharmacy-to-patient experience.',
    points: [
      'Which patients and locations do you serve?',
      'Which fulfillment experiences do you offer today, and which do you want to explore?',
      'How do staff assign, stock, verify and hand over orders?',
      'Which existing systems and site requirements will shape the implementation?',
      'What patient steps and hardware configuration are appropriate for each location?',
    ],
    link: '/contact',
    linkLabel: 'Book a Demo',
  },
] as const;
