"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    shortTitle: "Understand",
    description:
      "We begin by understanding your business goals, target users, current challenges and technical requirements.",
    details: [
      "Business & product goals",
      "User needs & requirements",
      "Technical discovery",
    ],
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    shortTitle: "Plan",
    description:
      "We transform requirements into a clear technical direction with architecture, workflows and an actionable delivery roadmap.",
    details: [
      "System architecture",
      "UX & workflow planning",
      "Technology selection",
    ],
    icon: PenTool,
  },
  {
    number: "03",
    title: "Build",
    shortTitle: "Develop",
    description:
      "Our engineers develop the solution using modern technologies and production-focused practices for quality and scalability.",
    details: [
      "Agile development",
      "API & system integration",
      "Testing & quality assurance",
    ],
    icon: Code2,
  },
  {
    number: "04",
    title: "Improve",
    shortTitle: "Scale",
    description:
      "After launch, we monitor performance, gather insights and continuously improve the product as your business evolves.",
    details: [
      "Deployment & monitoring",
      "Performance optimization",
      "Continuous improvements",
    ],
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="section relative overflow-hidden border-y border-slate-200 dark:border-white/10">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[360px] w-[360px] rounded-full bg-indigo-500/[0.045] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-0 h-[360px] w-[360px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />

      <div className="container relative mx-auto">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex items-center justify-center gap-2"
          >
            <span className="eyebrow">
              OUR PROCESS
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.05,
            }}
            className="section-title mx-auto mt-4 max-w-2xl"
          >
            From strategy to{" "}
            <span className="gradient-text">
              measurable delivery.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
            }}
            className="muted mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base"
          >
            A structured and transparent approach that takes your
            idea from initial discovery to a reliable product that
            can continuously evolve with your business.
          </motion.p>
        </div>

        {/* =====================================================
            PROCESS STEPS
        ====================================================== */}

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[39px] hidden h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent xl:block" />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {steps.map(
              (
                {
                  number,
                  title,
                  description,
                  details,
                  icon: Icon,
                },
                index
              ) => (
                <motion.div
                  key={number}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group relative"
                >
                  {/* =================================================
                      STEP CARD
                  ================================================== */}

                  <div
                    className="
                      relative
                      h-full
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200/70
                      bg-white/70
                      p-6
                      shadow-sm
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-indigo-300/40
                      hover:shadow-[0_20px_60px_rgba(79,70,229,0.09)]
                      dark:border-white/[0.07]
                      dark:bg-white/[0.025]
                      dark:hover:border-indigo-400/20
                      dark:hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)]
                      sm:p-7
                    "
                  >
                    {/* Card Glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-indigo-500/[0.06] blur-3xl transition-all duration-500 group-hover:bg-indigo-500/[0.14]" />

                    {/* =================================================
                        TOP ROW
                    ================================================== */}

                    <div className="relative flex items-center justify-between">
                      {/* Step Number */}
                      <span className="text-xs font-bold tracking-[0.2em] text-indigo-500/70 dark:text-indigo-400/70">
                        {number}
                      </span>

                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-indigo-500/10
                          bg-indigo-500/[0.06]
                          text-indigo-500
                          transition-all
                          duration-300
                          group-hover:border-indigo-500/20
                          group-hover:bg-indigo-500/10
                          group-hover:text-indigo-400
                          dark:text-indigo-300
                        "
                      >
                        <Icon
                          size={20}
                          strokeWidth={1.7}
                        />
                      </div>
                    </div>

                    {/* =================================================
                        TITLE
                    ================================================== */}

                    <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                      {title}
                    </h3>

                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}

                    <p className="relative mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {description}
                    </p>

                    {/* =================================================
                        DETAILS
                    ================================================== */}

                    <div className="relative mt-6 space-y-2.5 border-t border-slate-200/70 pt-5 dark:border-white/[0.06]">
                      {details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-indigo-500/70 dark:text-indigo-400/70"
                          />

                          <span className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* =================================================
                        STEP FOOTER
                    ================================================== */}

                    <div className="relative mt-7 flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-white/25">
                        Phase {number}
                      </span>

                      <ArrowRight
                        size={16}
                        className="
                          text-slate-300
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-indigo-400
                          dark:text-white/20
                        "
                      />
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500 group-hover:w-1/2" />
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* =====================================================
            PROCESS STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-10
            max-w-4xl
            rounded-2xl
            border
            border-indigo-500/10
            bg-gradient-to-r
            from-indigo-500/[0.05]
            via-transparent
            to-cyan-500/[0.04]
            px-5
            py-5
            text-center
            sm:mt-12
            sm:px-8
            sm:py-6
          "
        >
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
              <CheckCircle2
                size={18}
                className="text-indigo-500 dark:text-indigo-400"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-white/85">
                One clear process. One focused outcome.
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Every phase is designed to reduce uncertainty and
                keep your project moving forward.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}