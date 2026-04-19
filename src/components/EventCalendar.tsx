'use client'

import { useState } from 'react'
import { getEventsForMonth } from '@/data/events'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const DAY_HEADERS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

function firstDayOfMonth(year: number, month: number): number {
  return new Date(year, month - 1, 1).getDay()
}

interface EventCalendarProps {
  onDayClick?: (date: string) => void
}

export default function EventCalendar({ onDayClick }: EventCalendarProps) {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth() + 1) // 1-indexed

  const todayISO = now.toISOString().slice(0, 10)
  const totalDays = daysInMonth(year, month)
  const startDay = firstDayOfMonth(year, month)

  const monthEvents = getEventsForMonth(year, month)
  const eventDays = new Set(monthEvents.map((e) => Number(e.date.split('-')[2])))

  function prevMonth() {
    if (month === 1) {
      setYear(year - 1)
      setMonth(12)
    } else {
      setMonth(month - 1)
    }
  }

  function nextMonth() {
    if (month === 12) {
      setYear(year + 1)
      setMonth(1)
    } else {
      setMonth(month + 1)
    }
  }

  function handleDayClick(day: number) {
    if (!eventDays.has(day) || !onDayClick) return
    const iso = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    onDayClick(iso)
  }

  // Build the grid cells
  const cells: (number | null)[] = []
  for (let i = 0; i < startDay; i++) cells.push(null)
  for (let d = 1; d <= totalDays; d++) cells.push(d)

  return (
    <div className="bg-white rounded-[20px] p-8 shadow-[0_2px_40px_rgba(1,45,98,0.08),0_0_0_1px_rgba(1,45,98,0.06)] max-md:p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-navy/60 hover:text-navy hover:bg-light transition-colors"
          aria-label="Previous month"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h3 className="font-serif font-light text-navy text-xl max-md:text-lg">
          {MONTH_NAMES[month - 1]} {year}
        </h3>
        <button
          onClick={nextMonth}
          className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-navy/60 hover:text-navy hover:bg-light transition-colors"
          aria-label="Next month"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAY_HEADERS.map((d, i) => (
          <div
            key={i}
            className="text-center text-[11px] font-semibold tracking-[0.1em] uppercase text-[#7a8aaa] py-1"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7">
        {cells.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} className="aspect-square" />
          }

          const iso = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
          const isToday = iso === todayISO
          const hasEvent = eventDays.has(day)

          return (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              disabled={!hasEvent}
              className={`
                aspect-square flex flex-col items-center justify-center rounded-full
                text-sm transition-colors relative
                min-h-[36px] max-md:min-h-[40px]
                ${isToday ? 'font-bold text-navy ring-1 ring-navy/20' : ''}
                ${hasEvent ? 'bg-orange/15 text-navy font-medium cursor-pointer hover:bg-orange/25' : ''}
                ${!isToday && !hasEvent ? 'text-navy/50' : ''}
              `}
            >
              {day}
              {hasEvent && (
                <span className="absolute bottom-[4px] w-1 h-1 rounded-full bg-orange max-md:bottom-[6px]" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
