import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[120px] pb-20 px-[72px] max-w-[1200px] mx-auto max-md:pt-[100px] max-md:pb-15 max-md:px-6 max-md:flex-col">
      <div className="flex-1 max-w-[680px]">
        <div className="inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.12em] uppercase text-orange mb-7">
          <span className="block w-7 h-0.5 bg-orange" />
          Maritime Education Initiative
        </div>

        <h1 className="font-serif font-light text-navy leading-[1.05] tracking-[-0.02em] mb-7 text-[clamp(3rem,5.5vw,5.8rem)]">
          A new standard
          <span className="block italic text-ocean">for the sea.</span>
        </h1>

        <p className="text-[18px] text-[#4a5a7a] leading-[1.7] max-w-[520px] mb-[52px]">
          Myrrihn is a maritime shipping education initiative bringing
          industry-grade knowledge to professionals and students across the
          globe.
        </p>

        <div className="flex items-center gap-7 flex-wrap">
          <Link
            href="#about"
            className="inline-block px-[38px] py-[15px] rounded-full bg-navy text-white text-[15px] font-medium tracking-[0.02em] transition-all hover:bg-baltic hover:-translate-y-px"
          >
            Our Mission
          </Link>
          <Link
            href="#stay-updated"
            className="inline-flex items-center gap-2 text-[15px] text-navy font-medium transition-all hover:gap-3.5 group"
          >
            Join the waitlist
            <span className="text-orange">→</span>
          </Link>
        </div>
      </div>

      <div className="flex-[0_0_420px] flex items-center justify-center max-md:hidden">
        <div className="w-[380px] h-[380px] rounded-full bg-gradient-to-br from-navy to-ocean flex items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center gap-[18px] relative z-10">
            <Image
              src="/img/Wooshy_Only.svg"
              alt=""
              aria-hidden
              width={200}
              height={200}
              className="w-[55%] brightness-0 invert opacity-90"
            />
            <Image
              src="/img/Myrrhin_Text_Only.svg"
              alt="Myrrihn"
              width={200}
              height={40}
              className="w-[58%] brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
