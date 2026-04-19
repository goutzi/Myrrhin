export interface MyrEvent {
  id: string
  title: string
  date: string          // ISO date: "2026-05-15"
  time: string          // e.g. "10:00 – 12:00 EEST"
  location: string      // e.g. "Online" or "Athens, Greece"
  format: 'online' | 'in-person'
  description: string
  registrationUrl: string
}

export const events: MyrEvent[] = [
  {
    id: 'intro-maritime-apr-2026',
    title: 'Careers in Maritime Shipping | An Introduction',
    date: '2026-04-24',
    time: '10:00 – 12:00 EEST',
    location: 'TBD',
    format: 'in-person',
    description:
      'An introductory session exploring career paths in the maritime shipping industry — from commercial operations and chartering to port logistics and ship management.',
    registrationUrl:
      'https://www.eventbrite.com/e/myrrhin-intro-to-maritime-shipping-tickets-1987780983431?aff=oddtdtcreator',
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
