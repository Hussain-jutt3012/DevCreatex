import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Gauge,
  Layers3,
  LockKeyhole,
  Rocket,
  ServerCog,
  ShieldCheck,
  Workflow,
  Smartphone,
  Megaphone,
} from "lucide-react";

import PageHero from "@/components/common/PageHero";
import ServiceDetails from "@/components/services/ServiceDetails";

export const metadata = {
  title: "Software Development & AI Services | DevCreatex",
  description:
    "DevCreatex provides full stack development, mobile app development, digital marketing, cyber security, AI and machine learning, cloud, DevOps and business automation solutions.",
  keywords: [
    "software development services",
    "full stack development",
    "MERN development",
    "Python development",
    "Django development",
    "Flask development",
    "AI development",
    "machine learning development",
    "TensorFlow development",
    "PyTorch development",
    "AI automation",
    "mobile app development",
    "digital marketing",
    "cyber security",
    "cloud solutions",
    "DevOps services",
    "SDLC software development",
    "custom software development",
  ],
};

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Full Stack Web Development",
    description:
      "Build fast, scalable and maintainable web applications using modern frontend and backend technologies.",
    technologies:
      "React, Next.js, Node.js, Express.js, JavaScript, TypeScript",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "AI & Machine Learning",
    description:
      "Develop intelligent applications, predictive systems and AI-powered features that solve practical business problems.",
    technologies:
      "Python, TensorFlow, PyTorch, Machine Learning, Data Processing",
  },
  {
    icon: Workflow,
    number: "03",
    title: "AI Automation",
    description:
      "Automate repetitive operations, connect business systems and create intelligent workflows that improve productivity.",
    technologies:
      "AI APIs, Python, Workflow Automation, REST APIs, Integrations",
  },
  {
    icon: CloudCog,
    number: "04",
    title: "Cloud & DevOps",
    description:
      "Create reliable deployment pipelines and cloud-ready infrastructure designed for performance, security and scalability.",
    technologies:
      "AWS, Google Cloud, Docker, CI/CD, Linux, Cloud Infrastructure",
  },
  {
    icon: Database,
    number: "05",
    title: "Backend & API Development",
    description:
      "Design secure REST APIs, authentication systems and backend architectures that support modern digital products.",
    technologies:
      "Node.js, Express.js, Python, Django, Flask, REST APIs",
  },
  {
    icon: ServerCog,
    number: "06",
    title: "Database Solutions",
    description:
      "Design efficient data models and database architectures for reliable storage, querying and application performance.",
    technologies:
      "MongoDB, PostgreSQL, MySQL, Mongoose, Database Optimization",
  },
  {
    icon: Smartphone,
    number: "07",
    title: "Mobile App Development",
    description:
      "Build modern, responsive and high-performance mobile applications designed to deliver seamless experiences across devices.",
    technologies:
      "React Native, Expo, JavaScript, REST APIs, Mobile UI/UX",
  },
  {
    icon: Megaphone,
    number: "08",
    title: "Digital Marketing",
    description:
      "Grow your online presence with data-driven digital marketing strategies that attract audiences, generate leads and increase conversions.",
    technologies:
      "SEO, Social Media, Content Marketing, Google Ads, Analytics",
  },
  {
    icon: ShieldCheck,
    number: "09",
    title: "Cyber Security",
    description:
      "Protect your applications, systems and digital infrastructure with practical security solutions designed to reduce risks and threats.",
    technologies:
      "Application Security, Security Audits, OWASP, Threat Detection",
  },
];

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "React Native",
  "Expo",
  "Python",
  "Django",
  "Flask",
  "TensorFlow",
  "PyTorch",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Google Cloud",
  "Docker",
];

const sdlcSteps = [
  {
    number: "01",
    title: "Planning & Discovery",
    icon: Layers3,
    description:
      "We understand your business objectives, users, technical requirements, project scope and expected outcomes before development begins.",
  },
  {
    number: "02",
    title: "Requirements & Analysis",
    icon: GitBranch,
    description:
      "We translate business requirements into functional specifications, technical decisions, priorities and a clear development roadmap.",
  },
  {
    number: "03",
    title: "Architecture & Design",
    icon: ShieldCheck,
    description:
      "Our team defines application architecture, database structure, APIs, security requirements and scalable technology choices.",
  },
  {
    number: "04",
    title: "Development",
    icon: Code2,
    description:
      "Engineers build the product using modern development practices, reusable components, clean code and maintainable architecture.",
  },
  {
    number: "05",
    title: "Testing & Quality",
    icon: Gauge,
    description:
      "Applications are reviewed for functionality, performance, security, responsiveness and reliability before production release.",
  },
  {
    number: "06",
    title: "Deployment & Maintenance",
    icon: Rocket,
    description:
      "We deploy production-ready applications and continue improving performance, features, reliability and scalability as requirements evolve.",
  },
];

const capabilities = [
  "Custom web application development",
  "MERN stack application development",
  "Responsive mobile app development",
  "React Native application development",
  "Python backend development",
  "Django and Flask API development",
  "AI and machine learning integration",
  "TensorFlow and PyTorch solutions",
  "REST API architecture",
  "MongoDB and SQL database design",
  "AWS and cloud-ready infrastructure",
  "Docker and CI/CD workflows",
  "Authentication and authorization",
  "Third-party API integrations",
  "SEO and digital marketing",
  "Application security and security audits",
];

const industries = [
  "SaaS & Technology",
  "Education & E-Learning",
  "E-Commerce",
  "Healthcare Technology",
  "Business Automation",
  "Professional Services",
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      {/* =====================================================
          PAGE HERO
      ====================================================== */}

      <PageHero
        eyebrow="SOFTWARE & TECHNOLOGY SERVICES"
        title="Technology solutions engineered for real business growth."
        description="DevCreatex delivers custom software development, full stack applications, mobile apps, AI solutions, intelligent automation, digital marketing, cyber security, cloud infrastructure and scalable digital products using modern engineering practices."
      />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="relative py-14 sm:py-18 lg:py-22">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
            <div>
              <span className="eyebrow">
                END-TO-END TECHNOLOGY PARTNER
              </span>

              <h2 className="section-title mt-4 max-w-3xl">
                From an initial idea to a production-ready digital solution.
              </h2>
            </div>

            <div>
              <p className="muted text-sm leading-7 sm:text-base">
                Whether you need a customer-facing web application, a
                high-performance backend, a mobile application, an AI-powered
                platform, a secure digital system or an automated business
                workflow, DevCreatex combines strategy, engineering and modern
                technology to create solutions built for long-term growth.
              </p>

              <p className="muted mt-4 text-sm leading-7 sm:text-base">
                Our development approach follows a structured Software
                Development Life Cycle (SDLC), helping keep requirements,
                architecture, development, testing and deployment aligned
                throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE SERVICES
      ====================================================== */}

      <section className="relative pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto">
          <div className="mb-9 max-w-2xl">
            <span className="eyebrow">
              OUR CORE SERVICES
            </span>

            <h2 className="section-title mt-4">
              Practical engineering for modern digital products.
            </h2>

            <p className="muted mt-4 text-sm leading-7 sm:text-base">
              Our services cover the complete technology lifecycle from
              frontend experiences and mobile applications to backend systems,
              artificial intelligence, automation, digital marketing,
              cyber security, databases and cloud infrastructure.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-indigo-200
                    hover:shadow-[0_20px_50px_rgba(79,70,229,0.08)]
                    dark:border-white/[0.08]
                    dark:bg-white/[0.025]
                    dark:hover:border-indigo-500/20
                    sm:p-7
                  "
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-indigo-500/[0.08]
                        text-indigo-600
                        transition-all
                        duration-300
                        group-hover:bg-indigo-600
                        group-hover:text-white
                        dark:text-indigo-400
                      "
                    >
                      <Icon size={21} />
                    </div>

                    <span className="text-xs font-bold tracking-widest text-slate-300 dark:text-white/10">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="muted mt-3 text-sm leading-6">
                    {service.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4 dark:border-white/[0.06]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Technologies
                    </span>

                    <p className="mt-1.5 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {service.technologies}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-semibold
                      text-indigo-600
                      transition-all
                      duration-300
                      group-hover:gap-2.5
                      dark:text-indigo-400
                    "
                  >
                    Discuss this service

                    <ArrowUpRight size={14} />
                  </Link>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-indigo-500 transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXISTING SERVICE DETAILS
      ====================================================== */}

      <ServiceDetails />

      {/* =====================================================
          TECHNOLOGY STACK
      ====================================================== */}

      <section className="relative border-y border-slate-200 py-16 dark:border-white/[0.07] sm:py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              TECHNOLOGY STACK
            </span>

            <h2 className="section-title mt-4">
              Modern technologies for modern engineering.
            </h2>

            <p className="muted mt-4 text-sm leading-7 sm:text-base">
              We select technologies based on project requirements,
              scalability, performance, maintainability and long-term
              business needs not simply because they are popular.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-2.5 sm:gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-3.5
                  py-2
                  text-xs
                  font-medium
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-indigo-200
                  hover:text-indigo-600
                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:text-slate-300
                  dark:hover:border-indigo-500/20
                  dark:hover:text-indigo-400
                  sm:px-4
                  sm:py-2.5
                  sm:text-sm
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SDLC
      ====================================================== */}

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Intro */}

            <div className="lg:sticky lg:top-24 lg:self-start">
              <span className="eyebrow">
                SOFTWARE DEVELOPMENT LIFE CYCLE
              </span>

              <h2 className="section-title mt-4">
                A structured SDLC from discovery to deployment.
              </h2>

              <p className="muted mt-5 text-sm leading-7 sm:text-base">
                A clear development process helps reduce uncertainty,
                improve communication and maintain product quality.
                DevCreatex follows an outcome-focused SDLC that adapts to
                the complexity and requirements of every project.
              </p>

              <div className="mt-7 rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.035] p-5 dark:bg-indigo-500/[0.04]">
                <p className="text-sm font-semibold text-slate-800 dark:text-white/85">
                  Why structured development matters
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400">
                  Clear requirements, predictable milestones, continuous
                  testing and transparent communication help transform
                  ideas into reliable production software.
                </p>
              </div>
            </div>

            {/* Steps */}

            <div className="relative">
              <div className="absolute left-[23px] top-7 hidden h-[calc(100%-55px)] w-px bg-gradient-to-b from-indigo-500/30 via-indigo-500/10 to-transparent sm:block" />

              <div className="grid gap-4">
                {sdlcSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="
                        group
                        relative
                        flex
                        gap-4
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-5
                        transition-all
                        duration-300
                        hover:border-indigo-200
                        hover:shadow-[0_15px_40px_rgba(79,70,229,0.06)]
                        dark:border-white/[0.08]
                        dark:bg-white/[0.025]
                        dark:hover:border-indigo-500/20
                        sm:gap-5
                        sm:p-6
                      "
                    >
                      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/[0.08] text-indigo-600 dark:text-indigo-400">
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold tracking-widest text-indigo-500">
                            {step.number}
                          </span>

                          <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                            {step.title}
                          </h3>
                        </div>

                        <p className="muted mt-2 text-sm leading-6">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING CAPABILITIES
      ====================================================== */}

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 dark:border-white/[0.07] dark:bg-white/[0.025]">
            <div className="grid lg:grid-cols-2">
              <div className="p-7 sm:p-10 lg:p-14">
                <span className="eyebrow">
                  ENGINEERING CAPABILITIES
                </span>

                <h2 className="section-title mt-4">
                  The technical foundation behind our solutions.
                </h2>

                <p className="muted mt-5 max-w-xl text-sm leading-7 sm:text-base">
                  From frontend interfaces and mobile applications to
                  backend architecture, AI systems, digital marketing
                  and security, our capabilities cover the technologies
                  required to build complete digital products.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/[0.07] px-3 py-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    <LockKeyhole size={14} />
                    Security-focused
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/[0.07] px-3 py-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    <Gauge size={14} />
                    Performance-driven
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-white/60 p-7 dark:border-white/[0.07] dark:bg-black/10 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
                <div className="grid gap-3 sm:grid-cols-2">
                  {capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-white p-3.5 dark:border-white/[0.07] dark:bg-white/[0.025]"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-indigo-500"
                      />

                      <span className="text-xs font-medium leading-5 text-slate-600 dark:text-slate-300">
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}

      <section className="relative border-y border-slate-200 py-16 dark:border-white/[0.07] sm:py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              WHERE WE HELP
            </span>

            <h2 className="section-title mt-4">
              Technology built for different business needs.
            </h2>

            <p className="muted mt-4 text-sm leading-7 sm:text-base">
              Our engineering approach can be adapted to startups,
              established organizations and teams modernizing existing
              digital systems.
            </p>
          </div>

          <div className="mx-auto mt-9 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-4
                  text-center
                  text-sm
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-indigo-200
                  hover:text-indigo-600
                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:text-slate-300
                  dark:hover:border-indigo-500/20
                  dark:hover:text-indigo-400
                "
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 px-6 py-10 text-center shadow-[0_25px_70px_rgba(79,70,229,0.18)] sm:px-10 sm:py-12 lg:px-16 lg:py-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-cyan-400/[0.08] blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-100/75 sm:text-xs">
                START YOUR NEXT PROJECT
              </span>

              <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                Have a technology challenge?

                <span className="block text-cyan-200">
                  Let&apos;s solve it together.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-indigo-100/75 sm:text-base">
                Share your idea, business requirement or existing system
                with us. We can help define the right architecture,
                technology stack and development approach.
              </p>

              <Link
                href="/contact"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-slate-950
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:px-6
                  sm:py-3.5
                "
              >
                Discuss Your Project

                <ArrowRight
                  size={17}
                  className="text-indigo-600"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}