import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Compass,
  Mail,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Trees,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const heroStats = [
  {
    icon: Building2,
    label: 'Publicly featured developments',
    value: '6',
  },
  {
    icon: Trees,
    label: 'Recreational space at Mirian Mepe',
    value: '2,000 m2',
  },
  {
    icon: Clock3,
    label: 'Drive from Tbilisi to New Saguramo',
    value: '25 min',
  },
  {
    icon: Ruler,
    label: 'Apartment sizes from',
    value: '29 m2',
  },
] as const

const featuredProjects = [
  {
    description:
      'A flagship concept envisioned as a large mixed-use destination with residential, office, hospitality and parking infrastructure woven into one landmark address.',
    highlights: [
      'Masterplanned recreational areas',
      'Urban-scale mixed-use positioning',
      'Designed to stand out in south Tbilisi',
    ],
    image: 'https://coloss-development.com/wp-content/uploads/2025/07/CMR_017.webp',
    location: 'Krtsanisi, Tbilisi',
    name: 'Coloss Krtsanisi',
    status: 'Flagship mixed-use concept',
  },
  {
    description:
      'A hillside neighborhood concept in Lisi pairing residential living with commercial and office potential, hospitality functions and integrated parking.',
    highlights: [
      'Residential plus office and retail mix',
      'Transport-ready site planning',
      'A stronger long-term value story for buyers and investors',
    ],
    image: 'https://coloss-development.com/wp-content/uploads/2025/07/01pr.jpg.webp',
    location: 'Lisi, Tbilisi',
    name: 'Coloss Lisi',
    status: 'Upcoming district',
  },
  {
    description:
      'Ten individually designed homes, generous private yards and panoramic views create a nature-first community just beyond the city pace.',
    highlights: [
      '10 unique house designs',
      'Large private outdoor spaces',
      'Close to Tbilisi National Forest Park',
    ],
    image: 'https://coloss-development.com/wp-content/uploads/2025/07/03pr.jpg.webp',
    location: 'New Saguramo',
    name: 'New Saguramo',
    status: 'Private home community',
  },
  {
    description:
      "A 7,500 m2 family-focused development in Didi Dighomi with landscaped courtyards, a children's area, parking and a 2,000 m2 recreation zone.",
    highlights: [
      '7,500 m2 total site',
      '2,000 m2 recreation zone',
      'Low-rise residential comfort in western Tbilisi',
    ],
    image: 'https://coloss-development.com/wp-content/uploads/2025/07/02pr.jpg.webp',
    location: 'Didi Dighomi, Tbilisi',
    name: 'Mirian Mepe',
    status: 'Residential community',
  },
] as const

const portfolioProjects = [
  {
    details: 'Large-scale public presentation and mixed-use planning',
    location: 'Krtsanisi, Tbilisi',
    name: 'Coloss Krtsanisi',
    status: 'Current concept',
  },
  {
    details: 'Hillside project with residential, retail and hospitality potential',
    location: 'Lisi, Tbilisi',
    name: 'Coloss Lisi',
    status: 'Upcoming',
  },
  {
    details: 'Ten-home nature-led community beyond the city core',
    location: 'Saguramo',
    name: 'New Saguramo',
    status: 'Current collection',
  },
  {
    details: 'Low-rise family development with landscaped recreation',
    location: 'Didi Dighomi, Tbilisi',
    name: 'Mirian Mepe',
    status: 'Residential address',
  },
  {
    details: 'Residential building portfolio at a smaller urban scale',
    location: 'Fatmani Street N98, Tbilisi',
    name: 'Fatmani Street N98',
    status: 'Portfolio project',
  },
  {
    details: '7-story building with flexible apartment sizing and payment terms',
    location: 'Tarieli Street N1, Tbilisi',
    name: 'Tarieli Street N1',
    status: 'Residential building',
  },
] as const

const standards = [
  {
    icon: ShieldCheck,
    text: 'High standards across every stage of construction, from structural work to final material decisions.',
    title: 'Quality you can feel',
  },
  {
    icon: Compass,
    text: 'A more modern approach to planning, architecture and technology so every address feels current from day one.',
    title: 'Smarter development thinking',
  },
  {
    icon: Building2,
    text: 'Client-oriented terms, clearer communication and projects shaped around real family routines, not just floor plans.',
    title: 'Buyer-first delivery',
  },
  {
    icon: Trees,
    text: 'Greener courtyards, recreation zones and a wider commitment to sustainable, livable neighborhoods.',
    title: 'Long-term livability',
  },
] as const

const processSteps = [
  {
    number: '01',
    text: 'We begin with location strategy and a clear point of view on how each site should live, move and perform over time.',
    title: 'Land & opportunity',
  },
  {
    number: '02',
    text: 'Architecture, layout logic and public-facing character are developed together so design quality supports sales value.',
    title: 'Design & planning',
  },
  {
    number: '03',
    text: 'Construction is organized around durable execution, predictable progress and amenities that matter in daily life.',
    title: 'Build & deliver',
  },
  {
    number: '04',
    text: 'From presentation to handover, the experience is built to feel premium, transparent and dependable for every buyer.',
    title: 'Sales & handover',
  },
] as const

const galleryImages = [
  {
    alt: 'Coloss residential building facade',
    image: 'https://coloss-development.com/wp-content/uploads/2025/07/04pr.jpg.webp',
  },
  {
    alt: 'Coloss project exterior surrounded by landscaping',
    image: 'https://coloss-development.com/wp-content/uploads/2025/07/05pr.jpg.webp',
  },
  {
    alt: 'Coloss Development exterior view',
    image: 'https://coloss-development.com/wp-content/uploads/2025/07/Screenshot-2025-07-10-115707.webp',
  },
] as const

export const metadata: Metadata = {
  description:
    'Explore Coloss Development projects in Tbilisi, from Krtsanisi and Lisi to Didi Dighomi and New Saguramo.',
  title: 'Residential & Mixed-Use Projects in Tbilisi',
}

type SectionHeadingProps = {
  body: string
  eyebrow: string
  title: string
  tone?: 'dark' | 'light'
}

function SectionHeading({ body, eyebrow, title, tone = 'light' }: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div className="max-w-3xl space-y-4">
      <p
        className={cn(
          'text-xs font-semibold uppercase tracking-[0.28em]',
          isDark ? 'text-[#d7b17a]' : 'text-[#a57946]',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl',
          isDark ? 'text-[#f7efe4]' : 'text-[#1d1711]',
        )}
      >
        {title}
      </h2>
      <p className={cn('max-w-2xl text-base leading-8 md:text-lg', isDark ? 'text-[#dccfbe]' : 'text-[#5d5143]')}>
        {body}
      </p>
    </div>
  )
}

function ProjectCard({
  description,
  highlights,
  image,
  location,
  name,
  status,
}: (typeof featuredProjects)[number]) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#dccfbd] bg-white shadow-[0_24px_60px_rgba(23,18,13,0.08)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          alt={name}
          className="object-cover transition duration-700 group-hover:scale-105"
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 45vw, 100vw"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120f0c]/82 via-[#120f0c]/12 to-transparent" />
        <div className="absolute left-6 right-6 top-6 flex items-start justify-between gap-4">
          <span className="rounded-full border border-white/18 bg-white/12 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
            {status}
          </span>
        </div>
        <div className="absolute inset-x-6 bottom-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">{location}</p>
          <h3 className="font-display mt-2 text-3xl text-white md:text-[2.2rem]">{name}</h3>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <p className="text-sm leading-7 text-[#5d5143]">{description}</p>
        <div className="grid gap-3">
          {highlights.map((highlight) => (
            <div className="flex items-start gap-3 text-sm text-[#2d241b]" key={highlight}>
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#c29254]" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f7f1e7] text-[#1f1a14]">
      <section className="relative isolate overflow-hidden bg-[#120f0c]" id="top">
        <div className="absolute inset-0">
          <Image
            alt="Coloss Krtsanisi hero rendering"
            className="slow-pan object-cover object-center opacity-72"
            fill
            priority
            sizes="100vw"
            src="https://coloss-development.com/wp-content/uploads/2025/07/CMR_017.webp"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(18,15,12,0.96)_8%,rgba(18,15,12,0.72)_38%,rgba(18,15,12,0.4)_68%,rgba(18,15,12,0.9)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(208,164,106,0.28),transparent_36%)]" />
        </div>

        <div className="hero-grid absolute inset-0 opacity-30" />

        <div className="container relative flex min-h-[calc(100vh-82px)] items-end py-14 md:py-20 lg:min-h-[55rem]">
          <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="reveal-up text-xs font-semibold uppercase tracking-[0.34em] text-[#d7b17a]">
                Tbilisi-focused development company
              </p>
              <h1
                className="font-display reveal-up mt-5 text-[3.25rem] leading-[0.9] text-[#f8f1e7] md:text-[5rem] lg:text-[6.35rem]"
                style={{ animationDelay: '120ms' }}
              >
                Building homes, courtyards and city addresses for the next generation.
              </h1>
              <p
                className="reveal-up mt-6 max-w-2xl text-base leading-8 text-[#ddd0bf] md:text-lg"
                style={{ animationDelay: '220ms' }}
              >
                Coloss Development creates more than buildings. It shapes spaces where memories
                begin, traditions take root and modern life in and around Tbilisi feels calmer,
                greener and more valuable over time.
              </p>

              <div
                className="reveal-up mt-8 flex flex-wrap gap-4"
                style={{ animationDelay: '320ms' }}
              >
                <Link
                  className="inline-flex items-center gap-2 rounded-full bg-[#d0a46a] px-6 py-3 text-sm font-semibold text-[#17120d] transition hover:bg-[#ddb67d]"
                  href="/#projects"
                >
                  Explore projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/6 px-6 py-3 text-sm font-semibold text-[#f7efe4] backdrop-blur-sm transition hover:border-[#d7b17a]/75 hover:text-white"
                  href="mailto:info@coloss-development.com"
                >
                  Request a presentation
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div
              className="reveal-up rounded-[2rem] border border-white/12 bg-white/8 p-6 text-[#f7efe4] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md md:p-8"
              style={{ animationDelay: '280ms' }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b17a]">
                Snapshot
              </p>
              <h2 className="font-display mt-3 text-3xl leading-tight md:text-4xl">
                Premium residential momentum across Tbilisi.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#daccbb]">
                From Krtsanisi and Lisi to Didi Dighomi and New Saguramo, the portfolio balances
                landmark visibility, family-friendly planning and better outdoor living.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {heroStats.map((stat) => {
                  const Icon = stat.icon

                  return (
                    <div
                      className="rounded-[1.4rem] border border-white/10 bg-[#1a1510]/65 p-4"
                      key={stat.label}
                    >
                      <Icon className="h-5 w-5 text-[#d7b17a]" />
                      <p className="mt-4 text-[1.75rem] font-semibold text-white">{stat.value}</p>
                      <p className="mt-1 text-sm leading-6 text-[#daccbb]">{stat.label}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32" id="about">
        <div className="container grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="relative overflow-hidden rounded-[2.3rem] bg-[#17120d] p-8 text-[#f7efe4] shadow-[0_28px_80px_rgba(23,18,13,0.2)] md:p-10">
            <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#c89a5a]/18 blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b17a]">
              Company ethos
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[0.95] md:text-5xl">
              We build more than buildings.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#dccfbe]">
              The public Coloss message is clear: these projects are designed as places where
              people live well, gather, raise families and stay connected to the city around them.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d7b17a]">
                  Geography
                </p>
                <p className="mt-3 text-lg text-white">Tbilisi, Didi Dighomi, Lisi, Krtsanisi and Saguramo</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d7b17a]">
                  Focus
                </p>
                <p className="mt-3 text-lg text-white">Residential quality, open space and long-term value</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {standards.map((item) => {
              const Icon = item.icon

              return (
                <article
                  className="rounded-[1.85rem] border border-[#dccfbd] bg-white p-6 shadow-[0_20px_60px_rgba(23,18,13,0.06)]"
                  key={item.title}
                >
                  <div className="inline-flex rounded-full bg-[#f1e3d0] p-3 text-[#a57946]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mt-5 text-[2rem] leading-none text-[#1e1812]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5d5143]">{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-[#efe6da]/65 py-24 md:py-32" id="projects">
        <div className="container">
          <SectionHeading
            body="The best development brands sell a feeling as much as a floor plan. These selected projects show where Coloss can position itself most strongly: landmark mixed-use, green family communities and residential buildings with a more elevated buyer experience."
            eyebrow="Featured projects"
            title="A portfolio shaped around how people actually want to live."
          />

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#d8ccb9] bg-[#d8ccb9]/70">
            <div className="grid gap-px md:grid-cols-2 xl:grid-cols-3">
              {portfolioProjects.map((project) => (
                <article className="bg-white/88 p-6" key={project.name}>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#a57946]">
                      {project.status}
                    </p>
                    <MapPin className="h-4 w-4 text-[#c29254]" />
                  </div>
                  <h3 className="font-display mt-4 text-[2rem] leading-none text-[#1d1711]">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#2f261d]">{project.location}</p>
                  <p className="mt-4 text-sm leading-7 text-[#5d5143]">{project.details}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32" id="standards">
        <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeading
              body="A strong property website should communicate method, not just mood. This section gives Coloss a more premium investor-and-buyer narrative: clear thinking, quality execution and a better handover experience."
              eyebrow="How Coloss can lead"
              title="From land strategy to handover, every touchpoint should feel considered."
            />

            <div className="grid gap-4">
              {processSteps.map((step) => (
                <article
                  className="rounded-[1.7rem] border border-[#dccfbd] bg-white p-6 shadow-[0_18px_50px_rgba(23,18,13,0.06)]"
                  key={step.number}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="font-display text-4xl text-[#c29254]">{step.number}</div>
                    <div>
                      <h3 className="font-display text-[2rem] leading-none text-[#1d1711]">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#5d5143]">{step.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative min-h-[21rem] overflow-hidden rounded-[2rem] md:min-h-[28rem]">
              <Image
                alt={galleryImages[2].alt}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                src={galleryImages[2].image}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,8,0.1),rgba(14,11,8,0.75))]" />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.6rem] border border-white/12 bg-[#17120d]/72 p-6 text-[#f7efe4] backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b17a]">
                  Atmosphere
                </p>
                <h3 className="font-display mt-3 text-3xl leading-tight">
                  Premium, warm and architectural rather than generic real-estate gloss.
                </h3>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {galleryImages.slice(0, 2).map((image) => (
                <div className="relative min-h-[18rem] overflow-hidden rounded-[1.75rem]" key={image.image}>
                  <Image
                    alt={image.alt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 22vw, 100vw"
                    src={image.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32" id="contact">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#15110d] p-8 text-[#f7efe4] shadow-[0_32px_90px_rgba(23,18,13,0.24)] md:p-10 lg:p-14">
            <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-[#c89a5a]/18 blur-3xl" />
            <div className="absolute -bottom-8 right-0 h-56 w-56 rounded-full bg-[#8e6740]/16 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1.04fr_0.96fr]">
              <div>
                <SectionHeading
                  body="Use this home page as the premium front door for coloss.ge: a polished overview of the company, its current projects and the easiest path to book a call, presentation or site visit."
                  eyebrow="Start the conversation"
                  title="Ready to position Coloss Development like a serious Tbilisi builder?"
                  tone="dark"
                />

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    className="inline-flex items-center gap-2 rounded-full bg-[#d0a46a] px-6 py-3 text-sm font-semibold text-[#17120d] transition hover:bg-[#ddb67d]"
                    href="tel:+9950322888877"
                  >
                    Call sales
                    <Phone className="h-4 w-4" />
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-6 py-3 text-sm font-semibold text-[#f7efe4] transition hover:border-[#d7b17a]/70 hover:text-white"
                    href="mailto:info@coloss-development.com"
                  >
                    Email Coloss
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  className="rounded-[1.7rem] border border-white/10 bg-white/6 p-6 transition hover:border-[#d7b17a]/60"
                  href="tel:+9950322888877"
                >
                  <Phone className="h-5 w-5 text-[#d7b17a]" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b17a]">
                    Phone
                  </p>
                  <p className="mt-3 text-lg text-white">+995 032 288 88 77</p>
                </a>
                <a
                  className="rounded-[1.7rem] border border-white/10 bg-white/6 p-6 transition hover:border-[#d7b17a]/60"
                  href="mailto:info@coloss-development.com"
                >
                  <Mail className="h-5 w-5 text-[#d7b17a]" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b17a]">
                    Email
                  </p>
                  <p className="mt-3 text-lg text-white">info@coloss-development.com</p>
                </a>
                <a
                  className="rounded-[1.7rem] border border-white/10 bg-white/6 p-6 transition hover:border-[#d7b17a]/60"
                  href="mailto:support@coloss-development.com"
                >
                  <Mail className="h-5 w-5 text-[#d7b17a]" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b17a]">
                    Support
                  </p>
                  <p className="mt-3 text-lg text-white">support@coloss-development.com</p>
                </a>
                <a
                  className="rounded-[1.7rem] border border-white/10 bg-white/6 p-6 transition hover:border-[#d7b17a]/60"
                  href="https://maps.app.goo.gl/MMtLgUDr6sLE1dQZ9"
                  rel="noreferrer"
                  target="_blank"
                >
                  <MapPin className="h-5 w-5 text-[#d7b17a]" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b17a]">
                    Location
                  </p>
                  <p className="mt-3 text-lg text-white">Coloss Krtsanisi, Tbilisi</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
