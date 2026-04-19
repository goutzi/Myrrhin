'use client'

import { useCallback } from 'react'
import Nav from '@/components/Nav'
import EventCalendar from '@/components/EventCalendar'
import EventList from '@/components/EventList'
import Footer from '@/components/Footer'

export default function EventsPage() {
  const handleDayClick = useCallback((date: string) => {
    const el = document.getElementById(`event-${date}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      el.classList.add('ring-2', 'ring-orange/40')
      setTimeout(() => el.classList.remove('ring-2', 'ring-orange/40'), 2000)
    }
  }, [])

  return (
    <>
      <Nav variant="inner" />

      <section className="pt-[140px] pb-[120px] px-[72px] max-md:pt-[100px] max-md:pb-20 max-md:px-6">
        <div className="max-w-[1100px] mx-auto">
          {/* Page header */}
          <div className="mb-[72px] max-md:mb-12">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-orange mb-5">
              Events
            </p>
            <h1 className="font-serif font-light text-navy leading-[1.1] text-[clamp(2rem,4vw,3.2rem)] mb-4">
              Workshops, seminars &{' '}
              <span className="italic text-ocean">webinars.</span>
            </h1>
            <p className="text-[18px] text-[#4a5a7a] leading-[1.7] max-w-[600px]">
              Browse our upcoming and past events — from online sessions to
              in-person workshops across major maritime hubs.
            </p>
          </div>

          {/* Calendar + List */}
          <div className="grid grid-cols-[340px_1fr] gap-10 items-start max-lg:grid-cols-1">
            {/* Calendar — sticky on desktop */}
            <div className="sticky top-[90px] max-lg:static">
              <EventCalendar onDayClick={handleDayClick} />
            </div>

            {/* Event list */}
            <EventList />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
