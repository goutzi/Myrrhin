import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[72px] h-[72px] bg-white/90 backdrop-blur-md border-b border-navy/[0.08] max-md:px-6">
      <div className="flex items-center gap-2.5">
        <Image
          src="/img/Wooshy_Only.svg"
          alt=""
          aria-hidden
          width={32}
          height={32}
          className="h-8 w-auto"
        />
        <Image
          src="/img/Myrrhin_Text_Only.svg"
          alt="Myrrihn"
          width={90}
          height={17}
          className="h-[17px] w-auto"
        />
      </div>

      <ul className="flex gap-10 list-none max-md:hidden">
        <li>
          <Link
            href="#about"
            className="text-navy/60 text-sm tracking-[0.03em] transition-colors hover:text-navy"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#team"
            className="text-navy/60 text-sm tracking-[0.03em] transition-colors hover:text-navy"
          >
            Team
          </Link>
        </li>
      </ul>

      <Link
        href="#stay-updated"
        className="px-6 py-2.5 rounded-full bg-navy text-white text-[13px] font-medium tracking-[0.04em] transition-colors hover:bg-baltic"
      >
        Stay Updated
      </Link>
    </nav>
  )
}
