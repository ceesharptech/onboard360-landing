import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Onboard360. Learn how we collect, process, and protect employer, employee, and onboarding workflow data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-canvas text-text-primary selection:bg-accent/30 selection:text-text-primary">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24">
        <Container className="max-w-4xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-white transition-colors"
            >
              <span>←</span>
              <span>Back to home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="border-b border-border-regular pb-8 mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-text-muted">
              Last updated: September 24, 2026
            </p>
          </div>

          {/* Legal Content */}
          <div className="space-y-12 text-sm sm:text-base text-text-muted leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                1. Overview and Scope
              </h2>
              <p>
                Onboard360 (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides an employee onboarding and workflow management platform designed to help organizations streamline new hire task tracking, internal policy distribution, and role-specific workflows.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard information when your organization (&quot;Customer&quot;) and authorized employees, managers, and mentors access or use our software applications, website, and related services (collectively, the &quot;Service&quot;).
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                2. Information We Collect
              </h2>
              <p>
                In providing the Service, we process information on behalf of our Customers as a data processor or service provider. The types of data collected include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>
                  <strong className="text-white">Account and Profile Data:</strong> Names, business email addresses, job titles, department assignments, and authentication credentials provided when administrators or users register.
                </li>
                <li>
                  <strong className="text-white">Onboarding Workflow Data:</strong> Role definitions, checklist progression, task completion timestamps, mentor assignments, and onboarding milestone tracking.
                </li>
                <li>
                  <strong className="text-white">Customer Documentation:</strong> Employee handbooks, policy guides, code of conduct manuals, and operational materials uploaded to the Onboard360 Document Pipeline.
                </li>
                <li>
                  <strong className="text-white">Qorra AI Queries:</strong> Questions submitted by new hires and authorized team members to the Qorra assistant, along with system-generated citations referencing employer documentation.
                </li>
                <li>
                  <strong className="text-white">Technical Usage Data:</strong> IP addresses, browser types, device identifiers, session timestamps, and platform performance metrics collected automatically to secure and maintain the platform.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                3. How We Use Your Information
              </h2>
              <p>We use collected data strictly for legitimate operational purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>Operating, maintaining, and delivering the core features of the Onboard360 platform.</li>
                <li>Routing, indexing, and organizing uploaded policies within your company&apos;s private Document Pipeline.</li>
                <li>Facilitating mentor notifications, task assignments, and checklist completion tracking.</li>
                <li>Grounding Qorra responses exclusively within your organization&apos;s verified materials.</li>
                <li>Protecting the security, integrity, and availability of our infrastructure.</li>
                <li>Complying with statutory legal obligations and enforcing our Terms of Service.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4 border-l-2 border-white/20 pl-4 py-1">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                4. AI Data Protection Commitment
              </h2>
              <p className="text-white">
                We respect the confidentiality of your proprietary internal policies, employee handbooks, and operational guides.
              </p>
              <p>
                Customer documents and internal employee queries processed through Qorra are strictly isolated to your organization&apos;s dedicated workspace. We do not use your private documents, employee queries, or onboarding data to train public artificial intelligence models.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                5. Data Sharing and Third Parties
              </h2>
              <p>
                We do not sell, rent, or trade personal data or proprietary documents. Information is shared only with verified service providers who assist us in operating our platform, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>Cloud hosting and database infrastructure providers adhering to SOC 2 and ISO 27001 standards.</li>
                <li>Secure transactional email and notification delivery services.</li>
                <li>Enterprise authentication and identity verification partners.</li>
              </ul>
              <p>
                All third-party sub-processors are contractually bound by data protection agreements that enforce strict confidentiality and security standards.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                6. Security and Data Retention
              </h2>
              <p>
                We employ industry-standard technical and organizational security measures to protect your data, including TLS 1.3 encryption for data in transit and AES-256 encryption for data at rest.
              </p>
              <p>
                Customer data is retained for the duration of the active subscription agreement. Upon customer request or contract termination, onboarding records and uploaded documents are securely purged in accordance with our data retention schedule and applicable legal requirements.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                7. Your Data Rights
              </h2>
              <p>
                Depending on your geographic location, you or your employees may possess specific statutory rights regarding personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction of inaccurate or incomplete personal records.</li>
                <li>Request deletion or export of your personal onboarding data.</li>
                <li>Object to or restrict specific processing operations.</li>
              </ul>
              <p>
                Because Onboard360 acts primarily as a data processor for our business customers, individual employees should direct initial data access requests to their employer&apos;s HR administrator.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                8. Contact Us
              </h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact our privacy team at:
              </p>
              <p className="text-white font-mono text-sm">
                privacy@onboard360.com
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
