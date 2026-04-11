'use client'

import { useState } from 'react'
import { getSupabase } from '@/lib/supabase'

type Variant = 'light' | 'dark'

interface Props {
  variant: Variant
  buttonLabel: string
}

export default function EmailSignupForm({ variant, buttonLabel }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setErrorMsg('')

    const { error } = await getSupabase()
      .from('email_signups')
      .insert({ email })

    if (error) {
      // Unique-violation means they already signed up
      if (error.code === '23505') {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg('Something went wrong. Please try again.')
      }
    } else {
      setStatus('success')
      setEmail('')
    }
  }

  if (status === 'success') {
    return (
      <p className={`text-sm font-medium py-3.5 ${variant === 'dark' ? 'text-orange' : 'text-ocean'}`}>
        You&apos;re on the list — we&apos;ll be in touch.
      </p>
    )
  }

  const inputClass =
    variant === 'dark'
      ? 'w-full px-[18px] py-3.5 rounded-[10px] border border-white/15 bg-white/[0.08] text-white text-sm placeholder-white/30 outline-none transition-colors focus:border-white/35 mb-3 font-sans'
      : 'w-full px-[18px] py-3.5 rounded-xl border-[1.5px] border-navy/15 bg-light text-sm text-navy placeholder-[#9aaac4] outline-none transition-colors focus:border-ocean focus:bg-white font-sans'

  const buttonClass =
    variant === 'dark'
      ? 'w-full py-3.5 rounded-[10px] bg-orange text-white text-[15px] font-medium transition-colors hover:bg-[#e07d40] font-sans disabled:opacity-60'
      : 'w-full py-3.5 rounded-xl bg-navy text-white text-[15px] font-medium transition-colors hover:bg-baltic font-sans disabled:opacity-60'

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className={buttonClass}
      >
        {status === 'loading' ? 'Submitting…' : buttonLabel}
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-400 mt-2">{errorMsg}</p>
      )}
    </form>
  )
}
