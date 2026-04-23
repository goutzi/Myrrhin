import Link from 'next/link'
import { imgPath } from '@/lib/imgPath'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[120px] pb-20 px-[72px] max-w-[1200px] mx-auto max-md:pt-[100px] max-md:pb-15 max-md:px-6 max-md:flex-col">
      <div className="flex-1 max-w-[680px]">
        <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.12em] uppercase text-orange mb-7">
          <span className="block w-7 h-0.5 bg-orange" />
          The Maritime Professional Network
        </div>

        <h1 className="font-serif font-light text-navy leading-[1.05] tracking-[-0.02em] mb-7 text-[clamp(2.4rem,4.2vw,4.4rem)]">
          Connecting the people
          <span className="block italic text-ocean">who move the world.</span>
        </h1>

        <div className="text-[17px] text-[#4a5a7a] leading-[1.7] max-w-[520px] mb-[52px] space-y-4">
          <p>
            Myrrhin is a non-profit initiative in the maritime sector. Our goal
            is to bridge the gap between industry professionals and the next
            generation of maritime talent.
          </p>
          <ul className="space-y-2 pl-4">
            {[
              'High-impact projects',
              'Industry-grade research reports and newsletters',
              'Networking and career opportunities',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-[9px] block w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-7 flex-wrap">
          <Link
            href="#about"
            className="inline-block px-[38px] py-[15px] rounded-full bg-navy text-white text-[15px] font-medium tracking-[0.02em] transition-all hover:bg-baltic hover:-translate-y-px"
          >
            Our Mission
          </Link>
          <Link
            href="#stay-updated"
            className="inline-flex items-center gap-2 text-[15px] text-navy font-medium transition-all hover:gap-3.5"
          >
            Join the waitlist
            <span className="text-orange">→</span>
          </Link>
        </div>
      </div>

      <div className="flex-[0_0_420px] flex items-center justify-center max-md:hidden">
        <div className="w-[380px] h-[380px] rounded-full bg-gradient-to-br from-navy to-ocean flex items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center gap-[18px] relative z-10">
            <img
              src={imgPath('/img/Wooshy_Only.svg')}
              alt=""
              aria-hidden
              className="w-[55%] brightness-0 invert opacity-90"
            />
            <img
              src={imgPath('/img/Myrrhin_Text_Only.svg')}
              alt="Myrrhin"
              className="w-[58%] brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
