"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

const points = [
  {
    title: "Business-first technical strategy",
    description:
      "We start with your business goals, users and operational challenges before selecting the right technology and architecture.",
    icon: Target,
  },
  {
    title: "Production-focused engineering",
    description:
      "Our solutions are built with scalability, performance, security and maintainability in mind from the beginning.",
    icon: Code2,
  },
  {
    title: "Clear communication & delivery",
    description:
      "Stay informed throughout the project with transparent communication, structured milestones and predictable delivery.",
    icon: Users,
  },
  {
    title: "Modern & maintainable architecture",
    description:
      "We use proven modern tools and clean engineering practices to create systems that are easier to maintain and extend.",
    icon: Layers3,
  },
];

const metrics = [
  {
    value: "01",
    label: "Business First",
    icon: Target,
  },
  {
    value: "02",
    label: "Built to Scale",
    icon: Gauge,
  },
  {
    value: "03",
    label: "Secure by Design",
    icon: ShieldCheck,
  },
];

export default function WhyUs() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-indigo-500/[0.05] blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.04] blur-[110px]" />

      <div className="container relative mx-auto">
        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* ================= LEFT ================= */}

          <div>
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex items-center gap-2"
            >
              <span className="eyebrow">
                WHY DevCreatex
              </span>

              <Sparkles
                size={15}
                className="text-indigo-400"
              />
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
                duration: 0.65,
                delay: 0.05,
              }}
              className="section-title mt-4 max-w-xl"
            >
              Technology built around{" "}
              <span className="gradient-text">
                real business outcomes.
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
              className="muted mt-5 max-w-xl text-base leading-7 sm:text-lg"
            >
              Technology should solve problems, not create more of
              them. Devcreatex combines thoughtful strategy, modern
              engineering and practical execution to build digital
              products that deliver measurable value.
            </motion.p>

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
                delay: 0.2,
              }}
              className="muted mt-4 max-w-xl text-sm leading-6"
            >
              Whether you are launching a new product, modernizing
              an existing platform or automating business operations,
              we focus on creating solutions that remain reliable as
              your organization grows.
            </motion.p>

            {/* Mini metrics */}
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: 0.28,
              }}
              className="mt-8 grid grid-cols-3 gap-3 sm:gap-4"
            >
              {metrics.map(
                ({ value, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="
                      rounded-xl
                      border
                      border-slate-200/70
                      bg-white/60
                      p-3
                      dark:border-white/[0.06]
                      dark:bg-white/[0.025]
                      sm:p-4
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold tracking-widest text-slate-400 dark:text-white/25">
                        {value}
                      </span>

                      <Icon
                        size={15}
                        className="text-indigo-500/70 dark:text-indigo-400/70"
                      />
                    </div>

                    <p className="mt-3 text-[10px] font-semibold text-slate-600 dark:text-slate-300 sm:text-xs">
                      {label}
                    </p>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative">
            {/* Decorative line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-indigo-500/15 to-transparent sm:block" />

            <div className="space-y-4 sm:pl-12">
              {points.map(
                (
                  {
                    title,
                    description,
                    icon: Icon,
                  },
                  index
                ) => (
                  <motion.div
                    key={title}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    className="group relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[45px] top-7 hidden h-2.5 w-2.5 rounded-full border-2 border-indigo-400/40 bg-[#070b16] sm:block" />

                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200/70
                        bg-white/70
                        p-5
                        shadow-sm
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-indigo-300/40
                        hover:shadow-[0_18px_50px_rgba(79,70,229,0.08)]
                        dark:border-white/[0.07]
                        dark:bg-white/[0.025]
                        dark:hover:border-indigo-400/20
                        dark:hover:shadow-[0_18px_50px_rgba(79,70,229,0.12)]
                        sm:p-6
                      "
                    >
                      {/* Hover glow */}
                      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-indigo-500/[0.06] blur-3xl transition-all duration-500 group-hover:bg-indigo-500/[0.12]" />

                      <div className="relative flex gap-4">
                        {/* Icon */}
                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            rotate: 4,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                          }}
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-indigo-500/10
                            bg-indigo-500/[0.07]
                            text-indigo-500
                            transition-all
                            duration-300
                            group-hover:bg-indigo-500/10
                            dark:text-indigo-300
                          "
                        >
                          <Icon
                            size={21}
                            strokeWidth={1.7}
                          />
                        </motion.div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-white sm:text-lg">
                              {title}
                            </h3>

                            <ArrowUpRight
                              size={16}
                              className="
                                mt-1
                                shrink-0
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

                          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            {description}
                          </p>

                          <div className="mt-4 flex items-center gap-2">
                            <CheckCircle2
                              size={14}
                              className="text-indigo-500/70 dark:text-indigo-400/70"
                            />

                            <span className="text-[11px] font-medium text-slate-400 dark:text-white/30">
                              DevCreatex engineering principle
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500 group-hover:w-1/3" />
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
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
            mt-12
            overflow-hidden
            rounded-2xl
            border
            border-indigo-500/10
            bg-gradient-to-r
            from-indigo-500/[0.06]
            via-white/[0.02]
            to-cyan-500/[0.04]
            px-5
            py-5
            sm:px-7
            sm:py-6
          "
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                <Zap
                  size={17}
                  className="text-indigo-400"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-800 dark:text-white/85">
                  Built for today. Ready for tomorrow.
                </h3>

                <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500 dark:text-slate-400">
                  We create technology foundations that can adapt,
                  scale and evolve with your business.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>Engineering with purpose</span>

              <ArrowUpRight size={15} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}