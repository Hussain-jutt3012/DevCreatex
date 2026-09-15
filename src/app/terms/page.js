"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
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
              <FileText size={22} />
            </div>

            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-500">
              Legal
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
            These Terms & Conditions govern your use of our website and
            describe the terms that apply when you interact with our services
            and digital content.
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
          <TermsSection title="1. Acceptance of Terms">
            <p>
              By accessing or using this website, you acknowledge that you have
              read, understood, and agreed to these Terms & Conditions.
            </p>

            <p>
              If you do not agree with these terms, please do not use the
              website.
            </p>
          </TermsSection>

          {/* 2 */}
          <TermsSection title="2. Use of the Website">
            <p>
              You agree to use this website only for lawful purposes and in a
              manner that does not interfere with the operation, security, or
              availability of the website.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Do not use the website for unlawful activities.</li>
              <li>
                Do not attempt to gain unauthorized access to our systems.
              </li>
              <li>
                Do not introduce malicious software or harmful content.
              </li>
              <li>Do not misuse or disrupt website functionality.</li>
            </ul>
          </TermsSection>

          {/* 3 */}
          <TermsSection title="3. Services and Information">
            <p>
              Information presented on this website is provided for general
              informational purposes. Service descriptions, features,
              availability, and other information may change without prior
              notice.
            </p>

            <p>
              Any project, development, consulting, or technology service will
              be subject to the specific terms agreed upon between the parties.
            </p>
          </TermsSection>

          {/* 4 */}
          <TermsSection title="4. Intellectual Property">
            <p>
              Unless otherwise stated, the content of this website, including
              text, graphics, logos, designs, layouts, and other materials, is
              owned by or licensed to us and is protected by applicable
              intellectual property laws.
            </p>

            <p>
              You may not reproduce, distribute, modify, or commercially use
              our content without prior written permission.
            </p>
          </TermsSection>

          {/* 5 */}
          <TermsSection title="5. User-Submitted Information">
            <p>
              When you submit information through our website, you are
              responsible for ensuring that the information is accurate and
              that you have the right to provide it.
            </p>

            <p>
              You should not submit confidential, unlawful, or third-party
              information that you are not authorized to share.
            </p>
          </TermsSection>

          {/* 6 */}
          <TermsSection title="6. Third-Party Links and Services">
            <p>
              Our website may contain links to third-party websites, tools, or
              services. These resources are provided for convenience and may be
              subject to their own terms and privacy policies.
            </p>

            <p>
              We are not responsible for the content, availability, security,
              or practices of third-party websites.
            </p>
          </TermsSection>

          {/* 7 */}
          <TermsSection title="7. Disclaimer">
            <p>
              We make reasonable efforts to keep the information on this
              website accurate and up to date. However, we do not guarantee
              that all content will always be complete, accurate, current, or
              error-free.
            </p>
          </TermsSection>

          {/* 8 */}
          <TermsSection title="8. Limitation of Liability">
            <p>
              To the extent permitted by applicable law, we will not be liable
              for indirect, incidental, special, or consequential losses
              arising from your use of or inability to use the website.
            </p>
          </TermsSection>

          {/* 9 */}
          <TermsSection title="9. Website Availability">
            <p>
              We may modify, suspend, or discontinue any part of the website
              temporarily or permanently without prior notice.
            </p>

            <p>
              We do not guarantee uninterrupted or error-free access to the
              website.
            </p>
          </TermsSection>

          {/* 10 */}
          <TermsSection title="10. Changes to These Terms">
            <p>
              We may update these Terms & Conditions from time to time. Changes
              become effective when the updated terms are published on this
              page.
            </p>

            <p>
              Your continued use of the website after changes are published
              indicates your acceptance of the updated terms.
            </p>
          </TermsSection>

          {/* 11 */}
          <TermsSection title="11. Governing Law">
            <p>
              These Terms & Conditions shall be interpreted and applied in
              accordance with applicable laws. Any disputes will be handled
              according to the applicable jurisdiction and legal requirements.
            </p>
          </TermsSection>

          {/* 12 */}
          <TermsSection title="12. Contact Us">
            <p>
              If you have questions regarding these Terms & Conditions, please
              contact us through our{" "}
              <Link
                href="/contact"
                className="font-medium text-indigo-500 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Contact page
              </Link>
              .
            </p>
          </TermsSection>
        </div>
      </section>
    </main>
  );
}

function TermsSection({ title, children }) {
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