"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const technologies = [
  {
    name: "MongoDB",
    icon: "simple-icons:mongodb",
    color: "#47A248",
  },
  {
    name: "React",
    icon: "simple-icons:react",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "simple-icons:nextdotjs",
    color: "#000000",
  },
  {
    name: "Node.js",
    icon: "simple-icons:nodedotjs",
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: "simple-icons:express",
    color: "#000000",
  },
  {
    name: "Python",
    icon: "simple-icons:python",
    color: "#3776AB",
  },
  {
    name: "Django",
    icon: "simple-icons:django",
    color: "#092E20",
  },
  {
    name: "Flask",
    icon: "simple-icons:flask",
    color: "#000000",
  },
  {
    name: "FastAPI",
    icon: "simple-icons:fastapi",
    color: "#009688",
  },
  {
    name: "PostgreSQL",
    icon: "simple-icons:postgresql",
    color: "#4169E1",
  },
  {
    name: "MySQL",
    icon: "simple-icons:mysql",
    color: "#4479A1",
  },
  {
    name: "AWS",
    icon: "simple-icons:amazonaws",
    color: "#FF9900",
  },
  {
    name: "Google Cloud",
    icon: "simple-icons:googlecloud",
    color: "#4285F4",
  },
  {
    name: "Docker",
    icon: "simple-icons:docker",
    color: "#2496ED",
  },
  {
    name: "Tailwind CSS",
    icon: "simple-icons:tailwindcss",
    color: "#06B6D4",
  },
  {
    name: "JavaScript",
    icon: "simple-icons:javascript",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: "simple-icons:typescript",
    color: "#3178C6",
  },
  {
    name: "Redux",
    icon: "simple-icons:redux",
    color: "#764ABC",
  },
  {
    name: "OpenAI",
    icon: "simple-icons:openai",
    color: "#412991",
  },
  {
    name: "Three.js",
    icon: "simple-icons:threedotjs",
    color: "#000000",
  },
  {
    name: "Git",
    icon: "simple-icons:git",
    color: "#F05032",
  },
];

export default function TechStack() {
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section className="relative w-full overflow-hidden py-14 sm:py-16 lg:py-20">
      {/* SECTION HEADING */}

      <div className="container mx-auto mb-10 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.span
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
            className="eyebrow text-center"
          >
            TECHNOLOGIES WE WORK WITH
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 18,
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
              delay: 0.08,
            }}
            className="
              section-title
              mx-auto
              mt-4
              w-full
              max-w-3xl
              text-center
            "
          >
            Powering solutions with modern technologies.
          </motion.h2>

          {/* Description */}
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
              delay: 0.16,
            }}
            className="
              muted
              mx-auto
              mt-4
              w-full
              max-w-2xl
              text-center
              text-sm
              leading-6
              sm:mt-5
              sm:text-base
              sm:leading-7
            "
          >
            We combine modern technologies and powerful tools to
            build scalable, secure and high-performance digital
            solutions.
          </motion.p>
        </div>
      </div>

      {/* TECHNOLOGY MARQUEE */}

      <div className="relative w-full overflow-hidden">
        {/* Left Fade */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-12
            bg-gradient-to-r
            from-white
            via-white/90
            to-transparent
            dark:from-[#070b16]
            dark:via-[#070b16]/90
            dark:to-transparent
            sm:w-20
            md:w-32
            lg:w-40
          "
        />

        {/* Right Fade */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-12
            bg-gradient-to-l
            from-white
            via-white/90
            to-transparent
            dark:from-[#070b16]
            dark:via-[#070b16]/90
            dark:to-transparent
            sm:w-20
            md:w-32
            lg:w-40
          "
        />

        {/* Marquee */}
        <motion.div
          className="
            flex
            w-max
            items-center
            gap-8
            px-6
            sm:gap-10
            sm:px-8
            md:gap-12
            lg:gap-14
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeItems.map(({ name, icon, color }, index) => (
            <motion.div
              key={`${name}-${index}`}
              className="
                group
                flex
                w-[76px]
                shrink-0
                cursor-pointer
                flex-col
                items-center
                justify-center
                sm:w-24
              "
              whileHover={{
                y: -6,
                scale: 1.08,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 18,
              }}
            >
              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: (index % technologies.length) * 0.08,
                }}
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  sm:h-14
                  sm:w-14
                "
              >
                {/* Soft Glow */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-1
                    rounded-full
                    opacity-0
                    blur-xl
                    transition-opacity
                    duration-300
                    group-hover:opacity-40
                  "
                  style={{
                    backgroundColor: color,
                  }}
                />

                {/* Iconify SVG Icon */}
                <Icon
                  icon={icon}
                  width={48}
                  height={48}
                  aria-label={name}
                  style={{
                    color: color,
                  }}
                  className="
                    relative
                    z-10
                    shrink-0
                    transition-all
                    duration-300
                    sm:h-12
                    sm:w-12
                  "
                />
              </motion.div>

              {/* Technology Name */}
              <span
                className="
                  mt-3
                  whitespace-nowrap
                  text-center
                  text-[11px]
                  font-semibold
                  text-slate-600
                  transition-colors
                  duration-300
                  group-hover:text-indigo-600
                  dark:text-slate-300
                  dark:group-hover:text-white
                  sm:text-xs
                "
              >
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}