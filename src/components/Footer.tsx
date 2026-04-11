import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#011d42] px-[72px] py-7 flex items-center justify-between border-t border-white/5 max-md:px-6 max-md:flex-col max-md:gap-3">
      <div className="flex items-center gap-2">
        <Image
          src="/img/Wooshy_Only.svg"
          alt=""
          aria-hidden
          width={24}
          height={24}
          className="h-6 w-auto brightness-0 invert opacity-50"
        />
        <Image
          src="/img/Myrrhin_Text_Only.svg"
          alt="Myrrihn"
          width={75}
          height={14}
          className="h-[14px] w-auto brightness-0 invert opacity-50"
        />
      </div>
      <p className="text-[13px] text-white/30">
        &copy; 2026 Myrrihn. All rights reserved.
      </p>
    </footer>
  )
}
