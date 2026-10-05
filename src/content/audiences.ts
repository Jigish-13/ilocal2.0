export const audiences = [
  {
    id: 'health-systems',
    commonPaths: ['Bedside', 'Kiosk', 'Courier'],
    name: 'Health Systems',
    title: 'Connected care, beyond the counter.',
    description:
      'Connect outpatient, discharge and employee pharmacy experiences. Coordinate the handoff from the pharmacy to the hospital room, pickup location or patient.',
    paths: ['Outpatient pharmacy', 'Meds-to-Beds', 'Employee access'],
    visual: ['Pharmacy', 'Care team', 'Patient'],
  },
  {
    id: 'retail',
    commonPaths: ['Kiosk', 'Counter', 'Curbside', 'Courier'],
    name: 'Retail Pharmacy',
    title: 'Many locations. A connected experience.',
    description:
      'Coordinate fulfillment across locations, with visibility for staff and configurable experiences for patients. Bring pickup and delivery into one platform.',
    paths: ['Multi-location visibility', 'Flexible fulfillment', 'Configured workflows'],
    visual: ['Location A', 'iLocal', 'Location B'],
  },
  {
    id: 'community',
    commonPaths: ['Counter', 'Kiosk', 'Courier'],
    name: 'Independent & Community Pharmacy',
    title: 'Local care. A wider reach.',
    description:
      'Extend access and capability without building another pharmacy location. Give patients more ways to connect with the pharmacy they know.',
    paths: ['Extended access', 'Staffed pickup', 'Patient communication'],
    visual: ['Your pharmacy', 'More ways', 'Your community'],
  },
  {
    id: 'employers',
    commonPaths: ['Kiosk'],
    name: 'Employers & Organizations',
    title: 'Closer to where life happens.',
    description:
      'Bring prescription access closer to where people work, through a connected pharmacy and a pickup experience configured for the organization.',
    paths: ['Workplace access', 'Connected pharmacy', 'Convenient pickup'],
    visual: ['Pharmacy', 'Workplace', 'Patient'],
  },
] as const;
