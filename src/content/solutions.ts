export type SolutionId = 'kiosk' | 'counter' | 'curbside' | 'bedside' | 'courier';
export interface Solution {
  id: SolutionId;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  features: string[];
  note: string;
  color: string;
}
export const solutions: Solution[] = [
  {
    id: 'kiosk',
    name: 'Kiosk',
    shortName: 'Kiosk',
    headline: 'Open when the pharmacy isn’t.',
    description:
      'Bring pharmacy pickup into the rhythm of everyday life. Secure self-service hardware connects patients to the steps they need, even beyond counter hours.',
    features: [
      'Pickup code or QR verification',
      'Configured payment, signature and consultation',
      'Temperature-controlled storage where applicable',
    ],
    note: 'Access depends on site hours, configuration and required services.',
    color: '#8ca7ff',
  },
  {
    id: 'counter',
    name: 'Counter',
    shortName: 'Counter',
    headline: 'The counter, without the queue.',
    description:
      'Let patients prepare before they arrive. Connect payment, signatures and arrival with a staffed handoff—and keep the pharmacist part of the conversation.',
    features: [
      'Patient preparation on a mobile device',
      'Identity and bag verification',
      'Staffed pickup and pharmacist interaction',
    ],
    note: 'Digital preparation supports the counter workflow; wait times vary by pharmacy.',
    color: '#8bbbe8',
  },
  {
    id: 'curbside',
    name: 'Curbside',
    shortName: 'Curbside',
    headline: '“I’m here.” Two words. One handoff.',
    description:
      'A patient shares their arrival and vehicle details. Pharmacy staff see where to meet them, verify the order and bring medication to the car.',
    features: [
      'Arrival notification',
      'Parking location and vehicle details',
      'Staff verification and handoff',
    ],
    note: 'Curbside uses a pharmacy staff handoff, with site-specific pickup instructions.',
    color: '#46cbd4',
  },
  {
    id: 'bedside',
    name: 'Bedside / Meds-to-Beds',
    shortName: 'Bedside',
    headline: 'Discharged with medication in hand.',
    description:
      'Connect preparation in the pharmacy to delivery at the hospital room. Give the care team a coordinated path from ready to handed over.',
    features: [
      'Room information and patient preparation',
      'Runner collection and verification',
      'Delivery and completion records',
    ],
    note: 'Workflow availability and patient steps are configured for each pharmacy.',
    color: '#64c7a6',
  },
  {
    id: 'courier',
    name: 'Courier',
    shortName: 'Courier',
    headline: 'The last mile, accounted for.',
    description:
      'Keep local delivery connected to the pharmacy. Coordinate handoffs, maintain custody visibility and communicate with patients along the way.',
    features: ['Coordinated local delivery', 'Custody visibility', 'Patient communication'],
    note: 'Delivery arrangements and operational capabilities depend on the pharmacy’s configuration.',
    color: '#f0c052',
  },
];
