import Image from 'next/image'

const founders = [
  {
    role: 'Founder',
    name: 'Argyris Dimopoulos',
    photo: '/img/Dimopoulos_Portrait.jpg',
    bio: 'A career maritime professional with deep roots in commercial shipping operations and industry training. Argyris founded Myrrihn to translate years of operational knowledge into structured, accessible education for the next generation of maritime professionals.',
  },
  {
    role: 'Co-Founder',
    name: 'Niko Gkoutziamanis',
    photo: '/img/Gkoutziamanis_Portrait.jpg',
    bio: 'With a background spanning maritime business and commercial strategy, Niko co-founded Myrrihn to help build the infrastructure, partnerships, and vision needed to bring world-class shipping education to professionals everywhere.',
  },
]

export default function Team() {
  return (
    <section
      id="team"
      className="py-[120px] px-[72px] max-w-[1200px] mx-auto max-md:py-20 max-md:px-6"
    >
      <div className="flex justify-between items-end mb-[72px] max-md:flex-col max-md:items-start max-md:gap-4">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-orange mb-5">
            The Founders
          </p>
          <h2 className="font-serif font-light text-navy leading-[1.15] text-[clamp(2rem,3.5vw,2.8rem)]">
            Two people.<br />One shared conviction.
          </h2>
        </div>
        <p className="max-w-[320px] text-[15px] text-[#6a7a9a] leading-[1.65]">
          Bringing together deep maritime expertise and strategic vision to
          build an education initiative the industry genuinely needs.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
        {founders.map((person) => (
          <div
            key={person.name}
            className="flex gap-7 p-9 rounded-[20px] border border-navy/[0.08] items-start transition-all duration-[250ms] hover:border-navy/[0.16] hover:shadow-[0_8px_40px_rgba(1,45,98,0.08)]"
          >
            <div className="flex-shrink-0 w-[110px] h-[130px] rounded-[14px] overflow-hidden">
              <Image
                src={person.photo}
                alt={person.name}
                width={110}
                height={130}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-orange mb-1.5">
                {person.role}
              </p>
              <h3 className="font-serif font-normal text-navy text-xl mb-3">
                {person.name}
              </h3>
              <p className="text-sm text-[#5a6a8a] leading-[1.7]">
                {person.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
