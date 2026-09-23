"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Film,
  Palette,
  Clock3,
  BarChart3,
} from "lucide-react";

const courses = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Build complete modern web applications from responsive interfaces to scalable backend APIs and databases.",
    duration: "12 Weeks",
    level: "Beginner → Advanced",
    icon: Code2,
    topics: [
      "React & Next.js",
      "Node.js & REST APIs",
      "MongoDB & SQL",
    ],
  },
  {
    number: "02",
    title: "AI Automation",
    description:
      "Learn how to build intelligent workflows that connect AI, APIs and business tools to automate repetitive processes.",
    duration: "8 Weeks",
    level: "Intermediate",
    icon: BrainCircuit,
    topics: [
      "AI Tools & APIs",
      "Workflow Automation",
      "Business Integrations",
    ],
  },
  {
    number: "03",
    title: "Video Editing",
    description:
      "Develop professional video editing skills for social media, marketing campaigns, YouTube and digital content.",
    duration: "8 Weeks",
    level: "Beginner → Intermediate",
    icon: Film,
    topics: [
      "Professional Editing",
      "Motion & Transitions",
      "Content Production",
    ],
  },
  {
    number: "04",
    title: "Graphic Design",
    description:
      "Learn visual design principles and modern creative workflows for branding, digital products and marketing.",
    duration: "8 Weeks",
    level: "Beginner → Intermediate",
    icon: Palette,
    topics: [
      "Brand Identity",
      "UI & Visual Design",
      "Marketing Creatives",
    ],
  },
];

export default function CoursesPreview() {
  return (
    <section className="section relative overflow-hidden">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-indigo-500/[0.045] blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.04] blur-[110px]" />

      <div className="container relative mx-auto">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
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
              className="flex items-center gap-2"
            >
              <span className="eyebrow">
                DevCreatex Traning Institue
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
              className="section-title mt-4 max-w-2xl"
            >
              Learn skills that{" "}
              <span className="gradient-text">
                teams use today.
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
              className="muted mt-5 max-w-2xl text-sm leading-7 sm:text-base"
            >
              Practical, career-focused learning designed to help
              you build real projects, develop in-demand skills and
              understand the workflows used in modern digital teams.
            </motion.p>
          </div>

          {/* Desktop CTA */}
          <motion.div
            initial={{
              opacity: 0,
              x: 15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="hidden shrink-0 lg:block"
          >
            <Link
              href="/courses"
              className="btn-secondary group inline-flex"
            >
              View all courses

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* =====================================================
            COURSE GRID
        ====================================================== */}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map(
            (
              {
                number,
                title,
                description,
                duration,
                level,
                topics,
                icon: Icon,
              },
              index
            ) => (
              <motion.div
                key={title}
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
                  delay: index * 0.08,
                }}
                className="group relative"
              >
                <div
                  className="
                    relative
                    flex
                    h-full
                    flex-col
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
                    <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-500/70 dark:text-indigo-400/70">
                      COURSE {number}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="
                        text-slate-300
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-indigo-400
                        dark:text-white/20
                      "
                    />
                  </div>

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <motion.div
                    whileHover={{
                      scale: 1.06,
                      rotate: 4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="
                      relative
                      mt-7
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-indigo-500/10
                      bg-indigo-500/[0.07]
                      text-indigo-500
                      transition-all
                      duration-300
                      group-hover:border-indigo-500/20
                      group-hover:bg-indigo-500/10
                      dark:text-indigo-300
                    "
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.7}
                    />
                  </motion.div>

                  {/* =================================================
                      TITLE
                  ================================================== */}

                  <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-xl">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {description}
                  </p>

                  {/* =================================================
                      COURSE META
                  ================================================== */}

                  <div className="relative mt-5 grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-slate-200/70 bg-slate-50/70 px-3 py-2 dark:border-white/[0.05] dark:bg-white/[0.02]">
                      <div className="flex items-center gap-1.5">
                        <Clock3
                          size={13}
                          className="text-indigo-500/70 dark:text-indigo-400/70"
                        />

                        <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                          Duration
                        </span>
                      </div>

                      <p className="mt-1 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                        {duration}
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-200/70 bg-slate-50/70 px-3 py-2 dark:border-white/[0.05] dark:bg-white/[0.02]">
                      <div className="flex items-center gap-1.5">
                        <BarChart3
                          size={13}
                          className="text-indigo-500/70 dark:text-indigo-400/70"
                        />

                        <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                          Level
                        </span>
                      </div>

                      <p className="mt-1 truncate text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                        {level}
                      </p>
                    </div>
                  </div>

                  {/* =================================================
                      WHAT YOU LEARN
                  ================================================== */}

                  <div className="relative mt-6 border-t border-slate-200/70 pt-5 dark:border-white/[0.06]">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-white/30">
                      What you&apos;ll learn
                    </p>

                    <div className="space-y-2.5">
                      {topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-indigo-500/70 dark:text-indigo-400/70"
                          />

                          <span className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      CARD CTA
                  ================================================== */}

                  <Link
                    href="/courses"
                    className="
                      relative
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-indigo-600
                      transition-all
                      duration-300
                      group-hover:gap-3
                      dark:text-indigo-400
                    "
                  >
                    Explore course

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </Link>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500 group-hover:w-1/2" />
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* =====================================================
            MOBILE / TABLET CTA
        ====================================================== */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-8 flex justify-center lg:hidden"
        >
          <Link
            href="/courses"
            className="btn-primary group inline-flex"
          >
            Explore all courses

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* =====================================================
            BOTTOM ACADEMY STATEMENT
        ====================================================== */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-10
            rounded-2xl
            border
            border-indigo-500/10
            bg-gradient-to-r
            from-indigo-500/[0.05]
            via-transparent
            to-cyan-500/[0.04]
            px-5
            py-5
            sm:px-7
            sm:py-6
          "
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                <CheckCircle2
                  size={18}
                  className="text-indigo-500 dark:text-indigo-400"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white/85">
                  Learn by building. Grow by doing.
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Practical learning focused on real-world projects,
                  modern tools and skills you can actually use.
                </p>
              </div>
            </div>

            <Link
              href="/courses"
              className="group inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400"
            >
              Start learning

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}