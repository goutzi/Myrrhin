'use client'

import EmailSignupForm from '@/components/EmailSignupForm'

export default function FinalCTA() {
  return (
    <section
      id="stay-updated"
      className="bg-navy py-[120px] px-[72px] max-md:py-20 max-md:px-6"
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-12">

        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-orange/85 mb-5">
            Don&apos;t miss the launch
          </p>
          <h2 className="font-serif font-light text-white leading-[1.15] mb-5 text-[clamp(2.2rem,4vw,3.4rem)]">
            The future of maritime education{' '}
            <em className="text-orange not-italic">starts here.</em>
          </h2>
          <p className="text-[17px] text-white/60 leading-[1.7]">
            We&apos;re building something that the industry hasn&apos;t seen before. Be
            part of it from day one — leave your email and we&apos;ll be in touch
            when we&apos;re ready to share more.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[20px] p-[44px_40px]">
          <h3 className="font-serif font-normal text-white text-[1.3rem] mb-2">
            Join the waitlist
          </h3>
          <p className="text-sm text-white/50 mb-6 leading-[1.6]">
            Early subscribers get priority access to our programmes and updates.
          </p>
          <EmailSignupForm variant="dark" buttonLabel="Sign Me Up" />
        </div>

      </div>
    </section>
  )
}
