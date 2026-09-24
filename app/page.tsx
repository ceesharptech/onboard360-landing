import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-canvas text-text-primary selection:bg-accent/30 selection:text-text-primary">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Social Proof Strip */}
        <SocialProof />

        {/* 4. Core Features Section */}
        <Features />

        {/* 5. How It Works Section */}
        <HowItWorks />
      </main>
    </div>
  );
}
