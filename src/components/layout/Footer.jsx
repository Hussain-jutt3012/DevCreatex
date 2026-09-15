"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const companyLinks = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Training Institute",
    href: "/courses",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const serviceLinks = [
  {
    label: "Full Stack Development",
    href: "/services",
  },
  {
    label: "AI & Automation",
    href: "/services",
  },
  {
    label: "Cloud & DevOps",
    href: "/services",
  },
  {
    label: "Digital Solutions",
    href: "/services",
  },
  {
    label: "Mobile App Development",
    href: "/services",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 dark:border-white/10">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-indigo-500/[0.035] blur-[110px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.025] blur-[110px]" />

      <div className="container relative mx-auto">
        {/* Main Footer */}
        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.35fr] lg:gap-12 lg:py-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-[26px]">
                DevCreatex
                <span className="text-indigo-500">.</span>
              </span>
            </Link>

            <p className="muted mt-4 max-w-sm text-sm leading-7">
              Engineering scalable digital products, intelligent automation
              and future-ready technology solutions that help businesses move
              forward.
            </p>

            {/* Brand Statement */}
            <div className="mt-6 rounded-xl border border-slate-200/70 bg-slate-50/60 p-4 dark:border-white/[0.06] dark:bg-white/[0.025]">
              <p className="text-xs font-semibold text-slate-700 dark:text-white/80">
                Technology with purpose.
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-400">
                Strategy, engineering and innovation working together.
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Company
            </h4>

            <div className="mt-5 grid gap-3">
              {companyLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group inline-flex w-fit items-center gap-1.5 text-sm text-slate-500 transition-colors duration-300 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {item.label}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Services
            </h4>

            <div className="mt-5 grid gap-3">
              {serviceLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group inline-flex w-fit items-center gap-1.5 text-sm text-slate-500 transition-colors duration-300 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {item.label}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Get in touch
            </h4>

            <div className="mt-5 space-y-4">
              {/* Email */}
              <a
                href="mailto:info.devcreatex@gmail.com"
                className="group flex items-start gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/[0.07] text-indigo-500 transition-colors duration-300 group-hover:bg-indigo-500/10 dark:text-indigo-400">
                  <Mail size={15} />
                </div>

                <div>
                  <span className="mt-0.5 block text-xs font-medium text-slate-600 transition-colors duration-300 group-hover:text-indigo-500 dark:text-slate-300 dark:group-hover:text-indigo-400 sm:text-sm">
                    info.devcreatex@gmail.com
                  </span>
                </div>
              </a>

              {/* US Phone */}
              <a
                href="tel:+12125550147"
                className="group flex items-start gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/[0.07] text-indigo-500 transition-colors duration-300 group-hover:bg-indigo-500/10 dark:text-indigo-400">
                  <Phone size={15} />
                </div>

                <div>
                  <span className="mt-0.5 block text-xs font-medium text-slate-600 transition-colors duration-300 group-hover:text-indigo-500 dark:text-slate-300 dark:group-hover:text-indigo-400 sm:text-sm">
                    +1 (212) 555-0147
                  </span>
                </div>
              </a>

              {/* Pakistan Phone */}
              <a
                href="tel:+924235780001"
                className="group flex items-start gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/[0.07] text-indigo-500 transition-colors duration-300 group-hover:bg-indigo-500/10 dark:text-indigo-400">
                  <Phone size={15} />
                </div>

                <div>

                  <span className="mt-0.5 block text-xs font-medium text-slate-600 transition-colors duration-300 group-hover:text-indigo-500 dark:text-slate-300 dark:group-hover:text-indigo-400 sm:text-sm">
                    +92 42 3578 0001
                  </span>
                </div>
              </a>

              {/* Locations */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/[0.07] text-indigo-500 dark:text-indigo-400">
                  <MapPin size={15} />
                </div>

                <div>
                  {/* Locations in one column */}
                  <div className="mt-2 space-y-3">
                    {/* USA */}
                    <div>
                      <p className="text-xs font-medium leading-5 text-slate-600 dark:text-slate-300 sm:text-sm">
                        Manhattan, New York 10001
                      </p>
                    </div>

                    {/* Pakistan */}
                    <div>
                      <p className="text-xs font-medium leading-5 text-slate-600 dark:text-slate-300 sm:text-sm">
                        1046-F Commercial Lake City Meadows, Lahore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Let's Talk Bar */}
        <div className="border-t border-slate-200/80 py-6 dark:border-white/[0.07]">
          <div className="flex flex-col gap-4 rounded-xl border border-indigo-500/10 bg-indigo-500/[0.025] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-white/85">
                Have a project in mind?
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Let&apos;s discuss your goals and find the right technology
                approach.
              </p>
            </div>

            <Link
              href="/contact"
              className="group mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              Let's Talk

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-3 border-t border-slate-200/80 py-5 dark:border-white/[0.07] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} DevCreatex. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <Link
              href="/policy"
              className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
            >
              Privacy Policy
            </Link>

            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-white/20" />

            <Link
              href="/terms"
              className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}