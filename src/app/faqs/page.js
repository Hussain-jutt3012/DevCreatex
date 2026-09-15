"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Code2,
  Megaphone,
  Bot,
  Search,
  Smartphone,
} from "lucide-react";

const categories = [
  {
    id: "development",
    label: "Development",
    icon: Code2,
  },
  {
    id: "ai",
    label: "AI & Automation",
    icon: Bot,
  },
  {
    id: "seo",
    label: "SEO & Local",
    icon: Search,
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    icon: Megaphone,
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: Smartphone,
  },
];

const faqs = [
  // Development
  {
    category: "development",
    question: "What is custom web application development?",
    answer:
      "Custom web application development means building a web-based solution specifically around your business requirements, workflows, and users instead of relying on a generic off-the-shelf system.",
  },
  {
    category: "development",
    question: "Can you develop complex web applications?",
    answer:
      "Yes. We develop scalable web applications with modern frontend frameworks, secure backend systems, databases, APIs, authentication, dashboards, and third-party integrations.",
  },
  {
    category: "development",
    question: "Do you develop SaaS applications?",
    answer:
      "Yes. We develop SaaS products with features such as user accounts, subscriptions, dashboards, role-based permissions, APIs, databases, and scalable backend architecture.",
  },
  {
    category: "development",
    question: "Can you develop an e-commerce website?",
    answer:
      "Yes. We develop custom e-commerce solutions with product management, categories, variants, carts, checkout, authentication, payment integrations, order management, and admin dashboards.",
  },
  {
    category: "development",
    question: "Can you build custom APIs and backend systems?",
    answer:
      "Yes. We build secure and scalable backend systems and REST APIs for websites, mobile applications, SaaS platforms, and third-party integrations.",
  },

  // AI
  {
    category: "ai",
    question: "Do you provide AI and machine learning development?",
    answer:
      "Yes. We develop AI and machine learning solutions based on business requirements, including AI-powered applications, intelligent features, data processing, and model integrations.",
  },
  {
    category: "ai",
    question: "What is AI automation?",
    answer:
      "AI automation combines artificial intelligence with business workflows to reduce repetitive manual work. Examples include automated customer support, document processing, lead handling, and internal business workflows.",
  },
  {
    category: "ai",
    question: "Can you integrate AI into an existing application?",
    answer:
      "Yes. AI capabilities can be integrated into existing websites, SaaS platforms, mobile applications, and business software depending on the product requirements.",
  },
  {
    category: "ai",
    question: "Can you build an AI-powered business solution?",
    answer:
      "Yes. We can help turn an AI-based business concept into a working digital product, from planning and architecture to development, integration, testing, and deployment.",
  },

  // SEO
  {
    category: "seo",
    question: "What is SEO?",
    answer:
      "SEO, or Search Engine Optimization, improves a website's visibility in search engines through useful content, technical improvements, website structure, relevance, and other search ranking factors.",
  },
  {
    category: "seo",
    question: "What is Local SEO?",
    answer:
      "Local SEO focuses on improving a business's visibility for searches related to a specific location. It can include Google Business Profile optimization, local content, citations, and other local search signals.",
  },
  {
    category: "seo",
    question: "What are local citations?",
    answer:
      "Local citations are online mentions of a business's important information, commonly including its name, address, and phone number. Consistent information across relevant platforms can support local search visibility.",
  },
  {
    category: "seo",
    question: "What is GEO in digital marketing?",
    answer:
      "GEO, or Generative Engine Optimization, focuses on making business information easier for AI-powered search and generative systems to understand, discover, and potentially reference for relevant user queries.",
  },
  {
    category: "seo",
    question: "What is AIO or AI Optimization?",
    answer:
      "AI Optimization focuses on improving how a business's online information is structured and presented so AI-driven discovery systems can better understand its services, expertise, and relevance.",
  },
  {
    category: "seo",
    question: "What is the difference between SEO, Local SEO, GEO, and AIO?",
    answer:
      "SEO focuses broadly on search engine visibility, Local SEO focuses on location-based searches, GEO focuses on visibility in generative search experiences, and AIO focuses on making online information easier for AI systems to understand.",
  },
  {
    category: "seo",
    question: "Can you optimize my Google Business Profile?",
    answer:
      "Yes. Google Business Profile optimization can include improving business information, categories, service details, descriptions, local relevance, and other elements that support a stronger local presence.",
  },

  // Digital Marketing
  {
    category: "marketing",
    question: "What digital marketing services do you provide?",
    answer:
      "Our digital marketing services include SEO, Local SEO, local citations, GEO, AIO, Google Ads, Meta Ads, and other strategies designed around a business's goals and target audience.",
  },
  {
    category: "marketing",
    question: "What are Google Ads?",
    answer:
      "Google Ads is a paid advertising platform that allows businesses to promote their products or services across Google Search and other Google advertising networks.",
  },
  {
    category: "marketing",
    question: "What are Meta Ads?",
    answer:
      "Meta Ads are paid advertisements delivered through platforms such as Facebook and Instagram. Campaigns can be targeted based on audience characteristics, interests, behaviors, and campaign objectives.",
  },
  {
    category: "marketing",
    question: "Which is better: Google Ads or Meta Ads?",
    answer:
      "It depends on the business and campaign objective. Google Ads can be effective when users are actively searching for a product or service, while Meta Ads can be useful for audience targeting, awareness, engagement, and demand generation.",
  },
  {
    category: "marketing",
    question: "How quickly can paid advertising generate results?",
    answer:
      "Paid advertising can generate traffic and leads relatively quickly after campaigns are launched, but performance depends on targeting, offer, landing page quality, competition, budget, tracking, and campaign optimization.",
  },
  {
    category: "marketing",
    question: "Can you manage Google Ads and Meta Ads campaigns?",
    answer:
      "Yes. We can help with campaign planning, audience targeting, ad setup, conversion tracking, creative direction, performance monitoring, and ongoing optimization.",
  },

  // Mobile
  {
    category: "mobile",
    question: "Do you develop mobile applications?",
    answer:
      "Yes. We develop mobile applications based on project requirements, including authentication, APIs, databases, dashboards, integrations, and other required application features.",
  },
  {
    category: "mobile",
    question: "Can a mobile app connect with my existing website or backend?",
    answer:
      "Yes. A mobile application can connect with an existing backend through APIs, allowing it to use existing authentication, databases, business logic, and other services where appropriate.",
  },

  // Development General
  {
    category: "development",
    question: "How long does it take to develop a custom application?",
    answer:
      "The timeline depends on the application's complexity, number of features, integrations, design requirements, and testing needs. After understanding the scope, we can provide a more realistic development timeline.",
  },
  {
    category: "development",
    question: "How do I get started with a project?",
    answer:
      "You can contact us with your idea, requirements, or business challenge. We can then discuss the project scope, recommended technology approach, estimated timeline, and next steps.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-200/80 last:border-b-0 dark:border-white/[0.07]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold leading-6 text-slate-800 transition-colors duration-300 dark:text-slate-100 sm:text-[15px]">
          {faq.question}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 dark:border-white/10 dark:text-slate-400 ${
            isOpen
              ? "rotate-180 border-indigo-500/30 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400"
              : ""
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-5 pr-10 text-sm leading-7 text-slate-500 dark:text-slate-400">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("development");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = faqs.filter(
    (faq) => faq.category === activeCategory
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-500/[0.07] blur-[120px] dark:bg-indigo-500/[0.08]" />

        <div className="absolute -right-40 top-[500px] h-80 w-80 rounded-full bg-violet-500/[0.04] blur-[110px]" />

        <div className="absolute -left-40 top-[900px] h-80 w-80 rounded-full bg-cyan-500/[0.03] blur-[110px]" />
      </div>

      <div className="container relative mx-auto">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 pb-14 pt-24 text-center sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/15 bg-indigo-500/[0.06] px-3.5 py-1.5 text-xs font-semibold text-indigo-600 dark:border-indigo-400/15 dark:bg-indigo-400/[0.06] dark:text-indigo-400">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Frequently Asked Questions
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Answers to your{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                questions
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
              Learn more about our custom web applications, mobile app
              development, SaaS solutions, AI automation, SEO, Local SEO,
              GEO, AIO, Google Ads, Meta Ads, and digital marketing services.
            </p>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-6xl">
            {/* Categories */}
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const active = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenIndex(0);
                    }}
                    className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                      active
                        ? "border-indigo-500/20 bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20"
                        : "border-slate-200 bg-white text-slate-600 hover:border-indigo-500/20 hover:text-indigo-500 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-slate-400 dark:hover:text-indigo-400"
                    }`}
                  >
                    <Icon size={15} />
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* FAQ Card */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-white/[0.07] dark:bg-white/[0.025] sm:p-7 lg:p-9"
            >
              {filteredFaqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="border-t border-slate-200/80 px-4 py-20 dark:border-white/[0.07] sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
                  Our Expertise
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Technology and digital solutions built around your goals
                </h2>
              </div>

              <div>
                <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                  DevCreatex provides custom web application development,
                  mobile app development, SaaS solutions, AI and automation,
                  backend systems, and digital marketing services.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  Our digital marketing expertise includes SEO, Local SEO,
                  local citations, GEO, AIO, Google Ads, and Meta Ads. We
                  focus on practical solutions aligned with your business
                  objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-indigo-500/15 bg-gradient-to-br from-indigo-600/[0.08] via-violet-500/[0.05] to-transparent px-6 py-12 text-center dark:border-indigo-400/10 dark:from-indigo-500/[0.10] dark:via-violet-500/[0.06] sm:px-10 lg:py-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Still have questions?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                Tell us what you are looking to build or improve, and our team
                can help you determine the right approach.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-500 hover:to-violet-500 hover:shadow-xl hover:shadow-indigo-500/30"
              >
                Let&apos;s Talk

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-slate-200/80 px-4 py-8 dark:border-white/[0.07] sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              Explore Our Services
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-white/20 sm:block" />

            <Link
              href="/courses"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              Explore Training Institute
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-white/20 sm:block" />

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              Contact Us
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}