import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

import PageHero from "@/components/common/PageHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact DevCreatex | Start Your Digital Project",
  description:
    "Get in touch with DevCreatex to discuss software development, AI automation, cloud solutions and digital projects.",
};

export default function ContactPage() {
  const meetingUrl =
    process.env.NEXT_PUBLIC_MEETING_URL || "#contact";

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <PageHero
        eyebrow="LET'S TALK"
        title="Let's turn your next idea into something real."
        description="Have a project, business challenge or digital idea in mind? Tell us what you're working on and our team will help you identify the right path forward."
      />

      {/* Contact Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
            {/* Contact Information */}
            <div>
              <span className="eyebrow">GET IN TOUCH</span>

              <h2 className="section-title mt-4">
                Tell us what you're building.
              </h2>

              <p className="muted mt-5 max-w-xl text-sm leading-7 sm:text-base">
                Whether you need a new digital product, want to modernize
                an existing system or are exploring automation, we're
                happy to hear about it.
              </p>

              <div className="mt-8 space-y-3">
                {/* Email */}
                <a
                  href="mailto:hello@devcreatex.com"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-sm dark:border-white/[0.08] dark:bg-white/[0.025] dark:hover:border-indigo-500/20"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Mail size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm font-semibold text-slate-800 dark:text-white">
                      info.devcreatex@gmail.com
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.08] dark:bg-white/[0.025]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-white">
                      United States
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.08] dark:bg-white/[0.025]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Clock3 size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Business Hours
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-white">
                      Mon–Fri · 9:00 AM–6:00 PM EST
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      Saturday & Sunday · Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Meeting CTA */}
              <div className="mt-5 rounded-2xl border border-indigo-500/10 bg-indigo-500/[0.045] p-5 dark:bg-indigo-500/[0.06]">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <CalendarDays size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                      Prefer a direct conversation?
                    </h3>

                    <p className="muted mt-1 text-xs leading-5">
                      Schedule a meeting with our team and discuss your
                      project directly.
                    </p>

                    <a
                      href="/contact"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400"
                    >
                      Schedule a Meeting
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              id="contact"
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] dark:border-white/[0.08] dark:bg-white/[0.025] dark:shadow-none sm:p-7 lg:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/[0.07] blur-3xl" />

              <div className="relative mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <MessageSquare size={18} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Send us a message
                    </h3>

                    <p className="muted mt-0.5 text-xs">
                      We'll review your requirements and get back to you.
                    </p>
                  </div>
                </div>
              </div>

              <ContactForm />

              <div className="mt-5 flex items-start gap-2 border-t border-slate-100 pt-4 dark:border-white/[0.06]">
                <ShieldCheck
                  size={15}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />

                <p className="text-[11px] leading-5 text-slate-400">
                  Your project information is treated with care and used
                  only to understand your requirements and respond to your
                  inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/[0.07] dark:bg-white/[0.025] sm:p-8 lg:p-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
                  HAVE A PROJECT IN MIND?
                </p>

                <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                  Let's start with a conversation.
                </h2>

                <p className="muted mt-2 max-w-xl text-sm">
                  No matter where you are in the process, we can help
                  clarify the next step.
                </p>
              </div>

              <Link
                href="/services"
                className="btn-secondary inline-flex shrink-0 items-center justify-center gap-2"
              >
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}