import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  GraduationCap,
  Layers3,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import PageHero from "@/components/common/PageHero";
import CourseGrid from "@/components/courses/CourseGrid";

export const metadata = {
  title: "Courses & Professional Training | DevCreatex/Traning Institue",
  description:
    "Learn practical digital skills through DevCreatex Traning Institute with structured courses in full stack development, AI automation, video editing and graphic design.",
};

const learningPoints = [
  {
    icon: Target,
    title: "Practical Learning",
    description:
      "Learn through hands-on exercises, practical workflows and projects instead of relying only on theory.",
  },
  {
    icon: Code2,
    title: "Modern Tools",
    description:
      "Work with tools and technologies that are relevant to today's digital products and creative workflows.",
  },
  {
    icon: Layers3,
    title: "Structured Roadmaps",
    description:
      "Follow a clear learning path that takes you from fundamentals to practical implementation step by step.",
  },
  {
    icon: GraduationCap,
    title: "Career-Focused Skills",
    description:
      "Build skills that can support freelance work, professional growth, personal projects and real-world opportunities.",
  },
];

const outcomes = [
  "Build practical projects from scratch",
  "Understand modern development and creative workflows",
  "Develop a stronger technical problem-solving approach",
  "Work confidently with industry-standard tools",
  "Create projects for your portfolio",
  "Build a foundation for continuous learning",
];

const courseAreas = [
  "Full Stack Development",
  "AI Automation",
  "Video Editing",
  "Graphic Design",
];

export default function CoursesPage() {
  return (
    <main className="overflow-hidden">
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        eyebrow="DevCreatex"
        title="Build skills that turn ideas into real work."
        description="Practical, structured learning designed to help you understand modern digital tools, build meaningful projects and develop skills you can continue using beyond the classroom."
      />

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="relative py-14 sm:py-18 lg:py-22">
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <span className="eyebrow">
                LEARN BY BUILDING
              </span>

              <h2 className="section-title mt-4 max-w-3xl">
                Education should prepare you to create, not just memorize.
              </h2>

              <p className="muted mt-5 max-w-2xl text-sm leading-7 sm:text-base">
                DevCreatex Training Institute focuses on practical learning. Our courses
                are designed around the way skills are actually used in
                projects understanding concepts, applying them, solving
                problems and building something meaningful.
              </p>

              <p className="muted mt-4 max-w-2xl text-sm leading-7 sm:text-base">
                Whether you are starting your technology journey or looking
                to strengthen an existing skill, the goal is simple:
                give you a clear direction and enough practical experience
                to keep moving forward independently.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#courses"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Explore Courses
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Talk to Us
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            {/* Learning Snapshot */}
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-slate-50/70
                p-6
                dark:border-white/[0.08]
                dark:bg-white/[0.025]
                sm:p-8
              "
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/[0.08] blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <BookOpen size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-indigo-500">
                      Learning Approach
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white">
                      Learn → Practice → Build → Improve
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.07] dark:bg-white/[0.025]">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      04
                    </p>
                    <p className="muted mt-1 text-xs">
                      Learning Areas
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.07] dark:bg-white/[0.025]">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      100%
                    </p>
                    <p className="muted mt-1 text-xs">
                      Practical Focus
                    </p>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.07] dark:bg-white/[0.025]">
                  <div className="flex items-center gap-3">
                    <Users
                      size={18}
                      className="text-indigo-500"
                    />

                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-white">
                        Designed for continuous growth
                      </p>

                      <p className="muted mt-0.5 text-xs">
                        Build a foundation you can keep improving over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING PRINCIPLES
      ====================================================== */}

      <section className="relative border-y border-slate-200 py-16 dark:border-white/[0.07] sm:py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              HOW YOU LEARN
            </span>

            <h2 className="section-title mt-4">
              A learning experience built around practice.
            </h2>

            <p className="muted mt-4 text-sm leading-7 sm:text-base">
              We keep the learning process focused, practical and easy to
              follow so you can spend more time applying your knowledge.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {learningPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-indigo-200
                    hover:shadow-[0_18px_45px_rgba(79,70,229,0.07)]
                    dark:border-white/[0.08]
                    dark:bg-white/[0.025]
                    dark:hover:border-indigo-500/20
                  "
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-indigo-500/[0.08]
                        text-indigo-600
                        transition-all
                        duration-300
                        group-hover:bg-indigo-600
                        group-hover:text-white
                        dark:text-indigo-400
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <span className="text-xs font-bold text-slate-300 dark:text-white/10">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="muted mt-3 text-sm leading-6">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSES
      ====================================================== */}

      <section
        id="courses"
        className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">
                OUR COURSES
              </span>

              <h2 className="section-title mt-4">
                Choose a skill and start building.
              </h2>

              <p className="muted mt-4 text-sm leading-7 sm:text-base">
                Explore focused learning paths across development, AI,
                automation and creative digital skills. Each area is
                designed to help you move from concepts to practical work.
              </p>
            </div>

            <div className="hidden shrink-0 items-center gap-2 text-xs font-semibold text-slate-400 md:flex">
              <Sparkles size={15} className="text-indigo-500" />
              Learn with purpose
            </div>
          </div>

          <CourseGrid />
        </div>
      </section>

      {/* =====================================================
          COURSE AREAS
      ====================================================== */}

      <section className="relative py-14 sm:py-18 lg:py-20">
        <div className="container mx-auto">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 dark:border-white/[0.07] dark:bg-white/[0.025] sm:p-9 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
              <div>
                <span className="eyebrow">
                  LEARNING PATHS
                </span>

                <h2 className="section-title mt-4">
                  Skills across technology and digital creativity.
                </h2>

                <p className="muted mt-4 text-sm leading-7">
                  Different goals require different skills. Our learning
                  areas cover both technical development and creative
                  disciplines, giving learners room to choose a direction
                  that matches their interests.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {courseAreas.map((area, index) => (
                  <div
                    key={area}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-4
                      transition-all
                      duration-300
                      hover:border-indigo-200
                      hover:shadow-sm
                      dark:border-white/[0.07]
                      dark:bg-white/[0.025]
                      dark:hover:border-indigo-500/20
                    "
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/[0.08] text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ====================================================== */}

      <section className="relative border-y border-slate-200 py-16 dark:border-white/[0.07] sm:py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            <div>
              <span className="eyebrow">
                WHAT YOU CAN BUILD
              </span>

              <h2 className="section-title mt-4">
                Turn learning into something you can show.
              </h2>

              <p className="muted mt-5 text-sm leading-7 sm:text-base">
                The strongest learning experience does not end when a
                lesson finishes. It gives you enough understanding to
                apply the skill independently and create work that
                demonstrates what you have learned.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-4
                    dark:border-white/[0.07]
                    dark:bg-white/[0.025]
                  "
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-indigo-500"
                  />

                  <span className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 px-6 py-10 text-center shadow-[0_25px_70px_rgba(79,70,229,0.18)] sm:px-10 sm:py-12 lg:px-16 lg:py-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-cyan-400/[0.08] blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-100/75 sm:text-xs">
                START LEARNING
              </span>

              <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                Your next skill can start with one project.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-indigo-100/75 sm:text-base">
                Choose a learning path, practice consistently and turn
                what you learn into real work.
              </p>

              <Link
                href="#courses"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-slate-950
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:px-6
                  sm:py-3.5
                "
              >
                Explore Learning Paths
                <ArrowRight
                  size={17}
                  className="text-indigo-600"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}