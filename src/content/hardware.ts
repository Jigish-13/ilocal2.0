export const hardware = [
  {
    id: 'main',
    name: 'Main Unit',
    image: '/hardware/main.png',
    description:
      'The starting point: a patient interface and secure pickup compartments in one main unit.',
  },
  {
    id: 'expansion',
    name: 'Expansion',
    image: '/hardware/expansion.png',
    description: 'Add storage alongside the main unit as the needs of your location evolve.',
  },
  {
    id: 'high-density',
    name: 'High Density',
    image: '/hardware/high-density.png',
    description: 'Explore a compartment configuration designed for higher-density storage.',
  },
  {
    id: 'refrigerated',
    name: 'Refrigerated',
    image: '/hardware/refrigerated.png',
    description:
      'Include temperature-controlled storage where the pharmacy’s workflow requires it.',
  },
] as const;
export type HardwareId = (typeof hardware)[number]['id'];
