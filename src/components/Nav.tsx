import Link from 'next/link'
import { imgPath } from '@/lib/imgPath'

interface NavProps {
  variant?: 'home' | 'inner'
}

export default function Nav({ variant = 'home' }: NavProps) {
  const isInner = variant === 'inner'
  const homePrefix = isInner ? '/' : ''

  const logo = (
    <div className="flex items-center gap-2.5 shrink-0">
      <img
        src={imgPath('/img/Wooshy_Only.svg')}
        alt=""
        aria-hidden
        className="h-8 w-auto max-md:h-7"
      />
      <img
        src={imgPath('/img/Myrrhin_Text_Only.svg')}
        alt="Myrrhin"
        className="h-[17px] w-auto max-md:h-[15px]"
      />
    </div>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[72px] h-[72px] bg-white/90 backdrop-blur-md border-b border-navy/[0.08] max-md:px-6 max-md:h-[60px]">
      {isInner ? (
        <Link href="/" className="hover:opacity-80 transition-opacity">
          {logo}
        </Link>
      ) : (
        logo
      )}

      <ul className="flex gap-10 list-none max-md:hidden">
        <li>
          <Link
            href={`${homePrefix}#about`}
            className="text-navy/60 text-sm tracking-[0.03em] transition-colors hover:text-navy"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={`${homePrefix}#team`}
            className="text-navy/60 text-sm tracking-[0.03em] transition-colors hover:text-navy"
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            href="/events"
            className="text-navy/60 text-sm tracking-[0.03em] transition-colors hover:text-navy"
          >
            Events
          </Link>
        </li>
      </ul>

      <Link
        href={`${homePrefix}#stay-updated`}
        className="shrink-0 self-center whitespace-nowrap px-5 py-2 rounded-full bg-navy text-white text-[13px] font-medium tracking-[0.04em] transition-colors hover:bg-baltic max-md:px-4 max-md:text-[12px]"
      >
        Stay Updated
      </Link>
    </nav>
  )
}
