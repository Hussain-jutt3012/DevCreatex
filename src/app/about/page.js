import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  Globe2,
  Megaphone,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Award,
} from "lucide-react";

import PageHero from "@/components/common/PageHero";

const values = [
  {
    title: "Our Mission",
    description:
      "Help organizations turn ambitious ideas into reliable digital products that create measurable and lasting value.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "Build a future where advanced technology is practical, accessible and genuinely valuable for businesses of every size.",
    icon: Globe2,
  },
  {
    title: "Our Approach",
    description:
      "Combine clear communication, thoughtful engineering and continuous improvement to deliver solutions that solve real problems.",
    icon: ShieldCheck,
  },
];

const trustReasons = [
  {
    title: "Proven Expertise",
    description:
      "Strong technical expertise across modern software development, AI, cloud, automation and digital transformation.",
    icon: Award,
  },
  {
    title: "Expert Team",
    description:
      "Skilled professionals focused on practical engineering, modern technologies and industry best practices.",
    icon: Users,
  },
  {
    title: "Results-Driven",
    description:
      "We focus on solutions that solve real problems, improve efficiency and support measurable business growth.",
    icon: TrendingUp,
  },
  {
    title: "Global Reach",
    description:
      "Delivering digital solutions for businesses across markets with reliable communication and ongoing support.",
    icon: Globe2,
  },
];

const expertise = [
  {
    title: "Full-Stack Development",
    icon: Code2,
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
  },
  {
    title: "AI Automation",
    icon: Workflow,
  },
  {
    title: "Cloud & DevOps",
    icon: CloudCog,
  },
  {
    title: "Backend & API Development",
    icon: ServerCog,
  },
  {
    title: "Database Solutions",
    icon: Database,
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
  },
  {
    title: "Cyber Security",
    icon: ShieldCheck,
  },
];

const principles = [
  {
    title: "Business First",
    description:
      "Technology decisions should support clear business objectives rather than adding unnecessary complexity.",
  },
  {
    title: "Build for the Long Term",
    description:
      "We value scalable architecture, maintainable code and systems that can evolve as your organization grows.",
  },
  {
    title: "Keep Improving",
    description:
      "Great products are continuously refined through feedback, measurement and learning.",
  },
  {
    title: "Work as One Team",
    description:
      "We believe the best results come from transparent communication and close collaboration with our clients.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <PageHero
        eyebrow="ABOUT DevCreatex"
        title="Building technology with purpose, clarity and ambition."
        description="DevCreatex is a technology company focused on software engineering, intelligent automation and digital solutions that help organizations turn ideas into practical, scalable products."
      />

      {/* WHO WE ARE */}
      <section className="relative py-14 sm:py-18 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            {/* LEFT */}
            <div>
              <span className="eyebrow">WHO WE ARE</span>

              <h2 className="section-title mt-4 max-w-3xl">
                Technology should solve problems, not create new ones.
              </h2>

              <p className="muted mt-5 max-w-2xl text-sm leading-7 sm:text-base">
                DevCreatex brings together software engineering, artificial
                intelligence, automation and digital expertise to help
                businesses build and improve their technology.
              </p>

              <p className="muted mt-4 max-w-2xl text-sm leading-7 sm:text-base">
                We believe successful technology is more than just writing
                code. It requires understanding the problem, choosing the
                right approach, communicating clearly and building systems
                that remain useful as the business evolves.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/services"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Explore Our Services
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  Work With Us
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            {/* RIGHT - DevCreatex MINDSET */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70 p-5 dark:border-white/[0.08] dark:bg-white/[0.025] sm:p-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/[0.08] blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Sparkles size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-500">
                      The DevCreatex Mindset
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                      Think clearly. Build intelligently.
                    </p>
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.07] dark:bg-white/[0.025]">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Innovation with purpose
                    </p>

                    <p className="muted mt-1.5 text-xs leading-5">
                      We explore modern technology while keeping practical
                      business outcomes at the center.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.07] dark:bg-white/[0.025]">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Engineering with responsibility
                    </p>

                    <p className="muted mt-1.5 text-xs leading-5">
                      We aim for reliable, maintainable and scalable solutions
                      rather than short-term fixes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.07] dark:bg-white/[0.025]">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Partnership over process
                    </p>

                    <p className="muted mt-1.5 text-xs leading-5">
                      We work closely with teams to understand challenges and
                      make better technology decisions together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / APPROACH */}
      <section className="relative border-y border-slate-200 dark:border-white/[0.07]">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">WHAT DRIVES US</span>

            <h2 className="section-title mt-4">
              The principles behind DevCreatex.
            </h2>

            <p className="muted mt-4 text-sm leading-7 sm:text-base">
              Our mission, vision and approach guide how we build products,
              work with organizations and make technology decisions.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_20px_50px_rgba(79,70,229,0.07)] dark:border-white/[0.08] dark:bg-white/[0.025] dark:hover:border-indigo-500/20 sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/[0.08] text-indigo-600 dark:text-indigo-400">
                      <Icon size={21} />
                    </div>

                    <span className="text-xs font-bold text-slate-300 dark:text-white/10">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                    {value.title}
                  </h3>

                  <p className="muted mt-3 text-sm leading-6">
                    {value.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-indigo-500 transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CLIENTS TRUST US */}
      <section className="relative py-14 sm:py-18 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">WHY CLIENTS TRUST US</span>

            <h2 className="section-title mt-4">
              Built on expertise, reliability and results.
            </h2>

            <p className="muted mt-4 text-sm leading-7 sm:text-base">
              Our commitment to excellence and proven track record make us a
              trusted technology partner for businesses looking to build,
              improve and scale.
            </p>
          </div>

          {/* 4 EQUAL CARDS — ONE ROW ON DESKTOP */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustReasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_15px_40px_rgba(79,70,229,0.07)] dark:border-white/[0.08] dark:bg-white/[0.025] dark:hover:border-indigo-500/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/[0.08] text-indigo-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-500/[0.13] dark:text-indigo-400">
                      <Icon size={19} />
                    </div>

                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="relative border-y border-slate-200 dark:border-white/[0.07]">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">OUR EXPERTISE</span>

            <h2 className="section-title mt-4">
              Professional expertise across modern technology.
            </h2>

            <p className="muted mt-4 text-sm leading-7 sm:text-base">
              From software engineering and AI to cloud infrastructure,
              automation, mobile applications and cybersecurity, our
              capabilities cover the technology businesses need to grow.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-center gap-3 border-b border-slate-200/80 py-4 dark:border-white/[0.07]"
                  >
                    <CheckCircle2
                      size={18}
                      strokeWidth={1.8}
                      className="shrink-0 text-indigo-500 transition-transform duration-300 group-hover:scale-110 dark:text-indigo-400"
                    />

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/[0.06] text-indigo-500 dark:bg-indigo-500/[0.08] dark:text-indigo-400">
                      <Icon size={15} />
                    </div>

                    <span className="text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-indigo-600 dark:text-slate-300 dark:group-hover:text-indigo-400">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRINCIPLES */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <span className="eyebrow">OUR PRINCIPLES</span>

              <h2 className="section-title mt-4">
                Technology should create clarity not complexity.
              </h2>

              <p className="muted mt-5 text-sm leading-7 sm:text-base">
                We keep our principles simple. Understand the problem,
                communicate clearly, build responsibly and focus on outcomes
                that matter.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/[0.07] dark:bg-white/[0.025] sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/[0.08] text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      0{index + 1}
                    </span>

                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {principle.title}
                    </h3>
                  </div>

                  <p className="muted mt-3 text-sm leading-6">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/[0.07] dark:bg-white/[0.025] sm:p-10 lg:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow">LET&apos;S BUILD TOGETHER</span>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  Have an idea worth building?
                </h2>

                <p className="muted mt-3 text-sm leading-6 sm:text-base">
                  Tell us what you are working on and let&apos;s explore how
                  the right technology can turn your idea into something real.
                </p>
              </div>

              <Link
                href="/contact"
                className="btn-primary inline-flex shrink-0 items-center justify-center gap-2"
              >
                Start a Conversation
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}