import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing the use of the Onboard360 software platform, workflow tools, and document management services.",
};

export default function TermsPage() {
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
              Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between your organization (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;) and Onboard360 (&quot;Onboard360,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
              </p>
              <p>
                By signing an order form, registering an account, or accessing the Onboard360 website or software platform (collectively, the &quot;Service&quot;), you agree to be bound by these Terms. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you possess the authority to bind such entity.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                2. Description of the Service
              </h2>
              <p>
                Onboard360 provides a modern web-based software platform for employee onboarding operations. The Service includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>
                  <strong className="text-white">Workflow Builder:</strong> Systems to construct, configure, and assign role-specific onboarding paths, task checklists, and departmental milestones.
                </li>
                <li>
                  <strong className="text-white">Document Pipeline:</strong> Secure repositories for routing, storing, and organizing employee handbooks, compliance policies, and onboarding guides.
                </li>
                <li>
                  <strong className="text-white">Qorra AI Assistant:</strong> An integrated informational tool that indexes verified company documents to provide contextual answers to new hire queries.
                </li>
                <li>
                  <strong className="text-white">Administrative Analytics:</strong> Overview dashboards providing managers and mentors real-time progress visibility.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                3. User Accounts and Workspace Administration
              </h2>
              <p>
                Customer administrators are responsible for designating authorized users, assigning roles, and managing workspace permissions.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of all login credentials associated with your account. You agree to notify Onboard360 immediately upon becoming aware of any unauthorized account access or security breach.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                4. Customer Content and Proprietary Rights
              </h2>
              <p>
                <strong className="text-white">Ownership of Customer Data:</strong> As between Customer and Onboard360, Customer retains all right, title, and interest in and to all documents, handbooks, employee records, and materials uploaded or submitted to the Service (&quot;Customer Content&quot;).
              </p>
              <p>
                <strong className="text-white">Limited License to Onboard360:</strong> Customer grants Onboard360 a non-exclusive, worldwide, royalty-free license to host, process, store, and display Customer Content solely to the extent necessary to provide, secure, and support the Service.
              </p>
              <p>
                <strong className="text-white">Onboard360 Intellectual Property:</strong> Onboard360 retains all right, title, and interest in and to the platform, user interfaces, codebases, algorithms, trademarks, and documentation.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4 border-l-2 border-white/20 pl-4 py-1">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                5. Qorra AI Assistant Terms
              </h2>
              <p>
                Qorra is an internal informational assistant designed to help new hires find answers quickly based on documents uploaded by the employer.
              </p>
              <p>
                Customer acknowledges that AI-generated responses are derived from customer-provided source materials. Employers remain solely responsible for verifying the accuracy of their internal employment policies, legal guidelines, and formal HR decisions.
              </p>
              <p className="text-white">
                We explicitly confirm that customer documents and private employee questions processed by Qorra are not shared with third parties or used to train general public artificial intelligence models.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                6. Acceptable Use Restrictions
              </h2>
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li>Reverse engineer, decompile, or disassemble any aspect of the software.</li>
                <li>Probe, scan, or test the vulnerability of our systems without prior written authorization.</li>
                <li>Upload malicious code, viruses, or harmful files.</li>
                <li>Store or process materials that violate intellectual property rights, privacy rights, or statutory laws.</li>
                <li>Attempt to bypass rate limits, quotas, or access control mechanisms.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                7. Service Availability and Modifications
              </h2>
              <p>
                We use commercially reasonable efforts to ensure the continuous availability of the platform. However, the Service may be occasionally unavailable due to scheduled maintenance, software updates, or emergency infrastructure events.
              </p>
              <p>
                We reserve the right to enhance, upgrade, or modify features of the Service to improve user experience, provided such modifications do not materially degrade core platform functionality.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                8. Disclaimer of Warranties
              </h2>
              <p>
                Except as expressly provided herein, the Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. Onboard360 disclaims all other warranties, whether express, implied, statutory, or otherwise, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                9. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall either party be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business goodwill.
              </p>
              <p>
                Each party&apos;s aggregate liability arising out of or related to these Terms shall be limited to the total fees paid by Customer to Onboard360 under the applicable order form during the twelve (12) months preceding the incident giving rise to liability.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                10. Term and Termination
              </h2>
              <p>
                These Terms remain in effect until all subscriptions granted under an order form have expired or been terminated.
              </p>
              <p>
                Either party may terminate these Terms for cause upon thirty (30) days written notice if the other party materially breaches these Terms and fails to cure such breach within the notice period. Upon termination, Customer shall have thirty (30) days to export Customer Content before data is purged from our active systems.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                11. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without giving effect to any principles of conflicts of law.
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                12. Contact Information
              </h2>
              <p>
                If you have questions regarding these Terms of Service, please reach out to our legal team at:
              </p>
              <p className="text-white font-mono text-sm">
                legal@onboard360.com
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
