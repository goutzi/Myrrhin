export interface MyrEvent {
  id: string
  title: string
  date: string          // ISO date: "2026-05-15"
  time: string          // e.g. "14:00 – 16:00 CET"
  location: string      // e.g. "Online" or "Athens, Greece"
  format: 'online' | 'in-person'
  description: string
}

export const events: MyrEvent[] = [
  {
    id: 'intro-webinar-mar-2026',
    title: 'Introduction to Maritime Commercial Operations',
    date: '2026-03-12',
    time: '10:00 – 12:00 CET',
    location: 'Online',
    format: 'online',
    description:
      'A free introductory webinar covering the fundamentals of commercial shipping operations, chartering basics, and the global trade landscape.',
  },
  {
    id: 'athens-workshop-apr-2026',
    title: 'Chartering Essentials Workshop',
    date: '2026-04-08',
    time: '09:00 – 17:00 EEST',
    location: 'Athens, Greece',
    format: 'in-person',
    description:
      'A full-day hands-on workshop on voyage and time chartering, covering fixture negotiations, laytime calculations, and demurrage.',
  },
  {
    id: 'port-logistics-may-2026',
    title: 'Port Logistics & Terminal Operations',
    date: '2026-05-20',
    time: '14:00 – 16:00 CET',
    location: 'Online',
    format: 'online',
    description:
      'Explore how modern ports operate — from vessel scheduling and berth allocation to container handling and hinterland logistics.',
  },
  {
    id: 'london-seminar-jun-2026',
    title: 'Maritime Law & Compliance Seminar',
    date: '2026-06-15',
    time: '10:00 – 16:00 BST',
    location: 'London, United Kingdom',
    format: 'in-person',
    description:
      'A seminar on key maritime regulations, ISM/ISPS compliance, and the legal frameworks governing international shipping.',
  },
  {
    id: 'dry-bulk-webinar-jul-2026',
    title: 'Dry Bulk Shipping: Market Dynamics',
    date: '2026-07-09',
    time: '15:00 – 17:00 CET',
    location: 'Online',
    format: 'online',
    description:
      'Understand the dry bulk market — from commodity flows and fleet supply to freight rate drivers and forward curves.',
  },
  {
    id: 'tanker-ops-sep-2026',
    title: 'Tanker Operations & Vetting',
    date: '2026-09-22',
    time: '09:00 – 13:00 EEST',
    location: 'Piraeus, Greece',
    format: 'in-person',
    description:
      'An in-depth session on tanker commercial operations, SIRE/CDI vetting inspections, and oil major approval processes.',
  },
  {
    id: 'shipping-finance-oct-2026',
    title: 'Shipping Finance & Investment',
    date: '2026-10-14',
    time: '11:00 – 13:00 CET',
    location: 'Online',
    format: 'online',
    description:
      'An overview of ship financing structures, sale-and-leaseback models, and how institutional investors evaluate maritime assets.',
  },
  {
    id: 'hamburg-conference-nov-2026',
    title: 'Future of Maritime Education Conference',
    date: '2026-11-18',
    time: '09:00 – 18:00 CET',
    location: 'Hamburg, Germany',
    format: 'in-person',
    description:
      'A full-day conference bringing together educators, operators, and technology providers to discuss the future of maritime professional training.',
  },
]

function todayISO(): string {
  return new Date().toISOString().slice(0, 10)
}

export function getUpcomingEvents(limit?: number): MyrEvent[] {
  const today = todayISO()
  const upcoming = events.filter((e) => e.date >= today)
  return limit ? upcoming.slice(0, limit) : upcoming
}

export function getPastEvents(): MyrEvent[] {
  const today = todayISO()
  return events.filter((e) => e.date < today).reverse()
}

export function getEventsForMonth(year: number, month: number): MyrEvent[] {
  const prefix = `${year}-${String(month).padStart(2, '0')}`
  return events.filter((e) => e.date.startsWith(prefix))
}
