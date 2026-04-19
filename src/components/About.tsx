import UpcomingEvents from '@/components/UpcomingEvents'

export default function About() {
  return (
    <section id="about" className="bg-light py-[120px] px-[72px] max-md:py-20 max-md:px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-[100px] items-start max-md:grid-cols-1 max-md:gap-12">

        {/* Left — mission copy */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-orange mb-5">
            About Myrrhin
          </p>
          <h2 className="font-serif font-light text-navy leading-[1.2] mb-7 text-[clamp(1.8rem,3.5vw,2.8rem)]">
            Built by people who know the industry from the inside out.
          </h2>
          <p className="text-base text-[#4a5a7a] leading-[1.8] mb-[18px]">
            Myrrhin exists because the maritime world deserves education that
            matches the complexity and global scale of modern shipping. We&apos;re
            building programmes grounded in real operational experience — not
            textbook theory.
          </p>
          <p className="text-base text-[#4a5a7a] leading-[1.8] mb-[18px]">
            From commercial shipping operations to port logistics, our
            curriculum will be designed with one question in mind: what do
            professionals actually need to succeed at sea and ashore?
          </p>
          <p className="text-base text-[#4a5a7a] leading-[1.8]">
            We&apos;re at the start of that journey. Join us early.
          </p>

          <div className="flex gap-10 mt-11 pt-10 border-t border-navy/10">
            <div>
              <div className="font-serif font-light text-navy leading-none mb-1.5 text-[2.4rem]">
                90<span className="text-orange">%</span>
              </div>
              <div className="text-[13px] text-[#7a8aaa] tracking-[0.02em]">
                of world trade moves by sea
              </div>
            </div>
            <div>
              <div className="font-serif font-light text-navy leading-none mb-1.5 text-[2.4rem]">
                1.89<span className="text-orange">M</span>
              </div>
              <div className="text-[13px] text-[#7a8aaa] tracking-[0.02em]">
                seafarers worldwide
              </div>
            </div>
          </div>
        </div>

        {/* Right — signup card */}
        <div className="sticky top-[100px] max-md:static">
          <UpcomingEvents />
        </div>

      </div>
    </section>
  )
}
