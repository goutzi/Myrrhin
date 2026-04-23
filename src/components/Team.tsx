import { imgPath } from '@/lib/imgPath'

const founders = [
  {
    role: 'Founder',
    name: 'Argyris Dimopoulos',
    photo: '/img/Dimopoulos_Portrait.jpg',
    bio: 'A maritime professional with a solid academic and business background in international shipping and finance, he founded Myrrhin to facilitate global connectivity within the shipping industry, aiming to provide networking opportunities for both emerging maritime professionals and seasoned experts in the sector. His work emphasizes shipping markets, maritime strategy, and the sustainable value creation throughout the global shipping landscape.',
    linkedin: 'https://www.linkedin.com/in/argyrisdimopoulos/',
    email: 'argyrisdimopoulos01@gmail.com',
  },
  {
    role: 'Co-Founder',
    name: 'Niko Gkoutziamanis',
    photo: '/img/Gkoutziamanis_Portrait.jpg',
    bio: "Niko grew up in Greece before pursuing his education across the Netherlands and the United States, where he studied Economics, Finance, and Computer Science before building a career in investment banking. Working at the intersection of capital markets and commercial strategy, he developed a sharp understanding of how industries grow and where the gaps are. That experience, combined with a deep passion for the maritime world, is what he brings to Myrrhin.",
    linkedin: 'https://www.linkedin.com/in/niko-gk/',
    email: 'n.gkoutz@gmail.com',
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
          build the professional community the industry has always needed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {founders.map((person) => (
          <div
            key={person.name}
            className="grid grid-cols-1 gap-4 p-6 md:p-9 md:grid-cols-[auto_1fr] md:items-start md:gap-7 rounded-[20px] border border-navy/[0.08] transition-all duration-[250ms] hover:border-navy/[0.16] hover:shadow-[0_8px_40px_rgba(1,45,98,0.08)]"
          >
            <div className="w-[130px] h-[150px] mx-auto md:mx-0 md:w-[110px] md:h-[130px] rounded-[14px] overflow-hidden">
              <img
                src={imgPath(person.photo)}
                alt={person.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="min-w-0 w-full">
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-orange mb-1.5 text-center md:text-left">
                {person.role}
              </p>
              <h3 className="font-serif font-normal text-navy text-xl mb-3 text-center md:text-left">
                {person.name}
              </h3>
              <p className="text-sm text-[#5a6a8a] leading-[1.7] mb-4 break-words">
                {person.bio}
              </p>
              <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-start">
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-navy/[0.12] text-[12px] font-medium text-navy hover:bg-navy hover:text-white transition-all duration-200"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-navy/[0.12] text-[12px] font-medium text-navy hover:bg-navy hover:text-white transition-all duration-200 max-w-full min-w-0"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <span className="hidden md:inline truncate">{person.email}</span>
                  <span className="md:hidden">Email</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
