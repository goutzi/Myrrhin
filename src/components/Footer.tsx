import { imgPath } from '@/lib/imgPath'

export default function Footer() {
  return (
    <footer className="bg-[#011d42] px-[72px] py-7 flex items-center justify-between border-t border-white/5 max-md:px-6 max-md:flex-col max-md:gap-3">
      <div className="flex items-center gap-2">
        <img
          src={imgPath('/img/Wooshy_Only.svg')}
          alt=""
          aria-hidden
          className="h-6 w-auto brightness-0 invert opacity-50"
        />
        <img
          src={imgPath('/img/Myrrhin_Text_Only.svg')}
          alt="Myrrihn"
          className="h-[14px] w-auto brightness-0 invert opacity-50"
        />
      </div>
      <p className="text-[13px] text-white/30">
        &copy; 2026 Myrrihn. All rights reserved.
      </p>
    </footer>
  )
}
