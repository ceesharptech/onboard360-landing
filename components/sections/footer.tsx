import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { DEMO_MAILTO_URL } from "@/lib/constants";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Workflow Builder", href: "#features" },
      { label: "Document Pipeline", href: "#features" },
      { label: "Qorra", href: "#qorra" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: DEMO_MAILTO_URL },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle bg-canvas text-text-muted py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 pb-12 sm:pb-16 border-b border-border-subtle">
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-text-primary hover:text-white transition-colors w-fit group"
            >
              {/* Monochromatic geometric mark matching navbar */}
              <div className="w-5 h-5 rounded-full bg-linear-to-r from-white to-neutral-500 flex items-center justify-center group-hover:border-border-strong transition-colors" />
              <span className="font-medium text-base tracking-tight text-white">
                Onboard360
              </span>
            </Link>
            <p className="text-sm text-text-muted max-w-xs mt-1">
              Onboarding, built like software.
            </p>
          </div>

          {/* Links Columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-text-secondary select-none">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-text-primary transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-faint">
          <p>© 2026 Onboard360. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-text-muted transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-text-muted transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
