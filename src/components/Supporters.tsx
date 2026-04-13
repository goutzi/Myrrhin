import { imgPath } from '@/lib/imgPath'

const supporters = [
  {
    name: 'BIMCO',
    logo: '/img/BIMCO2016_Logo_RGB.svg',
  },
  {
    name: 'University of Athens',
    logo: '/img/uni_athens_logo.jpg',
  },
]

export default function Supporters() {
  return (
    <section className="bg-light py-16 px-[72px] max-md:py-12 max-md:px-6">
      <div className="max-w-[1100px] mx-auto">

        <p className="text-center text-[13px] font-bold tracking-[0.18em] uppercase text-orange mb-10">
          Supported by
        </p>

        <div className="flex items-center justify-center gap-16 flex-wrap max-md:gap-10">
          {supporters.map((s) => (
            <img
              key={s.name}
              src={imgPath(s.logo)}
              alt={s.name}
              className="h-16 w-auto object-contain max-md:h-12"
            />
          ))}
        </div>

      </div>
    </section>
  )
}
