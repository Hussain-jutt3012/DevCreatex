"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";

export default function CTA() {
  const benefits = [
    "Free initial consultation",
    "Clear technical direction",
    "Practical next steps",
  ];

  return (
    <section className="relative overflow-hidden py-12 sm:py-14 lg:py-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.08] blur-[90px] sm:h-[360px] sm:w-[360px] sm:blur-[110px]" />

      <div className="container relative mx-auto">
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
            duration: 0.65,
          }}
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-indigo-400/20
            bg-gradient-to-br
            from-[#312e81]
            via-[#4338ca]
            to-[#5b21b6]
            px-5
            py-9
            shadow-[0_20px_60px_rgba(79,70,229,0.18)]
            sm:rounded-3xl
            sm:px-8
            sm:py-11
            md:px-12
            lg:px-16
          "
        >
          {/* =====================================================
              DECORATIVE ELEMENTS
          ====================================================== */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full border border-white/[0.07] sm:h-64 sm:w-64" />

          <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-white/[0.06] sm:h-44 sm:w-44" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-cyan-400/[0.06] blur-3xl" />

          <div className="pointer-events-none absolute left-1/4 top-0 h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Floating icon */}
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-5
              top-5
              hidden
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.07]
              backdrop-blur-md
              sm:flex
              md:right-8
              md:top-8
            "
          >
            <Zap
              size={17}
              className="text-cyan-200"
            />
          </motion.div>

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: 0.08,
              }}
              className="flex items-center justify-center gap-2"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-100/75 sm:text-xs">
                LET&apos;S WORK TOGETHER
              </span>

              <Sparkles
                size={13}
                className="text-cyan-200"
              />
            </motion.div>

            {/* Heading */}
            <motion.h2
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
              }}
              transition={{
                duration: 0.55,
                delay: 0.12,
              }}
              className="
                mt-4
                text-2xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                sm:text-3xl
                md:text-4xl
                lg:text-[42px]
              "
            >
              Have an idea?{" "}
              <span className="text-cyan-200">
                Let&apos;s build it.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
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
              }}
              transition={{
                duration: 0.55,
                delay: 0.18,
              }}
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-xs
                leading-6
                text-indigo-100/70
                sm:text-sm
                sm:leading-7
                md:text-base
              "
            >
              Whether you are launching a new digital product,
              improving an existing system or looking to automate
              your business, DevCreatex can help turn your goals into
              a practical technology roadmap.
            </motion.p>

            {/* =================================================
                BENEFITS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.24,
              }}
              className="
                mt-5
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-4
                gap-y-2.5
                sm:gap-x-6
              "
            >
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-1.5"
                >
                  <CheckCircle2
                    size={13}
                    className="shrink-0 text-cyan-200"
                  />

                  <span className="text-[10px] font-medium text-indigo-100/70 sm:text-xs">
                    {benefit}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.3,
              }}
              className="
                mt-7
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
              <a
                href="/contact"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  text-slate-950
                  shadow-lg
                  shadow-black/10
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-black/20
                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                <CalendarDays
                  size={16}
                  className="text-indigo-600"
                />

                Schedule a Meeting

                <ArrowRight
                  size={15}
                  className="
                    text-indigo-600
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              <a
                href="/contact"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/15
                  bg-white/[0.06]
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  text-white/90
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white/[0.1]
                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                <MessageCircle size={16} />

                Talk to Our Team
              </a>
            </motion.div>

            {/* Small supporting text */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="mt-4 text-[10px] text-indigo-100/40 sm:text-[11px]"
            >
              Tell us what you&apos;re trying to achieve  we&apos;ll
              help you find the right path forward.
            </motion.p>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}