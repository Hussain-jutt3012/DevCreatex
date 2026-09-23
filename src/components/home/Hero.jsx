"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  BrainCircuit,
  CloudCog,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/[0.08] blur-[120px]" />
        <div className="absolute left-[-180px] top-[30%] h-[350px] w-[350px] rounded-full bg-violet-500/[0.05] blur-[100px]" />
        <div className="absolute right-[-150px] top-[20%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.05] blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/15 bg-indigo-500/[0.06] px-3 py-1.5">

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
                Digital Engineering Company
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl xl:text-[68px]">
              We build digital
              <span className="block">
                products that
                <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  move businesses forward.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base lg:text-lg lg:leading-8">
              DevCreatex helps businesses turn ideas into scalable software,
              intelligent AI solutions and reliable digital experiences from
              concept to production.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-400"
              >
                Start a Project

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-indigo-500/30 dark:hover:text-indigo-400"
              >
                Explore Services

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Scalable Solutions",
                "Modern Technology",
                "Business-Focused",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    size={15}
                    className="text-indigo-500"
                  />

                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative"
          >
            {/* Main Dashboard */}
            <div className="relative mx-auto max-w-xl">
              {/* Floating Glow */}
              <div className="absolute inset-10 rounded-full bg-indigo-500/[0.12] blur-[80px]" />

              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/80 p-3 shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0b0d14]/90 dark:shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-4">
                {/* Window Header */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/[0.06] dark:bg-white/[0.025]">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>

                  <div className="text-[10px] font-medium text-slate-400">
                    devcreatex.app
                  </div>

                  <div className="h-6 w-6 rounded-lg bg-indigo-500/10" />
                </div>

                {/* Dashboard Content */}
                <div className="mt-3 grid gap-3 sm:grid-cols-[0.75fr_1.25fr]">
                  {/* Sidebar */}
                  <div className="hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/[0.06] dark:bg-white/[0.02] sm:block">
                    <div className="h-7 w-7 rounded-lg bg-indigo-500/10" />

                    <div className="mt-7 space-y-3">
                      {[1, 2, 3, 4, 5].map((item, index) => (
                        <div
                          key={item}
                          className={`h-2 rounded-full ${
                            index === 0
                              ? "w-20 bg-indigo-500/60"
                              : "w-14 bg-slate-200 dark:bg-white/[0.08]"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="mt-10 rounded-xl bg-indigo-500/[0.07] p-3">
                      <div className="h-2 w-12 rounded-full bg-indigo-500/30" />
                      <div className="mt-2 h-2 w-16 rounded-full bg-indigo-500/15" />
                    </div>
                  </div>

                  {/* Main Panel */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.06] dark:bg-white/[0.02] sm:p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                          Project Overview
                        </p>

                        <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                          Digital Platform
                        </p>
                      </div>

                      <div className="rounded-lg bg-green-500/10 px-2 py-1 text-[9px] font-semibold text-green-600 dark:text-green-400">
                        LIVE
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="mt-7 flex h-32 items-end gap-2">
                      {[35, 48, 42, 62, 55, 72, 68, 86, 78, 94].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{
                              duration: 0.7,
                              delay: 0.4 + index * 0.05,
                            }}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-500/70 to-violet-400/30"
                          />
                        )
                      )}
                    </div>

                    {/* Bottom Stats */}
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {[
                        ["98%", "Performance"],
                        ["24/7", "Reliability"],
                        ["3.8x", "Growth"],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="rounded-xl border border-slate-200 p-3 dark:border-white/[0.06]"
                        >
                          <p className="text-sm font-bold text-slate-900 dark:text-white">
                            {value}
                          </p>

                          <p className="mt-1 text-[9px] text-slate-400">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technology Row */}
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-white/[0.06] dark:bg-white/[0.02]">
                    <Code2
                      size={16}
                      className="text-indigo-500"
                    />

                    <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                      Software
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-white/[0.06] dark:bg-white/[0.02]">
                    <BrainCircuit
                      size={16}
                      className="text-violet-500"
                    />

                    <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                      AI & ML
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-white/[0.06] dark:bg-white/[0.02]">
                    <CloudCog
                      size={16}
                      className="text-blue-500"
                    />

                    <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                      Cloud
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#10121a]/90 sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold text-slate-900 dark:text-white">
                      Production Ready
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-400">
                      Built to scale
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Badge */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 top-10 hidden rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#10121a]/90 sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                    <BrainCircuit size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold text-slate-900 dark:text-white">
                      Intelligent Systems
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-400">
                      AI powered
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-16 max-w-5xl border-t border-slate-200/80 pt-7 dark:border-white/[0.07]"
        >
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <p className="text-center text-xs font-medium text-slate-400 sm:text-left">
              Engineering solutions for ambitious businesses
            </p>

            <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
              {[
                "Web Development",
                "AI Solutions",
                "Automation",
                "Cloud & DevOps",
              ].map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium text-slate-500 dark:text-slate-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}