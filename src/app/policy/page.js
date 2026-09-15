"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#070b16] dark:text-white">
      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
              <ShieldCheck size={22} />
            </div>

            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-500">
              Legal
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
            Your privacy matters to us. This Privacy Policy explains how we
            collect, use, protect, and handle information when you visit our
            website or contact us.
          </p>

          <p className="mt-4 text-xs text-slate-400">
            Last updated: September 12, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-10">

          {/* 1 */}
          <PolicySection title="1. Information We Collect">
            <p>
              We may collect information that you voluntarily provide when you
              contact us, submit an inquiry, request information, or use any
              feature of our website.
            </p>

            <p>
              This information may include your name, email address, phone
              number, company information, and any message or details you
              choose to provide.
            </p>

            <p>
              We may also automatically collect limited technical information,
              such as browser type, device information, IP address, pages
              visited, and general website usage data.
            </p>
          </PolicySection>

          {/* 2 */}
          <PolicySection title="2. How We Use Your Information">
            <p>We may use the information we collect to:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to your inquiries and requests.</li>
              <li>
                Provide information about our services and technology
                solutions.
              </li>
              <li>
                Communicate with you regarding your project or inquiry.
              </li>
              <li>Improve our website, services, and user experience.</li>
              <li>Maintain website security and prevent misuse.</li>
            </ul>
          </PolicySection>

          {/* 3 */}
          <PolicySection title="3. Communication">
            <p>
              If you contact us through our website, we may use the information
              you provide to respond to your inquiry.
            </p>

            <p>
              We do not use your contact information for unrelated purposes
              without a valid reason or your consent where required by
              applicable law.
            </p>
          </PolicySection>

          {/* 4 */}
          <PolicySection title="4. Cookies and Similar Technologies">
            <p>
              Our website may use cookies or similar technologies to improve
              functionality, understand website usage, and provide a better
              browsing experience.
            </p>

            <p>
              You may be able to control or disable cookies through your
              browser settings. Disabling certain cookies may affect some
              website functionality.
            </p>
          </PolicySection>

          {/* 5 */}
          <PolicySection title="5. Third-Party Services">
            <p>
              We may use trusted third-party services to operate, maintain,
              analyze, or improve our website and communications.
            </p>

            <p>
              These third-party providers may process information according to
              their own privacy policies and applicable legal requirements.
            </p>
          </PolicySection>

          {/* 6 */}
          <PolicySection title="6. Data Security">
            <p>
              We take reasonable technical and organizational measures to
              protect information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <p>
              However, no method of transmitting or storing information online
              can be guaranteed to be completely secure.
            </p>
          </PolicySection>

          {/* 7 */}
          <PolicySection title="7. Data Retention">
            <p>
              We retain information only for as long as reasonably necessary
              for the purposes described in this policy, to provide services,
              resolve inquiries, maintain business records, or comply with
              applicable legal obligations.
            </p>
          </PolicySection>

          {/* 8 */}
          <PolicySection title="8. Your Privacy Rights">
            <p>
              Depending on your location and applicable laws, you may have
              rights regarding your personal information, including the right
              to request access, correction, deletion, or restriction of
              certain information.
            </p>

            <p>
              To make a privacy-related request, please contact us using the
              contact information provided on our website.
            </p>
          </PolicySection>

          {/* 9 */}
          <PolicySection title="9. Children's Privacy">
            <p>
              Our website is not intended to knowingly collect personal
              information from children without appropriate authorization.
            </p>

            <p>
              If you believe that a child has provided personal information to
              us, please contact us so that we can take appropriate action.
            </p>
          </PolicySection>

          {/* 10 */}
          <PolicySection title="10. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our services, technology, or legal requirements.
            </p>

            <p>
              Any updated version will be posted on this page with a revised
              "Last updated" date.
            </p>
          </PolicySection>

          {/* 11 */}
          <PolicySection title="11. Contact Us">
            <p>
              If you have questions about this Privacy Policy or how your
              information is handled, please contact us through our{" "}
              <Link
                href="/contact"
                className="font-medium text-indigo-500 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Contact page
              </Link>
              .
            </p>
          </PolicySection>
        </div>
      </section>
    </main>
  );
}

function PolicySection({ title, children }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
        {title}
      </h2>

      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}