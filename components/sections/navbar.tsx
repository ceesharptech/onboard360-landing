"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { DEMO_MAILTO_URL } from "@/lib/constants";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Qorra AI", href: "#qorra" },
  { label: "Impact", href: "#stats" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://app.onboard360.com";

  // Close mobile menu on resize to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Smooth scroll handler with mobile menu dismiss sequence
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);

      if (mobileMenuOpen) {
        // 1. Immediately unlock document body so scroll can happen smoothly
        document.body.style.overflow = "";
        // 2. Animate close the mobile menu
        setMobileMenuOpen(false);

        // 3. Initiate quick smooth scroll synchronized with menu exit
        setTimeout(() => {
          if (element) {
            const navHeight = 64;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - navHeight - 16;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
            window.history.pushState(null, "", href);
          }
        }, 160);
      } else {
        if (element) {
          const navHeight = 64;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navHeight - 16;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          window.history.pushState(null, "", href);
        }
      }
    }
  };

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? { opacity: 0 } : { y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="sticky top-0 z-50 w-full h-16 border-b border-border-subtle bg-canvas/80 backdrop-blur-md transition-colors"
      >
        <Container className="h-full flex items-center justify-between">
          {/* Logo Slot */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-text-primary hover:text-white transition-colors group"
          >
            {/* Monochromatic geometric mark */}
            <div className="w-5 h-5 rounded-full bg-linear-to-r from-white to-neutral-500 flex items-center justify-center group-hover:border-border-strong transition-colors">
              {/* <div className="w-2.5 h-2.5 rounded-sm bg-white" /> */}
            </div>
            <span className="font-medium text-base tracking-tight text-white">
              Onboard360
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-xs font-normal text-text-muted"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-white transition-colors duration-150 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={appUrl}
              className="text-xs font-normal text-text-muted hover:text-white transition-colors px-2 py-1"
            >
              Log in
            </a>
            <div className="h-3.5 w-px bg-border-regular" aria-hidden="true" />
            <Button
              href={DEMO_MAILTO_URL}
              variant="primary"
              size="sm"
            >
              Get a demo
            </Button>
          </div>

          {/* Mobile Menu Trigger (Two horizontal lines that animate into an X) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="relative flex items-center justify-center w-10 h-10 text-text-muted hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/30 rounded-md transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <span
                  className={cn(
                    "absolute w-4 h-[1.5px] bg-white rounded-full transition-transform duration-200 ease-out origin-center",
                    mobileMenuOpen
                      ? "rotate-45 translate-y-0"
                      : "-translate-y-[3.5px]",
                  )}
                />
                <span
                  className={cn(
                    "absolute w-4 h-[1.5px] bg-white rounded-full transition-transform duration-200 ease-out origin-center",
                    mobileMenuOpen
                      ? "-rotate-45 translate-y-0"
                      : "translate-y-[3.5px]",
                  )}
                />
              </div>
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu Overlay: Rendered outside <header> so position: fixed references the true viewport */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] z-40 bg-[#030202]/80 backdrop-blur-2xl [-webkit-backdrop-filter:blur(24px)] border-b border-border-regular px-6 py-8 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-3 text-lg font-normal text-text-secondary">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="min-h-[44px] flex items-center py-2 text-white hover:text-text-secondary transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-border-subtle flex flex-col gap-3">
              <a
                href={appUrl}
                className="min-h-[44px] flex items-center justify-center py-2.5 text-center text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                Log in
              </a>
              <Button
                href={DEMO_MAILTO_URL}
                variant="primary"
                size="lg"
                className="w-full h-11"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
