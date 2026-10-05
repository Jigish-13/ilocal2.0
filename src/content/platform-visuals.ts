/** Synthetic examples grounded in the supplied PRD; never patient records. */
export const pharmacySystems = [
  'Pharmacy management system',
  'Will-call / workflow',
  'Point of sale',
  'Staff routines',
];
export const platformCapabilities = [
  'Enrollment',
  'Notifications',
  'Identity',
  'Payment',
  'Consultation',
  'Custody',
  'Reporting',
];
export const cloudViews = [
  {
    name: 'Fulfillment Visibility',
    description: 'Follow readiness, custody and the next handoff across paths and locations.',
  },
  {
    name: 'Devices & Hardware',
    description: 'See connectivity, compartment availability and supported hardware signals.',
  },
  {
    name: 'Workflow Configuration',
    description: 'Bring patient preparation and arrival into your pharmacy’s workflow.',
  },
] as const;
export const fulfillmentExamples = [
  {
    path: 'Counter',
    location: 'Pharmacy counter',
    status: 'Assigned',
    detail: 'Awaiting stock & verification',
  },
  {
    path: 'Kiosk',
    location: 'Pickup location',
    status: 'Ready',
    detail: 'Patient notification step',
  },
  { path: 'Bedside', location: 'Hospital', status: 'In progress', detail: 'Runner handoff' },
  {
    path: 'Curbside',
    location: 'Arrival location',
    status: 'Complete',
    detail: 'Handoff recorded',
  },
  {
    path: 'Courier',
    location: 'Delivery route',
    status: 'In progress',
    detail: 'Custody transfer',
  },
] as const;
export const configuredSteps = [
  'Notifications',
  'Identity check',
  'Payment',
  'Signature',
  'Consultation',
  'Pickup / arrival',
  'Confirmation',
];
export const hardwareCapabilities = [
  {
    title: 'Modular expansion',
    text: 'Explore additional capacity alongside the main unit as the needs of the site evolve.',
  },
  {
    title: 'Mixed compartments',
    text: 'Plan storage around the pharmacy’s packaging and compartment requirements.',
  },
  {
    title: 'Refrigerated storage',
    text: 'Include temperature-controlled storage and visibility where supported.',
  },
  {
    title: 'Branded deployments',
    text: 'Discuss pharmacy identity and presentation as part of site planning.',
  },
] as const;
export interface ApprovedProductInterface {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  /** Populate only after privacy review of an approved sanitized staging image. */
  sanitizedStagingApproved: true;
}
export const approvedProductInterface: ApprovedProductInterface | null = null;
