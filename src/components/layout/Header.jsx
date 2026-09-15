"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Training Institute", "/courses"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-[#070b16]/75">
      <div className="container flex h-20 items-center justify-between gap-5">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center"
          aria-label="DevCreatex Home"
        >
          <Image
            src="/images/logo.png"
            alt="DevCreatex"
            width={160}
            height={45}
            priority
            className="h-auto w-[135px] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:w-[150px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className="group relative py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white"
            >
              {name}

              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            Let's Talk

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="icon-btn transition-all duration-300 hover:scale-105"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#070b16] lg:hidden">
          <div className="container flex flex-col gap-2 py-5">
            {links.map(([name, href]) => (
              <Link
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="group relative rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition-all duration-300 hover:translate-x-1 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
              >
                <span className="flex items-center justify-between">
                  {name}

                  <ArrowUpRight
                    size={15}
                    className="translate-x-[-8px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </span>
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
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
      )}
    </header>
  );
}