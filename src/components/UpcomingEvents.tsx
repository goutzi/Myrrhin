'use client'

import Link from 'next/link'
import { getUpcomingEvents } from '@/data/events'

const MONTH_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

function formatDate(iso: string) {
  const [, m, d] = iso.split('-')
  return { month: MONTH_SHORT[Number(m) - 1], day: Number(d) }
}

export default function UpcomingEvents() {
  const upcoming = getUpcomingEvents(3)

  return (
    <div className="bg-white rounded-[20px] p-[44px_40px] shadow-[0_2px_40px_rgba(1,45,98,0.08),0_0_0_1px_rgba(1,45,98,0.06)] max-md:p-7">
      <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-orange mb-2">
        Upcoming Events
      </p>
      <h3 className="font-serif font-normal text-navy text-2xl mb-6">
        What&apos;s next.
      </h3>

      {upcoming.length === 0 ? (
        <p className="text-sm text-[#6a7a9a] leading-[1.65]">
          No upcoming events — check back soon.
        </p>
      ) : (
        <div className="flex flex-col">
          {upcoming.map((event, i) => {
            const { month, day } = formatDate(event.date)
            return (
              <div
                key={event.id}
                className={`flex items-start gap-4 py-4 ${
                  i !== upcoming.length - 1
                    ? 'border-b border-navy/[0.08]'
                    : ''
                }`}
              >
                {/* Date badge */}
                <div className="flex-shrink-0 w-[52px] h-[52px] rounded-xl bg-light flex flex-col items-center justify-center">
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-orange leading-none">
                    {month}
                  </span>
                  <span className="text-lg font-serif font-light text-navy leading-none mt-0.5">
                    {day}
                  </span>
                </div>

                {/* Event info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-navy leading-snug mb-1 truncate">
                    {event.title}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#6a7a9a]">
                    <span
                      className={`inline-block w-1.5 h-1.5 rounded-full ${
                        event.format === 'in-person'
                          ? 'bg-orange'
                          : 'bg-ocean'
                      }`}
                    />
                    <span>{event.time}</span>
                    <span className="text-navy/20">|</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <Link
        href="/events"
        className="inline-flex items-center gap-2 text-sm text-ocean font-medium mt-6 transition-all hover:gap-3"
      >
        See all events
        <span className="text-orange">→</span>
      </Link>
    </div>
  )
}
