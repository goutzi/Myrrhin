'use client'

import { useState } from 'react'
import { getUpcomingEvents, getPastEvents, type MyrEvent } from '@/data/events'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function parseDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return {
    day: d,
    month: MONTH_NAMES[m - 1],
    year: y,
    monthShort: MONTH_NAMES[m - 1].slice(0, 3).toUpperCase(),
  }
}

function EventCard({ event, isPast }: { event: MyrEvent; isPast?: boolean }) {
  const { day, monthShort, year } = parseDate(event.date)

  return (
    <div
      id={`event-${event.date}`}
      className={`flex gap-7 p-7 rounded-[20px] border border-navy/[0.08] items-start transition-all duration-[250ms] hover:border-navy/[0.16] hover:shadow-[0_8px_40px_rgba(1,45,98,0.08)] max-md:flex-col max-md:gap-4 max-md:p-5 ${
        isPast ? 'opacity-70' : ''
      }`}
    >
      {/* Date block */}
      <div className="flex-shrink-0 w-[80px] text-center max-md:text-left max-md:w-auto max-md:flex max-md:items-baseline max-md:gap-2">
        <div className="font-serif font-light text-navy text-[2rem] leading-none max-md:text-2xl">
          {day}
        </div>
        <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-orange mt-1 max-md:mt-0">
          {monthShort} {year}
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-2 max-md:flex-col max-md:gap-2">
          <h3 className="font-serif font-normal text-navy text-xl leading-snug max-md:text-lg">
            {event.title}
          </h3>
          <span
            className={`inline-flex items-center gap-1.5 flex-shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase ${
              event.format === 'in-person'
                ? 'bg-orange/15 text-orange'
                : 'bg-ocean/15 text-ocean'
            }`}
          >
            {event.format === 'in-person' ? 'In-Person' : 'Online'}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#6a7a9a] mb-3 flex-wrap">
          <span>{event.time}</span>
          <span className="text-navy/20">|</span>
          <span>{event.location}</span>
        </div>

        <p className="text-sm text-[#5a6a8a] leading-[1.7]">
          {event.description}
        </p>
      </div>
    </div>
  )
}

export default function EventList() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming')

  const upcoming = getUpcomingEvents()
  const past = getPastEvents()
  const list = tab === 'upcoming' ? upcoming : past

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setTab('upcoming')}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
            tab === 'upcoming'
              ? 'bg-navy text-white'
              : 'text-navy/60 hover:text-navy hover:bg-light'
          }`}
        >
          Upcoming ({upcoming.length})
        </button>
        <button
          onClick={() => setTab('past')}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
            tab === 'past'
              ? 'bg-navy text-white'
              : 'text-navy/60 hover:text-navy hover:bg-light'
          }`}
        >
          Past ({past.length})
        </button>
      </div>

      {/* Event list */}
      {list.length === 0 ? (
        <p className="text-[#6a7a9a] text-sm py-12 text-center">
          {tab === 'upcoming'
            ? 'No upcoming events scheduled yet.'
            : 'No past events.'}
        </p>
      ) : (
        <div className="space-y-5">
          {list.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isPast={tab === 'past'}
            />
          ))}
        </div>
      )}
    </div>
  )
}
