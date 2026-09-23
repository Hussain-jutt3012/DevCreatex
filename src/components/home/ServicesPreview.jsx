"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  CloudCog,
  BrainCircuit,
  Workflow,
  Smartphone,
  Megaphone,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const items = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "We design and develop fast, scalable web applications with modern frontend experiences and reliable backend architecture.",
    features: [
      "Modern Web Applications",
      "RESTful APIs & Backend Systems",
      "Database Architecture",
    ],
    icon: Code2,
  },
  {
    number: "02",
    title: "DevOps & Cloud",
    description:
      "Build reliable, secure and cloud-ready infrastructure that improves deployment speed, application stability and scalability.",
    features: [
      "Cloud Infrastructure",
      "CI/CD & Deployment Pipelines",
      "Monitoring & Scalability",
    ],
    icon: CloudCog,
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "Turn data into intelligent products with practical AI and machine learning solutions designed around real business needs.",
    features: [
      "AI-Powered Applications",
      "Machine Learning Solutions",
      "Data-Driven Intelligence",
    ],
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "AI Automation",
    description:
      "Connect your tools, automate repetitive processes and create intelligent workflows that save time and improve productivity.",
    features: [
      "Business Process Automation",
      "AI Workflow Integration",
      "System & API Automation",
    ],
    icon: Workflow,
  },
  {
    number: "05",
    title: "Mobile App Development",
    description:
      "Build modern, responsive and high-performance mobile applications designed to deliver seamless experiences across devices.",
    features: [
      "Cross-Platform Applications",
      "Modern Mobile UI/UX",
      "API & Backend Integration",
    ],
    icon: Smartphone,
  },
  {
    number: "06",
    title: "Digital Marketing",
    description:
      "Grow your online presence with data-driven digital marketing strategies that attract audiences, generate leads and increase conversions.",
    features: [
      "SEO & Search Marketing",
      "Social Media Marketing",
      "Lead Generation Campaigns",
    ],
    icon: Megaphone,
  },

  // Cyber Security currently disabled
  // {
  //   number: "07",
  //   title: "Cyber Security",
  //   description:
  //     "Protect your applications, systems and digital infrastructure with practical security solutions designed to reduce risks and threats.",
  //   features: [
  //     "Application Security",
  //     "Security Audits & Testing",
  //     "Threat Detection & Protection",
  //   ],
  //   icon: ShieldCheck,
  // },
];

export default function ServicesPreview() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-[-180px] top-1/4 h-[350px] w-[350px] rounded-full bg-indigo-500/[0.05] blur-[110px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-180px] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.04] blur-[110px]" />

      <div className="container relative mx-auto">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="eyebrow">WHAT WE DO</span>

          </motion.div>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.05,
                }}
                className="section-title"
              >
                Solutions engineered around{" "}
                <span className="gradient-text">your business.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.12,
                }}
                className="muted mt-4 max-w-2xl text-sm leading-7 sm:text-base"
              >
                From product development to intelligent automation,
                we combine engineering, cloud, AI and digital
                expertise to build technology that solves real
                business problems.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="shrink-0"
            >
              <Link
                href="/services"
                className="btn-secondary group inline-flex"
              >
                View all services

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        {/* 
          1 card  = mobile
          2 cards = tablet
          3 cards = desktop
          Result: 6 cards = 3 + 3
        */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(
            (
              {
                number,
                title,
                description,
                features,
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
                    border-slate-200/80
                    bg-white/70
                    p-6
                    shadow-sm
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-indigo-300/50
                    hover:shadow-[0_20px_60px_rgba(79,70,229,0.10)]
                    dark:border-white/[0.07]
                    dark:bg-white/[0.025]
                    dark:hover:border-indigo-400/20
                    dark:hover:shadow-[0_20px_60px_rgba(79,70,229,0.12)]
                    sm:p-7
                  "
                >
                  {/* Top Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-indigo-500/[0.08]
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-indigo-500/[0.16]
                    "
                  />

                  {/* Number */}
                  <div className="relative flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-400 dark:text-white/25">
                      {number}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="
                        text-slate-300
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-indigo-400
                        dark:text-white/20
                      "
                    />
                  </div>

                  {/* Icon */}
                  <div className="relative mt-7">
                    <motion.div
                      whileHover={{
                        rotate: 5,
                        scale: 1.05,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="
                        icon-box
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
                        group-hover:text-indigo-400
                        dark:text-indigo-300
                      "
                    >
                      <Icon size={24} strokeWidth={1.7} />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      relative
                      mt-6
                      text-lg
                      font-semibold
                      tracking-tight
                      text-slate-900
                      dark:text-white
                      sm:text-xl
                    "
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      relative
                      mt-3
                      text-sm
                      leading-6
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {description}
                  </p>

                  {/* Features */}
                  <div
                    className="
                      relative
                      mt-6
                      space-y-2.5
                      border-t
                      border-slate-200/70
                      pt-5
                      dark:border-white/[0.06]
                    "
                  >
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2
                          size={14}
                          className="
                            mt-0.5
                            shrink-0
                            text-indigo-500/70
                            dark:text-indigo-400/70
                          "
                        />

                        <span
                          className="
                            text-xs
                            leading-5
                            text-slate-500
                            dark:text-slate-400
                          "
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More */}
                  <Link
                    href="/services"
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
                    Learn more

                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>

                  {/* Bottom Accent */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-indigo-500
                      to-cyan-400
                      transition-all
                      duration-500
                      group-hover:w-1/2
                    "
                  />
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
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
            mt-8
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-slate-200/70
            bg-slate-50/60
            px-5
            py-5
            dark:border-white/[0.06]
            dark:bg-white/[0.02]
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
          "
        >
          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-white/80">
              Have a technology challenge?
            </p>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Let&apos;s turn your idea into a scalable digital solution.
            </p>
          </div>

          <Link
            href="/contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-indigo-600
              dark:text-indigo-400
            "
          >
            Start a conversation

            <ArrowRightIcon />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* Small reusable arrow */
function ArrowRightIcon() {
  return (
    <ArrowUpRight
      size={16}
      className="
        transition-transform
        duration-300
        group-hover:-translate-y-0.5
        group-hover:translate-x-0.5
      "
    />
  );
}